# Text Chat Remote Connection Debug Report

Generated from a full inspection of the actual repository at
`c:\Users\arjun\OneDrive\Desktop\perfactchat\chat`. Every finding below is tied to a
real file and line number in this codebase — nothing here is a generic checklist.

Correction to the assumed stack: the backend does **not** use Socket.IO or Express,
even though both are listed in `backend/package.json`'s dependencies. The actual
running server (`backend/server.js`) uses Node's raw `http`/`https` module plus the
`ws` package directly. `express` and `socket.io` are unused, dead dependencies.

---

## 1. Executive Summary

- **Frontend**: React (Vite) SPA. WebSocket URL is computed by
  `backend/frontend/src/config.js` → `getWebSocketUrl()`.
- **Backend**: One file, `backend/server.js`. A plain Node `http`/`https` server
  (`createBaseServer()`, line 84) with a `ws` `WebSocket.Server` attached to the
  *same* server instance (line 114). No Express, no Socket.IO in the actual runtime
  path.
- **Matchmaking storage**: In-memory only, module-level (`videoUsers`, `textUsers`,
  `videoWaitingUsers`, `textWaitingUsers` — lines 121-124 of `server.js`). This matches
  the "no database" architecture constraint and is fine **as long as exactly one
  Node process serves all sockets**.
- **One process or many?** **NOT CONFIRMED from the repository.** There is no
  `ecosystem.config.js`, `pm2.config.js`, `Dockerfile`, or cluster code anywhere in
  this repo. If more than one process is running in production, it is being done
  *outside* this codebase (Hostinger panel, manual second `node server.js`, or a
  manually edited nginx/proxy config on the VPS) — invisible to static review.
- **Most likely root cause (not yet fully confirmed):** multiple backend processes
  or an nginx/proxy layer splitting traffic across more than one backend, each with
  its own isolated in-memory queue. This is consistent with everything observed so
  far:
  - The user explicitly reports the issue began "after recent load-balancer-related
    changes" — but no such change exists anywhere in this git history for the app
    code, which means it was made at the infrastructure level.
  - **Reverting `server.js` to an older commit did NOT fix the problem.** This is
    the single strongest piece of evidence in this investigation: it rules out an
    application-logic regression as the cause, because two different versions of the
    matching algorithm exhibit the identical failure. The bug is not in the
    matchmaking code.
  - Remote users get stuck on "Waiting for a partner" — meaning their WebSocket
    **does** connect and they **do** reach the queue (see §7). If it were a
    DNS/proxy/CORS failure, they would never even reach that state. This points
    specifically at "both users are in a queue, but not the *same* queue."
  - Same-Wi-Fi users match fine, which is consistent with them both landing on
    whichever single backend process/instance happens to be reachable at that
    moment, while two geographically/network-separated users are more likely to be
    routed to two different backend processes if more than one exists.
- **Confirmed vs suspected:** The root cause is currently a **HIGHLY LIKELY, not yet
  CONFIRMED** diagnosis. Confirming it requires live evidence from the actual
  Hostinger server (see §15, §19). This session added a `pid` field to the `/health`
  endpoint (`server.js` line 22) and `[SERVER_STARTED]`/`[SOCKET_CONNECTED]` logs
  specifically so this can be confirmed without SSH access, just by refreshing
  `https://perfactchat.com/health` repeatedly.

---

## 2. Current Architecture

```text
User browser (React SPA, built by Vite)
   → backend/frontend/src/config.js: getWebSocketUrl()
   → wss://<same origin as the page>            (production; see §3)
   → Hostinger VPS
   → nginx reverse proxy: backend/nginx.conf, listen 80 → proxy_pass http://127.0.0.1:5002
     (NEEDS LIVE VERIFICATION — see §9, no 443/ssl block is committed to this repo)
   → backend/server.js
       → createBaseServer() (line 84) → http.createServer (or https, if SSL_KEY_PATH/SSL_CERT_PATH set)
       → new WebSocket.Server({ server }) (line 114) — attached to the SAME server object
       → wss.on("connection", ...) (line 416)
       → textWaitingUsers array, module-level (line 124)
       → findPartner() (line 237)
       → user.partner cross-reference (no separate "room" object — see §6)
       → sendToClient(..., { type: "matched" }) to both sockets (lines 290-298)
```

