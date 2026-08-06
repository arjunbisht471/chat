const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/VideoChat-8DApQZPH.js","assets/VideoChat-jrpnNefM.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function od(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Os={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gr=Symbol.for("react.element"),id=Symbol.for("react.portal"),sd=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),dd=Symbol.for("react.provider"),fd=Symbol.for("react.context"),pd=Symbol.for("react.forward_ref"),md=Symbol.for("react.suspense"),hd=Symbol.for("react.memo"),gd=Symbol.for("react.lazy"),ki=Symbol.iterator;function vd(e){return e===null||typeof e!="object"?null:(e=ki&&e[ki]||e["@@iterator"],typeof e=="function"?e:null)}var Rs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},js=Object.assign,Bs={};function Mn(e,t,n){this.props=e,this.context=t,this.refs=Bs,this.updater=n||Rs}Mn.prototype.isReactComponent={};Mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ds(){}Ds.prototype=Mn.prototype;function xo(e,t,n){this.props=e,this.context=t,this.refs=Bs,this.updater=n||Rs}var ko=xo.prototype=new Ds;ko.constructor=xo;js(ko,Mn.prototype);ko.isPureReactComponent=!0;var Ei=Array.isArray,Hs=Object.prototype.hasOwnProperty,Eo={current:null},Vs={key:!0,ref:!0,__self:!0,__source:!0};function $s(e,t,n){var r,l={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Hs.call(t,r)&&!Vs.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:gr,type:e,key:a,ref:o,props:l,_owner:Eo.current}}function yd(e,t){return{$$typeof:gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function So(e){return typeof e=="object"&&e!==null&&e.$$typeof===gr}function wd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Si=/\/+/g;function Zl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wd(""+e.key):t.toString(36)}function Wr(e,t,n,r,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case gr:case id:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Zl(o,0):r,Ei(l)?(n="",e!=null&&(n=e.replace(Si,"$&/")+"/"),Wr(l,t,n,"",function(d){return d})):l!=null&&(So(l)&&(l=yd(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Si,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Ei(e))for(var s=0;s<e.length;s++){a=e[s];var u=r+Zl(a,s);o+=Wr(a,t,n,u,l)}else if(u=vd(e),typeof u=="function")for(e=u.call(e),s=0;!(a=e.next()).done;)a=a.value,u=r+Zl(a,s++),o+=Wr(a,t,n,u,l);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Mr(e,t,n){if(e==null)return e;var r=[],l=0;return Wr(e,r,"","",function(a){return t.call(n,a,l++)}),r}function xd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Qr={transition:null},kd={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Qr,ReactCurrentOwner:Eo};function Us(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Mr,forEach:function(e,t,n){Mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mr(e,function(){t++}),t},toArray:function(e){return Mr(e,function(t){return t})||[]},only:function(e){if(!So(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Mn;z.Fragment=sd;z.Profiler=cd;z.PureComponent=xo;z.StrictMode=ud;z.Suspense=md;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kd;z.act=Us;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=js({},e.props),l=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Eo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Hs.call(t,u)&&!Vs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:gr,type:e.type,key:l,ref:a,props:r,_owner:o}};z.createContext=function(e){return e={$$typeof:fd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dd,_context:e},e.Consumer=e};z.createElement=$s;z.createFactory=function(e){var t=$s.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:pd,render:e}};z.isValidElement=So;z.lazy=function(e){return{$$typeof:gd,_payload:{_status:-1,_result:e},_init:xd}};z.memo=function(e,t){return{$$typeof:hd,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Qr.transition;Qr.transition={};try{e()}finally{Qr.transition=t}};z.unstable_act=Us;z.useCallback=function(e,t){return he.current.useCallback(e,t)};z.useContext=function(e){return he.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return he.current.useDeferredValue(e)};z.useEffect=function(e,t){return he.current.useEffect(e,t)};z.useId=function(){return he.current.useId()};z.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return he.current.useMemo(e,t)};z.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};z.useRef=function(e){return he.current.useRef(e)};z.useState=function(e){return he.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return he.current.useTransition()};z.version="18.3.1";Os.exports=z;var P=Os.exports;const i=od(P);var Ws={exports:{}},Te={},Qs={exports:{}},Ys={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,F){var _=N.length;N.push(F);e:for(;0<_;){var G=_-1>>>1,V=N[G];if(0<l(V,F))N[G]=F,N[_]=V,_=G;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var F=N[0],_=N.pop();if(_!==F){N[0]=_;e:for(var G=0,V=N.length,Xe=V>>>1;G<Xe;){var ve=2*(G+1)-1,pt=N[ve],Ue=ve+1,Je=N[Ue];if(0>l(pt,_))Ue<V&&0>l(Je,pt)?(N[G]=Je,N[Ue]=_,G=Ue):(N[G]=pt,N[ve]=_,G=ve);else if(Ue<V&&0>l(Je,_))N[G]=Je,N[Ue]=_,G=Ue;else break e}}return F}function l(N,F){var _=N.sortIndex-F.sortIndex;return _!==0?_:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],d=[],g=1,h=null,m=3,x=!1,k=!1,E=!1,R=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var F=n(d);F!==null;){if(F.callback===null)r(d);else if(F.startTime<=N)r(d),F.sortIndex=F.expirationTime,t(u,F);else break;F=n(d)}}function v(N){if(E=!1,p(N),!k)if(n(u)!==null)k=!0,Zt(S);else{var F=n(d);F!==null&&Ze(v,F.startTime-N)}}function S(N,F){k=!1,E&&(E=!1,f(T),T=-1),x=!0;var _=m;try{for(p(F),h=n(u);h!==null&&(!(h.expirationTime>F)||N&&!U());){var G=h.callback;if(typeof G=="function"){h.callback=null,m=h.priorityLevel;var V=G(h.expirationTime<=F);F=e.unstable_now(),typeof V=="function"?h.callback=V:h===n(u)&&r(u),p(F)}else r(u);h=n(u)}if(h!==null)var Xe=!0;else{var ve=n(d);ve!==null&&Ze(v,ve.startTime-F),Xe=!1}return Xe}finally{h=null,m=_,x=!1}}var C=!1,M=null,T=-1,D=5,A=-1;function U(){return!(e.unstable_now()-A<D)}function qe(){if(M!==null){var N=e.unstable_now();A=N;var F=!0;try{F=M(!0,N)}finally{F?H():(C=!1,M=null)}}else C=!1}var H;if(typeof c=="function")H=function(){c(qe)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,Ot=ft.port2;ft.port1.onmessage=qe,H=function(){Ot.postMessage(null)}}else H=function(){R(qe,0)};function Zt(N){M=N,C||(C=!0,H())}function Ze(N,F){T=R(function(){N(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,Zt(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var _=m;m=F;try{return N()}finally{m=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var _=m;m=N;try{return F()}finally{m=_}},e.unstable_scheduleCallback=function(N,F,_){var G=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?G+_:G):_=G,N){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=_+V,N={id:g++,callback:F,priorityLevel:N,startTime:_,expirationTime:V,sortIndex:-1},_>G?(N.sortIndex=_,t(d,N),n(u)===null&&N===n(d)&&(E?(f(T),T=-1):E=!0,Ze(v,_-G))):(N.sortIndex=V,t(u,N),k||x||(k=!0,Zt(S))),N},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(N){var F=m;return function(){var _=m;m=F;try{return N.apply(this,arguments)}finally{m=_}}}})(Ys);Qs.exports=Ys;var Ed=Qs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd=P,be=Ed;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gs=new Set,Jn={};function Kt(e,t){kn(e,t),kn(e+"Capture",t)}function kn(e,t){for(Jn[e]=t,e=0;e<t.length;e++)Gs.add(t[e])}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ta=Object.prototype.hasOwnProperty,Cd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ci={},Ni={};function Nd(e){return Ta.call(Ni,e)?!0:Ta.call(Ci,e)?!1:Cd.test(e)?Ni[e]=!0:(Ci[e]=!0,!1)}function bd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Td(e,t,n,r){if(t===null||typeof t>"u"||bd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,l,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Co=/[\-:]([a-z])/g;function No(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Co,No);se[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Co,No);se[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Co,No);se[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function bo(e,t,n,r){var l=se.hasOwnProperty(t)?se[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Td(t,n,l,r)&&(n=null),r||l===null?Nd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=Sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lr=Symbol.for("react.element"),nn=Symbol.for("react.portal"),rn=Symbol.for("react.fragment"),To=Symbol.for("react.strict_mode"),Ma=Symbol.for("react.profiler"),Ks=Symbol.for("react.provider"),qs=Symbol.for("react.context"),Mo=Symbol.for("react.forward_ref"),La=Symbol.for("react.suspense"),Pa=Symbol.for("react.suspense_list"),Lo=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Zs=Symbol.for("react.offscreen"),bi=Symbol.iterator;function An(e){return e===null||typeof e!="object"?null:(e=bi&&e[bi]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Xl;function Dn(e){if(Xl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xl=t&&t[1]||""}return`
`+Xl+e}var Jl=!1;function ea(e,t){if(!e||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),a=r.stack.split(`
`),o=l.length-1,s=a.length-1;1<=o&&0<=s&&l[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==a[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function Md(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=ea(e.type,!1),e;case 11:return e=ea(e.type.render,!1),e;case 1:return e=ea(e.type,!0),e;default:return""}}function Fa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rn:return"Fragment";case nn:return"Portal";case Ma:return"Profiler";case To:return"StrictMode";case La:return"Suspense";case Pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qs:return(e.displayName||"Context")+".Consumer";case Ks:return(e._context.displayName||"Context")+".Provider";case Mo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lo:return t=e.displayName||null,t!==null?t:Fa(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return Fa(e(t))}catch{}}return null}function Ld(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fa(t);case 8:return t===To?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pd(e){var t=Xs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pr(e){e._valueTracker||(e._valueTracker=Pd(e))}function Js(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Xs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function al(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Aa(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ti(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function eu(e,t){t=t.checked,t!=null&&bo(e,"checked",t,!1)}function _a(e,t){eu(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?za(e,t.type,n):t.hasOwnProperty("defaultValue")&&za(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function za(e,t,n){(t!=="number"||al(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hn=Array.isArray;function hn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ia(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Li(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(Hn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function tu(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fr,ru=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fd=["Webkit","ms","Moz","O"];Object.keys(Un).forEach(function(e){Fd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Un[t]=Un[e]})});function lu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Un.hasOwnProperty(e)&&Un[e]?(""+t).trim():t+"px"}function au(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=lu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ad=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ra(e,t){if(t){if(Ad[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function ja(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ba=null;function Po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Da=null,gn=null,vn=null;function Fi(e){if(e=wr(e)){if(typeof Da!="function")throw Error(y(280));var t=e.stateNode;t&&(t=Il(t),Da(e.stateNode,e.type,t))}}function ou(e){gn?vn?vn.push(e):vn=[e]:gn=e}function iu(){if(gn){var e=gn,t=vn;if(vn=gn=null,Fi(e),t)for(e=0;e<t.length;e++)Fi(t[e])}}function su(e,t){return e(t)}function uu(){}var ta=!1;function cu(e,t,n){if(ta)return e(t,n);ta=!0;try{return su(e,t,n)}finally{ta=!1,(gn!==null||vn!==null)&&(uu(),iu())}}function tr(e,t){var n=e.stateNode;if(n===null)return null;var r=Il(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var Ha=!1;if(it)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Ha=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Ha=!1}function _d(e,t,n,r,l,a,o,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Wn=!1,ol=null,il=!1,Va=null,zd={onError:function(e){Wn=!0,ol=e}};function Id(e,t,n,r,l,a,o,s,u){Wn=!1,ol=null,_d.apply(zd,arguments)}function Od(e,t,n,r,l,a,o,s,u){if(Id.apply(this,arguments),Wn){if(Wn){var d=ol;Wn=!1,ol=null}else throw Error(y(198));il||(il=!0,Va=d)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function du(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ai(e){if(qt(e)!==e)throw Error(y(188))}function Rd(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return Ai(l),e;if(a===r)return Ai(l),t;a=a.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=a;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=a;break}if(s===r){o=!0,r=l,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=l;break}if(s===r){o=!0,r=a,n=l;break}s=s.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function fu(e){return e=Rd(e),e!==null?pu(e):null}function pu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pu(e);if(t!==null)return t;e=e.sibling}return null}var mu=be.unstable_scheduleCallback,_i=be.unstable_cancelCallback,jd=be.unstable_shouldYield,Bd=be.unstable_requestPaint,J=be.unstable_now,Dd=be.unstable_getCurrentPriorityLevel,Fo=be.unstable_ImmediatePriority,hu=be.unstable_UserBlockingPriority,sl=be.unstable_NormalPriority,Hd=be.unstable_LowPriority,gu=be.unstable_IdlePriority,Fl=null,Ge=null;function Vd(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Fl,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:Wd,$d=Math.log,Ud=Math.LN2;function Wd(e){return e>>>=0,e===0?32:31-($d(e)/Ud|0)|0}var Ar=64,_r=4194304;function Vn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ul(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Vn(s):(a&=o,a!==0&&(r=Vn(a)))}else o=n&~l,o!==0?r=Vn(o):a!==0&&(r=Vn(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-He(t),l=1<<n,r|=e[n],t&=~l;return r}function Qd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-He(a),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=Qd(s,t)):u<=t&&(e.expiredLanes|=s),a&=~s}}function $a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vu(){var e=Ar;return Ar<<=1,!(Ar&4194240)&&(Ar=64),e}function na(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function Gd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-He(n),a=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~a}}function Ao(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var B=0;function yu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wu,_o,xu,ku,Eu,Ua=!1,zr=[],St=null,Ct=null,Nt=null,nr=new Map,rr=new Map,wt=[],Kd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zi(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function zn(e,t,n,r,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},t!==null&&(t=wr(t),t!==null&&_o(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function qd(e,t,n,r,l){switch(t){case"focusin":return St=zn(St,e,t,n,r,l),!0;case"dragenter":return Ct=zn(Ct,e,t,n,r,l),!0;case"mouseover":return Nt=zn(Nt,e,t,n,r,l),!0;case"pointerover":var a=l.pointerId;return nr.set(a,zn(nr.get(a)||null,e,t,n,r,l)),!0;case"gotpointercapture":return a=l.pointerId,rr.set(a,zn(rr.get(a)||null,e,t,n,r,l)),!0}return!1}function Su(e){var t=Bt(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=du(n),t!==null){e.blockedOn=t,Eu(e.priority,function(){xu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ba=r,n.target.dispatchEvent(r),Ba=null}else return t=wr(n),t!==null&&_o(t),e.blockedOn=n,!1;t.shift()}return!0}function Ii(e,t,n){Yr(e)&&n.delete(t)}function Zd(){Ua=!1,St!==null&&Yr(St)&&(St=null),Ct!==null&&Yr(Ct)&&(Ct=null),Nt!==null&&Yr(Nt)&&(Nt=null),nr.forEach(Ii),rr.forEach(Ii)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,Ua||(Ua=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Zd)))}function lr(e){function t(l){return In(l,e)}if(0<zr.length){In(zr[0],e);for(var n=1;n<zr.length;n++){var r=zr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(St!==null&&In(St,e),Ct!==null&&In(Ct,e),Nt!==null&&In(Nt,e),nr.forEach(t),rr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)Su(n),n.blockedOn===null&&wt.shift()}var yn=dt.ReactCurrentBatchConfig,cl=!0;function Xd(e,t,n,r){var l=B,a=yn.transition;yn.transition=null;try{B=1,zo(e,t,n,r)}finally{B=l,yn.transition=a}}function Jd(e,t,n,r){var l=B,a=yn.transition;yn.transition=null;try{B=4,zo(e,t,n,r)}finally{B=l,yn.transition=a}}function zo(e,t,n,r){if(cl){var l=Wa(e,t,n,r);if(l===null)fa(e,t,r,dl,n),zi(e,r);else if(qd(l,e,t,n,r))r.stopPropagation();else if(zi(e,r),t&4&&-1<Kd.indexOf(e)){for(;l!==null;){var a=wr(l);if(a!==null&&wu(a),a=Wa(e,t,n,r),a===null&&fa(e,t,r,dl,n),a===l)break;l=a}l!==null&&r.stopPropagation()}else fa(e,t,r,null,n)}}var dl=null;function Wa(e,t,n,r){if(dl=null,e=Po(r),e=Bt(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=du(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return dl=e,null}function Cu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dd()){case Fo:return 1;case hu:return 4;case sl:case Hd:return 16;case gu:return 536870912;default:return 16}default:return 16}}var kt=null,Io=null,Gr=null;function Nu(){if(Gr)return Gr;var e,t=Io,n=t.length,r,l="value"in kt?kt.value:kt.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[a-r];r++);return Gr=l.slice(e,1<r?1-r:void 0)}function Kr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function Oi(){return!1}function Me(e){function t(n,r,l,a,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ir:Oi,this.isPropagationStopped=Oi,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oo=Me(Ln),yr=Z({},Ln,{view:0,detail:0}),ef=Me(yr),ra,la,On,Al=Z({},yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==On&&(On&&e.type==="mousemove"?(ra=e.screenX-On.screenX,la=e.screenY-On.screenY):la=ra=0,On=e),ra)},movementY:function(e){return"movementY"in e?e.movementY:la}}),Ri=Me(Al),tf=Z({},Al,{dataTransfer:0}),nf=Me(tf),rf=Z({},yr,{relatedTarget:0}),aa=Me(rf),lf=Z({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),af=Me(lf),of=Z({},Ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sf=Me(of),uf=Z({},Ln,{data:0}),ji=Me(uf),cf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},df={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ff={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ff[e])?!!t[e]:!1}function Ro(){return pf}var mf=Z({},yr,{key:function(e){if(e.key){var t=cf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?df[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ro,charCode:function(e){return e.type==="keypress"?Kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hf=Me(mf),gf=Z({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bi=Me(gf),vf=Z({},yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ro}),yf=Me(vf),wf=Z({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),xf=Me(wf),kf=Z({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ef=Me(kf),Sf=[9,13,27,32],jo=it&&"CompositionEvent"in window,Qn=null;it&&"documentMode"in document&&(Qn=document.documentMode);var Cf=it&&"TextEvent"in window&&!Qn,bu=it&&(!jo||Qn&&8<Qn&&11>=Qn),Di=" ",Hi=!1;function Tu(e,t){switch(e){case"keyup":return Sf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ln=!1;function Nf(e,t){switch(e){case"compositionend":return Mu(t);case"keypress":return t.which!==32?null:(Hi=!0,Di);case"textInput":return e=t.data,e===Di&&Hi?null:e;default:return null}}function bf(e,t){if(ln)return e==="compositionend"||!jo&&Tu(e,t)?(e=Nu(),Gr=Io=kt=null,ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bu&&t.locale!=="ko"?null:t.data;default:return null}}var Tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tf[e.type]:t==="textarea"}function Lu(e,t,n,r){ou(r),t=fl(t,"onChange"),0<t.length&&(n=new Oo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,ar=null;function Mf(e){Du(e,0)}function _l(e){var t=sn(e);if(Js(t))return e}function Lf(e,t){if(e==="change")return t}var Pu=!1;if(it){var oa;if(it){var ia="oninput"in document;if(!ia){var $i=document.createElement("div");$i.setAttribute("oninput","return;"),ia=typeof $i.oninput=="function"}oa=ia}else oa=!1;Pu=oa&&(!document.documentMode||9<document.documentMode)}function Ui(){Yn&&(Yn.detachEvent("onpropertychange",Fu),ar=Yn=null)}function Fu(e){if(e.propertyName==="value"&&_l(ar)){var t=[];Lu(t,ar,e,Po(e)),cu(Mf,t)}}function Pf(e,t,n){e==="focusin"?(Ui(),Yn=t,ar=n,Yn.attachEvent("onpropertychange",Fu)):e==="focusout"&&Ui()}function Ff(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(ar)}function Af(e,t){if(e==="click")return _l(t)}function _f(e,t){if(e==="input"||e==="change")return _l(t)}function zf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:zf;function or(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ta.call(t,l)||!$e(e[l],t[l]))return!1}return!0}function Wi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qi(e,t){var n=Wi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wi(n)}}function Au(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Au(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _u(){for(var e=window,t=al();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=al(e.document)}return t}function Bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function If(e){var t=_u(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Au(n.ownerDocument.documentElement,n)){if(r!==null&&Bo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(r.start,l);r=r.end===void 0?a:Math.min(r.end,l),!e.extend&&a>r&&(l=r,r=a,a=l),l=Qi(n,a);var o=Qi(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Of=it&&"documentMode"in document&&11>=document.documentMode,an=null,Qa=null,Gn=null,Ya=!1;function Yi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ya||an==null||an!==al(r)||(r=an,"selectionStart"in r&&Bo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&or(Gn,r)||(Gn=r,r=fl(Qa,"onSelect"),0<r.length&&(t=new Oo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=an)))}function Or(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var on={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionend:Or("Transition","TransitionEnd")},sa={},zu={};it&&(zu=document.createElement("div").style,"AnimationEvent"in window||(delete on.animationend.animation,delete on.animationiteration.animation,delete on.animationstart.animation),"TransitionEvent"in window||delete on.transitionend.transition);function zl(e){if(sa[e])return sa[e];if(!on[e])return e;var t=on[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zu)return sa[e]=t[n];return e}var Iu=zl("animationend"),Ou=zl("animationiteration"),Ru=zl("animationstart"),ju=zl("transitionend"),Bu=new Map,Gi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Bu.set(e,t),Kt(t,[e])}for(var ua=0;ua<Gi.length;ua++){var ca=Gi[ua],Rf=ca.toLowerCase(),jf=ca[0].toUpperCase()+ca.slice(1);_t(Rf,"on"+jf)}_t(Iu,"onAnimationEnd");_t(Ou,"onAnimationIteration");_t(Ru,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(ju,"onTransitionEnd");kn("onMouseEnter",["mouseout","mouseover"]);kn("onMouseLeave",["mouseout","mouseover"]);kn("onPointerEnter",["pointerout","pointerover"]);kn("onPointerLeave",["pointerout","pointerover"]);Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bf=new Set("cancel close invalid load scroll toggle".split(" ").concat($n));function Ki(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Od(r,t,void 0,e),e.currentTarget=null}function Du(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==a&&l.isPropagationStopped())break e;Ki(l,s,d),a=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,d=s.currentTarget,s=s.listener,u!==a&&l.isPropagationStopped())break e;Ki(l,s,d),a=u}}}if(il)throw e=Va,il=!1,Va=null,e}function W(e,t){var n=t[Xa];n===void 0&&(n=t[Xa]=new Set);var r=e+"__bubble";n.has(r)||(Hu(t,e,2,!1),n.add(r))}function da(e,t,n){var r=0;t&&(r|=4),Hu(n,e,r,t)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function ir(e){if(!e[Rr]){e[Rr]=!0,Gs.forEach(function(n){n!=="selectionchange"&&(Bf.has(n)||da(n,!1,e),da(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rr]||(t[Rr]=!0,da("selectionchange",!1,t))}}function Hu(e,t,n,r){switch(Cu(t)){case 1:var l=Xd;break;case 4:l=Jd;break;default:l=zo}n=l.bind(null,t,n,e),l=void 0,!Ha||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function fa(e,t,n,r,l){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Bt(s),o===null)return;if(u=o.tag,u===5||u===6){r=a=o;continue e}s=s.parentNode}}r=r.return}cu(function(){var d=a,g=Po(n),h=[];e:{var m=Bu.get(e);if(m!==void 0){var x=Oo,k=e;switch(e){case"keypress":if(Kr(n)===0)break e;case"keydown":case"keyup":x=hf;break;case"focusin":k="focus",x=aa;break;case"focusout":k="blur",x=aa;break;case"beforeblur":case"afterblur":x=aa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ri;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=yf;break;case Iu:case Ou:case Ru:x=af;break;case ju:x=xf;break;case"scroll":x=ef;break;case"wheel":x=Ef;break;case"copy":case"cut":case"paste":x=sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Bi}var E=(t&4)!==0,R=!E&&e==="scroll",f=E?m!==null?m+"Capture":null:m;E=[];for(var c=d,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=tr(c,f),v!=null&&E.push(sr(c,v,p)))),R)break;c=c.return}0<E.length&&(m=new x(m,k,null,n,g),h.push({event:m,listeners:E}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Ba&&(k=n.relatedTarget||n.fromElement)&&(Bt(k)||k[st]))break e;if((x||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=d,k=k?Bt(k):null,k!==null&&(R=qt(k),k!==R||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=d),x!==k)){if(E=Ri,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=Bi,v="onPointerLeave",f="onPointerEnter",c="pointer"),R=x==null?m:sn(x),p=k==null?m:sn(k),m=new E(v,c+"leave",x,n,g),m.target=R,m.relatedTarget=p,v=null,Bt(g)===d&&(E=new E(f,c+"enter",k,n,g),E.target=p,E.relatedTarget=R,v=E),R=v,x&&k)t:{for(E=x,f=k,c=0,p=E;p;p=tn(p))c++;for(p=0,v=f;v;v=tn(v))p++;for(;0<c-p;)E=tn(E),c--;for(;0<p-c;)f=tn(f),p--;for(;c--;){if(E===f||f!==null&&E===f.alternate)break t;E=tn(E),f=tn(f)}E=null}else E=null;x!==null&&qi(h,m,x,E,!1),k!==null&&R!==null&&qi(h,R,k,E,!0)}}e:{if(m=d?sn(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var S=Lf;else if(Vi(m))if(Pu)S=_f;else{S=Ff;var C=Pf}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Af);if(S&&(S=S(e,d))){Lu(h,S,n,g);break e}C&&C(e,m,d),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&za(m,"number",m.value)}switch(C=d?sn(d):window,e){case"focusin":(Vi(C)||C.contentEditable==="true")&&(an=C,Qa=d,Gn=null);break;case"focusout":Gn=Qa=an=null;break;case"mousedown":Ya=!0;break;case"contextmenu":case"mouseup":case"dragend":Ya=!1,Yi(h,n,g);break;case"selectionchange":if(Of)break;case"keydown":case"keyup":Yi(h,n,g)}var M;if(jo)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ln?Tu(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(bu&&n.locale!=="ko"&&(ln||T!=="onCompositionStart"?T==="onCompositionEnd"&&ln&&(M=Nu()):(kt=g,Io="value"in kt?kt.value:kt.textContent,ln=!0)),C=fl(d,T),0<C.length&&(T=new ji(T,e,null,n,g),h.push({event:T,listeners:C}),M?T.data=M:(M=Mu(n),M!==null&&(T.data=M)))),(M=Cf?Nf(e,n):bf(e,n))&&(d=fl(d,"onBeforeInput"),0<d.length&&(g=new ji("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:d}),g.data=M))}Du(h,t)})}function sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=tr(e,n),a!=null&&r.unshift(sr(e,a,l)),a=tr(e,t),a!=null&&r.push(sr(e,a,l))),e=e.return}return r}function tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qi(e,t,n,r,l){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=tr(n,a),u!=null&&o.unshift(sr(n,u,s))):l||(u=tr(n,a),u!=null&&o.push(sr(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Df=/\r\n?/g,Hf=/\u0000|\uFFFD/g;function Zi(e){return(typeof e=="string"?e:""+e).replace(Df,`
`).replace(Hf,"")}function jr(e,t,n){if(t=Zi(t),Zi(e)!==t&&n)throw Error(y(425))}function pl(){}var Ga=null,Ka=null;function qa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Za=typeof setTimeout=="function"?setTimeout:void 0,Vf=typeof clearTimeout=="function"?clearTimeout:void 0,Xi=typeof Promise=="function"?Promise:void 0,$f=typeof queueMicrotask=="function"?queueMicrotask:typeof Xi<"u"?function(e){return Xi.resolve(null).then(e).catch(Uf)}:Za;function Uf(e){setTimeout(function(){throw e})}function pa(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);lr(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ji(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),Ye="__reactFiber$"+Pn,ur="__reactProps$"+Pn,st="__reactContainer$"+Pn,Xa="__reactEvents$"+Pn,Wf="__reactListeners$"+Pn,Qf="__reactHandles$"+Pn;function Bt(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ji(e);e!==null;){if(n=e[Ye])return n;e=Ji(e)}return t}e=n,n=e.parentNode}return null}function wr(e){return e=e[Ye]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function Il(e){return e[ur]||null}var Ja=[],un=-1;function zt(e){return{current:e}}function Q(e){0>un||(e.current=Ja[un],Ja[un]=null,un--)}function $(e,t){un++,Ja[un]=e.current,e.current=t}var At={},fe=zt(At),xe=zt(!1),Ut=At;function En(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ke(e){return e=e.childContextTypes,e!=null}function ml(){Q(xe),Q(fe)}function es(e,t,n){if(fe.current!==At)throw Error(y(168));$(fe,t),$(xe,n)}function Vu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Ld(e)||"Unknown",l));return Z({},n,r)}function hl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,Ut=fe.current,$(fe,e),$(xe,xe.current),!0}function ts(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Vu(e,t,Ut),r.__reactInternalMemoizedMergedChildContext=e,Q(xe),Q(fe),$(fe,e)):Q(xe),$(xe,n)}var rt=null,Ol=!1,ma=!1;function $u(e){rt===null?rt=[e]:rt.push(e)}function Yf(e){Ol=!0,$u(e)}function It(){if(!ma&&rt!==null){ma=!0;var e=0,t=B;try{var n=rt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,Ol=!1}catch(l){throw rt!==null&&(rt=rt.slice(e+1)),mu(Fo,It),l}finally{B=t,ma=!1}}return null}var cn=[],dn=0,gl=null,vl=0,Pe=[],Fe=0,Wt=null,lt=1,at="";function Rt(e,t){cn[dn++]=vl,cn[dn++]=gl,gl=e,vl=t}function Uu(e,t,n){Pe[Fe++]=lt,Pe[Fe++]=at,Pe[Fe++]=Wt,Wt=e;var r=lt;e=at;var l=32-He(r)-1;r&=~(1<<l),n+=1;var a=32-He(t)+l;if(30<a){var o=l-l%5;a=(r&(1<<o)-1).toString(32),r>>=o,l-=o,lt=1<<32-He(t)+l|n<<l|r,at=a+e}else lt=1<<a|n<<l|r,at=e}function Do(e){e.return!==null&&(Rt(e,1),Uu(e,1,0))}function Ho(e){for(;e===gl;)gl=cn[--dn],cn[dn]=null,vl=cn[--dn],cn[dn]=null;for(;e===Wt;)Wt=Pe[--Fe],Pe[Fe]=null,at=Pe[--Fe],Pe[Fe]=null,lt=Pe[--Fe],Pe[Fe]=null}var Ne=null,Ce=null,Y=!1,De=null;function Wu(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ns(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Ce=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wt!==null?{id:lt,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Ce=null,!0):!1;default:return!1}}function eo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function to(e){if(Y){var t=Ce;if(t){var n=t;if(!ns(e,t)){if(eo(e))throw Error(y(418));t=bt(n.nextSibling);var r=Ne;t&&ns(e,t)?Wu(r,n):(e.flags=e.flags&-4097|2,Y=!1,Ne=e)}}else{if(eo(e))throw Error(y(418));e.flags=e.flags&-4097|2,Y=!1,Ne=e}}}function rs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Br(e){if(e!==Ne)return!1;if(!Y)return rs(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qa(e.type,e.memoizedProps)),t&&(t=Ce)){if(eo(e))throw Qu(),Error(y(418));for(;t;)Wu(e,t),t=bt(t.nextSibling)}if(rs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Ne?bt(e.stateNode.nextSibling):null;return!0}function Qu(){for(var e=Ce;e;)e=bt(e.nextSibling)}function Sn(){Ce=Ne=null,Y=!1}function Vo(e){De===null?De=[e]:De.push(e)}var Gf=dt.ReactCurrentBatchConfig;function Rn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=l.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function Dr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ls(e){var t=e._init;return t(e._payload)}function Yu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=Pt(f,c),f.index=0,f.sibling=null,f}function a(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,v){return c===null||c.tag!==6?(c=ka(p,f.mode,v),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,v){var S=p.type;return S===rn?g(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&ls(S)===c.type)?(v=l(c,p.props),v.ref=Rn(f,c,p),v.return=f,v):(v=nl(p.type,p.key,p.props,null,f.mode,v),v.ref=Rn(f,c,p),v.return=f,v)}function d(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Ea(p,f.mode,v),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function g(f,c,p,v,S){return c===null||c.tag!==7?(c=$t(p,f.mode,v,S),c.return=f,c):(c=l(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ka(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Lr:return p=nl(c.type,c.key,c.props,null,f.mode,p),p.ref=Rn(f,null,c),p.return=f,p;case nn:return c=Ea(c,f.mode,p),c.return=f,c;case vt:var v=c._init;return h(f,v(c._payload),p)}if(Hn(c)||An(c))return c=$t(c,f.mode,p,null),c.return=f,c;Dr(f,c)}return null}function m(f,c,p,v){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Lr:return p.key===S?u(f,c,p,v):null;case nn:return p.key===S?d(f,c,p,v):null;case vt:return S=p._init,m(f,c,S(p._payload),v)}if(Hn(p)||An(p))return S!==null?null:g(f,c,p,v,null);Dr(f,p)}return null}function x(f,c,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(c,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Lr:return f=f.get(v.key===null?p:v.key)||null,u(c,f,v,S);case nn:return f=f.get(v.key===null?p:v.key)||null,d(c,f,v,S);case vt:var C=v._init;return x(f,c,p,C(v._payload),S)}if(Hn(v)||An(v))return f=f.get(p)||null,g(c,f,v,S,null);Dr(c,v)}return null}function k(f,c,p,v){for(var S=null,C=null,M=c,T=c=0,D=null;M!==null&&T<p.length;T++){M.index>T?(D=M,M=null):D=M.sibling;var A=m(f,M,p[T],v);if(A===null){M===null&&(M=D);break}e&&M&&A.alternate===null&&t(f,M),c=a(A,c,T),C===null?S=A:C.sibling=A,C=A,M=D}if(T===p.length)return n(f,M),Y&&Rt(f,T),S;if(M===null){for(;T<p.length;T++)M=h(f,p[T],v),M!==null&&(c=a(M,c,T),C===null?S=M:C.sibling=M,C=M);return Y&&Rt(f,T),S}for(M=r(f,M);T<p.length;T++)D=x(M,f,T,p[T],v),D!==null&&(e&&D.alternate!==null&&M.delete(D.key===null?T:D.key),c=a(D,c,T),C===null?S=D:C.sibling=D,C=D);return e&&M.forEach(function(U){return t(f,U)}),Y&&Rt(f,T),S}function E(f,c,p,v){var S=An(p);if(typeof S!="function")throw Error(y(150));if(p=S.call(p),p==null)throw Error(y(151));for(var C=S=null,M=c,T=c=0,D=null,A=p.next();M!==null&&!A.done;T++,A=p.next()){M.index>T?(D=M,M=null):D=M.sibling;var U=m(f,M,A.value,v);if(U===null){M===null&&(M=D);break}e&&M&&U.alternate===null&&t(f,M),c=a(U,c,T),C===null?S=U:C.sibling=U,C=U,M=D}if(A.done)return n(f,M),Y&&Rt(f,T),S;if(M===null){for(;!A.done;T++,A=p.next())A=h(f,A.value,v),A!==null&&(c=a(A,c,T),C===null?S=A:C.sibling=A,C=A);return Y&&Rt(f,T),S}for(M=r(f,M);!A.done;T++,A=p.next())A=x(M,f,T,A.value,v),A!==null&&(e&&A.alternate!==null&&M.delete(A.key===null?T:A.key),c=a(A,c,T),C===null?S=A:C.sibling=A,C=A);return e&&M.forEach(function(qe){return t(f,qe)}),Y&&Rt(f,T),S}function R(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===rn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Lr:e:{for(var S=p.key,C=c;C!==null;){if(C.key===S){if(S=p.type,S===rn){if(C.tag===7){n(f,C.sibling),c=l(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&ls(S)===C.type){n(f,C.sibling),c=l(C,p.props),c.ref=Rn(f,C,p),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===rn?(c=$t(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=nl(p.type,p.key,p.props,null,f.mode,v),v.ref=Rn(f,c,p),v.return=f,f=v)}return o(f);case nn:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Ea(p,f.mode,v),c.return=f,f=c}return o(f);case vt:return C=p._init,R(f,c,C(p._payload),v)}if(Hn(p))return k(f,c,p,v);if(An(p))return E(f,c,p,v);Dr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=ka(p,f.mode,v),c.return=f,f=c),o(f)):n(f,c)}return R}var Cn=Yu(!0),Gu=Yu(!1),yl=zt(null),wl=null,fn=null,$o=null;function Uo(){$o=fn=wl=null}function Wo(e){var t=yl.current;Q(yl),e._currentValue=t}function no(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wn(e,t){wl=e,$o=fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Ie(e){var t=e._currentValue;if($o!==e)if(e={context:e,memoizedValue:t,next:null},fn===null){if(wl===null)throw Error(y(308));fn=e,wl.dependencies={lanes:0,firstContext:e}}else fn=fn.next=e;return t}var Dt=null;function Qo(e){Dt===null?Dt=[e]:Dt.push(e)}function Ku(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Qo(t)):(n.next=l.next,l.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function Yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,ut(e,n)}return l=r.interleaved,l===null?(t.next=t,Qo(r)):(t.next=l.next,l.next=t),r.interleaved=t,ut(e,n)}function qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ao(e,n)}}function as(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xl(e,t,n,r){var l=e.updateQueue;yt=!1;var a=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,o===null?a=d:o.next=d,o=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=u))}if(a!==null){var h=l.baseState;o=0,g=d=u=null,s=a;do{var m=s.lane,x=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,E=s;switch(m=t,x=n,E.tag){case 1:if(k=E.payload,typeof k=="function"){h=k.call(x,h,m);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=E.payload,m=typeof k=="function"?k.call(x,h,m):k,m==null)break e;h=Z({},h,m);break e;case 2:yt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=x,u=h):g=g.next=x,o|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(u=h),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);Yt|=o,e.lanes=o,e.memoizedState=h}}function os(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var xr={},Ke=zt(xr),cr=zt(xr),dr=zt(xr);function Ht(e){if(e===xr)throw Error(y(174));return e}function Go(e,t){switch($(dr,t),$(cr,e),$(Ke,xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oa(t,e)}Q(Ke),$(Ke,t)}function Nn(){Q(Ke),Q(cr),Q(dr)}function Zu(e){Ht(dr.current);var t=Ht(Ke.current),n=Oa(t,e.type);t!==n&&($(cr,e),$(Ke,n))}function Ko(e){cr.current===e&&(Q(Ke),Q(cr))}var K=zt(0);function kl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=[];function qo(){for(var e=0;e<ha.length;e++)ha[e]._workInProgressVersionPrimary=null;ha.length=0}var Zr=dt.ReactCurrentDispatcher,ga=dt.ReactCurrentBatchConfig,Qt=0,q=null,te=null,le=null,El=!1,Kn=!1,fr=0,Kf=0;function ue(){throw Error(y(321))}function Zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$e(e[n],t[n]))return!1;return!0}function Xo(e,t,n,r,l,a){if(Qt=a,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zr.current=e===null||e.memoizedState===null?Jf:ep,e=n(r,l),Kn){a=0;do{if(Kn=!1,fr=0,25<=a)throw Error(y(301));a+=1,le=te=null,t.updateQueue=null,Zr.current=tp,e=n(r,l)}while(Kn)}if(Zr.current=Sl,t=te!==null&&te.next!==null,Qt=0,le=te=q=null,El=!1,t)throw Error(y(300));return e}function Jo(){var e=fr!==0;return fr=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?q.memoizedState=le=e:le=le.next=e,le}function Oe(){if(te===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=le===null?q.memoizedState:le.next;if(t!==null)le=t,te=e;else{if(e===null)throw Error(y(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},le===null?q.memoizedState=le=e:le=le.next=e}return le}function pr(e,t){return typeof t=="function"?t(e):t}function va(e){var t=Oe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=te,l=r.baseQueue,a=n.pending;if(a!==null){if(l!==null){var o=l.next;l.next=a.next,a.next=o}r.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,r=r.baseState;var s=o=null,u=null,d=a;do{var g=d.lane;if((Qt&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,o=r):u=u.next=h,q.lanes|=g,Yt|=g}d=d.next}while(d!==null&&d!==a);u===null?o=r:u.next=s,$e(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do a=l.lane,q.lanes|=a,Yt|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ya(e){var t=Oe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do a=e(a,o.action),o=o.next;while(o!==l);$e(a,t.memoizedState)||(we=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Xu(){}function Ju(e,t){var n=q,r=Oe(),l=t(),a=!$e(r.memoizedState,l);if(a&&(r.memoizedState=l,we=!0),r=r.queue,ei(nc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,mr(9,tc.bind(null,n,r,l,t),void 0,null),ae===null)throw Error(y(349));Qt&30||ec(n,t,l)}return l}function ec(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tc(e,t,n,r){t.value=n,t.getSnapshot=r,rc(t)&&lc(e)}function nc(e,t,n){return n(function(){rc(t)&&lc(e)})}function rc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$e(e,n)}catch{return!0}}function lc(e){var t=ut(e,1);t!==null&&Ve(t,e,1,-1)}function is(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:e},t.queue=e,e=e.dispatch=Xf.bind(null,q,e),[t.memoizedState,e]}function mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ac(){return Oe().memoizedState}function Xr(e,t,n,r){var l=Qe();q.flags|=e,l.memoizedState=mr(1|t,n,void 0,r===void 0?null:r)}function Rl(e,t,n,r){var l=Oe();r=r===void 0?null:r;var a=void 0;if(te!==null){var o=te.memoizedState;if(a=o.destroy,r!==null&&Zo(r,o.deps)){l.memoizedState=mr(t,n,a,r);return}}q.flags|=e,l.memoizedState=mr(1|t,n,a,r)}function ss(e,t){return Xr(8390656,8,e,t)}function ei(e,t){return Rl(2048,8,e,t)}function oc(e,t){return Rl(4,2,e,t)}function ic(e,t){return Rl(4,4,e,t)}function sc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function uc(e,t,n){return n=n!=null?n.concat([e]):null,Rl(4,4,sc.bind(null,t,e),n)}function ti(){}function cc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function dc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fc(e,t,n){return Qt&21?($e(n,t)||(n=vu(),q.lanes|=n,Yt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function qf(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=ga.transition;ga.transition={};try{e(!1),t()}finally{B=n,ga.transition=r}}function pc(){return Oe().memoizedState}function Zf(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mc(e))hc(t,n);else if(n=Ku(e,t,n,r),n!==null){var l=me();Ve(n,e,r,l),gc(n,t,r)}}function Xf(e,t,n){var r=Lt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mc(e))hc(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(l.hasEagerState=!0,l.eagerState=s,$e(s,o)){var u=t.interleaved;u===null?(l.next=l,Qo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Ku(e,t,l,r),n!==null&&(l=me(),Ve(n,e,r,l),gc(n,t,r))}}function mc(e){var t=e.alternate;return e===q||t!==null&&t===q}function hc(e,t){Kn=El=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ao(e,n)}}var Sl={readContext:Ie,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Jf={readContext:Ie,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:ss,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xr(4194308,4,sc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xr(4,2,e,t)},useMemo:function(e,t){var n=Qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zf.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:is,useDebugValue:ti,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=is(!1),t=e[0];return e=qf.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,l=Qe();if(Y){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),ae===null)throw Error(y(349));Qt&30||ec(r,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,ss(nc.bind(null,r,a,e),[e]),r.flags|=2048,mr(9,tc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Qe(),t=ae.identifierPrefix;if(Y){var n=at,r=lt;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ep={readContext:Ie,useCallback:cc,useContext:Ie,useEffect:ei,useImperativeHandle:uc,useInsertionEffect:oc,useLayoutEffect:ic,useMemo:dc,useReducer:va,useRef:ac,useState:function(){return va(pr)},useDebugValue:ti,useDeferredValue:function(e){var t=Oe();return fc(t,te.memoizedState,e)},useTransition:function(){var e=va(pr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Xu,useSyncExternalStore:Ju,useId:pc,unstable_isNewReconciler:!1},tp={readContext:Ie,useCallback:cc,useContext:Ie,useEffect:ei,useImperativeHandle:uc,useInsertionEffect:oc,useLayoutEffect:ic,useMemo:dc,useReducer:ya,useRef:ac,useState:function(){return ya(pr)},useDebugValue:ti,useDeferredValue:function(e){var t=Oe();return te===null?t.memoizedState=e:fc(t,te.memoizedState,e)},useTransition:function(){var e=ya(pr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Xu,useSyncExternalStore:Ju,useId:pc,unstable_isNewReconciler:!1};function je(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ro(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jl={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),l=Lt(e),a=ot(r,l);a.payload=t,n!=null&&(a.callback=n),t=Tt(e,a,l),t!==null&&(Ve(t,e,l,r),qr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),l=Lt(e),a=ot(r,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Tt(e,a,l),t!==null&&(Ve(t,e,l,r),qr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=Lt(e),l=ot(n,r);l.tag=2,t!=null&&(l.callback=t),t=Tt(e,l,r),t!==null&&(Ve(t,e,r,n),qr(t,e,r))}};function us(e,t,n,r,l,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!or(n,r)||!or(l,a):!0}function vc(e,t,n){var r=!1,l=At,a=t.contextType;return typeof a=="object"&&a!==null?a=Ie(a):(l=ke(t)?Ut:fe.current,r=t.contextTypes,a=(r=r!=null)?En(e,l):At),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function cs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jl.enqueueReplaceState(t,t.state,null)}function lo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Yo(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=Ie(a):(a=ke(t)?Ut:fe.current,l.context=En(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ro(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&jl.enqueueReplaceState(l,l.state,null),xl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function bn(e,t){try{var n="",r=t;do n+=Md(r),r=r.return;while(r);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function wa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ao(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var np=typeof WeakMap=="function"?WeakMap:Map;function yc(e,t,n){n=ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Nl||(Nl=!0,go=r),ao(e,t)},n}function wc(e,t,n){n=ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ao(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ao(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ds(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new np;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=gp.bind(null,e,t,n),t.then(e,e))}function fs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ps(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ot(-1,1),t.tag=2,Tt(n,t,1))),n.lanes|=1),e)}var rp=dt.ReactCurrentOwner,we=!1;function pe(e,t,n,r){t.child=e===null?Gu(t,null,n,r):Cn(t,e.child,n,r)}function ms(e,t,n,r,l){n=n.render;var a=t.ref;return wn(t,l),r=Xo(e,t,n,r,a,l),n=Jo(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ct(e,t,l)):(Y&&n&&Do(t),t.flags|=1,pe(e,t,r,l),t.child)}function hs(e,t,n,r,l){if(e===null){var a=n.type;return typeof a=="function"&&!ui(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,xc(e,t,a,r,l)):(e=nl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&l)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:or,n(o,r)&&e.ref===t.ref)return ct(e,t,l)}return t.flags|=1,e=Pt(a,r),e.ref=t.ref,e.return=t,t.child=e}function xc(e,t,n,r,l){if(e!==null){var a=e.memoizedProps;if(or(a,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=a,(e.lanes&l)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,ct(e,t,l)}return oo(e,t,n,r,l)}function kc(e,t,n){var r=t.pendingProps,l=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(mn,Se),Se|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(mn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,$(mn,Se),Se|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,$(mn,Se),Se|=r;return pe(e,t,l,n),t.child}function Ec(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function oo(e,t,n,r,l){var a=ke(n)?Ut:fe.current;return a=En(t,a),wn(t,l),n=Xo(e,t,n,r,a,l),r=Jo(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ct(e,t,l)):(Y&&r&&Do(t),t.flags|=1,pe(e,t,n,l),t.child)}function gs(e,t,n,r,l){if(ke(n)){var a=!0;hl(t)}else a=!1;if(wn(t,l),t.stateNode===null)Jr(e,t),vc(t,n,r),lo(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ie(d):(d=ke(n)?Ut:fe.current,d=En(t,d));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==d)&&cs(t,o,r,d),yt=!1;var m=t.memoizedState;o.state=m,xl(t,r,o,l),u=t.memoizedState,s!==r||m!==u||xe.current||yt?(typeof g=="function"&&(ro(t,n,g,r),u=t.memoizedState),(s=yt||us(t,n,s,r,m,u,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,qu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:je(t.type,s),o.props=d,h=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ie(u):(u=ke(n)?Ut:fe.current,u=En(t,u));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||m!==u)&&cs(t,o,r,u),yt=!1,m=t.memoizedState,o.state=m,xl(t,r,o,l);var k=t.memoizedState;s!==h||m!==k||xe.current||yt?(typeof x=="function"&&(ro(t,n,x,r),k=t.memoizedState),(d=yt||us(t,n,d,r,m,k,u)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return io(e,t,n,r,a,l)}function io(e,t,n,r,l,a){Ec(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&ts(t,n,!1),ct(e,t,a);r=t.stateNode,rp.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Cn(t,e.child,null,a),t.child=Cn(t,null,s,a)):pe(e,t,s,a),t.memoizedState=r.state,l&&ts(t,n,!0),t.child}function Sc(e){var t=e.stateNode;t.pendingContext?es(e,t.pendingContext,t.pendingContext!==t.context):t.context&&es(e,t.context,!1),Go(e,t.containerInfo)}function vs(e,t,n,r,l){return Sn(),Vo(l),t.flags|=256,pe(e,t,n,r),t.child}var so={dehydrated:null,treeContext:null,retryLane:0};function uo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cc(e,t,n){var r=t.pendingProps,l=K.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),$(K,l&1),e===null)return to(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Hl(o,r,0,null),e=$t(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=uo(n),t.memoizedState=so,e):ni(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return lp(e,t,o,r,s,l,n);if(a){a=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Pt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?a=Pt(s,a):(a=$t(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?uo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=so,r}return a=e.child,e=a.sibling,r=Pt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ni(e,t){return t=Hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hr(e,t,n,r){return r!==null&&Vo(r),Cn(t,e.child,null,n),e=ni(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lp(e,t,n,r,l,a,o){if(n)return t.flags&256?(t.flags&=-257,r=wa(Error(y(422))),Hr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,l=t.mode,r=Hl({mode:"visible",children:r.children},l,0,null),a=$t(a,l,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Cn(t,e.child,null,o),t.child.memoizedState=uo(o),t.memoizedState=so,a);if(!(t.mode&1))return Hr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(y(419)),r=wa(a,r,void 0),Hr(e,t,o,r)}if(s=(o&e.childLanes)!==0,we||s){if(r=ae,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,ut(e,l),Ve(r,e,l,-1))}return si(),r=wa(Error(y(421))),Hr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=vp.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,Ce=bt(l.nextSibling),Ne=t,Y=!0,De=null,e!==null&&(Pe[Fe++]=lt,Pe[Fe++]=at,Pe[Fe++]=Wt,lt=e.id,at=e.overflow,Wt=t),t=ni(t,r.children),t.flags|=4096,t)}function ys(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),no(e.return,t,n)}function xa(e,t,n,r,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=l)}function Nc(e,t,n){var r=t.pendingProps,l=r.revealOrder,a=r.tail;if(pe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ys(e,n,t);else if(e.tag===19)ys(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(K,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&kl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),xa(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&kl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}xa(t,!0,n,null,a);break;case"together":xa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=Pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ap(e,t,n){switch(t.tag){case 3:Sc(t),Sn();break;case 5:Zu(t);break;case 1:ke(t.type)&&hl(t);break;case 4:Go(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;$(yl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Cc(e,t,n):($(K,K.current&1),e=ct(e,t,n),e!==null?e.sibling:null);$(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Nc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,kc(e,t,n)}return ct(e,t,n)}var bc,co,Tc,Mc;bc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};co=function(){};Tc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ht(Ke.current);var a=null;switch(n){case"input":l=Aa(e,l),r=Aa(e,r),a=[];break;case"select":l=Z({},l,{value:void 0}),r=Z({},r,{value:void 0}),a=[];break;case"textarea":l=Ia(e,l),r=Ia(e,r),a=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pl)}Ra(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Jn.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Jn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&W("scroll",e),a||s===u||(a=[])):(a=a||[]).push(d,u))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Mc=function(e,t,n,r){n!==r&&(t.flags|=4)};function jn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function op(e,t,n){var r=t.pendingProps;switch(Ho(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ke(t.type)&&ml(),ce(t),null;case 3:return r=t.stateNode,Nn(),Q(xe),Q(fe),qo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(wo(De),De=null))),co(e,t),ce(t),null;case 5:Ko(t);var l=Ht(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)Tc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ce(t),null}if(e=Ht(Ke.current),Br(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ye]=t,r[ur]=a,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(l=0;l<$n.length;l++)W($n[l],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Ti(r,a),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},W("invalid",r);break;case"textarea":Li(r,a),W("invalid",r)}Ra(n,a),l=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&jr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&jr(r.textContent,s,e),l=["children",""+s]):Jn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":Pr(r),Mi(r,a,!0);break;case"textarea":Pr(r),Pi(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=pl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ye]=t,e[ur]=r,bc(e,t,!1,!1),t.stateNode=e;e:{switch(o=ja(n,r),n){case"dialog":W("cancel",e),W("close",e),l=r;break;case"iframe":case"object":case"embed":W("load",e),l=r;break;case"video":case"audio":for(l=0;l<$n.length;l++)W($n[l],e);l=r;break;case"source":W("error",e),l=r;break;case"img":case"image":case"link":W("error",e),W("load",e),l=r;break;case"details":W("toggle",e),l=r;break;case"input":Ti(e,r),l=Aa(e,r),W("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Z({},r,{value:void 0}),W("invalid",e);break;case"textarea":Li(e,r),l=Ia(e,r),W("invalid",e);break;default:l=r}Ra(n,l),s=l;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?au(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ru(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&er(e,u):typeof u=="number"&&er(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Jn.hasOwnProperty(a)?u!=null&&a==="onScroll"&&W("scroll",e):u!=null&&bo(e,a,u,o))}switch(n){case"input":Pr(e),Mi(e,r,!1);break;case"textarea":Pr(e),Pi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?hn(e,!!r.multiple,a,!1):r.defaultValue!=null&&hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Mc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Ht(dr.current),Ht(Ke.current),Br(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(a=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return ce(t),null;case 13:if(Q(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ce!==null&&t.mode&1&&!(t.flags&128))Qu(),Sn(),t.flags|=98560,a=!1;else if(a=Br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(y(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(y(317));a[Ye]=t}else Sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),a=!1}else De!==null&&(wo(De),De=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ne===0&&(ne=3):si())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return Nn(),co(e,t),e===null&&ir(t.stateNode.containerInfo),ce(t),null;case 10:return Wo(t.type._context),ce(t),null;case 17:return ke(t.type)&&ml(),ce(t),null;case 19:if(Q(K),a=t.memoizedState,a===null)return ce(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)jn(a,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=kl(e),o!==null){for(t.flags|=128,jn(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(K,K.current&1|2),t.child}e=e.sibling}a.tail!==null&&J()>Tn&&(t.flags|=128,r=!0,jn(a,!1),t.lanes=4194304)}else{if(!r)if(e=kl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Y)return ce(t),null}else 2*J()-a.renderingStartTime>Tn&&n!==1073741824&&(t.flags|=128,r=!0,jn(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=J(),t.sibling=null,n=K.current,$(K,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return ii(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function ip(e,t){switch(Ho(t),t.tag){case 1:return ke(t.type)&&ml(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nn(),Q(xe),Q(fe),qo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ko(t),null;case 13:if(Q(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(K),null;case 4:return Nn(),null;case 10:return Wo(t.type._context),null;case 22:case 23:return ii(),null;case 24:return null;default:return null}}var Vr=!1,de=!1,sp=typeof WeakSet=="function"?WeakSet:Set,b=null;function pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function fo(e,t,n){try{n()}catch(r){X(e,t,r)}}var ws=!1;function up(e,t){if(Ga=cl,e=_u(),Bo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,d=0,g=0,h=e,m=null;t:for(;;){for(var x;h!==n||l!==0&&h.nodeType!==3||(s=o+l),h!==a||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++d===l&&(s=o),m===a&&++g===r&&(u=o),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ka={focusedElem:e,selectionRange:n},cl=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var E=k.memoizedProps,R=k.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?E:je(t.type,E),R);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){X(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return k=ws,ws=!1,k}function qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&fo(t,n,a)}l=l.next}while(l!==r)}}function Bl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function po(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lc(e){var t=e.alternate;t!==null&&(e.alternate=null,Lc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[ur],delete t[Xa],delete t[Wf],delete t[Qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pc(e){return e.tag===5||e.tag===3||e.tag===4}function xs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pl));else if(r!==4&&(e=e.child,e!==null))for(mo(e,t,n),e=e.sibling;e!==null;)mo(e,t,n),e=e.sibling}function ho(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ho(e,t,n),e=e.sibling;e!==null;)ho(e,t,n),e=e.sibling}var oe=null,Be=!1;function gt(e,t,n){for(n=n.child;n!==null;)Fc(e,t,n),n=n.sibling}function Fc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:de||pn(n,t);case 6:var r=oe,l=Be;oe=null,gt(e,t,n),oe=r,Be=l,oe!==null&&(Be?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Be?(e=oe,n=n.stateNode,e.nodeType===8?pa(e.parentNode,n):e.nodeType===1&&pa(e,n),lr(e)):pa(oe,n.stateNode));break;case 4:r=oe,l=Be,oe=n.stateNode.containerInfo,Be=!0,gt(e,t,n),oe=r,Be=l;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var a=l,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&fo(n,t,o),l=l.next}while(l!==r)}gt(e,t,n);break;case 1:if(!de&&(pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,gt(e,t,n),de=r):gt(e,t,n);break;default:gt(e,t,n)}}function ks(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sp),t.forEach(function(r){var l=yp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,Be=!1;break e;case 3:oe=s.stateNode.containerInfo,Be=!0;break e;case 4:oe=s.stateNode.containerInfo,Be=!0;break e}s=s.return}if(oe===null)throw Error(y(160));Fc(a,o,l),oe=null,Be=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){X(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ac(t,e),t=t.sibling}function Ac(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),We(e),r&4){try{qn(3,e,e.return),Bl(3,e)}catch(E){X(e,e.return,E)}try{qn(5,e,e.return)}catch(E){X(e,e.return,E)}}break;case 1:Re(t,e),We(e),r&512&&n!==null&&pn(n,n.return);break;case 5:if(Re(t,e),We(e),r&512&&n!==null&&pn(n,n.return),e.flags&32){var l=e.stateNode;try{er(l,"")}catch(E){X(e,e.return,E)}}if(r&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&eu(l,a),ja(s,o);var d=ja(s,a);for(o=0;o<u.length;o+=2){var g=u[o],h=u[o+1];g==="style"?au(l,h):g==="dangerouslySetInnerHTML"?ru(l,h):g==="children"?er(l,h):bo(l,g,h,d)}switch(s){case"input":_a(l,a);break;case"textarea":tu(l,a);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?hn(l,!!a.multiple,x,!1):m!==!!a.multiple&&(a.defaultValue!=null?hn(l,!!a.multiple,a.defaultValue,!0):hn(l,!!a.multiple,a.multiple?[]:"",!1))}l[ur]=a}catch(E){X(e,e.return,E)}}break;case 6:if(Re(t,e),We(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(E){X(e,e.return,E)}}break;case 3:if(Re(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lr(t.containerInfo)}catch(E){X(e,e.return,E)}break;case 4:Re(t,e),We(e);break;case 13:Re(t,e),We(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(ai=J())),r&4&&ks(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(de=(d=de)||g,Re(t,e),de=d):Re(t,e),We(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(b=e,g=e.child;g!==null;){for(h=b=g;b!==null;){switch(m=b,x=m.child,m.tag){case 0:case 11:case 14:case 15:qn(4,m,m.return);break;case 1:pn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(E){X(r,n,E)}}break;case 5:pn(m,m.return);break;case 22:if(m.memoizedState!==null){Ss(h);continue}}x!==null?(x.return=m,b=x):Ss(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,d?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=lu("display",o))}catch(E){X(e,e.return,E)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(E){X(e,e.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Re(t,e),We(e),r&4&&ks(e);break;case 21:break;default:Re(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pc(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(er(l,""),r.flags&=-33);var a=xs(e);ho(e,a,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=xs(e);mo(e,s,o);break;default:throw Error(y(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cp(e,t,n){b=e,_c(e)}function _c(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var l=b,a=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Vr;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||de;s=Vr;var d=de;if(Vr=o,(de=u)&&!d)for(b=l;b!==null;)o=b,u=o.child,o.tag===22&&o.memoizedState!==null?Cs(l):u!==null?(u.return=o,b=u):Cs(l);for(;a!==null;)b=a,_c(a),a=a.sibling;b=l,Vr=s,de=d}Es(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,b=a):Es(e)}}function Es(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Bl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:je(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&os(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}os(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&lr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}de||t.flags&512&&po(t)}catch(m){X(t,t.return,m)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Ss(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function Cs(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bl(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){X(t,l,u)}}var a=t.return;try{po(t)}catch(u){X(t,a,u)}break;case 5:var o=t.return;try{po(t)}catch(u){X(t,o,u)}}}catch(u){X(t,t.return,u)}if(t===e){b=null;break}var s=t.sibling;if(s!==null){s.return=t.return,b=s;break}b=t.return}}var dp=Math.ceil,Cl=dt.ReactCurrentDispatcher,ri=dt.ReactCurrentOwner,ze=dt.ReactCurrentBatchConfig,I=0,ae=null,ee=null,ie=0,Se=0,mn=zt(0),ne=0,hr=null,Yt=0,Dl=0,li=0,Zn=null,ye=null,ai=0,Tn=1/0,nt=null,Nl=!1,go=null,Mt=null,$r=!1,Et=null,bl=0,Xn=0,vo=null,el=-1,tl=0;function me(){return I&6?J():el!==-1?el:el=J()}function Lt(e){return e.mode&1?I&2&&ie!==0?ie&-ie:Gf.transition!==null?(tl===0&&(tl=vu()),tl):(e=B,e!==0||(e=window.event,e=e===void 0?16:Cu(e.type)),e):1}function Ve(e,t,n,r){if(50<Xn)throw Xn=0,vo=null,Error(y(185));vr(e,n,r),(!(I&2)||e!==ae)&&(e===ae&&(!(I&2)&&(Dl|=n),ne===4&&xt(e,ie)),Ee(e,r),n===1&&I===0&&!(t.mode&1)&&(Tn=J()+500,Ol&&It()))}function Ee(e,t){var n=e.callbackNode;Yd(e,t);var r=ul(e,e===ae?ie:0);if(r===0)n!==null&&_i(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_i(n),t===1)e.tag===0?Yf(Ns.bind(null,e)):$u(Ns.bind(null,e)),$f(function(){!(I&6)&&It()}),n=null;else{switch(yu(r)){case 1:n=Fo;break;case 4:n=hu;break;case 16:n=sl;break;case 536870912:n=gu;break;default:n=sl}n=Hc(n,zc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zc(e,t){if(el=-1,tl=0,I&6)throw Error(y(327));var n=e.callbackNode;if(xn()&&e.callbackNode!==n)return null;var r=ul(e,e===ae?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Tl(e,r);else{t=r;var l=I;I|=2;var a=Oc();(ae!==e||ie!==t)&&(nt=null,Tn=J()+500,Vt(e,t));do try{mp();break}catch(s){Ic(e,s)}while(!0);Uo(),Cl.current=a,I=l,ee!==null?t=0:(ae=null,ie=0,t=ne)}if(t!==0){if(t===2&&(l=$a(e),l!==0&&(r=l,t=yo(e,l))),t===1)throw n=hr,Vt(e,0),xt(e,r),Ee(e,J()),n;if(t===6)xt(e,r);else{if(l=e.current.alternate,!(r&30)&&!fp(l)&&(t=Tl(e,r),t===2&&(a=$a(e),a!==0&&(r=a,t=yo(e,a))),t===1))throw n=hr,Vt(e,0),xt(e,r),Ee(e,J()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:jt(e,ye,nt);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=ai+500-J(),10<t)){if(ul(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Za(jt.bind(null,e,ye,nt),t);break}jt(e,ye,nt);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-He(r);a=1<<o,o=t[o],o>l&&(l=o),r&=~a}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dp(r/1960))-r,10<r){e.timeoutHandle=Za(jt.bind(null,e,ye,nt),r);break}jt(e,ye,nt);break;case 5:jt(e,ye,nt);break;default:throw Error(y(329))}}}return Ee(e,J()),e.callbackNode===n?zc.bind(null,e):null}function yo(e,t){var n=Zn;return e.current.memoizedState.isDehydrated&&(Vt(e,t).flags|=256),e=Tl(e,t),e!==2&&(t=ye,ye=n,t!==null&&wo(t)),e}function wo(e){ye===null?ye=e:ye.push.apply(ye,e)}function fp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],a=l.getSnapshot;l=l.value;try{if(!$e(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~li,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function Ns(e){if(I&6)throw Error(y(327));xn();var t=ul(e,0);if(!(t&1))return Ee(e,J()),null;var n=Tl(e,t);if(e.tag!==0&&n===2){var r=$a(e);r!==0&&(t=r,n=yo(e,r))}if(n===1)throw n=hr,Vt(e,0),xt(e,t),Ee(e,J()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,ye,nt),Ee(e,J()),null}function oi(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Tn=J()+500,Ol&&It())}}function Gt(e){Et!==null&&Et.tag===0&&!(I&6)&&xn();var t=I;I|=1;var n=ze.transition,r=B;try{if(ze.transition=null,B=1,e)return e()}finally{B=r,ze.transition=n,I=t,!(I&6)&&It()}}function ii(){Se=mn.current,Q(mn)}function Vt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vf(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Ho(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:Nn(),Q(xe),Q(fe),qo();break;case 5:Ko(r);break;case 4:Nn();break;case 13:Q(K);break;case 19:Q(K);break;case 10:Wo(r.type._context);break;case 22:case 23:ii()}n=n.return}if(ae=e,ee=e=Pt(e.current,null),ie=Se=t,ne=0,hr=null,li=Dl=Yt=0,ye=Zn=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=l,r.next=o}n.pending=r}Dt=null}return e}function Ic(e,t){do{var n=ee;try{if(Uo(),Zr.current=Sl,El){for(var r=q.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}El=!1}if(Qt=0,le=te=q=null,Kn=!1,fr=0,ri.current=null,n===null||n.return===null){ne=1,hr=t,ee=null;break}e:{var a=e,o=n.return,s=n,u=t;if(t=ie,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=fs(o);if(x!==null){x.flags&=-257,ps(x,o,s,a,t),x.mode&1&&ds(a,d,t),t=x,u=d;var k=t.updateQueue;if(k===null){var E=new Set;E.add(u),t.updateQueue=E}else k.add(u);break e}else{if(!(t&1)){ds(a,d,t),si();break e}u=Error(y(426))}}else if(Y&&s.mode&1){var R=fs(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),ps(R,o,s,a,t),Vo(bn(u,s));break e}}a=u=bn(u,s),ne!==4&&(ne=2),Zn===null?Zn=[a]:Zn.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=yc(a,u,t);as(a,f);break e;case 1:s=u;var c=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Mt===null||!Mt.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var v=wc(a,s,t);as(a,v);break e}}a=a.return}while(a!==null)}jc(n)}catch(S){t=S,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function Oc(){var e=Cl.current;return Cl.current=Sl,e===null?Sl:e}function si(){(ne===0||ne===3||ne===2)&&(ne=4),ae===null||!(Yt&268435455)&&!(Dl&268435455)||xt(ae,ie)}function Tl(e,t){var n=I;I|=2;var r=Oc();(ae!==e||ie!==t)&&(nt=null,Vt(e,t));do try{pp();break}catch(l){Ic(e,l)}while(!0);if(Uo(),I=n,Cl.current=r,ee!==null)throw Error(y(261));return ae=null,ie=0,ne}function pp(){for(;ee!==null;)Rc(ee)}function mp(){for(;ee!==null&&!jd();)Rc(ee)}function Rc(e){var t=Dc(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?jc(e):ee=t,ri.current=null}function jc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ip(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=op(n,t,Se),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function jt(e,t,n){var r=B,l=ze.transition;try{ze.transition=null,B=1,hp(e,t,n,r)}finally{ze.transition=l,B=r}return null}function hp(e,t,n,r){do xn();while(Et!==null);if(I&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Gd(e,a),e===ae&&(ee=ae=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$r||($r=!0,Hc(sl,function(){return xn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=ze.transition,ze.transition=null;var o=B;B=1;var s=I;I|=4,ri.current=null,up(e,n),Ac(n,e),If(Ka),cl=!!Ga,Ka=Ga=null,e.current=n,cp(n),Bd(),I=s,B=o,ze.transition=a}else e.current=n;if($r&&($r=!1,Et=e,bl=l),a=e.pendingLanes,a===0&&(Mt=null),Vd(n.stateNode),Ee(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Nl)throw Nl=!1,e=go,go=null,e;return bl&1&&e.tag!==0&&xn(),a=e.pendingLanes,a&1?e===vo?Xn++:(Xn=0,vo=e):Xn=0,It(),null}function xn(){if(Et!==null){var e=yu(bl),t=ze.transition,n=B;try{if(ze.transition=null,B=16>e?16:e,Et===null)var r=!1;else{if(e=Et,Et=null,bl=0,I&6)throw Error(y(331));var l=I;for(I|=4,b=e.current;b!==null;){var a=b,o=a.child;if(b.flags&16){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(b=d;b!==null;){var g=b;switch(g.tag){case 0:case 11:case 15:qn(8,g,a)}var h=g.child;if(h!==null)h.return=g,b=h;else for(;b!==null;){g=b;var m=g.sibling,x=g.return;if(Lc(g),g===d){b=null;break}if(m!==null){m.return=x,b=m;break}b=x}}}var k=a.alternate;if(k!==null){var E=k.child;if(E!==null){k.child=null;do{var R=E.sibling;E.sibling=null,E=R}while(E!==null)}}b=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,b=o;else e:for(;b!==null;){if(a=b,a.flags&2048)switch(a.tag){case 0:case 11:case 15:qn(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,b=f;break e}b=a.return}}var c=e.current;for(b=c;b!==null;){o=b;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,b=p;else e:for(o=c;b!==null;){if(s=b,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Bl(9,s)}}catch(S){X(s,s.return,S)}if(s===o){b=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,b=v;break e}b=s.return}}if(I=l,It(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Fl,e)}catch{}r=!0}return r}finally{B=n,ze.transition=t}}return!1}function bs(e,t,n){t=bn(n,t),t=yc(e,t,1),e=Tt(e,t,1),t=me(),e!==null&&(vr(e,1,t),Ee(e,t))}function X(e,t,n){if(e.tag===3)bs(e,e,n);else for(;t!==null;){if(t.tag===3){bs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=bn(n,e),e=wc(t,e,1),t=Tt(t,e,1),e=me(),t!==null&&(vr(t,1,e),Ee(t,e));break}}t=t.return}}function gp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ie&n)===n&&(ne===4||ne===3&&(ie&130023424)===ie&&500>J()-ai?Vt(e,0):li|=n),Ee(e,t)}function Bc(e,t){t===0&&(e.mode&1?(t=_r,_r<<=1,!(_r&130023424)&&(_r=4194304)):t=1);var n=me();e=ut(e,t),e!==null&&(vr(e,t,n),Ee(e,n))}function vp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bc(e,n)}function yp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Bc(e,n)}var Dc;Dc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,ap(e,t,n);we=!!(e.flags&131072)}else we=!1,Y&&t.flags&1048576&&Uu(t,vl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Jr(e,t),e=t.pendingProps;var l=En(t,fe.current);wn(t,n),l=Xo(null,t,r,e,l,n);var a=Jo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(a=!0,hl(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Yo(t),l.updater=jl,t.stateNode=l,l._reactInternals=t,lo(t,r,e,n),t=io(null,t,r,!0,a,n)):(t.tag=0,Y&&a&&Do(t),pe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Jr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=xp(r),e=je(r,e),l){case 0:t=oo(null,t,r,e,n);break e;case 1:t=gs(null,t,r,e,n);break e;case 11:t=ms(null,t,r,e,n);break e;case 14:t=hs(null,t,r,je(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),oo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),gs(e,t,r,l,n);case 3:e:{if(Sc(t),e===null)throw Error(y(387));r=t.pendingProps,a=t.memoizedState,l=a.element,qu(e,t),xl(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=bn(Error(y(423)),t),t=vs(e,t,r,n,l);break e}else if(r!==l){l=bn(Error(y(424)),t),t=vs(e,t,r,n,l);break e}else for(Ce=bt(t.stateNode.containerInfo.firstChild),Ne=t,Y=!0,De=null,n=Gu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===l){t=ct(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return Zu(t),e===null&&to(t),r=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,o=l.children,qa(r,l)?o=null:a!==null&&qa(r,a)&&(t.flags|=32),Ec(e,t),pe(e,t,o,n),t.child;case 6:return e===null&&to(t),null;case 13:return Cc(e,t,n);case 4:return Go(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),ms(e,t,r,l,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,a=t.memoizedProps,o=l.value,$(yl,r._currentValue),r._currentValue=o,a!==null)if($e(a.value,o)){if(a.children===l.children&&!xe.current){t=ct(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=ot(-1,n&-n),u.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),no(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(y(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),no(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}pe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,wn(t,n),l=Ie(l),r=r(l),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,l=je(r,t.pendingProps),l=je(r.type,l),hs(e,t,r,l,n);case 15:return xc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),Jr(e,t),t.tag=1,ke(r)?(e=!0,hl(t)):e=!1,wn(t,n),vc(t,r,l),lo(t,r,l,n),io(null,t,r,!0,e,n);case 19:return Nc(e,t,n);case 22:return kc(e,t,n)}throw Error(y(156,t.tag))};function Hc(e,t){return mu(e,t)}function wp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new wp(e,t,n,r)}function ui(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xp(e){if(typeof e=="function")return ui(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mo)return 11;if(e===Lo)return 14}return 2}function Pt(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function nl(e,t,n,r,l,a){var o=2;if(r=e,typeof e=="function")ui(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case rn:return $t(n.children,l,a,t);case To:o=8,l|=8;break;case Ma:return e=_e(12,n,t,l|2),e.elementType=Ma,e.lanes=a,e;case La:return e=_e(13,n,t,l),e.elementType=La,e.lanes=a,e;case Pa:return e=_e(19,n,t,l),e.elementType=Pa,e.lanes=a,e;case Zs:return Hl(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ks:o=10;break e;case qs:o=9;break e;case Mo:o=11;break e;case Lo:o=14;break e;case vt:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=_e(o,n,t,l),t.elementType=e,t.type=r,t.lanes=a,t}function $t(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function Hl(e,t,n,r){return e=_e(22,e,r,t),e.elementType=Zs,e.lanes=n,e.stateNode={isHidden:!1},e}function ka(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function Ea(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=na(0),this.expirationTimes=na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ci(e,t,n,r,l,a,o,s,u){return e=new kp(e,t,n,s,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=_e(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yo(a),e}function Ep(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vc(e){if(!e)return At;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(ke(n))return Vu(e,n,t)}return t}function $c(e,t,n,r,l,a,o,s,u){return e=ci(n,r,!0,e,l,a,o,s,u),e.context=Vc(null),n=e.current,r=me(),l=Lt(n),a=ot(r,l),a.callback=t??null,Tt(n,a,l),e.current.lanes=l,vr(e,l,r),Ee(e,r),e}function Vl(e,t,n,r){var l=t.current,a=me(),o=Lt(l);return n=Vc(n),t.context===null?t.context=n:t.pendingContext=n,t=ot(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tt(l,t,o),e!==null&&(Ve(e,l,o,a),qr(e,l,o)),o}function Ml(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ts(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function di(e,t){Ts(e,t),(e=e.alternate)&&Ts(e,t)}function Sp(){return null}var Uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function fi(e){this._internalRoot=e}$l.prototype.render=fi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));Vl(e,t,null,null)};$l.prototype.unmount=fi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gt(function(){Vl(null,e,null,null)}),t[st]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var t=ku();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&Su(e)}};function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ms(){}function Cp(e,t,n,r,l){if(l){if(typeof r=="function"){var a=r;r=function(){var d=Ml(o);a.call(d)}}var o=$c(t,r,e,0,null,!1,!1,"",Ms);return e._reactRootContainer=o,e[st]=o.current,ir(e.nodeType===8?e.parentNode:e),Gt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=Ml(u);s.call(d)}}var u=ci(e,0,!1,null,null,!1,!1,"",Ms);return e._reactRootContainer=u,e[st]=u.current,ir(e.nodeType===8?e.parentNode:e),Gt(function(){Vl(t,u,n,r)}),u}function Wl(e,t,n,r,l){var a=n._reactRootContainer;if(a){var o=a;if(typeof l=="function"){var s=l;l=function(){var u=Ml(o);s.call(u)}}Vl(t,o,e,l)}else o=Cp(n,t,e,l,r);return Ml(o)}wu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vn(t.pendingLanes);n!==0&&(Ao(t,n|1),Ee(t,J()),!(I&6)&&(Tn=J()+500,It()))}break;case 13:Gt(function(){var r=ut(e,1);if(r!==null){var l=me();Ve(r,e,1,l)}}),di(e,1)}};_o=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=me();Ve(t,e,134217728,n)}di(e,134217728)}};xu=function(e){if(e.tag===13){var t=Lt(e),n=ut(e,t);if(n!==null){var r=me();Ve(n,e,t,r)}di(e,t)}};ku=function(){return B};Eu=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Da=function(e,t,n){switch(t){case"input":if(_a(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Il(r);if(!l)throw Error(y(90));Js(r),_a(r,l)}}}break;case"textarea":tu(e,n);break;case"select":t=n.value,t!=null&&hn(e,!!n.multiple,t,!1)}};su=oi;uu=Gt;var Np={usingClientEntryPoint:!1,Events:[wr,sn,Il,ou,iu,oi]},Bn={findFiberByHostInstance:Bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bp={bundleType:Bn.bundleType,version:Bn.version,rendererPackageName:Bn.rendererPackageName,rendererConfig:Bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fu(e),e===null?null:e.stateNode},findFiberByHostInstance:Bn.findFiberByHostInstance||Sp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ur=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ur.isDisabled&&Ur.supportsFiber)try{Fl=Ur.inject(bp),Ge=Ur}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Np;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pi(t))throw Error(y(200));return Ep(e,t,null,n)};Te.createRoot=function(e,t){if(!pi(e))throw Error(y(299));var n=!1,r="",l=Uc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ci(e,1,!1,null,null,n,!1,r,l),e[st]=t.current,ir(e.nodeType===8?e.parentNode:e),new fi(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=fu(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Gt(e)};Te.hydrate=function(e,t,n){if(!Ul(t))throw Error(y(200));return Wl(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!pi(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,a="",o=Uc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=$c(t,null,e,1,n??null,l,!1,a,o),e[st]=t.current,ir(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new $l(t)};Te.render=function(e,t,n){if(!Ul(t))throw Error(y(200));return Wl(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Ul(e))throw Error(y(40));return e._reactRootContainer?(Gt(function(){Wl(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};Te.unstable_batchedUpdates=oi;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ul(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Wl(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function Wc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wc)}catch(e){console.error(e)}}Wc(),Ws.exports=Te;var Tp=Ws.exports,Qc,Ls=Tp;Qc=Ls.createRoot,Ls.hydrateRoot;const Mp="modulepreload",Lp=function(e){return"/"+e},Ps={},Pp=function(t,n,r){let l=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),s=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));l=Promise.allSettled(n.map(u=>{if(u=Lp(u),u in Ps)return;Ps[u]=!0;const d=u.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${g}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":Mp,d||(h.as="script"),h.crossOrigin="",h.href=u,s&&h.setAttribute("nonce",s),document.head.appendChild(h),d)return new Promise((m,x)=>{h.addEventListener("load",m),h.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return l.then(o=>{for(const s of o||[])s.status==="rejected"&&a(s.reason);return t().catch(a)})};var Yc={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fs=i.createContext&&i.createContext(Yc),Fp=["attr","size","title"];function Ap(e,t){if(e==null)return{};var n=_p(e,t),r,l;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _p(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Ll(){return Ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ll.apply(this,arguments)}function As(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function Pl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?As(Object(n),!0).forEach(function(r){zp(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):As(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zp(e,t,n){return t=Ip(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ip(e){var t=Op(e,"string");return typeof t=="symbol"?t:t+""}function Op(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Gc(e){return e&&e.map((t,n)=>i.createElement(t.tag,Pl({key:n},t.attr),Gc(t.child)))}function O(e){return t=>i.createElement(Rp,Ll({attr:Pl({},e.attr)},t),Gc(e.child))}function Rp(e){var t=n=>{var{attr:r,size:l,title:a}=e,o=Ap(e,Fp),s=l||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),i.createElement("svg",Ll({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Pl(Pl({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&i.createElement("title",null,a),e.children)};return Fs!==void 0?i.createElement(Fs.Consumer,null,n=>t(n)):t(Yc)}function Kc(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function jp(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function qc(e){return O({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(e)}function Bp(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function Dp(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(e)}function Hp(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},child:[]}]})(e)}function Vp(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function $p(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Sa(e){return O({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"},child:[]}]})(e)}function mm(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"},child:[]}]})(e)}function hm(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z"},child:[]}]})(e)}function gm(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"},child:[]}]})(e)}function Up(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function Zc(e){return O({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function Ql(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(e)}function vm(e){return O({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M633.82 458.1l-157.8-121.96C488.61 312.13 496 285.01 496 256v-48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48c0 17.92-3.96 34.8-10.72 50.2l-26.55-20.52c3.1-9.4 5.28-19.22 5.28-29.67V96c0-53.02-42.98-96-96-96s-96 42.98-96 96v45.36L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM400 464h-56v-33.77c11.66-1.6 22.85-4.54 33.67-8.31l-50.11-38.73c-6.71.4-13.41.87-20.35.2-55.85-5.45-98.74-48.63-111.18-101.85L144 241.31v6.85c0 89.64 63.97 169.55 152 181.69V464h-56c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z"},child:[]}]})(e)}function ym(e){return O({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"},child:[]}]})(e)}function rl(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function Wp(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(e)}function Xc(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(e)}function Qp(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z"},child:[]}]})(e)}function wm(e){return O({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M268.2 381.4l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48c-10.7 4.6-16.5 16.1-13.9 27.5l24 104c2.5 10.8 12.1 18.6 23.4 18.6 100.7 0 193.7-32.4 269.7-86.9l-80-61.8c-10.9 6.5-22.1 12.7-33.6 18.1zm365.6 76.7L475.1 335.5C537.9 256.4 576 156.9 576 48c0-11.2-7.7-20.9-18.6-23.4l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-12.2 26.1-27.9 50.3-46 72.8L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3z"},child:[]}]})(e)}function Yp(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"},child:[]}]})(e)}function Ca(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"},child:[]}]})(e)}function Gp(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function kr(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(e)}function Kp(e){return O({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"},child:[]}]})(e)}function ll(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function qp(e){return O({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Na(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function xm(e){return O({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M633.8 458.1l-55-42.5c15.4-1.4 29.2-13.7 29.2-31.1v-257c0-25.5-29.1-40.4-50.4-25.8L448 177.3v137.2l-32-24.7v-178c0-26.4-21.4-47.8-47.8-47.8H123.9L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4L42.7 82 416 370.6l178.5 138c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.5-6.9 4.2-17-2.8-22.4zM32 400.2c0 26.4 21.4 47.8 47.8 47.8h288.4c11.2 0 21.4-4 29.6-10.5L32 154.7v245.5z"},child:[]}]})(e)}function Zp(e){return O({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"},child:[]}]})(e)}function km(e){return O({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"},child:[]}]})(e)}const Ae="/assets/chat-D5nHS8q9.png";function Jc(){const e=window.location.protocol==="https:"?"wss":"ws";if(window.location.host)return`${e}://${window.location.host}`;const t=window.location.hostname||"localhost";return`${e}://${t}:5002`}function Xp(){const e=Jc();return e.startsWith("wss://")?`https://${e.slice(6)}`:e.startsWith("ws://")?`http://${e.slice(5)}`:e}function Jp(){const e="".split(",").map(l=>l.trim()).filter(Boolean),t=[...e.length>0?[{urls:e}]:[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302","stun:stun3.l.google.com:19302","stun:stun4.l.google.com:19302"]}]];return"".split(",").map(l=>l.trim()).filter(Boolean).length>0&&void 0||console.warn("[WebRTC] TURN is not configured; calls may fail across restrictive networks."),t}async function Em(){let e=Jp();try{const t=await fetch(`${Xp()}/api/ice-servers`,{cache:"no-store"});if(t.ok){const n=await t.json();Array.isArray(n.iceServers)&&n.iceServers.length>0&&(e=n.iceServers)}}catch(t){console.warn("[WebRTC] Could not fetch ICE servers from signaling server, using static config",t)}return{iceServers:e,iceCandidatePoolSize:10,iceTransportPolicy:"all",bundlePolicy:"max-bundle"}}const em=`<!DOCTYPE html>\r
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
`;function tm({onReferenceStart:e,onThemeChange:t}){const n=P.useRef(null),[r,l]=P.useState(1200),a=P.useMemo(()=>em.replace("</head>","<style>@media(max-width:768px){input,textarea,select{font-size:16px!important}}</style>"+"</head>").replace('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"><\/script>',"").replace('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"><\/script>',"").replace(/<span class="w-9 h-9 rounded-xl grad[\s\S]*?<\/span>/,`<img src="${Ae}" alt="PerfectChat logo" style="width:42px;height:42px;object-fit:contain">`).replace(/<span class="w-8 h-8 rounded-lg grad[\s\S]*?<\/span>/,`<img src="${Ae}" alt="PerfectChat logo" style="width:36px;height:36px;object-fit:contain">`).replace("startMatching(name, currentMode);","parent.postMessage({source:'perfectchat-reference-ui',type:'start-chat',name:name,mode:currentMode},'*');").replace("</body>",`<script>(function(){
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
    })();<\/script>`+"</body>"),[]);return P.useEffect(()=>{const o=s=>{var u,d;if(!(s.source!==((u=n.current)==null?void 0:u.contentWindow)||((d=s.data)==null?void 0:d.source)!=="perfectchat-reference-ui")&&(s.data.type==="height"&&Number.isFinite(s.data.height)&&l(Math.max(800,s.data.height)),s.data.type==="scroll-to"&&Number.isFinite(s.data.top)&&window.scrollTo({top:Math.max(0,n.current.offsetTop+s.data.top-72),behavior:"smooth"}),s.data.type==="theme-change"&&t(!!s.data.dark),s.data.type==="start-chat"&&e(s.data.name,s.data.mode),s.data.type==="scroll-to"&&Number.isFinite(s.data.top))){const g=n.current.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:Math.max(0,g+s.data.top-72),behavior:"smooth"})}};return window.addEventListener("message",o),()=>window.removeEventListener("message",o)},[e,t]),i.createElement("iframe",{ref:n,className:"reference-ui-frame",title:"PerfectChat",srcDoc:a,style:{height:`${r}px`}})}function _s(){return i.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},i.createElement("path",{d:"M16 3h5v5"}),i.createElement("path",{d:"M4 20 21 3"}),i.createElement("path",{d:"M21 16v5h-5"}),i.createElement("path",{d:"m15 15 6 6"}),i.createElement("path",{d:"M4 4l5 5"}))}function nm({darkMode:e,onToggleTheme:t,ws:n,isReconnecting:r,username:l,setUsername:a,partnerName:o,isConnected:s,isMatching:u,isTyping:d,connectionError:g,messages:h,draftMessage:m,onDraftChange:x,onSubmit:k,onSkip:E,onEnd:R,onStart:f,onRetry:c,messageInputRef:p,messagesAreaRef:v,messagesEndRef:S,onComposerFocus:C,formatTime:M}){const[T,D]=P.useState(!0),[A,U]=P.useState(!1),qe=()=>{U(!1),E()};return i.createElement("div",{className:`tc-app ${e?"dark":""}`},i.createElement("header",{className:"tc-header"},i.createElement("div",{className:"tc-brand"},i.createElement("img",{src:Ae,alt:"PerfectChat logo"}),i.createElement("div",null,i.createElement("h1",null,"PerfectChat"),i.createElement("p",null,"Anonymous conversations"))),i.createElement("div",{className:"tc-header-actions"},i.createElement("button",{className:"tc-theme",onClick:t,title:e?"Light mode":"Dark mode",type:"button"},e?i.createElement(ll,null):i.createElement(rl,null)),i.createElement("button",{className:"tc-home",onClick:R,type:"button"},i.createElement(Zc,null),i.createElement("span",null,"Home")),i.createElement("button",{className:"tc-end",onClick:R,type:"button"},i.createElement(Yp,null),i.createElement("span",null,"End Chat")))),i.createElement("main",{className:"tc-main"},i.createElement("section",{className:"tc-container"},i.createElement("div",{className:"tc-chat-head"},i.createElement("div",{className:"tc-stranger"},i.createElement("div",{className:"tc-avatar"},i.createElement(Na,null),i.createElement("i",{className:s?"online":""})),i.createElement("div",null,i.createElement("h2",null,o||(u?"Finding Partner...":"Stranger")),i.createElement("span",{className:s?"online":"waiting"},i.createElement("i",null),s?"Online":u?"Searching":"Offline"))),i.createElement("div",{className:"tc-chat-tools"},i.createElement("button",{title:"Safety",type:"button"},i.createElement(kr,null)),i.createElement("img",{src:Ae,alt:"PerfectChat"}))),T&&i.createElement("div",{className:"tc-privacy"},i.createElement(Ql,null),i.createElement("p",null,"You're chatting anonymously. Never share passwords, addresses, payment details, or other private information."),i.createElement("button",{onClick:()=>D(!1),type:"button"},i.createElement(qp,null))),i.createElement("div",{className:"tc-messages",ref:v},i.createElement("div",{className:"tc-day"},"Today"),!n&&r&&i.createElement("div",{className:"tc-empty tc-status-empty"},i.createElement("img",{src:Ae,alt:"PerfectChat logo"}),i.createElement("h3",null,"Reconnecting..."),i.createElement("p",null,"Your connection dropped. We're getting you back into the queue.")),!n&&!r&&i.createElement("div",{className:"tc-empty"},i.createElement("img",{src:Ae,alt:"PerfectChat logo"}),i.createElement("h3",null,"Start chatting instantly"),i.createElement("p",null,"Enter a nickname and connect with someone new."),i.createElement("input",{value:l,onChange:H=>a(H.target.value),placeholder:"Enter your nickname",onKeyDown:H=>H.key==="Enter"&&f()}),i.createElement("button",{onClick:f,disabled:!l.trim(),type:"button"},"Start Anonymous Chat"),g&&i.createElement("span",null,g)),n&&h.every(H=>H.sender==="System")&&i.createElement("div",{className:"tc-empty tc-status-empty"},i.createElement("img",{src:Ae,alt:"PerfectChat logo"}),i.createElement("h3",null,s?"Connected!":"Finding Partner..."),i.createElement("p",null,s?`Start your anonymous conversation with ${o}.`:"Please wait while we match you with someone new."),!s&&i.createElement("button",{onClick:c,type:"button"},"Retry Match")),h.map((H,ft)=>{const Ot=H.sender==="You";return H.sender==="System"?i.createElement("div",{className:"tc-system",key:`${H.sender}-${ft}`},H.content):i.createElement("div",{className:`tc-message ${Ot?"out":"in"}`,key:`${H.sender}-${ft}`},!Ot&&i.createElement("div",{className:"tc-small-avatar"},i.createElement(Na,null)),i.createElement("div",{className:"tc-bubble"},H.content,i.createElement("span",null,M(H.createdAt),Ot&&i.createElement(Bp,null))))}),d&&s&&i.createElement("div",{className:"tc-message in"},i.createElement("div",{className:"tc-small-avatar"},i.createElement(Na,null)),i.createElement("div",{className:"tc-typing"},i.createElement("i",null),i.createElement("i",null),i.createElement("i",null))),i.createElement("div",{ref:S})),i.createElement("div",{className:"tc-composer-wrap"},i.createElement("form",{className:"tc-composer",onSubmit:k},i.createElement("button",{className:"tc-next",onClick:H=>{H.preventDefault(),U(!0)},disabled:!n,type:"button"},i.createElement(_s,null),i.createElement("span",null,"Next Match")),i.createElement("input",{ref:p,value:m,onChange:x,onFocus:C,disabled:!s,placeholder:s?"Type a message...":"Waiting for connection..."}),i.createElement("button",{className:"tc-send",disabled:!s||!m.trim(),type:"submit"},i.createElement(Xc,null)))))),i.createElement("footer",{className:"tc-footer"},i.createElement("span",null,"© ",new Date().getFullYear()," PerfectChat"),i.createElement("i",null)," ",i.createElement("a",{href:"#privacy"},"Privacy Policy"),i.createElement("i",null)," ",i.createElement("a",{href:"#terms"},"Terms"),i.createElement("i",null)," ",i.createElement("a",{href:"#guidelines"},"Community Guidelines")),A&&i.createElement("div",{className:"tc-modal-backdrop",onClick:H=>H.target===H.currentTarget&&U(!1)},i.createElement("div",{className:"tc-modal"},i.createElement("div",{className:"tc-modal-icon"},i.createElement(_s,null)),i.createElement("h3",null,"Find a new match?"),i.createElement("p",null,"This will end your current conversation and connect you with someone new."),i.createElement("div",null,i.createElement("button",{onClick:()=>U(!1),type:"button"},"Cancel"),i.createElement("button",{onClick:qe,type:"button"},"Find Match")))))}const rm=P.lazy(()=>Pp(()=>import("./VideoChat-8DApQZPH.js"),__vite__mapDeps([0,1]))),zs=[{id:"confidence",category:"Conversation Confidence",readTime:"4 min read",title:"Why anonymous chat makes starting conversations easier",excerpt:"PerfectChat removes the pressure of profiles and expectations, making it easier to talk naturally from the very first message.",body:["Anonymous chat works best when it feels easy to enter and easy to leave. You are not trying to impress a profile or manage a long history. You are simply talking to someone new in the moment.","That makes PerfectChat a natural space for building confidence. You learn how to open a conversation, keep it moving, and recover when a chat feels awkward. Those are real communication skills, even in a casual setting.","The strongest experience comes from simple actions, fast replies, and a layout that keeps your attention on the conversation instead of unnecessary distractions."]},{id:"safety",category:"Safer Conversations",readTime:"3 min read",title:"What makes anonymous chat feel safe and comfortable",excerpt:"People stay longer when chat feels clear, calm, and easy to control from the first second to the last.",body:["People feel more comfortable in anonymous chat when the product keeps them in control. That means clear connection status, a visible skip action, and no confusing steps between opening the app and starting a conversation.","A safe experience is not only about moderation. It is also about clarity. Users should always know whether they are waiting, connected, typing, or disconnected.","Small details matter here: smooth message delivery, helpful system feedback, and simple actions that never make the interface feel stressful."]},{id:"matching",category:"Instant Matching",readTime:"5 min read",title:"Why fast matching matters more than flashy extras",excerpt:"In random chat, momentum matters. The sooner people connect, the more likely they are to stay engaged.",body:["Long waits break the mood of random chat. When matching is quick, the product feels alive and people are more willing to start the next conversation with energy.","PerfectChat works best when the transition from one chat to another feels immediate. A clear status, a dependable next action, and minimal friction all help keep that rhythm intact.","Fast matching also supports healthier behavior. If a conversation is not working, people should be able to move on without frustration and try again right away."]},{id:"conversation",category:"Conversation Flow",readTime:"4 min read",title:"How to keep a random conversation going after hello",excerpt:"Simple, specific questions create momentum much faster than generic small talk.",body:["The best random chat questions are light, specific, and easy to build on. Ask about music, current mood, favorite food, travel plans, or the funniest thing that happened today.","The goal is not to sound clever. The goal is to create momentum. Once both people are replying comfortably, the rest of the conversation usually becomes easier on its own.","PerfectChat supports that flow best when the conversation stays front and center, with clean message history and simple actions that never interrupt the exchange."]}],lm=[{icon:Ql,label:"Anonymous",tone:"purple"},{icon:kr,label:"Safe Chat",tone:"green"},{icon:$p,label:"Text Chat",tone:"blue"},{icon:Wp,label:"Interests: Music",tone:"pink"}],am=["Be friendly and open-minded","No harassment or hate speech","Keep personal info private"],om=[{icon:Ql,label:"Anonymous"},{icon:qc,label:"Instant Match"},{icon:kr,label:"Easy Exit"}],im=[{icon:Ql,title:"100% Anonymous",description:"No personal info required"},{icon:qc,title:"Instant Connections",description:"Matched in seconds"},{icon:kr,title:"Safe & Respectful",description:"Our community guidelines"},{icon:Kc,title:"Leave Anytime",description:"No strings attached"}],Is=e=>e?new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit"}).format(e):"",sm=e=>{const t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=e%60;return[t,n,r].map(l=>String(l).padStart(2,"0")).join(":")},ba=(e,t,n="text")=>({sender:e,content:t,type:n,createdAt:Date.now()}),um=6,cm=1e3,dm=5e3;function fm(){const[e,t]=P.useState("home"),[n,r]=P.useState(null),[l,a]=P.useState(""),[o,s]=P.useState("text"),[u,d]=P.useState(""),[g,h]=P.useState([]),[m,x]=P.useState(""),[k,E]=P.useState(!1),[R,f]=P.useState(!1),[c,p]=P.useState(""),[v,S]=P.useState(!1),[C,M]=P.useState(!1),[T,D]=P.useState(null),[A,U]=P.useState(null),[qe,H]=P.useState(0),[ft,Ot]=P.useState(!0),[Zt,Ze]=P.useState(!1),[N,F]=P.useState(()=>typeof window<"u"?window.innerHeight:0),[_,G]=P.useState(!1),V=P.useRef(null),Xe=P.useRef(null),ve=P.useRef(null),pt=P.useRef(!1),Ue=P.useRef(null),Je=P.useRef(null),Er=P.useRef(null),mt=P.useRef(null),Xt=P.useRef(0),Jt=P.useRef(""),Sr=P.useRef(e),et=P.useRef(null),en=zs.find(w=>w.id===n)||null,Le=!!m,ed=Le?`Connected to ${m}`:k?"Looking for a new match":"Disconnected",td=Le?"Connected to a random user":k?"Finding your next conversation":"Start a new anonymous chat",Yl=P.useCallback(()=>{Xe.current&&(clearInterval(Xe.current),Xe.current=null),ve.current&&(clearTimeout(ve.current),ve.current=null)},[]),Cr=P.useCallback(()=>{Yl(),mt.current&&(clearTimeout(mt.current),mt.current=null),et.current&&(clearTimeout(et.current),et.current=null),Xt.current=0,S(!1);const w=V.current;w&&(pt.current=!0,(w.readyState===WebSocket.OPEN||w.readyState===WebSocket.CONNECTING)&&w.close(1e3,"Client reset")),V.current=null,D(null)},[Yl]),Gl=w=>{h(L=>[...L,ba("System",w,"system")])},tt=w=>{const L=V.current;return!L||L.readyState!==WebSocket.OPEN?!1:(L.send(JSON.stringify(w)),!0)},Nr=()=>{tt({type:"findPartner"})&&(E(!0),x(""),f(!1),U(null))},nd=w=>{try{const L=JSON.parse(w.data);switch(L.type){case"usernameSet":Nr();break;case"matched":x(L.partnerName||"Stranger"),h([]),E(!1),f(!1),p(""),U(Date.now()),setTimeout(()=>{var j;(j=Je.current)==null||j.focus()},50);break;case"waiting":E(!0),U(null);break;case"textMessage":h(j=>[...j,ba("Stranger",L.content)]),f(!1);break;case"typing":f(!!L.isTyping);break;case"partnerDisconnected":x(""),f(!1),E(!0),U(null),h([]),Gl(L.reason==="skip"?"Partner skipped. Finding a new person...":"Your chat partner disconnected. Finding someone new..."),L.shouldFindNew||setTimeout(()=>{Nr()},600);break;case"error":p(L.message||"Something went wrong."),Gl(L.message||"Something went wrong.");break;case"pong":et.current&&(clearTimeout(et.current),et.current=null);break;case"connectionEstablished":case"connectionReady":break;default:break}}catch(L){console.error("Failed to parse websocket message",L)}},mi=P.useCallback(()=>{if(Sr.current!=="text"||!Jt.current)return;if(Xt.current>=um){S(!1),p("Connection lost. Tap Start Anonymous Chat to reconnect.");return}S(!0);const w=Xt.current;Xt.current+=1;const L=Math.min(cm*2**w,1e4);mt.current=setTimeout(()=>{mt.current=null,Sr.current==="text"&&Jt.current&&br(Jt.current)},L)},[]),br=P.useCallback(w=>{const L=new WebSocket(Jc());V.current=L,D(L),L.onopen=()=>{pt.current=!1,Xt.current=0,S(!1),p(""),tt({type:"setUsername",username:w,chatType:"text"}),Xe.current=setInterval(()=>{tt({type:"ping"})},25e3)},L.onmessage=nd,L.onerror=()=>{p("Could not connect to chat server. Please try again.")},L.onclose=j=>{Yl(),V.current=null,D(null);const re=pt.current;if(pt.current=!1,re){S(!1);return}x(""),f(!1),E(!1),U(null),j.code!==1e3&&mi()}},[mi]),Fn=(w=l)=>{const L=w.trim();if(!L){p("Please enter your nickname before starting.");return}Cr(),Jt.current=L,p(""),h([]),x(""),f(!1),E(!0),d(""),U(null),Ze(!1),t("text"),br(L)},hi=()=>{if(!o){p("Please choose text chat or video chat first.");return}if(!l.trim()){p("Please enter your nickname before starting.");return}if(o==="video"){p(""),t("video");return}Fn()},rd=(w,L)=>{const j=String(w||"").trim(),re=L==="video"?"video":"text";if(j){if(a(j),s(re),p(""),re==="video"){t("video");return}Fn(j)}},ld=()=>{m&&(tt({type:"typing",isTyping:!0}),ve.current&&clearTimeout(ve.current),ve.current=setTimeout(()=>{tt({type:"typing",isTyping:!1})},950))},gi=w=>{d(w.target.value),ld()},vi=w=>{var re;w.preventDefault();const L=u.trim();if(!L||!m)return;if(!tt({type:"textMessage",content:L})){p("Message could not be sent because the connection is closed.");return}h(ht=>[...ht,ba("You",L)]),d(""),tt({type:"typing",isTyping:!1}),(re=Je.current)==null||re.focus()},Kl=()=>{tt({type:"skip"})&&(x(""),f(!1),E(!0),U(null),h([]),Gl("Looking for a new conversation..."))},ql=()=>{Cr(),t("home"),r(null),h([]),x(""),f(!1),E(!1),d(""),p(""),U(null),Ze(!1)},Tr=()=>{M(w=>!w)},ad=w=>{r(w),t("blog")},yi=()=>{t("home")},wi=()=>{setTimeout(()=>{const w=Er.current;w&&w.scrollTo({top:w.scrollHeight,behavior:"smooth"})},250)};return P.useEffect(()=>{Sr.current=e},[e]),P.useEffect(()=>()=>{Cr()},[Cr]),P.useEffect(()=>{const w=()=>{if(Sr.current!=="text"||!Jt.current)return;const j=V.current;if(j&&j.readyState===WebSocket.OPEN){if(et.current)return;tt({type:"ping"}),et.current=setTimeout(()=>{et.current=null,V.current===j&&j.close(4e3,"Stale connection probe failed")},dm);return}j&&j.readyState===WebSocket.CONNECTING||(mt.current&&(clearTimeout(mt.current),mt.current=null),Xt.current=0,br(Jt.current))},L=()=>{document.visibilityState==="visible"&&w()};return window.addEventListener("online",w),document.addEventListener("visibilitychange",L),()=>{window.removeEventListener("online",w),document.removeEventListener("visibilitychange",L)}},[br]),P.useEffect(()=>{const w=Er.current;w&&w.scrollTo({top:w.scrollHeight,behavior:g.length>0?"smooth":"auto"})},[g,R]),P.useEffect(()=>{if(!A){H(0);return}const w=()=>{H(Math.max(0,Math.floor((Date.now()-A)/1e3)))};w();const L=window.setInterval(w,1e3);return()=>window.clearInterval(L)},[A]),P.useEffect(()=>{var L,j;const w=()=>{var xi;const re=Math.round(((xi=window.visualViewport)==null?void 0:xi.height)||window.innerHeight),ht=window.innerHeight-re;F(re),G(window.innerWidth<=768&&ht>160)};return w(),window.addEventListener("resize",w),(L=window.visualViewport)==null||L.addEventListener("resize",w),(j=window.visualViewport)==null||j.addEventListener("scroll",w),()=>{var re,ht;window.removeEventListener("resize",w),(re=window.visualViewport)==null||re.removeEventListener("resize",w),(ht=window.visualViewport)==null||ht.removeEventListener("scroll",w)}},[]),P.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[e]),e==="video"?i.createElement("div",{className:`app-container ${C?"dark":"light"}`},i.createElement("div",{className:"video-chat-shell"},i.createElement(P.Suspense,{fallback:i.createElement("div",{className:"loading-screen"},"Loading video chat...")},i.createElement(rm,{initialUsername:l.trim(),onBack:ql})))):e==="text"?i.createElement(nm,{darkMode:C,onToggleTheme:Tr,ws:T,isReconnecting:v,username:l,setUsername:a,partnerName:m,isConnected:Le,isMatching:k,isTyping:R,connectionError:c,messages:g,draftMessage:u,onDraftChange:gi,onSubmit:vi,onSkip:Kl,onEnd:ql,onStart:()=>Fn(),onRetry:Nr,messageInputRef:Je,messagesAreaRef:Er,messagesEndRef:Ue,onComposerFocus:wi,formatTime:Is}):e==="legacy-text"?i.createElement("div",{className:`app-container chat-app ${C?"dark":"light"}`},i.createElement("div",{className:`fullscreen-chat-layout chat-redesign ${_?"keyboard-open":""}`,style:{height:typeof window<"u"&&window.innerWidth<=768&&N?`${N}px`:void 0}},i.createElement("div",{className:"chat-ambient chat-ambient-left"}),i.createElement("div",{className:"chat-ambient chat-ambient-right"}),i.createElement("div",{className:"chat-shell"},i.createElement("div",{className:"fullscreen-chat-header chat-header-redesign"},i.createElement("div",{className:"chat-brand-cluster"},i.createElement("img",{src:Ae,alt:"PerfectChat logo",className:"chat-header-logo"}),i.createElement("div",{className:"chat-brand-copy"},i.createElement("span",{className:"fullscreen-brand-name chat-brand-name"},"PerfectChat"),i.createElement("span",{className:"chat-brand-subtitle"},"Anonymous text chat that stays clean and easy."))),i.createElement("div",{className:"chat-header-actions"},i.createElement("button",{className:"chat-primary-action",onClick:Kl,title:"Find someone new",type:"button",disabled:!T},i.createElement(Ca,null),i.createElement("span",null,"Next Match")),i.createElement("div",{className:"chat-menu-wrap"},i.createElement("button",{className:"chat-icon-button",onClick:()=>Ze(w=>!w),title:"Open chat menu",type:"button"},i.createElement(jp,null)),Zt&&i.createElement("div",{className:"chat-menu-popover"},i.createElement("button",{className:"chat-menu-item",onClick:()=>{Ze(!1),ql()},type:"button"},i.createElement(Zc,null),i.createElement("span",null,"Home")),i.createElement("button",{className:"chat-menu-item",onClick:()=>{Tr(),Ze(!1)},type:"button"},C?i.createElement(ll,null):i.createElement(rl,null),i.createElement("span",null,C?"Light Mode":"Dark Mode")))))),i.createElement("div",{className:"chat-content-grid"},i.createElement("section",{className:"chat-main-column"},i.createElement("button",{className:`chat-connection-card chat-fixed-strip ${Le?"connected":"searching"}`,onClick:()=>Ot(w=>!w),type:"button"},i.createElement("div",{className:"chat-connection-presence"},i.createElement("span",{className:"chat-presence-orb"})),i.createElement("div",{className:"chat-connection-copy"},i.createElement("span",{className:"chat-connection-title"},td),i.createElement("span",{className:"chat-connection-meta"},i.createElement(Vp,null),Le?sm(qe):k?"Searching for someone new":"Start or reconnect your chat"),i.createElement("span",{className:"chat-connection-subtext"},Le?ed:"Anonymous, random, and ready when you are.")),i.createElement("span",{className:"chat-connection-arrow"},ft?i.createElement(Hp,null):i.createElement(Dp,null))),ft&&i.createElement("div",{className:"chat-tag-row chat-fixed-strip"},lm.map(({icon:w,label:L,tone:j})=>i.createElement("span",{key:L,className:`chat-tag chat-tag-${j}`},i.createElement(w,null),i.createElement("span",null,L)))),i.createElement("div",{className:"chat-conversation-panel"},i.createElement("div",{ref:Er,className:"fullscreen-messages-area chat-messages-area"},i.createElement("div",{className:"fullscreen-messages-container chat-messages-container"},!T&&i.createElement("div",{className:"fullscreen-login-container"},i.createElement("div",{className:"fullscreen-login-content chat-login-card"},i.createElement("img",{src:Ae,alt:"PerfectChat logo",className:"fullscreen-login-logo"}),i.createElement("p",{className:"eyebrow"},"Random Text Chat"),i.createElement("h2",{className:"fullscreen-login-title"},"Start chatting instantly"),i.createElement("p",{className:"fullscreen-login-copy"},"Enter a nickname, get matched quickly, and jump into a clean, distraction-free conversation."),i.createElement("div",{className:"fullscreen-login-form"},i.createElement("input",{type:"text",placeholder:"Enter your nickname",value:l,onChange:w=>a(w.target.value),className:"fullscreen-username-input",onKeyDown:w=>{w.key==="Enter"&&Fn()}}),i.createElement("button",{onClick:Fn,disabled:!l.trim(),className:`fullscreen-start-button ${l.trim()?"":"disabled"}`,type:"button"},"Start Anonymous Chat"),c&&i.createElement("div",{className:"error-message"},c)))),T&&g.length===0&&Le&&i.createElement("div",{className:"fullscreen-empty-state chat-empty-state"},i.createElement("div",{className:"fullscreen-empty-icon"},i.createElement(Sa,null)),i.createElement("h3",{className:"fullscreen-empty-title"},"Connected!"),i.createElement("p",{className:"fullscreen-empty-subtitle"},"Start your anonymous conversation with ",m,".")),T&&g.length===0&&!Le&&k&&i.createElement("div",{className:"fullscreen-empty-state chat-empty-state"},i.createElement("div",{className:"fullscreen-empty-icon"},i.createElement(Sa,null)),i.createElement("h3",{className:"fullscreen-empty-title"},"Finding Partner..."),i.createElement("p",{className:"fullscreen-empty-subtitle"},"Please wait while we match you with someone new."),i.createElement("button",{onClick:Nr,className:"find-partner-button",disabled:!T,type:"button"},"Retry Match")),g.map((w,L)=>{const j=w.sender==="You",re=w.sender==="System",ht=j?"You":m||"Stranger";return i.createElement("div",{key:`${w.sender}-${L}`,className:`fullscreen-message-wrapper chat-message-wrapper ${j?"is-outgoing":re?"is-system":"is-incoming"}`},!j&&!re&&i.createElement("div",{className:"fullscreen-avatar fullscreen-avatar-stranger"},"S"),i.createElement("div",{className:"chat-message-stack"},!re&&i.createElement("span",{className:"chat-message-author"},ht),i.createElement("div",{className:`message ${j?"outgoing fullscreen-message-you":re?"system fullscreen-message-system":"incoming fullscreen-message-stranger"}`},i.createElement("p",null,w.content),w.createdAt&&i.createElement("div",{className:"chat-message-meta"},i.createElement("span",null,Is(w.createdAt)),j&&i.createElement("span",{className:"chat-double-check"},"✓✓")))))}),R&&Le&&i.createElement("div",{className:"fullscreen-typing-wrapper chat-message-wrapper is-incoming"},i.createElement("div",{className:"fullscreen-avatar fullscreen-avatar-stranger"},"S"),i.createElement("div",{className:"chat-message-stack"},i.createElement("span",{className:"chat-message-author"},m||"Stranger"),i.createElement("div",{className:"typing-indicator fullscreen-typing-indicator keyboard-typing"},i.createElement("div",{className:"keyboard-typing-keys"},i.createElement("span",{className:"keyboard-key"}),i.createElement("span",{className:"keyboard-key"}),i.createElement("span",{className:"keyboard-key"}),i.createElement("span",{className:"keyboard-key wide"})),i.createElement("span",{className:"keyboard-typing-text"},"typing...")))),i.createElement("div",{ref:Ue}))),T&&i.createElement("div",{className:"fullscreen-message-input-area chat-composer-shell"},i.createElement("div",{className:"fullscreen-message-input-container"},i.createElement("form",{className:"message-form fullscreen-message-form chat-composer-form",onSubmit:vi},i.createElement("button",{className:"chat-tool-button",type:"button",title:"Emoji picker coming soon"},i.createElement(Kp,null)),i.createElement("button",{className:"chat-tool-button",type:"button",title:"Attachment support coming soon"},i.createElement(Qp,null)),i.createElement("input",{ref:Je,type:"text",value:u,onChange:gi,onFocus:wi,placeholder:Le?"Type a message...":"Waiting for connection...",disabled:!Le,className:"message-input fullscreen-message-input chat-composer-input"}),i.createElement("button",{type:"submit",className:"send-button fullscreen-send-button chat-send-button",disabled:!Le||!u.trim()},i.createElement(Xc,null))))))),i.createElement("aside",{className:"chat-sidebar"},i.createElement("article",{className:"chat-side-card"},i.createElement("div",{className:"chat-side-icon pink"},i.createElement(Up,null)),i.createElement("h3",null,"Stay kind & respectful"),i.createElement("p",null,"We're all here to have meaningful conversations. Please be kind and respectful to each other."),i.createElement("div",{className:"chat-side-points"},am.map(w=>i.createElement("span",{key:w},w)),i.createElement("span",{className:"warning"},"Report inappropriate behavior")),i.createElement("button",{className:"chat-side-secondary-button",type:"button"},"Learn more")),i.createElement("article",{className:"chat-side-card"},i.createElement("div",{className:"chat-side-icon violet"},i.createElement(Ca,null)),i.createElement("h3",null,"Looking for a new chat?"),i.createElement("p",null,"Click below to instantly connect with someone new."),i.createElement("button",{className:"chat-side-primary-button",onClick:Kl,disabled:!T,type:"button"},i.createElement(Ca,null),i.createElement("span",null,"Next Match")),i.createElement("div",{className:"chat-side-note"},i.createElement(kr,null),i.createElement("span",null,"Connections are random and completely anonymous.")))))))):e==="blog"&&en?i.createElement("div",{className:`app-container ${C?"dark":"light"}`},i.createElement("header",{className:"app-header"},i.createElement("div",{className:"logo-container"},i.createElement("img",{src:Ae,alt:"PerfectChat logo",className:"app-logo"}),i.createElement("div",{className:"brand-copy"},i.createElement("h1",{className:"app-title"},"PerfectChat"),i.createElement("p",{className:"brand-subtitle"},"Anonymous random conversations, designed to feel easy."))),i.createElement("div",{className:"header-actions"},i.createElement("button",{className:"blog-back-button",onClick:yi,type:"button"},i.createElement(Kc,null),i.createElement("span",null,"Back to Home")),i.createElement("button",{className:"theme-toggle",onClick:Tr,type:"button"},C?i.createElement(ll,null):i.createElement(rl,null)))),i.createElement("main",{className:"app-main blog-article-page"},i.createElement("article",{className:"blog-article-shell"},i.createElement("div",{className:"blog-article-topbar"},i.createElement("span",{className:"eyebrow"},"PerfectChat Journal"),i.createElement("span",{className:"blog-category"},en.category)),i.createElement("p",{className:"blog-readtime"},en.readTime),i.createElement("h2",{className:"blog-article-title"},en.title),i.createElement("p",{className:"blog-article-excerpt"},en.excerpt),i.createElement("div",{className:"blog-article-body"},en.body.map((w,L)=>i.createElement("p",{key:L},w))),i.createElement("div",{className:"blog-article-actions"},i.createElement("button",{className:"blog-read-more",onClick:yi,type:"button"},"Read More Articles"))))):e==="home"?i.createElement(tm,{onReferenceStart:rd,onThemeChange:M}):i.createElement("div",{className:`app-container ${C?"dark":"light"}`},i.createElement("header",{className:"app-header"},i.createElement("div",{className:"logo-container"},i.createElement("img",{src:Ae,alt:"PerfectChat logo",className:"app-logo"}),i.createElement("div",{className:"brand-copy"},i.createElement("h1",{className:"app-title"},"PerfectChat"),i.createElement("p",{className:"brand-subtitle"},"Anonymous random conversations, designed to feel easy."))),i.createElement("div",{className:"header-actions"},i.createElement("button",{className:"theme-toggle",onClick:Tr,type:"button"},C?i.createElement(ll,null):i.createElement(rl,null)))),i.createElement("main",{className:"app-main"},i.createElement("section",{className:"hero-panel"},i.createElement("div",{className:"hero-copy-panel home-story-card"},i.createElement("span",{className:"eyebrow"},"PerfectChat"),i.createElement("h2",{className:"hero-title"},"Start real conversations with strangers in seconds."),i.createElement("p",{className:"hero-description"},"PerfectChat connects you anonymously with new people for meaningful conversations. No sign-ups. No pressure. Just real chats, whenever you want."),i.createElement("div",{className:"hero-points"},om.map(({icon:w,label:L})=>i.createElement("span",{key:L},i.createElement(w,null),L)))),i.createElement("div",{className:"hero-action-card home-mode-panel"},i.createElement("img",{src:Ae,alt:"PerfectChat logo",className:"welcome-logo"}),i.createElement("h3",{className:"hero-card-title"},"Choose how you want to chat"),i.createElement("p",{className:"hero-card-copy"},"Pick your preferred chat mode. You can switch anytime during the conversation."),i.createElement("div",{className:"mode-selector"},i.createElement("button",{className:`mode-option ${o==="text"?"active":""}`,onClick:()=>{s("text"),p("")},type:"button"},i.createElement("span",{className:"mode-option-check"}),i.createElement("div",{className:"mode-option-icon pink"},i.createElement(Sa,null)),i.createElement("h4",null,"Text Chat"),i.createElement("p",null,"Chat with strangers using text.")),i.createElement("button",{className:`mode-option ${o==="video"?"active":""}`,onClick:()=>{s("video"),p("")},type:"button"},i.createElement("span",{className:"mode-option-check"}),i.createElement("div",{className:"mode-option-icon violet"},i.createElement(Zp,null)),i.createElement("h4",null,"Video Chat"),i.createElement("p",null,"Face-to-face conversations in real time."))),o&&i.createElement("div",{className:"mode-name-panel"},i.createElement("label",{className:"mode-name-label",htmlFor:"nickname-input"},"Enter your nickname to start ",o==="video"?"video":"text"," chat"),i.createElement("input",{id:"nickname-input",className:"welcome-name-input",type:"text",value:l,onChange:w=>{a(w.target.value),p("")},onKeyDown:w=>{w.key==="Enter"&&hi()},placeholder:"Choose your nickname"})),i.createElement("p",{className:"mode-helper-copy"},o?"Your nickname stays visible only inside the current chat session.":"Select a mode first, then your nickname field will appear here."),i.createElement("button",{onClick:hi,className:"welcome-button start-chat-button",type:"button",disabled:!o||!l.trim()},i.createElement(Gp,null),i.createElement("span",null,"Start Chat")),c&&i.createElement("div",{className:"error-banner home-error"},c))),i.createElement("section",{className:"blog-showcase journal-showcase"},i.createElement("div",{className:"blog-showcase-head"},i.createElement("div",null,i.createElement("span",{className:"eyebrow"},"PerfectChat Journal"),i.createElement("h2",{className:"blog-showcase-title"},"Short reads for better anonymous conversations")),i.createElement("p",{className:"blog-showcase-copy"},"These articles cover conversation confidence, safety, fast matching, and the small details that make PerfectChat feel better to use.")),i.createElement("div",{className:"blog-grid"},zs.map(w=>i.createElement("article",{key:w.id,className:"blog-card"},i.createElement("div",{className:"blog-meta-row"},i.createElement("span",{className:"blog-category"},w.category),i.createElement("span",{className:"blog-readtime"},w.readTime)),i.createElement("h3",{className:"blog-card-title"},w.title),i.createElement("p",{className:"blog-card-content"},w.excerpt),i.createElement("button",{className:"blog-read-more journal-read-more",onClick:()=>ad(w.id),type:"button"},i.createElement("span",null,"Read Article"),i.createElement("span",{"aria-hidden":"true"},"->")))))),i.createElement("section",{className:"trust-strip","aria-label":"PerfectChat highlights"},im.map(({icon:w,title:L,description:j})=>i.createElement("article",{key:L,className:"trust-item"},i.createElement("div",{className:"trust-item-icon"},i.createElement(w,null)),i.createElement("div",null,i.createElement("h3",null,L),i.createElement("p",null,j)))))))}class pm extends P.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}render(){return this.state.error?i.createElement("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",background:"#0b1220",color:"#f8fafc",padding:"24px",fontFamily:"Segoe UI, sans-serif"}},i.createElement("div",{style:{maxWidth:"720px",width:"100%",background:"#111827",border:"1px solid #334155",borderRadius:"16px",padding:"24px"}},i.createElement("h1",{style:{marginTop:0}},"Frontend error"),i.createElement("pre",{style:{whiteSpace:"pre-wrap",margin:0}},String(this.state.error)))):this.props.children}}Qc(document.getElementById("root")).render(i.createElement(P.StrictMode,null,i.createElement(pm,null,i.createElement(fm,null))));export{hm as F,i as R,km as a,Zc as b,Ae as c,mm as d,kr as e,xm as f,vm as g,ym as h,Zp as i,gm as j,wm as k,Jc as l,Em as m,P as r};
