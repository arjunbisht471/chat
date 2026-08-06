const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/VideoChat-Ddpsg89A.js","assets/VideoChat-jrpnNefM.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function Zc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ms={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=Symbol.for("react.element"),Xc=Symbol.for("react.portal"),Jc=Symbol.for("react.fragment"),ed=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),nd=Symbol.for("react.provider"),rd=Symbol.for("react.context"),ld=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),od=Symbol.for("react.memo"),id=Symbol.for("react.lazy"),fi=Symbol.iterator;function sd(e){return e===null||typeof e!="object"?null:(e=fi&&e[fi]||e["@@iterator"],typeof e=="function"?e:null)}var Ts={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ls=Object.assign,Ps={};function En(e,t,n){this.props=e,this.context=t,this.refs=Ps,this.updater=n||Ts}En.prototype.isReactComponent={};En.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};En.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fs(){}Fs.prototype=En.prototype;function fo(e,t,n){this.props=e,this.context=t,this.refs=Ps,this.updater=n||Ts}var po=fo.prototype=new Fs;po.constructor=fo;Ls(po,En.prototype);po.isPureReactComponent=!0;var pi=Array.isArray,As=Object.prototype.hasOwnProperty,mo={current:null},zs={key:!0,ref:!0,__self:!0,__source:!0};function _s(e,t,n){var r,l={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)As.call(t,r)&&!zs.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:dr,type:e,key:a,ref:o,props:l,_owner:mo.current}}function ud(e,t){return{$$typeof:dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ho(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function cd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mi=/\/+/g;function $l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cd(""+e.key):t.toString(36)}function jr(e,t,n,r,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case dr:case Xc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+$l(o,0):r,pi(l)?(n="",e!=null&&(n=e.replace(mi,"$&/")+"/"),jr(l,t,n,"",function(d){return d})):l!=null&&(ho(l)&&(l=ud(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(mi,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",pi(e))for(var s=0;s<e.length;s++){a=e[s];var u=r+$l(a,s);o+=jr(a,t,n,u,l)}else if(u=sd(e),typeof u=="function")for(e=u.call(e),s=0;!(a=e.next()).done;)a=a.value,u=r+$l(a,s++),o+=jr(a,t,n,u,l);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function xr(e,t,n){if(e==null)return e;var r=[],l=0;return jr(e,r,"","",function(a){return t.call(n,a,l++)}),r}function dd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Br={transition:null},fd={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Br,ReactCurrentOwner:mo};function Is(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:xr,forEach:function(e,t,n){xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xr(e,function(){t++}),t},toArray:function(e){return xr(e,function(t){return t})||[]},only:function(e){if(!ho(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=En;_.Fragment=Jc;_.Profiler=td;_.PureComponent=fo;_.StrictMode=ed;_.Suspense=ad;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fd;_.act=Is;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ls({},e.props),l=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=mo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)As.call(t,u)&&!zs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:dr,type:e.type,key:l,ref:a,props:r,_owner:o}};_.createContext=function(e){return e={$$typeof:rd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:nd,_context:e},e.Consumer=e};_.createElement=_s;_.createFactory=function(e){var t=_s.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:ld,render:e}};_.isValidElement=ho;_.lazy=function(e){return{$$typeof:id,_payload:{_status:-1,_result:e},_init:dd}};_.memo=function(e,t){return{$$typeof:od,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=Br.transition;Br.transition={};try{e()}finally{Br.transition=t}};_.unstable_act=Is;_.useCallback=function(e,t){return he.current.useCallback(e,t)};_.useContext=function(e){return he.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return he.current.useDeferredValue(e)};_.useEffect=function(e,t){return he.current.useEffect(e,t)};_.useId=function(){return he.current.useId()};_.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return he.current.useMemo(e,t)};_.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};_.useRef=function(e){return he.current.useRef(e)};_.useState=function(e){return he.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return he.current.useTransition()};_.version="18.3.1";Ms.exports=_;var P=Ms.exports;const i=Zc(P);var Os={exports:{}},be={},js={exports:{}},Bs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,F){var L=N.length;N.push(F);e:for(;0<L;){var V=L-1>>>1,U=N[V];if(0<l(U,F))N[V]=F,N[L]=U,L=V;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var F=N[0],L=N.pop();if(L!==F){N[0]=L;e:for(var V=0,U=N.length,Je=U>>>1;V<Je;){var Qe=2*(V+1)-1,ft=N[Qe],Te=Qe+1,Oe=N[Te];if(0>l(ft,L))Te<U&&0>l(Oe,ft)?(N[V]=Oe,N[Te]=L,V=Te):(N[V]=ft,N[Qe]=L,V=Qe);else if(Te<U&&0>l(Oe,L))N[V]=Oe,N[Te]=L,V=Te;else break e}}return F}function l(N,F){var L=N.sortIndex-F.sortIndex;return L!==0?L:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],d=[],g=1,h=null,m=3,w=!1,k=!1,E=!1,B=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var F=n(d);F!==null;){if(F.callback===null)r(d);else if(F.startTime<=N)r(d),F.sortIndex=F.expirationTime,t(u,F);else break;F=n(d)}}function v(N){if(E=!1,p(N),!k)if(n(u)!==null)k=!0,Gt(S);else{var F=n(d);F!==null&&Nn(v,F.startTime-N)}}function S(N,F){k=!1,E&&(E=!1,f(T),T=-1),w=!0;var L=m;try{for(p(F),h=n(u);h!==null&&(!(h.expirationTime>F)||N&&!se());){var V=h.callback;if(typeof V=="function"){h.callback=null,m=h.priorityLevel;var U=V(h.expirationTime<=F);F=e.unstable_now(),typeof U=="function"?h.callback=U:h===n(u)&&r(u),p(F)}else r(u);h=n(u)}if(h!==null)var Je=!0;else{var Qe=n(d);Qe!==null&&Nn(v,Qe.startTime-F),Je=!1}return Je}finally{h=null,m=L,w=!1}}var C=!1,M=null,T=-1,j=5,z=-1;function se(){return!(e.unstable_now()-z<j)}function H(){if(M!==null){var N=e.unstable_now();z=N;var F=!0;try{F=M(!0,N)}finally{F?We():(C=!1,M=null)}}else C=!1}var We;if(typeof c=="function")We=function(){c(H)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,dt=ct.port2;ct.port1.onmessage=H,We=function(){dt.postMessage(null)}}else We=function(){B(H,0)};function Gt(N){M=N,C||(C=!0,We())}function Nn(N,F){T=B(function(){N(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,Gt(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var L=m;m=F;try{return N()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=m;m=N;try{return F()}finally{m=L}},e.unstable_scheduleCallback=function(N,F,L){var V=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?V+L:V):L=V,N){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=L+U,N={id:g++,callback:F,priorityLevel:N,startTime:L,expirationTime:U,sortIndex:-1},L>V?(N.sortIndex=L,t(d,N),n(u)===null&&N===n(d)&&(E?(f(T),T=-1):E=!0,Nn(v,L-V))):(N.sortIndex=U,t(u,N),k||w||(k=!0,Gt(S))),N},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(N){var F=m;return function(){var L=m;m=F;try{return N.apply(this,arguments)}finally{m=L}}}})(Bs);js.exports=Bs;var pd=js.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md=P,Ne=pd;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rs=new Set,Gn={};function Qt(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(Gn[e]=t,e=0;e<t.length;e++)Rs.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wa=Object.prototype.hasOwnProperty,hd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hi={},gi={};function gd(e){return wa.call(gi,e)?!0:wa.call(hi,e)?!1:hd.test(e)?gi[e]=!0:(hi[e]=!0,!1)}function vd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yd(e,t,n,r){if(t===null||typeof t>"u"||vd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,l,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var go=/[\-:]([a-z])/g;function vo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(go,vo);ie[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(go,vo);ie[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(go,vo);ie[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function yo(e,t,n,r){var l=ie.hasOwnProperty(t)?ie[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yd(t,n,l,r)&&(n=null),r||l===null?gd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ut=md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kr=Symbol.for("react.element"),qt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),wo=Symbol.for("react.strict_mode"),xa=Symbol.for("react.profiler"),Ds=Symbol.for("react.provider"),Hs=Symbol.for("react.context"),xo=Symbol.for("react.forward_ref"),ka=Symbol.for("react.suspense"),Ea=Symbol.for("react.suspense_list"),ko=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Vs=Symbol.for("react.offscreen"),vi=Symbol.iterator;function Mn(e){return e===null||typeof e!="object"?null:(e=vi&&e[vi]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ul;function In(e){if(Ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ul=t&&t[1]||""}return`
`+Ul+e}var Wl=!1;function Ql(e,t){if(!e||Wl)return"";Wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),a=r.stack.split(`
`),o=l.length-1,s=a.length-1;1<=o&&0<=s&&l[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==a[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Wl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?In(e):""}function wd(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=Ql(e.type,!1),e;case 11:return e=Ql(e.type.render,!1),e;case 1:return e=Ql(e.type,!0),e;default:return""}}function Sa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case qt:return"Portal";case xa:return"Profiler";case wo:return"StrictMode";case ka:return"Suspense";case Ea:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hs:return(e.displayName||"Context")+".Consumer";case Ds:return(e._context.displayName||"Context")+".Provider";case xo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ko:return t=e.displayName||null,t!==null?t:Sa(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return Sa(e(t))}catch{}}return null}function xd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sa(t);case 8:return t===wo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $s(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kd(e){var t=$s(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Er(e){e._valueTracker||(e._valueTracker=kd(e))}function Us(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$s(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ca(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ws(e,t){t=t.checked,t!=null&&yo(e,"checked",t,!1)}function Na(e,t){Ws(e,t);var n=Lt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ba(e,t.type,n):t.hasOwnProperty("defaultValue")&&ba(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ba(e,t,n){(t!=="number"||Zr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ma(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(On(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function Qs(e,t){var n=Lt(t.value),r=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ki(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ys(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ta(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ys(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,Gs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ed=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){Ed.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function Ks(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function qs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ks(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Sd=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function La(e,t){if(t){if(Sd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function Pa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fa=null;function Eo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Aa=null,cn=null,dn=null;function Ei(e){if(e=mr(e)){if(typeof Aa!="function")throw Error(y(280));var t=e.stateNode;t&&(t=Ml(t),Aa(e.stateNode,e.type,t))}}function Zs(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Xs(){if(cn){var e=cn,t=dn;if(dn=cn=null,Ei(e),t)for(e=0;e<t.length;e++)Ei(t[e])}}function Js(e,t){return e(t)}function eu(){}var Yl=!1;function tu(e,t,n){if(Yl)return e(t,n);Yl=!0;try{return Js(e,t,n)}finally{Yl=!1,(cn!==null||dn!==null)&&(eu(),Xs())}}function qn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ml(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var za=!1;if(at)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){za=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{za=!1}function Cd(e,t,n,r,l,a,o,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Dn=!1,Xr=null,Jr=!1,_a=null,Nd={onError:function(e){Dn=!0,Xr=e}};function bd(e,t,n,r,l,a,o,s,u){Dn=!1,Xr=null,Cd.apply(Nd,arguments)}function Md(e,t,n,r,l,a,o,s,u){if(bd.apply(this,arguments),Dn){if(Dn){var d=Xr;Dn=!1,Xr=null}else throw Error(y(198));Jr||(Jr=!0,_a=d)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Si(e){if(Yt(e)!==e)throw Error(y(188))}function Td(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return Si(l),e;if(a===r)return Si(l),t;a=a.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=a;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=a;break}if(s===r){o=!0,r=l,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=l;break}if(s===r){o=!0,r=a,n=l;break}s=s.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function ru(e){return e=Td(e),e!==null?lu(e):null}function lu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lu(e);if(t!==null)return t;e=e.sibling}return null}var au=Ne.unstable_scheduleCallback,Ci=Ne.unstable_cancelCallback,Ld=Ne.unstable_shouldYield,Pd=Ne.unstable_requestPaint,X=Ne.unstable_now,Fd=Ne.unstable_getCurrentPriorityLevel,So=Ne.unstable_ImmediatePriority,ou=Ne.unstable_UserBlockingPriority,el=Ne.unstable_NormalPriority,Ad=Ne.unstable_LowPriority,iu=Ne.unstable_IdlePriority,Sl=null,Ze=null;function zd(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Od,_d=Math.log,Id=Math.LN2;function Od(e){return e>>>=0,e===0?32:31-(_d(e)/Id|0)|0}var Cr=64,Nr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=jn(s):(a&=o,a!==0&&(r=jn(a)))}else o=n&~l,o!==0?r=jn(o):a!==0&&(r=jn(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),l=1<<n,r|=e[n],t&=~l;return r}function jd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ve(a),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=jd(s,t)):u<=t&&(e.expiredLanes|=s),a&=~s}}function Ia(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function su(){var e=Cr;return Cr<<=1,!(Cr&4194240)&&(Cr=64),e}function Gl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Rd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ve(n),a=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~a}}function Co(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function uu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cu,No,du,fu,pu,Oa=!1,br=[],kt=null,Et=null,St=null,Zn=new Map,Xn=new Map,vt=[],Dd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ni(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function Ln(e,t,n,r,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},t!==null&&(t=mr(t),t!==null&&No(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Hd(e,t,n,r,l){switch(t){case"focusin":return kt=Ln(kt,e,t,n,r,l),!0;case"dragenter":return Et=Ln(Et,e,t,n,r,l),!0;case"mouseover":return St=Ln(St,e,t,n,r,l),!0;case"pointerover":var a=l.pointerId;return Zn.set(a,Ln(Zn.get(a)||null,e,t,n,r,l)),!0;case"gotpointercapture":return a=l.pointerId,Xn.set(a,Ln(Xn.get(a)||null,e,t,n,r,l)),!0}return!1}function mu(e){var t=Ot(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=nu(n),t!==null){e.blockedOn=t,pu(e.priority,function(){du(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ja(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fa=r,n.target.dispatchEvent(r),Fa=null}else return t=mr(n),t!==null&&No(t),e.blockedOn=n,!1;t.shift()}return!0}function bi(e,t,n){Rr(e)&&n.delete(t)}function Vd(){Oa=!1,kt!==null&&Rr(kt)&&(kt=null),Et!==null&&Rr(Et)&&(Et=null),St!==null&&Rr(St)&&(St=null),Zn.forEach(bi),Xn.forEach(bi)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,Oa||(Oa=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Vd)))}function Jn(e){function t(l){return Pn(l,e)}if(0<br.length){Pn(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&Pn(kt,e),Et!==null&&Pn(Et,e),St!==null&&Pn(St,e),Zn.forEach(t),Xn.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)mu(n),n.blockedOn===null&&vt.shift()}var fn=ut.ReactCurrentBatchConfig,nl=!0;function $d(e,t,n,r){var l=D,a=fn.transition;fn.transition=null;try{D=1,bo(e,t,n,r)}finally{D=l,fn.transition=a}}function Ud(e,t,n,r){var l=D,a=fn.transition;fn.transition=null;try{D=4,bo(e,t,n,r)}finally{D=l,fn.transition=a}}function bo(e,t,n,r){if(nl){var l=ja(e,t,n,r);if(l===null)la(e,t,r,rl,n),Ni(e,r);else if(Hd(l,e,t,n,r))r.stopPropagation();else if(Ni(e,r),t&4&&-1<Dd.indexOf(e)){for(;l!==null;){var a=mr(l);if(a!==null&&cu(a),a=ja(e,t,n,r),a===null&&la(e,t,r,rl,n),a===l)break;l=a}l!==null&&r.stopPropagation()}else la(e,t,r,null,n)}}var rl=null;function ja(e,t,n,r){if(rl=null,e=Eo(r),e=Ot(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rl=e,null}function hu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fd()){case So:return 1;case ou:return 4;case el:case Ad:return 16;case iu:return 536870912;default:return 16}default:return 16}}var wt=null,Mo=null,Dr=null;function gu(){if(Dr)return Dr;var e,t=Mo,n=t.length,r,l="value"in wt?wt.value:wt.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[a-r];r++);return Dr=l.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mr(){return!0}function Mi(){return!1}function Me(e){function t(n,r,l,a,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Mr:Mi,this.isPropagationStopped=Mi,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},To=Me(Sn),pr=q({},Sn,{view:0,detail:0}),Wd=Me(pr),Kl,ql,Fn,Cl=q({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fn&&(Fn&&e.type==="mousemove"?(Kl=e.screenX-Fn.screenX,ql=e.screenY-Fn.screenY):ql=Kl=0,Fn=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:ql}}),Ti=Me(Cl),Qd=q({},Cl,{dataTransfer:0}),Yd=Me(Qd),Gd=q({},pr,{relatedTarget:0}),Zl=Me(Gd),Kd=q({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),qd=Me(Kd),Zd=q({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xd=Me(Zd),Jd=q({},Sn,{data:0}),Li=Me(Jd),ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nf[e])?!!t[e]:!1}function Lo(){return rf}var lf=q({},pr,{key:function(e){if(e.key){var t=ef[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lo,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),af=Me(lf),of=q({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pi=Me(of),sf=q({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lo}),uf=Me(sf),cf=q({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),df=Me(cf),ff=q({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=Me(ff),mf=[9,13,27,32],Po=at&&"CompositionEvent"in window,Hn=null;at&&"documentMode"in document&&(Hn=document.documentMode);var hf=at&&"TextEvent"in window&&!Hn,vu=at&&(!Po||Hn&&8<Hn&&11>=Hn),Fi=" ",Ai=!1;function yu(e,t){switch(e){case"keyup":return mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function gf(e,t){switch(e){case"compositionend":return wu(t);case"keypress":return t.which!==32?null:(Ai=!0,Fi);case"textInput":return e=t.data,e===Fi&&Ai?null:e;default:return null}}function vf(e,t){if(Xt)return e==="compositionend"||!Po&&yu(e,t)?(e=gu(),Dr=Mo=wt=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vu&&t.locale!=="ko"?null:t.data;default:return null}}var yf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yf[e.type]:t==="textarea"}function xu(e,t,n,r){Zs(r),t=ll(t,"onChange"),0<t.length&&(n=new To("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,er=null;function wf(e){Fu(e,0)}function Nl(e){var t=tn(e);if(Us(t))return e}function xf(e,t){if(e==="change")return t}var ku=!1;if(at){var Xl;if(at){var Jl="oninput"in document;if(!Jl){var _i=document.createElement("div");_i.setAttribute("oninput","return;"),Jl=typeof _i.oninput=="function"}Xl=Jl}else Xl=!1;ku=Xl&&(!document.documentMode||9<document.documentMode)}function Ii(){Vn&&(Vn.detachEvent("onpropertychange",Eu),er=Vn=null)}function Eu(e){if(e.propertyName==="value"&&Nl(er)){var t=[];xu(t,er,e,Eo(e)),tu(wf,t)}}function kf(e,t,n){e==="focusin"?(Ii(),Vn=t,er=n,Vn.attachEvent("onpropertychange",Eu)):e==="focusout"&&Ii()}function Ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(er)}function Sf(e,t){if(e==="click")return Nl(t)}function Cf(e,t){if(e==="input"||e==="change")return Nl(t)}function Nf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:Nf;function tr(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!wa.call(t,l)||!Ue(e[l],t[l]))return!1}return!0}function Oi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ji(e,t){var n=Oi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oi(n)}}function Su(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Su(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cu(){for(var e=window,t=Zr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zr(e.document)}return t}function Fo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bf(e){var t=Cu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Su(n.ownerDocument.documentElement,n)){if(r!==null&&Fo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(r.start,l);r=r.end===void 0?a:Math.min(r.end,l),!e.extend&&a>r&&(l=r,r=a,a=l),l=ji(n,a);var o=ji(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mf=at&&"documentMode"in document&&11>=document.documentMode,Jt=null,Ba=null,$n=null,Ra=!1;function Bi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ra||Jt==null||Jt!==Zr(r)||(r=Jt,"selectionStart"in r&&Fo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$n&&tr($n,r)||($n=r,r=ll(Ba,"onSelect"),0<r.length&&(t=new To("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jt)))}function Tr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionend:Tr("Transition","TransitionEnd")},ea={},Nu={};at&&(Nu=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function bl(e){if(ea[e])return ea[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nu)return ea[e]=t[n];return e}var bu=bl("animationend"),Mu=bl("animationiteration"),Tu=bl("animationstart"),Lu=bl("transitionend"),Pu=new Map,Ri="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ft(e,t){Pu.set(e,t),Qt(t,[e])}for(var ta=0;ta<Ri.length;ta++){var na=Ri[ta],Tf=na.toLowerCase(),Lf=na[0].toUpperCase()+na.slice(1);Ft(Tf,"on"+Lf)}Ft(bu,"onAnimationEnd");Ft(Mu,"onAnimationIteration");Ft(Tu,"onAnimationStart");Ft("dblclick","onDoubleClick");Ft("focusin","onFocus");Ft("focusout","onBlur");Ft(Lu,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function Di(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Md(r,t,void 0,e),e.currentTarget=null}function Fu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==a&&l.isPropagationStopped())break e;Di(l,s,d),a=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,d=s.currentTarget,s=s.listener,u!==a&&l.isPropagationStopped())break e;Di(l,s,d),a=u}}}if(Jr)throw e=_a,Jr=!1,_a=null,e}function W(e,t){var n=t[Ua];n===void 0&&(n=t[Ua]=new Set);var r=e+"__bubble";n.has(r)||(Au(t,e,2,!1),n.add(r))}function ra(e,t,n){var r=0;t&&(r|=4),Au(n,e,r,t)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[Lr]){e[Lr]=!0,Rs.forEach(function(n){n!=="selectionchange"&&(Pf.has(n)||ra(n,!1,e),ra(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lr]||(t[Lr]=!0,ra("selectionchange",!1,t))}}function Au(e,t,n,r){switch(hu(t)){case 1:var l=$d;break;case 4:l=Ud;break;default:l=bo}n=l.bind(null,t,n,e),l=void 0,!za||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function la(e,t,n,r,l){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Ot(s),o===null)return;if(u=o.tag,u===5||u===6){r=a=o;continue e}s=s.parentNode}}r=r.return}tu(function(){var d=a,g=Eo(n),h=[];e:{var m=Pu.get(e);if(m!==void 0){var w=To,k=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":w=af;break;case"focusin":k="focus",w=Zl;break;case"focusout":k="blur",w=Zl;break;case"beforeblur":case"afterblur":w=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ti;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=uf;break;case bu:case Mu:case Tu:w=qd;break;case Lu:w=df;break;case"scroll":w=Wd;break;case"wheel":w=pf;break;case"copy":case"cut":case"paste":w=Xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Pi}var E=(t&4)!==0,B=!E&&e==="scroll",f=E?m!==null?m+"Capture":null:m;E=[];for(var c=d,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=qn(c,f),v!=null&&E.push(rr(c,v,p)))),B)break;c=c.return}0<E.length&&(m=new w(m,k,null,n,g),h.push({event:m,listeners:E}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==Fa&&(k=n.relatedTarget||n.fromElement)&&(Ot(k)||k[ot]))break e;if((w||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=d,k=k?Ot(k):null,k!==null&&(B=Yt(k),k!==B||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=d),w!==k)){if(E=Ti,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=Pi,v="onPointerLeave",f="onPointerEnter",c="pointer"),B=w==null?m:tn(w),p=k==null?m:tn(k),m=new E(v,c+"leave",w,n,g),m.target=B,m.relatedTarget=p,v=null,Ot(g)===d&&(E=new E(f,c+"enter",k,n,g),E.target=p,E.relatedTarget=B,v=E),B=v,w&&k)t:{for(E=w,f=k,c=0,p=E;p;p=Kt(p))c++;for(p=0,v=f;v;v=Kt(v))p++;for(;0<c-p;)E=Kt(E),c--;for(;0<p-c;)f=Kt(f),p--;for(;c--;){if(E===f||f!==null&&E===f.alternate)break t;E=Kt(E),f=Kt(f)}E=null}else E=null;w!==null&&Hi(h,m,w,E,!1),k!==null&&B!==null&&Hi(h,B,k,E,!0)}}e:{if(m=d?tn(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var S=xf;else if(zi(m))if(ku)S=Cf;else{S=Ef;var C=kf}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Sf);if(S&&(S=S(e,d))){xu(h,S,n,g);break e}C&&C(e,m,d),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&ba(m,"number",m.value)}switch(C=d?tn(d):window,e){case"focusin":(zi(C)||C.contentEditable==="true")&&(Jt=C,Ba=d,$n=null);break;case"focusout":$n=Ba=Jt=null;break;case"mousedown":Ra=!0;break;case"contextmenu":case"mouseup":case"dragend":Ra=!1,Bi(h,n,g);break;case"selectionchange":if(Mf)break;case"keydown":case"keyup":Bi(h,n,g)}var M;if(Po)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Xt?yu(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(vu&&n.locale!=="ko"&&(Xt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Xt&&(M=gu()):(wt=g,Mo="value"in wt?wt.value:wt.textContent,Xt=!0)),C=ll(d,T),0<C.length&&(T=new Li(T,e,null,n,g),h.push({event:T,listeners:C}),M?T.data=M:(M=wu(n),M!==null&&(T.data=M)))),(M=hf?gf(e,n):vf(e,n))&&(d=ll(d,"onBeforeInput"),0<d.length&&(g=new Li("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:d}),g.data=M))}Fu(h,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ll(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=qn(e,n),a!=null&&r.unshift(rr(e,a,l)),a=qn(e,t),a!=null&&r.push(rr(e,a,l))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hi(e,t,n,r,l){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=qn(n,a),u!=null&&o.unshift(rr(n,u,s))):l||(u=qn(n,a),u!=null&&o.push(rr(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ff=/\r\n?/g,Af=/\u0000|\uFFFD/g;function Vi(e){return(typeof e=="string"?e:""+e).replace(Ff,`
`).replace(Af,"")}function Pr(e,t,n){if(t=Vi(t),Vi(e)!==t&&n)throw Error(y(425))}function al(){}var Da=null,Ha=null;function Va(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $a=typeof setTimeout=="function"?setTimeout:void 0,zf=typeof clearTimeout=="function"?clearTimeout:void 0,$i=typeof Promise=="function"?Promise:void 0,_f=typeof queueMicrotask=="function"?queueMicrotask:typeof $i<"u"?function(e){return $i.resolve(null).then(e).catch(If)}:$a;function If(e){setTimeout(function(){throw e})}function aa(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Jn(t)}function Ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ui(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),qe="__reactFiber$"+Cn,lr="__reactProps$"+Cn,ot="__reactContainer$"+Cn,Ua="__reactEvents$"+Cn,Of="__reactListeners$"+Cn,jf="__reactHandles$"+Cn;function Ot(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ui(e);e!==null;){if(n=e[qe])return n;e=Ui(e)}return t}e=n,n=e.parentNode}return null}function mr(e){return e=e[qe]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function Ml(e){return e[lr]||null}var Wa=[],nn=-1;function At(e){return{current:e}}function Q(e){0>nn||(e.current=Wa[nn],Wa[nn]=null,nn--)}function $(e,t){nn++,Wa[nn]=e.current,e.current=t}var Pt={},fe=At(Pt),we=At(!1),Ht=Pt;function gn(e,t){var n=e.type.contextTypes;if(!n)return Pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function xe(e){return e=e.childContextTypes,e!=null}function ol(){Q(we),Q(fe)}function Wi(e,t,n){if(fe.current!==Pt)throw Error(y(168));$(fe,t),$(we,n)}function zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,xd(e)||"Unknown",l));return q({},n,r)}function il(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pt,Ht=fe.current,$(fe,e),$(we,we.current),!0}function Qi(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=zu(e,t,Ht),r.__reactInternalMemoizedMergedChildContext=e,Q(we),Q(fe),$(fe,e)):Q(we),$(we,n)}var tt=null,Tl=!1,oa=!1;function _u(e){tt===null?tt=[e]:tt.push(e)}function Bf(e){Tl=!0,_u(e)}function zt(){if(!oa&&tt!==null){oa=!0;var e=0,t=D;try{var n=tt;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,Tl=!1}catch(l){throw tt!==null&&(tt=tt.slice(e+1)),au(So,zt),l}finally{D=t,oa=!1}}return null}var rn=[],ln=0,sl=null,ul=0,Pe=[],Fe=0,Vt=null,nt=1,rt="";function _t(e,t){rn[ln++]=ul,rn[ln++]=sl,sl=e,ul=t}function Iu(e,t,n){Pe[Fe++]=nt,Pe[Fe++]=rt,Pe[Fe++]=Vt,Vt=e;var r=nt;e=rt;var l=32-Ve(r)-1;r&=~(1<<l),n+=1;var a=32-Ve(t)+l;if(30<a){var o=l-l%5;a=(r&(1<<o)-1).toString(32),r>>=o,l-=o,nt=1<<32-Ve(t)+l|n<<l|r,rt=a+e}else nt=1<<a|n<<l|r,rt=e}function Ao(e){e.return!==null&&(_t(e,1),Iu(e,1,0))}function zo(e){for(;e===sl;)sl=rn[--ln],rn[ln]=null,ul=rn[--ln],rn[ln]=null;for(;e===Vt;)Vt=Pe[--Fe],Pe[Fe]=null,rt=Pe[--Fe],Pe[Fe]=null,nt=Pe[--Fe],Pe[Fe]=null}var Ce=null,Se=null,Y=!1,De=null;function Ou(e,t){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yi(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Se=Ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vt!==null?{id:nt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Se=null,!0):!1;default:return!1}}function Qa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ya(e){if(Y){var t=Se;if(t){var n=t;if(!Yi(e,t)){if(Qa(e))throw Error(y(418));t=Ct(n.nextSibling);var r=Ce;t&&Yi(e,t)?Ou(r,n):(e.flags=e.flags&-4097|2,Y=!1,Ce=e)}}else{if(Qa(e))throw Error(y(418));e.flags=e.flags&-4097|2,Y=!1,Ce=e}}}function Gi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Fr(e){if(e!==Ce)return!1;if(!Y)return Gi(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Va(e.type,e.memoizedProps)),t&&(t=Se)){if(Qa(e))throw ju(),Error(y(418));for(;t;)Ou(e,t),t=Ct(t.nextSibling)}if(Gi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=Ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ce?Ct(e.stateNode.nextSibling):null;return!0}function ju(){for(var e=Se;e;)e=Ct(e.nextSibling)}function vn(){Se=Ce=null,Y=!1}function _o(e){De===null?De=[e]:De.push(e)}var Rf=ut.ReactCurrentBatchConfig;function An(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=l.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function Ar(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ki(e){var t=e._init;return t(e._payload)}function Bu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=Tt(f,c),f.index=0,f.sibling=null,f}function a(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,v){return c===null||c.tag!==6?(c=pa(p,f.mode,v),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,v){var S=p.type;return S===Zt?g(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ht&&Ki(S)===c.type)?(v=l(c,p.props),v.ref=An(f,c,p),v.return=f,v):(v=Gr(p.type,p.key,p.props,null,f.mode,v),v.ref=An(f,c,p),v.return=f,v)}function d(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ma(p,f.mode,v),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function g(f,c,p,v,S){return c===null||c.tag!==7?(c=Dt(p,f.mode,v,S),c.return=f,c):(c=l(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=pa(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case kr:return p=Gr(c.type,c.key,c.props,null,f.mode,p),p.ref=An(f,null,c),p.return=f,p;case qt:return c=ma(c,f.mode,p),c.return=f,c;case ht:var v=c._init;return h(f,v(c._payload),p)}if(On(c)||Mn(c))return c=Dt(c,f.mode,p,null),c.return=f,c;Ar(f,c)}return null}function m(f,c,p,v){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case kr:return p.key===S?u(f,c,p,v):null;case qt:return p.key===S?d(f,c,p,v):null;case ht:return S=p._init,m(f,c,S(p._payload),v)}if(On(p)||Mn(p))return S!==null?null:g(f,c,p,v,null);Ar(f,p)}return null}function w(f,c,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(c,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case kr:return f=f.get(v.key===null?p:v.key)||null,u(c,f,v,S);case qt:return f=f.get(v.key===null?p:v.key)||null,d(c,f,v,S);case ht:var C=v._init;return w(f,c,p,C(v._payload),S)}if(On(v)||Mn(v))return f=f.get(p)||null,g(c,f,v,S,null);Ar(c,v)}return null}function k(f,c,p,v){for(var S=null,C=null,M=c,T=c=0,j=null;M!==null&&T<p.length;T++){M.index>T?(j=M,M=null):j=M.sibling;var z=m(f,M,p[T],v);if(z===null){M===null&&(M=j);break}e&&M&&z.alternate===null&&t(f,M),c=a(z,c,T),C===null?S=z:C.sibling=z,C=z,M=j}if(T===p.length)return n(f,M),Y&&_t(f,T),S;if(M===null){for(;T<p.length;T++)M=h(f,p[T],v),M!==null&&(c=a(M,c,T),C===null?S=M:C.sibling=M,C=M);return Y&&_t(f,T),S}for(M=r(f,M);T<p.length;T++)j=w(M,f,T,p[T],v),j!==null&&(e&&j.alternate!==null&&M.delete(j.key===null?T:j.key),c=a(j,c,T),C===null?S=j:C.sibling=j,C=j);return e&&M.forEach(function(se){return t(f,se)}),Y&&_t(f,T),S}function E(f,c,p,v){var S=Mn(p);if(typeof S!="function")throw Error(y(150));if(p=S.call(p),p==null)throw Error(y(151));for(var C=S=null,M=c,T=c=0,j=null,z=p.next();M!==null&&!z.done;T++,z=p.next()){M.index>T?(j=M,M=null):j=M.sibling;var se=m(f,M,z.value,v);if(se===null){M===null&&(M=j);break}e&&M&&se.alternate===null&&t(f,M),c=a(se,c,T),C===null?S=se:C.sibling=se,C=se,M=j}if(z.done)return n(f,M),Y&&_t(f,T),S;if(M===null){for(;!z.done;T++,z=p.next())z=h(f,z.value,v),z!==null&&(c=a(z,c,T),C===null?S=z:C.sibling=z,C=z);return Y&&_t(f,T),S}for(M=r(f,M);!z.done;T++,z=p.next())z=w(M,f,T,z.value,v),z!==null&&(e&&z.alternate!==null&&M.delete(z.key===null?T:z.key),c=a(z,c,T),C===null?S=z:C.sibling=z,C=z);return e&&M.forEach(function(H){return t(f,H)}),Y&&_t(f,T),S}function B(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Zt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case kr:e:{for(var S=p.key,C=c;C!==null;){if(C.key===S){if(S=p.type,S===Zt){if(C.tag===7){n(f,C.sibling),c=l(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ht&&Ki(S)===C.type){n(f,C.sibling),c=l(C,p.props),c.ref=An(f,C,p),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Zt?(c=Dt(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=Gr(p.type,p.key,p.props,null,f.mode,v),v.ref=An(f,c,p),v.return=f,f=v)}return o(f);case qt:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ma(p,f.mode,v),c.return=f,f=c}return o(f);case ht:return C=p._init,B(f,c,C(p._payload),v)}if(On(p))return k(f,c,p,v);if(Mn(p))return E(f,c,p,v);Ar(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=pa(p,f.mode,v),c.return=f,f=c),o(f)):n(f,c)}return B}var yn=Bu(!0),Ru=Bu(!1),cl=At(null),dl=null,an=null,Io=null;function Oo(){Io=an=dl=null}function jo(e){var t=cl.current;Q(cl),e._currentValue=t}function Ga(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pn(e,t){dl=e,Io=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Io!==e)if(e={context:e,memoizedValue:t,next:null},an===null){if(dl===null)throw Error(y(308));an=e,dl.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return t}var jt=null;function Bo(e){jt===null?jt=[e]:jt.push(e)}function Du(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Bo(t)):(n.next=l.next,l.next=n),t.interleaved=n,it(e,r)}function it(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function Ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,it(e,n)}return l=r.interleaved,l===null?(t.next=t,Bo(r)):(t.next=l.next,l.next=t),r.interleaved=t,it(e,n)}function Vr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Co(e,n)}}function qi(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fl(e,t,n,r){var l=e.updateQueue;gt=!1;var a=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,o===null?a=d:o.next=d,o=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=u))}if(a!==null){var h=l.baseState;o=0,g=d=u=null,s=a;do{var m=s.lane,w=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,E=s;switch(m=t,w=n,E.tag){case 1:if(k=E.payload,typeof k=="function"){h=k.call(w,h,m);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=E.payload,m=typeof k=="function"?k.call(w,h,m):k,m==null)break e;h=q({},h,m);break e;case 2:gt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else w={eventTime:w,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=w,u=h):g=g.next=w,o|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(u=h),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);Ut|=o,e.lanes=o,e.memoizedState=h}}function Zi(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var hr={},Xe=At(hr),ar=At(hr),or=At(hr);function Bt(e){if(e===hr)throw Error(y(174));return e}function Do(e,t){switch($(or,t),$(ar,e),$(Xe,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ta(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ta(t,e)}Q(Xe),$(Xe,t)}function wn(){Q(Xe),Q(ar),Q(or)}function Vu(e){Bt(or.current);var t=Bt(Xe.current),n=Ta(t,e.type);t!==n&&($(ar,e),$(Xe,n))}function Ho(e){ar.current===e&&(Q(Xe),Q(ar))}var G=At(0);function pl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ia=[];function Vo(){for(var e=0;e<ia.length;e++)ia[e]._workInProgressVersionPrimary=null;ia.length=0}var $r=ut.ReactCurrentDispatcher,sa=ut.ReactCurrentBatchConfig,$t=0,K=null,ee=null,re=null,ml=!1,Un=!1,ir=0,Df=0;function ue(){throw Error(y(321))}function $o(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function Uo(e,t,n,r,l,a){if($t=a,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$r.current=e===null||e.memoizedState===null?Uf:Wf,e=n(r,l),Un){a=0;do{if(Un=!1,ir=0,25<=a)throw Error(y(301));a+=1,re=ee=null,t.updateQueue=null,$r.current=Qf,e=n(r,l)}while(Un)}if($r.current=hl,t=ee!==null&&ee.next!==null,$t=0,re=ee=K=null,ml=!1,t)throw Error(y(300));return e}function Wo(){var e=ir!==0;return ir=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?K.memoizedState=re=e:re=re.next=e,re}function Ie(){if(ee===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?K.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(y(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?K.memoizedState=re=e:re=re.next=e}return re}function sr(e,t){return typeof t=="function"?t(e):t}function ua(e){var t=Ie(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=ee,l=r.baseQueue,a=n.pending;if(a!==null){if(l!==null){var o=l.next;l.next=a.next,a.next=o}r.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,r=r.baseState;var s=o=null,u=null,d=a;do{var g=d.lane;if(($t&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,o=r):u=u.next=h,K.lanes|=g,Ut|=g}d=d.next}while(d!==null&&d!==a);u===null?o=r:u.next=s,Ue(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do a=l.lane,K.lanes|=a,Ut|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ca(e){var t=Ie(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do a=e(a,o.action),o=o.next;while(o!==l);Ue(a,t.memoizedState)||(ye=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function $u(){}function Uu(e,t){var n=K,r=Ie(),l=t(),a=!Ue(r.memoizedState,l);if(a&&(r.memoizedState=l,ye=!0),r=r.queue,Qo(Yu.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,ur(9,Qu.bind(null,n,r,l,t),void 0,null),le===null)throw Error(y(349));$t&30||Wu(n,t,l)}return l}function Wu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qu(e,t,n,r){t.value=n,t.getSnapshot=r,Gu(t)&&Ku(e)}function Yu(e,t,n){return n(function(){Gu(t)&&Ku(e)})}function Gu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function Ku(e){var t=it(e,1);t!==null&&$e(t,e,1,-1)}function Xi(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},t.queue=e,e=e.dispatch=$f.bind(null,K,e),[t.memoizedState,e]}function ur(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qu(){return Ie().memoizedState}function Ur(e,t,n,r){var l=Ke();K.flags|=e,l.memoizedState=ur(1|t,n,void 0,r===void 0?null:r)}function Ll(e,t,n,r){var l=Ie();r=r===void 0?null:r;var a=void 0;if(ee!==null){var o=ee.memoizedState;if(a=o.destroy,r!==null&&$o(r,o.deps)){l.memoizedState=ur(t,n,a,r);return}}K.flags|=e,l.memoizedState=ur(1|t,n,a,r)}function Ji(e,t){return Ur(8390656,8,e,t)}function Qo(e,t){return Ll(2048,8,e,t)}function Zu(e,t){return Ll(4,2,e,t)}function Xu(e,t){return Ll(4,4,e,t)}function Ju(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ec(e,t,n){return n=n!=null?n.concat([e]):null,Ll(4,4,Ju.bind(null,t,e),n)}function Yo(){}function tc(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$o(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nc(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$o(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rc(e,t,n){return $t&21?(Ue(n,t)||(n=su(),K.lanes|=n,Ut|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function Hf(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=sa.transition;sa.transition={};try{e(!1),t()}finally{D=n,sa.transition=r}}function lc(){return Ie().memoizedState}function Vf(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ac(e))oc(t,n);else if(n=Du(e,t,n,r),n!==null){var l=me();$e(n,e,r,l),ic(n,t,r)}}function $f(e,t,n){var r=Mt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ac(e))oc(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(l.hasEagerState=!0,l.eagerState=s,Ue(s,o)){var u=t.interleaved;u===null?(l.next=l,Bo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Du(e,t,l,r),n!==null&&(l=me(),$e(n,e,r,l),ic(n,t,r))}}function ac(e){var t=e.alternate;return e===K||t!==null&&t===K}function oc(e,t){Un=ml=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ic(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Co(e,n)}}var hl={readContext:_e,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Uf={readContext:_e,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Ji,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ur(4194308,4,Ju.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ur(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ur(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vf.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:Xi,useDebugValue:Yo,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Xi(!1),t=e[0];return e=Hf.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,l=Ke();if(Y){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),le===null)throw Error(y(349));$t&30||Wu(r,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,Ji(Yu.bind(null,r,a,e),[e]),r.flags|=2048,ur(9,Qu.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ke(),t=le.identifierPrefix;if(Y){var n=rt,r=nt;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Df++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wf={readContext:_e,useCallback:tc,useContext:_e,useEffect:Qo,useImperativeHandle:ec,useInsertionEffect:Zu,useLayoutEffect:Xu,useMemo:nc,useReducer:ua,useRef:qu,useState:function(){return ua(sr)},useDebugValue:Yo,useDeferredValue:function(e){var t=Ie();return rc(t,ee.memoizedState,e)},useTransition:function(){var e=ua(sr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:$u,useSyncExternalStore:Uu,useId:lc,unstable_isNewReconciler:!1},Qf={readContext:_e,useCallback:tc,useContext:_e,useEffect:Qo,useImperativeHandle:ec,useInsertionEffect:Zu,useLayoutEffect:Xu,useMemo:nc,useReducer:ca,useRef:qu,useState:function(){return ca(sr)},useDebugValue:Yo,useDeferredValue:function(e){var t=Ie();return ee===null?t.memoizedState=e:rc(t,ee.memoizedState,e)},useTransition:function(){var e=ca(sr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:$u,useSyncExternalStore:Uu,useId:lc,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ka(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pl={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),l=Mt(e),a=lt(r,l);a.payload=t,n!=null&&(a.callback=n),t=Nt(e,a,l),t!==null&&($e(t,e,l,r),Vr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),l=Mt(e),a=lt(r,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Nt(e,a,l),t!==null&&($e(t,e,l,r),Vr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=Mt(e),l=lt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Nt(e,l,r),t!==null&&($e(t,e,r,n),Vr(t,e,r))}};function es(e,t,n,r,l,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!tr(n,r)||!tr(l,a):!0}function sc(e,t,n){var r=!1,l=Pt,a=t.contextType;return typeof a=="object"&&a!==null?a=_e(a):(l=xe(t)?Ht:fe.current,r=t.contextTypes,a=(r=r!=null)?gn(e,l):Pt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function ts(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pl.enqueueReplaceState(t,t.state,null)}function qa(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ro(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=_e(a):(a=xe(t)?Ht:fe.current,l.context=gn(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ka(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Pl.enqueueReplaceState(l,l.state,null),fl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=wd(r),r=r.return;while(r);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function da(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Za(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Yf=typeof WeakMap=="function"?WeakMap:Map;function uc(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vl||(vl=!0,io=r),Za(e,t)},n}function cc(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Za(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Za(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ns(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Yf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=ip.bind(null,e,t,n),t.then(e,e))}function rs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ls(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Gf=ut.ReactCurrentOwner,ye=!1;function pe(e,t,n,r){t.child=e===null?Ru(t,null,n,r):yn(t,e.child,n,r)}function as(e,t,n,r,l){n=n.render;var a=t.ref;return pn(t,l),r=Uo(e,t,n,r,a,l),n=Wo(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,st(e,t,l)):(Y&&n&&Ao(t),t.flags|=1,pe(e,t,r,l),t.child)}function os(e,t,n,r,l){if(e===null){var a=n.type;return typeof a=="function"&&!ti(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,dc(e,t,a,r,l)):(e=Gr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&l)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:tr,n(o,r)&&e.ref===t.ref)return st(e,t,l)}return t.flags|=1,e=Tt(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,l){if(e!==null){var a=e.memoizedProps;if(tr(a,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=a,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,st(e,t,l)}return Xa(e,t,n,r,l)}function fc(e,t,n){var r=t.pendingProps,l=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(sn,Ee),Ee|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(sn,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,$(sn,Ee),Ee|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,$(sn,Ee),Ee|=r;return pe(e,t,l,n),t.child}function pc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xa(e,t,n,r,l){var a=xe(n)?Ht:fe.current;return a=gn(t,a),pn(t,l),n=Uo(e,t,n,r,a,l),r=Wo(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,st(e,t,l)):(Y&&r&&Ao(t),t.flags|=1,pe(e,t,n,l),t.child)}function is(e,t,n,r,l){if(xe(n)){var a=!0;il(t)}else a=!1;if(pn(t,l),t.stateNode===null)Wr(e,t),sc(t,n,r),qa(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=_e(d):(d=xe(n)?Ht:fe.current,d=gn(t,d));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==d)&&ts(t,o,r,d),gt=!1;var m=t.memoizedState;o.state=m,fl(t,r,o,l),u=t.memoizedState,s!==r||m!==u||we.current||gt?(typeof g=="function"&&(Ka(t,n,g,r),u=t.memoizedState),(s=gt||es(t,n,s,r,m,u,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Hu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Be(t.type,s),o.props=d,h=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=xe(n)?Ht:fe.current,u=gn(t,u));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||m!==u)&&ts(t,o,r,u),gt=!1,m=t.memoizedState,o.state=m,fl(t,r,o,l);var k=t.memoizedState;s!==h||m!==k||we.current||gt?(typeof w=="function"&&(Ka(t,n,w,r),k=t.memoizedState),(d=gt||es(t,n,d,r,m,k,u)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ja(e,t,n,r,a,l)}function Ja(e,t,n,r,l,a){pc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Qi(t,n,!1),st(e,t,a);r=t.stateNode,Gf.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=yn(t,e.child,null,a),t.child=yn(t,null,s,a)):pe(e,t,s,a),t.memoizedState=r.state,l&&Qi(t,n,!0),t.child}function mc(e){var t=e.stateNode;t.pendingContext?Wi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wi(e,t.context,!1),Do(e,t.containerInfo)}function ss(e,t,n,r,l){return vn(),_o(l),t.flags|=256,pe(e,t,n,r),t.child}var eo={dehydrated:null,treeContext:null,retryLane:0};function to(e){return{baseLanes:e,cachePool:null,transitions:null}}function hc(e,t,n){var r=t.pendingProps,l=G.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),$(G,l&1),e===null)return Ya(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=zl(o,r,0,null),e=Dt(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=to(n),t.memoizedState=eo,e):Go(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Kf(e,t,o,r,s,l,n);if(a){a=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Tt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?a=Tt(s,a):(a=Dt(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?to(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=eo,r}return a=e.child,e=a.sibling,r=Tt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Go(e,t){return t=zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,r){return r!==null&&_o(r),yn(t,e.child,null,n),e=Go(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kf(e,t,n,r,l,a,o){if(n)return t.flags&256?(t.flags&=-257,r=da(Error(y(422))),zr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,l=t.mode,r=zl({mode:"visible",children:r.children},l,0,null),a=Dt(a,l,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&yn(t,e.child,null,o),t.child.memoizedState=to(o),t.memoizedState=eo,a);if(!(t.mode&1))return zr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(y(419)),r=da(a,r,void 0),zr(e,t,o,r)}if(s=(o&e.childLanes)!==0,ye||s){if(r=le,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,it(e,l),$e(r,e,l,-1))}return ei(),r=da(Error(y(421))),zr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=sp.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,Se=Ct(l.nextSibling),Ce=t,Y=!0,De=null,e!==null&&(Pe[Fe++]=nt,Pe[Fe++]=rt,Pe[Fe++]=Vt,nt=e.id,rt=e.overflow,Vt=t),t=Go(t,r.children),t.flags|=4096,t)}function us(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ga(e.return,t,n)}function fa(e,t,n,r,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=l)}function gc(e,t,n){var r=t.pendingProps,l=r.revealOrder,a=r.tail;if(pe(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&us(e,n,t);else if(e.tag===19)us(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(G,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&pl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),fa(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&pl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}fa(t,!0,n,null,a);break;case"together":fa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ut|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qf(e,t,n){switch(t.tag){case 3:mc(t),vn();break;case 5:Vu(t);break;case 1:xe(t.type)&&il(t);break;case 4:Do(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;$(cl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?hc(e,t,n):($(G,G.current&1),e=st(e,t,n),e!==null?e.sibling:null);$(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,fc(e,t,n)}return st(e,t,n)}var vc,no,yc,wc;vc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};no=function(){};yc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Bt(Xe.current);var a=null;switch(n){case"input":l=Ca(e,l),r=Ca(e,r),a=[];break;case"select":l=q({},l,{value:void 0}),r=q({},r,{value:void 0}),a=[];break;case"textarea":l=Ma(e,l),r=Ma(e,r),a=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=al)}La(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Gn.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&W("scroll",e),a||s===u||(a=[])):(a=a||[]).push(d,u))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};wc=function(e,t,n,r){n!==r&&(t.flags|=4)};function zn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zf(e,t,n){var r=t.pendingProps;switch(zo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return xe(t.type)&&ol(),ce(t),null;case 3:return r=t.stateNode,wn(),Q(we),Q(fe),Vo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(co(De),De=null))),no(e,t),ce(t),null;case 5:Ho(t);var l=Bt(or.current);if(n=t.type,e!==null&&t.stateNode!=null)yc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ce(t),null}if(e=Bt(Xe.current),Fr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[qe]=t,r[lr]=a,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(l=0;l<Bn.length;l++)W(Bn[l],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":yi(r,a),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},W("invalid",r);break;case"textarea":xi(r,a),W("invalid",r)}La(n,a),l=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Pr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Pr(r.textContent,s,e),l=["children",""+s]):Gn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":Er(r),wi(r,a,!0);break;case"textarea":Er(r),ki(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=al)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ys(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[qe]=t,e[lr]=r,vc(e,t,!1,!1),t.stateNode=e;e:{switch(o=Pa(n,r),n){case"dialog":W("cancel",e),W("close",e),l=r;break;case"iframe":case"object":case"embed":W("load",e),l=r;break;case"video":case"audio":for(l=0;l<Bn.length;l++)W(Bn[l],e);l=r;break;case"source":W("error",e),l=r;break;case"img":case"image":case"link":W("error",e),W("load",e),l=r;break;case"details":W("toggle",e),l=r;break;case"input":yi(e,r),l=Ca(e,r),W("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=q({},r,{value:void 0}),W("invalid",e);break;case"textarea":xi(e,r),l=Ma(e,r),W("invalid",e);break;default:l=r}La(n,l),s=l;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?qs(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gs(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Kn(e,u):typeof u=="number"&&Kn(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Gn.hasOwnProperty(a)?u!=null&&a==="onScroll"&&W("scroll",e):u!=null&&yo(e,a,u,o))}switch(n){case"input":Er(e),wi(e,r,!1);break;case"textarea":Er(e),ki(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?un(e,!!r.multiple,a,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)wc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Bt(or.current),Bt(Xe.current),Fr(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(a=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:Pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return ce(t),null;case 13:if(Q(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Se!==null&&t.mode&1&&!(t.flags&128))ju(),vn(),t.flags|=98560,a=!1;else if(a=Fr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(y(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(y(317));a[qe]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),a=!1}else De!==null&&(co(De),De=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?te===0&&(te=3):ei())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return wn(),no(e,t),e===null&&nr(t.stateNode.containerInfo),ce(t),null;case 10:return jo(t.type._context),ce(t),null;case 17:return xe(t.type)&&ol(),ce(t),null;case 19:if(Q(G),a=t.memoizedState,a===null)return ce(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)zn(a,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=pl(e),o!==null){for(t.flags|=128,zn(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(G,G.current&1|2),t.child}e=e.sibling}a.tail!==null&&X()>kn&&(t.flags|=128,r=!0,zn(a,!1),t.lanes=4194304)}else{if(!r)if(e=pl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Y)return ce(t),null}else 2*X()-a.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,zn(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=X(),t.sibling=null,n=G.current,$(G,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Jo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Xf(e,t){switch(zo(t),t.tag){case 1:return xe(t.type)&&ol(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(),Q(we),Q(fe),Vo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ho(t),null;case 13:if(Q(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(G),null;case 4:return wn(),null;case 10:return jo(t.type._context),null;case 22:case 23:return Jo(),null;case 24:return null;default:return null}}var _r=!1,de=!1,Jf=typeof WeakSet=="function"?WeakSet:Set,b=null;function on(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function ro(e,t,n){try{n()}catch(r){Z(e,t,r)}}var cs=!1;function ep(e,t){if(Da=nl,e=Cu(),Fo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,d=0,g=0,h=e,m=null;t:for(;;){for(var w;h!==n||l!==0&&h.nodeType!==3||(s=o+l),h!==a||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(w=h.firstChild)!==null;)m=h,h=w;for(;;){if(h===e)break t;if(m===n&&++d===l&&(s=o),m===a&&++g===r&&(u=o),(w=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ha={focusedElem:e,selectionRange:n},nl=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var E=k.memoizedProps,B=k.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?E:Be(t.type,E),B);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){Z(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return k=cs,cs=!1,k}function Wn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&ro(t,n,a)}l=l.next}while(l!==r)}}function Fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function lo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xc(e){var t=e.alternate;t!==null&&(e.alternate=null,xc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[lr],delete t[Ua],delete t[Of],delete t[jf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kc(e){return e.tag===5||e.tag===3||e.tag===4}function ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=al));else if(r!==4&&(e=e.child,e!==null))for(ao(e,t,n),e=e.sibling;e!==null;)ao(e,t,n),e=e.sibling}function oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oo(e,t,n),e=e.sibling;e!==null;)oo(e,t,n),e=e.sibling}var ae=null,Re=!1;function mt(e,t,n){for(n=n.child;n!==null;)Ec(e,t,n),n=n.sibling}function Ec(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:de||on(n,t);case 6:var r=ae,l=Re;ae=null,mt(e,t,n),ae=r,Re=l,ae!==null&&(Re?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Re?(e=ae,n=n.stateNode,e.nodeType===8?aa(e.parentNode,n):e.nodeType===1&&aa(e,n),Jn(e)):aa(ae,n.stateNode));break;case 4:r=ae,l=Re,ae=n.stateNode.containerInfo,Re=!0,mt(e,t,n),ae=r,Re=l;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var a=l,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&ro(n,t,o),l=l.next}while(l!==r)}mt(e,t,n);break;case 1:if(!de&&(on(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Z(n,t,s)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,mt(e,t,n),de=r):mt(e,t,n);break;default:mt(e,t,n)}}function fs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jf),t.forEach(function(r){var l=up.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,Re=!1;break e;case 3:ae=s.stateNode.containerInfo,Re=!0;break e;case 4:ae=s.stateNode.containerInfo,Re=!0;break e}s=s.return}if(ae===null)throw Error(y(160));Ec(a,o,l),ae=null,Re=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){Z(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sc(t,e),t=t.sibling}function Sc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(t,e),Ge(e),r&4){try{Wn(3,e,e.return),Fl(3,e)}catch(E){Z(e,e.return,E)}try{Wn(5,e,e.return)}catch(E){Z(e,e.return,E)}}break;case 1:je(t,e),Ge(e),r&512&&n!==null&&on(n,n.return);break;case 5:if(je(t,e),Ge(e),r&512&&n!==null&&on(n,n.return),e.flags&32){var l=e.stateNode;try{Kn(l,"")}catch(E){Z(e,e.return,E)}}if(r&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Ws(l,a),Pa(s,o);var d=Pa(s,a);for(o=0;o<u.length;o+=2){var g=u[o],h=u[o+1];g==="style"?qs(l,h):g==="dangerouslySetInnerHTML"?Gs(l,h):g==="children"?Kn(l,h):yo(l,g,h,d)}switch(s){case"input":Na(l,a);break;case"textarea":Qs(l,a);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?un(l,!!a.multiple,w,!1):m!==!!a.multiple&&(a.defaultValue!=null?un(l,!!a.multiple,a.defaultValue,!0):un(l,!!a.multiple,a.multiple?[]:"",!1))}l[lr]=a}catch(E){Z(e,e.return,E)}}break;case 6:if(je(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(E){Z(e,e.return,E)}}break;case 3:if(je(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jn(t.containerInfo)}catch(E){Z(e,e.return,E)}break;case 4:je(t,e),Ge(e);break;case 13:je(t,e),Ge(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(Zo=X())),r&4&&fs(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(de=(d=de)||g,je(t,e),de=d):je(t,e),Ge(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(b=e,g=e.child;g!==null;){for(h=b=g;b!==null;){switch(m=b,w=m.child,m.tag){case 0:case 11:case 14:case 15:Wn(4,m,m.return);break;case 1:on(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(E){Z(r,n,E)}}break;case 5:on(m,m.return);break;case 22:if(m.memoizedState!==null){ms(h);continue}}w!==null?(w.return=m,b=w):ms(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,d?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ks("display",o))}catch(E){Z(e,e.return,E)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(E){Z(e,e.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:je(t,e),Ge(e),r&4&&fs(e);break;case 21:break;default:je(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kc(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Kn(l,""),r.flags&=-33);var a=ds(e);oo(e,a,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=ds(e);ao(e,s,o);break;default:throw Error(y(161))}}catch(u){Z(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tp(e,t,n){b=e,Cc(e)}function Cc(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var l=b,a=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||_r;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||de;s=_r;var d=de;if(_r=o,(de=u)&&!d)for(b=l;b!==null;)o=b,u=o.child,o.tag===22&&o.memoizedState!==null?hs(l):u!==null?(u.return=o,b=u):hs(l);for(;a!==null;)b=a,Cc(a),a=a.sibling;b=l,_r=s,de=d}ps(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,b=a):ps(e)}}function ps(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Zi(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zi(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Jn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}de||t.flags&512&&lo(t)}catch(m){Z(t,t.return,m)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function ms(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function hs(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fl(4,t)}catch(u){Z(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Z(t,l,u)}}var a=t.return;try{lo(t)}catch(u){Z(t,a,u)}break;case 5:var o=t.return;try{lo(t)}catch(u){Z(t,o,u)}}}catch(u){Z(t,t.return,u)}if(t===e){b=null;break}var s=t.sibling;if(s!==null){s.return=t.return,b=s;break}b=t.return}}var np=Math.ceil,gl=ut.ReactCurrentDispatcher,Ko=ut.ReactCurrentOwner,ze=ut.ReactCurrentBatchConfig,I=0,le=null,J=null,oe=0,Ee=0,sn=At(0),te=0,cr=null,Ut=0,Al=0,qo=0,Qn=null,ve=null,Zo=0,kn=1/0,et=null,vl=!1,io=null,bt=null,Ir=!1,xt=null,yl=0,Yn=0,so=null,Qr=-1,Yr=0;function me(){return I&6?X():Qr!==-1?Qr:Qr=X()}function Mt(e){return e.mode&1?I&2&&oe!==0?oe&-oe:Rf.transition!==null?(Yr===0&&(Yr=su()),Yr):(e=D,e!==0||(e=window.event,e=e===void 0?16:hu(e.type)),e):1}function $e(e,t,n,r){if(50<Yn)throw Yn=0,so=null,Error(y(185));fr(e,n,r),(!(I&2)||e!==le)&&(e===le&&(!(I&2)&&(Al|=n),te===4&&yt(e,oe)),ke(e,r),n===1&&I===0&&!(t.mode&1)&&(kn=X()+500,Tl&&zt()))}function ke(e,t){var n=e.callbackNode;Bd(e,t);var r=tl(e,e===le?oe:0);if(r===0)n!==null&&Ci(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ci(n),t===1)e.tag===0?Bf(gs.bind(null,e)):_u(gs.bind(null,e)),_f(function(){!(I&6)&&zt()}),n=null;else{switch(uu(r)){case 1:n=So;break;case 4:n=ou;break;case 16:n=el;break;case 536870912:n=iu;break;default:n=el}n=Ac(n,Nc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nc(e,t){if(Qr=-1,Yr=0,I&6)throw Error(y(327));var n=e.callbackNode;if(mn()&&e.callbackNode!==n)return null;var r=tl(e,e===le?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wl(e,r);else{t=r;var l=I;I|=2;var a=Mc();(le!==e||oe!==t)&&(et=null,kn=X()+500,Rt(e,t));do try{ap();break}catch(s){bc(e,s)}while(!0);Oo(),gl.current=a,I=l,J!==null?t=0:(le=null,oe=0,t=te)}if(t!==0){if(t===2&&(l=Ia(e),l!==0&&(r=l,t=uo(e,l))),t===1)throw n=cr,Rt(e,0),yt(e,r),ke(e,X()),n;if(t===6)yt(e,r);else{if(l=e.current.alternate,!(r&30)&&!rp(l)&&(t=wl(e,r),t===2&&(a=Ia(e),a!==0&&(r=a,t=uo(e,a))),t===1))throw n=cr,Rt(e,0),yt(e,r),ke(e,X()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:It(e,ve,et);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=Zo+500-X(),10<t)){if(tl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=$a(It.bind(null,e,ve,et),t);break}It(e,ve,et);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ve(r);a=1<<o,o=t[o],o>l&&(l=o),r&=~a}if(r=l,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*np(r/1960))-r,10<r){e.timeoutHandle=$a(It.bind(null,e,ve,et),r);break}It(e,ve,et);break;case 5:It(e,ve,et);break;default:throw Error(y(329))}}}return ke(e,X()),e.callbackNode===n?Nc.bind(null,e):null}function uo(e,t){var n=Qn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=wl(e,t),e!==2&&(t=ve,ve=n,t!==null&&co(t)),e}function co(e){ve===null?ve=e:ve.push.apply(ve,e)}function rp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],a=l.getSnapshot;l=l.value;try{if(!Ue(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~qo,t&=~Al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function gs(e){if(I&6)throw Error(y(327));mn();var t=tl(e,0);if(!(t&1))return ke(e,X()),null;var n=wl(e,t);if(e.tag!==0&&n===2){var r=Ia(e);r!==0&&(t=r,n=uo(e,r))}if(n===1)throw n=cr,Rt(e,0),yt(e,t),ke(e,X()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,ve,et),ke(e,X()),null}function Xo(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(kn=X()+500,Tl&&zt())}}function Wt(e){xt!==null&&xt.tag===0&&!(I&6)&&mn();var t=I;I|=1;var n=ze.transition,r=D;try{if(ze.transition=null,D=1,e)return e()}finally{D=r,ze.transition=n,I=t,!(I&6)&&zt()}}function Jo(){Ee=sn.current,Q(sn)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zf(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(zo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ol();break;case 3:wn(),Q(we),Q(fe),Vo();break;case 5:Ho(r);break;case 4:wn();break;case 13:Q(G);break;case 19:Q(G);break;case 10:jo(r.type._context);break;case 22:case 23:Jo()}n=n.return}if(le=e,J=e=Tt(e.current,null),oe=Ee=t,te=0,cr=null,qo=Al=Ut=0,ve=Qn=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=l,r.next=o}n.pending=r}jt=null}return e}function bc(e,t){do{var n=J;try{if(Oo(),$r.current=hl,ml){for(var r=K.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ml=!1}if($t=0,re=ee=K=null,Un=!1,ir=0,Ko.current=null,n===null||n.return===null){te=1,cr=t,J=null;break}e:{var a=e,o=n.return,s=n,u=t;if(t=oe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=rs(o);if(w!==null){w.flags&=-257,ls(w,o,s,a,t),w.mode&1&&ns(a,d,t),t=w,u=d;var k=t.updateQueue;if(k===null){var E=new Set;E.add(u),t.updateQueue=E}else k.add(u);break e}else{if(!(t&1)){ns(a,d,t),ei();break e}u=Error(y(426))}}else if(Y&&s.mode&1){var B=rs(o);if(B!==null){!(B.flags&65536)&&(B.flags|=256),ls(B,o,s,a,t),_o(xn(u,s));break e}}a=u=xn(u,s),te!==4&&(te=2),Qn===null?Qn=[a]:Qn.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=uc(a,u,t);qi(a,f);break e;case 1:s=u;var c=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(bt===null||!bt.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var v=cc(a,s,t);qi(a,v);break e}}a=a.return}while(a!==null)}Lc(n)}catch(S){t=S,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function Mc(){var e=gl.current;return gl.current=hl,e===null?hl:e}function ei(){(te===0||te===3||te===2)&&(te=4),le===null||!(Ut&268435455)&&!(Al&268435455)||yt(le,oe)}function wl(e,t){var n=I;I|=2;var r=Mc();(le!==e||oe!==t)&&(et=null,Rt(e,t));do try{lp();break}catch(l){bc(e,l)}while(!0);if(Oo(),I=n,gl.current=r,J!==null)throw Error(y(261));return le=null,oe=0,te}function lp(){for(;J!==null;)Tc(J)}function ap(){for(;J!==null&&!Ld();)Tc(J)}function Tc(e){var t=Fc(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?Lc(e):J=t,Ko.current=null}function Lc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Xf(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,J=null;return}}else if(n=Zf(n,t,Ee),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);te===0&&(te=5)}function It(e,t,n){var r=D,l=ze.transition;try{ze.transition=null,D=1,op(e,t,n,r)}finally{ze.transition=l,D=r}return null}function op(e,t,n,r){do mn();while(xt!==null);if(I&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Rd(e,a),e===le&&(J=le=null,oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ir||(Ir=!0,Ac(el,function(){return mn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=ze.transition,ze.transition=null;var o=D;D=1;var s=I;I|=4,Ko.current=null,ep(e,n),Sc(n,e),bf(Ha),nl=!!Da,Ha=Da=null,e.current=n,tp(n),Pd(),I=s,D=o,ze.transition=a}else e.current=n;if(Ir&&(Ir=!1,xt=e,yl=l),a=e.pendingLanes,a===0&&(bt=null),zd(n.stateNode),ke(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(vl)throw vl=!1,e=io,io=null,e;return yl&1&&e.tag!==0&&mn(),a=e.pendingLanes,a&1?e===so?Yn++:(Yn=0,so=e):Yn=0,zt(),null}function mn(){if(xt!==null){var e=uu(yl),t=ze.transition,n=D;try{if(ze.transition=null,D=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,yl=0,I&6)throw Error(y(331));var l=I;for(I|=4,b=e.current;b!==null;){var a=b,o=a.child;if(b.flags&16){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(b=d;b!==null;){var g=b;switch(g.tag){case 0:case 11:case 15:Wn(8,g,a)}var h=g.child;if(h!==null)h.return=g,b=h;else for(;b!==null;){g=b;var m=g.sibling,w=g.return;if(xc(g),g===d){b=null;break}if(m!==null){m.return=w,b=m;break}b=w}}}var k=a.alternate;if(k!==null){var E=k.child;if(E!==null){k.child=null;do{var B=E.sibling;E.sibling=null,E=B}while(E!==null)}}b=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,b=o;else e:for(;b!==null;){if(a=b,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Wn(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,b=f;break e}b=a.return}}var c=e.current;for(b=c;b!==null;){o=b;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,b=p;else e:for(o=c;b!==null;){if(s=b,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Fl(9,s)}}catch(S){Z(s,s.return,S)}if(s===o){b=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,b=v;break e}b=s.return}}if(I=l,zt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Sl,e)}catch{}r=!0}return r}finally{D=n,ze.transition=t}}return!1}function vs(e,t,n){t=xn(n,t),t=uc(e,t,1),e=Nt(e,t,1),t=me(),e!==null&&(fr(e,1,t),ke(e,t))}function Z(e,t,n){if(e.tag===3)vs(e,e,n);else for(;t!==null;){if(t.tag===3){vs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=xn(n,e),e=cc(t,e,1),t=Nt(t,e,1),e=me(),t!==null&&(fr(t,1,e),ke(t,e));break}}t=t.return}}function ip(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(oe&n)===n&&(te===4||te===3&&(oe&130023424)===oe&&500>X()-Zo?Rt(e,0):qo|=n),ke(e,t)}function Pc(e,t){t===0&&(e.mode&1?(t=Nr,Nr<<=1,!(Nr&130023424)&&(Nr=4194304)):t=1);var n=me();e=it(e,t),e!==null&&(fr(e,t,n),ke(e,n))}function sp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pc(e,n)}function up(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Pc(e,n)}var Fc;Fc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,qf(e,t,n);ye=!!(e.flags&131072)}else ye=!1,Y&&t.flags&1048576&&Iu(t,ul,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wr(e,t),e=t.pendingProps;var l=gn(t,fe.current);pn(t,n),l=Uo(null,t,r,e,l,n);var a=Wo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(a=!0,il(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ro(t),l.updater=Pl,t.stateNode=l,l._reactInternals=t,qa(t,r,e,n),t=Ja(null,t,r,!0,a,n)):(t.tag=0,Y&&a&&Ao(t),pe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=dp(r),e=Be(r,e),l){case 0:t=Xa(null,t,r,e,n);break e;case 1:t=is(null,t,r,e,n);break e;case 11:t=as(null,t,r,e,n);break e;case 14:t=os(null,t,r,Be(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),Xa(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),is(e,t,r,l,n);case 3:e:{if(mc(t),e===null)throw Error(y(387));r=t.pendingProps,a=t.memoizedState,l=a.element,Hu(e,t),fl(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=xn(Error(y(423)),t),t=ss(e,t,r,n,l);break e}else if(r!==l){l=xn(Error(y(424)),t),t=ss(e,t,r,n,l);break e}else for(Se=Ct(t.stateNode.containerInfo.firstChild),Ce=t,Y=!0,De=null,n=Ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===l){t=st(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return Vu(t),e===null&&Ya(t),r=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,o=l.children,Va(r,l)?o=null:a!==null&&Va(r,a)&&(t.flags|=32),pc(e,t),pe(e,t,o,n),t.child;case 6:return e===null&&Ya(t),null;case 13:return hc(e,t,n);case 4:return Do(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),as(e,t,r,l,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,a=t.memoizedProps,o=l.value,$(cl,r._currentValue),r._currentValue=o,a!==null)if(Ue(a.value,o)){if(a.children===l.children&&!we.current){t=st(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=lt(-1,n&-n),u.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Ga(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(y(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ga(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}pe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,pn(t,n),l=_e(l),r=r(l),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,l=Be(r,t.pendingProps),l=Be(r.type,l),os(e,t,r,l,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),Wr(e,t),t.tag=1,xe(r)?(e=!0,il(t)):e=!1,pn(t,n),sc(t,r,l),qa(t,r,l,n),Ja(null,t,r,!0,e,n);case 19:return gc(e,t,n);case 22:return fc(e,t,n)}throw Error(y(156,t.tag))};function Ac(e,t){return au(e,t)}function cp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,n,r){return new cp(e,t,n,r)}function ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dp(e){if(typeof e=="function")return ti(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xo)return 11;if(e===ko)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=Ae(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gr(e,t,n,r,l,a){var o=2;if(r=e,typeof e=="function")ti(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Zt:return Dt(n.children,l,a,t);case wo:o=8,l|=8;break;case xa:return e=Ae(12,n,t,l|2),e.elementType=xa,e.lanes=a,e;case ka:return e=Ae(13,n,t,l),e.elementType=ka,e.lanes=a,e;case Ea:return e=Ae(19,n,t,l),e.elementType=Ea,e.lanes=a,e;case Vs:return zl(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ds:o=10;break e;case Hs:o=9;break e;case xo:o=11;break e;case ko:o=14;break e;case ht:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ae(o,n,t,l),t.elementType=e,t.type=r,t.lanes=a,t}function Dt(e,t,n,r){return e=Ae(7,e,r,t),e.lanes=n,e}function zl(e,t,n,r){return e=Ae(22,e,r,t),e.elementType=Vs,e.lanes=n,e.stateNode={isHidden:!1},e}function pa(e,t,n){return e=Ae(6,e,null,t),e.lanes=n,e}function ma(e,t,n){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ni(e,t,n,r,l,a,o,s,u){return e=new fp(e,t,n,s,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ae(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ro(a),e}function pp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zc(e){if(!e)return Pt;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(xe(n))return zu(e,n,t)}return t}function _c(e,t,n,r,l,a,o,s,u){return e=ni(n,r,!0,e,l,a,o,s,u),e.context=zc(null),n=e.current,r=me(),l=Mt(n),a=lt(r,l),a.callback=t??null,Nt(n,a,l),e.current.lanes=l,fr(e,l,r),ke(e,r),e}function _l(e,t,n,r){var l=t.current,a=me(),o=Mt(l);return n=zc(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(l,t,o),e!==null&&($e(e,l,o,a),Vr(e,l,o)),o}function xl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ys(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ri(e,t){ys(e,t),(e=e.alternate)&&ys(e,t)}function mp(){return null}var Ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function li(e){this._internalRoot=e}Il.prototype.render=li.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));_l(e,t,null,null)};Il.prototype.unmount=li.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){_l(null,e,null,null)}),t[ot]=null}};function Il(e){this._internalRoot=e}Il.prototype.unstable_scheduleHydration=function(e){if(e){var t=fu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&mu(e)}};function ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ws(){}function hp(e,t,n,r,l){if(l){if(typeof r=="function"){var a=r;r=function(){var d=xl(o);a.call(d)}}var o=_c(t,r,e,0,null,!1,!1,"",ws);return e._reactRootContainer=o,e[ot]=o.current,nr(e.nodeType===8?e.parentNode:e),Wt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=xl(u);s.call(d)}}var u=ni(e,0,!1,null,null,!1,!1,"",ws);return e._reactRootContainer=u,e[ot]=u.current,nr(e.nodeType===8?e.parentNode:e),Wt(function(){_l(t,u,n,r)}),u}function jl(e,t,n,r,l){var a=n._reactRootContainer;if(a){var o=a;if(typeof l=="function"){var s=l;l=function(){var u=xl(o);s.call(u)}}_l(t,o,e,l)}else o=hp(n,t,e,l,r);return xl(o)}cu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(Co(t,n|1),ke(t,X()),!(I&6)&&(kn=X()+500,zt()))}break;case 13:Wt(function(){var r=it(e,1);if(r!==null){var l=me();$e(r,e,1,l)}}),ri(e,1)}};No=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var n=me();$e(t,e,134217728,n)}ri(e,134217728)}};du=function(e){if(e.tag===13){var t=Mt(e),n=it(e,t);if(n!==null){var r=me();$e(n,e,t,r)}ri(e,t)}};fu=function(){return D};pu=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Aa=function(e,t,n){switch(t){case"input":if(Na(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Ml(r);if(!l)throw Error(y(90));Us(r),Na(r,l)}}}break;case"textarea":Qs(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Js=Xo;eu=Wt;var gp={usingClientEntryPoint:!1,Events:[mr,tn,Ml,Zs,Xs,Xo]},_n={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vp={bundleType:_n.bundleType,version:_n.version,rendererPackageName:_n.rendererPackageName,rendererConfig:_n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ru(e),e===null?null:e.stateNode},findFiberByHostInstance:_n.findFiberByHostInstance||mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{Sl=Or.inject(vp),Ze=Or}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gp;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ai(t))throw Error(y(200));return pp(e,t,null,n)};be.createRoot=function(e,t){if(!ai(e))throw Error(y(299));var n=!1,r="",l=Ic;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ni(e,1,!1,null,null,n,!1,r,l),e[ot]=t.current,nr(e.nodeType===8?e.parentNode:e),new li(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=ru(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Wt(e)};be.hydrate=function(e,t,n){if(!Ol(t))throw Error(y(200));return jl(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!ai(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,a="",o=Ic;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=_c(t,null,e,1,n??null,l,!1,a,o),e[ot]=t.current,nr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Il(t)};be.render=function(e,t,n){if(!Ol(t))throw Error(y(200));return jl(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!Ol(e))throw Error(y(40));return e._reactRootContainer?(Wt(function(){jl(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};be.unstable_batchedUpdates=Xo;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ol(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return jl(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function Oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oc)}catch(e){console.error(e)}}Oc(),Os.exports=be;var yp=Os.exports,jc,xs=yp;jc=xs.createRoot,xs.hydrateRoot;const wp="modulepreload",xp=function(e){return"/"+e},ks={},kp=function(t,n,r){let l=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),s=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));l=Promise.allSettled(n.map(u=>{if(u=xp(u),u in ks)return;ks[u]=!0;const d=u.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${g}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":wp,d||(h.as="script"),h.crossOrigin="",h.href=u,s&&h.setAttribute("nonce",s),document.head.appendChild(h),d)return new Promise((m,w)=>{h.addEventListener("load",m),h.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return l.then(o=>{for(const s of o||[])s.status==="rejected"&&a(s.reason);return t().catch(a)})};var Bc={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Es=i.createContext&&i.createContext(Bc),Ep=["attr","size","title"];function Sp(e,t){if(e==null)return{};var n=Cp(e,t),r,l;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Cp(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function kl(){return kl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kl.apply(this,arguments)}function Ss(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function El(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ss(Object(n),!0).forEach(function(r){Np(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ss(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Np(e,t,n){return t=bp(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bp(e){var t=Mp(e,"string");return typeof t=="symbol"?t:t+""}function Mp(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rc(e){return e&&e.map((t,n)=>i.createElement(t.tag,El({key:n},t.attr),Rc(t.child)))}function O(e){return t=>i.createElement(Tp,kl({attr:El({},e.attr)},t),Rc(e.child))}function Tp(e){var t=n=>{var{attr:r,size:l,title:a}=e,o=Sp(e,Ep),s=l||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),i.createElement("svg",kl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:El(El({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&i.createElement("title",null,a),e.children)};return Es!==void 0?i.createElement(Es.Consumer,null,n=>t(n)):t(Bc)}function Dc(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function Lp(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function Hc(e){return O({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(e)}function Pp(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function Fp(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(e)}function Ap(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},child:[]}]})(e)}function zp(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function _p(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function ha(e){return O({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"},child:[]}]})(e)}function nm(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"},child:[]}]})(e)}function rm(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z"},child:[]}]})(e)}function lm(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"},child:[]}]})(e)}function Ip(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function Vc(e){return O({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function Bl(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(e)}function am(e){return O({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M633.82 458.1l-157.8-121.96C488.61 312.13 496 285.01 496 256v-48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48c0 17.92-3.96 34.8-10.72 50.2l-26.55-20.52c3.1-9.4 5.28-19.22 5.28-29.67V96c0-53.02-42.98-96-96-96s-96 42.98-96 96v45.36L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM400 464h-56v-33.77c11.66-1.6 22.85-4.54 33.67-8.31l-50.11-38.73c-6.71.4-13.41.87-20.35.2-55.85-5.45-98.74-48.63-111.18-101.85L144 241.31v6.85c0 89.64 63.97 169.55 152 181.69V464h-56c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z"},child:[]}]})(e)}function om(e){return O({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"},child:[]}]})(e)}function Kr(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function Op(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(e)}function $c(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(e)}function jp(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z"},child:[]}]})(e)}function im(e){return O({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M268.2 381.4l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48c-10.7 4.6-16.5 16.1-13.9 27.5l24 104c2.5 10.8 12.1 18.6 23.4 18.6 100.7 0 193.7-32.4 269.7-86.9l-80-61.8c-10.9 6.5-22.1 12.7-33.6 18.1zm365.6 76.7L475.1 335.5C537.9 256.4 576 156.9 576 48c0-11.2-7.7-20.9-18.6-23.4l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-12.2 26.1-27.9 50.3-46 72.8L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3z"},child:[]}]})(e)}function Bp(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"},child:[]}]})(e)}function ga(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"},child:[]}]})(e)}function Rp(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function gr(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(e)}function Dp(e){return O({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"},child:[]}]})(e)}function qr(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function Hp(e){return O({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function va(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function sm(e){return O({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M633.8 458.1l-55-42.5c15.4-1.4 29.2-13.7 29.2-31.1v-257c0-25.5-29.1-40.4-50.4-25.8L448 177.3v137.2l-32-24.7v-178c0-26.4-21.4-47.8-47.8-47.8H123.9L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4L42.7 82 416 370.6l178.5 138c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.5-6.9 4.2-17-2.8-22.4zM32 400.2c0 26.4 21.4 47.8 47.8 47.8h288.4c11.2 0 21.4-4 29.6-10.5L32 154.7v245.5z"},child:[]}]})(e)}function Vp(e){return O({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"},child:[]}]})(e)}function um(e){return O({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"},child:[]}]})(e)}const He="/assets/chat-D5nHS8q9.png";function Uc(){const e=window.location.protocol==="https:"?"wss":"ws";if(window.location.host)return`${e}://${window.location.host}`;const t=window.location.hostname||"localhost";return`${e}://${t}:5002`}function $p(){const e=Uc();return e.startsWith("wss://")?`https://${e.slice(6)}`:e.startsWith("ws://")?`http://${e.slice(5)}`:e}function Up(){const e="".split(",").map(l=>l.trim()).filter(Boolean),t=[...e.length>0?[{urls:e}]:[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302","stun:stun3.l.google.com:19302","stun:stun4.l.google.com:19302"]}]];return"".split(",").map(l=>l.trim()).filter(Boolean).length>0&&void 0||console.warn("[WebRTC] TURN is not configured; calls may fail across restrictive networks."),t}async function cm(){let e=Up();try{const t=await fetch(`${$p()}/api/ice-servers`,{cache:"no-store"});if(t.ok){const n=await t.json();Array.isArray(n.iceServers)&&n.iceServers.length>0&&(e=n.iceServers)}}catch(t){console.warn("[WebRTC] Could not fetch ICE servers from signaling server, using static config",t)}return{iceServers:e,iceCandidatePoolSize:10,iceTransportPolicy:"all",bundlePolicy:"max-bundle"}}const Wp=`<!DOCTYPE html>\r
<html lang="en" class="scroll-smooth">\r
<head>\r
<meta charset="UTF-8" />\r
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />\r
<title>PerfectChat — Anonymous Random Chat with Real People</title>\r
<meta name="description" content="PerfectChat connects you with random people around the world through anonymous text and video chat. No sign-up, no profiles, just real conversations." />\r
<meta name="theme-color" content="#ffffff" />\r
\r
<!-- Google Fonts: Plus Jakarta Sans -->\r
<link rel="preconnect" href="https://fonts.googleapis.com">\r
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\r
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">\r
\r
<!-- Tailwind CSS (CDN) -->\r
<script src="https://cdn.tailwindcss.com"><\/script>\r
<script>\r
  /* ---------------------------------------------------------\r
     TAILWIND CONFIGURATION\r
     Colors are wired to CSS variables so the theme toggle can\r
     swap the whole palette without duplicating dark: classes.\r
  --------------------------------------------------------- */\r
  tailwind.config = {\r
    darkMode: 'class',\r
    theme: {\r
      extend: {\r
        colors: {\r
          brandpink:   '#FF4FA3',\r
          brandfuchsia:'#D946EF',\r
          brandpurple: '#8B5CF6',\r
          page:      'rgb(var(--c-page) / <alpha-value>)',\r
          surface:   'rgb(var(--c-surface) / <alpha-value>)',\r
          ink:       'rgb(var(--c-ink) / <alpha-value>)',\r
          body:      'rgb(var(--c-body) / <alpha-value>)',\r
          line:      'rgb(var(--c-line) / <alpha-value>)',\r
          softpink:  'rgb(var(--c-softpink) / <alpha-value>)',\r
          softpurple:'rgb(var(--c-softpurple) / <alpha-value>)'\r
        },\r
        fontFamily: {\r
          sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif']\r
        },\r
        borderRadius: { '4xl': '2rem', '5xl': '2.5rem' },\r
        boxShadow: {\r
          card: '0 2px 4px -2px rgba(36,19,52,.06), 0 12px 32px -12px rgba(36,19,52,.12)',\r
          lift: '0 8px 20px -8px rgba(255,79,163,.28), 0 24px 48px -20px rgba(139,92,246,.28)',\r
          glow: '0 10px 30px -8px rgba(255,79,163,.45)'\r
        },\r
        maxWidth: { shell: '1200px' }\r
      }\r
    }\r
  };\r
<\/script>\r
\r
<style>\r
  /* ---------------------------------------------------------\r
     DESIGN TOKENS\r
  --------------------------------------------------------- */\r
  :root{\r
    --c-page: 255 255 255;\r
    --c-surface: 255 255 255;\r
    --c-ink: 36 19 52;          /* #241334 */\r
    --c-body: 114 94 124;       /* #725E7C */\r
    --c-line: 241 217 232;      /* #F1D9E8 */\r
    --c-softpink: 255 240 247;  /* #FFF0F7 */\r
    --c-softpurple: 243 237 255;/* #F3EDFF */\r
    --glow-pink: rgba(255,79,163,.16);\r
    --glow-purple: rgba(139,92,246,.16);\r
    --grad: linear-gradient(135deg,#FF4FA3 0%,#D946EF 48%,#8B5CF6 100%);\r
  }\r
  .dark{\r
    --c-page: 17 12 24;\r
    --c-surface: 27 20 37;\r
    --c-ink: 246 240 250;\r
    --c-body: 176 163 190;\r
    --c-line: 60 45 76;\r
    --c-softpink: 51 27 46;\r
    --c-softpurple: 42 32 64;\r
    --glow-pink: rgba(255,79,163,.20);\r
    --glow-purple: rgba(139,92,246,.22);\r
  }\r
\r
  html, body { max-width: 100%; overflow-x: hidden; }\r
  body{\r
    background-color: rgb(var(--c-page));\r
    color: rgb(var(--c-body));\r
    -webkit-font-smoothing: antialiased;\r
  }\r
\r
  /* Ambient pink / lavender glow behind the page */\r
  .page-glow{ position: fixed; inset: 0; pointer-events: none; z-index: 0; }\r
  .page-glow span{ position: absolute; border-radius: 9999px; filter: blur(90px); }\r
  .glow-1{ width: 60vw; height: 60vw; max-width: 620px; max-height: 620px; top: -14vw; right: -12vw; background: var(--glow-pink); }\r
  .glow-2{ width: 55vw; height: 55vw; max-width: 560px; max-height: 560px; top: 32vh; left: -18vw; background: var(--glow-purple); }\r
  .glow-3{ width: 50vw; height: 50vw; max-width: 520px; max-height: 520px; bottom: -10vw; right: -8vw; background: var(--glow-purple); }\r
\r
  /* Utility helpers */\r
  .grad{ background-image: var(--grad); }\r
  .grad-text{ background-image: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent; }\r
  .shell{ width: 100%; max-width: 1200px; margin-inline: auto; padding-inline: 1rem; }\r
  @media (min-width: 768px){ .shell{ padding-inline: 2rem; } }\r
\r
  .card{\r
    background-color: rgb(var(--c-surface));\r
    border: 1px solid rgb(var(--c-line));\r
    border-radius: 1.75rem;\r
    box-shadow: 0 2px 4px -2px rgba(36,19,52,.05), 0 16px 40px -24px rgba(36,19,52,.25);\r
  }\r
  .glass{ background-color: rgb(var(--c-surface) / .72); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }\r
\r
  /* Buttons keep a 48px minimum tap target */\r
  /* Layout for .btn comes from Tailwind utilities on the element itself, so that\r
     responsive display utilities such as \`hidden lg:inline-flex\` keep working. */\r
  .btn{ min-height: 48px; border-radius: 9999px; font-weight: 600; transition: transform .18s ease, box-shadow .18s ease, background-color .18s ease; }\r
  .btn:active{ transform: translateY(1px) scale(.99); }\r
  .btn-grad{ background-image: var(--grad); color: #fff; box-shadow: 0 10px 24px -10px rgba(255,79,163,.65); }\r
  .btn-grad:hover{ box-shadow: 0 14px 30px -10px rgba(255,79,163,.8); transform: translateY(-1px); }\r
  .btn-purple{ background-color: #8B5CF6; color:#fff; box-shadow: 0 10px 24px -10px rgba(139,92,246,.6); }\r
  .btn-purple:hover{ transform: translateY(-1px); }\r
  .btn-ghost{ background-color: rgb(var(--c-surface)); color: rgb(var(--c-ink)); border: 1px solid rgb(var(--c-line)); }\r
  .btn-ghost:hover{ border-color: #FF4FA3; }\r
\r
  /* Visible focus for keyboard users everywhere */\r
  a:focus-visible, button:focus-visible, input:focus-visible, [tabindex]:focus-visible{\r
    outline: 3px solid #FF4FA3; outline-offset: 2px; border-radius: 14px;\r
  }\r
\r
  /* CSS-based avatar placeholders (no external images, no likeness rights) */\r
  .avatar{\r
    display:flex; align-items:center; justify-content:center;\r
    border-radius:9999px; color:#fff; font-weight:700; letter-spacing:.02em;\r
    background-image: var(--grad); background-size: 160% 160%;\r
    box-shadow: inset 0 -6px 14px rgba(0,0,0,.12);\r
    user-select:none;\r
  }\r
  .avatar-ring{ border: 3px solid rgb(var(--c-surface)); }\r
\r
  .chip{\r
    display:inline-flex; align-items:center; gap:.4rem;\r
    padding:.45rem .75rem; border-radius:9999px;\r
    background-color: rgb(var(--c-surface));\r
    border:1px solid rgb(var(--c-line));\r
    font-size:.8125rem; font-weight:600; color: rgb(var(--c-ink));\r
  }\r
  .icon-tile{ width:2.5rem; height:2.5rem; border-radius:.9rem; display:flex; align-items:center; justify-content:center; flex: none; }\r
  .tile-pink{ background-color: rgb(var(--c-softpink)); color:#FF4FA3; }\r
  .tile-purple{ background-color: rgb(var(--c-softpurple)); color:#8B5CF6; }\r
\r
  .eyebrow{ font-size:.75rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:#FF4FA3; }\r
  .h2{ font-size: clamp(1.5rem, 5.5vw, 2.25rem); line-height:1.15; font-weight:800; color: rgb(var(--c-ink)); letter-spacing:-.02em; }\r
\r
  /* Horizontal scrollers used on mobile */\r
  .scroller{ display:flex; gap:1rem; overflow-x:auto; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch; scrollbar-width:none; padding-bottom:.25rem; }\r
  .scroller::-webkit-scrollbar{ display:none; }\r
  .scroller > *{ scroll-snap-align:center; flex:0 0 86%; }\r
\r
  @media (min-width: 768px){\r
    .scroller.desk-grid{ display:grid; overflow:visible; scroll-snap-type:none; gap:1.25rem; }\r
  }\r
\r
  /* Typing indicator dots */\r
  .typing i{ width:6px; height:6px; border-radius:9999px; background:#B9A6C6; display:inline-block; animation: blink 1.2s infinite ease-in-out; }\r
  .typing i:nth-child(2){ animation-delay:.18s; }\r
  .typing i:nth-child(3){ animation-delay:.36s; }\r
  @keyframes blink{ 0%,60%,100%{ opacity:.28; transform: translateY(0);} 30%{ opacity:1; transform: translateY(-3px);} }\r
\r
  /* Pulsing online dot */\r
  .pulse-dot{ position:relative; }\r
  .pulse-dot::after{ content:''; position:absolute; inset:0; border-radius:9999px; background:#22C55E; opacity:.55; animation: pulse 1.8s infinite ease-out; }\r
  @keyframes pulse{ 0%{ transform: scale(1); opacity:.55; } 70%{ transform: scale(2.4); opacity:0; } 100%{ opacity:0; } }\r
\r
  /* FAQ accordion */\r
  .faq-panel{ overflow:hidden; height:0; transition: height .35s cubic-bezier(.4,0,.2,1); }\r
  .faq-item[data-open="true"] .faq-plus{ transform: rotate(45deg); }\r
  .faq-plus{ transition: transform .3s ease; }\r
\r
  /* Matching overlay loader */\r
  .loader-ring{ width:76px; height:76px; border-radius:9999px; border:4px solid rgb(var(--c-line)); border-top-color:#FF4FA3; border-right-color:#D946EF; animation: spin .9s linear infinite; }\r
  @keyframes spin{ to{ transform: rotate(360deg); } }\r
\r
  /* Hero decorative orbit */\r
  .orbit{ position:absolute; border-radius:9999px; border:1px dashed rgb(var(--c-line)); }\r
\r
  @media (prefers-reduced-motion: reduce){\r
    *, *::before, *::after{ animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; scroll-behavior:auto !important; }\r
  }\r
</style>\r
</head>\r
\r
<body class="font-sans antialiased">\r
<div hidden class="border-brandpurple bg-softpurple border-brandpink bg-softpink border-line bg-surface bg-brandpink bg-brandpurple bg-line text-brandpurple w-6 -ml-3 lg:col-span-2 border-[#E11D6B] opacity-0 shadow-card border-b flex hidden text-[#22C55E]" aria-hidden="true"></div>\r
<div class="page-glow" aria-hidden="true"><span class="glow-1"></span><span class="glow-2"></span><span class="glow-3"></span></div>\r
<a href="#hero" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:text-ink focus:px-4 focus:py-2 focus:rounded-full focus:shadow-card">Skip to chat form</a>\r
\r
<div class="relative z-10">\r
\r
<!-- =====================================================\r
     1. STICKY NAVBAR\r
====================================================== -->\r
<header id="navbar" class="fixed top-0 inset-x-0 z-50 transition-all duration-300" style="padding-top: env(safe-area-inset-top);">\r
  <div class="shell">\r
    <nav class="flex items-center justify-between h-16 md:h-[72px]" aria-label="Main">\r
      <!-- Logo -->\r
      <a href="#hero" class="flex items-center gap-2 shrink-0" aria-label="PerfectChat home">\r
        <span class="w-9 h-9 rounded-xl grad flex items-center justify-center shadow-glow" aria-hidden="true">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">\r
            <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h6A2.5 2.5 0 0 1 15 6.5v3A2.5 2.5 0 0 1 12.5 12H9l-3.2 2.4A.5.5 0 0 1 5 14v-2.2A2.5 2.5 0 0 1 4 9.5v-3Z" fill="#fff"/>\r
            <path d="M17 9h.5A2.5 2.5 0 0 1 20 11.5v3a2.5 2.5 0 0 1-1 2V19a.5.5 0 0 1-.8.4L15 17h-3.5a2.5 2.5 0 0 1-2.3-1.5H12.5A3.5 3.5 0 0 0 16 12V9.2c.3-.1.6-.2 1-.2Z" fill="#fff" fill-opacity=".72"/>\r
          </svg>\r
        </span>\r
        <span class="text-lg font-extrabold tracking-tight text-ink">PerfectChat</span>\r
      </a>\r
\r
      <!-- Desktop links -->\r
      <ul class="hidden lg:flex items-center gap-6 text-sm font-semibold text-body">
        <li><a class="hover:text-brandpink transition-colors" href="#hero">Home</a></li>
        <li><a class="hover:text-brandpink transition-colors" href="#online">Online</a></li>
        <li><a class="hover:text-brandpink transition-colors" href="#how-it-works">How It Works</a></li>
        <li><a class="hover:text-brandpink transition-colors" href="#why">Features</a></li>
        <li><a class="hover:text-brandpink transition-colors" href="#safety">Safety</a></li>
        <li><a class="hover:text-brandpink transition-colors" href="#faq">FAQ</a></li>
      </ul>\r
\r
      <!-- Right side actions -->\r
      <div class="flex items-center gap-2">\r
        <button id="theme-toggle" type="button" class="w-10 h-10 rounded-full border border-line bg-surface flex items-center justify-center text-ink hover:border-brandpink transition-colors" aria-label="Switch to dark theme" aria-pressed="false">\r
          <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>\r
          <svg class="icon-sun hidden" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>\r
        </button>\r
\r
        <a href="#hero" class="hidden lg:inline-flex btn btn-ghost px-5 text-sm items-center justify-center gap-2">Login</a>\r
        <a href="#hero" data-cta-mode="text" class="hidden lg:inline-flex btn btn-grad px-5 text-sm items-center justify-center gap-2">Start Chat</a>\r
\r
        <button id="menu-toggle" type="button" class="lg:hidden w-10 h-10 rounded-full border border-line bg-surface flex items-center justify-center text-ink" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>\r
        </button>\r
      </div>\r
    </nav>\r
\r
    <!-- Mobile dropdown panel -->\r
    <div id="mobile-menu" class="lg:hidden hidden pb-3">\r
      <div class="card p-3">\r
        <ul class="text-[15px] font-semibold text-ink">\r
          <li><a class="block px-3 py-3 rounded-2xl hover:bg-softpink" href="#hero">Home</a></li>
          <li><a class="block px-3 py-3 rounded-2xl hover:bg-softpink" href="#online">Online</a></li>
          <li><a class="block px-3 py-3 rounded-2xl hover:bg-softpink" href="#how-it-works">How It Works</a></li>
          <li><a class="block px-3 py-3 rounded-2xl hover:bg-softpink" href="#why">Features</a></li>
          <li><a class="block px-3 py-3 rounded-2xl hover:bg-softpink" href="#safety">Safety</a></li>\r
          <li><a class="block px-3 py-3 rounded-2xl hover:bg-softpink" href="#faq">FAQ</a></li>\r
        </ul>\r
        <div class="grid grid-cols-2 gap-2 pt-2">\r
          <a href="#hero" class="btn btn-ghost text-sm inline-flex items-center justify-center gap-2">Login</a>\r
          <a href="#hero" data-cta-mode="text" class="btn btn-grad text-sm inline-flex items-center justify-center gap-2">Start Chat</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</header>\r
\r
<main>\r
<!-- =====================================================\r
     2. HERO + INSTANT CHAT FORM\r
====================================================== -->\r
<section id="hero" class="pt-20 sm:pt-24 md:pt-28 lg:pt-36 pb-8 lg:pb-16">\r
  <div class="shell grid lg:grid-cols-2 gap-5 lg:gap-12 items-start">\r
\r
    <!-- Marketing copy -->\r
    <div class="lg:col-start-1 lg:row-start-1">\r
      <span data-hero-badge class="chip !bg-softpink !border-[#FFD3E6] text-brandpink !text-[13px]">\r
        <span class="w-1.5 h-1.5 rounded-full bg-brandpink" aria-hidden="true"></span>\r
        100% Anonymous Chatting Platform\r
      </span>\r
\r
      <h1 class="mt-4 font-extrabold tracking-tight text-ink text-[clamp(1.75rem,8.5vw,2.625rem)] lg:text-[clamp(2.75rem,3.8vw,3.5rem)] leading-[1.08]">\r
        <span class="hero-line block">Meet New People.</span>\r
        <span class="hero-line block">One <span class="grad-text">Conversation</span></span>\r
        <span class="hero-line block">Away.</span>\r
      </h1>\r
\r
      <p data-hero-p class="mt-3 lg:mt-4 text-[15px] md:text-base leading-relaxed max-w-[46ch]">\r
        Randomly connect with strangers from around the world. No sign-ups. No pressure. Just real conversations.\r
      </p>\r
\r
    </div>\r
\r
    <!-- Instant chat form (desktop: right column, spans both rows) -->\r
    <div class="lg:col-start-2 lg:row-start-1 lg:row-span-3">\r
      <div id="chat-form-card" class="card p-4 sm:p-6 lg:p-7">\r
        <h2 class="text-[19px] md:text-[22px] font-extrabold text-ink">Choose How You Want to Chat</h2>\r
        <p class="mt-1 text-[14px] md:text-[15px] leading-snug md:leading-relaxed">Select your preferred chat mode. You can switch anytime during the conversation.</p>\r
\r
        <form id="chat-form" novalidate class="mt-4">\r
          <!-- Chat mode selection: real radio inputs for accessibility -->\r
          <fieldset>\r
            <legend class="sr-only">Choose a chat mode</legend>\r
            <div class="grid grid-cols-2 gap-2.5 sm:gap-3" role="radiogroup" aria-label="Chat mode">\r
\r
              <label data-mode-card="text" class="mode-card relative cursor-pointer rounded-2xl border-2 p-3 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3 items-start transition-all border-brandpink bg-softpink">\r
                <input class="sr-only" type="radio" name="chat-mode" value="text" checked />\r
                <span class="icon-tile tile-pink" aria-hidden="true">\r
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6.8A2.8 2.8 0 0 1 6.8 4h10.4A2.8 2.8 0 0 1 20 6.8v6.4a2.8 2.8 0 0 1-2.8 2.8H10l-4.2 3.2A.5.5 0 0 1 5 18.8V16a2.8 2.8 0 0 1-1-2.8V6.8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>\r
                </span>\r
                <span class="min-w-0">\r
                  <span class="block font-bold text-ink text-[15px] pr-6 sm:pr-0">Text Chat</span>\r
                  <span class="block text-[12.5px] sm:text-[13px] leading-snug">Private text conversations</span>\r
                </span>\r
                <span data-radio class="absolute top-3.5 right-3.5 w-5 h-5 rounded-full border-2 border-brandpink flex items-center justify-center" aria-hidden="true">\r
                  <span data-dot class="w-2.5 h-2.5 rounded-full bg-brandpink"></span>\r
                </span>\r
              </label>\r
\r
              <label data-mode-card="video" class="mode-card relative cursor-pointer rounded-2xl border-2 p-3 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3 items-start transition-all border-line bg-surface">\r
                <input class="sr-only" type="radio" name="chat-mode" value="video" />\r
                <span class="icon-tile tile-purple" aria-hidden="true">\r
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="12" height="12" rx="3" stroke="currentColor" stroke-width="1.7"/><path d="m15 11 4.2-2.6a.6.6 0 0 1 .9.5v6.2a.6.6 0 0 1-.9.5L15 13v-2Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>\r
                </span>\r
                <span class="min-w-0">\r
                  <span class="block font-bold text-ink text-[15px] pr-6 sm:pr-0">Video Chat</span>\r
                  <span class="block text-[12.5px] sm:text-[13px] leading-snug">Face-to-face conversations</span>\r
                </span>\r
                <span data-radio class="absolute top-3.5 right-3.5 w-5 h-5 rounded-full border-2 border-line flex items-center justify-center" aria-hidden="true">\r
                  <span data-dot class="w-2.5 h-2.5 rounded-full bg-brandpurple opacity-0"></span>\r
                </span>\r
              </label>\r
            </div>\r
          </fieldset>\r
\r
          <!-- Nickname -->\r
          <div class="mt-4">\r
            <label for="nickname" class="block text-sm font-bold text-ink">Enter your nickname</label>\r
            <input id="nickname" name="nickname" type="text" inputmode="text" autocomplete="off" maxlength="20"\r
              placeholder="Type your nickname"\r
              aria-describedby="nickname-help nickname-error"\r
              class="mt-2 w-full h-[52px] rounded-2xl px-4 text-[15px] text-ink bg-surface border border-line placeholder:text-body/60 focus:border-brandpink focus:ring-4 focus:ring-brandpink/15 outline-none transition" />\r
            <p id="nickname-error" class="mt-2 text-[13px] font-semibold text-[#E11D6B] hidden" role="alert"></p>\r
            <p id="nickname-help" class="mt-2 text-[13px]">Your nickname is visible only during the current chat session.</p>\r
          </div>\r
\r
          <button id="start-btn" type="submit" class="btn btn-grad w-full mt-4 text-base px-6 inline-flex items-center justify-center gap-2">\r
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6.8A2.8 2.8 0 0 1 6.8 4h10.4A2.8 2.8 0 0 1 20 6.8v6.4a2.8 2.8 0 0 1-2.8 2.8H10l-4.2 3.2A.5.5 0 0 1 5 18.8v-2.9" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/></svg>\r
            <span id="start-btn-label">Start Text Chat</span>\r
          </button>\r
\r
          <!-- Status region for validation + matching announcements -->\r
          <p id="form-status" class="sr-only" aria-live="polite"></p>\r
        </form>\r
\r
        <!-- Online indicator -->\r
        <div class="mt-4 pt-4 border-t border-line flex items-center gap-3">\r
          <span class="relative w-2.5 h-2.5 rounded-full bg-[#22C55E] pulse-dot" aria-hidden="true"></span>\r
          <p class="text-[14px] font-semibold text-ink"><span data-online-count>12,486</span>+ <span class="font-medium text-body">people online right now</span></p>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Trust points: below the form on mobile so the form stays above the fold -->\r
    <div class="lg:col-start-1 lg:row-start-2">\r
      <!-- Trust points -->\r
      <ul class="flex flex-wrap gap-1.5 sm:gap-2" aria-label="Why people trust PerfectChat">\r
        <li class="trust-badge chip !text-[11.5px] sm:!text-[13px] !px-2 !py-2 sm:!px-3 !gap-1">\r
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="10" width="16" height="10" rx="3" stroke="#FF4FA3" stroke-width="1.8"/><path d="M8 10V7.5a4 4 0 1 1 8 0V10" stroke="#FF4FA3" stroke-width="1.8"/></svg>\r
          100% Anonymous\r
        </li>\r
        <li class="trust-badge chip !text-[11.5px] sm:!text-[13px] !px-2 !py-2 sm:!px-3 !gap-1">\r
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" stroke="#8B5CF6" stroke-width="1.8" stroke-linejoin="round"/></svg>\r
          Instant Match\r
        </li>\r
        <li class="trust-badge chip !text-[11.5px] sm:!text-[13px] !px-2 !py-2 sm:!px-3 !gap-1">\r
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.5 5 6v5.5c0 4.3 2.9 7.4 7 8.9 4.1-1.5 7-4.6 7-8.9V6l-7-2.5Z" stroke="#FF4FA3" stroke-width="1.8" stroke-linejoin="round"/></svg>\r
          No Signup\r
        </li>\r
      </ul>\r
    </div>\r
\r
    <!-- Hero decorative visual (mobile: below form) -->\r
    <div class="lg:col-start-1 lg:row-start-3">\r
      <div id="hero-visual" class="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] aspect-square" aria-hidden="true">\r
        <div class="orbit inset-[8%]"></div>\r
        <div class="orbit inset-[20%]"></div>\r
        <div class="orbit inset-[32%]"></div>\r
\r
        <!-- Centre logo -->\r
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[26%] h-[26%] rounded-full bg-surface shadow-card border border-line flex items-center justify-center">\r
          <span class="w-[54%] h-[54%] rounded-2xl grad flex items-center justify-center">\r
            <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h6A2.5 2.5 0 0 1 15 6.5v3A2.5 2.5 0 0 1 12.5 12H9l-3.2 2.4A.5.5 0 0 1 5 14v-2.2A2.5 2.5 0 0 1 4 9.5v-3Z" fill="#fff"/><path d="M17 9h.5A2.5 2.5 0 0 1 20 11.5v3a2.5 2.5 0 0 1-1 2V19a.5.5 0 0 1-.8.4L15 17h-3.5a2.5 2.5 0 0 1-2.3-1.5H12.5A3.5 3.5 0 0 0 16 12V9.2c.3-.1.6-.2 1-.2Z" fill="#fff" fill-opacity=".72"/></svg>\r
          </span>\r
        </div>\r
\r
        <!-- Four orbiting avatars -->\r
        <div class="float-avatar absolute left-[4%] top-[24%] w-[22%] h-[22%]">\r
          <div class="avatar avatar-ring w-full h-full text-lg" style="background-image:linear-gradient(135deg,#FF4FA3,#D946EF)">A</div>\r
          <span class="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#22C55E] border-2 border-white"></span>\r
        </div>\r
        <div class="float-avatar absolute right-[4%] top-[16%] w-[20%] h-[20%]">\r
          <div class="avatar avatar-ring w-full h-full text-lg" style="background-image:linear-gradient(135deg,#8B5CF6,#D946EF)">M</div>\r
          <span class="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#22C55E] border-2 border-white"></span>\r
        </div>\r
        <div class="float-avatar absolute left-[8%] bottom-[14%] w-[20%] h-[20%]">\r
          <div class="avatar avatar-ring w-full h-full text-lg" style="background-image:linear-gradient(135deg,#A78BFA,#8B5CF6)">S</div>\r
          <span class="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#22C55E] border-2 border-white"></span>\r
        </div>\r
        <div class="float-avatar absolute right-[6%] bottom-[18%] w-[22%] h-[22%]">\r
          <div class="avatar avatar-ring w-full h-full text-lg" style="background-image:linear-gradient(135deg,#FF4FA3,#FF8AC4)">J</div>\r
          <span class="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#22C55E] border-2 border-white"></span>\r
        </div>\r
\r
        <!-- Floating message bubbles -->\r
        <div class="float-bubble absolute left-[30%] top-[36%] bg-surface border border-line rounded-full px-3 py-1.5 text-[12px] font-semibold text-ink shadow-card">Hey! 👋</div>\r
        <div class="float-bubble absolute right-[16%] top-[45%] bg-surface border border-line rounded-full px-3 py-1.5 text-[12px] font-semibold text-ink shadow-card">Hello! 😊</div>\r
        <div class="float-bubble absolute left-[24%] bottom-[16%] bg-surface border border-line rounded-full px-3 py-1.5 text-[12px] font-semibold text-ink shadow-card">Nice to meet you!</div>\r
        <div class="float-bubble absolute left-[2%] top-[46%] bg-surface border border-line rounded-full px-3 py-2 shadow-card typing flex gap-1 items-center"><i></i><i></i><i></i></div>\r
\r
        <!-- Small floating dots -->\r
        <span class="absolute left-[46%] top-[6%] w-2 h-2 rounded-full bg-brandpink/60"></span>\r
        <span class="absolute right-[24%] bottom-[8%] w-2.5 h-2.5 rounded-full bg-brandpurple/50"></span>\r
        <span class="absolute left-[14%] top-[8%] w-1.5 h-1.5 rounded-full bg-brandpurple/60"></span>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- =====================================================\r
     3. PEOPLE ONLINE RIGHT NOW\r
====================================================== -->\r
<section id="online" class="py-8 lg:py-12 scroll-mt-24">\r
  <div class="shell">\r
    <div data-reveal class="card p-5 sm:p-7 lg:p-8 grid lg:grid-cols-[1.1fr_.9fr] gap-6 items-center">\r
      <div>\r
        <h2 class="h2">People <span class="grad-text">Online</span> Right Now</h2>\r
        <p class="mt-2 text-[15px]">Real people are chatting on PerfectChat from 95+ countries, every minute of the day.</p>\r
\r
        <!-- Country chips (rendered from JS demo data) -->\r
        <ul id="country-chips" class="mt-4 flex flex-wrap gap-2" aria-label="Countries currently active"></ul>\r
      </div>\r
\r
      <div class="lg:border-l lg:border-line lg:pl-8">\r
        <!-- Overlapping avatars with online indicators -->\r
        <ul id="online-avatars" class="flex items-center" aria-label="A sample of people online now"></ul>\r
\r
        <div class="mt-4 flex items-center gap-3">\r
          <span class="relative w-3 h-3 rounded-full bg-[#22C55E] pulse-dot" aria-hidden="true"></span>\r
          <div>\r
            <p class="text-2xl sm:text-3xl font-extrabold grad-text leading-none"><span data-online-count>12,486</span>+</p>\r
            <p class="text-[14px] mt-1">People Online</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- =====================================================\r
     4. HOW PERFECTCHAT WORKS\r
====================================================== -->\r
<section id="how-it-works" class="py-10 lg:py-16 scroll-mt-24">\r
  <div class="shell">\r
    <div class="text-center max-w-[46ch] mx-auto">\r
      <p class="eyebrow">Four steps</p>\r
      <h2 class="h2 mt-2">How <span class="grad-text">PerfectChat</span> Works</h2>\r
      <p class="mt-3 text-[15px]">From landing on this page to talking with someone new takes less than a minute.</p>\r
    </div>\r
\r
    <!-- Desktop: connected timeline. Mobile: horizontal scroll cards. -->\r
    <div class="mt-8 relative">\r
      <div class="hidden md:block absolute top-[46px] left-[12%] right-[12%] h-px bg-line" aria-hidden="true"></div>\r
      <ol id="steps" class="scroller desk-grid md:grid-cols-2 lg:grid-cols-4 relative"></ol>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- =====================================================\r
     5. TEXT CHAT VS VIDEO CHAT\r
====================================================== -->\r
<section id="modes" class="py-10 lg:py-16 scroll-mt-24">\r
  <div class="shell">\r
    <div class="text-center max-w-[46ch] mx-auto">\r
      <h2 class="h2">Text Chat or Video Chat?</h2>\r
      <p class="mt-3 text-[15px]">Choose the way you feel most comfortable. You can switch modes mid-conversation.</p>\r
    </div>\r
\r
    <div class="mt-8 grid md:grid-cols-2 gap-5 max-w-[900px] mx-auto">\r
      <!-- Text chat card -->\r
      <article data-reveal class="card p-6 sm:p-7 text-center transition-transform duration-300 md:hover:-translate-y-1.5">\r
        <span class="icon-tile tile-pink !w-14 !h-14 !rounded-2xl mx-auto" aria-hidden="true">\r
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 6.8A2.8 2.8 0 0 1 6.8 4h10.4A2.8 2.8 0 0 1 20 6.8v6.4a2.8 2.8 0 0 1-2.8 2.8H10l-4.2 3.2A.5.5 0 0 1 5 18.8V16a2.8 2.8 0 0 1-1-2.8V6.8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>\r
        </span>\r
        <h3 class="mt-4 text-xl font-extrabold text-ink">Text Chat</h3>\r
        <ul class="mt-4 space-y-2.5 text-[15px] text-left max-w-[240px] mx-auto">\r
          <li class="flex gap-2.5 items-start"><span class="mt-2 w-1.5 h-1.5 rounded-full bg-brandpink shrink-0" aria-hidden="true"></span>Low data usage</li>\r
          <li class="flex gap-2.5 items-start"><span class="mt-2 w-1.5 h-1.5 rounded-full bg-brandpink shrink-0" aria-hidden="true"></span>Super fast</li>\r
          <li class="flex gap-2.5 items-start"><span class="mt-2 w-1.5 h-1.5 rounded-full bg-brandpink shrink-0" aria-hidden="true"></span>Completely private</li>\r
        </ul>\r
        <button type="button" data-cta-mode="text" class="btn btn-grad w-full mt-6 px-6 inline-flex items-center justify-center gap-2">Start Text Chat</button>\r
      </article>\r
\r
      <!-- Video chat card -->\r
      <article data-reveal class="card p-6 sm:p-7 text-center transition-transform duration-300 md:hover:-translate-y-1.5">\r
        <span class="icon-tile tile-purple !w-14 !h-14 !rounded-2xl mx-auto" aria-hidden="true">\r
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="12" height="12" rx="3" stroke="currentColor" stroke-width="1.7"/><path d="m15 11 4.2-2.6a.6.6 0 0 1 .9.5v6.2a.6.6 0 0 1-.9.5L15 13v-2Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>\r
        </span>\r
        <h3 class="mt-4 text-xl font-extrabold text-ink">Video Chat</h3>\r
        <ul class="mt-4 space-y-2.5 text-[15px] text-left max-w-[240px] mx-auto">\r
          <li class="flex gap-2.5 items-start"><span class="mt-2 w-1.5 h-1.5 rounded-full bg-brandpurple shrink-0" aria-hidden="true"></span>Face to face</li>\r
          <li class="flex gap-2.5 items-start"><span class="mt-2 w-1.5 h-1.5 rounded-full bg-brandpurple shrink-0" aria-hidden="true"></span>HD quality</li>\r
          <li class="flex gap-2.5 items-start"><span class="mt-2 w-1.5 h-1.5 rounded-full bg-brandpurple shrink-0" aria-hidden="true"></span>Real-time connection</li>\r
        </ul>\r
        <button type="button" data-cta-mode="video" class="btn btn-purple w-full mt-6 px-6 inline-flex items-center justify-center gap-2">Start Video Chat</button>\r
      </article>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- =====================================================\r
     6. WHY PERFECTCHAT (bento grid)\r
====================================================== -->\r
<section id="why" class="py-10 lg:py-16 scroll-mt-24">\r
  <div class="shell">\r
    <div class="text-center max-w-[46ch] mx-auto">\r
      <p class="eyebrow">The difference</p>\r
      <h2 class="h2 mt-2">Why <span class="grad-text">PerfectChat</span>?</h2>\r
      <p class="mt-3 text-[15px]">Everything you need to talk to someone new, and nothing you don't.</p>\r
    </div>\r
\r
    <div id="bento" class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"></div>\r
  </div>\r
</section>\r
\r
<!-- =====================================================\r
     7. LIVE CONVERSATION PREVIEW\r
====================================================== -->\r
<section id="preview" class="py-10 lg:py-16 scroll-mt-24">\r
  <div class="shell grid lg:grid-cols-[.95fr_1.05fr] gap-8 lg:gap-12 items-center">\r
    <div>\r
      <p class="eyebrow">Live preview</p>\r
      <h2 class="h2 mt-2">See How Conversations Flow</h2>\r
      <p class="mt-3 text-[15px] max-w-[46ch]">No profiles to fill, no photos to upload. You get matched, you say hi, and the conversation takes it from there.</p>\r
      <ul class="mt-5 space-y-3 text-[15px]">\r
        <li class="flex gap-3 items-start"><span class="icon-tile tile-pink !w-8 !h-8 !rounded-xl" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Messages are never stored after the chat ends</li>\r
        <li class="flex gap-3 items-start"><span class="icon-tile tile-purple !w-8 !h-8 !rounded-xl" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Skip to the next person whenever you want</li>\r
      </ul>\r
    </div>\r
\r
    <!-- Chat window preview -->\r
    <div class="card p-3 sm:p-4 max-w-[460px] w-full mx-auto lg:mx-0">\r
      <!-- Chat header -->\r
      <div class="flex items-center gap-3 px-2 pb-3 border-b border-line">\r
        <span class="relative">\r
          <span class="avatar w-10 h-10 text-sm" style="background-image:linear-gradient(135deg,#8B5CF6,#D946EF)" aria-hidden="true">A</span>\r
          <span class="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#22C55E] border-2 border-white" aria-hidden="true"></span>\r
        </span>\r
        <div class="min-w-0 flex-1">\r
          <p class="font-bold text-ink text-[15px] leading-tight">Alex</p>\r
          <p class="text-[12px] text-[#22C55E] font-semibold">Online</p>\r
        </div>\r
        <button type="button" class="w-9 h-9 rounded-full hover:bg-softpink flex items-center justify-center text-body" aria-label="More options for this chat">\r
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="19" r="1.7"/></svg>\r
        </button>\r
      </div>\r
\r
      <!-- Messages (animated in sequence on scroll) -->\r
      <div id="chat-thread" class="px-1 py-4 space-y-3 min-h-[280px]" role="log" aria-label="Example conversation"></div>\r
\r
      <!-- Typing indicator -->\r
      <div id="chat-typing" class="px-2 flex items-center gap-2 text-[13px]">\r
        <span class="typing flex gap-1 items-center bg-softpurple rounded-full px-3 py-2" aria-hidden="true"><i></i><i></i><i></i></span>\r
        <span>Alex is typing…</span>\r
      </div>\r
\r
      <!-- Input-style bottom area (visual only in this preview) -->\r
      <div class="mt-3 flex items-center gap-2 border-t border-line pt-3">\r
        <div class="flex-1 h-11 rounded-full bg-softpink border border-line flex items-center px-4 text-[14px] text-body/70">Type a message…</div>\r
        <span class="w-11 h-11 rounded-full grad flex items-center justify-center shrink-0" aria-hidden="true">\r
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4.5 12 20 4.5 15.5 20l-3.3-5.7L4.5 12Z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/></svg>\r
        </span>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- =====================================================\r
     8. COMMUNITY STATISTICS\r
====================================================== -->\r
<section id="stats" class="py-8 lg:py-12 scroll-mt-24">\r
  <div class="shell">\r
    <div id="stats-card" class="grad rounded-[1.75rem] p-6 sm:p-8 shadow-lift">\r
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 text-white">\r
        <div class="stat flex items-center gap-2.5 sm:gap-3 lg:justify-center">\r
          <span class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center shrink-0" aria-hidden="true">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.2" stroke="#fff" stroke-width="1.7"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/><path d="M16 6.2a3 3 0 0 1 0 5.6M17.5 19a5.6 5.6 0 0 0-2-4.3" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/></svg>\r
          </span>\r
          <div class="min-w-0">\r
            <p class="text-[20px] sm:text-[26px] font-extrabold leading-none"><span data-counter data-to="120" data-suffix="K+">0</span></p>\r
            <p class="text-[12px] sm:text-[13px] leading-tight text-white/85 mt-1">Matches Today</p>\r
          </div>\r
        </div>\r
\r
        <div class="stat flex items-center gap-2.5 sm:gap-3 lg:justify-center">\r
          <span class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center shrink-0" aria-hidden="true">\r
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.4" stroke="#fff" stroke-width="1.7"/><path d="M3.6 12h16.8M12 3.6c2.2 2.4 3.3 5.3 3.3 8.4S14.2 18 12 20.4C9.8 18 8.7 15.1 8.7 12S9.8 6 12 3.6Z" stroke="#fff" stroke-width="1.7"/></svg>\r
          </span>\r
          <div class="min-w-0">\r
            <p class="text-[20px] sm:text-[26px] font-extrabold leading-none"><span data-counter data-to="95" data-suffix="+">0</span></p>\r
            <p class="text-[12px] sm:text-[13px] leading-tight text-white/85 mt-1">Countries</p>\r
          </div>\r
        </div>\r
\r
        <div class="stat flex items-center gap-2.5 sm:gap-3 lg:justify-center">\r
          <span class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center shrink-0" aria-hidden="true">\r
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 3.5 5.5 13H10l-1 7.5L18.5 11H14l-1 -7.5Z" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/></svg>\r
          </span>\r
          <div class="min-w-0">\r
            <p class="text-[20px] sm:text-[26px] font-extrabold leading-none"><span data-counter data-to="3" data-suffix=" sec">0</span></p>\r
            <p class="text-[12px] sm:text-[13px] leading-tight text-white/85 mt-1">Average Match Time</p>\r
          </div>\r
        </div>\r
\r
        <div class="stat flex items-center gap-2.5 sm:gap-3 lg:justify-center">\r
          <span class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center shrink-0" aria-hidden="true">\r
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3.5 5 6v5.5c0 4.3 2.9 7.4 7 8.9 4.1-1.5 7-4.6 7-8.9V6l-7-2.5Z" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/></svg>\r
          </span>\r
          <div class="min-w-0">\r
            <p class="text-[20px] sm:text-[26px] font-extrabold leading-none"><span data-counter data-to="99.9" data-decimals="1" data-suffix="%">0</span></p>\r
            <p class="text-[12px] sm:text-[13px] leading-tight text-white/85 mt-1">Uptime</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- =====================================================\r
     9. SAFETY AND PRIVACY\r
====================================================== -->\r
<section id="safety" class="py-10 lg:py-16 scroll-mt-24">\r
  <div class="shell">\r
    <div data-reveal class="card p-6 sm:p-8 lg:p-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">\r
      <div>\r
        <p class="eyebrow">Safety first</p>\r
        <h2 class="h2 mt-2">Your <span class="grad-text">Safety</span> Is Our Priority</h2>\r
\r
        <ul class="mt-6 space-y-5">\r
          <li class="safety-item flex gap-4">\r
            <span class="icon-tile tile-pink" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.4" stroke="currentColor" stroke-width="1.7"/><path d="M5 20a7 7 0 0 1 14 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></span>\r
            <span><span class="block font-bold text-ink text-[15px]">No Profiles</span><span class="block text-[14px] leading-snug mt-0.5">We don't collect or store unnecessary personal information.</span></span>\r
          </li>\r
          <li class="safety-item flex gap-4">\r
            <span class="icon-tile tile-purple" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3.5 5 6v5.5c0 4.3 2.9 7.4 7 8.9 4.1-1.5 7-4.6 7-8.9V6l-7-2.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M12 9v3.5M12 15.4h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>\r
            <span><span class="block font-bold text-ink text-[15px]">Report Instantly</span><span class="block text-[14px] leading-snug mt-0.5">Report inappropriate users immediately.</span></span>\r
          </li>\r
          <li class="safety-item flex gap-4">\r
            <span class="icon-tile tile-pink" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.4" stroke="currentColor" stroke-width="1.7"/><path d="m6.2 6.2 11.6 11.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></span>\r
            <span><span class="block font-bold text-ink text-[15px]">Block Anytime</span><span class="block text-[14px] leading-snug mt-0.5">Block or skip any user.</span></span>\r
          </li>\r
          <li class="safety-item flex gap-4">\r
            <span class="icon-tile tile-purple" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14 4h3.5A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5H14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M10 8 6 12l4 4M6.4 12H15" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>\r
            <span><span class="block font-bold text-ink text-[15px]">Leave Anytime</span><span class="block text-[14px] leading-snug mt-0.5">Exit the conversation whenever you want.</span></span>\r
          </li>\r
        </ul>\r
\r
        <p class="mt-6 text-[13px] leading-relaxed bg-softpink border border-line rounded-2xl p-4">\r
          PerfectChat is intended for adults. Users should never share sensitive personal or financial information.\r
        </p>\r
      </div>\r
\r
      <!-- Shield + lock illustration (inline SVG, no external files) -->\r
      <div class="relative mx-auto w-full max-w-[320px]">\r
        <div id="shield" class="relative">\r
          <svg viewBox="0 0 240 280" class="w-full h-auto" role="img" aria-label="Illustration of a shield with a padlock representing privacy protection">\r
            <defs>\r
              <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">\r
                <stop offset="0%" stop-color="#FF4FA3"/><stop offset="48%" stop-color="#D946EF"/><stop offset="100%" stop-color="#8B5CF6"/>\r
              </linearGradient>\r
              <linearGradient id="shieldGloss" x1="0" y1="0" x2="0" y2="1">\r
                <stop offset="0%" stop-color="#fff" stop-opacity=".38"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/>\r
              </linearGradient>\r
              <filter id="shieldShadow" x="-40%" y="-20%" width="180%" height="160%">\r
                <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#D946EF" flood-opacity=".35"/>\r
              </filter>\r
            </defs>\r
            <path filter="url(#shieldShadow)" fill="url(#shieldGrad)" d="M120 12 32 46v92c0 58 37 100 88 118 51-18 88-60 88-118V46L120 12Z"/>\r
            <path fill="url(#shieldGloss)" d="M120 12 32 46v92c0 20 4.5 37.5 12.5 52C58 158 74 96 120 12Z"/>\r
            <rect x="82" y="126" width="76" height="60" rx="16" fill="#fff" fill-opacity=".96"/>\r
            <path d="M98 126v-14a22 22 0 0 1 44 0v14" stroke="#fff" stroke-width="12" fill="none" stroke-linecap="round"/>\r
            <circle cx="120" cy="150" r="9" fill="#8B5CF6"/>\r
            <rect x="116" y="156" width="8" height="18" rx="4" fill="#8B5CF6"/>\r
          </svg>\r
\r
          <!-- Floating decorative bubbles around the shield -->\r
          <span class="float-bubble absolute -right-2 top-6 w-11 h-11 rounded-2xl bg-brandpurple/90 rounded-br-md" aria-hidden="true"></span>\r
          <span class="float-bubble absolute -left-1 bottom-16 w-9 h-9 rounded-2xl bg-brandpink/90 rounded-bl-md" aria-hidden="true"></span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- =====================================================\r
     10. TESTIMONIALS\r
====================================================== -->\r
<section id="testimonials" class="py-10 lg:py-16 scroll-mt-24">\r
  <div class="shell">\r
    <div class="text-center max-w-[46ch] mx-auto">\r
      <p class="eyebrow">Real users</p>\r
      <h2 class="h2 mt-2">What People Say</h2>\r
    </div>\r
\r
    <!-- Mobile: swipeable scroller. Desktop: 3-column grid. -->\r
    <div id="testimonials-track" class="scroller desk-grid mt-8 md:grid-cols-3"></div>\r
\r
    <!-- Pagination dots (mobile only) -->\r
    <div id="testimonial-dots" class="md:hidden flex justify-center gap-2 mt-5" role="tablist" aria-label="Testimonial navigation"></div>\r
  </div>\r
</section>\r
\r
<!-- =====================================================\r
     11. FAQ\r
====================================================== -->\r
<section id="faq" class="py-10 lg:py-16 scroll-mt-24">\r
  <div class="shell max-w-[820px]">\r
    <div class="text-center">\r
      <p class="eyebrow">Answers</p>\r
      <h2 class="h2 mt-2">Frequently <span class="grad-text">Asked</span> Questions</h2>\r
    </div>\r
    <div id="faq-list" class="mt-8 space-y-3"></div>\r
  </div>\r
</section>\r
\r
<!-- =====================================================\r
     12. FINAL CTA\r
====================================================== -->\r
<section id="final-cta" class="py-10 lg:py-16 scroll-mt-24">\r
  <div class="shell">\r
    <div id="cta-card" class="relative overflow-hidden grad rounded-[1.75rem] p-8 sm:p-12 text-center shadow-lift">\r
      <!-- Decorative dashed paper-plane path -->\r
      <svg class="absolute right-4 top-4 w-28 h-24 sm:w-40 sm:h-32 opacity-70" viewBox="0 0 160 120" fill="none" aria-hidden="true">\r
        <path d="M6 108C34 96 58 74 74 46 84 28 100 16 126 14" stroke="#fff" stroke-opacity=".6" stroke-width="2" stroke-dasharray="6 8" stroke-linecap="round"/>\r
        <g transform="translate(120,2) rotate(-14)"><path d="M0 9 30 0 21 26 15 16 0 9Z" fill="#fff" fill-opacity=".92"/><path d="M15 16 30 0" stroke="#fff" stroke-opacity=".55" stroke-width="1.4"/></g>\r
      </svg>\r
\r
      <h2 class="text-white font-extrabold text-[clamp(1.6rem,6vw,2.4rem)] leading-tight">Ready to Meet Someone New?</h2>\r
      <p class="text-white/90 mt-3 text-[15px] sm:text-base">Start your next conversation in seconds.</p>\r
\r
      <div class="mt-7 flex flex-col sm:flex-row gap-3 justify-center max-w-[520px] mx-auto">\r
        <button type="button" data-cta-mode="text" class="btn bg-white text-ink px-6 flex-1 whitespace-nowrap hover:bg-white/90 inline-flex items-center justify-center gap-2">\r
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6.8A2.8 2.8 0 0 1 6.8 4h10.4A2.8 2.8 0 0 1 20 6.8v6.4a2.8 2.8 0 0 1-2.8 2.8H10l-4.2 3.2A.5.5 0 0 1 5 18.8v-2.9" stroke="#FF4FA3" stroke-width="1.8" stroke-linejoin="round"/></svg>\r
          Start Text Chat\r
        </button>\r
        <button type="button" data-cta-mode="video" class="btn bg-white/15 text-white border border-white/40 px-6 flex-1 whitespace-nowrap hover:bg-white/25 inline-flex items-center justify-center gap-2">\r
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="6" width="12" height="12" rx="3" stroke="#fff" stroke-width="1.7"/><path d="m15 11 4.2-2.6a.6.6 0 0 1 .9.5v6.2a.6.6 0 0 1-.9.5L15 13v-2Z" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/></svg>\r
          Start Video Chat\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
</main>\r
\r
<!-- =====================================================\r
     13. FOOTER\r
====================================================== -->\r
<footer class="border-t border-line pt-10 pb-8" style="padding-bottom: calc(2rem + env(safe-area-inset-bottom));">\r
  <div class="shell">\r
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">\r
      <div>\r
        <a href="#hero" class="flex items-center gap-2" aria-label="PerfectChat home">\r
          <span class="w-8 h-8 rounded-lg grad flex items-center justify-center" aria-hidden="true">\r
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h6A2.5 2.5 0 0 1 15 6.5v3A2.5 2.5 0 0 1 12.5 12H9l-3.2 2.4A.5.5 0 0 1 5 14v-2.2A2.5 2.5 0 0 1 4 9.5v-3Z" fill="#fff"/><path d="M17 9h.5A2.5 2.5 0 0 1 20 11.5v3a2.5 2.5 0 0 1-1 2V19a.5.5 0 0 1-.8.4L15 17h-3.5a2.5 2.5 0 0 1-2.3-1.5H12.5A3.5 3.5 0 0 0 16 12V9.2c.3-.1.6-.2 1-.2Z" fill="#fff" fill-opacity=".72"/></svg>\r
          </span>\r
          <span class="font-extrabold text-ink">PerfectChat</span>\r
        </a>\r
        <p class="text-[14px] mt-2">Real people. Real conversations.</p>\r
      </div>\r
\r
      <nav aria-label="Footer">\r
        <ul class="flex flex-wrap gap-x-5 gap-y-2 text-[14px] font-semibold text-body">\r
          <li><a href="#" class="hover:text-brandpink transition-colors">Privacy Policy</a></li>\r
          <li><a href="#" class="hover:text-brandpink transition-colors">Terms of Service</a></li>\r
          <li><a href="#" class="hover:text-brandpink transition-colors">Community Guidelines</a></li>\r
          <li><a href="#safety" class="hover:text-brandpink transition-colors">Safety Tips</a></li>\r
          <li><a href="#" class="hover:text-brandpink transition-colors">Contact Us</a></li>\r
        </ul>\r
      </nav>\r
\r
      <ul class="flex items-center gap-3">\r
        <li><a href="#" aria-label="PerfectChat on Facebook" class="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink hover:border-brandpink transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3 0-1.3-.1-2.45-.1-2.4 0-4.05 1.5-4.05 4.2v2.2H7.5V13h2.7v8h3.3Z"/></svg></a></li>\r
        <li><a href="#" aria-label="PerfectChat on X" class="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink hover:border-brandpink transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.7 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.7 3Zm-1.1 16.1h1.7L7.5 4.8H5.7l10.9 14.3Z"/></svg></a></li>\r
        <li><a href="#" aria-label="PerfectChat on Instagram" class="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink hover:border-brandpink transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7"/><circle cx="17" cy="7" r="1.2" fill="currentColor"/></svg></a></li>\r
      </ul>\r
    </div>\r
\r
    <p class="text-[13px] mt-8 pt-6 border-t border-line text-center md:text-left">© <span id="year">2026</span> PerfectChat. All rights reserved.</p>\r
  </div>\r
</footer>\r
\r
<!-- =====================================================\r
     MATCHING OVERLAY (front-end demo only)\r
====================================================== -->\r
<div id="match-overlay" class="fixed inset-0 z-[60] hidden items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="match-title">\r
  <div class="absolute inset-0 bg-ink/40 backdrop-blur-sm" data-overlay-backdrop></div>\r
  <div class="relative card w-full max-w-[380px] p-7 text-center">\r
    <div id="match-spinner" class="loader-ring mx-auto" aria-hidden="true"></div>\r
    <div id="match-success" class="hidden mx-auto w-[76px] h-[76px] rounded-full grad flex items-center justify-center" aria-hidden="true">\r
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
    </div>\r
\r
    <h2 id="match-title" class="mt-5 text-xl font-extrabold text-ink">Finding someone for you…</h2>\r
    <p id="match-sub" class="mt-2 text-[14px]">Matching you with a random person. This usually takes about 3 seconds.</p>\r
\r
    <div class="mt-5 h-2 rounded-full bg-softpink overflow-hidden" aria-hidden="true">\r
      <div id="match-progress" class="h-full w-0 grad rounded-full transition-[width] duration-200 ease-out"></div>\r
    </div>\r
\r
    <p id="match-status" class="sr-only" aria-live="assertive"></p>\r
\r
    <button id="match-cancel" type="button" class="btn btn-ghost w-full mt-5 px-6 inline-flex items-center justify-center gap-2">Cancel</button>\r
  </div>\r
</div>\r
\r
</div><!-- /relative z-10 -->\r
\r
<!-- =====================================================\r
     SCRIPTS: GSAP + ScrollTrigger\r
====================================================== -->\r
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"><\/script>\r
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"><\/script>\r
\r
<script>\r
/* =========================================================\r
   DEMO DATA\r
   Everything here is placeholder content. Swap these objects\r
   for API responses when a backend is connected.\r
========================================================= */\r
const SITE_DATA = {\r
  onlineCount: 12486,                                  // -> GET /api/online-count\r
  countries: [\r
    { flag: '🇮🇳', name: 'India' },\r
    { flag: '🇺🇸', name: 'USA' },\r
    { flag: '🇯🇵', name: 'Japan' },\r
    { flag: '🇧🇷', name: 'Brazil' },\r
    { flag: '🇫🇷', name: 'France' }\r
  ],\r
  moreCountries: 90,\r
  // CSS-based avatars: initial + gradient. No external images, no likeness rights.\r
  people: [\r
    { initial: 'A', grad: 'linear-gradient(135deg,#FF4FA3,#D946EF)' },\r
    { initial: 'M', grad: 'linear-gradient(135deg,#8B5CF6,#D946EF)' },\r
    { initial: 'S', grad: 'linear-gradient(135deg,#A78BFA,#8B5CF6)' },\r
    { initial: 'J', grad: 'linear-gradient(135deg,#FF4FA3,#FF8AC4)' },\r
    { initial: 'R', grad: 'linear-gradient(135deg,#D946EF,#8B5CF6)' },\r
    { initial: 'K', grad: 'linear-gradient(135deg,#FF6FB4,#FF4FA3)' },\r
    { initial: 'L', grad: 'linear-gradient(135deg,#8B5CF6,#6366F1)' },\r
    { initial: 'N', grad: 'linear-gradient(135deg,#F472B6,#D946EF)' },\r
    { initial: 'T', grad: 'linear-gradient(135deg,#C084FC,#8B5CF6)' }\r
  ]\r
};\r
\r
const STEPS = [\r
  { title: 'Choose Mode',    text: 'Select Text Chat or Video Chat.',                  tone: 'pink',   icon: 'chat' },\r
  { title: 'Enter Nickname', text: 'Add a nickname to begin.',                         tone: 'purple', icon: 'user' },\r
  { title: 'Get Matched',    text: 'We instantly connect you with a random person.',   tone: 'pink',   icon: 'bolt' },\r
  { title: 'Start Talking',  text: 'Enjoy a meaningful conversation.',                 tone: 'purple', icon: 'heart' }\r
];\r
\r
const FEATURES = [\r
  { title: '100% Anonymous',  text: 'Your identity stays private the whole time.', tone: 'pink',   icon: 'lock',  wide: true },\r
  { title: 'Instant Match',   text: 'Get connected in just a few seconds.',        tone: 'purple', icon: 'bolt' },\r
  { title: 'No Signup',       text: 'Jump in without creating an account.',        tone: 'pink',   icon: 'user' },\r
  { title: 'Safe Community',  text: 'Moderated, reported and kept friendly.',      tone: 'purple', icon: 'shield' },\r
  { title: 'Easy Exit',       text: 'Leave or skip a chat whenever you like.',     tone: 'pink',   icon: 'exit' },\r
  { title: 'Available Anytime', text: 'Servers are online 24/7, wherever you are.', tone: 'purple', icon: 'clock', wide: true }\r
];\r
\r
const CHAT_MESSAGES = [\r
  { from: 'them', text: 'Hello! 👋',          time: '10:30 AM' },\r
  { from: 'you',  text: 'Hi there! 😊',       time: '10:30 AM' },\r
  { from: 'them', text: 'Where are you from?', time: '10:31 AM' },\r
  { from: 'you',  text: "I'm from India 🇮🇳",  time: '10:31 AM' },\r
  { from: 'them', text: "That's awesome!",     time: '10:32 AM' }\r
];\r
\r
const TESTIMONIALS = [\r
  { quote: "I've met some amazing people here. It's fun, safe, and very easy to use.", name: 'Anjali', country: 'India',  initial: 'A', grad: 'linear-gradient(135deg,#FF4FA3,#D946EF)' },\r
  { quote: 'The matching feels instant, and I like that I can leave the chat at any time.', name: 'James', country: 'USA', initial: 'J', grad: 'linear-gradient(135deg,#8B5CF6,#D946EF)' },\r
  { quote: "The interface is simple and doesn't force me to create a profile.", name: 'Mei', country: 'Japan', initial: 'M', grad: 'linear-gradient(135deg,#A78BFA,#8B5CF6)' }\r
];\r
\r
const FAQS = [\r
  { q: 'Is PerfectChat really anonymous?', a: 'Yes. You only share a nickname, and it disappears when the chat ends. We never ask for your real name, email or phone number.' },\r
  { q: 'Do I need to create an account?',  a: 'No account is needed. Pick a chat mode, type a nickname and you are matched straight away.' },\r
  { q: 'Can I leave a chat at any time?',  a: 'Always. Use the exit or skip control at any point and you are instantly disconnected from that person.' },\r
  { q: 'Is video chat safe?',              a: 'Video chats are peer-to-peer and never recorded. You can block or report anyone in one tap, and our moderation team reviews every report.' },\r
  { q: 'How does matching work?',          a: 'When you start a chat we place you in a live queue and pair you with the next available person in your chosen mode, usually within three seconds.' }\r
];\r
\r
/* =========================================================\r
   ICON LIBRARY (inline SVG paths, no emoji as icons)\r
========================================================= */\r
const ICONS = {\r
  chat:  '<path d="M4 6.8A2.8 2.8 0 0 1 6.8 4h10.4A2.8 2.8 0 0 1 20 6.8v6.4a2.8 2.8 0 0 1-2.8 2.8H10l-4.2 3.2A.5.5 0 0 1 5 18.8V16a2.8 2.8 0 0 1-1-2.8V6.8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',\r
  user:  '<circle cx="12" cy="8" r="3.4" stroke="currentColor" stroke-width="1.7"/><path d="M5 20a7 7 0 0 1 14 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',\r
  bolt:  '<path d="M13 3.5 5.5 13H10l-1 7.5L18.5 11H14l-1-7.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',\r
  heart: '<path d="M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',\r
  lock:  '<rect x="4.5" y="10" width="15" height="9.5" rx="3" stroke="currentColor" stroke-width="1.7"/><path d="M8.2 10V7.6a3.8 3.8 0 1 1 7.6 0V10" stroke="currentColor" stroke-width="1.7"/>',\r
  shield:'<path d="M12 3.5 5 6v5.5c0 4.3 2.9 7.4 7 8.9 4.1-1.5 7-4.6 7-8.9V6l-7-2.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',\r
  exit:  '<path d="M14 4h3.5A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5H14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M10 8 6 12l4 4M6.4 12H15" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',\r
  clock: '<circle cx="12" cy="12" r="8.4" stroke="currentColor" stroke-width="1.7"/><path d="M12 7.6V12l3 1.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'\r
};\r
const icon = (name) => \`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">\${ICONS[name] || ''}</svg>\`;\r
const avatarHTML = (p, cls = 'w-10 h-10 text-sm') =>\r
  \`<span class="avatar \${cls}" style="background-image:\${p.grad}" aria-hidden="true">\${p.initial}</span>\`;\r
\r
/* =========================================================\r
   RENDER: build repeated markup from the data above\r
========================================================= */\r
function renderOnlineSection() {\r
  const chips = document.getElementById('country-chips');\r
  chips.innerHTML =\r
    SITE_DATA.countries.map(c => \`<li class="chip"><span aria-hidden="true">\${c.flag}</span>\${c.name}</li>\`).join('') +\r
    \`<li class="chip !bg-softpurple !border-transparent text-brandpurple">+\${SITE_DATA.moreCountries}</li>\`;\r
\r
  const list = document.getElementById('online-avatars');\r
  list.innerHTML = SITE_DATA.people.map((p, i) => \`\r
    <li class="online-avatar relative \${i ? '-ml-3' : ''}">\r
      \${avatarHTML(p, 'avatar-ring w-11 h-11 text-sm')}\r
      <span class="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#22C55E] border-2 border-white" aria-hidden="true"></span>\r
      <span class="sr-only">Person online</span>\r
    </li>\`).join('');\r
\r
  // Same demo number is used in the hero and in this section\r
  document.querySelectorAll('[data-online-count]').forEach(el => {\r
    el.textContent = SITE_DATA.onlineCount.toLocaleString('en-US');\r
  });\r
}\r
\r
function renderSteps() {\r
  document.getElementById('steps').innerHTML = STEPS.map((s, i) => \`\r
    <li class="step-card card p-5 text-center md:text-left relative">\r
      <span class="icon-tile \${s.tone === 'pink' ? 'tile-pink' : 'tile-purple'} !w-12 !h-12 !rounded-2xl mx-auto md:mx-0">\${icon(s.icon)}</span>\r
      <span class="mt-4 inline-flex items-center justify-center w-6 h-6 rounded-full grad text-white text-[12px] font-bold" aria-hidden="true">\${i + 1}</span>\r
      <h3 class="mt-2 font-extrabold text-ink text-[16px]">\${s.title}</h3>\r
      <p class="mt-1.5 text-[14px] leading-snug">\${s.text}</p>\r
    </li>\`).join('');\r
}\r
\r
function renderBento() {\r
  document.getElementById('bento').innerHTML = FEATURES.map(f => \`\r
    <article class="bento-card card p-5 sm:p-6 \${f.wide ? 'lg:col-span-2' : ''}">\r
      <span class="icon-tile \${f.tone === 'pink' ? 'tile-pink' : 'tile-purple'}">\${icon(f.icon)}</span>\r
      <h3 class="mt-3.5 font-extrabold text-ink text-[16px]">\${f.title}</h3>\r
      <p class="mt-1.5 text-[14px] leading-snug">\${f.text}</p>\r
    </article>\`).join('');\r
}\r
\r
function renderChatPreview() {\r
  document.getElementById('chat-thread').innerHTML = CHAT_MESSAGES.map(m => {\r
    const mine = m.from === 'you';\r
    return \`\r
      <div class="chat-msg flex \${mine ? 'justify-end' : 'justify-start'}">\r
        <div class="max-w-[78%]">\r
          <div class="\${mine ? 'grad text-white rounded-br-md' : 'bg-softpurple text-ink rounded-bl-md'} rounded-2xl px-3.5 py-2.5 text-[14px] leading-snug">\${m.text}</div>\r
          <p class="text-[11px] mt-1 \${mine ? 'text-right' : ''}">\${m.time}</p>\r
        </div>\r
      </div>\`;\r
  }).join('');\r
}\r
\r
function renderTestimonials() {\r
  const star = '<svg width="15" height="15" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true"><path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z"/></svg>';\r
  document.getElementById('testimonials-track').innerHTML = TESTIMONIALS.map(t => \`\r
    <figure class="testimonial-card card p-5 sm:p-6">\r
      <div class="flex gap-1" role="img" aria-label="Rated 5 out of 5 stars">\${star.repeat(5)}</div>\r
      <blockquote class="mt-3.5 text-[15px] leading-relaxed text-ink">“\${t.quote}”</blockquote>\r
      <figcaption class="mt-5 flex items-center gap-3">\r
        \${avatarHTML(t, 'w-10 h-10 text-sm')}\r
        <span class="text-[14px] font-semibold text-ink">\${t.name}<span class="block text-[13px] font-normal text-body">\${t.country}</span></span>\r
      </figcaption>\r
    </figure>\`).join('');\r
\r
  // Pagination dots for the mobile slider\r
  const dots = document.getElementById('testimonial-dots');\r
  dots.innerHTML = TESTIMONIALS.map((_, i) =>\r
    \`<button type="button" role="tab" aria-label="Show testimonial \${i + 1}" aria-selected="\${i === 0}" data-dot-index="\${i}"\r
       class="w-2.5 h-2.5 rounded-full transition-all \${i === 0 ? 'bg-brandpink w-6' : 'bg-line'}"></button>\`).join('');\r
}\r
\r
function renderFAQ() {\r
  document.getElementById('faq-list').innerHTML = FAQS.map((f, i) => \`\r
    <div class="faq-item card overflow-hidden" data-open="false">\r
      <h3>\r
        <button type="button" id="faq-btn-\${i}" class="w-full flex items-center justify-between gap-4 text-left px-5 py-4 min-h-[56px] font-bold text-ink text-[15px]"\r
                aria-expanded="false" aria-controls="faq-panel-\${i}">\r
          <span>\${f.q}</span>\r
          <span class="faq-plus icon-tile tile-pink !w-8 !h-8 !rounded-full" aria-hidden="true">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>\r
          </span>\r
        </button>\r
      </h3>\r
      <div class="faq-panel" id="faq-panel-\${i}" role="region" aria-labelledby="faq-btn-\${i}">\r
        <p class="px-5 pb-5 text-[15px] leading-relaxed">\${f.a}</p>\r
      </div>\r
    </div>\`).join('');\r
}\r
\r
/* =========================================================\r
   THEME TOGGLE\r
========================================================= */\r
function initTheme() {\r
  const btn = document.getElementById('theme-toggle');\r
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\r
  const apply = (dark) => {\r
    document.documentElement.classList.toggle('dark', dark);\r
    btn.setAttribute('aria-pressed', String(dark));\r
    btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');\r
    btn.querySelector('.icon-moon').classList.toggle('hidden', dark);\r
    btn.querySelector('.icon-sun').classList.toggle('hidden', !dark);\r
  };\r
  apply(prefersDark);\r
  btn.addEventListener('click', () => apply(!document.documentElement.classList.contains('dark')));\r
}\r
\r
/* =========================================================\r
   NAVBAR: scroll state + mobile menu\r
========================================================= */\r
function initNavbar() {\r
  const nav = document.getElementById('navbar');\r
  const toggle = document.getElementById('menu-toggle');\r
  const menu = document.getElementById('mobile-menu');\r
\r
  const onScroll = () => {\r
    const scrolled = window.scrollY > 8;\r
    nav.classList.toggle('glass', scrolled);\r
    nav.classList.toggle('shadow-card', scrolled);\r
    nav.classList.toggle('border-b', scrolled);\r
    nav.classList.toggle('border-line', scrolled);\r
  };\r
  onScroll();\r
  window.addEventListener('scroll', onScroll, { passive: true });\r
\r
  const setMenu = (open) => {\r
    menu.classList.toggle('hidden', !open);\r
    toggle.setAttribute('aria-expanded', String(open));\r
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');\r
  };\r
  toggle.addEventListener('click', () => setMenu(menu.classList.contains('hidden')));\r
  // Event delegation: any link inside the panel closes it\r
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });\r
  document.addEventListener('keydown', (e) => {\r
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) { setMenu(false); toggle.focus(); }\r
  });\r
}\r
\r
/* =========================================================\r
   CHAT MODE SELECTION + NICKNAME VALIDATION\r
========================================================= */\r
let currentMode = 'text';\r
\r
function setMode(mode) {\r
  currentMode = mode;\r
  document.querySelectorAll('[data-mode-card]').forEach(card => {\r
    const isActive = card.dataset.modeCard === mode;\r
    const isVideo = card.dataset.modeCard === 'video';\r
    const accent = isVideo ? 'purple' : 'pink';\r
    card.querySelector('input').checked = isActive;\r
\r
    card.classList.toggle('border-brandpink', isActive && accent === 'pink');\r
    card.classList.toggle('bg-softpink', isActive && accent === 'pink');\r
    card.classList.toggle('border-brandpurple', isActive && accent === 'purple');\r
    card.classList.toggle('bg-softpurple', isActive && accent === 'purple');\r
    card.classList.toggle('border-line', !isActive);\r
    card.classList.toggle('bg-surface', !isActive);\r
\r
    const ring = card.querySelector('[data-radio]');\r
    ring.classList.toggle('border-brandpink', isActive && accent === 'pink');\r
    ring.classList.toggle('border-brandpurple', isActive && accent === 'purple');\r
    ring.classList.toggle('border-line', !isActive);\r
    card.querySelector('[data-dot]').classList.toggle('opacity-0', !isActive);\r
  });\r
\r
  const label = document.getElementById('start-btn-label');\r
  label.textContent = mode === 'video' ? 'Start Video Chat' : 'Start Text Chat';\r
}\r
\r
function initChatForm() {\r
  const form = document.getElementById('chat-form');\r
  const input = document.getElementById('nickname');\r
  const error = document.getElementById('nickname-error');\r
  const status = document.getElementById('form-status');\r
\r
  // Event delegation for both mode cards (click + keyboard through the radio)\r
  document.querySelector('#chat-form fieldset').addEventListener('change', (e) => {\r
    if (e.target.name === 'chat-mode') setMode(e.target.value);\r
  });\r
\r
  const showError = (msg) => {\r
    error.textContent = msg;\r
    error.classList.remove('hidden');\r
    input.setAttribute('aria-invalid', 'true');\r
    input.classList.add('border-[#E11D6B]');\r
    status.textContent = msg;\r
  };\r
  const clearError = () => {\r
    error.classList.add('hidden');\r
    input.removeAttribute('aria-invalid');\r
    input.classList.remove('border-[#E11D6B]');\r
  };\r
\r
  input.addEventListener('input', clearError);\r
\r
  form.addEventListener('submit', (e) => {\r
    e.preventDefault();                       // never reload the page\r
    const name = input.value.trim().replace(/\\s+/g, ' ');\r
    input.value = name;\r
\r
    if (!name)            return showError('Enter a nickname to start chatting.');\r
    if (name.length < 2)  return showError('Your nickname needs at least 2 characters.');\r
    if (name.length > 20) return showError('Keep your nickname under 20 characters.');\r
\r
    clearError();\r
    startMatching(name, currentMode);\r
  });\r
\r
  // Buttons elsewhere on the page jump back to the form with the right mode selected\r
  document.addEventListener('click', (e) => {\r
    const trigger = e.target.closest('[data-cta-mode]');\r
    if (!trigger) return;\r
    e.preventDefault();\r
    setMode(trigger.dataset.ctaMode);\r
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth', block: 'start' });\r
    setTimeout(() => input.focus({ preventScroll: true }), 600);\r
  });\r
}\r
\r
/* =========================================================\r
   MATCHING OVERLAY (front-end demo, ~2.5s fake progress)\r
========================================================= */\r
let matchTimers = [];\r
\r
function startMatching(name, mode) {\r
  const overlay  = document.getElementById('match-overlay');\r
  const title    = document.getElementById('match-title');\r
  const sub      = document.getElementById('match-sub');\r
  const bar      = document.getElementById('match-progress');\r
  const spinner  = document.getElementById('match-spinner');\r
  const success  = document.getElementById('match-success');\r
  const status   = document.getElementById('match-status');\r
  const cancel   = document.getElementById('match-cancel');\r
\r
  overlay.classList.remove('hidden');\r
  overlay.classList.add('flex');\r
  spinner.classList.remove('hidden');\r
  success.classList.add('hidden');\r
  title.textContent = 'Finding someone for you…';\r
  sub.textContent = \`Matching you with a random person for \${mode === 'video' ? 'video' : 'text'} chat, \${name}.\`;\r
  status.textContent = 'Searching for a match.';\r
  bar.style.width = '0%';\r
  cancel.focus();\r
\r
  // Fake progress in steps so it feels like a real queue\r
  [[250, 22], [700, 45], [1300, 68], [1900, 86], [2400, 100]].forEach(([ms, pct]) => {\r
    matchTimers.push(setTimeout(() => { bar.style.width = pct + '%'; }, ms));\r
  });\r
\r
  matchTimers.push(setTimeout(() => {\r
    spinner.classList.add('hidden');\r
    success.classList.remove('hidden');\r
    title.textContent = 'Match Found!';\r
    sub.textContent = \`Say hello — you're connected with someone new.\`;\r
    status.textContent = 'Match found. Connecting you now.';\r
    cancel.textContent = 'Close';\r
  }, 2500));\r
}\r
\r
function closeMatching() {\r
  matchTimers.forEach(clearTimeout);\r
  matchTimers = [];\r
  const overlay = document.getElementById('match-overlay');\r
  overlay.classList.add('hidden');\r
  overlay.classList.remove('flex');\r
  document.getElementById('match-cancel').textContent = 'Cancel';\r
  document.getElementById('nickname').focus({ preventScroll: true });\r
}\r
\r
function initMatchingOverlay() {\r
  document.getElementById('match-cancel').addEventListener('click', closeMatching);\r
  document.querySelector('[data-overlay-backdrop]').addEventListener('click', closeMatching);\r
  document.addEventListener('keydown', (e) => {\r
    const overlay = document.getElementById('match-overlay');\r
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) closeMatching();\r
  });\r
}\r
\r
/* =========================================================\r
   FAQ ACCORDION (one open at a time, animated height)\r
========================================================= */\r
function initFAQ() {\r
  const list = document.getElementById('faq-list');\r
\r
  list.addEventListener('click', (e) => {\r
    const btn = e.target.closest('button[aria-controls]');\r
    if (!btn) return;\r
    const item = btn.closest('.faq-item');\r
    const panel = document.getElementById(btn.getAttribute('aria-controls'));\r
    const isOpen = item.dataset.open === 'true';\r
\r
    // Close every other item first\r
    list.querySelectorAll('.faq-item').forEach(other => {\r
      if (other === item) return;\r
      other.dataset.open = 'false';\r
      other.querySelector('button').setAttribute('aria-expanded', 'false');\r
      other.querySelector('.faq-panel').style.height = '0px';\r
    });\r
\r
    if (isOpen) {\r
      panel.style.height = '0px';\r
      item.dataset.open = 'false';\r
      btn.setAttribute('aria-expanded', 'false');\r
    } else {\r
      panel.style.height = panel.scrollHeight + 'px';\r
      item.dataset.open = 'true';\r
      btn.setAttribute('aria-expanded', 'true');\r
    }\r
  });\r
\r
  // Keep an open panel correctly sized when the viewport changes\r
  window.addEventListener('resize', () => {\r
    const open = list.querySelector('.faq-item[data-open="true"] .faq-panel');\r
    if (open) open.style.height = open.scrollHeight + 'px';\r
  });\r
}\r
\r
/* =========================================================\r
   TESTIMONIAL SLIDER (mobile only, vanilla scroll-snap)\r
========================================================= */\r
function initTestimonialSlider() {\r
  const track = document.getElementById('testimonials-track');\r
  const dots = document.getElementById('testimonial-dots');\r
  if (!track || !dots) return;\r
\r
  const setActive = (index) => {\r
    dots.querySelectorAll('button').forEach((d, i) => {\r
      const active = i === index;\r
      d.setAttribute('aria-selected', String(active));\r
      d.classList.toggle('bg-brandpink', active);\r
      d.classList.toggle('w-6', active);\r
      d.classList.toggle('bg-line', !active);\r
    });\r
  };\r
\r
  dots.addEventListener('click', (e) => {\r
    const dot = e.target.closest('[data-dot-index]');\r
    if (!dot) return;\r
    const card = track.children[Number(dot.dataset.dotIndex)];\r
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });\r
  });\r
\r
  let raf;\r
  track.addEventListener('scroll', () => {\r
    cancelAnimationFrame(raf);\r
    raf = requestAnimationFrame(() => {\r
      const center = track.scrollLeft + track.clientWidth / 2;\r
      let closest = 0, min = Infinity;\r
      [...track.children].forEach((card, i) => {\r
        const cardCenter = card.offsetLeft - track.offsetLeft + card.clientWidth / 2;\r
        const dist = Math.abs(cardCenter - center);\r
        if (dist < min) { min = dist; closest = i; }\r
      });\r
      setActive(closest);\r
    });\r
  }, { passive: true });\r
}\r
\r
/* =========================================================\r
   GSAP ANIMATIONS\r
========================================================= */\r
function initAnimations() {\r
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\r
  const isSmall = window.innerWidth < 768;\r
\r
  if (typeof gsap === 'undefined') return;      // page still works without GSAP\r
  gsap.registerPlugin(ScrollTrigger);\r
\r
  // Counters run even with reduced motion, they just land instantly\r
  const runCounters = (instant) => {\r
    document.querySelectorAll('[data-counter]').forEach(el => {\r
      const to = parseFloat(el.dataset.to);\r
      const decimals = parseInt(el.dataset.decimals || '0', 10);\r
      const suffix = el.dataset.suffix || '';\r
      if (instant) { el.textContent = to.toFixed(decimals) + suffix; return; }\r
      const obj = { v: 0 };\r
      gsap.to(obj, {\r
        v: to, duration: 1.6, ease: 'power2.out',\r
        onUpdate: () => { el.textContent = obj.v.toFixed(decimals) + suffix; }\r
      });\r
    });\r
  };\r
\r
  if (reduced) {\r
    runCounters(true);\r
    revealChatMessages(true);\r
    return;                                    // no motion beyond this point\r
  }\r
\r
  const ease = 'power3.out';\r
\r
  // 1. Navbar entrance\r
  gsap.from('#navbar', { y: -24, opacity: 0, duration: 0.8, ease });\r
\r
  // 2. Hero heading reveal, line by line\r
  gsap.from('.hero-line', { y: 28, opacity: 0, duration: 0.9, stagger: 0.12, ease, delay: 0.1 });\r
\r
  // 3. Hero badge, paragraph and chat form fade up\r
  gsap.from('[data-hero-badge]', { y: 14, opacity: 0, duration: 0.6, ease, delay: 0.05 });\r
  gsap.from('[data-hero-p]', { y: 16, opacity: 0, duration: 0.7, ease, delay: 0.35 });\r
  gsap.from('#chat-form-card', { y: 30, opacity: 0, duration: 0.9, ease, delay: 0.25 });\r
\r
  // 6. Trust badges stagger in\r
  gsap.from('.trust-badge', { y: 12, opacity: 0, duration: 0.5, stagger: 0.08, ease, delay: 0.5 });\r
\r
  // 4 + 5. Ambient floating avatars and chat bubbles (skipped on small screens)\r
  if (!isSmall) {\r
    gsap.utils.toArray('.float-avatar').forEach((el, i) => {\r
      gsap.to(el, { y: i % 2 ? 12 : -12, duration: 2.6 + i * 0.25, ease: 'sine.inOut', repeat: -1, yoyo: true });\r
    });\r
    gsap.utils.toArray('.float-bubble').forEach((el, i) => {\r
      gsap.to(el, { y: i % 2 ? -8 : 8, duration: 2.2 + i * 0.2, ease: 'sine.inOut', repeat: -1, yoyo: true });\r
    });\r
  }\r
\r
  const reveal = (targets, vars = {}) => {\r
    gsap.utils.toArray(targets).forEach(el => {\r
      gsap.from(el, {\r
        y: 26, opacity: 0, duration: 0.8, ease,\r
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },\r
        ...vars\r
      });\r
    });\r
  };\r
\r
  // Generic section reveals\r
  reveal('[data-reveal]');\r
  reveal('.h2', { y: 18, duration: 0.7 });\r
\r
  // 7. Online avatars stagger\r
  gsap.from('.online-avatar', {\r
    opacity: 0, scale: 0.85, duration: 0.5, stagger: 0.06, ease: 'back.out(1.6)',\r
    scrollTrigger: { trigger: '#online-avatars', start: 'top 90%', once: true }\r
  });\r
\r
  // 8. How-it-works cards reveal in sequence\r
  gsap.from('.step-card', {\r
    y: 26, opacity: 0, duration: 0.7, stagger: 0.12, ease,\r
    scrollTrigger: { trigger: '#steps', start: 'top 85%', once: true }\r
  });\r
\r
  // 9. Bento cards fade and scale from 0.96\r
  gsap.from('.bento-card', {\r
    opacity: 0, scale: 0.96, y: 18, duration: 0.7, stagger: 0.07, ease,\r
    scrollTrigger: { trigger: '#bento', start: 'top 85%', once: true }\r
  });\r
\r
  // 10. Chat messages appear one by one\r
  revealChatMessages(false);\r
\r
  // 11. Statistics count up\r
  ScrollTrigger.create({\r
    trigger: '#stats-card', start: 'top 85%', once: true,\r
    onEnter: () => { runCounters(false); gsap.from('.stat', { y: 18, opacity: 0, duration: 0.6, stagger: 0.1, ease }); }\r
  });\r
\r
  // 12. Safety shield floats gently + list items reveal\r
  gsap.to('#shield', { y: -12, duration: 3, ease: 'sine.inOut', repeat: -1, yoyo: true });\r
  gsap.from('.safety-item', {\r
    x: -18, opacity: 0, duration: 0.6, stagger: 0.1, ease,\r
    scrollTrigger: { trigger: '#safety', start: 'top 78%', once: true }\r
  });\r
\r
  // 13. Testimonials slide into view\r
  gsap.from('.testimonial-card', {\r
    y: 28, opacity: 0, duration: 0.7, stagger: 0.12, ease,\r
    scrollTrigger: { trigger: '#testimonials-track', start: 'top 88%', once: true }\r
  });\r
\r
  // 14. FAQ items fade upward\r
  gsap.from('.faq-item', {\r
    y: 18, opacity: 0, duration: 0.6, stagger: 0.08, ease,\r
    scrollTrigger: { trigger: '#faq-list', start: 'top 88%', once: true }\r
  });\r
\r
  // 15. Final CTA scales slightly into view\r
  gsap.from('#cta-card', {\r
    scale: 0.96, opacity: 0, duration: 0.8, ease,\r
    scrollTrigger: { trigger: '#cta-card', start: 'top 88%', once: true }\r
  });\r
}\r
\r
// Chat preview messages animate sequentially when scrolled into view\r
function revealChatMessages(instant) {\r
  const msgs = gsap.utils.toArray('.chat-msg');\r
  const typing = document.getElementById('chat-typing');\r
  if (instant) { gsap.set(msgs, { opacity: 1, y: 0 }); return; }\r
\r
  gsap.set(msgs, { opacity: 0, y: 14 });\r
  gsap.set(typing, { opacity: 0 });\r
\r
  ScrollTrigger.create({\r
    trigger: '#chat-thread', start: 'top 82%', once: true,\r
    onEnter: () => {\r
      const tl = gsap.timeline();\r
      msgs.forEach(m => tl.to(m, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '+=0.25'));\r
      tl.to(typing, { opacity: 1, duration: 0.4 }, '+=0.3');\r
    }\r
  });\r
}\r
\r
/* =========================================================\r
   BOOT\r
========================================================= */\r
document.addEventListener('DOMContentLoaded', () => {\r
  document.getElementById('year').textContent = new Date().getFullYear();\r
\r
  renderOnlineSection();\r
  renderSteps();\r
  renderBento();\r
  renderChatPreview();\r
  renderTestimonials();\r
  renderFAQ();\r
\r
  initTheme();\r
  initNavbar();\r
  setMode('text');          \r
  initChatForm();\r
  initMatchingOverlay();\r
  initFAQ();\r
  initTestimonialSlider();\r
  initAnimations();\r
});\r
<\/script>\r
</body>\r
</html>\r
`;function Qp({onReferenceStart:e,onThemeChange:t}){const n=P.useRef(null),[r,l]=P.useState(1200),a=P.useMemo(()=>Wp.replace("</head>","<style>@media(max-width:768px){input,textarea,select{font-size:16px!important}}</style>"+"</head>").replace('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"><\/script>',"").replace('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"><\/script>',"").replace(/<span class="w-9 h-9 rounded-xl grad[\s\S]*?<\/span>/,`<img src="${He}" alt="PerfectChat logo" style="width:42px;height:42px;object-fit:contain">`).replace(/<span class="w-8 h-8 rounded-lg grad[\s\S]*?<\/span>/,`<img src="${He}" alt="PerfectChat logo" style="width:36px;height:36px;object-fit:contain">`).replace("startMatching(name, currentMode);","parent.postMessage({source:'perfectchat-reference-ui',type:'start-chat',name:name,mode:currentMode},'*');").replace("</body>",`<script>(function(){
      function h(){parent.postMessage({source:'perfectchat-reference-ui',type:'height',height:Math.max(document.documentElement.scrollHeight,document.body.scrollHeight)},'*')}
      function updateLiveNumbers(){
        var fiveMinuteSlot=Math.floor(Date.now()/300000);
        var seed=Math.abs(Math.sin(fiveMinuteSlot*12.9898)*43758.5453)%1;
        var online=1800+Math.floor(seed*2700);
        var now=new Date();
        var slotOfDay=Math.floor((now.getHours()*60+now.getMinutes())/5);
        var matches=1200+(slotOfDay*85)+Math.floor(seed*60);
        document.querySelectorAll('[data-online-count]').forEach(function(el){el.textContent=online.toLocaleString('en-US')});
        var counters=document.querySelectorAll('[data-counter]');
        if(counters[0]) counters[0].textContent=matches.toLocaleString('en-US');
        if(counters[1]) counters[1].textContent='95+';
        if(counters[2]) counters[2].textContent=(2+Math.floor(seed*3))+' sec';
        if(counters[3]) counters[3].textContent='99.9%';
      }
      document.addEventListener('click',function(event){
        var link=event.target.closest('a[href^="#"]');
        if(!link) return;
        var targetId=link.getAttribute('href').slice(1);
        if(!targetId) return;
        var target=document.getElementById(targetId);
        if(!target) return;
        event.preventDefault();
        parent.postMessage({source:'perfectchat-reference-ui',type:'scroll-to',top:target.getBoundingClientRect().top},'*');
      });
      addEventListener('load',function(){
        h();updateLiveNumbers();
        parent.postMessage({source:'perfectchat-reference-ui',type:'theme-change',dark:document.documentElement.classList.contains('dark')},'*');
        var themeButton=document.getElementById('theme-toggle');
        if(themeButton)themeButton.addEventListener('click',function(){
          setTimeout(function(){parent.postMessage({source:'perfectchat-reference-ui',type:'theme-change',dark:document.documentElement.classList.contains('dark')},'*')},0);
        });
        document.addEventListener('click',function(event){
          var link=event.target.closest('a[href^="#"]');
          if(!link)return;
          var target=document.querySelector(link.getAttribute('href'));
          if(!target)return;
          event.preventDefault();
          parent.postMessage({source:'perfectchat-reference-ui',type:'scroll-to',top:target.offsetTop},'*');
        });
      });
      addEventListener('resize',h);
      new ResizeObserver(h).observe(document.documentElement);
      setInterval(updateLiveNumbers,300000);
      setTimeout(function(){h();updateLiveNumbers()},100);
      setTimeout(h,1000);
    })();<\/script>`+"</body>"),[]);return P.useEffect(()=>{const o=s=>{var u,d;if(!(s.source!==((u=n.current)==null?void 0:u.contentWindow)||((d=s.data)==null?void 0:d.source)!=="perfectchat-reference-ui")&&(s.data.type==="height"&&Number.isFinite(s.data.height)&&l(Math.max(800,s.data.height)),s.data.type==="scroll-to"&&Number.isFinite(s.data.top)&&window.scrollTo({top:Math.max(0,n.current.offsetTop+s.data.top-72),behavior:"smooth"}),s.data.type==="theme-change"&&t(!!s.data.dark),s.data.type==="start-chat"&&e(s.data.name,s.data.mode),s.data.type==="scroll-to"&&Number.isFinite(s.data.top))){const g=n.current.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:Math.max(0,g+s.data.top-72),behavior:"smooth"})}};return window.addEventListener("message",o),()=>window.removeEventListener("message",o)},[e,t]),i.createElement("iframe",{ref:n,className:"reference-ui-frame",title:"PerfectChat",srcDoc:a,style:{height:`${r}px`}})}function Cs(){return i.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},i.createElement("path",{d:"M16 3h5v5"}),i.createElement("path",{d:"M4 20 21 3"}),i.createElement("path",{d:"M21 16v5h-5"}),i.createElement("path",{d:"m15 15 6 6"}),i.createElement("path",{d:"M4 4l5 5"}))}function Yp({darkMode:e,onToggleTheme:t,ws:n,username:r,setUsername:l,partnerName:a,isConnected:o,isMatching:s,isTyping:u,connectionError:d,messages:g,draftMessage:h,onDraftChange:m,onSubmit:w,onSkip:k,onEnd:E,onStart:B,onRetry:f,messageInputRef:c,messagesAreaRef:p,messagesEndRef:v,onComposerFocus:S,formatTime:C}){const[M,T]=P.useState(!0),[j,z]=P.useState(!1),se=()=>{z(!1),k()};return i.createElement("div",{className:`tc-app ${e?"dark":""}`},i.createElement("header",{className:"tc-header"},i.createElement("div",{className:"tc-brand"},i.createElement("img",{src:He,alt:"PerfectChat logo"}),i.createElement("div",null,i.createElement("h1",null,"PerfectChat"),i.createElement("p",null,"Anonymous conversations"))),i.createElement("div",{className:"tc-header-actions"},i.createElement("button",{className:"tc-theme",onClick:t,title:e?"Light mode":"Dark mode",type:"button"},e?i.createElement(qr,null):i.createElement(Kr,null)),i.createElement("button",{className:"tc-home",onClick:E,type:"button"},i.createElement(Vc,null),i.createElement("span",null,"Home")),i.createElement("button",{className:"tc-end",onClick:E,type:"button"},i.createElement(Bp,null),i.createElement("span",null,"End Chat")))),i.createElement("main",{className:"tc-main"},i.createElement("section",{className:"tc-container"},i.createElement("div",{className:"tc-chat-head"},i.createElement("div",{className:"tc-stranger"},i.createElement("div",{className:"tc-avatar"},i.createElement(va,null),i.createElement("i",{className:o?"online":""})),i.createElement("div",null,i.createElement("h2",null,a||(s?"Finding Partner...":"Stranger")),i.createElement("span",{className:o?"online":"waiting"},i.createElement("i",null),o?"Online":s?"Searching":"Offline"))),i.createElement("div",{className:"tc-chat-tools"},i.createElement("button",{title:"Safety",type:"button"},i.createElement(gr,null)),i.createElement("img",{src:He,alt:"PerfectChat"}))),M&&i.createElement("div",{className:"tc-privacy"},i.createElement(Bl,null),i.createElement("p",null,"You're chatting anonymously. Never share passwords, addresses, payment details, or other private information."),i.createElement("button",{onClick:()=>T(!1),type:"button"},i.createElement(Hp,null))),i.createElement("div",{className:"tc-messages",ref:p},i.createElement("div",{className:"tc-day"},"Today"),!n&&i.createElement("div",{className:"tc-empty"},i.createElement("img",{src:He,alt:"PerfectChat logo"}),i.createElement("h3",null,"Start chatting instantly"),i.createElement("p",null,"Enter a nickname and connect with someone new."),i.createElement("input",{value:r,onChange:H=>l(H.target.value),placeholder:"Enter your nickname",onKeyDown:H=>H.key==="Enter"&&B()}),i.createElement("button",{onClick:B,disabled:!r.trim(),type:"button"},"Start Anonymous Chat"),d&&i.createElement("span",null,d)),n&&g.every(H=>H.sender==="System")&&i.createElement("div",{className:"tc-empty tc-status-empty"},i.createElement("img",{src:He,alt:"PerfectChat logo"}),i.createElement("h3",null,o?"Connected!":"Finding Partner..."),i.createElement("p",null,o?`Start your anonymous conversation with ${a}.`:"Please wait while we match you with someone new."),!o&&i.createElement("button",{onClick:f,type:"button"},"Retry Match")),g.map((H,We)=>{const ct=H.sender==="You";return H.sender==="System"?i.createElement("div",{className:"tc-system",key:`${H.sender}-${We}`},H.content):i.createElement("div",{className:`tc-message ${ct?"out":"in"}`,key:`${H.sender}-${We}`},!ct&&i.createElement("div",{className:"tc-small-avatar"},i.createElement(va,null)),i.createElement("div",{className:"tc-bubble"},H.content,i.createElement("span",null,C(H.createdAt),ct&&i.createElement(Pp,null))))}),u&&o&&i.createElement("div",{className:"tc-message in"},i.createElement("div",{className:"tc-small-avatar"},i.createElement(va,null)),i.createElement("div",{className:"tc-typing"},i.createElement("i",null),i.createElement("i",null),i.createElement("i",null))),i.createElement("div",{ref:v})),i.createElement("div",{className:"tc-composer-wrap"},i.createElement("form",{className:"tc-composer",onSubmit:w},i.createElement("button",{className:"tc-next",onClick:H=>{H.preventDefault(),z(!0)},disabled:!n,type:"button"},i.createElement(Cs,null),i.createElement("span",null,"Next Match")),i.createElement("input",{ref:c,value:h,onChange:m,onFocus:S,disabled:!o,placeholder:o?"Type a message...":"Waiting for connection..."}),i.createElement("button",{className:"tc-send",disabled:!o||!h.trim(),type:"submit"},i.createElement($c,null)))))),i.createElement("footer",{className:"tc-footer"},i.createElement("span",null,"© ",new Date().getFullYear()," PerfectChat"),i.createElement("i",null)," ",i.createElement("a",{href:"#privacy"},"Privacy Policy"),i.createElement("i",null)," ",i.createElement("a",{href:"#terms"},"Terms"),i.createElement("i",null)," ",i.createElement("a",{href:"#guidelines"},"Community Guidelines")),j&&i.createElement("div",{className:"tc-modal-backdrop",onClick:H=>H.target===H.currentTarget&&z(!1)},i.createElement("div",{className:"tc-modal"},i.createElement("div",{className:"tc-modal-icon"},i.createElement(Cs,null)),i.createElement("h3",null,"Find a new match?"),i.createElement("p",null,"This will end your current conversation and connect you with someone new."),i.createElement("div",null,i.createElement("button",{onClick:()=>z(!1),type:"button"},"Cancel"),i.createElement("button",{onClick:se,type:"button"},"Find Match")))))}const Gp=P.lazy(()=>kp(()=>import("./VideoChat-Ddpsg89A.js"),__vite__mapDeps([0,1]))),Ns=[{id:"confidence",category:"Conversation Confidence",readTime:"4 min read",title:"Why anonymous chat makes starting conversations easier",excerpt:"PerfectChat removes the pressure of profiles and expectations, making it easier to talk naturally from the very first message.",body:["Anonymous chat works best when it feels easy to enter and easy to leave. You are not trying to impress a profile or manage a long history. You are simply talking to someone new in the moment.","That makes PerfectChat a natural space for building confidence. You learn how to open a conversation, keep it moving, and recover when a chat feels awkward. Those are real communication skills, even in a casual setting.","The strongest experience comes from simple actions, fast replies, and a layout that keeps your attention on the conversation instead of unnecessary distractions."]},{id:"safety",category:"Safer Conversations",readTime:"3 min read",title:"What makes anonymous chat feel safe and comfortable",excerpt:"People stay longer when chat feels clear, calm, and easy to control from the first second to the last.",body:["People feel more comfortable in anonymous chat when the product keeps them in control. That means clear connection status, a visible skip action, and no confusing steps between opening the app and starting a conversation.","A safe experience is not only about moderation. It is also about clarity. Users should always know whether they are waiting, connected, typing, or disconnected.","Small details matter here: smooth message delivery, helpful system feedback, and simple actions that never make the interface feel stressful."]},{id:"matching",category:"Instant Matching",readTime:"5 min read",title:"Why fast matching matters more than flashy extras",excerpt:"In random chat, momentum matters. The sooner people connect, the more likely they are to stay engaged.",body:["Long waits break the mood of random chat. When matching is quick, the product feels alive and people are more willing to start the next conversation with energy.","PerfectChat works best when the transition from one chat to another feels immediate. A clear status, a dependable next action, and minimal friction all help keep that rhythm intact.","Fast matching also supports healthier behavior. If a conversation is not working, people should be able to move on without frustration and try again right away."]},{id:"conversation",category:"Conversation Flow",readTime:"4 min read",title:"How to keep a random conversation going after hello",excerpt:"Simple, specific questions create momentum much faster than generic small talk.",body:["The best random chat questions are light, specific, and easy to build on. Ask about music, current mood, favorite food, travel plans, or the funniest thing that happened today.","The goal is not to sound clever. The goal is to create momentum. Once both people are replying comfortably, the rest of the conversation usually becomes easier on its own.","PerfectChat supports that flow best when the conversation stays front and center, with clean message history and simple actions that never interrupt the exchange."]}],Kp=[{icon:Bl,label:"Anonymous",tone:"purple"},{icon:gr,label:"Safe Chat",tone:"green"},{icon:_p,label:"Text Chat",tone:"blue"},{icon:Op,label:"Interests: Music",tone:"pink"}],qp=["Be friendly and open-minded","No harassment or hate speech","Keep personal info private"],Zp=[{icon:Bl,label:"Anonymous"},{icon:Hc,label:"Instant Match"},{icon:gr,label:"Easy Exit"}],Xp=[{icon:Bl,title:"100% Anonymous",description:"No personal info required"},{icon:Hc,title:"Instant Connections",description:"Matched in seconds"},{icon:gr,title:"Safe & Respectful",description:"Our community guidelines"},{icon:Dc,title:"Leave Anytime",description:"No strings attached"}],bs=e=>e?new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit"}).format(e):"",Jp=e=>{const t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=e%60;return[t,n,r].map(l=>String(l).padStart(2,"0")).join(":")},ya=(e,t,n="text")=>({sender:e,content:t,type:n,createdAt:Date.now()});function em(){const[e,t]=P.useState("home"),[n,r]=P.useState(null),[l,a]=P.useState(""),[o,s]=P.useState("text"),[u,d]=P.useState(""),[g,h]=P.useState([]),[m,w]=P.useState(""),[k,E]=P.useState(!1),[B,f]=P.useState(!1),[c,p]=P.useState(""),[v,S]=P.useState(!1),[C,M]=P.useState(null),[T,j]=P.useState(null),[z,se]=P.useState(0),[H,We]=P.useState(!0),[ct,dt]=P.useState(!1),[Gt,Nn]=P.useState(()=>typeof window<"u"?window.innerHeight:0),[N,F]=P.useState(!1),L=P.useRef(null),V=P.useRef(null),U=P.useRef(null),Je=P.useRef(!1),Qe=P.useRef(null),ft=P.useRef(null),Te=P.useRef(null),Oe=Ns.find(x=>x.id===n)||null,Le=!!m,Wc=Le?`Connected to ${m}`:k?"Looking for a new match":"Disconnected",Qc=Le?"Connected to a random user":k?"Finding your next conversation":"Start a new anonymous chat",Rl=P.useCallback(()=>{V.current&&(clearInterval(V.current),V.current=null),U.current&&(clearTimeout(U.current),U.current=null)},[]),vr=P.useCallback(()=>{Rl();const x=L.current;x&&(Je.current=!0,(x.readyState===WebSocket.OPEN||x.readyState===WebSocket.CONNECTING)&&x.close(1e3,"Client reset")),L.current=null,M(null)},[Rl]),Dl=x=>{h(A=>[...A,ya("System",x,"system")])},pt=x=>{const A=L.current;return!A||A.readyState!==WebSocket.OPEN?!1:(A.send(JSON.stringify(x)),!0)},yr=()=>{pt({type:"findPartner"})&&(E(!0),w(""),f(!1),j(null))},Yc=x=>{try{const A=JSON.parse(x.data);switch(A.type){case"usernameSet":yr();break;case"matched":w(A.partnerName||"Stranger"),h([]),E(!1),f(!1),p(""),j(Date.now()),setTimeout(()=>{var R;(R=ft.current)==null||R.focus()},50);break;case"waiting":E(!0),j(null);break;case"textMessage":h(R=>[...R,ya("Stranger",A.content)]),f(!1);break;case"typing":f(!!A.isTyping);break;case"partnerDisconnected":w(""),f(!1),E(!0),j(null),h([]),Dl(A.reason==="skip"?"Partner skipped. Finding a new person...":"Your chat partner disconnected. Finding someone new..."),A.shouldFindNew||setTimeout(()=>{yr()},600);break;case"error":p(A.message||"Something went wrong."),Dl(A.message||"Something went wrong.");break;case"connectionEstablished":case"connectionReady":case"pong":break;default:break}}catch(A){console.error("Failed to parse websocket message",A)}},bn=(x=l)=>{const A=x.trim();if(!A){p("Please enter your nickname before starting.");return}vr(),p(""),h([]),w(""),f(!1),E(!0),d(""),j(null),dt(!1),t("text");const R=new WebSocket(Uc());L.current=R,M(R),R.onopen=()=>{Je.current=!1,pt({type:"setUsername",username:A,chatType:"text"}),V.current=setInterval(()=>{pt({type:"ping"})},25e3)},R.onmessage=Yc,R.onerror=()=>{p("Could not connect to chat server. Please try again.")},R.onclose=ne=>{Rl(),L.current=null,M(null);const Ye=Je.current;Je.current=!1,!Ye&&(w(""),f(!1),E(!1),j(null),ne.code!==1e3&&p("Connection closed. Please reconnect."))}},oi=()=>{if(!o){p("Please choose text chat or video chat first.");return}if(!l.trim()){p("Please enter your nickname before starting.");return}if(o==="video"){p(""),t("video");return}bn()},Gc=(x,A)=>{const R=String(x||"").trim(),ne=A==="video"?"video":"text";if(R){if(a(R),s(ne),p(""),ne==="video"){t("video");return}bn(R)}},Kc=()=>{m&&(pt({type:"typing",isTyping:!0}),U.current&&clearTimeout(U.current),U.current=setTimeout(()=>{pt({type:"typing",isTyping:!1})},950))},ii=x=>{d(x.target.value),Kc()},si=x=>{var ne;x.preventDefault();const A=u.trim();if(!A||!m)return;if(!pt({type:"textMessage",content:A})){p("Message could not be sent because the connection is closed.");return}h(Ye=>[...Ye,ya("You",A)]),d(""),pt({type:"typing",isTyping:!1}),(ne=ft.current)==null||ne.focus()},Hl=()=>{pt({type:"skip"})&&(w(""),f(!1),E(!0),j(null),h([]),Dl("Looking for a new conversation..."))},Vl=()=>{vr(),t("home"),r(null),h([]),w(""),f(!1),E(!1),d(""),p(""),j(null),dt(!1)},wr=()=>{S(x=>!x)},qc=x=>{r(x),t("blog")},ui=()=>{t("home")},ci=()=>{setTimeout(()=>{const x=Te.current;x&&x.scrollTo({top:x.scrollHeight,behavior:"smooth"})},250)};return P.useEffect(()=>()=>{vr()},[vr]),P.useEffect(()=>{const x=Te.current;x&&x.scrollTo({top:x.scrollHeight,behavior:g.length>0?"smooth":"auto"})},[g,B]),P.useEffect(()=>{if(!T){se(0);return}const x=()=>{se(Math.max(0,Math.floor((Date.now()-T)/1e3)))};x();const A=window.setInterval(x,1e3);return()=>window.clearInterval(A)},[T]),P.useEffect(()=>{var A,R;const x=()=>{var di;const ne=Math.round(((di=window.visualViewport)==null?void 0:di.height)||window.innerHeight),Ye=window.innerHeight-ne;Nn(ne),F(window.innerWidth<=768&&Ye>160)};return x(),window.addEventListener("resize",x),(A=window.visualViewport)==null||A.addEventListener("resize",x),(R=window.visualViewport)==null||R.addEventListener("scroll",x),()=>{var ne,Ye;window.removeEventListener("resize",x),(ne=window.visualViewport)==null||ne.removeEventListener("resize",x),(Ye=window.visualViewport)==null||Ye.removeEventListener("scroll",x)}},[]),P.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[e]),e==="video"?i.createElement("div",{className:`app-container ${v?"dark":"light"}`},i.createElement("div",{className:"video-chat-shell"},i.createElement(P.Suspense,{fallback:i.createElement("div",{className:"loading-screen"},"Loading video chat...")},i.createElement(Gp,{initialUsername:l.trim(),onBack:Vl})))):e==="text"?i.createElement(Yp,{darkMode:v,onToggleTheme:wr,ws:C,username:l,setUsername:a,partnerName:m,isConnected:Le,isMatching:k,isTyping:B,connectionError:c,messages:g,draftMessage:u,onDraftChange:ii,onSubmit:si,onSkip:Hl,onEnd:Vl,onStart:()=>bn(),onRetry:yr,messageInputRef:ft,messagesAreaRef:Te,messagesEndRef:Qe,onComposerFocus:ci,formatTime:bs}):e==="legacy-text"?i.createElement("div",{className:`app-container chat-app ${v?"dark":"light"}`},i.createElement("div",{className:`fullscreen-chat-layout chat-redesign ${N?"keyboard-open":""}`,style:{height:typeof window<"u"&&window.innerWidth<=768&&Gt?`${Gt}px`:void 0}},i.createElement("div",{className:"chat-ambient chat-ambient-left"}),i.createElement("div",{className:"chat-ambient chat-ambient-right"}),i.createElement("div",{className:"chat-shell"},i.createElement("div",{className:"fullscreen-chat-header chat-header-redesign"},i.createElement("div",{className:"chat-brand-cluster"},i.createElement("img",{src:He,alt:"PerfectChat logo",className:"chat-header-logo"}),i.createElement("div",{className:"chat-brand-copy"},i.createElement("span",{className:"fullscreen-brand-name chat-brand-name"},"PerfectChat"),i.createElement("span",{className:"chat-brand-subtitle"},"Anonymous text chat that stays clean and easy."))),i.createElement("div",{className:"chat-header-actions"},i.createElement("button",{className:"chat-primary-action",onClick:Hl,title:"Find someone new",type:"button",disabled:!C},i.createElement(ga,null),i.createElement("span",null,"Next Match")),i.createElement("div",{className:"chat-menu-wrap"},i.createElement("button",{className:"chat-icon-button",onClick:()=>dt(x=>!x),title:"Open chat menu",type:"button"},i.createElement(Lp,null)),ct&&i.createElement("div",{className:"chat-menu-popover"},i.createElement("button",{className:"chat-menu-item",onClick:()=>{dt(!1),Vl()},type:"button"},i.createElement(Vc,null),i.createElement("span",null,"Home")),i.createElement("button",{className:"chat-menu-item",onClick:()=>{wr(),dt(!1)},type:"button"},v?i.createElement(qr,null):i.createElement(Kr,null),i.createElement("span",null,v?"Light Mode":"Dark Mode")))))),i.createElement("div",{className:"chat-content-grid"},i.createElement("section",{className:"chat-main-column"},i.createElement("button",{className:`chat-connection-card chat-fixed-strip ${Le?"connected":"searching"}`,onClick:()=>We(x=>!x),type:"button"},i.createElement("div",{className:"chat-connection-presence"},i.createElement("span",{className:"chat-presence-orb"})),i.createElement("div",{className:"chat-connection-copy"},i.createElement("span",{className:"chat-connection-title"},Qc),i.createElement("span",{className:"chat-connection-meta"},i.createElement(zp,null),Le?Jp(z):k?"Searching for someone new":"Start or reconnect your chat"),i.createElement("span",{className:"chat-connection-subtext"},Le?Wc:"Anonymous, random, and ready when you are.")),i.createElement("span",{className:"chat-connection-arrow"},H?i.createElement(Ap,null):i.createElement(Fp,null))),H&&i.createElement("div",{className:"chat-tag-row chat-fixed-strip"},Kp.map(({icon:x,label:A,tone:R})=>i.createElement("span",{key:A,className:`chat-tag chat-tag-${R}`},i.createElement(x,null),i.createElement("span",null,A)))),i.createElement("div",{className:"chat-conversation-panel"},i.createElement("div",{ref:Te,className:"fullscreen-messages-area chat-messages-area"},i.createElement("div",{className:"fullscreen-messages-container chat-messages-container"},!C&&i.createElement("div",{className:"fullscreen-login-container"},i.createElement("div",{className:"fullscreen-login-content chat-login-card"},i.createElement("img",{src:He,alt:"PerfectChat logo",className:"fullscreen-login-logo"}),i.createElement("p",{className:"eyebrow"},"Random Text Chat"),i.createElement("h2",{className:"fullscreen-login-title"},"Start chatting instantly"),i.createElement("p",{className:"fullscreen-login-copy"},"Enter a nickname, get matched quickly, and jump into a clean, distraction-free conversation."),i.createElement("div",{className:"fullscreen-login-form"},i.createElement("input",{type:"text",placeholder:"Enter your nickname",value:l,onChange:x=>a(x.target.value),className:"fullscreen-username-input",onKeyDown:x=>{x.key==="Enter"&&bn()}}),i.createElement("button",{onClick:bn,disabled:!l.trim(),className:`fullscreen-start-button ${l.trim()?"":"disabled"}`,type:"button"},"Start Anonymous Chat"),c&&i.createElement("div",{className:"error-message"},c)))),C&&g.length===0&&Le&&i.createElement("div",{className:"fullscreen-empty-state chat-empty-state"},i.createElement("div",{className:"fullscreen-empty-icon"},i.createElement(ha,null)),i.createElement("h3",{className:"fullscreen-empty-title"},"Connected!"),i.createElement("p",{className:"fullscreen-empty-subtitle"},"Start your anonymous conversation with ",m,".")),C&&g.length===0&&!Le&&k&&i.createElement("div",{className:"fullscreen-empty-state chat-empty-state"},i.createElement("div",{className:"fullscreen-empty-icon"},i.createElement(ha,null)),i.createElement("h3",{className:"fullscreen-empty-title"},"Finding Partner..."),i.createElement("p",{className:"fullscreen-empty-subtitle"},"Please wait while we match you with someone new."),i.createElement("button",{onClick:yr,className:"find-partner-button",disabled:!C,type:"button"},"Retry Match")),g.map((x,A)=>{const R=x.sender==="You",ne=x.sender==="System",Ye=R?"You":m||"Stranger";return i.createElement("div",{key:`${x.sender}-${A}`,className:`fullscreen-message-wrapper chat-message-wrapper ${R?"is-outgoing":ne?"is-system":"is-incoming"}`},!R&&!ne&&i.createElement("div",{className:"fullscreen-avatar fullscreen-avatar-stranger"},"S"),i.createElement("div",{className:"chat-message-stack"},!ne&&i.createElement("span",{className:"chat-message-author"},Ye),i.createElement("div",{className:`message ${R?"outgoing fullscreen-message-you":ne?"system fullscreen-message-system":"incoming fullscreen-message-stranger"}`},i.createElement("p",null,x.content),x.createdAt&&i.createElement("div",{className:"chat-message-meta"},i.createElement("span",null,bs(x.createdAt)),R&&i.createElement("span",{className:"chat-double-check"},"✓✓")))))}),B&&Le&&i.createElement("div",{className:"fullscreen-typing-wrapper chat-message-wrapper is-incoming"},i.createElement("div",{className:"fullscreen-avatar fullscreen-avatar-stranger"},"S"),i.createElement("div",{className:"chat-message-stack"},i.createElement("span",{className:"chat-message-author"},m||"Stranger"),i.createElement("div",{className:"typing-indicator fullscreen-typing-indicator keyboard-typing"},i.createElement("div",{className:"keyboard-typing-keys"},i.createElement("span",{className:"keyboard-key"}),i.createElement("span",{className:"keyboard-key"}),i.createElement("span",{className:"keyboard-key"}),i.createElement("span",{className:"keyboard-key wide"})),i.createElement("span",{className:"keyboard-typing-text"},"typing...")))),i.createElement("div",{ref:Qe}))),C&&i.createElement("div",{className:"fullscreen-message-input-area chat-composer-shell"},i.createElement("div",{className:"fullscreen-message-input-container"},i.createElement("form",{className:"message-form fullscreen-message-form chat-composer-form",onSubmit:si},i.createElement("button",{className:"chat-tool-button",type:"button",title:"Emoji picker coming soon"},i.createElement(Dp,null)),i.createElement("button",{className:"chat-tool-button",type:"button",title:"Attachment support coming soon"},i.createElement(jp,null)),i.createElement("input",{ref:ft,type:"text",value:u,onChange:ii,onFocus:ci,placeholder:Le?"Type a message...":"Waiting for connection...",disabled:!Le,className:"message-input fullscreen-message-input chat-composer-input"}),i.createElement("button",{type:"submit",className:"send-button fullscreen-send-button chat-send-button",disabled:!Le||!u.trim()},i.createElement($c,null))))))),i.createElement("aside",{className:"chat-sidebar"},i.createElement("article",{className:"chat-side-card"},i.createElement("div",{className:"chat-side-icon pink"},i.createElement(Ip,null)),i.createElement("h3",null,"Stay kind & respectful"),i.createElement("p",null,"We're all here to have meaningful conversations. Please be kind and respectful to each other."),i.createElement("div",{className:"chat-side-points"},qp.map(x=>i.createElement("span",{key:x},x)),i.createElement("span",{className:"warning"},"Report inappropriate behavior")),i.createElement("button",{className:"chat-side-secondary-button",type:"button"},"Learn more")),i.createElement("article",{className:"chat-side-card"},i.createElement("div",{className:"chat-side-icon violet"},i.createElement(ga,null)),i.createElement("h3",null,"Looking for a new chat?"),i.createElement("p",null,"Click below to instantly connect with someone new."),i.createElement("button",{className:"chat-side-primary-button",onClick:Hl,disabled:!C,type:"button"},i.createElement(ga,null),i.createElement("span",null,"Next Match")),i.createElement("div",{className:"chat-side-note"},i.createElement(gr,null),i.createElement("span",null,"Connections are random and completely anonymous.")))))))):e==="blog"&&Oe?i.createElement("div",{className:`app-container ${v?"dark":"light"}`},i.createElement("header",{className:"app-header"},i.createElement("div",{className:"logo-container"},i.createElement("img",{src:He,alt:"PerfectChat logo",className:"app-logo"}),i.createElement("div",{className:"brand-copy"},i.createElement("h1",{className:"app-title"},"PerfectChat"),i.createElement("p",{className:"brand-subtitle"},"Anonymous random conversations, designed to feel easy."))),i.createElement("div",{className:"header-actions"},i.createElement("button",{className:"blog-back-button",onClick:ui,type:"button"},i.createElement(Dc,null),i.createElement("span",null,"Back to Home")),i.createElement("button",{className:"theme-toggle",onClick:wr,type:"button"},v?i.createElement(qr,null):i.createElement(Kr,null)))),i.createElement("main",{className:"app-main blog-article-page"},i.createElement("article",{className:"blog-article-shell"},i.createElement("div",{className:"blog-article-topbar"},i.createElement("span",{className:"eyebrow"},"PerfectChat Journal"),i.createElement("span",{className:"blog-category"},Oe.category)),i.createElement("p",{className:"blog-readtime"},Oe.readTime),i.createElement("h2",{className:"blog-article-title"},Oe.title),i.createElement("p",{className:"blog-article-excerpt"},Oe.excerpt),i.createElement("div",{className:"blog-article-body"},Oe.body.map((x,A)=>i.createElement("p",{key:A},x))),i.createElement("div",{className:"blog-article-actions"},i.createElement("button",{className:"blog-read-more",onClick:ui,type:"button"},"Read More Articles"))))):e==="home"?i.createElement(Qp,{onReferenceStart:Gc,onThemeChange:S}):i.createElement("div",{className:`app-container ${v?"dark":"light"}`},i.createElement("header",{className:"app-header"},i.createElement("div",{className:"logo-container"},i.createElement("img",{src:He,alt:"PerfectChat logo",className:"app-logo"}),i.createElement("div",{className:"brand-copy"},i.createElement("h1",{className:"app-title"},"PerfectChat"),i.createElement("p",{className:"brand-subtitle"},"Anonymous random conversations, designed to feel easy."))),i.createElement("div",{className:"header-actions"},i.createElement("button",{className:"theme-toggle",onClick:wr,type:"button"},v?i.createElement(qr,null):i.createElement(Kr,null)))),i.createElement("main",{className:"app-main"},i.createElement("section",{className:"hero-panel"},i.createElement("div",{className:"hero-copy-panel home-story-card"},i.createElement("span",{className:"eyebrow"},"PerfectChat"),i.createElement("h2",{className:"hero-title"},"Start real conversations with strangers in seconds."),i.createElement("p",{className:"hero-description"},"PerfectChat connects you anonymously with new people for meaningful conversations. No sign-ups. No pressure. Just real chats, whenever you want."),i.createElement("div",{className:"hero-points"},Zp.map(({icon:x,label:A})=>i.createElement("span",{key:A},i.createElement(x,null),A)))),i.createElement("div",{className:"hero-action-card home-mode-panel"},i.createElement("img",{src:He,alt:"PerfectChat logo",className:"welcome-logo"}),i.createElement("h3",{className:"hero-card-title"},"Choose how you want to chat"),i.createElement("p",{className:"hero-card-copy"},"Pick your preferred chat mode. You can switch anytime during the conversation."),i.createElement("div",{className:"mode-selector"},i.createElement("button",{className:`mode-option ${o==="text"?"active":""}`,onClick:()=>{s("text"),p("")},type:"button"},i.createElement("span",{className:"mode-option-check"}),i.createElement("div",{className:"mode-option-icon pink"},i.createElement(ha,null)),i.createElement("h4",null,"Text Chat"),i.createElement("p",null,"Chat with strangers using text.")),i.createElement("button",{className:`mode-option ${o==="video"?"active":""}`,onClick:()=>{s("video"),p("")},type:"button"},i.createElement("span",{className:"mode-option-check"}),i.createElement("div",{className:"mode-option-icon violet"},i.createElement(Vp,null)),i.createElement("h4",null,"Video Chat"),i.createElement("p",null,"Face-to-face conversations in real time."))),o&&i.createElement("div",{className:"mode-name-panel"},i.createElement("label",{className:"mode-name-label",htmlFor:"nickname-input"},"Enter your nickname to start ",o==="video"?"video":"text"," chat"),i.createElement("input",{id:"nickname-input",className:"welcome-name-input",type:"text",value:l,onChange:x=>{a(x.target.value),p("")},onKeyDown:x=>{x.key==="Enter"&&oi()},placeholder:"Choose your nickname"})),i.createElement("p",{className:"mode-helper-copy"},o?"Your nickname stays visible only inside the current chat session.":"Select a mode first, then your nickname field will appear here."),i.createElement("button",{onClick:oi,className:"welcome-button start-chat-button",type:"button",disabled:!o||!l.trim()},i.createElement(Rp,null),i.createElement("span",null,"Start Chat")),c&&i.createElement("div",{className:"error-banner home-error"},c))),i.createElement("section",{className:"blog-showcase journal-showcase"},i.createElement("div",{className:"blog-showcase-head"},i.createElement("div",null,i.createElement("span",{className:"eyebrow"},"PerfectChat Journal"),i.createElement("h2",{className:"blog-showcase-title"},"Short reads for better anonymous conversations")),i.createElement("p",{className:"blog-showcase-copy"},"These articles cover conversation confidence, safety, fast matching, and the small details that make PerfectChat feel better to use.")),i.createElement("div",{className:"blog-grid"},Ns.map(x=>i.createElement("article",{key:x.id,className:"blog-card"},i.createElement("div",{className:"blog-meta-row"},i.createElement("span",{className:"blog-category"},x.category),i.createElement("span",{className:"blog-readtime"},x.readTime)),i.createElement("h3",{className:"blog-card-title"},x.title),i.createElement("p",{className:"blog-card-content"},x.excerpt),i.createElement("button",{className:"blog-read-more journal-read-more",onClick:()=>qc(x.id),type:"button"},i.createElement("span",null,"Read Article"),i.createElement("span",{"aria-hidden":"true"},"->")))))),i.createElement("section",{className:"trust-strip","aria-label":"PerfectChat highlights"},Xp.map(({icon:x,title:A,description:R})=>i.createElement("article",{key:A,className:"trust-item"},i.createElement("div",{className:"trust-item-icon"},i.createElement(x,null)),i.createElement("div",null,i.createElement("h3",null,A),i.createElement("p",null,R)))))))}class tm extends P.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}render(){return this.state.error?i.createElement("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",background:"#0b1220",color:"#f8fafc",padding:"24px",fontFamily:"Segoe UI, sans-serif"}},i.createElement("div",{style:{maxWidth:"720px",width:"100%",background:"#111827",border:"1px solid #334155",borderRadius:"16px",padding:"24px"}},i.createElement("h1",{style:{marginTop:0}},"Frontend error"),i.createElement("pre",{style:{whiteSpace:"pre-wrap",margin:0}},String(this.state.error)))):this.props.children}}jc(document.getElementById("root")).render(i.createElement(P.StrictMode,null,i.createElement(tm,null,i.createElement(em,null))));export{rm as F,i as R,um as a,Vc as b,He as c,nm as d,gr as e,sm as f,am as g,om as h,Vp as i,lm as j,im as k,Uc as l,cm as m,P as r};