**One process vs multiple:** cannot be determined from the repo. No PM2 config, no
`cluster` usage, no Docker, no multi-port setup exists in any committed file. See §5
and §15 for how to confirm this live.

---

## 3. Frontend Socket Connection Audit

File: `backend/frontend/src/config.js`, function `getWebSocketUrl()` (lines 1-22).

```js
export function getWebSocketUrl() {
  const customUrl = import.meta.env.VITE_WS_URL
  if (customUrl) return customUrl

  const protocol = import.meta.env.VITE_WS_PROTOCOL || (window.location.protocol === "https:" ? "wss" : "ws")
  const configuredHost = import.meta.env.VITE_WS_HOST
  const configuredPort = import.meta.env.VITE_WS_PORT

  if (configuredHost) {
    return `${protocol}://${configuredHost}${configuredPort ? `:${configuredPort}` : ""}`
  }

  if (!import.meta.env.DEV && window.location.host) {
    return `${protocol}://${window.location.host}`     // <-- production path
  }

  const host = window.location.hostname || "localhost"
  const port = configuredPort || "5002"
  return `${protocol}://${host}:${port}`                // <-- dev-only fallback
}
```

- **Status: PASS.** In a production build (`vite build` sets `import.meta.env.DEV =
  false`), the function always returns `${protocol}://${window.location.host}` — the
  exact origin the page was loaded from, protocol-matched (`wss:` when the page is
  `https:`). No hardcoded `localhost`, no private IP, no fixed port.
- The `:5002` fallback (line 20) only executes when `import.meta.env.DEV` is `true`,
  i.e. only in `vite dev`. It is unreachable in the built/production bundle.
- Verified in the actual built bundle (`backend/frontend/dist/assets/index-DTLTpBy7.js`):
  the string `localhost` and `:5002` are present, but only as this same dead
  fallback branch (`window.location.host` is always truthy in a real browser, so the
  `return` on the line above always fires first). **Not a live bug**, just
  unminified dead code — cosmetic only, no action required.
- Reconnection logic lives in `backend/frontend/src/App.jsx`, not `config.js`:
  `connectSocket()` (line 384), `scheduleReconnect()` (line 359) — exponential
  backoff, `MAX_RECONNECT_ATTEMPTS = 6` (line 161), capped at 10s. Handles the
  Wi-Fi ↔ mobile-data handoff case explicitly (see the comment at App.jsx:158-160).
- There is no Socket.IO client anywhere — `new WebSocket(getWebSocketUrl())` directly
  (App.jsx:386). Socket.IO-specific concerns (`transports`, `path`, `withCredentials`)
  do not apply to this codebase.

---

## 4. Backend Socket Server Audit

File: `backend/server.js`.

| Check | Result | Evidence |
|---|---|---|
| Single HTTP(S) server object | PASS | `createBaseServer()` (line 84) returns one `server`; used by both the WS server and `.listen()` |
| WebSocket attached to that same server | PASS | `new WebSocket.Server({ server, ... })` (line 114) |
| Only one `.listen()` call | PASS | Single call at line 741 |
| No competing `app.listen()` | PASS (N/A) | No Express app exists in this file at all |
| CORS configuration | N/A | Raw `ws` upgrade over a same-origin proxy has no CORS layer; not applicable to this architecture |
| `trust proxy` | N/A | No Express in use |
| `/socket.io/` path forwarding | N/A | This app doesn't use Socket.IO; WS upgrade happens at `/` (matches `backend/nginx.conf` location block) |

