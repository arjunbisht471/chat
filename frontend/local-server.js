import fs from "fs"
import http from "http"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.join(__dirname, "dist")
const indexPath = path.join(distDir, "index.html")
const port = Number(process.env.PORT || 5001)

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
}

function sendFile(filePath, res) {
  const extension = path.extname(filePath)
  res.writeHead(200, {
    "Content-Type": contentTypes[extension] || "application/octet-stream",
  })
  fs.createReadStream(filePath).pipe(res)
}

const server = http.createServer((req, res) => {
  if (!fs.existsSync(indexPath)) {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
    res.end("Frontend build not found. Run `npm run build` first.")
    return
  }

  const requestPath = (req.url || "/").split("?")[0]
  const cleanedPath = requestPath === "/" ? "index.html" : requestPath.replace(/^\/+/, "")
  const candidatePath = path.resolve(distDir, cleanedPath)

  if (candidatePath.startsWith(distDir) && fs.existsSync(candidatePath) && fs.statSync(candidatePath).isFile()) {
    sendFile(candidatePath, res)
    return
  }

  if (!path.extname(requestPath)) {
    sendFile(indexPath, res)
    return
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" })
  res.end("Not found")
})

server.listen(port, "0.0.0.0", () => {
  console.log(`Frontend server running on http://localhost:${port}`)
})