One real (but separate) regression found here: `config.js` (line 81) calls
`fetch(`${getHttpBaseUrl()}/api/ice-servers`)` expecting short-lived TURN
credentials, but the currently-reverted `server.js` has **no `/api/ice-servers`
route at all** (confirmed by reading the full file — only `/health` and static-file
serving exist). This fails silently (caught, falls back to STUN-only per
`getStaticIceServers()`), so it does **not** explain the text-chat symptom, but it
will degrade **video** call quality on restrictive networks. Flagged for awareness,
not the current bug.

---

## 5. Load Balancer and Multi-Process Audit — CRITICAL

Full-repo search performed for: `cluster`, `cluster.fork`, `require("cluster")`,
`availableParallelism`, `instances`, `exec_mode`, `pm2`, `ecosystem.config`,
`Dockerfile`.

**Result: NOT FOUND anywhere in this repository.** No PM2 config file exists, no
`cluster` module is imported, no Dockerfile exists, no second port or second entry
file exists.

Because the in-memory queue design is correct **only** for a single process, and
because:
1. the user's own account is that this broke after "load-balancer-related changes", and
2. reverting the entire `server.js` file to an earlier commit did not fix it,

the conclusion is: **if multiple processes are the cause, that configuration was
made directly on the Hostinger VPS/panel and is not tracked in this git repository
at all.** This cannot be fully confirmed by reading code — it requires a live check
(§15).

**Status: HIGHLY LIKELY, NOT CONFIRMED.**

If users land on different Node processes, they by definition cannot see each
other in `textWaitingUsers`, because each process holds its own separate copy of
that array in its own memory space — this is expected behavior for an in-memory
queue, not a bug in the matching code itself.

---

## 6. Matchmaking Queue Audit

All matchmaking state is declared **once**, at module scope, in `backend/server.js`:

```js
const videoUsers = new Map()        // line 121
const textUsers = new Map()         // line 122
const videoWaitingUsers = []        // line 123
const textWaitingUsers = []         // line 124
const connectionHealth = new Map()  // line 127
const pendingRematchTimers = new Map() // line 128
```

- **Confirmed CLEAN**: none of these are re-declared inside `wss.on("connection", ...)`
  (line 416) or any per-request/per-socket function. The specific anti-pattern the
  original checklist warned about —
  `io.on("connection", socket => { const waitingUsers = [] })` — **does not exist**
  in this file.
- **Queue entry**: `findPartner()` pushes the user object if no candidate is found
  (lines 337-338), guarded by a duplicate check (`!waitingList.find(...)`, line 337).
- **Queue exit**: `removeUserFromWaiting()` (lines 224-231), called before every
  match attempt and on cleanup.
- **Candidate selection**: `availablePartners` filter (lines 263-269) — excludes
  self, users who already have a partner, closed sockets, and sockets with more
  than 2 recorded send failures. No IP/network filtering (confirmed, see §11).
- **Disconnect handling**: `cleanupConnection()` (lines 389-414), wired to both
  `ws.on("close", ...)` and `ws.on("error", ...)` (lines 674, 679) — removes the
  user from `videoUsers`/`textUsers`, the matching waiting list, and
  `connectionHealth`. **PASS.**
- **Skip handling**: `disconnectPartnership(ws, chatType, "skip")` +
  `scheduleRematch(ws, chatType, 500)` (lines 502-519). Partner is notified with
  `shouldFindNew: true` and the server itself schedules their rematch
  (`scheduleRematch(partnerSocket, chatType, 1000)`, line 376) — the frontend only
  self-triggers a rematch when `shouldFindNew` is false (App.jsx:328), avoiding a
  double-match race. **PASS.**
- **Reconnect**: a refreshed/reconnecting client gets a brand-new `connectionId`
  (`Date.now() + Math.random()`, line 419) and is inserted as a new entry; the old
  socket's entry is removed via the `close` event on the dead connection. No
  duplicate-entry mechanism found. **PASS**, assuming the `close` event fires
  promptly (it does, since the browser closes the old socket before opening a new
  one in `App.jsx`'s `connectSocket`).

None of the code in this section changed in a way that would explain the reported
symptom — this logic is essentially unchanged across the git history shown in §19,
and the user's own test (reverting the whole file) already falsified "queue logic
bug" as the cause.

---

## 7. Remote User Connection Flow

| Step | Frontend file:line | Backend file:line | Event | Notes |
|---|---|---|---|---|
| Open socket | `App.jsx:386` `new WebSocket(getWebSocketUrl())` | `server.js:416` `wss.on("connection")` | — | Confirmation sent immediately: `connectionEstablished` (server.js:428) |
| Identify | `App.jsx:395` sends `setUsername` | `server.js:445` case `"setUsername"` | `setUsername` → `usernameSet` | Backend replies `usernameSet` (server.js:487) |
| Join queue | `App.jsx:280` on `usernameSet` → calls `requestPartner()` | `server.js:494` case `"findPartner"` | `findPartner` | Calls `scheduleRematch(ws, chatType, 0)` → `findPartner()` |
| Waiting | — | `server.js:341` reply `waiting` if no candidate | `waiting` | **This is the state the user reports remote users get stuck in.** Reaching this state proves the WebSocket connected successfully and the user was correctly registered — the failure is downstream of connection, in queue visibility. |
| Match | — | `server.js:290`/`297` reply `matched` to both sockets | `matched` | Only reachable if both users are in the *same* `textWaitingUsers` array in the *same* process memory |
| Update UI | `App.jsx:284` case `"matched"` | — | — | Sets `partnerName`, clears matching state |

This trace confirms: the failure point for remote users is specifically **between
"joined the queue" and "found a candidate,"** not in the connection/handshake layer
and not in the UI. That narrows the search to exactly the multi-process hypothesis
in §5, or a nginx layer that is itself splitting connections across more than one
backend (functionally identical outcome).

---

## 8. CORS and Origin Audit

**N/A for this codebase.** There is no Express, no Socket.IO, and therefore no CORS
middleware or `origin` allow-list anywhere in `server.js`. The WebSocket upgrade
happens through the same-origin reverse proxy (§9), so browsers do not apply CORS
checks to it. Confirmed by grep: no `Access-Control-Allow-Origin`, no `cors`
package usage, no `origin:` config exists in this file.

---

## 9. HTTPS, WSS, and Mixed Content Audit

- `config.js` line 7 correctly derives `wss:` whenever the page itself loaded over
  `https:`. **PASS in source.**
- `backend/nginx.conf` (the version committed to this repo) contains only:
  ```nginx
  server {
      listen 80;
      server_name perfactchat.com www.perfactchat.com;
      location / { proxy_pass http://127.0.0.1:5002; ... }
  }
  ```
  There is **no `listen 443 ssl` block in this file.** Since the site is expected to
  be served over HTTPS, the actual TLS-terminating config must exist somewhere else
  on the VPS — most commonly auto-added by Certbot directly into
  `/etc/nginx/sites-enabled/` and never committed back to git (this is normal
  Certbot behavior). **This means the nginx.conf in this repository may not reflect
  what's actually running in production.**
- **Status: NEEDS LIVE HOSTINGER/VPS VERIFICATION.** Cannot be confirmed or denied
  from the repository alone. If the live 443 block was edited as part of the
  "load-balancer changes" the user mentioned (e.g., an `upstream` block with more
  than one server), that would independently explain everything in §5 without any
  code change at all.
- Production build grep for `http://`/`ws://` (non-secure): only the harmless dead
  fallback described in §3 was found. No live mixed-content risk identified in the
  bundle itself.

---

## 10. Hostinger Deployment Audit

- `backend/package.json` script `"start": "npm run build && node server.js"` — builds
  the frontend, then starts the backend, which serves the built `dist/` via its own
  static file handler (`createRequestHandler`, `server.js` lines 7-82). One combined
  process serves both the SPA and the WebSocket.
- Port: `process.env.PORT || 5002` (server.js:740) — matches
  `backend/nginx.conf`'s `proxy_pass http://127.0.0.1:5002` (line 6). **Consistent.**
- **No `.github/workflows` directory exists in this repository.** Pushing to GitHub
  does **not**, by itself, trigger any build or deploy — there is no CI/CD defined
  in this codebase. If the live site does update automatically after a push, that
  behavior is configured entirely inside Hostinger's own panel (commonly the hPanel
  "Git" / deployment feature, which can be set to auto-pull on push via webhook) and
  is invisible to this repository. **NEEDS LIVE HOSTINGER VERIFICATION** — see the
  direct answer to "does GitHub push auto-deploy?" in the accompanying
  `implement.txt`.
- Whether the Node **process itself restarts** after a new deploy (auto-pulled or
  manual) is a separate question from whether the *files* update, and cannot be
  confirmed from this repo. A background of a stale bundled dist folder or a
  non-restarted process is a common self-inflicted cause of "I pushed a fix but
  nothing changed" — see the deployment checklist in `implement.txt`.

---

## 11. IP-Based Logic Audit

Full-file search of `server.js` for `handshake.address`, `x-forwarded-for`,
`remoteAddress`, or any IP-derived variable: **none found.** Matchmaking identity is
based entirely on the `ws` object reference and `connectionId`
(`Date.now() + Math.random()`, line 419) — not IP, not network, not
same-origin checks. **Confirmed CLEAN** — this is not a contributing cause.

---

## 12. Stale Queue and Disconnect Audit

Covered in detail in §6. Summary: disconnect, skip, and reconnect handling all
correctly clean up `videoUsers`/`textUsers`/waiting lists/`connectionHealth`, and no
loop was found where a single dead candidate could permanently block matching
(dead sockets are filtered out live via `u.ws.readyState === WebSocket.OPEN` at
match time, line 267, in addition to being removed on `close`). **PASS.**

---

## 13. Frontend Production Build Audit

Searched `backend/frontend/dist/assets/*.js` and `*.css` for `localhost`,
`127.0.0.1`, `192.168.`, plain `ws://`/`http://`. Only the single dead-code fallback
described in §3 was found (`window.location.hostname||"localhost"`, unreachable in
production). **No hardcoded local/private production URL exists in the shipped
bundle.**

Note: `git status` shows the working tree currently has **uncommitted** changes to
`backend/frontend/src/App.jsx`, `TextChat.jsx`, and stale/regenerated files under
`backend/frontend/dist/assets/`. The dist folder in the repo may not exactly match
what a fresh `npm run build` would produce right now — always rebuild before
deploying rather than trusting the committed `dist/` folder.

---

## 14. Logging Gaps

Already addressed in this session (commit `cffbbdb`, "Add pid to /health endpoint
to detect multi-process split queues"):

- `[SERVER_STARTED]` with `pid` — `server.js:742`
- `[SOCKET_CONNECTED]` with `pid` — `server.js:425`
- `/health` now returns `pid`, `uptimeSeconds`, `textWaiting`, `videoWaiting` —
  `server.js:16-29`

**Still missing / recommended** (safe, no sensitive data):

```js
// In findPartner(), near line 253 — add pid so multi-process split is visible in logs too:
console.log("[MATCH_SEARCH]", { pid: process.pid, requester: user.username, queueLength: waitingList.length })

// Near line 271, right before a match is made:
console.log("[MATCH_SUCCESS]", { pid: process.pid, userA: user.username, userB: partner.username, matchId })

// Near line 335, when no candidate was found:
console.log("[USER_ADDED_TO_QUEUE]", { pid: process.pid, socketId: user.connectionId, queueLength: waitingList.length })
```

No private messages, tokens, or personal data are logged by any of the above or by
the existing `console.log` calls in this file — confirmed by reading every log
statement in `server.js`.

---

## 15. Required Live Debug Logs — How to Interpret Results

With the current instrumentation, open `https://perfactchat.com/health` from two
different networks (or refresh it several times from one machine) and read the
`pid` field.

### Case A — remote user never even reaches "waiting"
No `[SOCKET_CONNECTED]` log for them at all → wrong socket URL, proxy/DNS issue, or
backend unreachable from that network. **Ruled increasingly unlikely** here, since
the user confirms remote users reach the "waiting" UI state, which requires a
successful connection.

### Case B — connects, but no matchmaking event ever arrives
Would show `[SOCKET_CONNECTED]` but no `usernameSet`/`waiting` log. **Ruled out** —
the UI explicitly reaches "Waiting for a partner," which only renders after a
`waiting` message is received (App.jsx:296-299), so this path is confirmed working.

### Case C — both users connect but have **different** `pid` values
→ **Confirms §5.** Multiple Node processes are running; the two users are in two
separate, isolated `textWaitingUsers` arrays and can mathematically never match
each other, regardless of how correct the matching code is. This is currently the
**leading hypothesis** based on all indirect evidence gathered.

### Case D — both users show the **same** `pid` but still don't match
→ Would point back at the matchmaking code itself (§6) — but this has already been
substantially ruled out by the fact that reverting `server.js` entirely did not
change the outcome. If Case D is what's actually observed, it would be a genuinely
new and surprising finding worth re-opening §6 with fresh eyes.

### Case E — backend logs a successful match, but the UI doesn't update
Would show `[MATCH_SUCCESS]`-equivalent output but the client stays on "Waiting."
Not indicated by current evidence, but worth checking `App.jsx`'s `onmessage`
handler (line 275) if Case C is ruled out.

---

## 16. Commands to Run

Project-specific (from `backend/package.json` and `backend/frontend/package.json`):

```bash
# Build & run (matches the actual "start" script)
npm run build      # from backend/  → runs frontend's `vite build`
node server.js      # from backend/

# Process inspection on the VPS
ps aux | grep node
pm2 list                          # only if PM2 turns out to be in use
pm2 describe <app-name>
lsof -i :5002

# Repository searches actually run for this report
grep -R "localhost" backend/frontend/dist
grep -R "192.168." backend/frontend/dist
grep -R "127.0.0.1" backend/frontend/dist
grep -R "cluster" backend --include=*.js
grep -R "exec_mode" .
grep -R "pm2" .
```

No destructive commands included.

---

## 17. Test Matrix

| Test | User A | User B | Expected Result | Logs Required |
|---|---|---|---|---|
| Same Wi-Fi | Laptop Wi-Fi | Phone same Wi-Fi | Match success | `[SOCKET_CONNECTED]` + `matched` for both |
| Different networks | Laptop Wi-Fi | Phone mobile data | Match success | Both `pid` values, must be equal |
| Remote users | Location A | Location B | Match success | Same `pid`, both socket IDs in same `waiting` count |
| Page refresh | Waiting user | Refresh | Old socket removed, no stale entry | `close` event + `cleanupConnection` log |
| Skip | Matched users | One presses Skip | Room cleanup, both rematch correctly | Skip log + rematch schedule log |
| Network switch | Wi-Fi → mobile data | Other waiting user | Reconnect and rematch | `App.jsx` `online`/`visibilitychange` handler fires, new `[SOCKET_CONNECTED]` |

---

## 18. Prioritized Findings

| Priority | Finding | File | Status | Impact | Recommended Action |
|---|---|---|---|---|---|
| P0 | Cannot confirm single vs multiple backend processes | *(infrastructure, not in repo)* | HIGHLY LIKELY, NOT CONFIRMED | Remote users never share a queue → exactly the reported symptom | Check `pid` via `/health` from 2 networks; if it varies, reduce to one process (see `implement.txt`) |
| P0 | Live nginx/SSL config may differ from `backend/nginx.conf` (no 443 block committed) | `backend/nginx.conf` | NEEDS LIVE VERIFICATION | Could independently cause split routing if an upstream/load-balancer block was added here | Pull the actual live nginx config from the VPS and diff it against this file |
| P1 | No CI/CD — GitHub push does not auto-deploy by itself | *(repo has no `.github/`)* | CONFIRMED | Code fixes may appear "not to work" simply because they were never deployed | Confirm Hostinger's actual deploy mechanism; document it in `implement.txt` |
| P2 | `/api/ice-servers` referenced by frontend but not implemented in current (reverted) `server.js` | `backend/frontend/src/config.js:81`, `backend/server.js` | CONFIRMED | Degrades video TURN credentials only; unrelated to text-chat bug | Restore the endpoint if/when video quality across restrictive networks becomes a priority |
| P3 | `express` and `socket.io` listed as dependencies but never used | `backend/package.json` | CONFIRMED | No functional impact, just dead weight | Safe to remove later; not urgent |
| P3 | Dead fallback code (`localhost:5002`) present but unreachable in production bundle | `backend/frontend/src/config.js:19-21` | CONFIRMED, cosmetic | None | No action required |

---

## 19. Root-Cause Assessment

```text
Root cause cannot be fully confirmed without live server logs.
```

Ranked, most likely first:

1. **Multiple Node.js backend processes/instances serving the same domain**,
   each holding its own separate in-memory `textWaitingUsers` array, configured
   outside this git repository (Hostinger panel, manual duplicate process, or a
   load-balancer/upstream block added directly to the live nginx config). Strongly
   supported by: the user's own report that this started after load-balancer
   changes; the fact that reverting the entire application code did not fix it;
   and the fact that remote users do reach the "waiting" state (proving connection
   and registration work) but never find each other.
2. **A live nginx/proxy configuration that differs from the committed
   `backend/nginx.conf`** (no 443/SSL block is present in the repo version),
   possibly load-balancing across more than one upstream — functionally
   indistinguishable from cause #1 without live access, and could be the actual
   mechanism *behind* cause #1.
3. **Deployment/staleness**: fixes pushed to GitHub not actually reaching the live
   process (no auto-deploy exists in this repo) — less likely to be the *original*
   cause of the regression, but likely to be actively confusing verification of any
   fix attempted so far, including the `server.js` revert the user already tried.

---

## 20. Recommended Fix Plan

### Phase 1 — Confirm (no risky changes)
- [x] Add `pid` to `/health` and to connection logs (done, commit `cffbbdb`).
- [ ] Deploy this to the live server and restart the process.
- [ ] From two different networks, hit `https://perfactchat.com/health` and compare
      `pid`. Also try two devices on different networks in Text Chat at the same
      time and watch server logs for `[SOCKET_CONNECTED]` pid values.
- [ ] Pull the actual live nginx config from the VPS (`nginx -T` or read
      `/etc/nginx/sites-enabled/*`) and diff it against `backend/nginx.conf`.

### Phase 2 — Correct Architecture (only if Phase 1 confirms multiple processes)
- Reduce to exactly one Node process serving this app (stop any duplicate manually
  started process; if PM2 turns out to be involved, set `instances: 1`,
  `exec_mode: "fork"`).
- Ensure nginx has exactly one `upstream`/`proxy_pass` target (`127.0.0.1:5002`),
  not a load-balanced pool.

### Phase 3 — Correct Production Connection (only if Phase 1 finds an SSL/proxy gap)
- Confirm the live 443 server block forwards `Upgrade`/`Connection` headers
  identically to the committed `location /` block in `backend/nginx.conf`.

### Phase 4 — Matchmaking (only if Phase 1 disproves #1 and #2 — see Case D in §15)
- Re-open §6 with the live logs in hand; nothing here currently indicates action is
  needed.

### Phase 5 — Deploy and Verify
- `npm run build` (from `backend/`), commit, push, and manually confirm on the VPS
  that `git pull` + a process restart actually happened (see `implement.txt` for
  exact commands and the GitHub→Hostinger deploy question).
- Re-run the full test matrix in §17.
