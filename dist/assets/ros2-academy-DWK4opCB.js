const e=`<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ROS2Academy — Plateforme d'apprentissage ROS2</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
  html, body { margin:0; padding:0; background:#030712; }
  #root { min-height:100vh; }
</style>
</head>
<body>
<div id="root"></div>
<script>
(()=>{var xm=Object.create;var mc=Object.defineProperty;var Sm=Object.getOwnPropertyDescriptor;var zm=Object.getOwnPropertyNames;var Tm=Object.getPrototypeOf,Cm=Object.prototype.hasOwnProperty;var bt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Rm=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of zm(t))!Cm.call(e,l)&&l!==n&&mc(e,l,{get:()=>t[l],enumerable:!(a=Sm(t,l))||a.enumerable});return e};var An=(e,t,n)=>(n=e!=null?xm(Tm(e)):{},Rm(t||!e||!e.__esModule?mc(n,"default",{value:e,enumerable:!0}):n,e));var Cc=bt(U=>{"use strict";var Di=Symbol.for("react.transitional.element"),Em=Symbol.for("react.portal"),Am=Symbol.for("react.fragment"),Dm=Symbol.for("react.strict_mode"),Om=Symbol.for("react.profiler"),Nm=Symbol.for("react.consumer"),km=Symbol.for("react.context"),Mm=Symbol.for("react.forward_ref"),Bm=Symbol.for("react.suspense"),Lm=Symbol.for("react.memo"),vc=Symbol.for("react.lazy"),wm=Symbol.for("react.activity"),gc=Symbol.iterator;function qm(e){return e===null||typeof e!="object"?null:(e=gc&&e[gc]||e["@@iterator"],typeof e=="function"?e:null)}var hc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xc=Object.assign,Sc={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=Sc,this.updater=n||hc}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zc(){}zc.prototype=Kn.prototype;function Oi(e,t,n){this.props=e,this.context=t,this.refs=Sc,this.updater=n||hc}var Ni=Oi.prototype=new zc;Ni.constructor=Oi;xc(Ni,Kn.prototype);Ni.isPureReactComponent=!0;var yc=Array.isArray;function Ai(){}var te={H:null,A:null,T:null,S:null},Tc=Object.prototype.hasOwnProperty;function ki(e,t,n){var a=n.ref;return{$$typeof:Di,type:e,key:t,ref:a!==void 0?a:null,props:n}}function jm(e,t){return ki(e.type,t,e.props)}function Mi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Di}function Um(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _c=/\\/+/g;function Ei(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Um(""+e.key):t.toString(36)}function Hm(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Ai,Ai):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Pn(e,t,n,a,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Di:case Em:s=!0;break;case vc:return s=e._init,Pn(s(e._payload),t,n,a,l)}}if(s)return l=l(e),s=a===""?"."+Ei(e,0):a,yc(l)?(n="",s!=null&&(n=s.replace(_c,"$&/")+"/"),Pn(l,t,n,"",function(p){return p})):l!=null&&(Mi(l)&&(l=jm(l,n+(l.key==null||e&&e.key===l.key?"":(""+l.key).replace(_c,"$&/")+"/")+s)),t.push(l)),1;s=0;var c=a===""?".":a+":";if(yc(e))for(var u=0;u<e.length;u++)a=e[u],o=c+Ei(a,u),s+=Pn(a,t,n,o,l);else if(u=qm(e),typeof u=="function")for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,o=c+Ei(a,u++),s+=Pn(a,t,n,o,l);else if(o==="object"){if(typeof e.then=="function")return Pn(Hm(e),t,n,a,l);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function Jl(e,t,n){if(e==null)return e;var a=[],l=0;return Pn(e,a,"","",function(o){return t.call(n,o,l++)}),a}function Gm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var bc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ym={map:Jl,forEach:function(e,t,n){Jl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Jl(e,function(){t++}),t},toArray:function(e){return Jl(e,function(t){return t})||[]},only:function(e){if(!Mi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Activity=wm;U.Children=Ym;U.Component=Kn;U.Fragment=Am;U.Profiler=Om;U.PureComponent=Oi;U.StrictMode=Dm;U.Suspense=Bm;U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te;U.__COMPILER_RUNTIME={__proto__:null,c:function(e){return te.H.useMemoCache(e)}};U.cache=function(e){return function(){return e.apply(null,arguments)}};U.cacheSignal=function(){return null};U.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var a=xc({},e.props),l=e.key;if(t!=null)for(o in t.key!==void 0&&(l=""+t.key),t)!Tc.call(t,o)||o==="key"||o==="__self"||o==="__source"||o==="ref"&&t.ref===void 0||(a[o]=t[o]);var o=arguments.length-2;if(o===1)a.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];a.children=s}return ki(e.type,l,a)};U.createContext=function(e){return e={$$typeof:km,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Nm,_context:e},e};U.createElement=function(e,t,n){var a,l={},o=null;if(t!=null)for(a in t.key!==void 0&&(o=""+t.key),t)Tc.call(t,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(l[a]=t[a]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];l.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps,s)l[a]===void 0&&(l[a]=s[a]);return ki(e,o,l)};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Mm,render:e}};U.isValidElement=Mi;U.lazy=function(e){return{$$typeof:vc,_payload:{_status:-1,_result:e},_init:Gm}};U.memo=function(e,t){return{$$typeof:Lm,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=te.T,n={};te.T=n;try{var a=e(),l=te.S;l!==null&&l(n,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(Ai,bc)}catch(o){bc(o)}finally{t!==null&&n.types!==null&&(t.types=n.types),te.T=t}};U.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()};U.use=function(e){return te.H.use(e)};U.useActionState=function(e,t,n){return te.H.useActionState(e,t,n)};U.useCallback=function(e,t){return te.H.useCallback(e,t)};U.useContext=function(e){return te.H.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e,t){return te.H.useDeferredValue(e,t)};U.useEffect=function(e,t){return te.H.useEffect(e,t)};U.useEffectEvent=function(e){return te.H.useEffectEvent(e)};U.useId=function(){return te.H.useId()};U.useImperativeHandle=function(e,t,n){return te.H.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return te.H.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return te.H.useLayoutEffect(e,t)};U.useMemo=function(e,t){return te.H.useMemo(e,t)};U.useOptimistic=function(e,t){return te.H.useOptimistic(e,t)};U.useReducer=function(e,t,n){return te.H.useReducer(e,t,n)};U.useRef=function(e){return te.H.useRef(e)};U.useState=function(e){return te.H.useState(e)};U.useSyncExternalStore=function(e,t,n){return te.H.useSyncExternalStore(e,t,n)};U.useTransition=function(){return te.H.useTransition()};U.version="19.2.5"});var Ya=bt((Y_,Rc)=>{"use strict";Rc.exports=Cc()});var wc=bt(oe=>{"use strict";function qi(e,t){var n=e.length;e.push(t);e:for(;0<n;){var a=n-1>>>1,l=e[a];if(0<Zl(l,t))e[a]=t,e[n]=l,n=a;else break e}}function vt(e){return e.length===0?null:e[0]}function Pl(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var a=0,l=e.length,o=l>>>1;a<o;){var s=2*(a+1)-1,c=e[s],u=s+1,p=e[u];if(0>Zl(c,n))u<l&&0>Zl(p,c)?(e[a]=p,e[u]=n,a=u):(e[a]=c,e[s]=n,a=s);else if(u<l&&0>Zl(p,n))e[a]=p,e[u]=n,a=u;else break e}}return t}function Zl(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}oe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Ec=performance,oe.unstable_now=function(){return Ec.now()}):(Bi=Date,Ac=Bi.now(),oe.unstable_now=function(){return Bi.now()-Ac});var Ec,Bi,Ac,Et=[],Kt=[],Fm=1,nt=null,Ne=3,ji=!1,Fa=!1,Xa=!1,Ui=!1,Nc=typeof setTimeout=="function"?setTimeout:null,kc=typeof clearTimeout=="function"?clearTimeout:null,Dc=typeof setImmediate<"u"?setImmediate:null;function Il(e){for(var t=vt(Kt);t!==null;){if(t.callback===null)Pl(Kt);else if(t.startTime<=e)Pl(Kt),t.sortIndex=t.expirationTime,qi(Et,t);else break;t=vt(Kt)}}function Hi(e){if(Xa=!1,Il(e),!Fa)if(vt(Et)!==null)Fa=!0,$n||($n=!0,Wn());else{var t=vt(Kt);t!==null&&Gi(Hi,t.startTime-e)}}var $n=!1,Va=-1,Mc=5,Bc=-1;function Lc(){return Ui?!0:!(oe.unstable_now()-Bc<Mc)}function Li(){if(Ui=!1,$n){var e=oe.unstable_now();Bc=e;var t=!0;try{e:{Fa=!1,Xa&&(Xa=!1,kc(Va),Va=-1),ji=!0;var n=Ne;try{t:{for(Il(e),nt=vt(Et);nt!==null&&!(nt.expirationTime>e&&Lc());){var a=nt.callback;if(typeof a=="function"){nt.callback=null,Ne=nt.priorityLevel;var l=a(nt.expirationTime<=e);if(e=oe.unstable_now(),typeof l=="function"){nt.callback=l,Il(e),t=!0;break t}nt===vt(Et)&&Pl(Et),Il(e)}else Pl(Et);nt=vt(Et)}if(nt!==null)t=!0;else{var o=vt(Kt);o!==null&&Gi(Hi,o.startTime-e),t=!1}}break e}finally{nt=null,Ne=n,ji=!1}t=void 0}}finally{t?Wn():$n=!1}}}var Wn;typeof Dc=="function"?Wn=function(){Dc(Li)}:typeof MessageChannel<"u"?(wi=new MessageChannel,Oc=wi.port2,wi.port1.onmessage=Li,Wn=function(){Oc.postMessage(null)}):Wn=function(){Nc(Li,0)};var wi,Oc;function Gi(e,t){Va=Nc(function(){e(oe.unstable_now())},t)}oe.unstable_IdlePriority=5;oe.unstable_ImmediatePriority=1;oe.unstable_LowPriority=4;oe.unstable_NormalPriority=3;oe.unstable_Profiling=null;oe.unstable_UserBlockingPriority=2;oe.unstable_cancelCallback=function(e){e.callback=null};oe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Mc=0<e?Math.floor(1e3/e):5};oe.unstable_getCurrentPriorityLevel=function(){return Ne};oe.unstable_next=function(e){switch(Ne){case 1:case 2:case 3:var t=3;break;default:t=Ne}var n=Ne;Ne=t;try{return e()}finally{Ne=n}};oe.unstable_requestPaint=function(){Ui=!0};oe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Ne;Ne=e;try{return t()}finally{Ne=n}};oe.unstable_scheduleCallback=function(e,t,n){var a=oe.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?a+n:a):n=a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return l=n+l,e={id:Fm++,callback:t,priorityLevel:e,startTime:n,expirationTime:l,sortIndex:-1},n>a?(e.sortIndex=n,qi(Kt,e),vt(Et)===null&&e===vt(Kt)&&(Xa?(kc(Va),Va=-1):Xa=!0,Gi(Hi,n-a))):(e.sortIndex=l,qi(Et,e),Fa||ji||(Fa=!0,$n||($n=!0,Wn()))),e};oe.unstable_shouldYield=Lc;oe.unstable_wrapCallback=function(e){var t=Ne;return function(){var n=Ne;Ne=t;try{return e.apply(this,arguments)}finally{Ne=n}}}});var jc=bt((X_,qc)=>{"use strict";qc.exports=wc()});var Hc=bt(Be=>{"use strict";var Xm=Ya();function Uc(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Wt(){}var Me={d:{f:Wt,r:function(){throw Error(Uc(522))},D:Wt,C:Wt,L:Wt,m:Wt,X:Wt,S:Wt,M:Wt},p:0,findDOMNode:null},Vm=Symbol.for("react.portal");function Qm(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vm,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}var Qa=Xm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Kl(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Me;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Uc(299));return Qm(e,t,null,n)};Be.flushSync=function(e){var t=Qa.T,n=Me.p;try{if(Qa.T=null,Me.p=2,e)return e()}finally{Qa.T=t,Me.p=n,Me.d.f()}};Be.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Me.d.C(e,t))};Be.prefetchDNS=function(e){typeof e=="string"&&Me.d.D(e)};Be.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,a=Kl(n,t.crossOrigin),l=typeof t.integrity=="string"?t.integrity:void 0,o=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Me.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:a,integrity:l,fetchPriority:o}):n==="script"&&Me.d.X(e,{crossOrigin:a,integrity:l,fetchPriority:o,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Be.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Kl(t.as,t.crossOrigin);Me.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Me.d.M(e)};Be.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,a=Kl(n,t.crossOrigin);Me.d.L(e,n,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Be.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Kl(t.as,t.crossOrigin);Me.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Me.d.m(e)};Be.requestFormReset=function(e){Me.d.r(e)};Be.unstable_batchedUpdates=function(e,t){return e(t)};Be.useFormState=function(e,t,n){return Qa.H.useFormState(e,t,n)};Be.useFormStatus=function(){return Qa.H.useHostTransitionStatus()};Be.version="19.2.5"});var Fc=bt((Q_,Yc)=>{"use strict";function Gc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gc)}catch(e){console.error(e)}}Gc(),Yc.exports=Hc()});var nm=bt(zi=>{"use strict";var he=jc(),gd=Ya(),Jm=Fc();function z(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function yd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function kl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bd(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xc(e){if(kl(e)!==e)throw Error(z(188))}function Zm(e){var t=e.alternate;if(!t){if(t=kl(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Xc(l),e;if(o===a)return Xc(l),t;o=o.sibling}throw Error(z(188))}if(n.return!==a.return)n=l,a=o;else{for(var s=!1,c=l.child;c;){if(c===n){s=!0,n=l,a=o;break}if(c===a){s=!0,a=l,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,a=l;break}if(c===a){s=!0,a=o,n=l;break}c=c.sibling}if(!s)throw Error(z(189))}}if(n.alternate!==a)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function vd(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=vd(e),t!==null)return t;e=e.sibling}return null}var le=Object.assign,Im=Symbol.for("react.element"),Wl=Symbol.for("react.transitional.element"),el=Symbol.for("react.portal"),oa=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),xr=Symbol.for("react.profiler"),xd=Symbol.for("react.consumer"),Lt=Symbol.for("react.context"),ys=Symbol.for("react.forward_ref"),Sr=Symbol.for("react.suspense"),zr=Symbol.for("react.suspense_list"),_s=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),Tr=Symbol.for("react.activity"),Pm=Symbol.for("react.memo_cache_sentinel"),Vc=Symbol.iterator;function Ja(e){return e===null||typeof e!="object"?null:(e=Vc&&e[Vc]||e["@@iterator"],typeof e=="function"?e:null)}var Km=Symbol.for("react.client.reference");function Cr(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Km?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case oa:return"Fragment";case xr:return"Profiler";case hd:return"StrictMode";case Sr:return"Suspense";case zr:return"SuspenseList";case Tr:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case el:return"Portal";case Lt:return e.displayName||"Context";case xd:return(e._context.displayName||"Context")+".Consumer";case ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _s:return t=e.displayName||null,t!==null?t:Cr(e.type)||"Memo";case $t:t=e._payload,e=e._init;try{return Cr(e(t))}catch{}}return null}var tl=Array.isArray,w=gd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=Jm.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Bn={pending:!1,data:null,method:null,action:null},Rr=[],ia=-1;function Tt(e){return{current:e}}function ze(e){0>ia||(e.current=Rr[ia],Rr[ia]=null,ia--)}function ee(e,t){ia++,Rr[ia]=e.current,e.current=t}var zt=Tt(null),bl=Tt(null),dn=Tt(null),ko=Tt(null);function Mo(e,t){switch(ee(dn,t),ee(bl,e),ee(zt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wu(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wu(t),e=Yf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ze(zt),ee(zt,e)}function Ta(){ze(zt),ze(bl),ze(dn)}function Er(e){e.memoizedState!==null&&ee(ko,e);var t=zt.current,n=Yf(t,e.type);t!==n&&(ee(bl,e),ee(zt,n))}function Bo(e){bl.current===e&&(ze(zt),ze(bl)),ko.current===e&&(ze(ko),Dl._currentValue=Bn)}var Yi,Qc;function On(e){if(Yi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\\n( *(at )?)/);Yi=t&&t[1]||"",Qc=-1<n.stack.indexOf(\`
    at\`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return\`
\`+Yi+e+Qc}var Fi=!1;function Xi(e,t){if(!e||Fi)return"";Fi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(_){var b=_}Reflect.construct(e,[],h)}else{try{h.call()}catch(_){b=_}e.call(h.prototype)}}else{try{throw Error()}catch(_){b=_}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(_){if(_&&b&&typeof _.stack=="string")return[_.stack,b.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),s=o[0],c=o[1];if(s&&c){var u=s.split(\`
\`),p=c.split(\`
\`);for(l=a=0;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;for(;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;if(a===u.length||l===p.length)for(a=u.length-1,l=p.length-1;1<=a&&0<=l&&u[a]!==p[l];)l--;for(;1<=a&&0<=l;a--,l--)if(u[a]!==p[l]){if(a!==1||l!==1)do if(a--,l--,0>l||u[a]!==p[l]){var v=\`
\`+u[a].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=a&&0<=l);break}}}finally{Fi=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?On(n):""}function Wm(e,t){switch(e.tag){case 26:case 27:case 5:return On(e.type);case 16:return On("Lazy");case 13:return e.child!==t&&t!==null?On("Suspense Fallback"):On("Suspense");case 19:return On("SuspenseList");case 0:case 15:return Xi(e.type,!1);case 11:return Xi(e.type.render,!1);case 1:return Xi(e.type,!0);case 31:return On("Activity");default:return""}}function Jc(e){try{var t="",n=null;do t+=Wm(e,n),n=e,e=e.return;while(e);return t}catch(a){return\`
Error generating stack: \`+a.message+\`
\`+a.stack}}var Ar=Object.prototype.hasOwnProperty,bs=he.unstable_scheduleCallback,Vi=he.unstable_cancelCallback,$m=he.unstable_shouldYield,eg=he.unstable_requestPaint,Pe=he.unstable_now,tg=he.unstable_getCurrentPriorityLevel,Sd=he.unstable_ImmediatePriority,zd=he.unstable_UserBlockingPriority,Lo=he.unstable_NormalPriority,ng=he.unstable_LowPriority,Td=he.unstable_IdlePriority,ag=he.log,lg=he.unstable_setDisableYieldValue,Ml=null,Ke=null;function on(e){if(typeof ag=="function"&&lg(e),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(Ml,e)}catch{}}var We=Math.clz32?Math.clz32:rg,og=Math.log,ig=Math.LN2;function rg(e){return e>>>=0,e===0?32:31-(og(e)/ig|0)|0}var $l=256,eo=262144,to=4194304;function Nn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ri(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,o=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~o,a!==0?l=Nn(a):(s&=c,s!==0?l=Nn(s):n||(n=c&~e,n!==0&&(l=Nn(n))))):(c=a&~o,c!==0?l=Nn(c):s!==0?l=Nn(s):n||(n=a&~e,n!==0&&(l=Nn(n)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:l}function Bl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function sg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cd(){var e=to;return to<<=1,(to&62914560)===0&&(to=4194304),e}function Qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ll(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function cg(e,t,n,a,l,o){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var c=e.entanglements,u=e.expirationTimes,p=e.hiddenUpdates;for(n=s&~n;0<n;){var v=31-We(n),h=1<<v;c[v]=0,u[v]=-1;var b=p[v];if(b!==null)for(p[v]=null,v=0;v<b.length;v++){var _=b[v];_!==null&&(_.lane&=-536870913)}n&=~h}a!==0&&Rd(e,a,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(s&~t))}function Rd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-We(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Ed(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-We(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Ad(e,t){var n=t&-t;return n=(n&42)!==0?1:vs(n),(n&(e.suspendedLanes|t))!==0?0:n}function vs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Dd(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:$f(e.type))}function Zc(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var Tn=Math.random().toString(36).slice(2),Ee="__reactFiber$"+Tn,Xe="__reactProps$"+Tn,La="__reactContainer$"+Tn,Dr="__reactEvents$"+Tn,ug="__reactListeners$"+Tn,dg="__reactHandles$"+Tn,Ic="__reactResources$"+Tn,wl="__reactMarker$"+Tn;function xs(e){delete e[Ee],delete e[Xe],delete e[Dr],delete e[ug],delete e[dg]}function ra(e){var t=e[Ee];if(t)return t;for(var n=e.parentNode;n;){if(t=n[La]||n[Ee]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ad(e);e!==null;){if(n=e[Ee])return n;e=ad(e)}return t}e=n,n=e.parentNode}return null}function wa(e){if(e=e[Ee]||e[La]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function nl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(z(33))}function _a(e){var t=e[Ic];return t||(t=e[Ic]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Se(e){e[wl]=!0}var Od=new Set,Nd={};function Xn(e,t){Ca(e,t),Ca(e+"Capture",t)}function Ca(e,t){for(Nd[e]=t,e=0;e<t.length;e++)Od.add(t[e])}var pg=RegExp("^[:A-Z_a-z\\\\u00C0-\\\\u00D6\\\\u00D8-\\\\u00F6\\\\u00F8-\\\\u02FF\\\\u0370-\\\\u037D\\\\u037F-\\\\u1FFF\\\\u200C-\\\\u200D\\\\u2070-\\\\u218F\\\\u2C00-\\\\u2FEF\\\\u3001-\\\\uD7FF\\\\uF900-\\\\uFDCF\\\\uFDF0-\\\\uFFFD][:A-Z_a-z\\\\u00C0-\\\\u00D6\\\\u00D8-\\\\u00F6\\\\u00F8-\\\\u02FF\\\\u0370-\\\\u037D\\\\u037F-\\\\u1FFF\\\\u200C-\\\\u200D\\\\u2070-\\\\u218F\\\\u2C00-\\\\u2FEF\\\\u3001-\\\\uD7FF\\\\uF900-\\\\uFDCF\\\\uFDF0-\\\\uFFFD\\\\-.0-9\\\\u00B7\\\\u0300-\\\\u036F\\\\u203F-\\\\u2040]*$"),Pc={},Kc={};function fg(e){return Ar.call(Kc,e)?!0:Ar.call(Pc,e)?!1:pg.test(e)?Kc[e]=!0:(Pc[e]=!0,!1)}function _o(e,t,n){if(fg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function no(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function At(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mg(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,o=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Or(e){if(!e._valueTracker){var t=kd(e)?"checked":"value";e._valueTracker=mg(e,t,""+e[t])}}function Md(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=kd(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function wo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var gg=/[\\n"\\\\]/g;function rt(e){return e.replace(gg,function(t){return"\\\\"+t.charCodeAt(0).toString(16)+" "})}function Nr(e,t,n,a,l,o,s,c){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+lt(t)):e.value!==""+lt(t)&&(e.value=""+lt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?kr(e,s,lt(t)):n!=null?kr(e,s,lt(n)):a!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+lt(c):e.removeAttribute("name")}function Bd(e,t,n,a,l,o,s,c){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Or(e);return}n=n!=null?""+lt(n):"",t=t!=null?""+lt(t):n,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Or(e)}function kr(e,t,n){t==="number"&&wo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ba(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+lt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ld(e,t,n){if(t!=null&&(t=""+lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+lt(n):""}function wd(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(z(92));if(tl(a)){if(1<a.length)throw Error(z(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=lt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Or(e)}function Ra(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||yg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function qd(e,t,n){if(t!=null&&typeof t!="object")throw Error(z(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&Wc(e,l,a)}else for(var o in t)t.hasOwnProperty(o)&&Wc(e,o,t[o])}function Ss(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _g=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bg=/^[\\u0000-\\u001F ]*j[\\r\\n\\t]*a[\\r\\n\\t]*v[\\r\\n\\t]*a[\\r\\n\\t]*s[\\r\\n\\t]*c[\\r\\n\\t]*r[\\r\\n\\t]*i[\\r\\n\\t]*p[\\r\\n\\t]*t[\\r\\n\\t]*:/i;function bo(e){return bg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function wt(){}var Mr=null;function zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,va=null;function $c(e){var t=wa(e);if(t&&(e=t.stateNode)){var n=e[Xe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Nr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+rt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[Xe]||null;if(!l)throw Error(z(90));Nr(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Md(a)}break e;case"textarea":Ld(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ba(e,!!n.multiple,t,!1)}}}var Ji=!1;function jd(e,t,n){if(Ji)return e(t,n);Ji=!0;try{var a=e(t);return a}finally{if(Ji=!1,(sa!==null||va!==null)&&(vi(),sa&&(t=sa,e=va,va=sa=null,$c(t),e)))for(t=0;t<e.length;t++)$c(e[t])}}function vl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Xe]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Br=!1;if(Gt)try{ea={},Object.defineProperty(ea,"passive",{get:function(){Br=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{Br=!1}var ea,rn=null,Ts=null,vo=null;function Ud(){if(vo)return vo;var e,t=Ts,n=t.length,a,l="value"in rn?rn.value:rn.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(a=1;a<=s&&t[n-a]===l[o-a];a++);return vo=l.slice(e,1<a?1-a:void 0)}function ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function eu(){return!1}function Ve(e){function t(n,a,l,o,s){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ao:eu,this.isPropagationStopped=eu,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},si=Ve(Vn),ql=le({},Vn,{view:0,detail:0}),vg=Ve(ql),Zi,Ii,Za,ci=le({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Za&&(Za&&e.type==="mousemove"?(Zi=e.screenX-Za.screenX,Ii=e.screenY-Za.screenY):Ii=Zi=0,Za=e),Zi)},movementY:function(e){return"movementY"in e?e.movementY:Ii}}),tu=Ve(ci),hg=le({},ci,{dataTransfer:0}),xg=Ve(hg),Sg=le({},ql,{relatedTarget:0}),Pi=Ve(Sg),zg=le({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Tg=Ve(zg),Cg=le({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rg=Ve(Cg),Eg=le({},Vn,{data:0}),nu=Ve(Eg),Ag={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Og={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ng(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Og[e])?!!t[e]:!1}function Cs(){return Ng}var kg=le({},ql,{key:function(e){if(e.key){var t=Ag[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cs,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mg=Ve(kg),Bg=le({},ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),au=Ve(Bg),Lg=le({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cs}),wg=Ve(Lg),qg=le({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jg=Ve(qg),Ug=le({},ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hg=Ve(Ug),Gg=le({},Vn,{newState:0,oldState:0}),Yg=Ve(Gg),Fg=[9,13,27,32],Rs=Gt&&"CompositionEvent"in window,ol=null;Gt&&"documentMode"in document&&(ol=document.documentMode);var Xg=Gt&&"TextEvent"in window&&!ol,Hd=Gt&&(!Rs||ol&&8<ol&&11>=ol),lu=" ",ou=!1;function Gd(e,t){switch(e){case"keyup":return Fg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ca=!1;function Vg(e,t){switch(e){case"compositionend":return Yd(t);case"keypress":return t.which!==32?null:(ou=!0,lu);case"textInput":return e=t.data,e===lu&&ou?null:e;default:return null}}function Qg(e,t){if(ca)return e==="compositionend"||!Rs&&Gd(e,t)?(e=Ud(),vo=Ts=rn=null,ca=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hd&&t.locale!=="ko"?null:t.data;default:return null}}var Jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jg[e.type]:t==="textarea"}function Fd(e,t,n,a){sa?va?va.push(a):va=[a]:sa=a,t=ei(t,"onChange"),0<t.length&&(n=new si("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var il=null,hl=null;function Zg(e){Uf(e,0)}function ui(e){var t=nl(e);if(Md(t))return e}function ru(e,t){if(e==="change")return t}var Xd=!1;Gt&&(Gt?(oo="oninput"in document,oo||(Ki=document.createElement("div"),Ki.setAttribute("oninput","return;"),oo=typeof Ki.oninput=="function"),lo=oo):lo=!1,Xd=lo&&(!document.documentMode||9<document.documentMode));var lo,oo,Ki;function su(){il&&(il.detachEvent("onpropertychange",Vd),hl=il=null)}function Vd(e){if(e.propertyName==="value"&&ui(hl)){var t=[];Fd(t,hl,e,zs(e)),jd(Zg,t)}}function Ig(e,t,n){e==="focusin"?(su(),il=t,hl=n,il.attachEvent("onpropertychange",Vd)):e==="focusout"&&su()}function Pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ui(hl)}function Kg(e,t){if(e==="click")return ui(t)}function Wg(e,t){if(e==="input"||e==="change")return ui(t)}function $g(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:$g;function xl(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Ar.call(t,l)||!et(e[l],t[l]))return!1}return!0}function cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,t){var n=cu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cu(n)}}function Qd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wo(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wo(e.document)}return t}function Es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ey=Gt&&"documentMode"in document&&11>=document.documentMode,ua=null,Lr=null,rl=null,wr=!1;function du(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wr||ua==null||ua!==wo(a)||(a=ua,"selectionStart"in a&&Es(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),rl&&xl(rl,a)||(rl=a,a=ei(Lr,"onSelect"),0<a.length&&(t=new si("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ua)))}function Dn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var da={animationend:Dn("Animation","AnimationEnd"),animationiteration:Dn("Animation","AnimationIteration"),animationstart:Dn("Animation","AnimationStart"),transitionrun:Dn("Transition","TransitionRun"),transitionstart:Dn("Transition","TransitionStart"),transitioncancel:Dn("Transition","TransitionCancel"),transitionend:Dn("Transition","TransitionEnd")},Wi={},Zd={};Gt&&(Zd=document.createElement("div").style,"AnimationEvent"in window||(delete da.animationend.animation,delete da.animationiteration.animation,delete da.animationstart.animation),"TransitionEvent"in window||delete da.transitionend.transition);function Qn(e){if(Wi[e])return Wi[e];if(!da[e])return e;var t=da[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zd)return Wi[e]=t[n];return e}var Id=Qn("animationend"),Pd=Qn("animationiteration"),Kd=Qn("animationstart"),ty=Qn("transitionrun"),ny=Qn("transitionstart"),ay=Qn("transitioncancel"),Wd=Qn("transitionend"),$d=new Map,qr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qr.push("scrollEnd");function yt(e,t){$d.set(e,t),Xn(t,[e])}var qo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},at=[],pa=0,As=0;function di(){for(var e=pa,t=As=pa=0;t<e;){var n=at[t];at[t++]=null;var a=at[t];at[t++]=null;var l=at[t];at[t++]=null;var o=at[t];if(at[t++]=null,a!==null&&l!==null){var s=a.pending;s===null?l.next=l:(l.next=s.next,s.next=l),a.pending=l}o!==0&&ep(n,l,o)}}function pi(e,t,n,a){at[pa++]=e,at[pa++]=t,at[pa++]=n,at[pa++]=a,As|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ds(e,t,n,a){return pi(e,t,n,a),jo(e)}function Jn(e,t){return pi(e,null,null,t),jo(e)}function ep(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,o=e.return;o!==null;)o.childLanes|=n,a=o.alternate,a!==null&&(a.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-We(n),e=o.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),o):null}function jo(e){if(50<yl)throw yl=0,ls=null,Error(z(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fa={};function ly(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,a){return new ly(e,t,n,a)}function Os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function tp(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xo(e,t,n,a,l,o){var s=0;if(a=e,typeof e=="function")Os(e)&&(s=1);else if(typeof e=="string")s=r_(e,n,zt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tr:return e=Ze(31,n,t,l),e.elementType=Tr,e.lanes=o,e;case oa:return Ln(n.children,l,o,t);case hd:s=8,l|=24;break;case xr:return e=Ze(12,n,t,l|2),e.elementType=xr,e.lanes=o,e;case Sr:return e=Ze(13,n,t,l),e.elementType=Sr,e.lanes=o,e;case zr:return e=Ze(19,n,t,l),e.elementType=zr,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lt:s=10;break e;case xd:s=9;break e;case ys:s=11;break e;case _s:s=14;break e;case $t:s=16,a=null;break e}s=29,n=Error(z(130,e===null?"null":typeof e,"")),a=null}return t=Ze(s,n,t,l),t.elementType=e,t.type=a,t.lanes=o,t}function Ln(e,t,n,a){return e=Ze(7,e,a,t),e.lanes=n,e}function $i(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function np(e){var t=Ze(18,null,null,0);return t.stateNode=e,t}function er(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pu=new WeakMap;function st(e,t){if(typeof e=="object"&&e!==null){var n=pu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Jc(t)},pu.set(e,t),t)}return{value:e,source:t,stack:Jc(t)}}var ma=[],ga=0,Uo=null,Sl=0,ot=[],it=0,hn=null,ht=1,xt="";function Mt(e,t){ma[ga++]=Sl,ma[ga++]=Uo,Uo=e,Sl=t}function ap(e,t,n){ot[it++]=ht,ot[it++]=xt,ot[it++]=hn,hn=e;var a=ht;e=xt;var l=32-We(a)-1;a&=~(1<<l),n+=1;var o=32-We(t)+l;if(30<o){var s=l-l%5;o=(a&(1<<s)-1).toString(32),a>>=s,l-=s,ht=1<<32-We(t)+l|n<<l|a,xt=o+e}else ht=1<<o|n<<l|a,xt=e}function Ns(e){e.return!==null&&(Mt(e,1),ap(e,1,0))}function ks(e){for(;e===Uo;)Uo=ma[--ga],ma[ga]=null,Sl=ma[--ga],ma[ga]=null;for(;e===hn;)hn=ot[--it],ot[it]=null,xt=ot[--it],ot[it]=null,ht=ot[--it],ot[it]=null}function lp(e,t){ot[it++]=ht,ot[it++]=xt,ot[it++]=hn,ht=t.id,xt=t.overflow,hn=e}var Ae=null,ae=null,Q=!1,pn=null,ct=!1,jr=Error(z(519));function xn(e){var t=Error(z(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zl(st(t,e)),jr}function fu(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ee]=e,t[Xe]=a,n){case"dialog":Y("cancel",t),Y("close",t);break;case"iframe":case"object":case"embed":Y("load",t);break;case"video":case"audio":for(n=0;n<El.length;n++)Y(El[n],t);break;case"source":Y("error",t);break;case"img":case"image":case"link":Y("error",t),Y("load",t);break;case"details":Y("toggle",t);break;case"input":Y("invalid",t),Bd(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Y("invalid",t);break;case"textarea":Y("invalid",t),wd(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Gf(t.textContent,n)?(a.popover!=null&&(Y("beforetoggle",t),Y("toggle",t)),a.onScroll!=null&&Y("scroll",t),a.onScrollEnd!=null&&Y("scrollend",t),a.onClick!=null&&(t.onclick=wt),t=!0):t=!1,t||xn(e,!0)}function mu(e){for(Ae=e.return;Ae;)switch(Ae.tag){case 5:case 31:case 13:ct=!1;return;case 27:case 3:ct=!0;return;default:Ae=Ae.return}}function ta(e){if(e!==Ae)return!1;if(!Q)return mu(e),Q=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||cs(e.type,e.memoizedProps)),n=!n),n&&ae&&xn(e),mu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));ae=nd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));ae=nd(e)}else t===27?(t=ae,Cn(e.type)?(e=fs,fs=null,ae=e):ae=t):ae=Ae?dt(e.stateNode.nextSibling):null;return!0}function Un(){ae=Ae=null,Q=!1}function tr(){var e=pn;return e!==null&&(Ye===null?Ye=e:Ye.push.apply(Ye,e),pn=null),e}function zl(e){pn===null?pn=[e]:pn.push(e)}var Ur=Tt(null),Zn=null,qt=null;function tn(e,t,n){ee(Ur,t._currentValue),t._currentValue=n}function Ut(e){e._currentValue=Ur.current,ze(Ur)}function Hr(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Gr(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var s=l.child;o=o.firstContext;e:for(;o!==null;){var c=o;o=l;for(var u=0;u<t.length;u++)if(c.context===t[u]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Hr(o.return,n,e),a||(s=null);break e}o=c.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(z(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Hr(s,n,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function qa(e,t,n,a){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(z(387));if(s=s.memoizedProps,s!==null){var c=l.type;et(l.pendingProps.value,s.value)||(e!==null?e.push(c):e=[c])}}else if(l===ko.current){if(s=l.alternate,s===null)throw Error(z(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Dl):e=[Dl])}l=l.return}e!==null&&Gr(t,e,n,a),t.flags|=262144}function Ho(e){for(e=e.firstContext;e!==null;){if(!et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hn(e){Zn=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function De(e){return op(Zn,e)}function io(e,t){return Zn===null&&Hn(e),op(e,t)}function op(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qt===null){if(e===null)throw Error(z(308));qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qt=qt.next=t;return n}var oy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},iy=he.unstable_scheduleCallback,ry=he.unstable_NormalPriority,ye={$$typeof:Lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ms(){return{controller:new oy,data:new Map,refCount:0}}function jl(e){e.refCount--,e.refCount===0&&iy(ry,function(){e.controller.abort()})}var sl=null,Yr=0,Ea=0,ha=null;function sy(e,t){if(sl===null){var n=sl=[];Yr=0,Ea=lc(),ha={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Yr++,t.then(gu,gu),t}function gu(){if(--Yr===0&&sl!==null){ha!==null&&(ha.status="fulfilled");var e=sl;sl=null,Ea=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function cy(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var yu=w.S;w.S=function(e,t){hf=Pe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&sy(e,t),yu!==null&&yu(e,t)};var wn=Tt(null);function Bs(){var e=wn.current;return e!==null?e:$.pooledCache}function So(e,t){t===null?ee(wn,wn.current):ee(wn,t.pool)}function ip(){var e=Bs();return e===null?null:{parent:ye._currentValue,pool:e}}var ja=Error(z(460)),Ls=Error(z(474)),fi=Error(z(542)),Go={then:function(){}};function _u(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rp(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(wt,wt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,vu(e),e;default:if(typeof t.status=="string")t.then(wt,wt);else{if(e=$,e!==null&&100<e.shellSuspendCounter)throw Error(z(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,vu(e),e}throw qn=t,ja}}function kn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(qn=n,ja):n}}var qn=null;function bu(){if(qn===null)throw Error(z(459));var e=qn;return qn=null,e}function vu(e){if(e===ja||e===fi)throw Error(z(483))}var xa=null,Tl=0;function ro(e){var t=Tl;return Tl+=1,xa===null&&(xa=[]),rp(xa,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function so(e,t){throw t.$$typeof===Im?Error(z(525)):(e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function sp(e){function t(m,d){if(e){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function a(m){for(var d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function l(m,d){return m=jt(m,d),m.index=0,m.sibling=null,m}function o(m,d,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=67108866,d):g):(m.flags|=67108866,d)):(m.flags|=1048576,d)}function s(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function c(m,d,g,x){return d===null||d.tag!==6?(d=$i(g,m.mode,x),d.return=m,d):(d=l(d,g),d.return=m,d)}function u(m,d,g,x){var N=g.type;return N===oa?v(m,d,g.props.children,x,g.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===$t&&kn(N)===d.type)?(d=l(d,g.props),Ia(d,g),d.return=m,d):(d=xo(g.type,g.key,g.props,null,m.mode,x),Ia(d,g),d.return=m,d)}function p(m,d,g,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=er(g,m.mode,x),d.return=m,d):(d=l(d,g.children||[]),d.return=m,d)}function v(m,d,g,x,N){return d===null||d.tag!==7?(d=Ln(g,m.mode,x,N),d.return=m,d):(d=l(d,g),d.return=m,d)}function h(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=$i(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Wl:return g=xo(d.type,d.key,d.props,null,m.mode,g),Ia(g,d),g.return=m,g;case el:return d=er(d,m.mode,g),d.return=m,d;case $t:return d=kn(d),h(m,d,g)}if(tl(d)||Ja(d))return d=Ln(d,m.mode,g,null),d.return=m,d;if(typeof d.then=="function")return h(m,ro(d),g);if(d.$$typeof===Lt)return h(m,io(m,d),g);so(m,d)}return null}function b(m,d,g,x){var N=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return N!==null?null:c(m,d,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wl:return g.key===N?u(m,d,g,x):null;case el:return g.key===N?p(m,d,g,x):null;case $t:return g=kn(g),b(m,d,g,x)}if(tl(g)||Ja(g))return N!==null?null:v(m,d,g,x,null);if(typeof g.then=="function")return b(m,d,ro(g),x);if(g.$$typeof===Lt)return b(m,d,io(m,g),x);so(m,g)}return null}function _(m,d,g,x,N){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return m=m.get(g)||null,c(d,m,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wl:return m=m.get(x.key===null?g:x.key)||null,u(d,m,x,N);case el:return m=m.get(x.key===null?g:x.key)||null,p(d,m,x,N);case $t:return x=kn(x),_(m,d,g,x,N)}if(tl(x)||Ja(x))return m=m.get(g)||null,v(d,m,x,N,null);if(typeof x.then=="function")return _(m,d,g,ro(x),N);if(x.$$typeof===Lt)return _(m,d,g,io(d,x),N);so(d,x)}return null}function y(m,d,g,x){for(var N=null,q=null,S=d,B=d=0,k=null;S!==null&&B<g.length;B++){S.index>B?(k=S,S=null):k=S.sibling;var C=b(m,S,g[B],x);if(C===null){S===null&&(S=k);break}e&&S&&C.alternate===null&&t(m,S),d=o(C,d,B),q===null?N=C:q.sibling=C,q=C,S=k}if(B===g.length)return n(m,S),Q&&Mt(m,B),N;if(S===null){for(;B<g.length;B++)S=h(m,g[B],x),S!==null&&(d=o(S,d,B),q===null?N=S:q.sibling=S,q=S);return Q&&Mt(m,B),N}for(S=a(S);B<g.length;B++)k=_(S,m,B,g[B],x),k!==null&&(e&&k.alternate!==null&&S.delete(k.key===null?B:k.key),d=o(k,d,B),q===null?N=k:q.sibling=k,q=k);return e&&S.forEach(function(j){return t(m,j)}),Q&&Mt(m,B),N}function T(m,d,g,x){if(g==null)throw Error(z(151));for(var N=null,q=null,S=d,B=d=0,k=null,C=g.next();S!==null&&!C.done;B++,C=g.next()){S.index>B?(k=S,S=null):k=S.sibling;var j=b(m,S,C.value,x);if(j===null){S===null&&(S=k);break}e&&S&&j.alternate===null&&t(m,S),d=o(j,d,B),q===null?N=j:q.sibling=j,q=j,S=k}if(C.done)return n(m,S),Q&&Mt(m,B),N;if(S===null){for(;!C.done;B++,C=g.next())C=h(m,C.value,x),C!==null&&(d=o(C,d,B),q===null?N=C:q.sibling=C,q=C);return Q&&Mt(m,B),N}for(S=a(S);!C.done;B++,C=g.next())C=_(S,m,B,C.value,x),C!==null&&(e&&C.alternate!==null&&S.delete(C.key===null?B:C.key),d=o(C,d,B),q===null?N=C:q.sibling=C,q=C);return e&&S.forEach(function(ke){return t(m,ke)}),Q&&Mt(m,B),N}function O(m,d,g,x){if(typeof g=="object"&&g!==null&&g.type===oa&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Wl:e:{for(var N=g.key;d!==null;){if(d.key===N){if(N=g.type,N===oa){if(d.tag===7){n(m,d.sibling),x=l(d,g.props.children),x.return=m,m=x;break e}}else if(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===$t&&kn(N)===d.type){n(m,d.sibling),x=l(d,g.props),Ia(x,g),x.return=m,m=x;break e}n(m,d);break}else t(m,d);d=d.sibling}g.type===oa?(x=Ln(g.props.children,m.mode,x,g.key),x.return=m,m=x):(x=xo(g.type,g.key,g.props,null,m.mode,x),Ia(x,g),x.return=m,m=x)}return s(m);case el:e:{for(N=g.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),x=l(d,g.children||[]),x.return=m,m=x;break e}else{n(m,d);break}else t(m,d);d=d.sibling}x=er(g,m.mode,x),x.return=m,m=x}return s(m);case $t:return g=kn(g),O(m,d,g,x)}if(tl(g))return y(m,d,g,x);if(Ja(g)){if(N=Ja(g),typeof N!="function")throw Error(z(150));return g=N.call(g),T(m,d,g,x)}if(typeof g.then=="function")return O(m,d,ro(g),x);if(g.$$typeof===Lt)return O(m,d,io(m,g),x);so(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),x=l(d,g),x.return=m,m=x):(n(m,d),x=$i(g,m.mode,x),x.return=m,m=x),s(m)):n(m,d)}return function(m,d,g,x){try{Tl=0;var N=O(m,d,g,x);return xa=null,N}catch(S){if(S===ja||S===fi)throw S;var q=Ze(29,S,null,m.mode);return q.lanes=x,q.return=m,q}}}var Gn=sp(!0),cp=sp(!1),en=!1;function ws(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(J&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=jo(e),ep(e,null,n),t}return pi(e,a,t,n),jo(e)}function cl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ed(e,n)}}function nr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?l=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xr=!1;function ul(){if(Xr){var e=ha;if(e!==null)throw e}}function dl(e,t,n,a){Xr=!1;var l=e.updateQueue;en=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var u=c,p=u.next;u.next=null,s===null?o=p:s.next=p,s=u;var v=e.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==s&&(c===null?v.firstBaseUpdate=p:c.next=p,v.lastBaseUpdate=u))}if(o!==null){var h=l.baseState;s=0,v=p=u=null,c=o;do{var b=c.lane&-536870913,_=b!==c.lane;if(_?(X&b)===b:(a&b)===b){b!==0&&b===Ea&&(Xr=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var y=e,T=c;b=t;var O=n;switch(T.tag){case 1:if(y=T.payload,typeof y=="function"){h=y.call(O,h,b);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=T.payload,b=typeof y=="function"?y.call(O,h,b):y,b==null)break e;h=le({},h,b);break e;case 2:en=!0}}b=c.callback,b!==null&&(e.flags|=64,_&&(e.flags|=8192),_=l.callbacks,_===null?l.callbacks=[b]:_.push(b))}else _={lane:b,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(p=v=_,u=h):v=v.next=_,s|=b;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;_=c,c=_.next,_.next=null,l.lastBaseUpdate=_,l.shared.pending=null}}while(!0);v===null&&(u=h),l.baseState=u,l.firstBaseUpdate=p,l.lastBaseUpdate=v,o===null&&(l.shared.lanes=0),zn|=s,e.lanes=s,e.memoizedState=h}}function up(e,t){if(typeof e!="function")throw Error(z(191,e));e.call(t)}function dp(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)up(n[e],t)}var Aa=Tt(null),Yo=Tt(0);function hu(e,t){e=Vt,ee(Yo,e),ee(Aa,t),Vt=e|t.baseLanes}function Vr(){ee(Yo,Vt),ee(Aa,Aa.current)}function qs(){Vt=Yo.current,ze(Aa),ze(Yo)}var tt=Tt(null),ut=null;function nn(e){var t=e.alternate;ee(ue,ue.current&1),ee(tt,e),ut===null&&(t===null||Aa.current!==null||t.memoizedState!==null)&&(ut=e)}function Qr(e){ee(ue,ue.current),ee(tt,e),ut===null&&(ut=e)}function pp(e){e.tag===22?(ee(ue,ue.current),ee(tt,e),ut===null&&(ut=e)):an(e)}function an(){ee(ue,ue.current),ee(tt,tt.current)}function Je(e){ze(tt),ut===e&&(ut=null),ze(ue)}var ue=Tt(0);function Fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ds(n)||ps(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yt=0,H=null,W=null,me=null,Xo=!1,Sa=!1,Yn=!1,Vo=0,Cl=0,za=null,uy=0;function re(){throw Error(z(321))}function js(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function Us(e,t,n,a,l,o){return Yt=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Fp:Ps,Yn=!1,o=n(a,l),Yn=!1,Sa&&(o=mp(t,n,a,l)),fp(e),o}function fp(e){w.H=Rl;var t=W!==null&&W.next!==null;if(Yt=0,me=W=H=null,Xo=!1,Cl=0,za=null,t)throw Error(z(300));e===null||_e||(e=e.dependencies,e!==null&&Ho(e)&&(_e=!0))}function mp(e,t,n,a){H=e;var l=0;do{if(Sa&&(za=null),Cl=0,Sa=!1,25<=l)throw Error(z(301));if(l+=1,me=W=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}w.H=Xp,o=t(n,a)}while(Sa);return o}function dy(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?Ul(t):t,e=e.useState()[0],(W!==null?W.memoizedState:null)!==e&&(H.flags|=1024),t}function Hs(){var e=Vo!==0;return Vo=0,e}function Gs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ys(e){if(Xo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Xo=!1}Yt=0,me=W=H=null,Sa=!1,Cl=Vo=0,za=null}function Le(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?H.memoizedState=me=e:me=me.next=e,me}function de(){if(W===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=W.next;var t=me===null?H.memoizedState:me.next;if(t!==null)me=t,W=e;else{if(e===null)throw H.alternate===null?Error(z(467)):Error(z(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},me===null?H.memoizedState=me=e:me=me.next=e}return me}function mi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ul(e){var t=Cl;return Cl+=1,za===null&&(za=[]),e=rp(za,e,t),t=H,(me===null?t.memoizedState:me.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Fp:Ps),e}function gi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ul(e);if(e.$$typeof===Lt)return De(e)}throw Error(z(438,String(e)))}function Fs(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=H.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=mi(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Pm;return t.index++,n}function Ft(e,t){return typeof t=="function"?t(e):t}function zo(e){var t=de();return Xs(t,W,e)}function Xs(e,t,n){var a=e.queue;if(a===null)throw Error(z(311));a.lastRenderedReducer=n;var l=e.baseQueue,o=a.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}t.baseQueue=l=o,a.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var c=s=null,u=null,p=t,v=!1;do{var h=p.lane&-536870913;if(h!==p.lane?(X&h)===h:(Yt&h)===h){var b=p.revertLane;if(b===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),h===Ea&&(v=!0);else if((Yt&b)===b){p=p.next,b===Ea&&(v=!0);continue}else h={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},u===null?(c=u=h,s=o):u=u.next=h,H.lanes|=b,zn|=b;h=p.action,Yn&&n(o,h),o=p.hasEagerState?p.eagerState:n(o,h)}else b={lane:h,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},u===null?(c=u=b,s=o):u=u.next=b,H.lanes|=h,zn|=h;p=p.next}while(p!==null&&p!==t);if(u===null?s=o:u.next=c,!et(o,e.memoizedState)&&(_e=!0,v&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=u,a.lastRenderedState=o}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ar(e){var t=de(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do o=e(o,s.action),s=s.next;while(s!==l);et(o,t.memoizedState)||(_e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function gp(e,t,n){var a=H,l=de(),o=Q;if(o){if(n===void 0)throw Error(z(407));n=n()}else n=t();var s=!et((W||l).memoizedState,n);if(s&&(l.memoizedState=n,_e=!0),l=l.queue,Vs(bp.bind(null,a,l,e),[e]),l.getSnapshot!==t||s||me!==null&&me.memoizedState.tag&1){if(a.flags|=2048,Da(9,{destroy:void 0},_p.bind(null,a,l,n,t),null),$===null)throw Error(z(349));o||(Yt&127)!==0||yp(a,t,n)}return n}function yp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=mi(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _p(e,t,n,a){t.value=n,t.getSnapshot=a,vp(t)&&hp(e)}function bp(e,t,n){return n(function(){vp(t)&&hp(e)})}function vp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function hp(e){var t=Jn(e,2);t!==null&&Fe(t,e,2)}function Jr(e){var t=Le();if(typeof e=="function"){var n=e;if(e=n(),Yn){on(!0);try{n()}finally{on(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:e},t}function xp(e,t,n,a){return e.baseState=n,Xs(e,W,typeof a=="function"?a:Ft)}function py(e,t,n,a,l){if(_i(e))throw Error(z(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};w.T!==null?n(!0):o.isTransition=!1,a(o),n=t.pending,n===null?(o.next=t.pending=o,Sp(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Sp(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var o=w.T,s={};w.T=s;try{var c=n(l,a),u=w.S;u!==null&&u(s,c),xu(e,t,c)}catch(p){Zr(e,t,p)}finally{o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}else try{o=n(l,a),xu(e,t,o)}catch(p){Zr(e,t,p)}}function xu(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Su(e,t,a)},function(a){return Zr(e,t,a)}):Su(e,t,n)}function Su(e,t,n){t.status="fulfilled",t.value=n,zp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Sp(e,n)))}function Zr(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,zp(t),t=t.next;while(t!==a)}e.action=null}function zp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Tp(e,t){return t}function zu(e,t){if(Q){var n=$.formState;if(n!==null){e:{var a=H;if(Q){if(ae){t:{for(var l=ae,o=ct;l.nodeType!==8;){if(!o){l=null;break t}if(l=dt(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){ae=dt(l.nextSibling),a=l.data==="F!";break e}}xn(a)}a=!1}a&&(t=n[0])}}return n=Le(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tp,lastRenderedState:t},n.queue=a,n=Hp.bind(null,H,a),a.dispatch=n,a=Jr(!1),o=Is.bind(null,H,!1,a.queue),a=Le(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=py.bind(null,H,l,o,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Tu(e){var t=de();return Cp(t,W,e)}function Cp(e,t,n){if(t=Xs(e,t,Tp)[0],e=zo(Ft)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ul(t)}catch(s){throw s===ja?fi:s}else a=t;t=de();var l=t.queue,o=l.dispatch;return n!==t.memoizedState&&(H.flags|=2048,Da(9,{destroy:void 0},fy.bind(null,l,n),null)),[a,o,e]}function fy(e,t){e.action=t}function Cu(e){var t=de(),n=W;if(n!==null)return Cp(t,n,e);de(),t=t.memoizedState,n=de();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Da(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=H.updateQueue,t===null&&(t=mi(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Rp(){return de().memoizedState}function To(e,t,n,a){var l=Le();H.flags|=e,l.memoizedState=Da(1|t,{destroy:void 0},n,a===void 0?null:a)}function yi(e,t,n,a){var l=de();a=a===void 0?null:a;var o=l.memoizedState.inst;W!==null&&a!==null&&js(a,W.memoizedState.deps)?l.memoizedState=Da(t,o,n,a):(H.flags|=e,l.memoizedState=Da(1|t,o,n,a))}function Ru(e,t){To(8390656,8,e,t)}function Vs(e,t){yi(2048,8,e,t)}function my(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=mi(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ep(e){var t=de().memoizedState;return my({ref:t,nextImpl:e}),function(){if((J&2)!==0)throw Error(z(440));return t.impl.apply(void 0,arguments)}}function Ap(e,t){return yi(4,2,e,t)}function Dp(e,t){return yi(4,4,e,t)}function Op(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Np(e,t,n){n=n!=null?n.concat([e]):null,yi(4,4,Op.bind(null,t,e),n)}function Qs(){}function kp(e,t){var n=de();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&js(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Mp(e,t){var n=de();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&js(t,a[1]))return a[0];if(a=e(),Yn){on(!0);try{e()}finally{on(!1)}}return n.memoizedState=[a,t],a}function Js(e,t,n){return n===void 0||(Yt&1073741824)!==0&&(X&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Sf(),H.lanes|=e,zn|=e,n)}function Bp(e,t,n,a){return et(n,t)?n:Aa.current!==null?(e=Js(e,n,a),et(e,t)||(_e=!0),e):(Yt&42)===0||(Yt&1073741824)!==0&&(X&261930)===0?(_e=!0,e.memoizedState=n):(e=Sf(),H.lanes|=e,zn|=e,t)}function Lp(e,t,n,a,l){var o=Z.p;Z.p=o!==0&&8>o?o:8;var s=w.T,c={};w.T=c,Is(e,!1,t,n);try{var u=l(),p=w.S;if(p!==null&&p(c,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var v=cy(u,a);pl(e,t,v,$e(e))}else pl(e,t,a,$e(e))}catch(h){pl(e,t,{then:function(){},status:"rejected",reason:h},$e())}finally{Z.p=o,s!==null&&c.types!==null&&(s.types=c.types),w.T=s}}function gy(){}function Ir(e,t,n,a){if(e.tag!==5)throw Error(z(476));var l=wp(e).queue;Lp(e,l,t,Bn,n===null?gy:function(){return qp(e),n(a)})}function wp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Bn,baseState:Bn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:Bn},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qp(e){var t=wp(e);t.next===null&&(t=e.alternate.memoizedState),pl(e,t.next.queue,{},$e())}function Zs(){return De(Dl)}function jp(){return de().memoizedState}function Up(){return de().memoizedState}function yy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=$e();e=fn(n);var a=mn(t,e,n);a!==null&&(Fe(a,t,n),cl(a,t,n)),t={cache:Ms()},e.payload=t;return}t=t.return}}function _y(e,t,n){var a=$e();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},_i(e)?Gp(t,n):(n=Ds(e,t,n,a),n!==null&&(Fe(n,e,a),Yp(n,t,a)))}function Hp(e,t,n){var a=$e();pl(e,t,n,a)}function pl(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(_i(e))Gp(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,c=o(s,n);if(l.hasEagerState=!0,l.eagerState=c,et(c,s))return pi(e,t,l,0),$===null&&di(),!1}catch{}if(n=Ds(e,t,l,a),n!==null)return Fe(n,e,a),Yp(n,t,a),!0}return!1}function Is(e,t,n,a){if(a={lane:2,revertLane:lc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_i(e)){if(t)throw Error(z(479))}else t=Ds(e,n,a,2),t!==null&&Fe(t,e,2)}function _i(e){var t=e.alternate;return e===H||t!==null&&t===H}function Gp(e,t){Sa=Xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yp(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ed(e,n)}}var Rl={readContext:De,use:gi,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useLayoutEffect:re,useInsertionEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useSyncExternalStore:re,useId:re,useHostTransitionStatus:re,useFormState:re,useActionState:re,useOptimistic:re,useMemoCache:re,useCacheRefresh:re};Rl.useEffectEvent=re;var Fp={readContext:De,use:gi,useCallback:function(e,t){return Le().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Ru,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,To(4194308,4,Op.bind(null,t,e),n)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){To(4,2,e,t)},useMemo:function(e,t){var n=Le();t=t===void 0?null:t;var a=e();if(Yn){on(!0);try{e()}finally{on(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Le();if(n!==void 0){var l=n(t);if(Yn){on(!0);try{n(t)}finally{on(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=_y.bind(null,H,e),[a.memoizedState,e]},useRef:function(e){var t=Le();return e={current:e},t.memoizedState=e},useState:function(e){e=Jr(e);var t=e.queue,n=Hp.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Qs,useDeferredValue:function(e,t){var n=Le();return Js(n,e,t)},useTransition:function(){var e=Jr(!1);return e=Lp.bind(null,H,e.queue,!0,!1),Le().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=H,l=Le();if(Q){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),$===null)throw Error(z(349));(X&127)!==0||yp(a,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ru(bp.bind(null,a,o,e),[e]),a.flags|=2048,Da(9,{destroy:void 0},_p.bind(null,a,o,n,t),null),n},useId:function(){var e=Le(),t=$.identifierPrefix;if(Q){var n=xt,a=ht;n=(a&~(1<<32-We(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Vo++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=uy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zs,useFormState:zu,useActionState:zu,useOptimistic:function(e){var t=Le();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Is.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fs,useCacheRefresh:function(){return Le().memoizedState=yy.bind(null,H)},useEffectEvent:function(e){var t=Le(),n={impl:e};return t.memoizedState=n,function(){if((J&2)!==0)throw Error(z(440));return n.impl.apply(void 0,arguments)}}},Ps={readContext:De,use:gi,useCallback:kp,useContext:De,useEffect:Vs,useImperativeHandle:Np,useInsertionEffect:Ap,useLayoutEffect:Dp,useMemo:Mp,useReducer:zo,useRef:Rp,useState:function(){return zo(Ft)},useDebugValue:Qs,useDeferredValue:function(e,t){var n=de();return Bp(n,W.memoizedState,e,t)},useTransition:function(){var e=zo(Ft)[0],t=de().memoizedState;return[typeof e=="boolean"?e:Ul(e),t]},useSyncExternalStore:gp,useId:jp,useHostTransitionStatus:Zs,useFormState:Tu,useActionState:Tu,useOptimistic:function(e,t){var n=de();return xp(n,W,e,t)},useMemoCache:Fs,useCacheRefresh:Up};Ps.useEffectEvent=Ep;var Xp={readContext:De,use:gi,useCallback:kp,useContext:De,useEffect:Vs,useImperativeHandle:Np,useInsertionEffect:Ap,useLayoutEffect:Dp,useMemo:Mp,useReducer:ar,useRef:Rp,useState:function(){return ar(Ft)},useDebugValue:Qs,useDeferredValue:function(e,t){var n=de();return W===null?Js(n,e,t):Bp(n,W.memoizedState,e,t)},useTransition:function(){var e=ar(Ft)[0],t=de().memoizedState;return[typeof e=="boolean"?e:Ul(e),t]},useSyncExternalStore:gp,useId:jp,useHostTransitionStatus:Zs,useFormState:Cu,useActionState:Cu,useOptimistic:function(e,t){var n=de();return W!==null?xp(n,W,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Fs,useCacheRefresh:Up};Xp.useEffectEvent=Ep;function lr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pr={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=$e(),l=fn(a);l.payload=t,n!=null&&(l.callback=n),t=mn(e,l,a),t!==null&&(Fe(t,e,a),cl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=$e(),l=fn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=mn(e,l,a),t!==null&&(Fe(t,e,a),cl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),a=fn(n);a.tag=2,t!=null&&(a.callback=t),t=mn(e,a,n),t!==null&&(Fe(t,e,n),cl(t,e,n))}};function Eu(e,t,n,a,l,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,s):t.prototype&&t.prototype.isPureReactComponent?!xl(n,a)||!xl(l,o):!0}function Au(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Pr.enqueueReplaceState(t,t.state,null)}function Fn(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=le({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Vp(e){qo(e)}function Qp(e){console.error(e)}function Jp(e){qo(e)}function Qo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Du(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Kr(e,t,n){return n=fn(n),n.tag=3,n.payload={element:null},n.callback=function(){Qo(e,t)},n}function Zp(e){return e=fn(e),e.tag=3,e}function Ip(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var o=a.value;e.payload=function(){return l(o)},e.callback=function(){Du(t,n,a)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Du(t,n,a),typeof l!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function by(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&qa(t,n,l,!0),n=tt.current,n!==null){switch(n.tag){case 31:case 13:return ut===null?Ko():n.alternate===null&&se===0&&(se=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Go?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),gr(e,a,l)),!1;case 22:return n.flags|=65536,a===Go?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),gr(e,a,l)),!1}throw Error(z(435,n.tag))}return gr(e,a,l),Ko(),!1}if(Q)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==jr&&(e=Error(z(422),{cause:a}),zl(st(e,n)))):(a!==jr&&(t=Error(z(423),{cause:a}),zl(st(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=st(a,n),l=Kr(e.stateNode,a,l),nr(e,l),se!==4&&(se=2)),!1;var o=Error(z(520),{cause:a});if(o=st(o,n),gl===null?gl=[o]:gl.push(o),se!==4&&(se=2),t===null)return!0;a=st(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Kr(n.stateNode,a,e),nr(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(gn===null||!gn.has(o))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Zp(l),Ip(l,e,n,a),nr(n,l),!1}n=n.return}while(n!==null);return!1}var Ks=Error(z(461)),_e=!1;function Re(e,t,n,a){t.child=e===null?cp(t,null,n,a):Gn(t,e.child,n,a)}function Ou(e,t,n,a,l){n=n.render;var o=t.ref;if("ref"in a){var s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}else s=a;return Hn(t),a=Us(e,t,n,s,o,l),c=Hs(),e!==null&&!_e?(Gs(e,t,l),Xt(e,t,l)):(Q&&c&&Ns(t),t.flags|=1,Re(e,t,a,l),t.child)}function Nu(e,t,n,a,l){if(e===null){var o=n.type;return typeof o=="function"&&!Os(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,Pp(e,t,o,a,l)):(e=xo(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Ws(e,l)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:xl,n(s,a)&&e.ref===t.ref)return Xt(e,t,l)}return t.flags|=1,e=jt(o,a),e.ref=t.ref,e.return=t,t.child=e}function Pp(e,t,n,a,l){if(e!==null){var o=e.memoizedProps;if(xl(o,a)&&e.ref===t.ref)if(_e=!1,t.pendingProps=a=o,Ws(e,l))(e.flags&131072)!==0&&(_e=!0);else return t.lanes=e.lanes,Xt(e,t,l)}return Wr(e,t,n,a,l)}function Kp(e,t,n,a){var l=a.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~o}else a=0,t.child=null;return ku(e,t,o,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&So(t,o!==null?o.cachePool:null),o!==null?hu(t,o):Vr(),pp(t);else return a=t.lanes=536870912,ku(e,t,o!==null?o.baseLanes|n:n,n,a)}else o!==null?(So(t,o.cachePool),hu(t,o),an(t),t.memoizedState=null):(e!==null&&So(t,null),Vr(),an(t));return Re(e,t,l,n),t.child}function al(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ku(e,t,n,a,l){var o=Bs();return o=o===null?null:{parent:ye._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&So(t,null),Vr(),pp(t),e!==null&&qa(e,t,a,!0),t.childLanes=l,null}function Co(e,t){return t=Jo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Mu(e,t,n){return Gn(t,e.child,null,n),e=Co(t,t.pendingProps),e.flags|=2,Je(t),t.memoizedState=null,e}function vy(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Q){if(a.mode==="hidden")return e=Co(t,a),t.lanes=536870912,al(null,e);if(Qr(t),(e=ae)?(e=Xf(e,ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hn!==null?{id:ht,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},n=np(e),n.return=t,t.child=n,Ae=t,ae=null)):e=null,e===null)throw xn(t);return t.lanes=536870912,null}return Co(t,a)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Qr(t),l)if(t.flags&256)t.flags&=-257,t=Mu(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(z(558));else if(_e||qa(e,t,n,!1),l=(n&e.childLanes)!==0,_e||l){if(a=$,a!==null&&(s=Ad(a,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Jn(e,s),Fe(a,e,s),Ks;Ko(),t=Mu(e,t,n)}else e=o.treeContext,ae=dt(s.nextSibling),Ae=t,Q=!0,pn=null,ct=!1,e!==null&&lp(t,e),t=Co(t,a),t.flags|=4096;return t}return e=jt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ro(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(z(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Wr(e,t,n,a,l){return Hn(t),n=Us(e,t,n,a,void 0,l),a=Hs(),e!==null&&!_e?(Gs(e,t,l),Xt(e,t,l)):(Q&&a&&Ns(t),t.flags|=1,Re(e,t,n,l),t.child)}function Bu(e,t,n,a,l,o){return Hn(t),t.updateQueue=null,n=mp(t,a,n,l),fp(e),a=Hs(),e!==null&&!_e?(Gs(e,t,o),Xt(e,t,o)):(Q&&a&&Ns(t),t.flags|=1,Re(e,t,n,o),t.child)}function Lu(e,t,n,a,l){if(Hn(t),t.stateNode===null){var o=fa,s=n.contextType;typeof s=="object"&&s!==null&&(o=De(s)),o=new n(a,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Pr,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=a,o.state=t.memoizedState,o.refs={},ws(t),s=n.contextType,o.context=typeof s=="object"&&s!==null?De(s):fa,o.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(lr(t,n,s,a),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&Pr.enqueueReplaceState(o,o.state,null),dl(t,a,o,l),ul(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){o=t.stateNode;var c=t.memoizedProps,u=Fn(n,c);o.props=u;var p=o.context,v=n.contextType;s=fa,typeof v=="object"&&v!==null&&(s=De(v));var h=n.getDerivedStateFromProps;v=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c||p!==s)&&Au(t,o,a,s),en=!1;var b=t.memoizedState;o.state=b,dl(t,a,o,l),ul(),p=t.memoizedState,c||b!==p||en?(typeof h=="function"&&(lr(t,n,h,a),p=t.memoizedState),(u=en||Eu(t,n,u,a,b,p,s))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=p),o.props=a,o.state=p,o.context=s,a=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,Fr(e,t),s=t.memoizedProps,v=Fn(n,s),o.props=v,h=t.pendingProps,b=o.context,p=n.contextType,u=fa,typeof p=="object"&&p!==null&&(u=De(p)),c=n.getDerivedStateFromProps,(p=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||b!==u)&&Au(t,o,a,u),en=!1,b=t.memoizedState,o.state=b,dl(t,a,o,l),ul();var _=t.memoizedState;s!==h||b!==_||en||e!==null&&e.dependencies!==null&&Ho(e.dependencies)?(typeof c=="function"&&(lr(t,n,c,a),_=t.memoizedState),(v=en||Eu(t,n,v,a,b,_,u)||e!==null&&e.dependencies!==null&&Ho(e.dependencies))?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,_,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,_,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=_),o.props=a,o.state=_,o.context=u,a=v):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),a=!1)}return o=a,Ro(e,t),a=(t.flags&128)!==0,o||a?(o=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&a?(t.child=Gn(t,e.child,null,l),t.child=Gn(t,null,n,l)):Re(e,t,n,l),t.memoizedState=o.state,e=t.child):e=Xt(e,t,l),e}function wu(e,t,n,a){return Un(),t.flags|=256,Re(e,t,n,a),t.child}var or={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ir(e){return{baseLanes:e,cachePool:ip()}}function rr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ie),e}function Wp(e,t,n){var a=t.pendingProps,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(ue.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(Q){if(l?nn(t):an(t),(e=ae)?(e=Xf(e,ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hn!==null?{id:ht,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},n=np(e),n.return=t,t.child=n,Ae=t,ae=null)):e=null,e===null)throw xn(t);return ps(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,l?(an(t),l=t.mode,c=Jo({mode:"hidden",children:c},l),a=Ln(a,l,n,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=ir(n),a.childLanes=rr(e,s,n),t.memoizedState=or,al(null,a)):(nn(t),$r(t,c))}var u=e.memoizedState;if(u!==null&&(c=u.dehydrated,c!==null)){if(o)t.flags&256?(nn(t),t.flags&=-257,t=sr(e,t,n)):t.memoizedState!==null?(an(t),t.child=e.child,t.flags|=128,t=null):(an(t),c=a.fallback,l=t.mode,a=Jo({mode:"visible",children:a.children},l),c=Ln(c,l,n,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,Gn(t,e.child,null,n),a=t.child,a.memoizedState=ir(n),a.childLanes=rr(e,s,n),t.memoizedState=or,t=al(null,a));else if(nn(t),ps(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var p=s.dgst;s=p,a=Error(z(419)),a.stack="",a.digest=s,zl({value:a,source:null,stack:null}),t=sr(e,t,n)}else if(_e||qa(e,t,n,!1),s=(n&e.childLanes)!==0,_e||s){if(s=$,s!==null&&(a=Ad(s,n),a!==0&&a!==u.retryLane))throw u.retryLane=a,Jn(e,a),Fe(s,e,a),Ks;ds(c)||Ko(),t=sr(e,t,n)}else ds(c)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,ae=dt(c.nextSibling),Ae=t,Q=!0,pn=null,ct=!1,e!==null&&lp(t,e),t=$r(t,a.children),t.flags|=4096);return t}return l?(an(t),c=a.fallback,l=t.mode,u=e.child,p=u.sibling,a=jt(u,{mode:"hidden",children:a.children}),a.subtreeFlags=u.subtreeFlags&65011712,p!==null?c=jt(p,c):(c=Ln(c,l,n,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,al(null,a),a=t.child,c=e.child.memoizedState,c===null?c=ir(n):(l=c.cachePool,l!==null?(u=ye._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=ip(),c={baseLanes:c.baseLanes|n,cachePool:l}),a.memoizedState=c,a.childLanes=rr(e,s,n),t.memoizedState=or,al(e.child,a)):(nn(t),n=e.child,e=n.sibling,n=jt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function $r(e,t){return t=Jo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Jo(e,t){return e=Ze(22,e,null,t),e.lanes=0,e}function sr(e,t,n){return Gn(t,e.child,null,n),e=$r(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qu(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Hr(e.return,t,n)}function cr(e,t,n,a,l,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=l,s.treeForkCount=o)}function $p(e,t,n){var a=t.pendingProps,l=a.revealOrder,o=a.tail;a=a.children;var s=ue.current,c=(s&2)!==0;if(c?(s=s&1|2,t.flags|=128):s&=1,ee(ue,s),Re(e,t,a,n),a=Q?Sl:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qu(e,n,t);else if(e.tag===19)qu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Fo(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),cr(t,!1,l,n,o,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Fo(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}cr(t,!0,n,null,o,a);break;case"together":cr(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(qa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ws(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ho(e)))}function hy(e,t,n){switch(t.tag){case 3:Mo(t,t.stateNode.containerInfo),tn(t,ye,e.memoizedState.cache),Un();break;case 27:case 5:Er(t);break;case 4:Mo(t,t.stateNode.containerInfo);break;case 10:tn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qr(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(nn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Wp(e,t,n):(nn(t),e=Xt(e,t,n),e!==null?e.sibling:null);nn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(qa(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return $p(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ee(ue,ue.current),a)break;return null;case 22:return t.lanes=0,Kp(e,t,n,t.pendingProps);case 24:tn(t,ye,e.memoizedState.cache)}return Xt(e,t,n)}function ef(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)_e=!0;else{if(!Ws(e,n)&&(t.flags&128)===0)return _e=!1,hy(e,t,n);_e=(e.flags&131072)!==0}else _e=!1,Q&&(t.flags&1048576)!==0&&ap(t,Sl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=kn(t.elementType),t.type=e,typeof e=="function")Os(e)?(a=Fn(e,a),t.tag=1,t=Lu(null,t,e,a,n)):(t.tag=0,t=Wr(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===ys){t.tag=11,t=Ou(null,t,e,a,n);break e}else if(l===_s){t.tag=14,t=Nu(null,t,e,a,n);break e}}throw t=Cr(e)||e,Error(z(306,t,""))}}return t;case 0:return Wr(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Fn(a,t.pendingProps),Lu(e,t,a,l,n);case 3:e:{if(Mo(t,t.stateNode.containerInfo),e===null)throw Error(z(387));a=t.pendingProps;var o=t.memoizedState;l=o.element,Fr(e,t),dl(t,a,null,n);var s=t.memoizedState;if(a=s.cache,tn(t,ye,a),a!==o.cache&&Gr(t,[ye],n,!0),ul(),a=s.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=wu(e,t,a,n);break e}else if(a!==l){l=st(Error(z(424)),t),zl(l),t=wu(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ae=dt(e.firstChild),Ae=t,Q=!0,pn=null,ct=!0,n=cp(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),a===l){t=Xt(e,t,n);break e}Re(e,t,a,n)}t=t.child}return t;case 26:return Ro(e,t),e===null?(n=od(t.type,null,t.pendingProps,null))?t.memoizedState=n:Q||(n=t.type,e=t.pendingProps,a=ti(dn.current).createElement(n),a[Ee]=t,a[Xe]=e,Oe(a,n,e),Se(a),t.stateNode=a):t.memoizedState=od(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Er(t),e===null&&Q&&(a=t.stateNode=Vf(t.type,t.pendingProps,dn.current),Ae=t,ct=!0,l=ae,Cn(t.type)?(fs=l,ae=dt(a.firstChild)):ae=l),Re(e,t,t.pendingProps.children,n),Ro(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Q&&((l=a=ae)&&(a=Zy(a,t.type,t.pendingProps,ct),a!==null?(t.stateNode=a,Ae=t,ae=dt(a.firstChild),ct=!1,l=!0):l=!1),l||xn(t)),Er(t),l=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,a=o.children,cs(l,o)?a=null:s!==null&&cs(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=Us(e,t,dy,null,null,n),Dl._currentValue=l),Ro(e,t),Re(e,t,a,n),t.child;case 6:return e===null&&Q&&((e=n=ae)&&(n=Iy(n,t.pendingProps,ct),n!==null?(t.stateNode=n,Ae=t,ae=null,e=!0):e=!1),e||xn(t)),null;case 13:return Wp(e,t,n);case 4:return Mo(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Gn(t,null,a,n):Re(e,t,a,n),t.child;case 11:return Ou(e,t,t.type,t.pendingProps,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,tn(t,t.type,a.value),Re(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Hn(t),l=De(l),a=a(l),t.flags|=1,Re(e,t,a,n),t.child;case 14:return Nu(e,t,t.type,t.pendingProps,n);case 15:return Pp(e,t,t.type,t.pendingProps,n);case 19:return $p(e,t,n);case 31:return vy(e,t,n);case 22:return Kp(e,t,n,t.pendingProps);case 24:return Hn(t),a=De(ye),e===null?(l=Bs(),l===null&&(l=$,o=Ms(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=n),l=o),t.memoizedState={parent:a,cache:l},ws(t),tn(t,ye,l)):((e.lanes&n)!==0&&(Fr(e,t),dl(t,null,null,n),ul()),l=e.memoizedState,o=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),tn(t,ye,a)):(a=o.cache,tn(t,ye,a),a!==l.cache&&Gr(t,[ye],n,!0))),Re(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(z(156,t.tag))}function Dt(e){e.flags|=4}function ur(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Cf())e.flags|=8192;else throw qn=Go,Ls}else e.flags&=-16777217}function ju(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zf(t))if(Cf())e.flags|=8192;else throw qn=Go,Ls}function co(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Cd():536870912,e.lanes|=t,Oa|=t)}function Pa(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function xy(e,t,n){var a=t.pendingProps;switch(ks(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return ne(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ut(ye),Ta(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ta(t)?Dt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tr())),ne(t),null;case 26:var l=t.type,o=t.memoizedState;return e===null?(Dt(t),o!==null?(ne(t),ju(t,o)):(ne(t),ur(t,l,null,a,n))):o?o!==e.memoizedState?(Dt(t),ne(t),ju(t,o)):(ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Dt(t),ne(t),ur(t,l,e,a,n)),null;case 27:if(Bo(t),n=dn.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Dt(t);else{if(!a){if(t.stateNode===null)throw Error(z(166));return ne(t),null}e=zt.current,ta(t)?fu(t,e):(e=Vf(l,a,n),t.stateNode=e,Dt(t))}return ne(t),null;case 5:if(Bo(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Dt(t);else{if(!a){if(t.stateNode===null)throw Error(z(166));return ne(t),null}if(o=zt.current,ta(t))fu(t,o);else{var s=ti(dn.current);switch(o){case 1:o=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=s.createElement("div"),o.innerHTML="<script><\\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?o.multiple=!0:a.size&&(o.size=a.size);break;default:o=typeof a.is=="string"?s.createElement(l,{is:a.is}):s.createElement(l)}}o[Ee]=t,o[Xe]=a;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;e:switch(Oe(o,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Dt(t)}}return ne(t),ur(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Dt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(z(166));if(e=dn.current,ta(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=Ae,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Ee]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Gf(e.nodeValue,n)),e||xn(t,!0)}else e=ti(e).createTextNode(a),e[Ee]=t,t.stateNode=e}return ne(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=ta(t),n!==null){if(e===null){if(!a)throw Error(z(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(557));e[Ee]=t}else Un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ne(t),e=!1}else n=tr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Je(t),t):(Je(t),null);if((t.flags&128)!==0)throw Error(z(558))}return ne(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ta(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(z(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(z(317));l[Ee]=t}else Un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ne(t),l=!1}else l=tr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Je(t),t):(Je(t),null)}return Je(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),co(t,t.updateQueue),ne(t),null);case 4:return Ta(),e===null&&oc(t.stateNode.containerInfo),ne(t),null;case 10:return Ut(t.type),ne(t),null;case 19:if(ze(ue),a=t.memoizedState,a===null)return ne(t),null;if(l=(t.flags&128)!==0,o=a.rendering,o===null)if(l)Pa(a,!1);else{if(se!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Fo(e),o!==null){for(t.flags|=128,Pa(a,!1),e=o.updateQueue,t.updateQueue=e,co(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)tp(n,e),n=n.sibling;return ee(ue,ue.current&1|2),Q&&Mt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Pe()>Io&&(t.flags|=128,l=!0,Pa(a,!1),t.lanes=4194304)}else{if(!l)if(e=Fo(o),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,co(t,e),Pa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Q)return ne(t),null}else 2*Pe()-a.renderingStartTime>Io&&n!==536870912&&(t.flags|=128,l=!0,Pa(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(e=a.last,e!==null?e.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Pe(),e.sibling=null,n=ue.current,ee(ue,l?n&1|2:n&1),Q&&Mt(t,a.treeForkCount),e):(ne(t),null);case 22:case 23:return Je(t),qs(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),n=t.updateQueue,n!==null&&co(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&ze(wn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ut(ye),ne(t),null;case 25:return null;case 30:return null}throw Error(z(156,t.tag))}function Sy(e,t){switch(ks(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ut(ye),Ta(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Bo(t),null;case 31:if(t.memoizedState!==null){if(Je(t),t.alternate===null)throw Error(z(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Je(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(ue),null;case 4:return Ta(),null;case 10:return Ut(t.type),null;case 22:case 23:return Je(t),qs(),e!==null&&ze(wn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ut(ye),null;case 25:return null;default:return null}}function tf(e,t){switch(ks(t),t.tag){case 3:Ut(ye),Ta();break;case 26:case 27:case 5:Bo(t);break;case 4:Ta();break;case 31:t.memoizedState!==null&&Je(t);break;case 13:Je(t);break;case 19:ze(ue);break;case 10:Ut(t.type);break;case 22:case 23:Je(t),qs(),e!==null&&ze(wn);break;case 24:Ut(ye)}}function Hl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var o=n.create,s=n.inst;a=o(),s.destroy=a}n=n.next}while(n!==l)}}catch(c){P(t,t.return,c)}}function Sn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var o=l.next;a=o;do{if((a.tag&e)===e){var s=a.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,l=t;var u=n,p=c;try{p()}catch(v){P(l,u,v)}}}a=a.next}while(a!==o)}}catch(v){P(t,t.return,v)}}function nf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{dp(t,n)}catch(a){P(e,e.return,a)}}}function af(e,t,n){n.props=Fn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){P(e,t,a)}}function fl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){P(e,t,l)}}function St(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){P(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){P(e,t,l)}else n.current=null}function lf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){P(e,e.return,l)}}function dr(e,t,n){try{var a=e.stateNode;Yy(a,e.type,n,t),a[Xe]=t}catch(l){P(e,e.return,l)}}function of(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cn(e.type)||e.tag===4}function pr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||of(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function es(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wt));else if(a!==4&&(a===27&&Cn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(es(e,t,n),e=e.sibling;e!==null;)es(e,t,n),e=e.sibling}function Zo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Cn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zo(e,t,n),e=e.sibling;e!==null;)Zo(e,t,n),e=e.sibling}function rf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Oe(t,a,n),t[Ee]=e,t[Xe]=n}catch(o){P(e,e.return,o)}}var Bt=!1,ge=!1,fr=!1,Uu=typeof WeakSet=="function"?WeakSet:Set,xe=null;function zy(e,t){if(e=e.containerInfo,rs=oi,e=Jd(e),Es(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,c=-1,u=-1,p=0,v=0,h=e,b=null;t:for(;;){for(var _;h!==n||l!==0&&h.nodeType!==3||(c=s+l),h!==o||a!==0&&h.nodeType!==3||(u=s+a),h.nodeType===3&&(s+=h.nodeValue.length),(_=h.firstChild)!==null;)b=h,h=_;for(;;){if(h===e)break t;if(b===n&&++p===l&&(c=s),b===o&&++v===a&&(u=s),(_=h.nextSibling)!==null)break;h=b,b=h.parentNode}h=_}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ss={focusedElem:e,selectionRange:n},oi=!1,xe=t;xe!==null;)if(t=xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,xe=e;else for(;xe!==null;){switch(t=xe,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,l=o.memoizedProps,o=o.memoizedState,a=n.stateNode;try{var y=Fn(n.type,l);e=a.getSnapshotBeforeUpdate(y,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(T){P(n,n.return,T)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)us(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":us(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(z(163))}if(e=t.sibling,e!==null){e.return=t.return,xe=e;break}xe=t.return}}function sf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Nt(e,n),a&4&&Hl(5,n);break;case 1:if(Nt(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){P(n,n.return,s)}else{var l=Fn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){P(n,n.return,s)}}a&64&&nf(n),a&512&&fl(n,n.return);break;case 3:if(Nt(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{dp(e,t)}catch(s){P(n,n.return,s)}}break;case 27:t===null&&a&4&&rf(n);case 26:case 5:Nt(e,n),t===null&&a&4&&lf(n),a&512&&fl(n,n.return);break;case 12:Nt(e,n);break;case 31:Nt(e,n),a&4&&df(e,n);break;case 13:Nt(e,n),a&4&&pf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ky.bind(null,n),Py(e,n))));break;case 22:if(a=n.memoizedState!==null||Bt,!a){t=t!==null&&t.memoizedState!==null||ge,l=Bt;var o=ge;Bt=a,(ge=t)&&!o?kt(e,n,(n.subtreeFlags&8772)!==0):Nt(e,n),Bt=l,ge=o}break;case 30:break;default:Nt(e,n)}}function cf(e){var t=e.alternate;t!==null&&(e.alternate=null,cf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ie=null,Ge=!1;function Ot(e,t,n){for(n=n.child;n!==null;)uf(e,t,n),n=n.sibling}function uf(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 26:ge||St(n,t),Ot(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ge||St(n,t);var a=ie,l=Ge;Cn(n.type)&&(ie=n.stateNode,Ge=!1),Ot(e,t,n),_l(n.stateNode),ie=a,Ge=l;break;case 5:ge||St(n,t);case 6:if(a=ie,l=Ge,ie=null,Ot(e,t,n),ie=a,Ge=l,ie!==null)if(Ge)try{(ie.nodeType===9?ie.body:ie.nodeName==="HTML"?ie.ownerDocument.body:ie).removeChild(n.stateNode)}catch(o){P(n,t,o)}else try{ie.removeChild(n.stateNode)}catch(o){P(n,t,o)}break;case 18:ie!==null&&(Ge?(e=ie,ed(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ba(e)):ed(ie,n.stateNode));break;case 4:a=ie,l=Ge,ie=n.stateNode.containerInfo,Ge=!0,Ot(e,t,n),ie=a,Ge=l;break;case 0:case 11:case 14:case 15:Sn(2,n,t),ge||Sn(4,n,t),Ot(e,t,n);break;case 1:ge||(St(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&af(n,t,a)),Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:ge=(a=ge)||n.memoizedState!==null,Ot(e,t,n),ge=a;break;default:Ot(e,t,n)}}function df(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ba(e)}catch(n){P(t,t.return,n)}}}function pf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ba(e)}catch(n){P(t,t.return,n)}}function Ty(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Uu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Uu),t;default:throw Error(z(435,e.tag))}}function uo(e,t){var n=Ty(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=My.bind(null,e,a);a.then(l,l)}})}function Ue(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],o=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 27:if(Cn(c.type)){ie=c.stateNode,Ge=!1;break e}break;case 5:ie=c.stateNode,Ge=!1;break e;case 3:case 4:ie=c.stateNode.containerInfo,Ge=!0;break e}c=c.return}if(ie===null)throw Error(z(160));uf(o,s,l),ie=null,Ge=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ff(t,e),t=t.sibling}var gt=null;function ff(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ue(t,e),He(e),a&4&&(Sn(3,e,e.return),Hl(3,e),Sn(5,e,e.return));break;case 1:Ue(t,e),He(e),a&512&&(ge||n===null||St(n,n.return)),a&64&&Bt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=gt;if(Ue(t,e),He(e),a&512&&(ge||n===null||St(n,n.return)),a&4){var o=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":o=l.getElementsByTagName("title")[0],(!o||o[wl]||o[Ee]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(a),l.head.insertBefore(o,l.querySelector("head > title"))),Oe(o,a,n),o[Ee]=e,Se(o),a=o;break e;case"link":var s=rd("link","href",l).get(a+(n.href||""));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break t}}o=l.createElement(a),Oe(o,a,n),l.head.appendChild(o);break;case"meta":if(s=rd("meta","content",l).get(a+(n.content||""))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(c,1);break t}}o=l.createElement(a),Oe(o,a,n),l.head.appendChild(o);break;default:throw Error(z(468,a))}o[Ee]=e,Se(o),a=o}e.stateNode=a}else sd(l,e.type,e.stateNode);else e.stateNode=id(l,a,e.memoizedProps);else o!==a?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,a===null?sd(l,e.type,e.stateNode):id(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&dr(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ue(t,e),He(e),a&512&&(ge||n===null||St(n,n.return)),n!==null&&a&4&&dr(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ue(t,e),He(e),a&512&&(ge||n===null||St(n,n.return)),e.flags&32){l=e.stateNode;try{Ra(l,"")}catch(y){P(e,e.return,y)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,dr(e,l,n!==null?n.memoizedProps:l)),a&1024&&(fr=!0);break;case 6:if(Ue(t,e),He(e),a&4){if(e.stateNode===null)throw Error(z(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(y){P(e,e.return,y)}}break;case 3:if(Do=null,l=gt,gt=ni(t.containerInfo),Ue(t,e),gt=l,He(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ba(t.containerInfo)}catch(y){P(e,e.return,y)}fr&&(fr=!1,mf(e));break;case 4:a=gt,gt=ni(e.stateNode.containerInfo),Ue(t,e),He(e),gt=a;break;case 12:Ue(t,e),He(e);break;case 31:Ue(t,e),He(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,uo(e,a)));break;case 13:Ue(t,e),He(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(bi=Pe()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,uo(e,a)));break;case 22:l=e.memoizedState!==null;var u=n!==null&&n.memoizedState!==null,p=Bt,v=ge;if(Bt=p||l,ge=v||u,Ue(t,e),ge=v,Bt=p,He(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||u||Bt||ge||Mn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){u=n=t;try{if(o=u.stateNode,l)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{c=u.stateNode;var h=u.memoizedProps.style,b=h!=null&&h.hasOwnProperty("display")?h.display:null;c.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(y){P(u,u.return,y)}}}else if(t.tag===6){if(n===null){u=t;try{u.stateNode.nodeValue=l?"":u.memoizedProps}catch(y){P(u,u.return,y)}}}else if(t.tag===18){if(n===null){u=t;try{var _=u.stateNode;l?td(_,!0):td(u.stateNode,!1)}catch(y){P(u,u.return,y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,uo(e,n))));break;case 19:Ue(t,e),He(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,uo(e,a)));break;case 30:break;case 21:break;default:Ue(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(of(a)){n=a;break}a=a.return}if(n==null)throw Error(z(160));switch(n.tag){case 27:var l=n.stateNode,o=pr(e);Zo(e,o,l);break;case 5:var s=n.stateNode;n.flags&32&&(Ra(s,""),n.flags&=-33);var c=pr(e);Zo(e,c,s);break;case 3:case 4:var u=n.stateNode.containerInfo,p=pr(e);es(e,p,u);break;default:throw Error(z(161))}}catch(v){P(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;mf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sf(e,t.alternate,t),t=t.sibling}function Mn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Sn(4,t,t.return),Mn(t);break;case 1:St(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&af(t,t.return,n),Mn(t);break;case 27:_l(t.stateNode);case 26:case 5:St(t,t.return),Mn(t);break;case 22:t.memoizedState===null&&Mn(t);break;case 30:Mn(t);break;default:Mn(t)}e=e.sibling}}function kt(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,o=t,s=o.flags;switch(o.tag){case 0:case 11:case 15:kt(l,o,n),Hl(4,o);break;case 1:if(kt(l,o,n),a=o,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(p){P(a,a.return,p)}if(a=o,l=a.updateQueue,l!==null){var c=a.stateNode;try{var u=l.shared.hiddenCallbacks;if(u!==null)for(l.shared.hiddenCallbacks=null,l=0;l<u.length;l++)up(u[l],c)}catch(p){P(a,a.return,p)}}n&&s&64&&nf(o),fl(o,o.return);break;case 27:rf(o);case 26:case 5:kt(l,o,n),n&&a===null&&s&4&&lf(o),fl(o,o.return);break;case 12:kt(l,o,n);break;case 31:kt(l,o,n),n&&s&4&&df(l,o);break;case 13:kt(l,o,n),n&&s&4&&pf(l,o);break;case 22:o.memoizedState===null&&kt(l,o,n),fl(o,o.return);break;case 30:break;default:kt(l,o,n)}t=t.sibling}}function $s(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&jl(n))}function ec(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jl(e))}function mt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gf(e,t,n,a),t=t.sibling}function gf(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:mt(e,t,n,a),l&2048&&Hl(9,t);break;case 1:mt(e,t,n,a);break;case 3:mt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jl(e)));break;case 12:if(l&2048){mt(e,t,n,a),e=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c=="function"&&c(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){P(t,t.return,u)}}else mt(e,t,n,a);break;case 31:mt(e,t,n,a);break;case 13:mt(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState!==null?o._visibility&2?mt(e,t,n,a):ml(e,t):o._visibility&2?mt(e,t,n,a):(o._visibility|=2,aa(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&$s(s,t);break;case 24:mt(e,t,n,a),l&2048&&ec(t.alternate,t);break;default:mt(e,t,n,a)}}function aa(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,s=t,c=n,u=a,p=s.flags;switch(s.tag){case 0:case 11:case 15:aa(o,s,c,u,l),Hl(8,s);break;case 23:break;case 22:var v=s.stateNode;s.memoizedState!==null?v._visibility&2?aa(o,s,c,u,l):ml(o,s):(v._visibility|=2,aa(o,s,c,u,l)),l&&p&2048&&$s(s.alternate,s);break;case 24:aa(o,s,c,u,l),l&&p&2048&&ec(s.alternate,s);break;default:aa(o,s,c,u,l)}t=t.sibling}}function ml(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:ml(n,a),l&2048&&$s(a.alternate,a);break;case 24:ml(n,a),l&2048&&ec(a.alternate,a);break;default:ml(n,a)}t=t.sibling}}var ll=8192;function na(e,t,n){if(e.subtreeFlags&ll)for(e=e.child;e!==null;)yf(e,t,n),e=e.sibling}function yf(e,t,n){switch(e.tag){case 26:na(e,t,n),e.flags&ll&&e.memoizedState!==null&&s_(n,gt,e.memoizedState,e.memoizedProps);break;case 5:na(e,t,n);break;case 3:case 4:var a=gt;gt=ni(e.stateNode.containerInfo),na(e,t,n),gt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ll,ll=16777216,na(e,t,n),ll=a):na(e,t,n));break;default:na(e,t,n)}}function _f(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ka(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];xe=a,vf(a,e)}_f(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bf(e),e=e.sibling}function bf(e){switch(e.tag){case 0:case 11:case 15:Ka(e),e.flags&2048&&Sn(9,e,e.return);break;case 3:Ka(e);break;case 12:Ka(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Eo(e)):Ka(e);break;default:Ka(e)}}function Eo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];xe=a,vf(a,e)}_f(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sn(8,t,t.return),Eo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Eo(t));break;default:Eo(t)}e=e.sibling}}function vf(e,t){for(;xe!==null;){var n=xe;switch(n.tag){case 0:case 11:case 15:Sn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:jl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,xe=a;else e:for(n=e;xe!==null;){a=xe;var l=a.sibling,o=a.return;if(cf(a),a===n){xe=null;break e}if(l!==null){l.return=o,xe=l;break e}xe=o}}}var Cy={getCacheForType:function(e){var t=De(ye),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return De(ye).controller.signal}},Ry=typeof WeakMap=="function"?WeakMap:Map,J=0,$=null,F=null,X=0,I=0,Qe=null,sn=!1,Ua=!1,tc=!1,Vt=0,se=0,zn=0,jn=0,nc=0,Ie=0,Oa=0,gl=null,Ye=null,ts=!1,bi=0,hf=0,Io=1/0,Po=null,gn=null,ve=0,yn=null,Na=null,Ht=0,ns=0,as=null,xf=null,yl=0,ls=null;function $e(){return(J&2)!==0&&X!==0?X&-X:w.T!==null?lc():Dd()}function Sf(){if(Ie===0)if((X&536870912)===0||Q){var e=eo;eo<<=1,(eo&3932160)===0&&(eo=262144),Ie=e}else Ie=536870912;return e=tt.current,e!==null&&(e.flags|=32),Ie}function Fe(e,t,n){(e===$&&(I===2||I===9)||e.cancelPendingCommit!==null)&&(ka(e,0),cn(e,X,Ie,!1)),Ll(e,n),((J&2)===0||e!==$)&&(e===$&&((J&2)===0&&(jn|=n),se===4&&cn(e,X,Ie,!1)),Ct(e))}function zf(e,t,n){if((J&6)!==0)throw Error(z(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Bl(e,t),l=a?Dy(e,t):mr(e,t,!0),o=a;do{if(l===0){Ua&&!a&&cn(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Ey(n)){l=mr(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var c=e;l=gl;var u=c.current.memoizedState.isDehydrated;if(u&&(ka(c,s).flags|=256),s=mr(c,s,!1),s!==2){if(tc&&!u){c.errorRecoveryDisabledLanes|=o,jn|=o,l=4;break e}o=Ye,Ye=l,o!==null&&(Ye===null?Ye=o:Ye.push.apply(Ye,o))}l=s}if(o=!1,l!==2)continue}}if(l===1){ka(e,0),cn(e,t,0,!0);break}e:{switch(a=e,o=l,o){case 0:case 1:throw Error(z(345));case 4:if((t&4194048)!==t)break;case 6:cn(a,t,Ie,!sn);break e;case 2:Ye=null;break;case 3:case 5:break;default:throw Error(z(329))}if((t&62914560)===t&&(l=bi+300-Pe(),10<l)){if(cn(a,t,Ie,!sn),ri(a,0,!0)!==0)break e;Ht=t,a.timeoutHandle=Ff(Hu.bind(null,a,n,Ye,Po,ts,t,Ie,jn,Oa,sn,o,"Throttled",-0,0),l);break e}Hu(a,n,Ye,Po,ts,t,Ie,jn,Oa,sn,o,null,-0,0)}}break}while(!0);Ct(e)}function Hu(e,t,n,a,l,o,s,c,u,p,v,h,b,_){if(e.timeoutHandle=-1,h=t.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wt},yf(t,o,h);var y=(o&62914560)===o?bi-Pe():(o&4194048)===o?hf-Pe():0;if(y=c_(h,y),y!==null){Ht=o,e.cancelPendingCommit=y(Yu.bind(null,e,t,o,n,a,l,s,c,u,v,h,null,b,_)),cn(e,o,s,!p);return}}Yu(e,t,o,n,a,l,s,c,u)}function Ey(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],o=l.getSnapshot;l=l.value;try{if(!et(o(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t,n,a){t&=~nc,t&=~jn,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var o=31-We(l),s=1<<o;a[o]=-1,l&=~s}n!==0&&Rd(e,n,t)}function vi(){return(J&6)===0?(Gl(0,!1),!1):!0}function ac(){if(F!==null){if(I===0)var e=F.return;else e=F,qt=Zn=null,Ys(e),xa=null,Tl=0,e=F;for(;e!==null;)tf(e.alternate,e),e=e.return;F=null}}function ka(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Vy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ht=0,ac(),$=e,F=n=jt(e.current,null),X=t,I=0,Qe=null,sn=!1,Ua=Bl(e,t),tc=!1,Oa=Ie=nc=jn=zn=se=0,Ye=gl=null,ts=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-We(a),o=1<<l;t|=e[l],a&=~o}return Vt=t,di(),n}function Tf(e,t){H=null,w.H=Rl,t===ja||t===fi?(t=bu(),I=3):t===Ls?(t=bu(),I=4):I=t===Ks?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Qe=t,F===null&&(se=1,Qo(e,st(t,e.current)))}function Cf(){var e=tt.current;return e===null?!0:(X&4194048)===X?ut===null:(X&62914560)===X||(X&536870912)!==0?e===ut:!1}function Rf(){var e=w.H;return w.H=Rl,e===null?Rl:e}function Ef(){var e=w.A;return w.A=Cy,e}function Ko(){se=4,sn||(X&4194048)!==X&&tt.current!==null||(Ua=!0),(zn&134217727)===0&&(jn&134217727)===0||$===null||cn($,X,Ie,!1)}function mr(e,t,n){var a=J;J|=2;var l=Rf(),o=Ef();($!==e||X!==t)&&(Po=null,ka(e,t)),t=!1;var s=se;e:do try{if(I!==0&&F!==null){var c=F,u=Qe;switch(I){case 8:ac(),s=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var p=I;if(I=0,Qe=null,ya(e,c,u,p),n&&Ua){s=0;break e}break;default:p=I,I=0,Qe=null,ya(e,c,u,p)}}Ay(),s=se;break}catch(v){Tf(e,v)}while(!0);return t&&e.shellSuspendCounter++,qt=Zn=null,J=a,w.H=l,w.A=o,F===null&&($=null,X=0,di()),s}function Ay(){for(;F!==null;)Af(F)}function Dy(e,t){var n=J;J|=2;var a=Rf(),l=Ef();$!==e||X!==t?(Po=null,Io=Pe()+500,ka(e,t)):Ua=Bl(e,t);e:do try{if(I!==0&&F!==null){t=F;var o=Qe;t:switch(I){case 1:I=0,Qe=null,ya(e,t,o,1);break;case 2:case 9:if(_u(o)){I=0,Qe=null,Gu(t);break}t=function(){I!==2&&I!==9||$!==e||(I=7),Ct(e)},o.then(t,t);break e;case 3:I=7;break e;case 4:I=5;break e;case 7:_u(o)?(I=0,Qe=null,Gu(t)):(I=0,Qe=null,ya(e,t,o,7));break;case 5:var s=null;switch(F.tag){case 26:s=F.memoizedState;case 5:case 27:var c=F;if(s?Zf(s):c.stateNode.complete){I=0,Qe=null;var u=c.sibling;if(u!==null)F=u;else{var p=c.return;p!==null?(F=p,hi(p)):F=null}break t}}I=0,Qe=null,ya(e,t,o,5);break;case 6:I=0,Qe=null,ya(e,t,o,6);break;case 8:ac(),se=6;break e;default:throw Error(z(462))}}Oy();break}catch(v){Tf(e,v)}while(!0);return qt=Zn=null,w.H=a,w.A=l,J=n,F!==null?0:($=null,X=0,di(),se)}function Oy(){for(;F!==null&&!$m();)Af(F)}function Af(e){var t=ef(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?hi(e):F=t}function Gu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Bu(n,t,t.pendingProps,t.type,void 0,X);break;case 11:t=Bu(n,t,t.pendingProps,t.type.render,t.ref,X);break;case 5:Ys(t);default:tf(n,t),t=F=tp(t,Vt),t=ef(n,t,Vt)}e.memoizedProps=e.pendingProps,t===null?hi(e):F=t}function ya(e,t,n,a){qt=Zn=null,Ys(t),xa=null,Tl=0;var l=t.return;try{if(by(e,l,t,n,X)){se=1,Qo(e,st(n,e.current)),F=null;return}}catch(o){if(l!==null)throw F=l,o;se=1,Qo(e,st(n,e.current)),F=null;return}t.flags&32768?(Q||a===1?e=!0:Ua||(X&536870912)!==0?e=!1:(sn=e=!0,(a===2||a===9||a===3||a===6)&&(a=tt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Df(t,e)):hi(t)}function hi(e){var t=e;do{if((t.flags&32768)!==0){Df(t,sn);return}e=t.return;var n=xy(t.alternate,t,Vt);if(n!==null){F=n;return}if(t=t.sibling,t!==null){F=t;return}F=t=e}while(t!==null);se===0&&(se=5)}function Df(e,t){do{var n=Sy(e.alternate,e);if(n!==null){n.flags&=32767,F=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){F=e;return}F=e=n}while(e!==null);se=6,F=null}function Yu(e,t,n,a,l,o,s,c,u){e.cancelPendingCommit=null;do xi();while(ve!==0);if((J&6)!==0)throw Error(z(327));if(t!==null){if(t===e.current)throw Error(z(177));if(o=t.lanes|t.childLanes,o|=As,cg(e,n,o,s,c,u),e===$&&(F=$=null,X=0),Na=t,yn=e,Ht=n,ns=o,as=l,xf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,By(Lo,function(){return Bf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=w.T,w.T=null,l=Z.p,Z.p=2,s=J,J|=4;try{zy(e,t,n)}finally{J=s,Z.p=l,w.T=a}}ve=1,Of(),Nf(),kf()}}function Of(){if(ve===1){ve=0;var e=yn,t=Na,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=w.T,w.T=null;var a=Z.p;Z.p=2;var l=J;J|=4;try{ff(t,e);var o=ss,s=Jd(e.containerInfo),c=o.focusedElem,u=o.selectionRange;if(s!==c&&c&&c.ownerDocument&&Qd(c.ownerDocument.documentElement,c)){if(u!==null&&Es(c)){var p=u.start,v=u.end;if(v===void 0&&(v=p),"selectionStart"in c)c.selectionStart=p,c.selectionEnd=Math.min(v,c.value.length);else{var h=c.ownerDocument||document,b=h&&h.defaultView||window;if(b.getSelection){var _=b.getSelection(),y=c.textContent.length,T=Math.min(u.start,y),O=u.end===void 0?T:Math.min(u.end,y);!_.extend&&T>O&&(s=O,O=T,T=s);var m=uu(c,T),d=uu(c,O);if(m&&d&&(_.rangeCount!==1||_.anchorNode!==m.node||_.anchorOffset!==m.offset||_.focusNode!==d.node||_.focusOffset!==d.offset)){var g=h.createRange();g.setStart(m.node,m.offset),_.removeAllRanges(),T>O?(_.addRange(g),_.extend(d.node,d.offset)):(g.setEnd(d.node,d.offset),_.addRange(g))}}}}for(h=[],_=c;_=_.parentNode;)_.nodeType===1&&h.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<h.length;c++){var x=h[c];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}oi=!!rs,ss=rs=null}finally{J=l,Z.p=a,w.T=n}}e.current=t,ve=2}}function Nf(){if(ve===2){ve=0;var e=yn,t=Na,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=w.T,w.T=null;var a=Z.p;Z.p=2;var l=J;J|=4;try{sf(e,t.alternate,t)}finally{J=l,Z.p=a,w.T=n}}ve=3}}function kf(){if(ve===4||ve===3){ve=0,eg();var e=yn,t=Na,n=Ht,a=xf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ve=5:(ve=0,Na=yn=null,Mf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(gn=null),hs(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=w.T,l=Z.p,Z.p=2,w.T=null;try{for(var o=e.onRecoverableError,s=0;s<a.length;s++){var c=a[s];o(c.value,{componentStack:c.stack})}}finally{w.T=t,Z.p=l}}(Ht&3)!==0&&xi(),Ct(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===ls?yl++:(yl=0,ls=e):yl=0,Gl(0,!1)}}function Mf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,jl(t)))}function xi(){return Of(),Nf(),kf(),Bf()}function Bf(){if(ve!==5)return!1;var e=yn,t=ns;ns=0;var n=hs(Ht),a=w.T,l=Z.p;try{Z.p=32>n?32:n,w.T=null,n=as,as=null;var o=yn,s=Ht;if(ve=0,Na=yn=null,Ht=0,(J&6)!==0)throw Error(z(331));var c=J;if(J|=4,bf(o.current),gf(o,o.current,s,n),J=c,Gl(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Ml,o)}catch{}return!0}finally{Z.p=l,w.T=a,Mf(e,t)}}function Fu(e,t,n){t=st(n,t),t=Kr(e.stateNode,t,2),e=mn(e,t,2),e!==null&&(Ll(e,2),Ct(e))}function P(e,t,n){if(e.tag===3)Fu(e,e,n);else for(;t!==null;){if(t.tag===3){Fu(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(gn===null||!gn.has(a))){e=st(n,e),n=Zp(2),a=mn(t,n,2),a!==null&&(Ip(n,a,t,e),Ll(a,2),Ct(a));break}}t=t.return}}function gr(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Ry;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(tc=!0,l.add(n),e=Ny.bind(null,e,t,n),t.then(e,e))}function Ny(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,$===e&&(X&n)===n&&(se===4||se===3&&(X&62914560)===X&&300>Pe()-bi?(J&2)===0&&ka(e,0):nc|=n,Oa===X&&(Oa=0)),Ct(e)}function Lf(e,t){t===0&&(t=Cd()),e=Jn(e,t),e!==null&&(Ll(e,t),Ct(e))}function ky(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lf(e,n)}function My(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(z(314))}a!==null&&a.delete(t),Lf(e,n)}function By(e,t){return bs(e,t)}var Wo=null,la=null,os=!1,$o=!1,yr=!1,un=0;function Ct(e){e!==la&&e.next===null&&(la===null?Wo=la=e:la=la.next=e),$o=!0,os||(os=!0,wy())}function Gl(e,t){if(!yr&&$o){yr=!0;do for(var n=!1,a=Wo;a!==null;){if(!t)if(e!==0){var l=a.pendingLanes;if(l===0)var o=0;else{var s=a.suspendedLanes,c=a.pingedLanes;o=(1<<31-We(42|e)+1)-1,o&=l&~(s&~c),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,Xu(a,o))}else o=X,o=ri(a,a===$?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||Bl(a,o)||(n=!0,Xu(a,o));a=a.next}while(n);yr=!1}}function Ly(){wf()}function wf(){$o=os=!1;var e=0;un!==0&&Xy()&&(e=un);for(var t=Pe(),n=null,a=Wo;a!==null;){var l=a.next,o=qf(a,t);o===0?(a.next=null,n===null?Wo=l:n.next=l,l===null&&(la=n)):(n=a,(e!==0||(o&3)!==0)&&($o=!0)),a=l}ve!==0&&ve!==5||Gl(e,!1),un!==0&&(un=0)}function qf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var s=31-We(o),c=1<<s,u=l[s];u===-1?((c&n)===0||(c&a)!==0)&&(l[s]=sg(c,t)):u<=t&&(e.expiredLanes|=c),o&=~c}if(t=$,n=X,n=ri(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(I===2||I===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Vi(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Bl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Vi(a),hs(n)){case 2:case 8:n=zd;break;case 32:n=Lo;break;case 268435456:n=Td;break;default:n=Lo}return a=jf.bind(null,e),n=bs(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Vi(a),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(ve!==0&&ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(xi()&&e.callbackNode!==n)return null;var a=X;return a=ri(e,e===$?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(zf(e,a,t),qf(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Xu(e,t){if(xi())return null;zf(e,t,!0)}function wy(){Qy(function(){(J&6)!==0?bs(Sd,Ly):wf()})}function lc(){if(un===0){var e=Ea;e===0&&(e=$l,$l<<=1,($l&261888)===0&&($l=256)),un=e}return un}function Vu(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bo(""+e)}function Qu(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function qy(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var o=Vu((l[Xe]||null).action),s=a.submitter;s&&(t=(t=s[Xe]||null)?Vu(t.formAction):s.getAttribute("formAction"),t!==null&&(o=t,s=null));var c=new si("action","action",null,a,l);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(un!==0){var u=s?Qu(l,s):new FormData(l);Ir(n,{pending:!0,data:u,method:l.method,action:o},null,u)}}else typeof o=="function"&&(c.preventDefault(),u=s?Qu(l,s):new FormData(l),Ir(n,{pending:!0,data:u,method:l.method,action:o},o,u))},currentTarget:l}]})}}for(po=0;po<qr.length;po++)fo=qr[po],Ju=fo.toLowerCase(),Zu=fo[0].toUpperCase()+fo.slice(1),yt(Ju,"on"+Zu);var fo,Ju,Zu,po;yt(Id,"onAnimationEnd");yt(Pd,"onAnimationIteration");yt(Kd,"onAnimationStart");yt("dblclick","onDoubleClick");yt("focusin","onFocus");yt("focusout","onBlur");yt(ty,"onTransitionRun");yt(ny,"onTransitionStart");yt(ay,"onTransitionCancel");yt(Wd,"onTransitionEnd");Ca("onMouseEnter",["mouseout","mouseover"]);Ca("onMouseLeave",["mouseout","mouseover"]);Ca("onPointerEnter",["pointerout","pointerover"]);Ca("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(El));function Uf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var s=a.length-1;0<=s;s--){var c=a[s],u=c.instance,p=c.currentTarget;if(c=c.listener,u!==o&&l.isPropagationStopped())break e;o=c,l.currentTarget=p;try{o(l)}catch(v){qo(v)}l.currentTarget=null,o=u}else for(s=0;s<a.length;s++){if(c=a[s],u=c.instance,p=c.currentTarget,c=c.listener,u!==o&&l.isPropagationStopped())break e;o=c,l.currentTarget=p;try{o(l)}catch(v){qo(v)}l.currentTarget=null,o=u}}}}function Y(e,t){var n=t[Dr];n===void 0&&(n=t[Dr]=new Set);var a=e+"__bubble";n.has(a)||(Hf(t,e,2,!1),n.add(a))}function _r(e,t,n){var a=0;t&&(a|=4),Hf(n,e,a,t)}var mo="_reactListening"+Math.random().toString(36).slice(2);function oc(e){if(!e[mo]){e[mo]=!0,Od.forEach(function(n){n!=="selectionchange"&&(jy.has(n)||_r(n,!1,e),_r(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mo]||(t[mo]=!0,_r("selectionchange",!1,t))}}function Hf(e,t,n,a){switch($f(t)){case 2:var l=p_;break;case 8:l=f_;break;default:l=cc}n=l.bind(null,t,n,e),l=void 0,!Br||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function br(e,t,n,a,l){var o=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var c=a.stateNode.containerInfo;if(c===l)break;if(s===4)for(s=a.return;s!==null;){var u=s.tag;if((u===3||u===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;c!==null;){if(s=ra(c),s===null)return;if(u=s.tag,u===5||u===6||u===26||u===27){a=o=s;continue e}c=c.parentNode}}a=a.return}jd(function(){var p=o,v=zs(n),h=[];e:{var b=$d.get(e);if(b!==void 0){var _=si,y=e;switch(e){case"keypress":if(ho(n)===0)break e;case"keydown":case"keyup":_=Mg;break;case"focusin":y="focus",_=Pi;break;case"focusout":y="blur",_=Pi;break;case"beforeblur":case"afterblur":_=Pi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=wg;break;case Id:case Pd:case Kd:_=Tg;break;case Wd:_=jg;break;case"scroll":case"scrollend":_=vg;break;case"wheel":_=Hg;break;case"copy":case"cut":case"paste":_=Rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=au;break;case"toggle":case"beforetoggle":_=Yg}var T=(t&4)!==0,O=!T&&(e==="scroll"||e==="scrollend"),m=T?b!==null?b+"Capture":null:b;T=[];for(var d=p,g;d!==null;){var x=d;if(g=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||g===null||m===null||(x=vl(d,m),x!=null&&T.push(Al(d,x,g))),O)break;d=d.return}0<T.length&&(b=new _(b,y,null,n,v),h.push({event:b,listeners:T}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",b&&n!==Mr&&(y=n.relatedTarget||n.fromElement)&&(ra(y)||y[La]))break e;if((_||b)&&(b=v.window===v?v:(b=v.ownerDocument)?b.defaultView||b.parentWindow:window,_?(y=n.relatedTarget||n.toElement,_=p,y=y?ra(y):null,y!==null&&(O=kl(y),T=y.tag,y!==O||T!==5&&T!==27&&T!==6)&&(y=null)):(_=null,y=p),_!==y)){if(T=tu,x="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(T=au,x="onPointerLeave",m="onPointerEnter",d="pointer"),O=_==null?b:nl(_),g=y==null?b:nl(y),b=new T(x,d+"leave",_,n,v),b.target=O,b.relatedTarget=g,x=null,ra(v)===p&&(T=new T(m,d+"enter",y,n,v),T.target=g,T.relatedTarget=O,x=T),O=x,_&&y)t:{for(T=Uy,m=_,d=y,g=0,x=m;x;x=T(x))g++;x=0;for(var N=d;N;N=T(N))x++;for(;0<g-x;)m=T(m),g--;for(;0<x-g;)d=T(d),x--;for(;g--;){if(m===d||d!==null&&m===d.alternate){T=m;break t}m=T(m),d=T(d)}T=null}else T=null;_!==null&&Iu(h,b,_,T,!1),y!==null&&O!==null&&Iu(h,O,y,T,!0)}}e:{if(b=p?nl(p):window,_=b.nodeName&&b.nodeName.toLowerCase(),_==="select"||_==="input"&&b.type==="file")var q=ru;else if(iu(b))if(Xd)q=Wg;else{q=Pg;var S=Ig}else _=b.nodeName,!_||_.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?p&&Ss(p.elementType)&&(q=ru):q=Kg;if(q&&(q=q(e,p))){Fd(h,q,n,v);break e}S&&S(e,b,p),e==="focusout"&&p&&b.type==="number"&&p.memoizedProps.value!=null&&kr(b,"number",b.value)}switch(S=p?nl(p):window,e){case"focusin":(iu(S)||S.contentEditable==="true")&&(ua=S,Lr=p,rl=null);break;case"focusout":rl=Lr=ua=null;break;case"mousedown":wr=!0;break;case"contextmenu":case"mouseup":case"dragend":wr=!1,du(h,n,v);break;case"selectionchange":if(ey)break;case"keydown":case"keyup":du(h,n,v)}var B;if(Rs)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else ca?Gd(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Hd&&n.locale!=="ko"&&(ca||k!=="onCompositionStart"?k==="onCompositionEnd"&&ca&&(B=Ud()):(rn=v,Ts="value"in rn?rn.value:rn.textContent,ca=!0)),S=ei(p,k),0<S.length&&(k=new nu(k,e,null,n,v),h.push({event:k,listeners:S}),B?k.data=B:(B=Yd(n),B!==null&&(k.data=B)))),(B=Xg?Vg(e,n):Qg(e,n))&&(k=ei(p,"onBeforeInput"),0<k.length&&(S=new nu("onBeforeInput","beforeinput",null,n,v),h.push({event:S,listeners:k}),S.data=B)),qy(h,e,p,n,v)}Uf(h,t)})}function Al(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ei(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=vl(e,n),l!=null&&a.unshift(Al(e,l,o)),l=vl(e,t),l!=null&&a.push(Al(e,l,o))),e.tag===3)return a;e=e.return}return[]}function Uy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Iu(e,t,n,a,l){for(var o=t._reactName,s=[];n!==null&&n!==a;){var c=n,u=c.alternate,p=c.stateNode;if(c=c.tag,u!==null&&u===a)break;c!==5&&c!==26&&c!==27||p===null||(u=p,l?(p=vl(n,o),p!=null&&s.unshift(Al(n,p,u))):l||(p=vl(n,o),p!=null&&s.push(Al(n,p,u)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Hy=/\\r\\n?/g,Gy=/\\u0000|\\uFFFD/g;function Pu(e){return(typeof e=="string"?e:""+e).replace(Hy,\`
\`).replace(Gy,"")}function Gf(e,t){return t=Pu(t),Pu(e)===t}function K(e,t,n,a,l,o){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ra(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ra(e,""+a);break;case"className":no(e,"class",a);break;case"tabIndex":no(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":no(e,n,a);break;case"style":qd(e,a,o);break;case"data":if(t!=="object"){no(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=bo(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&K(e,t,"name",l.name,l,null),K(e,t,"formEncType",l.formEncType,l,null),K(e,t,"formMethod",l.formMethod,l,null),K(e,t,"formTarget",l.formTarget,l,null)):(K(e,t,"encType",l.encType,l,null),K(e,t,"method",l.method,l,null),K(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=bo(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=wt);break;case"onScroll":a!=null&&Y("scroll",e);break;case"onScrollEnd":a!=null&&Y("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(z(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(z(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=bo(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Y("beforetoggle",e),Y("toggle",e),_o(e,"popover",a);break;case"xlinkActuate":At(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":At(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":At(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":At(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":At(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":At(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":At(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":At(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":At(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":_o(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=_g.get(n)||n,_o(e,n,a))}}function is(e,t,n,a,l,o){switch(n){case"style":qd(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(z(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(z(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ra(e,a):(typeof a=="number"||typeof a=="bigint")&&Ra(e,""+a);break;case"onScroll":a!=null&&Y("scroll",e);break;case"onScrollEnd":a!=null&&Y("scrollend",e);break;case"onClick":a!=null&&(e.onclick=wt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),o=e[Xe]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof a=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):_o(e,n,a)}}}function Oe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Y("error",e),Y("load",e);var a=!1,l=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(z(137,t));default:K(e,t,o,s,n,null)}}l&&K(e,t,"srcSet",n.srcSet,n,null),a&&K(e,t,"src",n.src,n,null);return;case"input":Y("invalid",e);var c=o=s=l=null,u=null,p=null;for(a in n)if(n.hasOwnProperty(a)){var v=n[a];if(v!=null)switch(a){case"name":l=v;break;case"type":s=v;break;case"checked":u=v;break;case"defaultChecked":p=v;break;case"value":o=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(z(137,t));break;default:K(e,t,a,v,n,null)}}Bd(e,o,c,u,p,s,l,!1);return;case"select":Y("invalid",e),a=s=o=null;for(l in n)if(n.hasOwnProperty(l)&&(c=n[l],c!=null))switch(l){case"value":o=c;break;case"defaultValue":s=c;break;case"multiple":a=c;default:K(e,t,l,c,n,null)}t=o,n=s,e.multiple=!!a,t!=null?ba(e,!!a,t,!1):n!=null&&ba(e,!!a,n,!0);return;case"textarea":Y("invalid",e),o=l=a=null;for(s in n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case"value":a=c;break;case"defaultValue":l=c;break;case"children":o=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(z(91));break;default:K(e,t,s,c,n,null)}wd(e,a,l,o);return;case"option":for(u in n)n.hasOwnProperty(u)&&(a=n[u],a!=null)&&(u==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":K(e,t,u,a,n,null));return;case"dialog":Y("beforetoggle",e),Y("toggle",e),Y("cancel",e),Y("close",e);break;case"iframe":case"object":Y("load",e);break;case"video":case"audio":for(a=0;a<El.length;a++)Y(El[a],e);break;case"image":Y("error",e),Y("load",e);break;case"details":Y("toggle",e);break;case"embed":case"source":case"link":Y("error",e),Y("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in n)if(n.hasOwnProperty(p)&&(a=n[p],a!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(z(137,t));default:K(e,t,p,a,n,null)}return;default:if(Ss(t)){for(v in n)n.hasOwnProperty(v)&&(a=n[v],a!==void 0&&is(e,t,v,a,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(a=n[c],a!=null&&K(e,t,c,a,n,null))}function Yy(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,s=null,c=null,u=null,p=null,v=null;for(_ in n){var h=n[_];if(n.hasOwnProperty(_)&&h!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":u=h;default:a.hasOwnProperty(_)||K(e,t,_,null,a,h)}}for(var b in a){var _=a[b];if(h=n[b],a.hasOwnProperty(b)&&(_!=null||h!=null))switch(b){case"type":o=_;break;case"name":l=_;break;case"checked":p=_;break;case"defaultChecked":v=_;break;case"value":s=_;break;case"defaultValue":c=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(z(137,t));break;default:_!==h&&K(e,t,b,_,a,h)}}Nr(e,s,c,u,p,v,o,l);return;case"select":_=s=c=b=null;for(o in n)if(u=n[o],n.hasOwnProperty(o)&&u!=null)switch(o){case"value":break;case"multiple":_=u;default:a.hasOwnProperty(o)||K(e,t,o,null,a,u)}for(l in a)if(o=a[l],u=n[l],a.hasOwnProperty(l)&&(o!=null||u!=null))switch(l){case"value":b=o;break;case"defaultValue":c=o;break;case"multiple":s=o;default:o!==u&&K(e,t,l,o,a,u)}t=c,n=s,a=_,b!=null?ba(e,!!n,b,!1):!!a!=!!n&&(t!=null?ba(e,!!n,t,!0):ba(e,!!n,n?[]:"",!1));return;case"textarea":_=b=null;for(c in n)if(l=n[c],n.hasOwnProperty(c)&&l!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:K(e,t,c,null,a,l)}for(s in a)if(l=a[s],o=n[s],a.hasOwnProperty(s)&&(l!=null||o!=null))switch(s){case"value":b=l;break;case"defaultValue":_=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(z(91));break;default:l!==o&&K(e,t,s,l,a,o)}Ld(e,b,_);return;case"option":for(var y in n)b=n[y],n.hasOwnProperty(y)&&b!=null&&!a.hasOwnProperty(y)&&(y==="selected"?e.selected=!1:K(e,t,y,null,a,b));for(u in a)b=a[u],_=n[u],a.hasOwnProperty(u)&&b!==_&&(b!=null||_!=null)&&(u==="selected"?e.selected=b&&typeof b!="function"&&typeof b!="symbol":K(e,t,u,b,a,_));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var T in n)b=n[T],n.hasOwnProperty(T)&&b!=null&&!a.hasOwnProperty(T)&&K(e,t,T,null,a,b);for(p in a)if(b=a[p],_=n[p],a.hasOwnProperty(p)&&b!==_&&(b!=null||_!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(z(137,t));break;default:K(e,t,p,b,a,_)}return;default:if(Ss(t)){for(var O in n)b=n[O],n.hasOwnProperty(O)&&b!==void 0&&!a.hasOwnProperty(O)&&is(e,t,O,void 0,a,b);for(v in a)b=a[v],_=n[v],!a.hasOwnProperty(v)||b===_||b===void 0&&_===void 0||is(e,t,v,b,a,_);return}}for(var m in n)b=n[m],n.hasOwnProperty(m)&&b!=null&&!a.hasOwnProperty(m)&&K(e,t,m,null,a,b);for(h in a)b=a[h],_=n[h],!a.hasOwnProperty(h)||b===_||b==null&&_==null||K(e,t,h,b,a,_)}function Ku(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],o=l.transferSize,s=l.initiatorType,c=l.duration;if(o&&c&&Ku(s)){for(s=0,c=l.responseEnd,a+=1;a<n.length;a++){var u=n[a],p=u.startTime;if(p>c)break;var v=u.transferSize,h=u.initiatorType;v&&Ku(h)&&(u=u.responseEnd,s+=v*(u<c?1:(c-p)/(u-p)))}if(--a,t+=8*(o+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var rs=null,ss=null;function ti(e){return e.nodeType===9?e:e.ownerDocument}function Wu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vr=null;function Xy(){var e=window.event;return e&&e.type==="popstate"?e===vr?!1:(vr=e,!0):(vr=null,!1)}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Vy=typeof clearTimeout=="function"?clearTimeout:void 0,$u=typeof Promise=="function"?Promise:void 0,Qy=typeof queueMicrotask=="function"?queueMicrotask:typeof $u<"u"?function(e){return $u.resolve(null).then(e).catch(Jy)}:Ff;function Jy(e){setTimeout(function(){throw e})}function Cn(e){return e==="head"}function ed(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),Ba(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")_l(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,_l(n);for(var o=n.firstChild;o;){var s=o.nextSibling,c=o.nodeName;o[wl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=s}}else n==="body"&&_l(e.ownerDocument.body);n=l}while(n);Ba(t)}function td(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function us(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":us(n),xs(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Zy(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=dt(e.nextSibling),e===null)break}return null}function Iy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=dt(e.nextSibling),e===null))return null;return e}function Xf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=dt(e.nextSibling),e===null))return null;return e}function ds(e){return e.data==="$?"||e.data==="$~"}function ps(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Py(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var fs=null;function nd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return dt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Vf(e,t,n){switch(t=ti(n),e){case"html":if(e=t.documentElement,!e)throw Error(z(452));return e;case"head":if(e=t.head,!e)throw Error(z(453));return e;case"body":if(e=t.body,!e)throw Error(z(454));return e;default:throw Error(z(451))}}function _l(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xs(e)}var pt=new Map,ld=new Set;function ni(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qt=Z.d;Z.d={f:Ky,r:Wy,D:$y,C:e_,L:t_,m:n_,X:l_,S:a_,M:o_};function Ky(){var e=Qt.f(),t=vi();return e||t}function Wy(e){var t=wa(e);t!==null&&t.tag===5&&t.type==="form"?qp(t):Qt.r(e)}var Ha=typeof document>"u"?null:document;function Qf(e,t,n){var a=Ha;if(a&&typeof t=="string"&&t){var l=rt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),ld.has(l)||(ld.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Oe(t,"link",e),Se(t),a.head.appendChild(t)))}}function $y(e){Qt.D(e),Qf("dns-prefetch",e,null)}function e_(e,t){Qt.C(e,t),Qf("preconnect",e,t)}function t_(e,t,n){Qt.L(e,t,n);var a=Ha;if(a&&e&&t){var l='link[rel="preload"][as="'+rt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+rt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+rt(n.imageSizes)+'"]')):l+='[href="'+rt(e)+'"]';var o=l;switch(t){case"style":o=Ma(e);break;case"script":o=Ga(e)}pt.has(o)||(e=le({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),pt.set(o,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Yl(o))||t==="script"&&a.querySelector(Fl(o))||(t=a.createElement("link"),Oe(t,"link",e),Se(t),a.head.appendChild(t)))}}function n_(e,t){Qt.m(e,t);var n=Ha;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+rt(a)+'"][href="'+rt(e)+'"]',o=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ga(e)}if(!pt.has(o)&&(e=le({rel:"modulepreload",href:e},t),pt.set(o,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Fl(o)))return}a=n.createElement("link"),Oe(a,"link",e),Se(a),n.head.appendChild(a)}}}function a_(e,t,n){Qt.S(e,t,n);var a=Ha;if(a&&e){var l=_a(a).hoistableStyles,o=Ma(e);t=t||"default";var s=l.get(o);if(!s){var c={loading:0,preload:null};if(s=a.querySelector(Yl(o)))c.loading=5;else{e=le({rel:"stylesheet",href:e,"data-precedence":t},n),(n=pt.get(o))&&ic(e,n);var u=s=a.createElement("link");Se(u),Oe(u,"link",e),u._p=new Promise(function(p,v){u.onload=p,u.onerror=v}),u.addEventListener("load",function(){c.loading|=1}),u.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ao(s,t,a)}s={type:"stylesheet",instance:s,count:1,state:c},l.set(o,s)}}}function l_(e,t){Qt.X(e,t);var n=Ha;if(n&&e){var a=_a(n).hoistableScripts,l=Ga(e),o=a.get(l);o||(o=n.querySelector(Fl(l)),o||(e=le({src:e,async:!0},t),(t=pt.get(l))&&rc(e,t),o=n.createElement("script"),Se(o),Oe(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}}function o_(e,t){Qt.M(e,t);var n=Ha;if(n&&e){var a=_a(n).hoistableScripts,l=Ga(e),o=a.get(l);o||(o=n.querySelector(Fl(l)),o||(e=le({src:e,async:!0,type:"module"},t),(t=pt.get(l))&&rc(e,t),o=n.createElement("script"),Se(o),Oe(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}}function od(e,t,n,a){var l=(l=dn.current)?ni(l):null;if(!l)throw Error(z(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ma(n.href),n=_a(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ma(n.href);var o=_a(l).hoistableStyles,s=o.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=l.querySelector(Yl(e)))&&!o._p&&(s.instance=o,s.state.loading=5),pt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},pt.set(e,n),o||i_(l,e,n,s.state))),t&&a===null)throw Error(z(528,""));return s}if(t&&a!==null)throw Error(z(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ga(n),n=_a(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(z(444,e))}}function Ma(e){return'href="'+rt(e)+'"'}function Yl(e){return'link[rel="stylesheet"]['+e+"]"}function Jf(e){return le({},e,{"data-precedence":e.precedence,precedence:null})}function i_(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Oe(t,"link",n),Se(t),e.head.appendChild(t))}function Ga(e){return'[src="'+rt(e)+'"]'}function Fl(e){return"script[async]"+e}function id(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+rt(n.href)+'"]');if(a)return t.instance=a,Se(a),a;var l=le({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Se(a),Oe(a,"style",l),Ao(a,n.precedence,e),t.instance=a;case"stylesheet":l=Ma(n.href);var o=e.querySelector(Yl(l));if(o)return t.state.loading|=4,t.instance=o,Se(o),o;a=Jf(n),(l=pt.get(l))&&ic(a,l),o=(e.ownerDocument||e).createElement("link"),Se(o);var s=o;return s._p=new Promise(function(c,u){s.onload=c,s.onerror=u}),Oe(o,"link",a),t.state.loading|=4,Ao(o,n.precedence,e),t.instance=o;case"script":return o=Ga(n.src),(l=e.querySelector(Fl(o)))?(t.instance=l,Se(l),l):(a=n,(l=pt.get(o))&&(a=le({},n),rc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Se(l),Oe(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(z(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ao(a,n.precedence,e));return t.instance}function Ao(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,o=l,s=0;s<a.length;s++){var c=a[s];if(c.dataset.precedence===t)o=c;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ic(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Do=null;function rd(e,t,n){if(Do===null){var a=new Map,l=Do=new Map;l.set(n,a)}else l=Do,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var o=n[l];if(!(o[wl]||o[Ee]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(t)||"";s=e+s;var c=a.get(s);c?c.push(o):a.set(s,[o])}}return a}function sd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function r_(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Zf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function s_(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Ma(a.href),o=t.querySelector(Yl(l));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ai.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,Se(o);return}o=t.ownerDocument||t,a=Jf(a),(l=pt.get(l))&&ic(a,l),o=o.createElement("link"),Se(o);var s=o;s._p=new Promise(function(c,u){s.onload=c,s.onerror=u}),Oe(o,"link",a),n.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ai.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var hr=0;function c_(e,t){return e.stylesheets&&e.count===0&&Oo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Oo(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&hr===0&&(hr=62500*Fy());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Oo(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>hr?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function ai(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Oo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var li=null;function Oo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,li=new Map,t.forEach(u_,e),li=null,ai.call(e))}function u_(e,t){if(!(t.state.loading&4)){var n=li.get(e);if(n)var a=n.get(null);else{n=new Map,li.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var s=l[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),a=s)}a&&n.set(null,a)}l=t.instance,s=l.getAttribute("data-precedence"),o=n.get(s)||a,o===a&&n.set(null,l),n.set(s,l),this.count++,a=ai.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Dl={$$typeof:Lt,Provider:null,Consumer:null,_currentValue:Bn,_currentValue2:Bn,_threadCount:0};function d_(e,t,n,a,l,o,s,c,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.hiddenUpdates=Qi(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function If(e,t,n,a,l,o,s,c,u,p,v,h){return e=new d_(e,t,n,s,u,p,v,h,c),t=1,o===!0&&(t|=24),o=Ze(3,null,null,t),e.current=o,o.stateNode=e,t=Ms(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},ws(o),e}function Pf(e){return e?(e=fa,e):fa}function Kf(e,t,n,a,l,o){l=Pf(l),a.context===null?a.context=l:a.pendingContext=l,a=fn(t),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=mn(e,a,t),n!==null&&(Fe(n,e,t),cl(n,e,t))}function cd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sc(e,t){cd(e,t),(e=e.alternate)&&cd(e,t)}function Wf(e){if(e.tag===13||e.tag===31){var t=Jn(e,67108864);t!==null&&Fe(t,e,67108864),sc(e,67108864)}}function ud(e){if(e.tag===13||e.tag===31){var t=$e();t=vs(t);var n=Jn(e,t);n!==null&&Fe(n,e,t),sc(e,t)}}var oi=!0;function p_(e,t,n,a){var l=w.T;w.T=null;var o=Z.p;try{Z.p=2,cc(e,t,n,a)}finally{Z.p=o,w.T=l}}function f_(e,t,n,a){var l=w.T;w.T=null;var o=Z.p;try{Z.p=8,cc(e,t,n,a)}finally{Z.p=o,w.T=l}}function cc(e,t,n,a){if(oi){var l=ms(a);if(l===null)br(e,t,a,ii,n),dd(e,a);else if(g_(l,e,t,n,a))a.stopPropagation();else if(dd(e,a),t&4&&-1<m_.indexOf(e)){for(;l!==null;){var o=wa(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=Nn(o.pendingLanes);if(s!==0){var c=o;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var u=1<<31-We(s);c.entanglements[1]|=u,s&=~u}Ct(o),(J&6)===0&&(Io=Pe()+500,Gl(0,!1))}}break;case 31:case 13:c=Jn(o,2),c!==null&&Fe(c,o,2),vi(),sc(o,2)}if(o=ms(a),o===null&&br(e,t,a,ii,n),o===l)break;l=o}l!==null&&a.stopPropagation()}else br(e,t,a,null,n)}}function ms(e){return e=zs(e),uc(e)}var ii=null;function uc(e){if(ii=null,e=ra(e),e!==null){var t=kl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=_d(t),e!==null)return e;e=null}else if(n===31){if(e=bd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ii=e,null}function $f(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tg()){case Sd:return 2;case zd:return 8;case Lo:case ng:return 32;case Td:return 268435456;default:return 32}default:return 32}}var gs=!1,_n=null,bn=null,vn=null,Ol=new Map,Nl=new Map,ln=[],m_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dd(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Ol.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(t.pointerId)}}function Wa(e,t,n,a,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[l]},t!==null&&(t=wa(t),t!==null&&Wf(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function g_(e,t,n,a,l){switch(t){case"focusin":return _n=Wa(_n,e,t,n,a,l),!0;case"dragenter":return bn=Wa(bn,e,t,n,a,l),!0;case"mouseover":return vn=Wa(vn,e,t,n,a,l),!0;case"pointerover":var o=l.pointerId;return Ol.set(o,Wa(Ol.get(o)||null,e,t,n,a,l)),!0;case"gotpointercapture":return o=l.pointerId,Nl.set(o,Wa(Nl.get(o)||null,e,t,n,a,l)),!0}return!1}function em(e){var t=ra(e.target);if(t!==null){var n=kl(t);if(n!==null){if(t=n.tag,t===13){if(t=_d(n),t!==null){e.blockedOn=t,Zc(e.priority,function(){ud(n)});return}}else if(t===31){if(t=bd(n),t!==null){e.blockedOn=t,Zc(e.priority,function(){ud(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ms(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Mr=a,n.target.dispatchEvent(a),Mr=null}else return t=wa(n),t!==null&&Wf(t),e.blockedOn=n,!1;t.shift()}return!0}function pd(e,t,n){No(e)&&n.delete(t)}function y_(){gs=!1,_n!==null&&No(_n)&&(_n=null),bn!==null&&No(bn)&&(bn=null),vn!==null&&No(vn)&&(vn=null),Ol.forEach(pd),Nl.forEach(pd)}function go(e,t){e.blockedOn===t&&(e.blockedOn=null,gs||(gs=!0,he.unstable_scheduleCallback(he.unstable_NormalPriority,y_)))}var yo=null;function fd(e){yo!==e&&(yo=e,he.unstable_scheduleCallback(he.unstable_NormalPriority,function(){yo===e&&(yo=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(uc(a||n)===null)continue;break}var o=wa(n);o!==null&&(e.splice(t,3),t-=3,Ir(o,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Ba(e){function t(u){return go(u,e)}_n!==null&&go(_n,e),bn!==null&&go(bn,e),vn!==null&&go(vn,e),Ol.forEach(t),Nl.forEach(t);for(var n=0;n<ln.length;n++){var a=ln[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)em(n),n.blockedOn===null&&ln.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],o=n[a+1],s=l[Xe]||null;if(typeof o=="function")s||fd(n);else if(s){var c=null;if(o&&o.hasAttribute("formAction")){if(l=o,s=o[Xe]||null)c=s.formAction;else if(uc(l)!==null)continue}else c=s.action;typeof c=="function"?n[a+1]=c:(n.splice(a,3),a-=3),fd(n)}}}function tm(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function dc(e){this._internalRoot=e}Si.prototype.render=dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));var n=t.current,a=$e();Kf(n,a,e,t,null,null)};Si.prototype.unmount=dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kf(e.current,2,null,e,null,null),vi(),t[La]=null}};function Si(e){this._internalRoot=e}Si.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&em(e)}};var md=gd.version;if(md!=="19.2.5")throw Error(z(527,md,"19.2.5"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=Zm(t),e=e!==null?vd(e):null,e=e===null?null:e.stateNode,e};var __={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&($a=__REACT_DEVTOOLS_GLOBAL_HOOK__,!$a.isDisabled&&$a.supportsFiber))try{Ml=$a.inject(__),Ke=$a}catch{}var $a;zi.createRoot=function(e,t){if(!yd(e))throw Error(z(299));var n=!1,a="",l=Vp,o=Qp,s=Jp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=If(e,1,!1,null,null,n,a,null,l,o,s,tm),e[La]=t.current,oc(e),new dc(t)};zi.hydrateRoot=function(e,t,n){if(!yd(e))throw Error(z(299));var a=!1,l="",o=Vp,s=Qp,c=Jp,u=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),t=If(e,1,!0,t,n??null,a,l,u,o,s,c,tm),t.context=Pf(null),n=t.current,a=$e(),a=vs(a),l=fn(a),l.callback=null,mn(n,l,a),n=a,t.current.lanes=n,Ll(t,n),Ct(t),e[La]=t.current,oc(e),new Si(t)};zi.version="19.2.5"});var om=bt((Z_,lm)=>{"use strict";function am(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(am)}catch(e){console.error(e)}}am(),lm.exports=nm()});var rm=bt(Ti=>{"use strict";var b_=Symbol.for("react.transitional.element"),v_=Symbol.for("react.fragment");function im(e,t,n){var a=null;if(n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),"key"in t){n={};for(var l in t)l!=="key"&&(n[l]=t[l])}else n=t;return t=n.ref,{$$typeof:b_,type:e,key:a,ref:t!==void 0?t:null,props:n}}Ti.Fragment=v_;Ti.jsx=im;Ti.jsxs=im});var Xl=bt((P_,sm)=>{"use strict";sm.exports=rm()});(function(){let e="ros2academy:";function t(n,a){return e+(a?"shared:":"personal:")+n}window.storage={async get(n,a){try{let l=localStorage.getItem(t(n,a));return l===null?null:{key:n,value:l,shared:!!a}}catch{return null}},async set(n,a,l){try{return localStorage.setItem(t(n,l),a),{key:n,value:a,shared:!!l}}catch{return null}},async delete(n,a){try{return localStorage.removeItem(t(n,a)),{key:n,deleted:!0,shared:!!a}}catch{return null}},async list(n,a){let l=[],o=e+(a?"shared:":"personal:"),s=o+(n||"");try{for(let c=0;c<localStorage.length;c++){let u=localStorage.key(c);u&&u.startsWith(s)&&l.push(u.slice(o.length))}}catch{}return{keys:l,prefix:n,shared:!!a}}}})();var eb=An(Ya()),dm=An(om());var E=An(Ya()),i=An(Xl()),r={bg:"#030712",panel:"#0d1117",border:"#1a2332",text:"#e2e8f0",muted:"#4a5568",faint:"#1e2d3d",cyan:"#00d4aa",blue:"#3b82f6",purple:"#8b5cf6",amber:"#f59e0b",red:"#ef4444",green:"#22c55e",pink:"#ec4899"},f="'JetBrains Mono', 'Fira Code', monospace",V="'Outfit', 'Syne', sans-serif",Rn=[{id:1,slug:"fondations",label:"Fondations",color:r.cyan,icon:"01",subtitle:"Linux, Python, Git",desc:"Ma\\xEEtriser l'environnement avant de toucher \\xE0 ROS2.",modules:[{id:"m1-1",title:"Terminal Linux & Bash",done:!0,xp:50,content:\`## Terminal Linux & Bash

Le terminal est ton outil principal. ROS2 se contr\\xF4le enti\\xE8rement en ligne de commande.

### Commandes essentielles
\\\`\\\`\\\`bash
# Navigation
ls -la          # Lister fichiers
cd ~/ros2_ws    # Changer r\\xE9pertoire
pwd             # R\\xE9pertoire courant
mkdir -p src    # Cr\\xE9er dossiers

# Fichiers
cp src dest     # Copier
mv src dest     # D\\xE9placer/renommer
rm -rf dossier  # Supprimer
cat fichier.txt # Lire un fichier

# Process
ps aux          # Lister processus
kill -9 PID     # Tuer un processus
Ctrl+C          # Interrompre
Ctrl+Z          # Suspendre

# Variables d'environnement
export ROS_DOMAIN_ID=0
echo $ROS_DOMAIN_ID
source ~/.bashrc
\\\`\\\`\\\`\`},{id:"m1-2",title:"Python 3 pour ROS2",done:!0,xp:60,content:\`## Python 3 pour ROS2

ROS2 utilise Python 3.12 (Jazzy).

### Concepts cl\\xE9s
\\\`\\\`\\\`python
# Classes et h\\xE9ritage \\u2014 fondamental en ROS2
class MonNode(Node):          # H\\xE9ritage de Node
    def __init__(self):
        super().__init__('nom')  # Appel parent

# Callbacks \\u2014 partout en ROS2
def mon_callback(self, msg):   # Fonction appel\\xE9e automatiquement
    self.get_logger().info(msg.data)

# Type hints \\u2014 fortement recommand\\xE9
from std_msgs.msg import String
def publier(self, texte: str) -> None:
    msg = String()
    msg.data = texte
\\\`\\\`\\\`\`},{id:"m1-3",title:"Git & Versioning",done:!1,xp:40,content:\`## Git & Versioning

Tout projet ROS2 doit \\xEAtre versionn\\xE9.

\\\`\\\`\\\`bash
# Init
git init
git clone https://github.com/user/repo.git

# Workflow quotidien
git status
git add .
git commit -m "feat: ajout publisher node"
git push origin main

# Branches
git checkout -b feature/nouveau-node
git merge feature/nouveau-node

# .gitignore pour ROS2
echo "build/\\\\ninstall/\\\\nlog/" > .gitignore
\\\`\\\`\\\`\`},{id:"m1-4",title:"Concepts R\\xE9seau & DDS",done:!1,xp:50,content:\`## Concepts R\\xE9seau & DDS

ROS2 utilise DDS (Data Distribution Service) pour la communication.

\\\`\\\`\\\`bash
# DDS est le middleware de ROS2
# Deux impl\\xE9mentations principales :
# - FastRTPS (CycloneDDS sur Jazzy)
# - CycloneDDS

# Domaine ROS2 (isoler les robots)
export ROS_DOMAIN_ID=42   # 0-101

# V\\xE9rifier la communication r\\xE9seau
ros2 doctor
ros2 multicast send
ros2 multicast receive

# QoS \\u2014 Qualit\\xE9 de service
# RELIABLE : garantit la livraison
# BEST_EFFORT : rapide, peut perdre des msgs
\\\`\\\`\\\`\`},{id:"m1-5",title:"Variables d'environnement ROS2",done:!1,xp:40,content:\`## Variables d'environnement ROS2

ROS2 se configure via des variables d'environnement essentielles.

\\\`\\\`\\\`bash
# === Variables fondamentales ===
export ROS_DOMAIN_ID=0
export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp
export RCUTILS_COLORIZED_OUTPUT=0
export LANG=en_US.UTF-8

# Afficher toutes les variables ROS2
printenv | grep -i ros

# === Ajouter dans ~/.bashrc ===
source /opt/ros/jazzy/setup.bash
source ~/ros2_ws/install/setup.bash
export ROS_DOMAIN_ID=0

# Alias utiles
alias cb='cd ~/ros2_ws && colcon build --symlink-install'
alias cs='source ~/ros2_ws/install/setup.bash'
alias cbs='cb && cs'
\\\`\\\`\\\`\`},{id:"m1-6",title:"VS Code & IDE pour ROS2",done:!1,xp:30,content:\`## \\xC9diteurs & Outils de D\\xE9veloppement

### VS Code \\u2014 Extensions recommand\\xE9es

\\\`\\\`\\\`bash
sudo snap install code --classic
# Extensions : ROS (Microsoft), Python, C/C++, CMake Tools, URDF, XML
\\\`\\\`\\\`

\\\`\\\`\\\`json
// .vscode/settings.json
{
  "python.defaultInterpreterPath": "/opt/ros/jazzy/bin/python3",
  "python.analysis.extraPaths": [
    "/opt/ros/jazzy/lib/python3.12/site-packages",
    "\\\${workspaceFolder}/install/lib/python3.12/site-packages"
  ],
  "editor.formatOnSave": true,
  "files.associations": {
    "*.urdf": "xml",
    "*.xacro": "xml",
    "*.sdf": "xml"
  }
}
\\\`\\\`\\\`

\\\`\\\`\\\`json
// .vscode/c_cpp_properties.json
{
  "configurations": [{
    "name": "ROS2",
    "includePath": [
      "\\\${workspaceFolder}/**",
      "/opt/ros/jazzy/include/**"
    ],
    "compilerPath": "/usr/bin/gcc"
  }]
}
\\\`\\\`\\\`\`},{id:"m1-7",title:"Structure Workspace & package.xml",done:!1,xp:50,content:\`## Structure du Workspace ROS2

\\\`\\\`\\\`
~/ros2_ws/
\\u251C\\u2500\\u2500 src/          \\u2190 tes packages
\\u2502   \\u2514\\u2500\\u2500 mon_package/
\\u2502       \\u251C\\u2500\\u2500 package.xml
\\u2502       \\u251C\\u2500\\u2500 setup.py
\\u2502       \\u2514\\u2500\\u2500 mon_package/
\\u2502           \\u251C\\u2500\\u2500 __init__.py
\\u2502           \\u2514\\u2500\\u2500 mon_node.py
\\u251C\\u2500\\u2500 build/        \\u2190 g\\xE9n\\xE9r\\xE9 par colcon
\\u251C\\u2500\\u2500 install/      \\u2190 install\\xE9
\\u2514\\u2500\\u2500 log/          \\u2190 logs build
\\\`\\\`\\\`

### package.xml

\\\`\\\`\\\`xml
<?xml version="1.0"?>
<package format="3">
  <name>mon_package</name>
  <version>0.0.1</version>
  <description>Mon package ROS2</description>
  <maintainer email="moi@email.com">Moi</maintainer>
  <license>Apache-2.0</license>
  <buildtool_depend>ament_python</buildtool_depend>
  <depend>rclpy</depend>
  <depend>std_msgs</depend>
  <depend>geometry_msgs</depend>
  <test_depend>pytest</test_depend>
  <export>
    <build_type>ament_python</build_type>
  </export>
</package>
\\\`\\\`\\\`

\\\`\\\`\\\`bash
# Localiser un package
ros2 pkg prefix nav2_bringup
ros2 pkg executables mon_package
ros2 pkg list | grep nav
\\\`\\\`\\\`\`},{id:"m1-8",title:"Logs & D\\xE9bogage CLI",done:!1,xp:50,content:\`## D\\xE9bogage & Syst\\xE8me de Logs

### Niveaux de log en Python

\\\`\\\`\\\`python
class MonNode(Node):
    def log_exemples(self):
        self.get_logger().debug('Debug verbose')
        self.get_logger().info('Information normale')
        self.get_logger().warn('Avertissement')
        self.get_logger().error('Erreur \\u2014 node continue')
        self.get_logger().fatal('Erreur fatale')

        # Log sans spam
        self.get_logger().info_once('Affich\\xE9 une seule fois')
        self.get_logger().info_throttle(
            self.get_clock(), 5000, 'Max toutes les 5s')
\\\`\\\`\\\`

### Commandes CLI indispensables

\\\`\\\`\\\`bash
# Inspecter le syst\\xE8me
ros2 node list && ros2 node info /mon_node
ros2 topic list -t     # avec types
ros2 service list -t

# \\xC9couter en live
ros2 topic echo /scan
ros2 topic hz /scan    # fr\\xE9quence
ros2 topic bw /scan    # bande passante

# Diagnostic complet
ros2 doctor --report

# Changer niveau log \\xE0 chaud
ros2 service call /mon_node/set_logger_level \\\\
  rcl_interfaces/srv/SetLoggerLevel \\\\
  "{logger_name: 'mon_node', level: 10}"
# 10=DEBUG 20=INFO 30=WARN 40=ERROR
\\\`\\\`\\\`\`},{id:"m1-9",title:"colcon \\u2014 Compilation avanc\\xE9e",done:!1,xp:45,content:\`## colcon \\u2014 Build System ROS2

\\\`\\\`\\\`bash
# Basique
colcon build

# Dev (symlinks \\u2014 pas de rebuild apr\\xE8s modif Python)
colcon build --symlink-install

# Un seul package
colcon build --packages-select mon_package

# Release (optimis\\xE9)
colcon build --cmake-args -DCMAKE_BUILD_TYPE=Release

# Rebuild complet
rm -rf build/ install/ log/
colcon build

# Parall\\xE8le
colcon build --parallel-workers 4
\\\`\\\`\\\`

### Tests

\\\`\\\`\\\`bash
colcon test --packages-select mon_package
colcon test-result --verbose
\\\`\\\`\\\`

### colcon.meta \\u2014 Config locale

\\\`\\\`\\\`json
{
  "names": {
    "mon_package": {
      "cmake-args": ["-DCMAKE_BUILD_TYPE=RelWithDebInfo"]
    }
  }
}
\\\`\\\`\\\`

\\\`\\\`\\\`bash
colcon list                     # packages
colcon list --topological-order # ordre d\\xE9pendances
colcon graph                    # graphe
\\\`\\\`\\\`\`},{id:"m1-10",title:"rosdep & D\\xE9pendances",done:!1,xp:40,content:\`## rosdep \\u2014 Gestionnaire de D\\xE9pendances

\\\`\\\`\\\`bash
# Initialiser (une seule fois)
sudo rosdep init && rosdep update

# Installer toutes les d\\xE9pendances
cd ~/ros2_ws
rosdep install --from-paths src --ignore-src -r -y
# --from-paths src : chercher dans src/
# --ignore-src     : ignorer packages pr\\xE9sents dans src/
# -r               : continuer malgr\\xE9 les erreurs
# -y               : r\\xE9pondre oui automatiquement

# V\\xE9rifier d\\xE9pendances manquantes
rosdep check --from-paths src
\\\`\\\`\\\`

### Installer packages manuellement

\\\`\\\`\\\`bash
# Chercher
apt-cache search ros-jazzy | grep nav

# Installer
sudo apt install ros-jazzy-navigation2
sudo apt install ros-jazzy-cv-bridge
sudo apt install ros-jazzy-tf2-tools

# Via pip
pip3 install numpy scipy transforms3d
\\\`\\\`\\\`\`}]},{id:2,slug:"debutant",label:"D\\xE9butant ROS2",color:r.blue,icon:"02",subtitle:"Nodes, Topics, Services",desc:"Les briques fondamentales de tout syst\\xE8me ROS2.",modules:[{id:"m2-1",title:"Installation ROS2",done:!0,xp:30,content:\`## Installation ROS2 Jazzy

\\\`\\\`\\\`bash
# === Installation (Ubuntu 24.04) ===
sudo apt install software-properties-common
sudo add-apt-repository universe
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key \\\\
  -o /usr/share/keyrings/ros-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] \\\\
  http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | \\\\
  sudo tee /etc/apt/sources.list.d/ros2.list
sudo apt update && sudo apt install ros-jazzy-desktop
echo "source /opt/ros/jazzy/setup.bash" >> ~/.bashrc

# === JAZZY (Ubuntu 24.04) ===
# M\\xEAme proc\\xE9dure mais :
sudo apt install ros-jazzy-desktop
echo "source /opt/ros/jazzy/setup.bash" >> ~/.bashrc

# V\\xE9rifier
ros2 --version
\\\`\\\`\\\`\`},{id:"m2-2",title:"Workspace & Packages",done:!0,xp:70,content:\`## Workspace & Packages

\\\`\\\`\\\`bash
# Cr\\xE9er workspace
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws

# Cr\\xE9er package Python
cd src
ros2 pkg create --build-type ament_python \\\\
  --dependencies rclpy std_msgs \\\\
  mon_package

# Cr\\xE9er package C++
ros2 pkg create --build-type ament_cmake \\\\
  --dependencies rclcpp std_msgs \\\\
  mon_package_cpp

# Compiler
cd ~/ros2_ws
colcon build
colcon build --packages-select mon_package  # Un seul
colcon build --symlink-install              # Dev mode

# Sourcer
source install/setup.bash
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
\\\`\\\`\\\`\`},{id:"m2-3",title:"Nodes & rclpy",done:!0,xp:90,content:\`## Nodes & rclpy

\\\`\\\`\\\`python
import rclpy
from rclpy.node import Node

class MonNode(Node):
    def __init__(self):
        super().__init__('mon_node')  # Nom du node
        self.get_logger().info('Node d\\xE9marr\\xE9 !')
        
        # Timer : appelle callback toutes les secondes
        self.timer = self.create_timer(1.0, self.tick)
    
    def tick(self):
        self.get_logger().info('Tick!')

def main(args=None):
    rclpy.init(args=args)
    node = MonNode()
    try:
        rclpy.spin(node)           # Boucle principale
    except KeyboardInterrupt:
        pass
    finally:
        node.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()
\\\`\\\`\\\`\`},{id:"m2-4",title:"Topics : Publisher/Subscriber",done:!1,xp:100,content:\`## Topics : Publisher / Subscriber

\\\`\\\`\\\`python
# PUBLISHER
from rclpy.node import Node
from std_msgs.msg import String

class Publisher(Node):
    def __init__(self):
        super().__init__('publisher')
        # create_publisher(TYPE, TOPIC, QOS_DEPTH)
        self.pub = self.create_publisher(String, '/salut', 10)
        self.timer = self.create_timer(0.5, self.publish)
    
    def publish(self):
        msg = String()
        msg.data = f'Hello \\xE0 {self.get_clock().now()}'
        self.pub.publish(msg)

# SUBSCRIBER
class Subscriber(Node):
    def __init__(self):
        super().__init__('subscriber')
        # create_subscription(TYPE, TOPIC, CALLBACK, QOS)
        self.sub = self.create_subscription(
            String, '/salut', self.callback, 10)
    
    def callback(self, msg: String):
        self.get_logger().info(f'Re\\xE7u: {msg.data}')
\\\`\\\`\\\`

\\\`\\\`\\\`bash
# Commandes utiles
ros2 topic list              # Lister tous les topics
ros2 topic echo /salut       # Afficher les messages
ros2 topic hz /salut         # Fr\\xE9quence de publication
ros2 topic info /salut       # Infos (type, publishers...)
ros2 topic pub /salut std_msgs/msg/String "data: 'test'"
\\\`\\\`\\\`\`},{id:"m2-5",title:"Services : Client/Serveur",done:!1,xp:100,content:\`## Services : Client / Serveur

\\\`\\\`\\\`python
# SERVEUR
from example_interfaces.srv import AddTwoInts

class Serveur(Node):
    def __init__(self):
        super().__init__('serveur')
        self.srv = self.create_service(
            AddTwoInts, 'additionne', self.callback)
    
    def callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info(
            f'{request.a} + {request.b} = {response.sum}')
        return response

# CLIENT
class Client(Node):
    def __init__(self):
        super().__init__('client')
        self.cli = self.create_client(AddTwoInts, 'additionne')
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('Attente serveur...')
    
    def appeler(self, a, b):
        req = AddTwoInts.Request()
        req.a, req.b = a, b
        return self.cli.call_async(req)
\\\`\\\`\\\`

\\\`\\\`\\\`bash
ros2 service list
ros2 service call /additionne \\\\
  example_interfaces/srv/AddTwoInts "{a: 3, b: 7}"
\\\`\\\`\\\`\`},{id:"m2-6",title:"Messages personnalis\\xE9s",done:!1,xp:80,content:\`## Messages personnalis\\xE9s

\\\`\\\`\\\`bash
# Cr\\xE9er package de messages
ros2 pkg create --build-type ament_cmake mes_interfaces
mkdir mes_interfaces/msg mes_interfaces/srv
\\\`\\\`\\\`

\\\`\\\`\\\`
# mes_interfaces/msg/Robot.msg
string nom
float64 vitesse
geometry_msgs/Point position
bool actif
\\\`\\\`\\\`

\\\`\\\`\\\`cmake
# CMakeLists.txt \\u2014 ajouter :
find_package(rosidl_default_generators REQUIRED)
find_package(geometry_msgs REQUIRED)

rosidl_generate_interfaces(\\\${PROJECT_NAME}
  "msg/Robot.msg"
  DEPENDENCIES geometry_msgs
)
\\\`\\\`\\\`

\\\`\\\`\\\`python
# Utiliser le message
from mes_interfaces.msg import Robot
msg = Robot()
msg.nom = "R2D2"
msg.vitesse = 1.5
msg.actif = True
\\\`\\\`\\\`\`},{id:"m2-7",title:"Param\\xE8tres & Fichiers YAML",done:!1,xp:80,content:\`## Param\\xE8tres ROS2 & Fichiers YAML

\\\`\\\`\\\`python
class NodeParams(Node):
    def __init__(self):
        super().__init__('node_params')
        self.declare_parameter('frequence', 10.0)
        self.declare_parameter('nom_robot', 'R2D2')
        self.declare_parameter('actif', True)
        self.declare_parameter('capteurs', ['lidar', 'camera'])

        freq = self.get_parameter('frequence').value
        nom = self.get_parameter('nom_robot').value

        # Callback sur changement en live
        self.add_on_set_parameters_callback(self.on_params_changed)

    def on_params_changed(self, params):
        for p in params:
            self.get_logger().info(f'{p.name} = {p.value}')
        from rcl_interfaces.msg import SetParametersResult
        return SetParametersResult(successful=True)
\\\`\\\`\\\`

### Fichier YAML de param\\xE8tres

\\\`\\\`\\\`yaml
# config/params.yaml
mon_node:
  ros__parameters:
    frequence: 20.0
    nom_robot: "WallE"
    actif: true
    capteurs: ["lidar", "camera", "imu"]
    pid:
      kp: 1.2
      ki: 0.01
      kd: 0.5
\\\`\\\`\\\`

\\\`\\\`\\\`bash
# Charger depuis YAML
ros2 run mon_package mon_node \\\\
  --ros-args --params-file config/params.yaml

# CLI
ros2 param list /mon_node
ros2 param get /mon_node frequence
ros2 param set /mon_node frequence 50.0
ros2 param dump /mon_node   # Export YAML
\\\`\\\`\\\`\`},{id:"m2-8",title:"rqt & Visualisation",done:!1,xp:60,content:\`## rqt \\u2014 Outils Graphiques ROS2

\\\`\\\`\\\`bash
# Lancer rqt (hub principal)
rqt

# Outils individuels
rqt_graph           # Graphe nodes/topics
rqt_console         # Console de logs
rqt_plot            # Graphique temps r\\xE9el de topics
rqt_image_view      # Visualiser flux cam\\xE9ra
rqt_tf_tree         # Arbre TF des transformations
rqt_bag             # Naviguer dans les bag files
rqt_service_caller  # Appeler des services en GUI
rqt_topic           # Monitorer/publier des topics
\\\`\\\`\\\`

### RViz2 \\u2014 Visualisation 3D

\\\`\\\`\\\`bash
# Lancer RViz2
rviz2

# Avec une config sauvegard\\xE9e
rviz2 -d mon_config.rviz
\\\`\\\`\\\`

### Displays utiles dans RViz2

\\\`\\\`\\\`
- RobotModel    : afficher le robot URDF
- LaserScan     : afficher nuage de points LiDAR
- PointCloud2   : capteur de profondeur
- Image         : flux cam\\xE9ra
- TF            : frames de coordonn\\xE9es
- Map           : carte Nav2
- Path          : trajectoire planifi\\xE9e
- Odometry      : position et orientation
- Marker        : formes personnalis\\xE9es
- MarkerArray   : ensemble de marqueurs
\\\`\\\`\\\`\`},{id:"m2-9",title:"Timers, Callbacks & Spin",done:!1,xp:90,content:\`## Timers, Callbacks & Boucle d'ex\\xE9cution

### Types de timers

\\\`\\\`\\\`python
class MonNode(Node):
    def __init__(self):
        super().__init__('timers_node')

        # Timer simple \\u2014 p\\xE9riode fixe
        self.timer_1hz = self.create_timer(1.0, self.cb_lent)
        self.timer_10hz = self.create_timer(0.1, self.cb_rapide)

        # Annuler un timer
        # self.timer_1hz.cancel()

        # Timer one-shot (une seule fois)
        self.create_timer(5.0, self.cb_once).cancel  # Hack

    def cb_lent(self):
        self.get_logger().info('1 Hz tick')

    def cb_rapide(self):
        self.get_logger().debug('10 Hz tick')
\\\`\\\`\\\`

### Modes de spin

\\\`\\\`\\\`python
import rclpy

# Mode 1 : spin bloquant (standard)
rclpy.spin(node)

# Mode 2 : spin_once (non bloquant)
rclpy.spin_once(node, timeout_sec=0.1)

# Mode 3 : spin_until_future_complete
future = client.call_async(request)
rclpy.spin_until_future_complete(node, future)
result = future.result()

# Mode 4 : spin avec executor
from rclpy.executors import SingleThreadedExecutor
executor = SingleThreadedExecutor()
executor.add_node(node)
try:
    executor.spin()
finally:
    executor.shutdown()
\\\`\\\`\\\`\`},{id:"m2-10",title:"C++ rclcpp \\u2014 Bases",done:!1,xp:110,content:\`## rclcpp \\u2014 ROS2 en C++

### Node de base C++

\\\`\\\`\\\`cpp
// src/mon_node.cpp
#include "rclcpp/rclcpp.hpp"
#include "std_msgs/msg/string.hpp"

class MonNode : public rclcpp::Node {
public:
  MonNode() : Node("mon_node_cpp") {
    // Publisher
    pub_ = create_publisher<std_msgs::msg::String>("/salut", 10);

    // Subscriber
    sub_ = create_subscription<std_msgs::msg::String>(
      "/message", 10,
      [this](const std_msgs::msg::String::SharedPtr msg) {
        RCLCPP_INFO(get_logger(), "Re\\xE7u: %s", msg->data.c_str());
      });

    // Timer
    timer_ = create_wall_timer(
      std::chrono::milliseconds(500),
      std::bind(&MonNode::publier, this));
  }

private:
  void publier() {
    auto msg = std_msgs::msg::String();
    msg.data = "Hello depuis C++!";
    pub_->publish(msg);
  }

  rclcpp::Publisher<std_msgs::msg::String>::SharedPtr pub_;
  rclcpp::Subscription<std_msgs::msg::String>::SharedPtr sub_;
  rclcpp::TimerBase::SharedPtr timer_;
};

int main(int argc, char** argv) {
  rclcpp::init(argc, argv);
  rclcpp::spin(std::make_shared<MonNode>());
  rclcpp::shutdown();
  return 0;
}
\\\`\\\`\\\`\`},{id:"m2-11",title:"Introspection & Commandes CLI",done:!1,xp:70,content:\`## CLI ROS2 \\u2014 Introspection compl\\xE8te

\\\`\\\`\\\`bash
# === NODES ===
ros2 node list
ros2 node info /mon_node
# Affiche : subscribers, publishers, services, actions

# === TOPICS ===
ros2 topic list
ros2 topic list -t               # Avec types
ros2 topic echo /cmd_vel         # Afficher messages
ros2 topic hz /scan              # Fr\\xE9quence
ros2 topic bw /camera/image_raw  # Bande passante
ros2 topic info /odom --verbose  # QoS profiles

# Publier manuellement
ros2 topic pub /cmd_vel geometry_msgs/msg/Twist \\\\
  "{linear: {x: 0.5}, angular: {z: 0.2}}" --rate 10

# === SERVICES ===
ros2 service list
ros2 service type /mon_service
ros2 service call /mon_service std_srvs/srv/Trigger "{}"

# === ACTIONS ===
ros2 action list
ros2 action info /navigate_to_pose
ros2 action send_goal /fibonacci \\\\
  action_tutorials_interfaces/action/Fibonacci \\\\
  "{order: 10}"

# === INTERFACES ===
ros2 interface list              # Tous les types
ros2 interface show geometry_msgs/msg/Twist
ros2 interface proto geometry_msgs/msg/Twist
\\\`\\\`\\\`\`},{id:"m2-12",title:"Remapping & Namespaces",done:!1,xp:80,content:\`## Remapping & Namespaces

Le remapping permet de modifier topics/services/nodes sans changer le code.

\\\`\\\`\\\`bash
# Remapper un topic
ros2 run mon_package mon_node \\\\
  --ros-args -r /cmd_vel:=/robot1/cmd_vel

# Remapper le nom du node
ros2 run mon_package mon_node \\\\
  --ros-args -r __node:=mon_robot_principal

# Appliquer un namespace
ros2 run mon_package mon_node \\\\
  --ros-args -r __ns:=/robot1

# Plusieurs remappings
ros2 run mon_package mon_node \\\\
  --ros-args \\\\
  -r __ns:=/robot1 \\\\
  -r /scan:=/robot1/scan \\\\
  -r /cmd_vel:=/robot1/cmd_vel
\\\`\\\`\\\`

### Via Launch file

\\\`\\\`\\\`python
from launch_ros.actions import Node

Node(
    package='mon_package',
    executable='mon_node',
    namespace='robot1',
    remappings=[
        ('/cmd_vel', '/robot1/cmd_vel'),
        ('/scan',    '/robot1/scan'),
    ],
    name='controleur_principal',
)
\\\`\\\`\\\`\`},{id:"m2-13",title:"Interfaces custom \\u2014 srv & action",done:!1,xp:90,content:\`## Cr\\xE9er srv & action personnalis\\xE9s

### Service custom (.srv)

\\\`\\\`\\\`
# mes_interfaces/srv/GetRobotStatus.srv
string robot_id
---
bool actif
float64 vitesse
string etat_courant
string[] erreurs
\\\`\\\`\\\`

### Action custom (.action)

\\\`\\\`\\\`
# mes_interfaces/action/GoToPoint.action
# GOAL
float64 x
float64 y
float64 tolerance
---
# RESULT
bool succes
float64 distance_parcourue
string message
---
# FEEDBACK
float64 distance_restante
float64 progression   # 0.0 \\xE0 1.0
\\\`\\\`\\\`

\\\`\\\`\\\`cmake
# CMakeLists.txt
rosidl_generate_interfaces(\\\${PROJECT_NAME}
  "msg/RobotState.msg"
  "srv/GetRobotStatus.srv"
  "action/GoToPoint.action"
  DEPENDENCIES geometry_msgs std_msgs
)
\\\`\\\`\\\`

\\\`\\\`\\\`bash
# V\\xE9rifier apr\\xE8s compilation
ros2 interface show mes_interfaces/srv/GetRobotStatus
ros2 interface show mes_interfaces/action/GoToPoint
\\\`\\\`\\\`\`},{id:"m2-14",title:"Executor & Multi-Node",done:!1,xp:80,content:\`## Executor & Gestion Multi-Node

### Lancer plusieurs nodes dans un processus

\\\`\\\`\\\`python
import rclpy
from rclpy.executors import (
    SingleThreadedExecutor,
    MultiThreadedExecutor
)
from mon_package.publisher_node import PublisherNode
from mon_package.subscriber_node import SubscriberNode
from mon_package.controleur_node import ControleurNode

def main():
    rclpy.init()

    pub = PublisherNode()
    sub = SubscriberNode()
    ctrl = ControleurNode()

    # Executor multi-thread\\xE9 (3 threads)
    executor = MultiThreadedExecutor(num_threads=3)
    executor.add_node(pub)
    executor.add_node(sub)
    executor.add_node(ctrl)

    try:
        executor.spin()
    except KeyboardInterrupt:
        pass
    finally:
        executor.shutdown()
        pub.destroy_node()
        sub.destroy_node()
        ctrl.destroy_node()
        rclpy.shutdown()
\\\`\\\`\\\`

### Callback Groups

\\\`\\\`\\\`python
from rclpy.callback_groups import (
    ReentrantCallbackGroup,       # Parall\\xE8le
    MutuallyExclusiveCallbackGroup # S\\xE9quentiel
)

class MonNode(Node):
    def __init__(self):
        super().__init__('multi_cb_node')
        parallel = ReentrantCallbackGroup()
        sequential = MutuallyExclusiveCallbackGroup()

        self.create_subscription(
            LaserScan, '/scan', self.scan_cb, 10,
            callback_group=parallel)
        self.create_timer(
            0.1, self.control_loop,
            callback_group=sequential)
\\\`\\\`\\\`\`},{id:"m2-15",title:"Tests unitaires Python ROS2",done:!1,xp:70,content:\`## Tests Unitaires avec pytest

\\\`\\\`\\\`python
# test/test_mon_node.py
import pytest
import rclpy
from std_msgs.msg import String
from mon_package.mon_node import MonNode

@pytest.fixture(scope='module')
def ros_init():
    rclpy.init()
    yield
    rclpy.shutdown()

class TestMonNode:
    def test_creation(self, ros_init):
        node = MonNode()
        assert node.get_name() == 'mon_node'
        node.destroy_node()

    def test_publisher_existe(self, ros_init):
        node = MonNode()
        pubs = node.get_publisher_names_and_types_by_node(
            'mon_node', '')
        assert len(pubs) > 0
        node.destroy_node()

    def test_logique_callback(self, ros_init):
        node = MonNode()
        msg = String(data='test')
        # Appel direct du callback
        result = node.process_message(msg)
        assert result is not None
        node.destroy_node()
\\\`\\\`\\\`

\\\`\\\`\\\`bash
# Lancer les tests
colcon test --packages-select mon_package
colcon test-result --verbose

# Avec pytest directement
pytest src/mon_package/test/ -v
\\\`\\\`\\\`\`}]},{id:3,slug:"intermediaire",label:"Interm\\xE9diaire",color:r.purple,icon:"03",subtitle:"Actions, TF2, URDF, Launch",desc:"Syst\\xE8mes robotiques complets avec navigation et description.",modules:[{id:"m3-1",title:"Actions ROS2",done:!1,xp:120,content:\`## Actions ROS2

Les actions sont pour les t\\xE2ches longues avec feedback.

\\\`\\\`\\\`python
from action_tutorials_interfaces.action import Fibonacci
from rclpy.action import ActionServer, ActionClient

# SERVEUR
class ServeurFibonacci(Node):
    def __init__(self):
        super().__init__('fibonacci_server')
        self._server = ActionServer(
            self, Fibonacci, 'fibonacci',
            self.execute_callback)
    
    async def execute_callback(self, goal_handle):
        feedback_msg = Fibonacci.Feedback()
        sequence = [0, 1]
        
        for i in range(1, goal_handle.request.order):
            sequence.append(sequence[-1] + sequence[-2])
            feedback_msg.partial_sequence = sequence
            goal_handle.publish_feedback(feedback_msg)  # Feedback!
            await asyncio.sleep(0.1)
        
        goal_handle.succeed()
        result = Fibonacci.Result()
        result.sequence = sequence
        return result

# CLIENT
class ClientFibonacci(Node):
    def __init__(self):
        super().__init__('fibonacci_client')
        self._client = ActionClient(self, Fibonacci, 'fibonacci')
    
    def send_goal(self, order):
        goal = Fibonacci.Goal()
        goal.order = order
        self._client.wait_for_server()
        future = self._client.send_goal_async(
            goal,
            feedback_callback=self.feedback_cb)
        future.add_done_callback(self.goal_response_cb)
    
    def feedback_cb(self, feedback):
        seq = feedback.feedback.partial_sequence
        self.get_logger().info(f'Feedback: {seq}')
\\\`\\\`\\\`\`},{id:"m3-2",title:"Lifecycle Nodes",done:!1,xp:90,content:\`## Lifecycle Nodes

Les Lifecycle Nodes permettent de contr\\xF4ler le cycle de vie d'un node.

\\\`\\\`\\\`python
from rclpy.lifecycle import Node as LifecycleNode
from rclpy.lifecycle import State, TransitionCallbackReturn

class MonLifecycleNode(LifecycleNode):
    def __init__(self):
        super().__init__('lifecycle_node')
    
    # Appel\\xE9 lors de la configuration
    def on_configure(self, state: State) -> TransitionCallbackReturn:
        self.get_logger().info('Configuration...')
        # Initialiser sans d\\xE9marrer
        return TransitionCallbackReturn.SUCCESS
    
    # Appel\\xE9 au d\\xE9marrage actif
    def on_activate(self, state: State) -> TransitionCallbackReturn:
        self.get_logger().info('Activation!')
        # D\\xE9marrer publishers, timers...
        return TransitionCallbackReturn.SUCCESS
    
    def on_deactivate(self, state: State) -> TransitionCallbackReturn:
        self.get_logger().info('D\\xE9sactivation')
        return TransitionCallbackReturn.SUCCESS
    
    def on_cleanup(self, state: State) -> TransitionCallbackReturn:
        self.get_logger().info('Nettoyage')
        return TransitionCallbackReturn.SUCCESS
\\\`\\\`\\\`

\\\`\\\`\\\`bash
# Contr\\xF4ler via CLI
ros2 lifecycle get /lifecycle_node
ros2 lifecycle set /lifecycle_node configure
ros2 lifecycle set /lifecycle_node activate
ros2 lifecycle set /lifecycle_node deactivate
\\\`\\\`\\\`\`},{id:"m3-3",title:"TF2 & Transformations",done:!1,xp:110,content:\`## TF2 & Transformations

TF2 g\\xE8re les frames de coordonn\\xE9es entre les parties du robot.

\\\`\\\`\\\`python
import tf2_ros
from geometry_msgs.msg import TransformStamped
from tf2_ros import TransformBroadcaster
import tf_transformations

class BroadcasterNode(Node):
    def __init__(self):
        super().__init__('tf_broadcaster')
        self.br = TransformBroadcaster(self)
        self.timer = self.create_timer(0.1, self.broadcast)
    
    def broadcast(self):
        t = TransformStamped()
        t.header.stamp = self.get_clock().now().to_msg()
        t.header.frame_id = 'world'
        t.child_frame_id = 'robot'
        t.transform.translation.x = 1.0
        t.transform.translation.y = 0.5
        t.transform.translation.z = 0.0
        # Quaternion pour rotation (roll, pitch, yaw)
        q = tf_transformations.quaternion_from_euler(0, 0, 1.57)
        t.transform.rotation.x = q[0]
        t.transform.rotation.y = q[1]
        t.transform.rotation.z = q[2]
        t.transform.rotation.w = q[3]
        self.br.sendTransform(t)
\\\`\\\`\\\`

\\\`\\\`\\\`bash
# Outils TF2
ros2 run tf2_tools view_frames       # Visualiser arbre TF
ros2 run tf2_ros tf2_echo world robot  # Voir transform
ros2 run rqt_tf_tree rqt_tf_tree      # GUI
\\\`\\\`\\\`\`},{id:"m3-4",title:"URDF & Description Robot",done:!1,xp:130,content:\`## URDF \\u2014 Description du Robot

\\\`\\\`\\\`xml
<!-- robot.urdf.xacro -->
<?xml version="1.0"?>
<robot name="mon_robot" xmlns:xacro="http://ros.org/wiki/xacro">
  
  <!-- Base Link -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.3 0.2 0.1"/>
      </geometry>
      <material name="blue">
        <color rgba="0 0 1 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <box size="0.3 0.2 0.1"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1.0"/>
      <inertia ixx="0.01" ixy="0" ixz="0"
               iyy="0.01" iyz="0" izz="0.01"/>
    </inertial>
  </link>
  
  <!-- Roue gauche -->
  <link name="roue_gauche">
    <visual>
      <geometry>
        <cylinder radius="0.05" length="0.04"/>
      </geometry>
    </visual>
  </link>
  
  <!-- Joint base -> roue_gauche -->
  <joint name="joint_roue_g" type="continuous">
    <parent link="base_link"/>
    <child link="roue_gauche"/>
    <origin xyz="-0.1 0.12 0" rpy="1.5707 0 0"/>
    <axis xyz="0 0 1"/>
  </joint>
  
</robot>
\\\`\\\`\\\`

\\\`\\\`\\\`bash
# V\\xE9rifier et visualiser
check_urdf robot.urdf
ros2 run urdf_tutorial display --urdf robot.urdf
\\\`\\\`\\\`\`},{id:"m3-5",title:"Launch Files Python",done:!1,xp:100,content:\`## Launch Files Python

\\\`\\\`\\\`python
# mon_launch.py
from launch import LaunchDescription
from launch.actions import (
    DeclareLaunchArgument, ExecuteProcess,
    IncludeLaunchDescription, GroupAction
)
from launch.substitutions import LaunchConfiguration, PathJoinSubstitution
from launch_ros.actions import Node, PushRosNamespace
from launch_ros.substitutions import FindPackageShare

def generate_launch_description():
    # Arguments configurables
    use_sim_time = DeclareLaunchArgument(
        'use_sim_time', default_value='false')
    robot_name = DeclareLaunchArgument(
        'robot_name', default_value='mon_robot')
    
    # Node 1 : Publisher
    publisher_node = Node(
        package='mon_package',
        executable='publisher',
        name='publisher',
        parameters=[{
            'use_sim_time': LaunchConfiguration('use_sim_time'),
            'frequence': 10.0,
        }],
        remappings=[('/cmd_vel', '/robot/cmd_vel')],
        output='screen',
    )
    
    # Node 2 : depuis un autre package
    nav_launch = IncludeLaunchDescription(
        PathJoinSubstitution([
            FindPackageShare('nav2_bringup'),
            'launch', 'navigation_launch.py'
        ]),
        launch_arguments={'use_sim_time': 'true'}.items(),
    )
    
    return LaunchDescription([
        use_sim_time,
        robot_name,
        publisher_node,
        nav_launch,
    ])
\\\`\\\`\\\`

\\\`\\\`\\\`bash
ros2 launch mon_package mon_launch.py use_sim_time:=true
\\\`\\\`\\\`\`},{id:"m3-6",title:"Parameters & rqt",done:!1,xp:80,content:\`## Param\\xE8tres ROS2

\\\`\\\`\\\`python
class NodeAvecParams(Node):
    def __init__(self):
        super().__init__('node_params')
        
        # D\\xE9clarer param\\xE8tres avec valeurs par d\\xE9faut
        self.declare_parameter('frequence', 10.0)
        self.declare_parameter('nom_robot', 'R2D2')
        self.declare_parameter('actif', True)
        
        # Lire les valeurs
        freq = self.get_parameter('frequence').value
        nom = self.get_parameter('nom_robot').value
        
        # Callback sur changement
        self.add_on_set_parameters_callback(
            self.params_callback)
    
    def params_callback(self, params):
        for p in params:
            self.get_logger().info(
                f'Param\\xE8tre modifi\\xE9: {p.name} = {p.value}')
        return SetParametersResult(successful=True)
\\\`\\\`\\\`

\\\`\\\`\\\`bash
# CLI
ros2 param list /node_params
ros2 param get /node_params frequence
ros2 param set /node_params frequence 20.0
ros2 param dump /node_params           # Export YAML

# rqt outils graphiques
rqt_graph           # Graphe nodes/topics
rqt_console         # Logs
rqt_plot            # Graphiques temps r\\xE9el
rqt_image_view      # Visualiser cam\\xE9ra
\\\`\\\`\\\`\`},{id:"m3-7",title:"Bag Files : Enregistrement",done:!1,xp:70,content:\`## Bag Files \\u2014 Enregistrement et Replay

\\\`\\\`\\\`bash
# Enregistrer TOUS les topics
ros2 bag record -a

# Enregistrer topics sp\\xE9cifiques
ros2 bag record /scan /odom /cmd_vel -o mon_enregistrement

# Inspecter un bag
ros2 bag info mon_enregistrement/

# Rejouer
ros2 bag play mon_enregistrement/
ros2 bag play mon_enregistrement/ --rate 0.5  # Moiti\\xE9 vitesse
ros2 bag play mon_enregistrement/ --loop       # En boucle

# Filtrer en rejouant
ros2 bag play mon_enregistrement/ \\\\
  --topics /scan /odom
\\\`\\\`\\\`

\\\`\\\`\\\`python
# Lire un bag programmatiquement
from rosbag2_py import SequentialReader
from rclpy.serialization import deserialize_message

reader = SequentialReader()
reader.open(storage_options, converter_options)
while reader.has_next():
    (topic, data, timestamp) = reader.read_next()
    msg = deserialize_message(data, type_map[topic])
\\\`\\\`\\\`\`},{id:"m3-8",title:"Composable Nodes",done:!1,xp:90,content:\`## Composable Nodes \\u2014 Performance

Les composable nodes s'ex\\xE9cutent dans le m\\xEAme processus \\u2192 moins de latence.

\\\`\\\`\\\`cpp
// C++ \\u2014 Composable Node
#include "rclcpp/rclcpp.hpp"
#include "rclcpp_components/register_node_macro.hpp"

namespace mon_package {

class MonNodeComposable : public rclcpp::Node {
public:
    explicit MonNodeComposable(
        const rclcpp::NodeOptions& options)
    : Node("composable_node", options) {
        RCLCPP_INFO(get_logger(), "Composable node d\\xE9marr\\xE9");
    }
};

} // namespace mon_package

RCLCPP_COMPONENTS_REGISTER_NODE(
    mon_package::MonNodeComposable)
\\\`\\\`\\\`

\\\`\\\`\\\`python
# Launch avec composable nodes
from launch_ros.actions import ComposableNodeContainer
from launch_ros.descriptions import ComposableNode

container = ComposableNodeContainer(
    name='mon_container',
    namespace='',
    package='rclcpp_components',
    executable='component_container',
    composable_node_descriptions=[
        ComposableNode(
            package='mon_package',
            plugin='mon_package::MonNodeComposable',
            name='composable_1'),
    ],
    output='screen',
)
\\\`\\\`\\\`\`},{id:"m3-9",title:"rosbag2 Avanc\\xE9 & Replay",done:!1,xp:80,content:\`## rosbag2 \\u2014 Avanc\\xE9

### Enregistrement s\\xE9lectif

\\\`\\\`\\\`bash
# Enregistrer avec filtres
ros2 bag record /scan /odom /cmd_vel /imu -o mon_bag

# Avec compression
ros2 bag record -a --compression-mode file \\\\
  --compression-format zstd -o bag_compresse

# Info d\\xE9taill\\xE9e
ros2 bag info mon_bag/
\\\`\\\`\\\`

### Filtrer \\xE0 la lecture

\\\`\\\`\\\`bash
ros2 bag play mon_bag/ \\\\
  --topics /scan /odom \\\\
  --start-offset 10.0 \\\\
  --duration 30.0 \\\\
  --rate 0.5 \\\\
  --loop
\\\`\\\`\\\`

### Lire programmatiquement

\\\`\\\`\\\`python
from rosbag2_py import SequentialReader, StorageOptions, ConverterOptions
from rclpy.serialization import deserialize_message
from rosidl_runtime_py.utilities import get_message

reader = SequentialReader()
storage_options = StorageOptions(uri='mon_bag', storage_id='mcap')
converter_options = ConverterOptions('', '')
reader.open(storage_options, converter_options)

topics_types = {
    m.name: m.type
    for m in reader.get_all_topics_and_types()
}

while reader.has_next():
    topic, data, ts = reader.read_next()
    msg_type = get_message(topics_types[topic])
    msg = deserialize_message(data, msg_type)
    print(f'{topic} @ {ts}: {msg}')
\\\`\\\`\\\`\`},{id:"m3-10",title:"Plugins & Pluginlib (C++)",done:!1,xp:90,content:\`## Pluginlib \\u2014 Architecture de Plugins C++

pluginlib permet de charger dynamiquement des impl\\xE9mentations sans recompiler.

\\\`\\\`\\\`cpp
// include/mon_package/base_plugin.hpp
#pragma once
#include <string>

namespace mon_package {

class BasePlugin {
public:
  virtual ~BasePlugin() = default;
  virtual void initialize(const std::string& name) = 0;
  virtual double compute(double input) = 0;
  virtual std::string getName() const = 0;
};

}  // namespace mon_package
\\\`\\\`\\\`

\\\`\\\`\\\`cpp
// src/plugins/gaussian_plugin.cpp
#include "mon_package/base_plugin.hpp"
#include "pluginlib/class_list_macros.hpp"
#include <cmath>

namespace mon_package {

class GaussianPlugin : public BasePlugin {
public:
  void initialize(const std::string& name) override {
    name_ = name;
  }
  double compute(double x) override {
    return std::exp(-x * x / 2.0);
  }
  std::string getName() const override { return name_; }
private:
  std::string name_;
};

}

PLUGINLIB_EXPORT_CLASS(mon_package::GaussianPlugin, mon_package::BasePlugin)
\\\`\\\`\\\`

\\\`\\\`\\\`xml
<!-- plugins.xml -->
<library path="mon_package_plugins">
  <class type="mon_package::GaussianPlugin"
         base_class_type="mon_package::BasePlugin">
    <description>Filtre gaussien</description>
  </class>
</library>
\\\`\\\`\\\`\`}]},{id:4,slug:"avance",label:"Avanc\\xE9",color:r.amber,icon:"04",subtitle:"Nav2, MoveIt2, Gazebo, ros2_control, Perception",desc:"Navigation autonome, manipulation, simulation Gazebo et abstraction hardware.",modules:[{id:"m4-1",title:"Nav2 \\u2014 Architecture & Installation",done:!1,xp:180,content:\`## Nav2 \\u2014 Architecture Compl\\xE8te

Nav2 est la stack de navigation officielle de ROS2. Elle repose sur des Behavior Trees (BT) pour orchestrer la navigation.

### Architecture Nav2

\\\`\\\`\\\`
       \\u250C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2510
       \\u2502         BT Navigator                 \\u2502
       \\u2502  (bt_navigator) \\u2014 orchestre tout     \\u2502
       \\u2514\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u252C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2518
                \\u2502
    \\u250C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u253C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2510
    \\u25BC           \\u25BC           \\u25BC
Planner    Controller   Recovery
(Global)   (Local)      Behaviors
NavFn      DWB/MPPI    Spin/Wait...
    \\u2502           \\u2502
    \\u25BC           \\u25BC
Global      Local
Costmap     Costmap
\\\`\\\`\\\`

### Installation

\\\`\\\`\\\`bash
# Jazzy
sudo apt install ros-jazzy-navigation2 \\\\
                 ros-jazzy-nav2-bringup \\\\
                 ros-jazzy-nav2-simple-commander
\\\`\\\`\\\`

### Premier lancement avec TurtleBot3

\\\`\\\`\\\`bash
# Installer TurtleBot3
sudo apt install ros-jazzy-turtlebot3-gazebo \\\\
                 ros-jazzy-turtlebot3-navigation2

export TURTLEBOT3_MODEL=waffle
export GAZEBO_MODEL_PATH=$GAZEBO_MODEL_PATH:/opt/ros/jazzy/share/turtlebot3_gazebo/models

# Lancer simulation + navigation
ros2 launch turtlebot3_gazebo turtlebot3_world.launch.py
ros2 launch turtlebot3_navigation2 navigation2.launch.py \\\\
  map:=$HOME/map.yaml use_sim_time:=true
\\\`\\\`\\\`

### Envoyer des goals programmatiquement

\\\`\\\`\\\`python
from nav2_simple_commander.robot_navigator import BasicNavigator, TaskResult
from geometry_msgs.msg import PoseStamped
import rclpy, math

rclpy.init()
nav = BasicNavigator()

# Attendre que Nav2 soit actif
nav.waitUntilNav2Active()

# Construire un goal
def make_pose(x, y, yaw_deg=0.0):
    p = PoseStamped()
    p.header.frame_id = 'map'
    p.header.stamp = nav.get_clock().now().to_msg()
    p.pose.position.x = x
    p.pose.position.y = y
    # Convertir yaw (degr\\xE9s) -> quaternion
    yaw = math.radians(yaw_deg)
    p.pose.orientation.z = math.sin(yaw / 2)
    p.pose.orientation.w = math.cos(yaw / 2)
    return p

# Naviguer vers un point
nav.goToPose(make_pose(2.0, 1.5, 90.0))

while not nav.isTaskComplete():
    fb = nav.getFeedback()
    if fb:
        dist = fb.distance_remaining
        print(f"Distance restante : {dist:.2f} m")

result = nav.getResult()
if result == TaskResult.SUCCEEDED:
    print("Navigation r\\xE9ussie !")
elif result == TaskResult.FAILED:
    print("Navigation \\xE9chou\\xE9e !")
\\\`\\\`\\\`

### Navigation multi-waypoints

\\\`\\\`\\\`python
# D\\xE9finir une liste de waypoints
waypoints = [
    make_pose(1.0, 0.5),
    make_pose(2.0, 1.5, 90.0),
    make_pose(1.5, 3.0, 180.0),
    make_pose(0.0, 0.0),   # Retour \\xE0 la base
]

nav.followWaypoints(waypoints)

while not nav.isTaskComplete():
    fb = nav.getFeedback()
    if fb:
        idx = fb.current_waypoint
        print(f"Waypoint {idx + 1}/{len(waypoints)}")
\\\`\\\`\\\`

### Commandes CLI utiles

\\\`\\\`\\\`bash
ros2 topic echo /plan          # Plan global
ros2 topic echo /local_plan    # Plan local
ros2 topic echo /costmap/costmap  # Costmap
ros2 service list | grep nav   # Services Nav2
\\\`\\\`\\\`\`},{id:"m4-2",title:"Nav2 \\u2014 Costmaps & Param\\xE8tres",done:!1,xp:160,content:\`## Nav2 \\u2014 Costmaps & Tuning

Les costmaps repr\\xE9sentent l'espace de navigation du robot. Une zone avec valeur 0 = libre, 254 = obstacle.

### Configuration nav2_params.yaml

\\\`\\\`\\\`yaml
# nav2_params.yaml \\u2014 configuration compl\\xE8te
bt_navigator:
  ros__parameters:
    use_sim_time: true
    global_frame: map
    robot_base_frame: base_link
    odom_topic: /odom
    bt_loop_duration: 10        # ms entre it\\xE9rations BT
    default_server_timeout: 20  # sec timeout serveur
    default_nav_to_pose_bt_xml: |
      navigate_w_replanning_and_recovery.xml

planner_server:
  ros__parameters:
    expected_planner_frequency: 20.0
    use_sim_time: true
    planners:
      - name: GridBased
        type: nav2_navfn_planner/NavfnPlanner
    GridBased:
      use_astar: false        # Dijkstra par d\\xE9faut
      allow_unknown: true     # Planifier en zone inconnue
      tolerance: 0.5          # Tol\\xE9rance d'arriv\\xE9e (m)

controller_server:
  ros__parameters:
    use_sim_time: true
    controller_frequency: 20.0
    min_x_velocity_threshold: 0.001
    min_y_velocity_threshold: 0.5
    min_theta_velocity_threshold: 0.001
    failure_tolerance: 0.3
    progress_checker_plugin: progress_checker
    goal_checker_plugins: [general_goal_checker]
    controller_plugins: [FollowPath]

    progress_checker:
      plugin: nav2_controller::SimpleProgressChecker
      required_movement_radius: 0.5
      movement_time_allowance: 10.0

    general_goal_checker:
      plugin: nav2_controller::SimpleGoalChecker
      xy_goal_tolerance: 0.25   # Pr\\xE9cision XY (m)
      yaw_goal_tolerance: 0.25  # Pr\\xE9cision angle (rad)
      stateful: true

    FollowPath:
      plugin: dwb_core::DWBLocalPlanner
      # DWB \\u2014 Dynamic Window Approach
      min_vel_x: 0.0
      max_vel_x: 0.26          # Vitesse max en avant
      max_vel_theta: 1.0       # Vitesse rotation max
      min_speed_xy: 0.0
      max_speed_xy: 0.26
      acc_lim_x: 2.5           # Acc\\xE9l\\xE9ration max
      acc_lim_theta: 3.2
      decel_lim_x: -2.5
\\\`\\\`\\\`

### Costmap configuration

\\\`\\\`\\\`yaml
local_costmap:
  local_costmap:
    ros__parameters:
      update_frequency: 5.0
      publish_frequency: 2.0
      global_frame: odom
      robot_base_frame: base_link
      rolling_window: true
      width: 3                 # m \\u2014 taille de la fen\\xEAtre
      height: 3
      resolution: 0.05         # m/cellule
      robot_radius: 0.22       # Rayon du robot (m)
      plugins: [voxel_layer, inflation_layer]

      voxel_layer:
        plugin: nav2_costmap_2d::VoxelLayer
        enabled: true
        publish_voxel_map: true
        origin_z: 0.0
        z_resolution: 0.05
        observation_sources: scan
        scan:
          topic: /scan
          max_obstacle_height: 2.0
          clearing: true
          marking: true
          sensor_frame: base_scan

      inflation_layer:
        plugin: nav2_costmap_2d::InflationLayer
        cost_scaling_factor: 3.0   # Gradient autour obstacles
        inflation_radius: 0.55     # Zone d'inflation (m)

global_costmap:
  global_costmap:
    ros__parameters:
      update_frequency: 1.0
      publish_frequency: 1.0
      global_frame: map
      robot_base_frame: base_link
      resolution: 0.05
      track_unknown_space: true
      plugins: [static_layer, obstacle_layer, inflation_layer]

      static_layer:
        plugin: nav2_costmap_2d::StaticLayer
        map_subscribe_transient_local: true
\\\`\\\`\\\`

### Utiliser MPPI Controller (Nav2 Jazzy+)

\\\`\\\`\\\`yaml
# MPPI \\u2014 Model Predictive Path Integral
# Plus performant que DWB pour les espaces dynamiques
FollowPath:
  plugin: nav2_mppi_controller::MPPIController
  time_steps: 56           # Horizon temporel
  model_dt: 0.05           # Pas de temps simulation
  batch_size: 2000         # Nombre de trajectoires
  vx_std: 0.2              # Bruit vitesse x
  wz_std: 0.4              # Bruit rotation
  vx_max: 0.5
  vx_min: -0.35
  wz_max: 1.9
  iteration_count: 1
  critics:
    - GoalCritic
    - GoalAngleCritic
    - ObstaclesCritic
    - PathAlignCritic
    - PathFollowCritic
\\\`\\\`\\\`\`},{id:"m4-3",title:"SLAM \\u2014 Cartographie & Localisation",done:!1,xp:160,content:\`## SLAM \\u2014 Simultaneous Localization And Mapping

SLAM permet au robot de construire une carte ET de se localiser en m\\xEAme temps.

### slam_toolbox \\u2014 Le standard ROS2

\\\`\\\`\\\`bash
# Installation
sudo apt install ros-jazzy-slam-toolbox

# Mode online asynchrone (recommand\\xE9)
ros2 launch slam_toolbox online_async_launch.py \\\\
  use_sim_time:=true

# Mode online synchrone (plus pr\\xE9cis, plus lent)
ros2 launch slam_toolbox online_sync_launch.py

# Mode lifelong (cartographie continue)
ros2 launch slam_toolbox lifelong_launch.py
\\\`\\\`\\\`

### Param\\xE8tres slam_toolbox

\\\`\\\`\\\`yaml
# slam_params.yaml
slam_toolbox:
  ros__parameters:
    # Mode
    mode: mapping             # mapping | localization

    # Frames
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint

    # Topics
    scan_topic: /scan
    map_file_name: map        # Pour mode localization

    # R\\xE9solution et performance
    resolution: 0.05          # m/pixel \\u2014 plus petit = plus pr\\xE9cis
    max_laser_range: 12.0     # m \\u2014 port\\xE9e max laser
    minimum_travel_distance: 0.5    # m \\u2014 distance min entre poses
    minimum_travel_heading: 0.5     # rad \\u2014 angle min entre poses

    # Solver
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    loop_search_maximum_distance: 3.0  # m \\u2014 recherche de boucles

    # Debug
    debug_logging: false
    throttle_scans: 1
    transform_publish_period: 0.02  # sec
    map_update_interval: 5.0        # sec
\\\`\\\`\\\`

### Sauvegarder et recharger une carte

\\\`\\\`\\\`bash
# M\\xE9thode 1 \\u2014 service slam_toolbox
ros2 service call /slam_toolbox/save_map \\\\
  slam_toolbox/srv/SaveMap \\\\
  "{name: {data: '/home/user/ma_carte'}}"

# M\\xE9thode 2 \\u2014 map_saver (produit .pgm + .yaml)
ros2 run nav2_map_server map_saver_cli \\\\
  -f /home/user/ma_carte \\\\
  --ros-args -p save_map_timeout:=5.0

# Charger une carte existante
ros2 run nav2_map_server map_server \\\\
  --ros-args -p yaml_filename:=/home/user/ma_carte.yaml

# Activer le map_server
ros2 lifecycle set /map_server configure
ros2 lifecycle set /map_server activate
\\\`\\\`\\\`

### Mode localisation uniquement (AMCL)

\\\`\\\`\\\`bash
# Une fois la carte cr\\xE9\\xE9e, utiliser AMCL pour se localiser
# AMCL = Adaptive Monte Carlo Localization

# Lancer AMCL
ros2 launch nav2_bringup localization_launch.py \\\\
  map:=/home/user/ma_carte.yaml \\\\
  use_sim_time:=true
\\\`\\\`\\\`

\\\`\\\`\\\`yaml
# Param\\xE8tres AMCL
amcl:
  ros__parameters:
    use_sim_time: true
    alpha1: 0.2         # Bruit rotation/rotation
    alpha2: 0.2         # Bruit rotation/translation
    alpha3: 0.2         # Bruit translation/translation
    alpha4: 0.2         # Bruit translation/rotation
    alpha5: 0.2         # Bruit omnidirectionnel
    beam_skip_distance: 0.5
    beam_skip_error_threshold: 0.9
    beam_skip_threshold: 0.3
    do_beamskip: false
    global_frame_id: map
    lambda_short: 0.1
    laser_likelihood_max_dist: 2.0
    laser_max_range: 100.0
    laser_min_range: -1.0
    laser_model_type: likelihood_field
    max_beams: 60
    max_particles: 2000
    min_particles: 500
    odom_frame_id: odom
    pf_err: 0.05
    pf_z: 0.99
    recovery_alpha_fast: 0.0
    recovery_alpha_slow: 0.0
    resample_interval: 1
    robot_model_type: nav2_amcl::DifferentialMotionModel
    save_pose_rate: 0.5
    sigma_hit: 0.2
    tf_broadcast: true
    transform_tolerance: 1.0
    update_min_a: 0.2    # Angle min avant mise \\xE0 jour
    update_min_d: 0.25   # Distance min avant mise \\xE0 jour
    z_hit: 0.5
    z_max: 0.05
    z_rand: 0.5
    z_short: 0.05
    scan_topic: scan
\\\`\\\`\\\`\`},{id:"m4-4",title:"Gazebo Harmonic & Fortress \\u2014 Simulation",done:!1,xp:200,content:\`## Simulation Gazebo \\u2014 Guide Complet

### Quelle version choisir ?

\\\`\\\`\\\`
ROS2 Jazzy  \\u2192  Gazebo Harmonic (recommand\\xE9)
ROS2 Jazzy   \\u2192  Gazebo Harmonic (nouveau, recommand\\xE9)
\\\`\\\`\\\`

### Installation

\\\`\\\`\\\`bash
# === Jazzy + Gazebo Harmonic ===
sudo apt install ros-jazzy-ros-gz          # Package principal
sudo apt install gz-harmonic               # Gazebo standalone

# === Jazzy + Gazebo Fortress ===
sudo apt install ros-jazzy-ros-ign-bridge \\\\
                 ros-jazzy-ros-ign-gazebo
\\\`\\\`\\\`

### Cr\\xE9er un world SDF complet

\\\`\\\`\\\`xml
<!-- worlds/mon_monde.world -->
<?xml version="1.0" ?>
<sdf version="1.9">
  <world name="mon_monde">

    <!-- Physique -->
    <physics name="1ms" type="ignored">
      <max_step_size>0.001</max_step_size>
      <real_time_factor>1.0</real_time_factor>
    </physics>

    <!-- Plugins syst\\xE8me requis -->
    <plugin filename="gz-sim-physics-system"
            name="gz::sim::systems::Physics"/>
    <plugin filename="gz-sim-sensors-system"
            name="gz::sim::systems::Sensors">
      <render_engine>ogre2</render_engine>
    </plugin>
    <plugin filename="gz-sim-scene-broadcaster-system"
            name="gz::sim::systems::SceneBroadcaster"/>
    <plugin filename="gz-sim-user-commands-system"
            name="gz::sim::systems::UserCommands"/>
    <plugin filename="gz-sim-ros2-control-system"
            name="gz::sim::systems::ROS2Control">
      <parameters>$(find mon_package)/config/controllers.yaml</parameters>
    </plugin>

    <!-- Lumi\\xE8re -->
    <light type="directional" name="sun">
      <cast_shadows>true</cast_shadows>
      <pose>0 0 10 0 0 0</pose>
      <diffuse>0.8 0.8 0.8 1</diffuse>
      <specular>0.2 0.2 0.2 1</specular>
      <direction>-0.5 0.1 -0.9</direction>
    </light>

    <!-- Sol -->
    <model name="ground_plane">
      <static>true</static>
      <link name="link">
        <collision name="collision">
          <geometry><plane><normal>0 0 1</normal></plane></geometry>
        </collision>
        <visual name="visual">
          <geometry><plane><normal>0 0 1</normal><size>100 100</size></plane></geometry>
          <material>
            <ambient>0.8 0.8 0.8 1</ambient>
            <diffuse>0.8 0.8 0.8 1</diffuse>
          </material>
        </visual>
      </link>
    </model>

    <!-- Mur obstacle -->
    <model name="mur">
      <static>true</static>
      <pose>2.0 0 0.5 0 0 0</pose>
      <link name="link">
        <collision name="col">
          <geometry><box><size>0.1 2.0 1.0</size></box></geometry>
        </collision>
        <visual name="vis">
          <geometry><box><size>0.1 2.0 1.0</size></box></geometry>
          <material><ambient>0.5 0.2 0.1 1</ambient></material>
        </visual>
      </link>
    </model>

  </world>
</sdf>
\\\`\\\`\\\`

### Bridge Gazebo \\u2194 ROS2

\\\`\\\`\\\`bash
# Bridge bidirectionnel (Harmonic/Jazzy)
ros2 run ros_gz_bridge parameter_bridge \\\\
  /cmd_vel@geometry_msgs/msg/Twist]gz.msgs.Twist \\\\
  /odom@nav_msgs/msg/Odometry[gz.msgs.Odometry \\\\
  /scan@sensor_msgs/msg/LaserScan[gz.msgs.LaserScan \\\\
  /camera/image_raw@sensor_msgs/msg/Image[gz.msgs.Image \\\\
  /imu@sensor_msgs/msg/Imu[gz.msgs.IMU \\\\
  /clock@rosgraph_msgs/msg/Clock[gz.msgs.Clock

# [ = Gz -> ROS  /  ] = ROS -> Gz  /  @ = bidirectionnel
\\\`\\\`\\\`

### Spawn d'un robot depuis URDF

\\\`\\\`\\\`python
# launch/simulation.launch.py
from launch import LaunchDescription
from launch_ros.actions import Node
from launch.actions import ExecuteProcess
from ament_index_python.packages import get_package_share_directory
import os, xacro

def generate_launch_description():
    pkg = get_package_share_directory('mon_package')

    # G\\xE9n\\xE9rer URDF depuis Xacro
    xacro_file = os.path.join(pkg, 'urdf', 'robot.urdf.xacro')
    robot_desc = xacro.process_file(xacro_file).toxml()

    # Lancer Gazebo
    gz_sim = ExecuteProcess(
        cmd=['gz', 'sim', '-r',
             os.path.join(pkg, 'worlds', 'mon_monde.world')],
        output='screen'
    )

    # Publisher robot_state
    robot_state_pub = Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{
            'robot_description': robot_desc,
            'use_sim_time': True,
        }]
    )

    # Spawner du robot dans Gazebo
    spawner = Node(
        package='ros_gz_sim',
        executable='create',
        arguments=[
            '-name', 'mon_robot',
            '-topic', 'robot_description',
            '-x', '0', '-y', '0', '-z', '0.3',
        ],
        output='screen'
    )

    return LaunchDescription([gz_sim, robot_state_pub, spawner])
\\\`\\\`\\\`\`},{id:"m4-5",title:"MoveIt2 \\u2014 Manipulation Robotique",done:!1,xp:220,content:\`## MoveIt2 \\u2014 Manipulation Robotique

MoveIt2 est le framework de r\\xE9f\\xE9rence pour la planification de mouvement de bras robotiques.

### Installation

\\\`\\\`\\\`bash
# Jazzy
sudo apt install ros-jazzy-moveit \\\\
                 ros-jazzy-moveit-setup-assistant \\\\
                 ros-jazzy-moveit-ros-visualization

# Jazzy
sudo apt install ros-jazzy-moveit \\\\
                 ros-jazzy-moveit-setup-assistant
\\\`\\\`\\\`

### Configurer avec MoveIt Setup Assistant

\\\`\\\`\\\`bash
# Lancer l'assistant graphique
ros2 launch moveit_setup_assistant setup_assistant.launch.py

# L'assistant guide pour :
# 1. Charger le URDF du robot
# 2. D\\xE9finir les groupes de planification (ex: "arm", "gripper")
# 3. Configurer poses pr\\xE9d\\xE9finies (home, transport...)
# 4. D\\xE9clarer les paires de collision \\xE0 ignorer
# 5. G\\xE9n\\xE9rer le package de configuration MoveIt
\\\`\\\`\\\`

### Planification de mouvement (Python API)

\\\`\\\`\\\`python
import rclpy
from rclpy.node import Node
from moveit.planning import MoveItPy, PlanRequestParameters
from moveit.core.robot_state import RobotState
from moveit.core.kinematic_constraints import construct_joint_constraint
from geometry_msgs.msg import Pose, PoseStamped
import numpy as np

class BrasRobot(Node):
    def __init__(self):
        super().__init__('bras_robot')

        # Initialiser MoveIt2
        self.moveit = MoveItPy(node_name='moveit_py')
        self.arm = self.moveit.get_planning_component('arm')
        self.gripper = self.moveit.get_planning_component('gripper')

    def aller_a_home(self):
        """Aller \\xE0 la pose 'home' pr\\xE9d\\xE9finie."""
        self.arm.set_start_state_to_current_state()
        self.arm.set_goal_state(configuration_name='home')
        plan = self.arm.plan()
        if plan:
            self.moveit.execute(plan.trajectory, controllers=[])
            self.get_logger().info('Position home atteinte')
        else:
            self.get_logger().error('Planification \\xE9chou\\xE9e')

    def aller_a_pose(self, x: float, y: float, z: float,
                     qx=0.0, qy=0.0, qz=0.0, qw=1.0):
        """Planifier vers une pose cart\\xE9sienne."""
        pose = PoseStamped()
        pose.header.frame_id = 'base_link'
        pose.pose.position.x = x
        pose.pose.position.y = y
        pose.pose.position.z = z
        pose.pose.orientation.x = qx
        pose.pose.orientation.y = qy
        pose.pose.orientation.z = qz
        pose.pose.orientation.w = qw

        self.arm.set_start_state_to_current_state()
        self.arm.set_goal_state(
            pose_stamped_msg=pose,
            pose_link='tool_link'  # End-effector
        )

        # Param\\xE8tres de planification
        params = PlanRequestParameters(
            self.moveit, 'ompl_rrtc'  # Planner OMPL
        )
        params.max_acceleration_scaling_factor = 0.5
        params.max_velocity_scaling_factor = 0.5

        plan = self.arm.plan(params)
        if plan:
            self.moveit.execute(plan.trajectory, controllers=[])

    def planifier_cartesien(self, waypoints: list):
        """Planification cart\\xE9sienne (chemin droit)."""
        from moveit_msgs.msg import RobotTrajectory
        robot_state = self.arm.get_start_state()

        # computeCartesianPath donne un chemin lin\\xE9aire
        fraction, trajectory = self.arm.compute_cartesian_path(
            waypoints=waypoints,
            eef_step=0.01,         # Pas (m) entre points
            jump_threshold=0.0,    # 0 = d\\xE9sactiver d\\xE9tection saut
        )
        self.get_logger().info(
            f'Chemin cart\\xE9sien: {fraction*100:.1f}% planifi\\xE9')
        if fraction > 0.95:
            self.moveit.execute(trajectory, controllers=[])

    def ouvrir_pince(self):
        self.gripper.set_goal_state(configuration_name='open')
        plan = self.gripper.plan()
        if plan:
            self.moveit.execute(plan.trajectory, controllers=[])

    def fermer_pince(self):
        self.gripper.set_goal_state(configuration_name='closed')
        plan = self.gripper.plan()
        if plan:
            self.moveit.execute(plan.trajectory, controllers=[])

def main():
    rclpy.init()
    robot = BrasRobot()
    robot.aller_a_home()
    robot.ouvrir_pince()
    robot.aller_a_pose(0.3, 0.1, 0.4)
    robot.fermer_pince()
    robot.aller_a_home()
    rclpy.shutdown()
\\\`\\\`\\\`

### SRDF \\u2014 Semantic Robot Description

\\\`\\\`\\\`xml
<!-- config/mon_robot.srdf -->
<?xml version="1.0" ?>
<robot name="mon_robot">

  <!-- Groupes de planification -->
  <group name="arm">
    <chain base_link="base_link" tip_link="tool_link"/>
  </group>
  <group name="gripper">
    <joint name="finger_left_joint"/>
    <joint name="finger_right_joint"/>
  </group>

  <!-- Poses pr\\xE9d\\xE9finies -->
  <group_state name="home" group="arm">
    <joint name="joint1" value="0"/>
    <joint name="joint2" value="-1.57"/>
    <joint name="joint3" value="0"/>
    <joint name="joint4" value="-1.57"/>
    <joint name="joint5" value="0"/>
    <joint name="joint6" value="0"/>
  </group_state>
  <group_state name="transport" group="arm">
    <joint name="joint1" value="0"/>
    <joint name="joint2" value="-0.5"/>
    <joint name="joint3" value="0.5"/>
    <joint name="joint4" value="-1.0"/>
    <joint name="joint5" value="0"/>
    <joint name="joint6" value="0"/>
  </group_state>
  <group_state name="open" group="gripper">
    <joint name="finger_left_joint" value="0.04"/>
    <joint name="finger_right_joint" value="0.04"/>
  </group_state>

  <!-- Paires de collision \\xE0 ignorer (performance) -->
  <disable_collisions link1="base_link" link2="link1" reason="Adjacent"/>
  <disable_collisions link1="link1" link2="link2" reason="Adjacent"/>
  <disable_collisions link1="link2" link2="link3" reason="Adjacent"/>

  <!-- End-effector -->
  <end_effector name="eef" parent_link="tool_link" group="gripper"/>

</robot>
\\\`\\\`\\\`\`},{id:"m4-6",title:"ros2_control \\u2014 Hardware Abstraction",done:!1,xp:180,content:\`## ros2_control \\u2014 Abstraction Hardware Compl\\xE8te

ros2_control s\\xE9pare le code de contr\\xF4le du hardware r\\xE9el ou simul\\xE9.

### Architecture

\\\`\\\`\\\`
       ros2_control_node
              \\u2502
    \\u250C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u25BC\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2510
    \\u2502  Controller Manager\\u2502  \\u2190 g\\xE8re les controllers
    \\u2514\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u252C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2518
           \\u2502  Resource Manager
    \\u250C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u25BC\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2510
    \\u2502  Hardware Interface\\u2502  \\u2190 communique avec HW/Sim
    \\u2514\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2518
         \\u2502           \\u2502
    Moteurs       Capteurs
    (write)        (read)
\\\`\\\`\\\`

### URDF \\u2014 section ros2_control

\\\`\\\`\\\`xml
<!-- urdf/robot.urdf.xacro -->
<ros2_control name="mon_robot_system" type="system">
  <hardware>
    <!-- Pour simulation Gazebo Harmonic (Jazzy) -->
    <plugin>gz_ros2_control/GazeboSimSystem</plugin>

    <!-- Pour Gazebo Fortress (Jazzy) -->
    <!-- <plugin>ign_ros2_control/IgnitionSystem</plugin> -->

    <!-- Pour hardware r\\xE9el -->
    <!-- <plugin>mon_hw_pkg/MonHardwareInterface</plugin> -->
    <!-- <param name="serial_port">/dev/ttyUSB0</param> -->
    <!-- <param name="baudrate">115200</param> -->
  </hardware>

  <!-- Joint diff\\xE9rentiel gauche -->
  <joint name="roue_gauche_joint">
    <command_interface name="velocity">
      <param name="min">-10</param>
      <param name="max">10</param>
    </command_interface>
    <state_interface name="position"/>
    <state_interface name="velocity"/>
  </joint>

  <!-- Joint diff\\xE9rentiel droit -->
  <joint name="roue_droite_joint">
    <command_interface name="velocity">
      <param name="min">-10</param>
      <param name="max">10</param>
    </command_interface>
    <state_interface name="position"/>
    <state_interface name="velocity"/>
  </joint>
</ros2_control>
\\\`\\\`\\\`

### Configuration des controllers

\\\`\\\`\\\`yaml
# config/controllers.yaml
controller_manager:
  ros__parameters:
    update_rate: 100   # Hz \\u2014 fr\\xE9quence de contr\\xF4le

    # Controllers d\\xE9clar\\xE9s
    diff_drive_controller:
      type: diff_drive_controller/DiffDriveController

    joint_state_broadcaster:
      type: joint_state_broadcaster/JointStateBroadcaster

diff_drive_controller:
  ros__parameters:
    left_wheel_names: ['roue_gauche_joint']
    right_wheel_names: ['roue_droite_joint']

    wheel_separation: 0.287       # m entre les roues
    wheel_radius: 0.033           # m rayon des roues

    publish_rate: 50.0            # Hz odom

    # Limites de commande
    linear.x.max_velocity: 0.26
    linear.x.min_velocity: -0.26
    angular.z.max_velocity: 1.82
    angular.z.min_velocity: -1.82
    linear.x.max_acceleration: 1.0
    linear.x.max_jerk: 0.0        # 0 = d\\xE9sactiv\\xE9
    angular.z.max_acceleration: 3.2

    # Frames
    odom_frame_id: odom
    base_frame_id: base_link
    pose_covariance_diagonal: [0.001, 0.001, 0.001, 0.001, 0.001, 0.01]
    twist_covariance_diagonal: [0.001, 0.001, 0.001, 0.001, 0.001, 0.01]

    # Topics remapp\\xE9s depuis /cmd_vel
    cmd_vel_topic: /cmd_vel
\\\`\\\`\\\`

### Launch file ros2_control

\\\`\\\`\\\`python
# launch/control.launch.py
from launch import LaunchDescription
from launch_ros.actions import Node
from controller_manager.launch_utils import generate_load_controller_launch_description

def generate_launch_description():
    # Node principal ros2_control
    control_node = Node(
        package='controller_manager',
        executable='ros2_control_node',
        parameters=[
            {'robot_description': robot_desc},
            controllers_yaml_path,
        ],
        output='screen',
    )

    # Spawner : active les controllers au d\\xE9marrage
    joint_state_broadcaster = Node(
        package='controller_manager',
        executable='spawner',
        arguments=['joint_state_broadcaster', '-c',
                   '/controller_manager'],
    )
    diff_drive = Node(
        package='controller_manager',
        executable='spawner',
        arguments=['diff_drive_controller', '-c',
                   '/controller_manager'],
    )

    return LaunchDescription([control_node,
                              joint_state_broadcaster,
                              diff_drive])
\\\`\\\`\\\`

### Cr\\xE9er un Hardware Interface custom

\\\`\\\`\\\`cpp
// include/mon_hardware/mon_hardware.hpp
#include "hardware_interface/system_interface.hpp"

namespace mon_hardware {

class MonHardware : public hardware_interface::SystemInterface {
public:
  hardware_interface::CallbackReturn on_init(
    const hardware_interface::HardwareInfo & info) override;

  std::vector<hardware_interface::StateInterface>
    export_state_interfaces() override;

  std::vector<hardware_interface::CommandInterface>
    export_command_interfaces() override;

  hardware_interface::return_type read(
    const rclcpp::Time & time,
    const rclcpp::Duration & period) override;

  hardware_interface::return_type write(
    const rclcpp::Time & time,
    const rclcpp::Duration & period) override;

private:
  // \\xC9tats lus depuis le hardware
  std::vector<double> hw_positions_;
  std::vector<double> hw_velocities_;
  // Commandes envoy\\xE9es au hardware
  std::vector<double> hw_commands_;
};

}  // namespace mon_hardware
\\\`\\\`\\\`\`},{id:"m4-7",title:"Camera & Perception avec OpenCV",done:!1,xp:160,content:\`## Cam\\xE9ra, OpenCV & D\\xE9tection d'Objets

### Pipeline complet cam\\xE9ra ROS2

\\\`\\\`\\\`
Cam\\xE9ra physique / Gazebo
        \\u2502
  /camera/image_raw
        \\u2502
  VisionNode (cv_bridge)
        \\u2502
  \\u250C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2534\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2510
  \\u2502  OpenCV proc.  \\u2502
  \\u2514\\u2500\\u2500\\u2500\\u2500\\u2500\\u252C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2518
        \\u2502
  \\u250C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2534\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2510
  \\u2502  /detections   \\u2502  \\u2190 vision_msgs/Detection2DArray
  \\u2502  /viz/image    \\u2502  \\u2190 image annot\\xE9e
  \\u2514\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2518
\\\`\\\`\\\`

### Installation

\\\`\\\`\\\`bash
sudo apt install ros-jazzy-cv-bridge \\\\
                 ros-jazzy-image-transport \\\\
                 ros-jazzy-vision-msgs \\\\
                 ros-jazzy-image-pipeline \\\\
                 python3-opencv
\\\`\\\`\\\`

### Node de vision complet

\\\`\\\`\\\`python
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import Image, CameraInfo
from geometry_msgs.msg import Point
from vision_msgs.msg import Detection2D, Detection2DArray, BoundingBox2D
from cv_bridge import CvBridge
import cv2
import numpy as np

class VisionNode(Node):
    def __init__(self):
        super().__init__('vision_node')

        # Param\\xE8tres configurables
        self.declare_parameter('min_area', 500)
        self.declare_parameter('threshold', 127)
        self.declare_parameter('detection_color_h_low', 35)
        self.declare_parameter('detection_color_h_high', 85)

        self.bridge = CvBridge()

        # Subscribers
        self.img_sub = self.create_subscription(
            Image, '/camera/image_raw', self.image_cb, 10)
        self.info_sub = self.create_subscription(
            CameraInfo, '/camera/camera_info', self.info_cb, 10)

        # Publishers
        self.det_pub = self.create_publisher(
            Detection2DArray, '/detections', 10)
        self.viz_pub = self.create_publisher(
            Image, '/vision/annotated', 10)

        self.camera_info = None
        self.get_logger().info('Vision node d\\xE9marr\\xE9')

    def info_cb(self, msg: CameraInfo):
        self.camera_info = msg

    def image_cb(self, msg: Image):
        # ROS Image -> OpenCV BGR
        frame = self.bridge.imgmsg_to_cv2(
            msg, desired_encoding='bgr8')

        # D\\xE9tection d'objets verts (HSV)
        detections, annotated = self.detect_green_objects(frame)

        # Publier d\\xE9tections
        det_array = Detection2DArray()
        det_array.header = msg.header
        det_array.detections = detections
        self.det_pub.publish(det_array)

        # Publier image annot\\xE9e
        viz_msg = self.bridge.cv2_to_imgmsg(
            annotated, encoding='bgr8')
        viz_msg.header = msg.header
        self.viz_pub.publish(viz_msg)

    def detect_green_objects(self, frame: np.ndarray):
        h_low = self.get_parameter('detection_color_h_low').value
        h_high = self.get_parameter('detection_color_h_high').value
        min_area = self.get_parameter('min_area').value

        # BGR \\u2192 HSV pour segmentation couleur
        hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

        # Masque couleur verte
        lower = np.array([h_low, 40, 40])
        upper = np.array([h_high, 255, 255])
        mask = cv2.inRange(hsv, lower, upper)

        # Morphologie pour nettoyer
        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
        mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)
        mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)

        # Trouver les contours
        contours, _ = cv2.findContours(
            mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        detections = []
        annotated = frame.copy()

        for cnt in contours:
            area = cv2.contourArea(cnt)
            if area < min_area:
                continue

            # Bounding box
            x, y, w, h = cv2.boundingRect(cnt)
            cx, cy = x + w // 2, y + h // 2

            # Cr\\xE9er message Detection2D
            det = Detection2D()
            det.header = self.get_clock().now().to_msg()
            bb = BoundingBox2D()
            bb.center.position.x = float(cx)
            bb.center.position.y = float(cy)
            bb.size_x = float(w)
            bb.size_y = float(h)
            det.bbox = bb
            detections.append(det)

            # Annotation visuelle
            cv2.rectangle(annotated, (x, y), (x+w, y+h),
                          (0, 255, 0), 2)
            cv2.circle(annotated, (cx, cy), 5, (0, 0, 255), -1)
            cv2.putText(annotated, f'A={int(area)}',
                        (x, y - 5), cv2.FONT_HERSHEY_SIMPLEX,
                        0.5, (0, 255, 0), 1)

        return detections, annotated
\\\`\\\`\\\`

### Cam\\xE9ra de profondeur (RGBD)

\\\`\\\`\\\`python
from sensor_msgs.msg import PointCloud2
import sensor_msgs_py.point_cloud2 as pc2

class DepthNode(Node):
    def __init__(self):
        super().__init__('depth_node')
        self.bridge = CvBridge()

        self.depth_sub = self.create_subscription(
            Image, '/camera/depth/image_raw',
            self.depth_cb, 10)
        self.pc_sub = self.create_subscription(
            PointCloud2, '/camera/depth/points',
            self.pc_cb, 10)

    def depth_cb(self, msg: Image):
        # Image de profondeur (float32, millim\\xE8tres)
        depth = self.bridge.imgmsg_to_cv2(
            msg, desired_encoding='32FC1')

        # Distance au centre de l'image
        h, w = depth.shape
        cx, cy = w // 2, h // 2
        dist = depth[cy, cx]
        self.get_logger().info(
            f'Distance au centre: {dist:.3f} m')

    def pc_cb(self, msg: PointCloud2):
        # It\\xE9rer sur le nuage de points
        for point in pc2.read_points(
                msg, field_names=('x', 'y', 'z'),
                skip_nans=True):
            x, y, z = point
            # Traiter chaque point...
\\\`\\\`\\\`

### Calibration cam\\xE9ra

\\\`\\\`\\\`bash
# Calibrer avec une mire (damier)
ros2 run camera_calibration cameracalibrator \\\\
  --size 8x6 \\\\
  --square 0.108 \\\\
  image:=/camera/image_raw \\\\
  camera:=/camera

# Le r\\xE9sultat produit un fichier .yaml avec :
# - camera_matrix (K)
# - distortion_coefficients (D)
# - rectification_matrix (R)
# - projection_matrix (P)
\\\`\\\`\\\`\`},{id:"m4-8",title:"Nav2 \\u2014 Behavior Trees Avanc\\xE9s",done:!1,xp:190,content:\`## Behavior Trees Nav2 \\u2014 Personnalisation

Les Behavior Trees (BT) sont le c\\u0153ur de Nav2 depuis Jazzy.

### Comprendre les BT

\\\`\\\`\\\`
Un BT est un arbre de d\\xE9cision qui orchestre les actions du robot.
Chaque tick, l'arbre retourne : SUCCESS | FAILURE | RUNNING

N\\u0153uds types :
\\u251C\\u2500\\u2500 Sequence   : tous les enfants doivent r\\xE9ussir (ET)
\\u251C\\u2500\\u2500 Fallback   : un enfant suffit (OU)
\\u251C\\u2500\\u2500 Decorator  : modifie le comportement (Retry, Inverter...)
\\u2514\\u2500\\u2500 Action     : effectue une action r\\xE9elle (Nav2 action)
\\\`\\\`\\\`

### BT de navigation standard Nav2

\\\`\\\`\\\`xml
<!-- navigate_w_replanning_and_recovery.xml -->
<root BTCPP_format="4">
  <BehaviorTree ID="NavigateWithReplanning">
    <RecoveryNode number_of_retries="6" name="NavigateRecovery">

      <!-- Tentative principale de navigation -->
      <PipelineSequence name="NavigateWithReplanning">
        <DistanceController input_distance="0.5">
          <ComputePathToPose goal="{goal}" path="{path}"
                             planner_id="GridBased"
                             error_code_id="{compute_path_error_code}"/>
        </DistanceController>
        <FollowPath path="{path}"
                    controller_id="FollowPath"
                    error_code_id="{follow_path_error_code}"/>
      </PipelineSequence>

      <!-- Comportements de r\\xE9cup\\xE9ration si \\xE9chec -->
      <ReactiveFallback name="RecoveryFallback">
        <GoalUpdated/>
        <RoundRobin name="RecoveryActions">
          <Sequence name="ClearLocal">
            <ClearEntireCostmap service_name="local_costmap/clear_entirely_local_costmap"/>
          </Sequence>
          <Sequence name="ClearGlobal">
            <ClearEntireCostmap service_name="global_costmap/clear_entirely_global_costmap"/>
          </Sequence>
          <Sequence name="SpinRecovery">
            <Spin spin_dist="1.57" error_code_id="{spin_error_code}"/>
          </Sequence>
          <Sequence name="WaitRecovery">
            <Wait wait_duration="5"/>
          </Sequence>
          <Sequence name="BackupRecovery">
            <BackUp backup_dist="0.15" backup_speed="0.025"
                    error_code_id="{backup_error_code}"/>
          </Sequence>
        </RoundRobin>
      </ReactiveFallback>

    </RecoveryNode>
  </BehaviorTree>
</root>
\\\`\\\`\\\`

### Cr\\xE9er un BT Action Node custom

\\\`\\\`\\\`cpp
// src/bt_nodes/check_battery.cpp
#include "behaviortree_cpp_v3/action_node.h"
#include "rclcpp/rclcpp.hpp"
#include "sensor_msgs/msg/battery_state.hpp"

class CheckBattery : public BT::SyncActionNode {
public:
  CheckBattery(const std::string & name,
               const BT::NodeConfiguration & config)
  : BT::SyncActionNode(name, config) {}

  static BT::PortsList providedPorts() {
    return {
      BT::InputPort<float>("min_percentage",
                           "Seuil minimum batterie (%)"),
    };
  }

  BT::NodeStatus tick() override {
    float min_pct = 20.0;
    getInput("min_percentage", min_pct);

    // Lire le niveau de batterie (simplifi\\xE9)
    float current_pct = getCurrentBatteryLevel();

    if (current_pct >= min_pct) {
      RCLCPP_INFO(rclcpp::get_logger("bt"),
                  "Batterie OK: %.1f%%", current_pct);
      return BT::NodeStatus::SUCCESS;
    } else {
      RCLCPP_WARN(rclcpp::get_logger("bt"),
                  "Batterie faible: %.1f%% < %.1f%%",
                  current_pct, min_pct);
      return BT::NodeStatus::FAILURE;
    }
  }
};

// Enregistrer le node dans le factory
BT_REGISTER_NODES(factory) {
  factory.registerNodeType<CheckBattery>("CheckBattery");
}
\\\`\\\`\\\`

### BT avec n\\u0153ud custom

\\\`\\\`\\\`xml
<!-- mon_bt.xml \\u2014 avec v\\xE9rification batterie -->
<root BTCPP_format="4">
  <BehaviorTree ID="NavigationAvecBatterie">
    <Sequence>
      <!-- V\\xE9rifier batterie avant de naviguer -->
      <CheckBattery min_percentage="20.0"/>

      <!-- Navigation normale -->
      <RecoveryNode number_of_retries="3">
        <FollowPath path="{path}" controller_id="FollowPath"/>
        <Spin spin_dist="1.57"/>
      </RecoveryNode>

      <!-- Retour \\xE0 la base si batterie < 30% -->
      <Fallback>
        <CheckBattery min_percentage="30.0"/>
        <ComputePathToPose goal="{charging_station}" path="{path}"/>
        <FollowPath path="{path}" controller_id="FollowPath"/>
      </Fallback>
    </Sequence>
  </BehaviorTree>
</root>
\\\`\\\`\\\`\`},{id:"m4-9",title:"URDF Avanc\\xE9 & Xacro",done:!1,xp:160,content:\`## URDF Avanc\\xE9 & Xacro

Xacro est un langage de macros pour simplifier les URDFs complexes.

### Macros Xacro

\\\`\\\`\\\`xml
<!-- urdf/robot.urdf.xacro -->
<?xml version="1.0"?>
<robot name="mon_robot" xmlns:xacro="http://ros.org/wiki/xacro">

  <!-- Propri\\xE9t\\xE9s (constantes) -->
  <xacro:property name="roue_rayon"    value="0.033"/>
  <xacro:property name="roue_largeur"  value="0.018"/>
  <xacro:property name="base_longueur" value="0.28"/>
  <xacro:property name="base_largeur"  value="0.16"/>
  <xacro:property name="base_hauteur"  value="0.11"/>
  <xacro:property name="masse_base"    value="1.5"/>

  <!-- Macro pour cr\\xE9er une roue (DRY principle) -->
  <xacro:macro name="roue" params="nom x y">
    <link name="\\\${nom}_link">
      <visual>
        <geometry>
          <cylinder radius="\\\${roue_rayon}" length="\\\${roue_largeur}"/>
        </geometry>
        <material name="dark_grey">
          <color rgba="0.2 0.2 0.2 1"/>
        </material>
      </visual>
      <collision>
        <geometry>
          <cylinder radius="\\\${roue_rayon}" length="\\\${roue_largeur}"/>
        </geometry>
      </collision>
      <inertial>
        <mass value="0.1"/>
        <xacro:cylinder_inertia m="0.1" r="\\\${roue_rayon}" h="\\\${roue_largeur}"/>
      </inertial>
    </link>
    <joint name="\\\${nom}_joint" type="continuous">
      <parent link="base_link"/>
      <child link="\\\${nom}_link"/>
      <origin xyz="\\\${x} \\\${y} 0" rpy="\\\${pi/2} 0 0"/>
      <axis xyz="0 0 1"/>
    </joint>
  </xacro:macro>

  <!-- Utiliser la macro -->
  <xacro:roue nom="roue_gauche"  x="0"   y=" 0.144"/>
  <xacro:roue nom="roue_droite"  x="0"   y="-0.144"/>

  <!-- Include d'autres fichiers Xacro -->
  <xacro:include filename="$(find mon_package)/urdf/capteurs.xacro"/>
  <xacro:include filename="$(find mon_package)/urdf/ros2_control.xacro"/>

</robot>
\\\`\\\`\\\`

\\\`\\\`\\\`bash
# Compiler Xacro en URDF
xacro robot.urdf.xacro > robot.urdf

# V\\xE9rifier
check_urdf robot.urdf

# Dans launch file
xacro_file = os.path.join(pkg, 'urdf', 'robot.urdf.xacro')
robot_desc = xacro.process_file(xacro_file).toxml()
\\\`\\\`\\\`\`},{id:"m4-10",title:"Nav2 \\u2014 Planificateurs & Contr\\xF4leurs",done:!1,xp:170,content:\`## Nav2 \\u2014 Planificateurs & Contr\\xF4leurs

### Planificateurs globaux disponibles

\\\`\\\`\\\`yaml
# Smac Planner \\u2014 lisse et rapide (recommand\\xE9 Jazzy)
planner_server:
  ros__parameters:
    planners:
      - name: SmacHybrid
        type: nav2_smac_planner/SmacPlannerHybrid
    SmacHybrid:
      tolerance: 0.5
      allow_unknown: true
      max_iterations: 1000000
      smooth_path: true
      minimum_turning_radius: 0.4  # m (important pour ackermann)
      angle_quantization_bins: 72  # 5 degr\\xE9s par bin
      cost_travel_multiplier: 2.0
      use_final_approach_orientation: false
\\\`\\\`\\\`

### Contr\\xF4leurs locaux

\\\`\\\`\\\`yaml
# DWB \\u2014 Dynamic Window Approach (standard)
FollowPath:
  plugin: dwb_core::DWBLocalPlanner
  max_vel_x: 0.26
  max_vel_theta: 1.0
  min_speed_xy: 0.0
  acc_lim_x: 2.5
  acc_lim_theta: 3.2
  decel_lim_x: -2.5
  vx_samples: 20
  vtheta_samples: 40
  critics:
    - RotateToGoal
    - Oscillation
    - BaseObstacle
    - GoalAlign
    - PathAlign
    - PathDist
    - GoalDist
\\\`\\\`\\\`

### Recovery Behaviors

\\\`\\\`\\\`yaml
recovery_server:
  ros__parameters:
    costmap_topic: local_costmap/costmap_raw
    footprint_topic: local_costmap/published_footprint
    recovery_plugins:
      - spin
      - backup
      - wait
    spin:
      plugin: nav2_recoveries/Spin
    backup:
      plugin: nav2_recoveries/BackUp
    wait:
      plugin: nav2_recoveries/Wait
\\\`\\\`\\\`\`},{id:"m4-11",title:"Isaac Sim & Simulation avanc\\xE9e",done:!1,xp:180,content:\`## Isaac Sim \\u2014 Simulation Photor\\xE9aliste NVIDIA

Isaac Sim est le simulateur de r\\xE9f\\xE9rence pour les robots IA \\u2014 physique RTX, capteurs parfaits.

### Installation Isaac Sim

\\\`\\\`\\\`bash
# Via NVIDIA Omniverse Launcher
# https://developer.nvidia.com/isaac-sim

# Ou Docker (recommand\\xE9 en dev)
docker pull nvcr.io/nvidia/isaac-sim:4.0.0

docker run --gpus all -it \\\\
  -e "ACCEPT_EULA=Y" \\\\
  --rm \\\\
  -e "PRIVACY_CONSENT=Y" \\\\
  -v ~/docker/isaac-sim/cache/kit:/isaac-sim/kit/cache:rw \\\\
  -v ~/docker/isaac-sim/cache/ov:/root/.cache/ov:rw \\\\
  -v ~/docker/isaac-sim/cache/pip:/root/.cache/pip:rw \\\\
  -v ~/docker/isaac-sim/logs:/root/.nvidia-omniverse/logs:rw \\\\
  -v ~/docker/isaac-sim/data:/root/Documents:rw \\\\
  -p 8211:8211 -p 47995:47995 \\\\
  nvcr.io/nvidia/isaac-sim:4.0.0 \\\\
  ./runheadless.native.sh
\\\`\\\`\\\`

### Bridge Isaac Sim \\u2194 ROS2

\\\`\\\`\\\`bash
# Activer le bridge ROS2 dans Isaac Sim
# Window > Extensions > rechercher "ROS2 Bridge"
# Activer : omni.isaac.ros2_bridge

# Les topics apparaissent automatiquement
ros2 topic list
# /camera/camera_info
# /camera/depth
# /camera/rgb
# /odom
# /scan
# /tf
\\\`\\\`\\\`

### Script Python Isaac Sim

\\\`\\\`\\\`python
# Script \\xE0 lancer dans Isaac Sim (Python standalone)
from isaacsim import SimulationApp

app = SimulationApp({"headless": True})

from omni.isaac.core import World
from omni.isaac.core.robots import Robot
from omni.isaac.wheeled_robots.robots import WheeledRobot

world = World(stage_units_in_meters=1.0)
world.scene.add_ground_plane()

# Ajouter le robot
robot = world.scene.add(WheeledRobot(
    prim_path="/World/Robot",
    name="mon_robot",
    wheel_dof_names=["wheel_left_joint", "wheel_right_joint"],
    create_robot=True,
    usd_path="/path/to/robot.usd",
))

world.reset()

for i in range(1000):
    world.step(render=False)
    if i % 100 == 0:
        print(f"Step {i}")
\\\`\\\`\\\`\`},{id:"m4-12",title:"YOLOv8 & D\\xE9tection d'objets",done:!1,xp:170,content:\`## YOLOv8 + ROS2 \\u2014 D\\xE9tection Temps R\\xE9el

### Installation

\\\`\\\`\\\`bash
pip install ultralytics
sudo apt install ros-jazzy-cv-bridge ros-jazzy-vision-msgs
\\\`\\\`\\\`

### Node de d\\xE9tection YOLOv8

\\\`\\\`\\\`python
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import Image
from vision_msgs.msg import Detection2DArray, Detection2D, BoundingBox2D
from vision_msgs.msg import ObjectHypothesisWithPose
from cv_bridge import CvBridge
from ultralytics import YOLO
import cv2
import numpy as np

class YoloNode(Node):
    def __init__(self):
        super().__init__('yolo_node')

        self.declare_parameter('model', 'yolov8n.pt')
        self.declare_parameter('confidence', 0.5)
        self.declare_parameter('device', 'cpu')  # 'cuda:0' pour GPU

        model_path = self.get_parameter('model').value
        self.conf = self.get_parameter('confidence').value
        device = self.get_parameter('device').value

        self.model = YOLO(model_path)
        self.model.to(device)
        self.bridge = CvBridge()

        self.sub = self.create_subscription(
            Image, '/camera/image_raw', self.image_cb, 10)
        self.det_pub = self.create_publisher(
            Detection2DArray, '/yolo/detections', 10)
        self.img_pub = self.create_publisher(
            Image, '/yolo/annotated', 10)

        self.get_logger().info(f'YOLOv8 charg\\xE9: {model_path}')

    def image_cb(self, msg: Image):
        frame = self.bridge.imgmsg_to_cv2(msg, 'bgr8')
        results = self.model.predict(frame, conf=self.conf, verbose=False)

        det_array = Detection2DArray()
        det_array.header = msg.header

        for result in results:
            for box in result.boxes:
                det = Detection2D()
                det.header = msg.header

                # BBox
                x1, y1, x2, y2 = box.xyxy[0].tolist()
                cx, cy = (x1 + x2) / 2, (y1 + y2) / 2
                bb = BoundingBox2D()
                bb.center.position.x = cx
                bb.center.position.y = cy
                bb.size_x = x2 - x1
                bb.size_y = y2 - y1
                det.bbox = bb

                # Hypoth\\xE8se de classe
                hyp = ObjectHypothesisWithPose()
                hyp.hypothesis.class_id = str(int(box.cls[0]))
                hyp.hypothesis.score = float(box.conf[0])
                det.results.append(hyp)

                det_array.detections.append(det)

        self.det_pub.publish(det_array)

        # Image annot\\xE9e
        annotated = results[0].plot()
        self.img_pub.publish(
            self.bridge.cv2_to_imgmsg(annotated, 'bgr8'))
\\\`\\\`\\\`\`},{id:"m4-13",title:"ros2_control \\u2014 Controllers custom",done:!1,xp:180,content:\`## ros2_control \\u2014 Controller Personnalis\\xE9

### Cr\\xE9er un PID Controller

\\\`\\\`\\\`cpp
// include/mon_controller/pid_controller.hpp
#pragma once
#include "controller_interface/controller_interface.hpp"
#include "rclcpp_lifecycle/lifecycle_node.hpp"
#include "std_msgs/msg/float64.hpp"

namespace mon_controller {

class PIDController : public controller_interface::ControllerInterface {
public:
  PIDController();

  controller_interface::InterfaceConfiguration
    command_interface_configuration() const override;
  controller_interface::InterfaceConfiguration
    state_interface_configuration() const override;

  controller_interface::CallbackReturn on_init() override;
  controller_interface::CallbackReturn
    on_configure(const rclcpp_lifecycle::State& state) override;
  controller_interface::CallbackReturn
    on_activate(const rclcpp_lifecycle::State& state) override;

  controller_interface::return_type update(
    const rclcpp::Time& time,
    const rclcpp::Duration& period) override;

private:
  double kp_, ki_, kd_;
  double integral_ = 0.0;
  double prev_error_ = 0.0;
  double setpoint_ = 0.0;

  rclcpp::Subscription<std_msgs::msg::Float64>::SharedPtr setpoint_sub_;
};

}  // namespace mon_controller
\\\`\\\`\\\`

\\\`\\\`\\\`cpp
// src/pid_controller.cpp
#include "mon_controller/pid_controller.hpp"
#include "pluginlib/class_list_macros.hpp"

namespace mon_controller {

controller_interface::return_type PIDController::update(
    const rclcpp::Time& /*time*/,
    const rclcpp::Duration& period)
{
  double dt = period.seconds();
  double position = state_interfaces_[0].get_value();
  double error = setpoint_ - position;

  // PID
  integral_ += error * dt;
  double derivative = (error - prev_error_) / dt;
  double output = kp_ * error + ki_ * integral_ + kd_ * derivative;
  prev_error_ = error;

  // Limiter la commande
  output = std::clamp(output, -1.0, 1.0);
  command_interfaces_[0].set_value(output);

  return controller_interface::return_type::OK;
}

}  // namespace mon_controller

PLUGINLIB_EXPORT_CLASS(
  mon_controller::PIDController,
  controller_interface::ControllerInterface)
\\\`\\\`\\\`\`},{id:"m4-14",title:"Navigation 3D & Altitude",done:!1,xp:160,content:\`## Navigation 3D \\u2014 Drones & Robots A\\xE9riens

Nav2 supporte la navigation 3D via Smac Planner 3D et costmaps 3D.

### Installation

\\\`\\\`\\\`bash
sudo apt install ros-jazzy-navigation2 \\\\
               ros-jazzy-nav2-smac-planner \\\\
               ros-jazzy-nav2-costmap-2d
\\\`\\\`\\\`

### Costmap 3D avec voxel layer

\\\`\\\`\\\`yaml
global_costmap:
  global_costmap:
    ros__parameters:
      plugins: [static_layer, voxel_layer, inflation_layer]

      voxel_layer:
        plugin: nav2_costmap_2d::VoxelLayer
        enabled: true
        publish_voxel_map: true
        origin_z: 0.0
        z_resolution: 0.05       # m par voxel en hauteur
        z_voxels: 16             # nombre de voxels en hauteur
        unknown_threshold: 15    # voxels inconnus avant marquage
        mark_threshold: 0        # voxels avant obstacle
        combination_method: 1
        observation_sources: pointcloud
        pointcloud:
          topic: /camera/depth/points
          max_obstacle_height: 2.0
          clearing: true
          marking: true
          data_type: PointCloud2
          raytrace_max_range: 3.0
          obstacle_max_range: 2.5
\\\`\\\`\\\`

### Drone \\u2014 Interface MAVLink avec ROS2

\\\`\\\`\\\`bash
# px4_ros_com \\u2014 bridge PX4 <-> ROS2
sudo apt install ros-jazzy-px4-ros-com ros-jazzy-px4-msgs

# Topics disponibles
# /fmu/in/offboard_control_mode
# /fmu/in/trajectory_setpoint
# /fmu/in/vehicle_command
# /fmu/out/vehicle_odometry
# /fmu/out/vehicle_status
\\\`\\\`\\\`\`},{id:"m4-15",title:"Gazebo \\u2014 Sensors & Plugins",done:!1,xp:160,content:\`## Gazebo Harmonic \\u2014 Capteurs & Plugins

### Ajouter des capteurs dans le SDF/URDF

\\\`\\\`\\\`xml
<!-- LiDAR 2D dans Gazebo Harmonic -->
<gazebo reference="laser_link">
  <sensor name="lidar" type="gpu_lidar">
    <pose>0 0 0 0 0 0</pose>
    <topic>/scan</topic>
    <update_rate>10</update_rate>
    <lidar>
      <scan>
        <horizontal>
          <samples>360</samples>
          <resolution>1</resolution>
          <min_angle>-3.14159</min_angle>
          <max_angle>3.14159</max_angle>
        </horizontal>
      </scan>
      <range>
        <min>0.12</min>
        <max>12.0</max>
        <resolution>0.015</resolution>
      </range>
      <noise>
        <type>gaussian</type>
        <mean>0.0</mean>
        <stddev>0.01</stddev>
      </noise>
    </lidar>
    <gz_frame_id>laser_link</gz_frame_id>
  </sensor>
</gazebo>
\\\`\\\`\\\`

\\\`\\\`\\\`xml
<!-- Cam\\xE9ra RGB -->
<gazebo reference="camera_link">
  <sensor name="camera" type="camera">
    <topic>/camera/image_raw</topic>
    <update_rate>30</update_rate>
    <camera>
      <horizontal_fov>1.3962634</horizontal_fov>
      <image>
        <width>640</width>
        <height>480</height>
        <format>R8G8B8</format>
      </image>
      <clip>
        <near>0.02</near>
        <far>300</far>
      </clip>
    </camera>
    <gz_frame_id>camera_link</gz_frame_id>
  </sensor>
</gazebo>
\\\`\\\`\\\`

\\\`\\\`\\\`bash
# Bridge pour les capteurs
ros2 run ros_gz_bridge parameter_bridge \\\\
  /scan@sensor_msgs/msg/LaserScan[gz.msgs.LaserScan \\\\
  /camera/image_raw@sensor_msgs/msg/Image[gz.msgs.Image \\\\
  /camera/camera_info@sensor_msgs/msg/CameraInfo[gz.msgs.CameraInfo \\\\
  /imu@sensor_msgs/msg/Imu[gz.msgs.IMU
\\\`\\\`\\\`\`},{id:"m4-16",title:"MoveIt2 \\u2014 Planification Avanc\\xE9e",done:!1,xp:190,content:\`## MoveIt2 \\u2014 Fonctionnalit\\xE9s Avanc\\xE9es

### Sc\\xE8nes de planification & Objets de collision

\\\`\\\`\\\`python
from moveit_msgs.msg import CollisionObject, PlanningScene
from shape_msgs.msg import SolidPrimitive
from geometry_msgs.msg import Pose

class SceneManager(Node):
    def __init__(self):
        super().__init__('scene_manager')
        self.scene_pub = self.create_publisher(
            PlanningScene, '/planning_scene', 10)

    def ajouter_boite(self, nom: str,
                      x: float, y: float, z: float,
                      lx: float, ly: float, lz: float):
        obj = CollisionObject()
        obj.id = nom
        obj.header.frame_id = 'world'

        boite = SolidPrimitive()
        boite.type = SolidPrimitive.BOX
        boite.dimensions = [lx, ly, lz]
        obj.primitives.append(boite)

        pose = Pose()
        pose.position.x = x
        pose.position.y = y
        pose.position.z = z
        pose.orientation.w = 1.0
        obj.primitive_poses.append(pose)

        obj.operation = CollisionObject.ADD

        scene = PlanningScene()
        scene.world.collision_objects.append(obj)
        scene.is_diff = True
        self.scene_pub.publish(scene)

    def supprimer_objet(self, nom: str):
        obj = CollisionObject()
        obj.id = nom
        obj.operation = CollisionObject.REMOVE
        scene = PlanningScene()
        scene.world.collision_objects.append(obj)
        scene.is_diff = True
        self.scene_pub.publish(scene)
\\\`\\\`\\\`

### Pick & Place pipeline

\\\`\\\`\\\`python
def pick_and_place(self, objet_x, objet_y, objet_z,
                   depot_x, depot_y, depot_z):
    # 1. Approche
    self.aller_a_pose(objet_x, objet_y, objet_z + 0.1)
    # 2. Descente
    self.aller_a_pose(objet_x, objet_y, objet_z)
    # 3. Saisie
    self.fermer_pince()
    # 4. Remont\\xE9e
    self.aller_a_pose(objet_x, objet_y, objet_z + 0.15)
    # 5. Transport
    self.aller_a_pose(depot_x, depot_y, depot_z + 0.15)
    # 6. D\\xE9p\\xF4t
    self.aller_a_pose(depot_x, depot_y, depot_z)
    self.ouvrir_pince()
    # 7. Retrait
    self.aller_a_home()
\\\`\\\`\\\`\`},{id:"m4-17",title:"SLAM 3D & Cartographie volumique",done:!1,xp:170,content:\`## SLAM 3D \\u2014 Cartographie Volumique

### Cartographe Google (Cartographer)

\\\`\\\`\\\`bash
sudo apt install ros-jazzy-cartographer-ros
\\\`\\\`\\\`

\\\`\\\`\\\`yaml
# cartographer_config.lua
include "map_builder.lua"
include "trajectory_builder.lua"

options = {
  map_builder = MAP_BUILDER,
  trajectory_builder = TRAJECTORY_BUILDER,
  map_frame = "map",
  tracking_frame = "imu_link",
  published_frame = "base_link",
  odom_frame = "odom",
  provide_odom_frame = true,
  publish_frame_projected_to_2d = false,
  use_odometry = true,
  use_nav_sat = false,
  use_landmarks = false,
  num_laser_scans = 0,
  num_multi_echo_laser_scans = 0,
  num_subdivisions_per_laser_scan = 1,
  num_point_clouds = 1,
  lookup_transform_timeout_sec = 0.2,
  submap_publish_period_sec = 0.3,
  pose_publish_period_sec = 5e-3,
  trajectory_publish_period_sec = 30e-3,
  rangefinder_sampling_ratio = 1.,
  odometry_sampling_ratio = 1.,
  fixed_frame_pose_sampling_ratio = 1.,
  imu_sampling_ratio = 1.,
  landmarks_sampling_ratio = 1.,
}

MAP_BUILDER.use_trajectory_builder_3d = true
TRAJECTORY_BUILDER_3D.num_accumulated_range_data = 1
\\\`\\\`\\\`

### RTAB-Map \\u2014 SLAM RGB-D

\\\`\\\`\\\`bash
sudo apt install ros-jazzy-rtabmap-ros

# Lancer avec cam\\xE9ra depth
ros2 launch rtabmap_ros rtabmap.launch.py \\\\
  rgb_topic:=/camera/rgb/image_raw \\\\
  depth_topic:=/camera/depth/image_raw \\\\
  camera_info_topic:=/camera/rgb/camera_info
\\\`\\\`\\\`\`},{id:"m4-18",title:"Footprint, Costmap & Inflation",done:!1,xp:150,content:\`## Footprint Robot & Costmap Avanc\\xE9e

### D\\xE9finir le footprint du robot

\\\`\\\`\\\`yaml
# Footprint circulaire (robot_radius)
local_costmap:
  local_costmap:
    ros__parameters:
      robot_radius: 0.22  # m \\u2014 robot circulaire

# Footprint polygonal (forme exacte)
local_costmap:
  local_costmap:
    ros__parameters:
      footprint: >-
        [[-0.21, -0.17],
         [-0.21,  0.17],
         [ 0.21,  0.17],
         [ 0.21, -0.17]]
      footprint_padding: 0.01  # marge de s\\xE9curit\\xE9
\\\`\\\`\\\`

### Costmap Layers \\u2014 Configuration compl\\xE8te

\\\`\\\`\\\`yaml
global_costmap:
  global_costmap:
    ros__parameters:
      update_frequency: 1.0
      publish_frequency: 1.0
      global_frame: map
      robot_base_frame: base_footprint
      resolution: 0.05
      plugins:
        - {name: static_layer, type: "nav2_costmap_2d::StaticLayer"}
        - {name: obstacle_layer, type: "nav2_costmap_2d::ObstacleLayer"}
        - {name: inflation_layer, type: "nav2_costmap_2d::InflationLayer"}

      static_layer:
        map_subscribe_transient_local: true
        enabled: true

      obstacle_layer:
        enabled: true
        observation_sources: scan
        scan:
          topic: /scan
          sensor_frame: laser_link
          obstacle_max_range: 2.5
          obstacle_min_range: 0.0
          raytrace_max_range: 3.0
          raytrace_min_range: 0.0
          max_obstacle_height: 2.0
          min_obstacle_height: 0.0
          clearing: true
          marking: true
          data_type: LaserScan

      inflation_layer:
        enabled: true
        inflation_radius: 0.55
        cost_scaling_factor: 3.0
\\\`\\\`\\\`\`}]},{id:5,slug:"expert",label:"Expert",color:r.red,icon:"05",subtitle:"DDS, S\\xE9curit\\xE9, CI/CD, Fleet, Performance",desc:"Production, s\\xE9curit\\xE9 SROS2, syst\\xE8mes multi-robots, Zenoh et optimisations avanc\\xE9es.",modules:[{id:"m5-1",title:"QoS & DDS \\u2014 Tuning Complet",done:!1,xp:160,content:\`## QoS & DDS \\u2014 Ma\\xEEtrise Compl\\xE8te

### Les 5 politiques QoS essentielles

\\\`\\\`\\\`python
from rclpy.qos import (
    QoSProfile, ReliabilityPolicy, HistoryPolicy,
    DurabilityPolicy, LivelinessPolicy, QoSLivelinessPolicy,
    QoSPresetProfiles
)
from rclpy.duration import Duration

# \\u2500\\u2500\\u2500 Profil 1 : Donn\\xE9es critiques (commandes moteur) \\u2500\\u2500\\u2500
qos_commande = QoSProfile(
    reliability=ReliabilityPolicy.RELIABLE,    # Livraison garantie
    history=HistoryPolicy.KEEP_LAST,
    depth=10,
    durability=DurabilityPolicy.VOLATILE,
    liveliness=LivelinessPolicy.AUTOMATIC,
    deadline=Duration(seconds=0, nanoseconds=100_000_000),  # 100ms
)

# \\u2500\\u2500\\u2500 Profil 2 : Capteurs haute fr\\xE9quence (LiDAR, IMU) \\u2500\\u2500\\u2500
qos_sensor = QoSProfile(
    reliability=ReliabilityPolicy.BEST_EFFORT, # Rapide, perte ok
    history=HistoryPolicy.KEEP_LAST,
    depth=1,              # Seulement le dernier message
    durability=DurabilityPolicy.VOLATILE,
)

# \\u2500\\u2500\\u2500 Profil 3 : \\xC9tat du robot (persistant) \\u2500\\u2500\\u2500
qos_etat = QoSProfile(
    reliability=ReliabilityPolicy.RELIABLE,
    durability=DurabilityPolicy.TRANSIENT_LOCAL,  # Nouveaux subscribers re\\xE7oivent le dernier
    depth=1,
    history=HistoryPolicy.KEEP_LAST,
)

# \\u2500\\u2500\\u2500 Profil 4 : Logs / Diagnostics \\u2500\\u2500\\u2500
qos_diag = QoSProfile(
    reliability=ReliabilityPolicy.BEST_EFFORT,
    history=HistoryPolicy.KEEP_LAST,
    depth=100,
    durability=DurabilityPolicy.VOLATILE,
)

# \\u2500\\u2500\\u2500 Profils pr\\xE9d\\xE9finis ROS2 \\u2500\\u2500\\u2500
# QoSPresetProfiles.SENSOR_DATA       \\u2192 BEST_EFFORT + KEEP_LAST(5)
# QoSPresetProfiles.PARAMETERS        \\u2192 RELIABLE + KEEP_LAST(1)
# QoSPresetProfiles.SERVICES_DEFAULT  \\u2192 RELIABLE + KEEP_LAST(10)
# QoSPresetProfiles.SYSTEM_DEFAULT    \\u2192 profil par d\\xE9faut
\\\`\\\`\\\`

### Compatibilit\\xE9 QoS \\u2014 r\\xE8gles importantes

\\\`\\\`\\\`
Publisher RELIABLE   + Subscriber RELIABLE   \\u2192 \\u2713 Compatible
Publisher RELIABLE   + Subscriber BEST_EFFORT\\u2192 \\u2713 Compatible
Publisher BEST_EFFORT+ Subscriber RELIABLE   \\u2192 \\u2717 INCOMPATIBLE
Publisher BEST_EFFORT+ Subscriber BEST_EFFORT\\u2192 \\u2713 Compatible

TRANSIENT_LOCAL pub  + VOLATILE sub \\u2192 sub ne re\\xE7oit pas l'historique
VOLATILE pub         + TRANSIENT_LOCAL sub \\u2192 incompatible
\\\`\\\`\\\`

### Changer de middleware DDS

\\\`\\\`\\\`bash
# CycloneDDS (performant, stable) \\u2014 recommand\\xE9 pour Jazzy
sudo apt install ros-jazzy-rmw-cyclonedds-cpp
export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp

# FastRTPS/FastDDS (d\\xE9faut Jazzy)
sudo apt install ros-jazzy-rmw-fastrtps-cpp
export RMW_IMPLEMENTATION=rmw_fastrtps_cpp

# Eclipse Zenoh (Jazzy natif, inter-r\\xE9seau)
export RMW_IMPLEMENTATION=rmw_zenoh_cpp

# Configurer dans bashrc
echo "export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp" >> ~/.bashrc
\\\`\\\`\\\`

### Configuration CycloneDDS fine

\\\`\\\`\\\`xml
<!-- cyclone_config.xml -->
<CycloneDDS>
  <Domain>
    <General>
      <NetworkInterfaceAddress>auto</NetworkInterfaceAddress>
      <!-- Forcer une interface r\\xE9seau sp\\xE9cifique -->
      <!-- <NetworkInterfaceAddress>eth0</NetworkInterfaceAddress> -->
    </General>
    <Discovery>
      <!-- D\\xE9sactiver multicast (r\\xE9seaux sans support) -->
      <!-- <EnableMulticastLoopback>false</EnableMulticastLoopback> -->
      <ParticipantIndex>auto</ParticipantIndex>
    </Discovery>
    <Internal>
      <MinimumSocketReceiveBufferSize>10MB</MinimumSocketReceiveBufferSize>
    </Internal>
    <Tracing>
      <Verbosity>config</Verbosity>
      <OutputFile>cyclone_trace.log</OutputFile>
    </Tracing>
  </Domain>
</CycloneDDS>
\\\`\\\`\\\`

\\\`\\\`\\\`bash
export CYCLONEDDS_URI=file:///home/user/cyclone_config.xml
\\\`\\\`\\\`

### Diagnostiquer les probl\\xE8mes QoS

\\\`\\\`\\\`bash
# Voir les infos QoS d'un topic
ros2 topic info /cmd_vel --verbose

# Voir les incompatibilit\\xE9s
ros2 topic info /scan --verbose | grep -A5 "QoS profile"

# Monitorer les pertes de messages
ros2 topic hz /scan     # Fr\\xE9quence r\\xE9elle
ros2 topic bw /scan     # Bande passante utilis\\xE9e

# Forcer compatibilit\\xE9 (script diagnostic)
ros2 doctor --report    # Diagnostic complet du syst\\xE8me
\\\`\\\`\\\`\`},{id:"m5-2",title:"SROS2 \\u2014 S\\xE9curit\\xE9 & Authentification",done:!1,xp:150,content:\`## SROS2 \\u2014 S\\xE9curit\\xE9 Compl\\xE8te ROS2

SROS2 ajoute chiffrement TLS, authentification et contr\\xF4le d'acc\\xE8s via DDS-Security.

### Concepts de s\\xE9curit\\xE9 ROS2

\\\`\\\`\\\`
\\u250C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2510
\\u2502         DDS-Security (OMG standard)      \\u2502
\\u2502                                          \\u2502
\\u2502  \\u250C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2510  \\u250C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2510  \\u250C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2510 \\u2502
\\u2502  \\u2502 Auth.    \\u2502  \\u2502Crypto    \\u2502  \\u2502Access  \\u2502 \\u2502
\\u2502  \\u2502 Plugin   \\u2502  \\u2502Plugin    \\u2502  \\u2502Control \\u2502 \\u2502
\\u2502  \\u2502 (PKI X509\\u2502  \\u2502(AES-256) \\u2502  \\u2502Plugin  \\u2502 \\u2502
\\u2502  \\u2514\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2518  \\u2514\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2518  \\u2514\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2518 \\u2502
\\u2514\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2518
\\\`\\\`\\\`

### Cr\\xE9er un keystore complet

\\\`\\\`\\\`bash
# 1. Installer les outils s\\xE9curit\\xE9
sudo apt install ros-jazzy-sros2

# 2. Cr\\xE9er le keystore (autorit\\xE9 de certification)
ros2 security create_keystore /root/keystore

# Arborescence g\\xE9n\\xE9r\\xE9e :
# keystore/
# \\u251C\\u2500\\u2500 enclaves/
# \\u2502   \\u2514\\u2500\\u2500 (vide, on va cr\\xE9er les enclaves)
# \\u251C\\u2500\\u2500 private/
# \\u2502   \\u2514\\u2500\\u2500 ca.key.pem        \\u2190 Cl\\xE9 priv\\xE9e CA (GARDER SECR\\xC8TE)
# \\u2514\\u2500\\u2500 public/
#     \\u251C\\u2500\\u2500 ca.cert.pem       \\u2190 Certificat CA public
#     \\u2514\\u2500\\u2500 identity_ca.cert.pem

# 3. Cr\\xE9er une enclave par node/process
ros2 security create_enclave /root/keystore /robot/capteurs
ros2 security create_enclave /root/keystore /robot/navigation
ros2 security create_enclave /root/keystore /robot/operateur

# Chaque enclave contient :
# \\u251C\\u2500\\u2500 cert.pem          \\u2190 Certificat sign\\xE9 par CA
# \\u251C\\u2500\\u2500 key.pem           \\u2190 Cl\\xE9 priv\\xE9e
# \\u251C\\u2500\\u2500 permissions.xml   \\u2190 Permissions DDS
# \\u2514\\u2500\\u2500 permissions.p7s   \\u2190 Signature des permissions
\\\`\\\`\\\`

### Fichier de politiques d'acc\\xE8s

\\\`\\\`\\\`xml
<!-- policies/policy.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<policy version="0.2.0">
  <profiles>

    <!-- Capteurs \\u2014 peut seulement publier les donn\\xE9es -->
    <profile ns="/robot" node="capteurs_node">
      <topics publish="ALLOW" subscribe="DENY">
        <topic>scan</topic>
        <topic>imu/data</topic>
        <topic>camera/image_raw</topic>
        <topic>battery_state</topic>
      </topics>
      <services reply="DENY" request="DENY">
        <service>*</service>
      </services>
      <actions call="DENY" execute="DENY">
        <action>*</action>
      </actions>
    </profile>

    <!-- Navigation \\u2014 peut lire les capteurs, envoyer commandes -->
    <profile ns="/robot" node="navigation_node">
      <topics publish="ALLOW" subscribe="ALLOW">
        <topic>cmd_vel</topic>
        <topic>plan</topic>
        <topic>odom</topic>
        <topic>scan</topic>
        <topic>map</topic>
      </topics>
      <services reply="ALLOW" request="ALLOW">
        <service>clear_costmap</service>
        <service>compute_path</service>
      </services>
      <actions call="DENY" execute="ALLOW">
        <action>navigate_to_pose</action>
        <action>follow_waypoints</action>
      </actions>
    </profile>

    <!-- Op\\xE9rateur \\u2014 acc\\xE8s en lecture seule pour monitoring -->
    <profile ns="/robot" node="operateur_node">
      <topics publish="DENY" subscribe="ALLOW">
        <topic>*</topic>
      </topics>
      <services reply="ALLOW" request="ALLOW">
        <service>get_state</service>
        <service>get_parameters</service>
      </services>
    </profile>

  </profiles>
</policy>
\\\`\\\`\\\`

\\\`\\\`\\\`bash
# Appliquer les politiques
ros2 security create_permission /root/keystore \\\\
  /robot/navigation \\\\
  policies/policy.xml
\\\`\\\`\\\`

### Lancer les nodes avec s\\xE9curit\\xE9

\\\`\\\`\\\`bash
# Variables d'environnement requises
export ROS_SECURITY_KEYSTORE=/root/keystore
export ROS_SECURITY_ENABLE=true
export ROS_SECURITY_STRATEGY=Enforce  # Permissive / Enforce

# Lancer avec enclave sp\\xE9cifique
ros2 run mon_package capteurs_node \\\\
  --ros-args --enclave /robot/capteurs

# Via launch file
ros2 launch mon_package secure_launch.py \\\\
  keystore:=/root/keystore
\\\`\\\`\\\`

\\\`\\\`\\\`python
# secure_launch.py
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    security_env = {
        'ROS_SECURITY_KEYSTORE': '/root/keystore',
        'ROS_SECURITY_ENABLE': 'true',
        'ROS_SECURITY_STRATEGY': 'Enforce',
    }
    return LaunchDescription([
        Node(
            package='mon_package',
            executable='capteurs_node',
            additional_env=security_env,
            arguments=['--ros-args', '--enclave', '/robot/capteurs'],
        ),
        Node(
            package='mon_package',
            executable='navigation_node',
            additional_env=security_env,
            arguments=['--ros-args', '--enclave', '/robot/navigation'],
        ),
    ])
\\\`\\\`\\\`

### V\\xE9rifier la s\\xE9curit\\xE9

\\\`\\\`\\\`bash
# Lister les enclaves
ros2 security list_enclaves /root/keystore

# V\\xE9rifier les permissions d'une enclave
ros2 security show_permissions /root/keystore /robot/navigation

# Tester sans s\\xE9curit\\xE9 (mode permissif pour debug)
export ROS_SECURITY_STRATEGY=Permissive  # Avertissements seulement
\\\`\\\`\\\`\`},{id:"m5-3",title:"CI/CD Pipeline Robotique Complet",done:!1,xp:160,content:\`## CI/CD Pipeline Robotique \\u2014 Production

### Architecture du pipeline

\\\`\\\`\\\`
Git Push
  \\u2502
  \\u25BC
GitHub Actions / GitLab CI
  \\u2502
  \\u251C\\u2500\\u2500 1. Lint (ament_flake8, ament_cppcheck)
  \\u251C\\u2500\\u2500 2. Build (colcon build --Release)
  \\u251C\\u2500\\u2500 3. Tests unitaires (pytest, gtest)
  \\u251C\\u2500\\u2500 4. Tests d'int\\xE9gration (simulation headless)
  \\u251C\\u2500\\u2500 5. Build Docker image
  \\u2514\\u2500\\u2500 6. Deploy (robot r\\xE9el ou simulation cloud)
\\\`\\\`\\\`

### GitHub Actions \\u2014 Pipeline complet

\\\`\\\`\\\`yaml
# .github/workflows/ros2_ci.yml
name: ROS2 CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  ROS_DISTRO: jazzy
  PACKAGE_NAME: mon_package

jobs:
  # \\u2500\\u2500\\u2500 Lint & Style \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500
  lint:
    runs-on: ubuntu-24.04
    container:
      image: ros:jazzy
    steps:
      - uses: actions/checkout@v4

      - name: Install lint tools
        run: |
          apt-get update
          apt-get install -y ros-jazzy-ament-flake8 \\\\
                             ros-jazzy-ament-pep257 \\\\
                             ros-jazzy-ament-copyright \\\\
                             cppcheck clang-format

      - name: Python lint (flake8)
        run: |
          source /opt/ros/jazzy/setup.bash
          ament_flake8 src/\\\${{ env.PACKAGE_NAME }} \\\\
            --max-line-length=100

      - name: C++ lint (cppcheck)
        run: |
          cppcheck --enable=all --error-exitcode=1 \\\\
            src/\\\${{ env.PACKAGE_NAME }}/src/

      - name: Copyright check
        run: |
          source /opt/ros/jazzy/setup.bash
          ament_copyright src/\\\${{ env.PACKAGE_NAME }}

  # \\u2500\\u2500\\u2500 Build & Test \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500
  build-test:
    runs-on: ubuntu-24.04
    container:
      image: ros:jazzy
    needs: lint
    steps:
      - uses: actions/checkout@v4

      - name: Install dependencies
        run: |
          apt-get update
          rosdep update
          rosdep install --from-paths src \\\\
            --ignore-src -r -y \\\\
            --rosdistro jazzy

      - name: Build (Release)
        run: |
          source /opt/ros/jazzy/setup.bash
          colcon build \\\\
            --packages-select \\\${{ env.PACKAGE_NAME }} \\\\
            --cmake-args \\\\
              -DCMAKE_BUILD_TYPE=Release \\\\
              -DCMAKE_CXX_FLAGS="-Wall -Wextra" \\\\
            --event-handlers console_cohesion+

      - name: Test unitaires
        run: |
          source /opt/ros/jazzy/setup.bash
          source install/setup.bash
          colcon test \\\\
            --packages-select \\\${{ env.PACKAGE_NAME }} \\\\
            --event-handlers console_cohesion+
          colcon test-result --verbose --all

      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: test-results
          path: log/latest_test/

  # \\u2500\\u2500\\u2500 Tests d'int\\xE9gration (Gazebo headless) \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500
  integration-test:
    runs-on: ubuntu-24.04
    needs: build-test
    container:
      image: osrf/ros:jazzy-desktop
    steps:
      - uses: actions/checkout@v4

      - name: Build
        run: |
          source /opt/ros/jazzy/setup.bash
          colcon build

      - name: Integration test (simulation headless)
        run: |
          source /opt/ros/jazzy/setup.bash
          source install/setup.bash
          # Lancer en mode headless (sans GUI)
          export DISPLAY=:99
          Xvfb :99 &
          timeout 120 ros2 launch mon_package test_integration.launch.py \\\\
            headless:=true || exit 1

  # \\u2500\\u2500\\u2500 Docker Build & Push \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500
  docker:
    runs-on: ubuntu-24.04
    needs: integration-test
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4

      - name: Build Docker image
        run: |
          docker build \\\\
            -t ghcr.io/\\\${{ github.repository }}:\\\${{ github.sha }} \\\\
            -t ghcr.io/\\\${{ github.repository }}:latest \\\\
            -f docker/Dockerfile .

      - name: Login to registry
        uses: docker/login-action@v2
        with:
          registry: ghcr.io
          username: \\\${{ github.actor }}
          password: \\\${{ secrets.GITHUB_TOKEN }}

      - name: Push image
        run: |
          docker push ghcr.io/\\\${{ github.repository }}:\\\${{ github.sha }}
          docker push ghcr.io/\\\${{ github.repository }}:latest
\\\`\\\`\\\`

### Dockerfile ROS2 optimis\\xE9

\\\`\\\`\\\`dockerfile
# docker/Dockerfile
FROM ros:jazzy AS builder

WORKDIR /ros2_ws

# Copier les sources
COPY src/ src/

# Installer les d\\xE9pendances
RUN apt-get update && \\\\
    rosdep update && \\\\
    rosdep install --from-paths src --ignore-src -r -y && \\\\
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Compiler
RUN . /opt/ros/jazzy/setup.sh && \\\\
    colcon build \\\\
      --cmake-args -DCMAKE_BUILD_TYPE=Release \\\\
    && rm -rf build/ log/

# \\u2500\\u2500 Image finale (plus l\\xE9g\\xE8re) \\u2500\\u2500
FROM ros:jazzy

WORKDIR /ros2_ws

COPY --from=builder /ros2_ws/install install/

# Point d'entr\\xE9e
COPY docker/entrypoint.sh /
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["ros2", "launch", "mon_package", "robot.launch.py"]
\\\`\\\`\\\`

\\\`\\\`\\\`bash
#!/bin/bash
# docker/entrypoint.sh
source /opt/ros/jazzy/setup.bash
source /ros2_ws/install/setup.bash
exec "$@"
\\\`\\\`\\\`

### Tests unitaires avec pytest + rclpy

\\\`\\\`\\\`python
# test/test_mon_node.py
import pytest
import rclpy
from rclpy.node import Node
from std_msgs.msg import String
from mon_package.mon_node import MonNode

@pytest.fixture(scope='module')
def ros_init():
    rclpy.init()
    yield
    rclpy.shutdown()

class TestMonNode:
    def test_node_creation(self, ros_init):
        node = MonNode()
        assert node.get_name() == 'mon_node'
        node.destroy_node()

    def test_publisher_exists(self, ros_init):
        node = MonNode()
        pubs = node.get_publisher_names_and_types_by_node(
            'mon_node', '')
        assert any('status' in name for name, _ in pubs)
        node.destroy_node()

    def test_callback_logic(self, ros_init):
        node = MonNode()
        msg = String()
        msg.data = 'avance 1.5'
        result = node.parse_command(msg.data)
        assert result['action'] == 'avance'
        assert result['value'] == pytest.approx(1.5)
        node.destroy_node()
\\\`\\\`\\\`\`},{id:"m5-4",title:"Multi-Robot & Fleet Management",done:!1,xp:200,content:\`## Multi-Robot & Fleet Management \\u2014 Production

### Architecture d'une flotte de robots

\\\`\\\`\\\`
\\u250C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2510
\\u2502              Fleet Commander                 \\u2502
\\u2502         (Node de coordination)               \\u2502
\\u2514\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u252C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u252C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u252C\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2518
        \\u2502          \\u2502              \\u2502
        \\u25BC          \\u25BC              \\u25BC
   /robot1      /robot2       /robot3
    \\u251C\\u2500\\u2500 /scan    \\u251C\\u2500\\u2500 /scan     \\u251C\\u2500\\u2500 /scan
    \\u251C\\u2500\\u2500 /odom    \\u251C\\u2500\\u2500 /odom     \\u251C\\u2500\\u2500 /odom
    \\u251C\\u2500\\u2500 /cmd_vel \\u251C\\u2500\\u2500 /cmd_vel  \\u2514\\u2500\\u2500 /cmd_vel
    \\u2514\\u2500\\u2500 nav2     \\u2514\\u2500\\u2500 nav2
\\\`\\\`\\\`

### Isolation par namespace et domaine

\\\`\\\`\\\`bash
# Chaque robot a un namespace isol\\xE9
# Robot 1 \\u2014 terminal 1
export ROS_DOMAIN_ID=1
export ROBOT_NAMESPACE=robot1
ros2 launch mon_package robot.launch.py \\\\
  namespace:=robot1 use_sim_time:=true

# Robot 2 \\u2014 terminal 2
export ROS_DOMAIN_ID=1   # M\\xEAme domaine pour communication
export ROBOT_NAMESPACE=robot2
ros2 launch mon_package robot.launch.py \\\\
  namespace:=robot2 use_sim_time:=true

# Voir les topics de tous les robots
ros2 topic list
# /robot1/scan, /robot1/cmd_vel, /robot1/odom
# /robot2/scan, /robot2/cmd_vel, /robot2/odom
\\\`\\\`\\\`

### Launch file multi-robot

\\\`\\\`\\\`python
# launch/multi_robot.launch.py
from launch import LaunchDescription
from launch.actions import GroupAction, DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node, PushRosNamespace
from launch_ros.actions import SetRemap

def spawn_robot(robot_name: str, x: float, y: float) -> GroupAction:
    """Spawner un robot complet avec son propre namespace."""
    return GroupAction([
        PushRosNamespace(robot_name),
        # Republier les topics avec remapping
        SetRemap(src='/tf', dst=f'/{robot_name}/tf'),

        Node(
            package='robot_state_publisher',
            executable='robot_state_publisher',
            name='robot_state_publisher',
            parameters=[{
                'robot_description': robot_desc,
                'use_sim_time': True,
                'frame_prefix': robot_name + '/',
            }]
        ),
        Node(
            package='ros_gz_sim',
            executable='create',
            arguments=[
                '-name', robot_name,
                '-topic', f'/{robot_name}/robot_description',
                '-x', str(x), '-y', str(y), '-z', '0.01',
            ]
        ),
        # Nav2 pour ce robot
        IncludeLaunchDescription(
            PathJoinSubstitution([
                FindPackageShare('nav2_bringup'), 'launch',
                'navigation_launch.py'
            ]),
            launch_arguments={
                'namespace': robot_name,
                'use_sim_time': 'true',
                'params_file': nav2_params_path,
            }.items()
        ),
    ])

def generate_launch_description():
    return LaunchDescription([
        spawn_robot('robot1', x=0.0,  y=0.0),
        spawn_robot('robot2', x=2.0,  y=0.0),
        spawn_robot('robot3', x=4.0,  y=0.0),
    ])
\\\`\\\`\\\`

### Fleet Commander \\u2014 Coordinateur Central

\\\`\\\`\\\`python
import rclpy
from rclpy.node import Node
from rclpy.callback_groups import ReentrantCallbackGroup
from nav2_simple_commander.robot_navigator import BasicNavigator
from geometry_msgs.msg import PoseStamped
from std_msgs.msg import String
from enum import Enum
import math, threading

class RobotState(Enum):
    IDLE = "idle"
    NAVIGATING = "navigating"
    CHARGING = "charging"
    ERROR = "error"

class FleetCommander(Node):
    def __init__(self):
        super().__init__('fleet_commander')

        self.robot_names = ['robot1', 'robot2', 'robot3']
        self.navigators = {}
        self.robot_states = {}
        self.task_queue = []
        self.group = ReentrantCallbackGroup()

        # Initialiser un navigator par robot
        for name in self.robot_names:
            nav = BasicNavigator(namespace='/' + name)
            self.navigators[name] = nav
            self.robot_states[name] = RobotState.IDLE
            self.get_logger().info(f'Navigator {name} pr\\xEAt')

        # Publisher d'\\xE9tat de la flotte
        self.fleet_pub = self.create_publisher(
            String, '/fleet/status', 10)

        # Timer de monitoring
        self.create_timer(2.0, self.publish_fleet_status,
                          callback_group=self.group)

        # Service pour assigner des t\\xE2ches
        from std_srvs.srv import SetBool
        self.create_service(
            SetBool, '/fleet/pause_all', self.pause_all_cb,
            callback_group=self.group)

    def get_available_robot(self) -> str | None:
        """Retourne le premier robot disponible."""
        for name, state in self.robot_states.items():
            if state == RobotState.IDLE:
                return name
        return None

    def assign_task(self, robot_id: str, goal_x: float,
                    goal_y: float, goal_yaw: float = 0.0):
        """Assigner une t\\xE2che de navigation \\xE0 un robot."""
        if robot_id not in self.navigators:
            self.get_logger().error(f'Robot {robot_id} inconnu')
            return False

        nav = self.navigators[robot_id]
        self.robot_states[robot_id] = RobotState.NAVIGATING

        # Cr\\xE9er le goal
        goal = PoseStamped()
        goal.header.frame_id = 'map'
        goal.header.stamp = self.get_clock().now().to_msg()
        goal.pose.position.x = goal_x
        goal.pose.position.y = goal_y
        yaw = math.radians(goal_yaw)
        goal.pose.orientation.z = math.sin(yaw / 2)
        goal.pose.orientation.w = math.cos(yaw / 2)

        nav.goToPose(goal)

        # Monitorer en arri\\xE8re-plan
        threading.Thread(
            target=self._monitor_task,
            args=(robot_id,), daemon=True
        ).start()

        self.get_logger().info(
            f'T\\xE2che assign\\xE9e \\xE0 {robot_id}: ({goal_x:.1f}, {goal_y:.1f})')
        return True

    def _monitor_task(self, robot_id: str):
        nav = self.navigators[robot_id]
        while not nav.isTaskComplete():
            fb = nav.getFeedback()
            if fb:
                self.get_logger().debug(
                    f'{robot_id} dist restante: '
                    f'{fb.distance_remaining:.2f}m')

        from nav2_simple_commander.robot_navigator import TaskResult
        result = nav.getResult()
        if result == TaskResult.SUCCEEDED:
            self.get_logger().info(f'{robot_id}: t\\xE2che r\\xE9ussie \\u2713')
        else:
            self.get_logger().warn(f'{robot_id}: t\\xE2che \\xE9chou\\xE9e \\u2717')

        self.robot_states[robot_id] = RobotState.IDLE

    def pause_all_cb(self, request, response):
        for name, nav in self.navigators.items():
            if request.data:
                nav.cancelTask()
                self.robot_states[name] = RobotState.IDLE
        response.success = True
        response.message = "Tous les robots arr\\xEAt\\xE9s"
        return response

    def publish_fleet_status(self):
        status = {n: s.value for n, s in self.robot_states.items()}
        msg = String()
        msg.data = str(status)
        self.fleet_pub.publish(msg)
\\\`\\\`\\\`\`},{id:"m5-5",title:"Zenoh \\u2014 Communication Edge/Cloud (Jazzy)",done:!1,xp:170,content:\`## Zenoh \\u2014 Le Futur de la Communication ROS2

Zenoh est un protocole de communication pub/sub/query ultra-performant qui devient le middleware par d\\xE9faut de ROS2 Jazzy pour les d\\xE9ploiements edge/cloud.

### Pourquoi Zenoh ?

\\\`\\\`\\\`
DDS (classique) :
  \\u2713 Simple sur LAN
  \\u2717 Travers\\xE9e de NAT impossible sans bridge
  \\u2717 Performances d\\xE9grad\\xE9es sur WAN
  \\u2717 Configuration complexe pour multi-cloud

Zenoh :
  \\u2713 Fonctionne nativement sur LAN, WAN, Internet
  \\u2713 Travers\\xE9e NAT native
  \\u2713 Latence ultra-faible (< 1ms sur LAN)
  \\u2713 Compatible robots embarqu\\xE9s (microROS)
  \\u2713 Chiffrement TLS int\\xE9gr\\xE9
  \\u2713 Mode peer-to-peer OU client/routeur
\\\`\\\`\\\`

### Installation

\\\`\\\`\\\`bash
# Jazzy \\u2014 Zenoh natif
sudo apt install ros-jazzy-rmw-zenoh-cpp

# Jazzy \\u2014 via bridge Zenoh
sudo apt install ros-jazzy-zenoh-bridge-ros2dds
\\\`\\\`\\\`

### Mode 1 : Zenoh comme RMW direct (Jazzy)

\\\`\\\`\\\`bash
# Activer Zenoh comme middleware
export RMW_IMPLEMENTATION=rmw_zenoh_cpp

# D\\xE9marrer le router Zenoh (sur le serveur/cloud)
ros2 run rmw_zenoh_cpp zenoh_router

# Les nodes ROS2 se connectent automatiquement
ros2 run demo_nodes_cpp talker  # Utilise Zenoh
ros2 run demo_nodes_cpp listener
\\\`\\\`\\\`

### Mode 2 : Bridge Zenoh pour Jazzy

\\\`\\\`\\\`bash
# Sur le robot (Jazzy, r\\xE9seau local)
ros2 run zenoh_bridge_ros2dds zenoh_bridge_ros2dds \\\\
  --config robot_config.json5

# Sur le serveur cloud (acc\\xE8s distant)
ros2 run zenoh_bridge_ros2dds zenoh_bridge_ros2dds \\\\
  --config cloud_config.json5
\\\`\\\`\\\`

### Configuration Zenoh avanc\\xE9e

\\\`\\\`\\\`json
// robot_config.json5
{
  // Mode client \\u2014 se connecte au routeur
  mode: "client",
  connect: {
    endpoints: ["tcp/serveur.cloud.com:7447"]
  },
  // S\\xE9curit\\xE9 TLS
  transport: {
    unicast: {
      lowlatency: {
        enabled: true
      }
    },
    tls: {
      root_ca_certificate: "/etc/zenoh/ca.pem",
      client_certificate: "/etc/zenoh/robot.pem",
      client_private_key: "/etc/zenoh/robot.key",
      server_name_verification: true
    }
  },
  plugins: {
    ros2dds: {
      ros_distro: "jazzy",
      // Filtrer les topics \\xE0 exposer sur le cloud
      pub_max_frequencies: [
        [".*scan.*", 2.0],      // LiDAR : max 2 Hz vers cloud
        [".*image.*", 0.5],     // Cam\\xE9ra : max 0.5 Hz vers cloud
        [".*", 10.0],           // Reste : max 10 Hz
      ],
      // Topics locaux seulement (pas de sync cloud)
      local_routing: ["/cmd_vel", "/odom"],
    }
  }
}
\\\`\\\`\\\`

\\\`\\\`\\\`json
// cloud_config.json5 \\u2014 routeur cloud
{
  mode: "router",
  listen: {
    // \\xC9couter les connexions entrantes
    endpoints: ["tcp/0.0.0.0:7447"]
  },
  plugins: {
    ros2dds: {
      ros_distro: "jazzy",
    },
    // REST API \\u2014 acc\\xE8s HTTP aux topics ROS2
    rest: {
      http_port: 8000
    }
  }
}
\\\`\\\`\\\`

### Acc\\xE8s REST API (depuis n'importe quel client HTTP)

\\\`\\\`\\\`bash
# Lire la valeur d'un topic (HTTP GET)
curl http://serveur.cloud.com:8000/robot/scan
curl http://serveur.cloud.com:8000/robot/odom

# Publier sur un topic (HTTP PUT)
curl -X PUT \\\\
  -H "Content-Type: application/json" \\\\
  -d '{"linear":{"x":0.2},"angular":{"z":0.1}}' \\\\
  http://serveur.cloud.com:8000/robot/cmd_vel
\\\`\\\`\\\`

### Benchmark : Zenoh vs DDS

\\\`\\\`\\\`bash
# Tester la latence Zenoh
z_ping --payload 8 --timeout 1  # Latence aller-retour (\\xB5s)

# Tester le throughput
z_pub_thr --payload 8192        # Throughput publication
z_sub_thr                       # Throughput r\\xE9ception
\\\`\\\`\\\`\`},{id:"m5-6",title:"Performance, Profiling & Optimisation",done:!1,xp:140,content:\`## Performance & Optimisation ROS2

### Identifier les goulots d'\\xE9tranglement

\\\`\\\`\\\`bash
# 1. Surveiller la fr\\xE9quence des topics
ros2 topic hz /scan /odom /cmd_vel
ros2 topic bw /camera/image_raw  # Bande passante (bytes/s)

# 2. Diagnostics syst\\xE8me complet
ros2 doctor
ros2 doctor --report > diagnostics.txt

# 3. Surveiller la latence d'un message
ros2 topic delay /scan  # D\\xE9lai header.stamp vs r\\xE9ception

# 4. Top CPU/RAM par process
htop --filter ros2

# 5. Statistiques r\\xE9seau
ros2 run ros2multicast send    # V\\xE9rifier multicast
iftop -i eth0                  # Trafic r\\xE9seau
\\\`\\\`\\\`

### ros2 trace \\u2014 Profilage kernel-level

\\\`\\\`\\\`bash
# Installer tracetools
sudo apt install ros-jazzy-tracetools \\\\
                 ros-jazzy-tracetools-launch \\\\
                 python3-babeltrace2

# D\\xE9marrer une session de trace
ros2 trace start session_test \\\\
  --list  # Voir les \\xE9v\\xE9nements disponibles

# Lancer nodes avec tracing activ\\xE9
ROS_TRACE_DIR=/tmp/traces ros2 run mon_package mon_node

# Arr\\xEAter et analyser
ros2 trace stop
ros2 trace process session_test

# Convertir en CSV pour analyse
babeltrace2 /tmp/traces/session_test | head -100
\\\`\\\`\\\`

### MultiThreadedExecutor \\u2014 Parallelisme optimal

\\\`\\\`\\\`python
import rclpy
from rclpy.executors import MultiThreadedExecutor, SingleThreadedExecutor
from rclpy.callback_groups import (
    ReentrantCallbackGroup,
    MutuallyExclusiveCallbackGroup
)

class NodeOptimise(Node):
    def __init__(self):
        super().__init__('node_optimise')

        # Groupe 1 : callbacks en parall\\xE8le (thread-safe requis)
        reentrant = ReentrantCallbackGroup()

        # Groupe 2 : callbacks mutuellement exclusifs (1 \\xE0 la fois)
        exclusive = MutuallyExclusiveCallbackGroup()

        # Callbacks rapides \\u2014 peuvent s'ex\\xE9cuter en parall\\xE8le
        self.create_subscription(
            LaserScan, '/scan', self.scan_cb, 10,
            callback_group=reentrant)
        self.create_subscription(
            Imu, '/imu', self.imu_cb, 10,
            callback_group=reentrant)

        # Callback lent \\u2014 prot\\xE9g\\xE9 contre r\\xE9entrance
        self.create_timer(0.1, self.control_loop,
            callback_group=exclusive)

        # Service \\u2014 mutuellement exclusif avec lui-m\\xEAme
        self.create_service(
            GetState, '/get_state', self.get_state_cb,
            callback_group=exclusive)

    def scan_cb(self, msg):
        # Rapide, peut s'ex\\xE9cuter en parall\\xE8le avec imu_cb
        self.latest_scan = msg

    def imu_cb(self, msg):
        # Rapide, idem
        self.latest_imu = msg

    def control_loop(self):
        # Boucle critique \\u2014 un seul thread \\xE0 la fois
        pass

def main():
    rclpy.init()
    node = NodeOptimise()

    # Executor multi-thread\\xE9 : num_threads = nb de callbacks
    executor = MultiThreadedExecutor(num_threads=6)
    executor.add_node(node)

    try:
        executor.spin()
    finally:
        executor.shutdown()
        rclpy.shutdown()
\\\`\\\`\\\`

### Optimiser les messages \\u2014 Z\\xE9ro-copie et intra-process

\\\`\\\`\\\`python
# Intra-process communication \\u2014 \\xE9vite la s\\xE9rialisation
# Quand publisher et subscriber sont dans le M\\xCAME processus

from rclpy.intra_process_manager import IntraProcessManager

# Activer intra-process dans le contexte
context = rclpy.Context()
rclpy.init(context=context)

node1 = PublisherNode(context=context)
node2 = SubscriberNode(context=context)

# Activer intra-process pour un node
node1.allow_undeclared_parameters = True
executor = SingleThreadedExecutor(context=context)
executor.add_node(node1)
executor.add_node(node2)
# Les msgs passent directement en m\\xE9moire, sans copie !
\\\`\\\`\\\`

### Profiler avec py-spy (Python)

\\\`\\\`\\\`bash
# Installer
pip3 install py-spy

# Profiler un node ROS2 en live
PID=$(ros2 run mon_package mon_node &; echo $!)
py-spy top --pid $PID

# G\\xE9n\\xE9rer un flamegraph
py-spy record -o flamegraph.svg --pid $PID
# Ouvrir flamegraph.svg dans un navigateur

# Profilage C++ avec perf
ros2 run --prefix "perf record -g --" \\\\
  mon_package mon_node_cpp
perf report --stdio
\\\`\\\`\\\`

### Surveillance m\\xE9moire et latence

\\\`\\\`\\\`python
# Node de diagnostics int\\xE9gr\\xE9
from diagnostic_msgs.msg import DiagnosticArray, DiagnosticStatus
import psutil, os

class DiagNode(Node):
    def __init__(self):
        super().__init__('diagnostics')
        self.diag_pub = self.create_publisher(
            DiagnosticArray, '/diagnostics', 10)
        self.create_timer(1.0, self.publish_diags)
        self.pid = os.getpid()

    def publish_diags(self):
        proc = psutil.Process(self.pid)
        mem_mb = proc.memory_info().rss / 1024 / 1024
        cpu_pct = proc.cpu_percent(interval=0.1)

        status = DiagnosticStatus()
        status.name = 'system_resources'
        status.level = DiagnosticStatus.OK

        if mem_mb > 500:
            status.level = DiagnosticStatus.WARN
            status.message = f'RAM \\xE9lev\\xE9e: {mem_mb:.1f} MB'
        elif cpu_pct > 80:
            status.level = DiagnosticStatus.WARN
            status.message = f'CPU \\xE9lev\\xE9: {cpu_pct:.1f}%'
        else:
            status.message = f'OK \\u2014 RAM: {mem_mb:.1f}MB, CPU: {cpu_pct:.1f}%'

        arr = DiagnosticArray()
        arr.header.stamp = self.get_clock().now().to_msg()
        arr.status = [status]
        self.diag_pub.publish(arr)
\\\`\\\`\\\`\`},{id:"m5-7",title:"Tests d'int\\xE9gration & Simulation avanc\\xE9e",done:!1,xp:150,content:\`## Tests d'Int\\xE9gration ROS2 \\u2014 Strat\\xE9gie Compl\\xE8te

### Pyramide de tests robotique

\\\`\\\`\\\`
         /\\\\
        /  \\\\
       / E2E\\\\    \\u2190 Tests bout-en-bout (simulation compl\\xE8te)
      /\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\\\
     / Int\\xE9gr \\\\  \\u2190 Tests d'int\\xE9gration (2+ nodes)
    /\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\\\
   /  Unitaires \\\\\\u2190 Tests unitaires (1 module isol\\xE9)
  \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500
\\\`\\\`\\\`

### Tests unitaires Python (pytest + ament)

\\\`\\\`\\\`python
# test/test_mon_node_unitaire.py
import pytest
import rclpy
from rclpy.node import Node
from std_msgs.msg import String, Float64
from mon_package.controleur import Controleur

@pytest.fixture(autouse=True, scope='session')
def ros():
    rclpy.init()
    yield
    rclpy.shutdown()

class TestControleur:
    """Tests unitaires du module Controleur sans ROS."""

    def test_parser_commande_avance(self):
        ctrl = Controleur()
        result = ctrl.parser_commande('avance 1.5')
        assert result['action'] == 'avance'
        assert result['valeur'] == pytest.approx(1.5)

    def test_parser_commande_invalide(self):
        ctrl = Controleur()
        with pytest.raises(ValueError):
            ctrl.parser_commande('commande_inconnue')

    def test_limiter_vitesse(self):
        ctrl = Controleur()
        assert ctrl.limiter_vitesse(10.0) == pytest.approx(0.5)
        assert ctrl.limiter_vitesse(-10.0) == pytest.approx(-0.5)
        assert ctrl.limiter_vitesse(0.3) == pytest.approx(0.3)

    def test_calcul_odometrie(self):
        ctrl = Controleur()
        dx, dy, dtheta = ctrl.calculer_odometrie(
            v_gauche=1.0, v_droite=1.0, dt=0.1)
        assert dx == pytest.approx(0.1, abs=1e-4)
        assert dy == pytest.approx(0.0, abs=1e-4)
\\\`\\\`\\\`

### Tests d'int\\xE9gration multi-nodes

\\\`\\\`\\\`python
# test/test_integration_pipeline.py
import rclpy, time, threading, pytest
from rclpy.node import Node
from std_msgs.msg import String
from geometry_msgs.msg import Twist
from rclpy.executors import SingleThreadedExecutor

class TestPipeline:
    """Test le pipeline complet : commande \\u2192 parsing \\u2192 cmd_vel."""

    @pytest.fixture(autouse=True)
    def setup(self):
        rclpy.init()
        # Cr\\xE9er les nodes \\xE0 tester
        from mon_package.cmd_parser import CmdParser
        from mon_package.vitesse_limiteur import VitesseLimiteur

        self.executor = SingleThreadedExecutor()
        self.parser = CmdParser()
        self.limiteur = VitesseLimiteur()
        self.executor.add_node(self.parser)
        self.executor.add_node(self.limiteur)

        # Node de test pour recevoir les r\\xE9sultats
        self.test_node = Node('test_node')
        self.received_twists = []
        self.test_node.create_subscription(
            Twist, '/cmd_vel',
            lambda msg: self.received_twists.append(msg), 10)
        self.executor.add_node(self.test_node)

        yield  # Tests s'ex\\xE9cutent ici

        # Teardown
        self.executor.shutdown()
        rclpy.shutdown()

    def spin_for(self, seconds: float):
        """Faire tourner l'executor pendant N secondes."""
        deadline = time.time() + seconds
        while time.time() < deadline:
            self.executor.spin_once(timeout_sec=0.01)

    def test_commande_avance_genere_twist(self):
        # Publier une commande
        pub = self.test_node.create_publisher(
            String, '/cmd_text', 10)
        msg = String()
        msg.data = 'avance 0.3'
        pub.publish(msg)

        self.spin_for(0.5)  # Laisser les messages se propager

        assert len(self.received_twists) > 0
        twist = self.received_twists[-1]
        assert twist.linear.x == pytest.approx(0.3, abs=0.01)
        assert twist.angular.z == pytest.approx(0.0, abs=0.01)

    def test_commande_tourne_gauche(self):
        pub = self.test_node.create_publisher(
            String, '/cmd_text', 10)
        pub.publish(String(data='tourne_gauche 45'))
        self.spin_for(0.5)

        assert len(self.received_twists) > 0
        twist = self.received_twists[-1]
        assert twist.angular.z > 0  # Positif = gauche
\\\`\\\`\\\`

### Tests de bout-en-bout avec launch_testing

\\\`\\\`\\\`python
# test/test_e2e_navigation.py
import launch
import launch_ros.actions
import launch_testing
import launch_testing.actions
import pytest, rclpy, time

@pytest.mark.launch_test
def generate_test_description():
    """D\\xE9finir le syst\\xE8me \\xE0 tester."""
    return launch.LaunchDescription([
        # Lancer les vrais nodes
        launch_ros.actions.Node(
            package='mon_package',
            executable='robot_node',
            name='robot'
        ),
        launch_ros.actions.Node(
            package='mon_package',
            executable='fleet_commander',
            name='fleet'
        ),
        # Signal : syst\\xE8me pr\\xEAt \\xE0 \\xEAtre test\\xE9
        launch_testing.actions.ReadyToTest()
    ])

class TestNavigationE2E(unittest.TestCase):
    def test_robot_demarre_dans_etat_idle(self):
        """V\\xE9rifier que le robot d\\xE9marre en \\xE9tat IDLE."""
        rclpy.init()
        node = rclpy.create_node('test_e2e')

        # Attendre le topic d'\\xE9tat
        state = None
        def cb(msg):
            nonlocal state
            state = msg.data

        node.create_subscription(String, '/fleet/status', cb, 10)

        deadline = time.time() + 5.0
        while state is None and time.time() < deadline:
            rclpy.spin_once(node, timeout_sec=0.1)

        assert state is not None, "Pas de status re\\xE7u dans les 5s"
        assert 'idle' in state.lower()

        node.destroy_node()
        rclpy.shutdown()
\\\`\\\`\\\`

### Lancer les tests

\\\`\\\`\\\`bash
# Tests unitaires seuls
colcon test --packages-select mon_package \\\\
  --pytest-args -k "test_unitaire"

# Tous les tests
colcon test --packages-select mon_package
colcon test-result --all --verbose

# Tests avec couverture de code
colcon test --packages-select mon_package \\\\
  --pytest-args --cov=mon_package --cov-report=html

# Launch tests (avec ROS2 complet)
ros2 launch mon_package test_e2e.launch.py
\\\`\\\`\\\`\`},{id:"m5-8",title:"ROS2 avec Docker & Containers",done:!1,xp:150,content:\`## Docker pour ROS2 \\u2014 D\\xE9ploiement Production

### Dockerfile multi-stage optimis\\xE9

\\\`\\\`\\\`dockerfile
# Stage 1 : Build
FROM ros:jazzy AS builder

WORKDIR /ros2_ws
COPY src/ src/

RUN apt-get update && \\\\
    rosdep update && \\\\
    rosdep install --from-paths src --ignore-src -r -y && \\\\
    apt-get clean && rm -rf /var/lib/apt/lists/*

RUN . /opt/ros/jazzy/setup.sh && \\\\
    colcon build \\\\
      --cmake-args -DCMAKE_BUILD_TYPE=Release \\\\
    && rm -rf build/ log/

# Stage 2 : Runtime (plus l\\xE9ger)
FROM ros:jazzy-ros-base

WORKDIR /ros2_ws
COPY --from=builder /ros2_ws/install install/

# Copier config
COPY config/ config/

# Entrypoint
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["ros2", "launch", "mon_package", "robot.launch.py"]
\\\`\\\`\\\`

\\\`\\\`\\\`bash
#!/bin/bash
# entrypoint.sh
set -e
source /opt/ros/jazzy/setup.bash
source /ros2_ws/install/setup.bash
exec "$@"
\\\`\\\`\\\`

### docker-compose pour un syst\\xE8me complet

\\\`\\\`\\\`yaml
# docker-compose.yml
version: '3.8'
services:
  robot:
    image: mon_robot:latest
    network_mode: host
    privileged: true
    environment:
      - ROS_DOMAIN_ID=0
      - RMW_IMPLEMENTATION=rmw_cyclonedds_cpp
    volumes:
      - /dev:/dev
      - ./config:/ros2_ws/config
    devices:
      - /dev/ttyUSB0:/dev/ttyUSB0
    command: ros2 launch mon_package bringup.launch.py

  navigation:
    image: mon_robot:latest
    network_mode: host
    environment:
      - ROS_DOMAIN_ID=0
    depends_on: [robot]
    command: ros2 launch nav2_bringup navigation_launch.py

  dashboard:
    image: mon_robot:latest
    network_mode: host
    ports: ["8080:8080"]
    command: ros2 launch rosbridge_server rosbridge_websocket_launch.xml
\\\`\\\`\\\`\`},{id:"m5-9",title:"rosbridge & WebSocket API",done:!1,xp:130,content:\`## rosbridge \\u2014 API WebSocket pour ROS2

rosbridge expose tous les topics/services ROS2 via WebSocket JSON.

### Installation & Lancement

\\\`\\\`\\\`bash
sudo apt install ros-jazzy-rosbridge-suite

# Lancer le serveur WebSocket
ros2 launch rosbridge_server rosbridge_websocket_launch.xml
# Port par d\\xE9faut : 9090
\\\`\\\`\\\`

### Client JavaScript (web dashboard)

\\\`\\\`\\\`javascript
// Dans un navigateur \\u2014 utiliser roslibjs
const ros = new ROSLIB.Ros({ url: 'ws://robot.local:9090' });

ros.on('connection', () => console.log('Connect\\xE9 \\xE0 ROS2'));
ros.on('error', err => console.error('Erreur:', err));
ros.on('close', () => console.log('D\\xE9connect\\xE9'));

// Subscriber
const scanTopic = new ROSLIB.Topic({
  ros, name: '/scan',
  messageType: 'sensor_msgs/LaserScan'
});
scanTopic.subscribe(msg => {
  console.log('LiDAR ranges:', msg.ranges.slice(0, 5));
});

// Publisher
const cmdVel = new ROSLIB.Topic({
  ros, name: '/cmd_vel',
  messageType: 'geometry_msgs/Twist'
});
function avancer(vx) {
  cmdVel.publish(new ROSLIB.Message({
    linear: { x: vx, y: 0, z: 0 },
    angular: { x: 0, y: 0, z: 0 }
  }));
}

// Service call
const getState = new ROSLIB.Service({
  ros, name: '/get_state',
  serviceType: 'std_srvs/Trigger'
});
getState.callService(new ROSLIB.ServiceRequest({}), result => {
  console.log('\\xC9tat:', result.message);
});
\\\`\\\`\\\`

### Client Python via websocket

\\\`\\\`\\\`python
import asyncio, websockets, json

async def ros_client():
    uri = "ws://localhost:9090"
    async with websockets.connect(uri) as ws:
        # Subscribe
        await ws.send(json.dumps({
            "op": "subscribe",
            "topic": "/odom",
            "type": "nav_msgs/Odometry"
        }))
        async for message in ws:
            data = json.loads(message)
            pos = data['msg']['pose']['pose']['position']
            print(f"Position: ({pos['x']:.2f}, {pos['y']:.2f})")
\\\`\\\`\\\`\`},{id:"m5-10",title:"microROS \\u2014 Microcontr\\xF4leurs",done:!1,xp:160,content:\`## microROS \\u2014 ROS2 sur Microcontr\\xF4leurs

microROS permet de connecter des Arduino, ESP32, STM32 directement \\xE0 ROS2.

### Architecture

\\\`\\\`\\\`
Microcontr\\xF4leur (ESP32/Arduino)
  \\u2502  micro-XRCE-DDS (serial/WiFi/UDP)
  \\u25BC
microROS Agent (Linux)
  \\u2502  DDS (CycloneDDS)
  \\u25BC
ROS2 Nodes (Jazzy)
\\\`\\\`\\\`

### Installation Agent

\\\`\\\`\\\`bash
# Via Docker (le plus simple)
docker run -it --rm \\\\
  -v /dev:/dev \\\\
  --privileged \\\\
  --network=host \\\\
  microros/micro-ros-agent:jazzy \\\\
  serial --dev /dev/ttyUSB0 -b 115200

# Ou build depuis source
sudo apt install ros-jazzy-micro-ros-agent
ros2 run micro_ros_agent micro_ros_agent \\\\
  serial --dev /dev/ttyUSB0 -b 115200
\\\`\\\`\\\`

### Code Arduino (ESP32)

\\\`\\\`\\\`cpp
#include <micro_ros_arduino.h>
#include <rcl/rcl.h>
#include <rclc/rclc.h>
#include <rclc/executor.h>
#include <std_msgs/msg/int32.h>
#include <geometry_msgs/msg/twist.h>

rcl_publisher_t publisher;
rcl_subscription_t subscription;
std_msgs__msg__Int32 pub_msg;
geometry_msgs__msg__Twist sub_msg;

void subscription_callback(const void * msgin) {
  const geometry_msgs__msg__Twist * msg =
    (const geometry_msgs__msg__Twist *)msgin;
  float linear_x = msg->linear.x;
  float angular_z = msg->angular.z;
  // Commande les moteurs
  setMotors(linear_x, angular_z);
}

void setup() {
  set_microros_serial_transports(Serial);
  Serial.begin(115200);
  delay(2000);

  allocator = rcl_get_default_allocator();
  rclc_support_init(&support, 0, NULL, &allocator);
  rclc_node_init_default(&node, "esp32_node", "", &support);

  // Publisher
  rclc_publisher_init_default(&publisher, &node,
    ROSIDL_GET_MSG_TYPE_SUPPORT(std_msgs, msg, Int32),
    "/capteur/valeur");

  // Subscriber
  rclc_subscription_init_default(&subscription, &node,
    ROSIDL_GET_MSG_TYPE_SUPPORT(geometry_msgs, msg, Twist),
    "/cmd_vel");

  rclc_executor_init(&executor, &support.context, 1, &allocator);
  rclc_executor_add_subscription(&executor, &subscription,
    &sub_msg, &subscription_callback, ON_NEW_DATA);
}

void loop() {
  pub_msg.data = analogRead(A0);
  rcl_publish(&publisher, &pub_msg, NULL);
  rclc_executor_spin_some(&executor, RCL_MS_TO_NS(100));
  delay(100);
}
\\\`\\\`\\\`\`},{id:"m5-11",title:"State Estimation & Sensor Fusion",done:!1,xp:160,content:\`## Fusion de Capteurs & Estimation d'\\xC9tat

### robot_localization \\u2014 EKF/UKF

\\\`\\\`\\\`bash
sudo apt install ros-jazzy-robot-localization
\\\`\\\`\\\`

\\\`\\\`\\\`yaml
# ekf.yaml \\u2014 Filtre de Kalman \\xC9tendu
ekf_filter_node:
  ros__parameters:
    frequency: 30.0          # Hz de publication
    sensor_timeout: 0.1      # sec avant timeout
    two_d_mode: true         # Robot planaire
    transform_time_offset: 0.0
    transform_timeout: 0.0
    print_diagnostics: true
    debug: false

    map_frame: map
    odom_frame: odom
    base_link_frame: base_footprint
    world_frame: odom

    # Odom\\xE9trie roues
    odom0: /odom
    odom0_config:
      # x  y  z  roll pitch yaw  vx  vy  vz  vroll vpitch vyaw  ax  ay  az
      [true, false, false,
       false, false, false,
       true, false, false,
       false, false, true,
       false, false, false]
    odom0_differential: false
    odom0_relative: false
    odom0_queue_size: 10

    # IMU
    imu0: /imu/data
    imu0_config:
      [false, false, false,
       true, true, true,
       false, false, false,
       true, true, true,
       true, false, false]
    imu0_differential: false
    imu0_relative: false
    imu0_queue_size: 10
    imu0_remove_gravitational_acceleration: true

    process_noise_covariance:
      [0.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0.05, 0, ...]
\\\`\\\`\\\`

### Lancer la localisation fusionn\\xE9e

\\\`\\\`\\\`python
# launch/localization.launch.py
Node(
    package='robot_localization',
    executable='ekf_node',
    name='ekf_filter_node',
    output='screen',
    parameters=[ekf_yaml_path],
    remappings=[('odometry/filtered', '/odom')]
)
\\\`\\\`\\\`\`},{id:"m5-12",title:"Navigation Avanc\\xE9e \\u2014 Follow Path & RL",done:!1,xp:180,content:\`## Navigation Avanc\\xE9e \\u2014 Apprentissage par Renforcement

### Navigation bas\\xE9e sur RL avec Isaac Lab

\\\`\\\`\\\`bash
# Isaac Lab \\u2014 Framework RL pour robotique
# https://isaac-sim.github.io/IsaacLab

# Installation
git clone https://github.com/isaac-sim/IsaacLab.git
cd IsaacLab
./isaaclab.sh --install
\\\`\\\`\\\`

### Politique de navigation RL \\u2192 ROS2

\\\`\\\`\\\`python
import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist
from sensor_msgs.msg import LaserScan
import torch
import numpy as np

class RLNavigationNode(Node):
    def __init__(self):
        super().__init__('rl_navigation')

        # Charger le mod\\xE8le RL entra\\xEEn\\xE9
        self.policy = torch.jit.load('policy.pt')
        self.policy.eval()

        # Param\\xE8tres de l'observation
        self.n_scans = 180       # rayons LiDAR utilis\\xE9s
        self.goal_dist = 0.0
        self.goal_angle = 0.0
        self.prev_vel = np.zeros(2)

        self.cmd_pub = self.create_publisher(
            Twist, '/cmd_vel', 10)
        self.scan_sub = self.create_subscription(
            LaserScan, '/scan', self.scan_cb, 10)

        self.create_timer(0.1, self.inference_step)

    def scan_cb(self, msg: LaserScan):
        # Downsampler le scan \\xE0 n_scans rayons
        ranges = np.array(msg.ranges)
        # Remplacer inf par max_range
        ranges = np.where(np.isinf(ranges), msg.range_max, ranges)
        step = len(ranges) // self.n_scans
        self.scan_obs = ranges[::step][:self.n_scans]

    def inference_step(self):
        # Construire le vecteur d'observation
        obs = np.concatenate([
            self.scan_obs / 12.0,     # LiDAR normalis\\xE9
            [self.goal_dist / 10.0],  # Distance au goal
            [self.goal_angle / np.pi],# Angle au goal
            self.prev_vel,            # Vitesses pr\\xE9c\\xE9dentes
        ])

        # Inf\\xE9rence
        with torch.no_grad():
            action = self.policy(
                torch.FloatTensor(obs).unsqueeze(0)
            ).numpy()[0]

        # Publier la commande
        cmd = Twist()
        cmd.linear.x = float(np.clip(action[0], 0, 0.5))
        cmd.angular.z = float(np.clip(action[1], -1.0, 1.0))
        self.cmd_pub.publish(cmd)
        self.prev_vel = action
\\\`\\\`\\\`\`},{id:"m5-13",title:"Monitoring & Observabilit\\xE9 Production",done:!1,xp:140,content:\`## Monitoring & Observabilit\\xE9 en Production

### Prometheus + Grafana pour ROS2

\\\`\\\`\\\`bash
# Node d'export m\\xE9triques
pip install prometheus_client
\\\`\\\`\\\`

\\\`\\\`\\\`python
import rclpy
from rclpy.node import Node
from prometheus_client import start_http_server, Gauge, Counter, Histogram
from std_msgs.msg import Float64
from sensor_msgs.msg import BatteryState
import time

class MetricsExporter(Node):
    def __init__(self):
        super().__init__('metrics_exporter')

        # M\\xE9triques Prometheus
        self.battery_gauge = Gauge(
            'robot_battery_percent',
            'Niveau de batterie en pourcentage')
        self.cmd_vel_counter = Counter(
            'robot_cmd_vel_total',
            'Nombre de commandes re\\xE7ues')
        self.nav_latency = Histogram(
            'robot_nav_goal_duration_seconds',
            'Dur\\xE9e pour atteindre un goal',
            buckets=[5, 10, 30, 60, 120, 300])
        self.topics_rate = Gauge(
            'robot_topic_hz', 'Fr\\xE9quence topic',
            ['topic'])

        # Subscribers
        self.create_subscription(
            BatteryState, '/battery_state',
            self.battery_cb, 10)

        # Exposer sur port 8000
        start_http_server(8000)
        self.get_logger().info(
            'M\\xE9triques disponibles sur :8000/metrics')

    def battery_cb(self, msg: BatteryState):
        self.battery_gauge.set(msg.percentage * 100)
\\\`\\\`\\\`

### Grafana Dashboard config

\\\`\\\`\\\`yaml
# grafana/provisioning/datasources/prometheus.yml
apiVersion: 1
datasources:
  - name: Prometheus
    type: prometheus
    access: proxy
    url: http://prometheus:9090
    isDefault: true
\\\`\\\`\\\`

\\\`\\\`\\\`bash
# Stack compl\\xE8te docker-compose
docker compose up prometheus grafana metrics_exporter
# Grafana : http://localhost:3000
# Prometheus: http://localhost:9090
\\\`\\\`\\\`\`}]}],Ci=[{id:"ch1",type:"syntax",level:1,title:"Hello Robot!",desc:"\\xC9crire un node qui logue 'Hello ROS2!' toutes les 2 secondes.",xp:30,color:r.cyan,hint:"Utilise create_timer(2.0, callback) et get_logger().info()",solution:\`import rclpy
from rclpy.node import Node

class HelloNode(Node):
    def __init__(self):
        super().__init__('hello_node')
        self.create_timer(2.0, self.cb)
    def cb(self):
        self.get_logger().info('Hello ROS2!')

def main():
    rclpy.init()
    rclpy.spin(HelloNode())
    rclpy.shutdown()\`,tags:["Node","Timer","Logger"]},{id:"ch2",type:"syntax",level:2,title:"Publisher de temp\\xE9rature",desc:"Publier une valeur Float64 simulant une temp\\xE9rature (20\\xB0C + bruit random) sur /temperature \\xE0 1Hz.",xp:50,color:r.blue,hint:"Utilise from std_msgs.msg import Float64 et import random",solution:\`import rclpy, random
from rclpy.node import Node
from std_msgs.msg import Float64

class TempPublisher(Node):
    def __init__(self):
        super().__init__('temp_publisher')
        self.pub = self.create_publisher(Float64, '/temperature', 10)
        self.create_timer(1.0, self.publish)

    def publish(self):
        msg = Float64()
        msg.data = 20.0 + random.uniform(-2.0, 2.0)
        self.pub.publish(msg)
        self.get_logger().info(f'Temp: {msg.data:.2f}\\xB0C')

def main():
    rclpy.init()
    rclpy.spin(TempPublisher())
    rclpy.shutdown()\`,tags:["Publisher","Float64","Timer"]},{id:"ch3",type:"syntax",level:2,title:"Service calculatrice",desc:"Cr\\xE9er un service /calcule qui re\\xE7oit deux Float64 et une op\\xE9ration (+,-,*,/) et retourne le r\\xE9sultat.",xp:80,color:r.blue,hint:"Cr\\xE9e d'abord un fichier .srv : float64 a\\\\nfloat64 b\\\\nstring op\\\\n---\\\\nfloat64 result",solution:\`# Interface srv/Calcul.srv:
# float64 a
# float64 b
# string op
# ---
# float64 result
# bool success

from mon_interfaces.srv import Calcul
import rclpy
from rclpy.node import Node

class Calculatrice(Node):
    def __init__(self):
        super().__init__('calculatrice')
        self.srv = self.create_service(
            Calcul, '/calcule', self.callback)

    def callback(self, req, resp):
        ops = {'+': req.a+req.b, '-': req.a-req.b,
               '*': req.a*req.b}
        if req.op == '/' and req.b != 0:
            ops['/'] = req.a / req.b
        resp.result = ops.get(req.op, 0.0)
        resp.success = req.op in ops
        return resp\`,tags:["Service","Custom Interface"]},{id:"ch4",type:"syntax",level:3,title:"TF2 Broadcaster",desc:"Broadcaster une transformation dynamique entre 'world' et 'robot' qui tourne sur l'axe Z \\xE0 0.5 rad/s.",xp:100,color:r.purple,hint:"Utilise TransformBroadcaster et tf_transformations.quaternion_from_euler(0, 0, angle)",solution:\`import rclpy, math
from rclpy.node import Node
from tf2_ros import TransformBroadcaster
from geometry_msgs.msg import TransformStamped
import tf_transformations

class RotatingTF(Node):
    def __init__(self):
        super().__init__('rotating_tf')
        self.br = TransformBroadcaster(self)
        self.angle = 0.0
        self.create_timer(0.05, self.broadcast)  # 20Hz

    def broadcast(self):
        t = TransformStamped()
        t.header.stamp = self.get_clock().now().to_msg()
        t.header.frame_id = 'world'
        t.child_frame_id = 'robot'
        t.transform.translation.x = 1.0
        self.angle += 0.5 * 0.05  # 0.5 rad/s * dt
        q = tf_transformations.quaternion_from_euler(0,0,self.angle)
        t.transform.rotation.x = q[0]
        t.transform.rotation.y = q[1]
        t.transform.rotation.z = q[2]
        t.transform.rotation.w = q[3]
        self.br.sendTransform(t)\`,tags:["TF2","Transform","Quaternion"]},{id:"ch5",type:"syntax",level:3,title:"Lifecycle Node Complet",desc:"Impl\\xE9menter un Lifecycle Node qui d\\xE9marre un publisher seulement en \\xE9tat 'active' et l'arr\\xEAte en 'deactivate'.",xp:120,color:r.purple,hint:"Utilise rclpy.lifecycle.Node, cr\\xE9e le publisher dans on_activate, None-le dans on_deactivate",solution:\`from rclpy.lifecycle import Node, State, TransitionCallbackReturn
from std_msgs.msg import String
import rclpy

class MonLifecycle(Node):
    def __init__(self):
        super().__init__('mon_lifecycle')
        self._pub = None
        self._timer = None

    def on_configure(self, state: State):
        self.get_logger().info('Configured')
        return TransitionCallbackReturn.SUCCESS

    def on_activate(self, state: State):
        self._pub = self.create_publisher(String, '/actif', 10)
        self._timer = self.create_timer(1.0, self._publish)
        return TransitionCallbackReturn.SUCCESS

    def on_deactivate(self, state: State):
        self.destroy_timer(self._timer)
        self.destroy_publisher(self._pub)
        self._pub = None
        return TransitionCallbackReturn.SUCCESS

    def on_cleanup(self, state: State):
        return TransitionCallbackReturn.SUCCESS

    def _publish(self):
        msg = String()
        msg.data = 'Je suis actif!'
        self._pub.publish(msg)\`,tags:["Lifecycle","Publisher","State Machine"]},{id:"ch6",type:"syntax",level:4,title:"Action Server Navigation",desc:"Cr\\xE9er un Action Server qui simule un d\\xE9placement vers une cible (Pose2D) avec feedback de distance restante.",xp:160,color:r.amber,hint:"Utilise asyncio.sleep dans execute_callback pour simuler le mouvement, publie le feedback \\xE0 chaque \\xE9tape",solution:\`import asyncio, math, rclpy
from rclpy.node import Node
from rclpy.action import ActionServer
from nav2_msgs.action import NavigateToPose

class FakeNavigator(Node):
    def __init__(self):
        super().__init__('fake_navigator')
        self._server = ActionServer(
            self, NavigateToPose,
            'navigate_to_pose',
            self._execute)
        self.x, self.y = 0.0, 0.0

    async def _execute(self, goal_handle):
        target_x = goal_handle.request.pose.pose.position.x
        target_y = goal_handle.request.pose.pose.position.y
        steps = 20
        dx = (target_x - self.x) / steps
        dy = (target_y - self.y) / steps

        for i in range(steps):
            self.x += dx
            self.y += dy
            dist = math.hypot(target_x-self.x, target_y-self.y)
            fb = NavigateToPose.Feedback()
            fb.distance_remaining = dist
            goal_handle.publish_feedback(fb)
            await asyncio.sleep(0.1)

        goal_handle.succeed()
        return NavigateToPose.Result()\`,tags:["Action Server","Navigation","Async"]},{id:"ch7",type:"debug",level:2,title:"\\u{1F41B} D\\xE9bogage : Publisher silencieux",desc:\`Ce code est cens\\xE9 publier sur /robot/status mais rien n'appara\\xEEt dans ros2 topic echo. Trouve et corrige les 3 bugs :

\\\`\\\`\\\`python
class StatusPub(Node):
    def __init__(self):
        super().__init__('status')
        self.pub = self.create_publisher(
            String, 'robot/status', 10)  # BUG 1
        self.timer = self.create_timer(1, self.cb)
    def cb(self):
        msg = String
        msg.data = 'OK'    # BUG 2
        self.pub.publish()  # BUG 3
\\\`\\\`\\\`\`,xp:70,color:r.red,hint:"BUG 1 : topic sans '/' \\u2192 peut causer des probl\\xE8mes de namespace. BUG 2 : String vs String(). BUG 3 : il manque l'argument msg.",solution:\`# Corrections :
# BUG 1 : Le topic devrait commencer par '/' pour \\xEAtre absolu
#   'robot/status' -> '/robot/status'
# BUG 2 : Instanciation manquante
#   msg = String  -> msg = String()
# BUG 3 : Argument manquant
#   self.pub.publish() -> self.pub.publish(msg)

class StatusPub(Node):
    def __init__(self):
        super().__init__('status')
        self.pub = self.create_publisher(
            String, '/robot/status', 10)  # FIX 1
        self.timer = self.create_timer(1, self.cb)
    def cb(self):
        msg = String()       # FIX 2
        msg.data = 'OK'
        self.pub.publish(msg)  # FIX 3\`,tags:["Debug","Publisher","Messages"]},{id:"ch8",type:"syntax",level:2,title:"Subscriber avec filtre",desc:"Cr\\xE9er un node qui s'abonne \\xE0 /temperature (Float64), n'affiche un warning que si la valeur d\\xE9passe 30\\xB0C ou est inf\\xE9rieure \\xE0 10\\xB0C.",xp:60,color:r.blue,hint:"Dans le callback, compare msg.data avec les seuils et utilise get_logger().warn()",solution:\`import rclpy
from rclpy.node import Node
from std_msgs.msg import Float64

class TempMonitor(Node):
    def __init__(self):
        super().__init__('temp_monitor')
        self.create_subscription(
            Float64, '/temperature',
            self.callback, 10)
        self.declare_parameter('max_temp', 30.0)
        self.declare_parameter('min_temp', 10.0)

    def callback(self, msg: Float64):
        t = msg.data
        max_t = self.get_parameter('max_temp').value
        min_t = self.get_parameter('min_temp').value
        if t > max_t:
            self.get_logger().warn(
                f'Temp\\xE9rature trop haute: {t:.1f}\\xB0C > {max_t}\\xB0C')
        elif t < min_t:
            self.get_logger().warn(
                f'Temp\\xE9rature trop basse: {t:.1f}\\xB0C < {min_t}\\xB0C')
        else:
            self.get_logger().info(f'Temp normale: {t:.1f}\\xB0C')\`,tags:["Subscriber","Parameters","Conditions"]},{id:"ch9",type:"syntax",level:3,title:"Launch file avec arguments",desc:"\\xC9crire un launch file Python qui d\\xE9marre un node 'camera_node' avec un argument 'resolution' (d\\xE9faut: '720p') et 'fps' (d\\xE9faut: 30).",xp:90,color:r.purple,hint:"Utilise DeclareLaunchArgument et LaunchConfiguration dans les parameters du Node",solution:\`from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    resolution_arg = DeclareLaunchArgument(
        'resolution',
        default_value='720p',
        description='R\\xE9solution cam\\xE9ra: 480p, 720p, 1080p'
    )
    fps_arg = DeclareLaunchArgument(
        'fps',
        default_value='30',
        description='Images par seconde'
    )
    camera_node = Node(
        package='camera_pkg',
        executable='camera_node',
        name='camera',
        parameters=[{
            'resolution': LaunchConfiguration('resolution'),
            'fps': LaunchConfiguration('fps'),
        }],
        output='screen',
    )
    return LaunchDescription([
        resolution_arg, fps_arg, camera_node
    ])\`,tags:["Launch","Arguments","Parameters"]},{id:"ch10",type:"debug",level:3,title:"\\u{1F41B} Action Client bloquant",desc:\`Ce client d'action bloque l'ex\\xE9cution. Identifie le probl\\xE8me et propose la version non-bloquante :

\\\`\\\`\\\`python
class NavClient(Node):
    def go_to(self, x, y):
        goal = NavigateToPose.Goal()
        goal.pose.pose.position.x = x
        goal.pose.pose.position.y = y
        # Envoi synchrone bloquant :
        result = self._client.send_goal(goal)
        return result
\\\`\\\`\\\`\`,xp:110,color:r.amber,hint:"send_goal() est synchrone et bloque le thread. Utilise send_goal_async() avec add_done_callback() ou rclpy.spin_until_future_complete()",solution:\`# Version non-bloquante avec callback
class NavClient(Node):
    def go_to(self, x, y):
        goal = NavigateToPose.Goal()
        goal.pose.pose.position.x = x
        goal.pose.pose.position.y = y

        # Envoi asynchrone \\u2014 ne bloque pas
        future = self._client.send_goal_async(
            goal,
            feedback_callback=self._on_feedback
        )
        future.add_done_callback(self._goal_response_cb)

    def _goal_response_cb(self, future):
        handle = future.result()
        if not handle.accepted:
            self.get_logger().warn('Goal rejet\\xE9!')
            return
        result_future = handle.get_result_async()
        result_future.add_done_callback(self._result_cb)

    def _result_cb(self, future):
        result = future.result().result
        self.get_logger().info('Navigation termin\\xE9e!')

    def _on_feedback(self, msg):
        dist = msg.feedback.distance_remaining
        self.get_logger().info(f'Distance: {dist:.2f}m')\`,tags:["Action Client","Async","Callbacks"]},{id:"ch11",type:"syntax",level:4,title:"QoS Profil Capteur",desc:"Configurer et utiliser les QoS appropri\\xE9s pour (1) un subscriber de LiDAR haute fr\\xE9quence et (2) un publisher de commandes critiques.",xp:120,color:r.amber,hint:"LiDAR : BEST_EFFORT + KEEP_LAST(1). Commandes : RELIABLE + KEEP_LAST(10)",solution:\`from rclpy.qos import (
    QoSProfile, ReliabilityPolicy,
    HistoryPolicy, DurabilityPolicy
)
from sensor_msgs.msg import LaserScan
from geometry_msgs.msg import Twist

class RobotController(Node):
    def __init__(self):
        super().__init__('robot_ctrl')

        # QoS pour capteur LiDAR (haute fr\\xE9q, perte ok)
        qos_lidar = QoSProfile(
            reliability=ReliabilityPolicy.BEST_EFFORT,
            history=HistoryPolicy.KEEP_LAST,
            depth=1,  # Seulement le dernier scan
        )

        # QoS pour commandes (critique, fiabilit\\xE9 requise)
        qos_cmd = QoSProfile(
            reliability=ReliabilityPolicy.RELIABLE,
            history=HistoryPolicy.KEEP_LAST,
            depth=10,
            durability=DurabilityPolicy.VOLATILE,
        )

        self.scan_sub = self.create_subscription(
            LaserScan, '/scan', self.scan_cb, qos_lidar)
        self.cmd_pub = self.create_publisher(
            Twist, '/cmd_vel', qos_cmd)

    def scan_cb(self, msg: LaserScan):
        # R\\xE9agir au scan LiDAR
        min_dist = min(r for r in msg.ranges if r > 0.01)
        if min_dist < 0.3:  # Obstacle proche
            self.stop()\`,tags:["QoS","LiDAR","Commandes"]},{id:"ch12",type:"syntax",level:5,title:"MultiThreadedExecutor",desc:"Cr\\xE9er un node avec deux callbacks : l'un lent (500ms), l'autre rapide (50ms). Utiliser MultiThreadedExecutor + ReentrantCallbackGroup pour qu'ils s'ex\\xE9cutent en parall\\xE8le.",xp:150,color:r.red,hint:"Sans MultiThreadedExecutor, le callback lent bloque le rapide. Utilise ReentrantCallbackGroup sur les deux timers.",solution:\`import rclpy
from rclpy.node import Node
from rclpy.executors import MultiThreadedExecutor
from rclpy.callback_groups import ReentrantCallbackGroup
import time

class ParallelNode(Node):
    def __init__(self):
        super().__init__('parallel_node')
        # Groupe r\\xE9entrant = callbacks en parall\\xE8le
        group = ReentrantCallbackGroup()

        self.create_timer(
            0.05, self.fast_cb,     # 20 Hz
            callback_group=group)
        self.create_timer(
            0.5, self.slow_cb,      # 2 Hz
            callback_group=group)

    def fast_cb(self):
        self.get_logger().info('Fast tick')

    def slow_cb(self):
        time.sleep(0.4)  # Travail lourd
        self.get_logger().info('Slow done')

def main():
    rclpy.init()
    node = ParallelNode()
    # 4 threads pour parall\\xE9lisme
    executor = MultiThreadedExecutor(num_threads=4)
    executor.add_node(node)
    executor.spin()
    rclpy.shutdown()\`,tags:["MultiThreaded","Executor","Performance"]}],h_=[{id:"p1",level:2,title:"Robot \\xC9cho Intelligent",desc:"Un robot qui \\xE9coute des commandes texte sur /cmd_text, les analyse, et publie une r\\xE9ponse structur\\xE9e sur /robot_response avec vitesse et direction calcul\\xE9es.",xp:200,color:r.blue,duration:"3-5h",tags:["Topics","Services","Messages"],specs:["Node /cmd_parser : subscriber sur /cmd_text (String), publisher sur /robot_response (Twist)","Commandes reconnues : 'avance N', 'recule N', 'tourne_gauche A', 'tourne_droite A', 'stop'","Service /get_history : retourne les 10 derni\\xE8res commandes ex\\xE9cut\\xE9es","Launch file d\\xE9marrant cmd_parser + un node logger qui enregistre dans un fichier","Package avec tests unitaires v\\xE9rifiant le parsing"],techStack:["rclpy","std_msgs","geometry_msgs","example_interfaces"],githubTemplate:"https://github.com/ros2/ros2"},{id:"p2",level:3,title:"Moniteur de Fleet",desc:"Dashboard ROS2 qui surveille l'\\xE9tat de plusieurs 'robots simul\\xE9s' (nodes), leurs positions TF2, et alerte via action si un robot s'\\xE9carte trop de sa zone.",xp:400,color:r.purple,duration:"8-12h",tags:["TF2","Actions","Lifecycle","Launch"],specs:["3 nodes 'robot_simulator_N' (Lifecycle) qui broadcastent leur TF world->robotN","Node 'fleet_monitor' : lit toutes les TF, publie /fleet_status (custom msg)","Action Server /check_zone : v\\xE9rifie qu'un robot est dans un rayon donn\\xE9, retourne feedback progressif","Launch file avec arguments : nombre de robots, fr\\xE9quence de monitoring","YAML de param\\xE8tres : zones autoris\\xE9es par robot, seuils d'alerte","rqt_graph doit montrer l'architecture compl\\xE8te"],techStack:["tf2_ros","rclpy.lifecycle","rclpy.action","custom_interfaces"],githubTemplate:"https://github.com/ros2/demos"},{id:"p3",level:4,title:"Robot Diff\\xE9rentiel Simul\\xE9",desc:"Robot complet avec URDF, simulation Gazebo, contr\\xF4leur diff\\xE9rentiel ros2_control, SLAM et navigation Nav2 vers des waypoints pr\\xE9d\\xE9finis.",xp:800,color:r.amber,duration:"20-30h",tags:["URDF","Gazebo","Nav2","ros2_control","SLAM"],specs:["URDF/Xacro : base rectangulaire, 2 roues motrices, 1 roue caster, capteur LiDAR 360\\xB0, cam\\xE9ra RGB","Gazebo Harmonic (Jazzy) ou Fortress (Jazzy) avec plugins ros2_control","Contr\\xF4leur DiffDriveController configur\\xE9 et fonctionnel (/cmd_vel -> mouvements r\\xE9els)","SLAM avec slam_toolbox : g\\xE9n\\xE9rer une carte de la salle Gazebo","Nav2 : naviguer vers une liste de waypoints d\\xE9finis en YAML","Node 'mission_planner' : charge les waypoints, envoie les goals Nav2, g\\xE8re les erreurs","Tests d'int\\xE9gration avec simulation headless"],techStack:["urdf","xacro","ros2_control","slam_toolbox","nav2","gazebo"],githubTemplate:"https://github.com/joshnewans/articubot_one"},{id:"p4",level:5,title:"Syst\\xE8me Multi-Robot S\\xE9curis\\xE9",desc:"Architecture de production avec 3 robots coordonn\\xE9s, communication Zenoh (Jazzy) ou SROS2 (Jazzy), monitoring CI/CD et dashboard de fleet.",xp:1200,color:r.red,duration:"40-60h",tags:["SROS2","Zenoh","Fleet","CI/CD","Multi-robot"],specs:["3 robots avec namespaces isol\\xE9s /robot1, /robot2, /robot3","Communication s\\xE9curis\\xE9e SROS2 avec politiques d'acc\\xE8s diff\\xE9renci\\xE9es","Fleet Commander : assignation de t\\xE2ches dynamique, load balancing","Zenoh bridge (Jazzy) pour communication cross-network avec serveur cloud simul\\xE9","Pipeline GitHub Actions : build, lint, tests unitaires + int\\xE9gration, Docker image","Node 'health_monitor' : watchdog, heartbeat, alertes Slack/webhook","Dashboard Python (Flask) consommant des topics ROS2 via rosbridge_server"],techStack:["sros2","zenoh","docker","github_actions","rosbridge","flask"],githubTemplate:"https://github.com/ros-planning/navigation2"}],x_=[{rank:1,name:"Ahmad K.",xp:4850,level:5,avatar:"\\u{1F916}",badge:"\\u26A1",streak:42,challenges:18,projects:3,country:"DZ"},{rank:2,name:"Sara B.",xp:4200,level:5,avatar:"\\u{1F9BE}",badge:"\\u{1F525}",streak:31,challenges:16,projects:3,country:"FR"},{rank:3,name:"Youssef M.",xp:3900,level:4,avatar:"\\u{1F680}",badge:"\\u{1F48E}",streak:28,challenges:15,projects:2,country:"MA"},{rank:4,name:"Camille R.",xp:3400,level:4,avatar:"\\u{1F3AF}",badge:"\\u2B50",streak:19,challenges:14,projects:2,country:"FR"},{rank:5,name:"Amine T.",xp:3100,level:4,avatar:"\\u{1F31F}",badge:"\\u2728",streak:15,challenges:12,projects:2,country:"TN"},{rank:6,name:"L\\xE9a D.",xp:2800,level:3,avatar:"\\u{1F52C}",badge:null,streak:12,challenges:10,projects:1,country:"BE"},{rank:7,name:"Omar H.",xp:2500,level:3,avatar:"\\u{1F6F8}",badge:null,streak:9,challenges:9,projects:1,country:"DZ"},{rank:8,name:"Marie P.",xp:2200,level:3,avatar:"\\u{1F916}",badge:null,streak:7,challenges:8,projects:1,country:"CH"},{rank:9,name:"Karim N.",xp:1900,level:2,avatar:"\\u{1F697}",badge:null,streak:5,challenges:7,projects:0,country:"DZ"},{rank:10,name:"Toi",xp:640,level:2,avatar:"\\u{1F464}",badge:null,streak:7,challenges:3,projects:0,country:"DZ",isYou:!0}],cm={docs:[{title:"Docs Officielles ROS2 Jazzy",source:"docs.ros.org",icon:"\\u{1F3B7}",color:r.amber,desc:"Documentation compl\\xE8te ROS2 Jazzy Jalisco \\u2014 installation, tutoriels, API.",tags:["Officiel","Jazzy","LTS"],url:"https://docs.ros.org/en/jazzy/index.html"},{title:"Docs Officielles ROS2 Jazzy",source:"docs.ros.org",icon:"\\u{1F422}",color:r.blue,desc:"Documentation compl\\xE8te ROS2 Jazzy Hawksbill \\u2014 LTS jusqu'en 2027.",tags:["Officiel","Jazzy","LTS"],url:"https://docs.ros.org/en/jazzy/index.html"},{title:"Nav2 Documentation",source:"nav2.org",icon:"\\u{1F5FA}\\uFE0F",color:r.cyan,desc:"Tout sur la stack de navigation : BT, costmaps, planners, docking.",tags:["Nav2","Navigation"],url:"https://docs.nav2.org/"},{title:"MoveIt2 Documentation",source:"moveit.ros.org",icon:"\\u{1F9BE}",color:r.purple,desc:"Manipulation robotique : motion planning, IK, collision avoidance.",tags:["MoveIt2","Manipulation"],url:"https://moveit.picknik.ai/main/index.html"},{title:"Gazebo Harmonic (Jazzy)",source:"gazebosim.org",icon:"\\u{1F30D}",color:r.amber,desc:"Simulation Gazebo Harmonic + int\\xE9gration ROS2 Jazzy.",tags:["Simulation","Gazebo","Jazzy"],url:"https://gazebosim.org/docs/harmonic/ros_installation"},{title:"ros2_control Documentation",source:"control.ros.org",icon:"\\u2699",color:r.green,desc:"Hardware abstraction, controllers, hardware interfaces.",tags:["Control","Hardware"],url:"https://control.ros.org/rolling/index.html"},{title:"slam_toolbox",source:"wiki.ros.org",icon:"\\u{1F5FA}",color:r.cyan,desc:"SLAM 2D performant pour ROS2 \\u2014 cartographie et localisation.",tags:["SLAM","Navigation"],url:"https://docs.ros.org/en/jazzy/Tutorials/Autonomous-Mobile-Robot.html"},{title:"ROS2 CLI Tools Reference",source:"docs.ros.org",icon:"\\u{1F4BB}",color:r.blue,desc:"R\\xE9f\\xE9rence compl\\xE8te des commandes ros2 : node, topic, service, param...",tags:["CLI","Reference","D\\xE9butant"],url:"https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools.html"}],videos:[{title:"ROS2 For Beginners (Full Course)",channel:"Robotics Back-End",icon:"\\u25B6",color:"#ef4444",duration:"8h+",desc:"Cours complet ROS2 de z\\xE9ro : nodes, topics, services, actions, C++ et Python.",tags:["D\\xE9butant","Complet"],url:"https://www.youtube.com/@RoboticsBackEnd"},{title:"Nav2 Tutorial Series",channel:"Steve Macenski",icon:"\\u25B6",color:"#ef4444",duration:"5h+",desc:"Le mainteneur de Nav2 explique BT Navigator, costmaps, planners.",tags:["Nav2","Navigation","Avanc\\xE9"],url:"https://www.youtube.com/@stevemacenski"},{title:"ROS2 & Gazebo \\u2014 Build a Robot",channel:"Articulated Robotics",icon:"\\u25B6",color:"#ef4444",duration:"10h+",desc:"Cr\\xE9er un robot diff\\xE9rentiel complet, URDF, ros2_control, Gazebo.",tags:["URDF","Simulation","Projet"],url:"https://www.youtube.com/@ArticulatedRobotics"},{title:"MoveIt2 Tutorial Series",channel:"PickNik Robotics",icon:"\\u25B6",color:"#ef4444",duration:"4h+",desc:"Setup, SRDF, planners, et int\\xE9gration hardware r\\xE9el.",tags:["MoveIt2","Manipulation"],url:"https://www.youtube.com/@PickNikRobotics"},{title:"The Construct \\u2014 ROS2 Courses",channel:"The Construct",icon:"\\u25B6",color:"#ef4444",duration:"Variable",desc:"Catalogue complet : Nav2, MoveIt, perception, ROS2 C++, et plus.",tags:["Cours","Tous niveaux"],url:"https://www.youtube.com/@TheConstructAI"},{title:"ROS2 Jazzy \\u2014 Nouveaut\\xE9s 2024",channel:"Open Robotics",icon:"\\u25B6",color:"#ef4444",duration:"45 min",desc:"Pr\\xE9sentation officielle des nouveaut\\xE9s ROS2 Jazzy Jalisco par Open Robotics.",tags:["Jazzy","Nouveaut\\xE9s","2024"],url:"https://www.youtube.com/@openrobotics"}],community:[{title:"r/ROS \\u2014 Reddit",source:"reddit.com",icon:"\\u{1F7E0}",color:"#ff4500",desc:"Communaut\\xE9 active : questions, projets, news ROS & ROS2. Tr\\xE8s r\\xE9actif.",tags:["Forum","Q&A","Actif"],url:"https://www.reddit.com/r/ROS/"},{title:"ROS Discourse \\u2014 Forum Officiel",source:"discourse.ros.org",icon:"\\u{1F4AC}",color:r.blue,desc:"Forum officiel : annonces, design decisions, support technique.",tags:["Officiel","Forum","Support"],url:"https://discourse.ros.org/"},{title:"answers.ros.org",source:"answers.ros.org",icon:"\\u2753",color:r.cyan,desc:"Stack Overflow de ROS : milliers de questions/r\\xE9ponses techniques.",tags:["Q&A","D\\xE9pannage","R\\xE9f\\xE9rence"],url:"https://answers.ros.org/questions/"},{title:"ROS2 vs ROS1 \\u2014 Medium Article",source:"Medium",icon:"\\u270D",color:"#64748b",desc:"Comparaison architecture, performance, migration \\u2014 article de r\\xE9f\\xE9rence.",tags:["Medium","Comparaison","Migration"],url:"https://medium.com/@nullbyte.in/ros-vs-ros2-part-1-the-ultimate-guide-to-understanding-the-differences-4351c4c7c464"},{title:"Getting Started ROS2 Jazzy",source:"Medium",icon:"\\u270D",color:"#64748b",desc:"Guide d'installation et premiers pas avec ROS2 Jazzy sur Ubuntu 24.04.",tags:["Medium","Jazzy","Installation"],url:"https://medium.com/@bytesrobotics/ros2-jazzy-getting-started-8a5b4b7c7d1a"},{title:"ROS2 Tips & Tricks",source:"Medium",icon:"\\u270D",color:"#64748b",desc:"QoS tuning, lifecycle nodes, composable nodes et optimisations avanc\\xE9es.",tags:["Medium","Avanc\\xE9","Tips"],url:"https://medium.com/tag/ros2"}],github:[{title:"ros2/ros2",desc:"Meta-repo officiel : liens vers tous les repositories core ROS2.",stars:"3.4k",lang:"Python",color:r.amber,tags:["Officiel","Core"],url:"https://github.com/ros2/ros2"},{title:"ros2/demos",desc:"Programmes de d\\xE9monstration officiels : talker/listener, services, actions.",stars:"820",lang:"Python/C++",color:r.blue,tags:["D\\xE9mos","Officiel","Apprentissage"],url:"https://github.com/ros2/demos"},{title:"ros-navigation/navigation2",desc:"Nav2 \\u2014 stack de navigation officielle ROS2.",stars:"2.1k",lang:"C++",color:r.cyan,tags:["Nav2","Production"],url:"https://github.com/ros-navigation/navigation2"},{title:"moveit/moveit2",desc:"MoveIt2 \\u2014 manipulation robotique avanc\\xE9e.",stars:"1.8k",lang:"C++",color:r.purple,tags:["MoveIt2","Manipulation"],url:"https://github.com/moveit/moveit2"},{title:"ros-controls/ros2_control",desc:"Hardware abstraction layer : controllers, hardware interfaces.",stars:"1.2k",lang:"C++",color:r.green,tags:["Hardware","Control"],url:"https://github.com/ros-controls/ros2_control"},{title:"joshnewans/articubot_one",desc:"Projet tutoriel robot diff\\xE9rentiel complet : Nav2, SLAM, Gazebo.",stars:"1.5k",lang:"Python",color:r.red,tags:["Projet","Nav2","SLAM"],url:"https://github.com/joshnewans/articubot_one"},{title:"SteveMacenski/slam_toolbox",desc:"SLAM 2D le plus utilis\\xE9 pour ROS2 \\u2014 synchrone et asynchrone.",stars:"1.4k",lang:"C++",color:r.cyan,tags:["SLAM","Navigation"],url:"https://github.com/SteveMacenski/slam_toolbox"},{title:"eclipse-zenoh/zenoh-plugin-ros2dds",desc:"Bridge Zenoh officiel pour ROS2 \\u2014 natif dans Jazzy.",stars:"560",lang:"Rust",color:r.amber,tags:["Zenoh","Jazzy","DDS"],url:"https://github.com/eclipse-zenoh/zenoh-plugin-ros2dds"}]};function S_({children:e,color:t=r.blue}){return(0,i.jsx)("span",{style:{fontSize:"9px",padding:"2px 7px",borderRadius:"4px",background:t+"18",border:\`1px solid \${t}33\`,color:t,fontFamily:f},children:e})}function Vl({xp:e,color:t=r.amber}){return(0,i.jsxs)(S_,{color:t,children:["+",e," XP"]})}function ft({children:e,style:t={},glow:n}){return(0,i.jsx)("div",{style:{background:r.panel,border:\`1px solid \${n?n+"44":r.border}\`,borderRadius:"12px",boxShadow:n?\`0 0 20px \${n}11\`:"none",...t},children:e})}function En({children:e,onClick:t,color:n=r.blue,variant:a="solid",style:l={},disabled:o}){let s={border:"none",borderRadius:"8px",cursor:o?"default":"pointer",fontSize:"12px",fontFamily:f,fontWeight:700,padding:"9px 18px",transition:"all 0.2s",opacity:o?.4:1,...l};return a==="solid"?(0,i.jsx)("button",{onClick:t,disabled:o,style:{...s,background:\`linear-gradient(135deg, \${n}dd, \${n}aa)\`,color:"#fff"},children:e}):(0,i.jsx)("button",{onClick:t,disabled:o,style:{...s,background:n+"11",border:\`1px solid \${n}44\`,color:n},children:e})}function Jt({children:e,color:t}){return(0,i.jsx)("span",{style:{fontSize:"10px",padding:"3px 8px",borderRadius:"5px",background:(t||r.blue)+"14",color:t||r.blue,border:\`1px solid \${t||r.blue}30\`,fontFamily:f},children:e})}function z_({progress:e,onModuleDone:t,totalXP:n}){let[a,l]=(0,E.useState)(1),[o,s]=(0,E.useState)(null),c=p=>{let v=p.modules.filter(h=>e[h.id]).length;return{done:v,total:p.modules.length,pct:Math.round(v/p.modules.length*100)}},u=p=>!0;return(0,i.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",flex:"0 0 340px"},children:Rn.map((p,v)=>{let h=u(p.id),{done:b,total:_,pct:y}=c(p),T=a===p.id;return(0,i.jsxs)("div",{style:{animation:\`fadeIn .4s ease \${v*.07}s both\`},children:[(0,i.jsxs)("div",{onClick:()=>h&&l(T?null:p.id),style:{background:T?p.color+"12":r.panel,border:\`1px solid \${T?p.color+"55":r.border}\`,borderRadius:"10px",padding:"14px 16px",cursor:h?"pointer":"default",opacity:h?1:.4,transition:"all .25s",boxShadow:T?\`0 0 16px \${p.color}18\`:"none"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,i.jsx)("span",{style:{fontFamily:f,fontSize:"11px",color:p.color,background:p.color+"20",border:\`1px solid \${p.color}44\`,borderRadius:"6px",padding:"3px 8px",letterSpacing:"1px"},children:p.icon}),(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsx)("div",{style:{fontFamily:V,fontWeight:700,fontSize:"14px",color:r.text},children:p.label}),(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,marginTop:"1px"},children:p.subtitle})]}),!h&&(0,i.jsx)("span",{style:{fontSize:"12px"},children:"\\u{1F512}"}),h&&(0,i.jsxs)("div",{style:{textAlign:"right"},children:[(0,i.jsxs)("div",{style:{fontSize:"11px",color:p.color,fontFamily:f},children:[b,"/",_]}),(0,i.jsx)("div",{style:{fontSize:"9px",color:r.muted},children:"modules"})]})]}),h&&(0,i.jsx)("div",{style:{marginTop:"10px",height:"3px",background:r.faint,borderRadius:"99px"},children:(0,i.jsx)("div",{style:{height:"100%",width:\`\${y}%\`,background:p.color,borderRadius:"99px",transition:"width 1s ease"}})})]}),T&&h&&(0,i.jsx)("div",{style:{marginTop:"4px",display:"flex",flexDirection:"column",gap:"4px",animation:"fadeIn .2s ease"},children:p.modules.map((O,m)=>{let d=!!e[O.id];return(0,i.jsxs)("div",{onClick:()=>s(o?.id===O.id?null:O),style:{marginLeft:"12px",padding:"10px 14px",background:o?.id===O.id?p.color+"14":r.faint,border:\`1px solid \${o?.id===O.id?p.color+"44":"transparent"}\`,borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",gap:"10px",transition:"all .2s"},children:[(0,i.jsx)("div",{style:{width:"18px",height:"18px",borderRadius:"5px",flexShrink:0,background:d?p.color:"transparent",border:\`2px solid \${d?p.color:r.border}\`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",color:"#fff"},children:d?"\\u2713":""}),(0,i.jsx)("span",{style:{fontSize:"12px",color:d?r.muted:r.text,flex:1,textDecoration:d?"line-through":"none"},children:O.title}),(0,i.jsx)(Vl,{xp:O.xp})]},O.id)})})]},p.id)})}),(0,i.jsx)("div",{style:{flex:1,minWidth:0},children:o?(0,i.jsxs)(ft,{glow:Rn.find(p=>p.modules.find(v=>v.id===o.id))?.color,style:{padding:"20px"},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,letterSpacing:"2px"},children:"MODULE"}),(0,i.jsx)("h2",{style:{fontSize:"20px",fontWeight:800,fontFamily:V,color:r.text,margin:"2px 0"},children:o.title})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,i.jsx)(Vl,{xp:o.xp}),(0,i.jsx)(En,{onClick:()=>t(o.id,o.xp),color:e[o.id]?r.green:r.blue,disabled:!!e[o.id],children:e[o.id]?"\\u2713 Compl\\xE9t\\xE9":"Marquer fait"})]})]}),(0,i.jsx)("div",{style:{overflowY:"auto",maxHeight:"calc(100vh - 300px)"},children:(0,i.jsx)(um,{content:o.content})})]}):(0,i.jsxs)(ft,{style:{padding:"40px",textAlign:"center",opacity:.5},children:[(0,i.jsx)("div",{style:{fontSize:"36px",marginBottom:"12px"},children:"\\u25C8"}),(0,i.jsx)("div",{style:{fontFamily:f,color:r.muted,fontSize:"12px"},children:"S\\xE9lectionne un module pour voir son contenu"})]})})]})}function T_({progress:e,totalXP:t,streak:n}){let a=Rn.flatMap(u=>u.modules),l=a.filter(u=>e[u.id]).length,o=a.length,s=Rn.map(u=>{let p=u.modules.filter(v=>e[v.id]).length;return Math.round(p/u.modules.length*100)}),c=[{label:"Compl\\xE9ter Fondations",done:s[0]===100,xp:200},{label:"Premier node fonctionnel",done:!!e["m2-3"],xp:90},{label:"Ma\\xEEtriser Topics/Services",done:!!e["m2-4"]&&!!e["m2-5"],xp:200},{label:"Cr\\xE9er un launch file",done:!!e["m3-5"],xp:100},{label:"Impl\\xE9menter une Action",done:!!e["m3-1"],xp:120},{label:"Simuler dans Gazebo",done:!!e["m4-3"],xp:180}];return(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",gap:"12px"},children:[{label:"XP Total",val:t.toLocaleString(),icon:"\\u26A1",color:r.amber},{label:"Modules faits",val:\`\${l}/\${o}\`,icon:"\\u{1F4DA}",color:r.blue},{label:"S\\xE9rie",val:\`\${n}j\`,icon:"\\u{1F525}",color:r.red},{label:"Challenges",val:"3/6",icon:"\\u26A1",color:r.purple},{label:"Projets",val:"0/4",icon:"\\u{1F680}",color:r.cyan},{label:"Rang",val:"#10",icon:"\\u{1F3C6}",color:r.amber}].map((u,p)=>(0,i.jsxs)(ft,{style:{padding:"16px",borderTop:\`2px solid \${u.color}\`,animation:\`fadeIn .4s \${p*.07}s both\`},children:[(0,i.jsx)("div",{style:{fontSize:"20px",marginBottom:"6px"},children:u.icon}),(0,i.jsx)("div",{style:{fontSize:"22px",fontWeight:800,fontFamily:V,color:u.color},children:u.val}),(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,letterSpacing:"1px"},children:u.label})]},p))}),(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[(0,i.jsxs)(ft,{style:{padding:"20px"},children:[(0,i.jsx)("div",{style:{fontSize:"11px",color:r.muted,fontFamily:f,letterSpacing:"2px",marginBottom:"16px"},children:"PROGRESSION PAR NIVEAU"}),Rn.map(u=>{let p=u.modules.filter(h=>e[h.id]).length,v=Math.round(p/u.modules.length*100);return(0,i.jsxs)("div",{style:{marginBottom:"14px"},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"5px"},children:[(0,i.jsx)("span",{style:{fontSize:"11px",color:r.text,fontFamily:f},children:u.label}),(0,i.jsxs)("span",{style:{fontSize:"11px",color:u.color,fontFamily:f},children:[v,"%"]})]}),(0,i.jsx)("div",{style:{height:"5px",background:r.faint,borderRadius:"99px"},children:(0,i.jsx)("div",{style:{height:"100%",width:\`\${v}%\`,background:\`linear-gradient(90deg, \${u.color}88, \${u.color})\`,borderRadius:"99px",transition:"width 1.2s cubic-bezier(.4,0,.2,1)",boxShadow:\`0 0 6px \${u.color}44\`}})})]},u.id)})]}),(0,i.jsxs)(ft,{style:{padding:"20px",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,i.jsx)("div",{style:{fontSize:"11px",color:r.muted,fontFamily:f,letterSpacing:"2px",marginBottom:"12px",alignSelf:"flex-start"},children:"CARTE DE COMP\\xC9TENCES"}),(0,i.jsx)(C_,{data:s,labels:Rn.map(u=>u.label.split(" ")[0]),colors:Rn.map(u=>u.color)})]}),(0,i.jsxs)(ft,{style:{padding:"20px",gridColumn:"1 / -1"},children:[(0,i.jsx)("div",{style:{fontSize:"11px",color:r.muted,fontFamily:f,letterSpacing:"2px",marginBottom:"16px"},children:"OBJECTIFS DE PROGRESSION"}),(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"8px"},children:c.map((u,p)=>(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 14px",borderRadius:"8px",background:u.done?r.green+"0d":r.bg,border:\`1px solid \${u.done?r.green+"33":r.border}\`},children:[(0,i.jsx)("div",{style:{width:"18px",height:"18px",borderRadius:"4px",flexShrink:0,background:u.done?r.green:"transparent",border:\`2px solid \${u.done?r.green:r.border}\`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",color:"#fff"},children:u.done?"\\u2713":""}),(0,i.jsx)("span",{style:{fontSize:"11px",color:u.done?r.muted:r.text,flex:1,textDecoration:u.done?"line-through":"none",fontFamily:f},children:u.label}),(0,i.jsx)(Vl,{xp:u.xp})]},p))})]})]})]})}function C_({data:e,labels:t,colors:n}){let a=e.length,l=120,o=120,s=80,c=e.map((u,p)=>{let v=p/a*Math.PI*2-Math.PI/2;return{x:l+s*(u/100)*Math.cos(v),y:o+s*(u/100)*Math.sin(v),gx:l+s*Math.cos(v),gy:o+s*Math.sin(v)}});return(0,i.jsxs)("svg",{width:"240",height:"240",style:{overflow:"visible"},children:[[.25,.5,.75,1].map(u=>(0,i.jsx)("polygon",{points:c.map((p,v)=>{let h=v/a*Math.PI*2-Math.PI/2;return\`\${l+s*u*Math.cos(h)},\${o+s*u*Math.sin(h)}\`}).join(" "),fill:"none",stroke:r.border,strokeWidth:"1"},u)),c.map((u,p)=>(0,i.jsx)("line",{x1:l,y1:o,x2:u.gx,y2:u.gy,stroke:r.border,strokeWidth:"1"},p)),(0,i.jsx)("polygon",{points:c.map(u=>\`\${u.x},\${u.y}\`).join(" "),fill:"#3b82f614",stroke:r.blue,strokeWidth:"2"}),c.map((u,p)=>(0,i.jsx)("circle",{cx:u.x,cy:u.y,r:"4",fill:n?.[p]||r.blue},p)),c.map((u,p)=>(0,i.jsx)("text",{x:u.gx+(u.gx>l+5?9:u.gx<l-5?-9:0),y:u.gy+(u.gy>o+5?13:u.gy<o-5?-6:4),fontSize:"9",fill:r.muted,textAnchor:"middle",fontFamily:f,children:t?.[p]||p},p))]})}function R_({completedChallenges:e,onCompleteChallenge:t,onAskBot:n}){let[a,l]=(0,E.useState)("challenges"),[o,s]=(0,E.useState)(null),[c,u]=(0,E.useState)(!1),[p,v]=(0,E.useState)("all"),h=Ci.filter(y=>p==="all"?!0:p==="syntax"?y.type==="syntax":p==="debug"?y.type==="debug":String(y.level)===p),b=Ci.reduce((y,T)=>y+T.xp,0),_=Ci.filter(y=>e.includes(y.id)).reduce((y,T)=>y+T.xp,0);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"8px",marginBottom:"20px",flexWrap:"wrap",alignItems:"center"},children:[[["challenges","\\u26A1 Mini-Challenges"],["projects","\\u{1F680} Mini-Projets"]].map(([y,T])=>(0,i.jsx)("button",{onClick:()=>{l(y),s(null)},style:{background:a===y?r.blue+"22":r.panel,border:\`1px solid \${a===y?r.blue+"66":r.border}\`,borderRadius:"8px",padding:"8px 18px",color:a===y?r.blue:r.muted,fontSize:"12px",cursor:"pointer",fontFamily:f,fontWeight:700},children:T},y)),a==="challenges"&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{style:{marginLeft:"auto",fontSize:"11px",color:r.muted,fontFamily:f},children:[e.length,"/",Ci.length," compl\\xE9t\\xE9s \\u2022",(0,i.jsxs)("span",{style:{color:r.amber},children:[" ",_,"/",b," XP"]})]}),(0,i.jsx)("div",{style:{display:"flex",gap:"4px"},children:[["all","Tous"],["syntax","Syntaxe"],["debug","\\u{1F41B} Debug"],["2","Nv.2"],["3","Nv.3"],["4","Nv.4"]].map(([y,T])=>(0,i.jsx)("button",{onClick:()=>v(y),style:{background:p===y?r.purple+"22":r.bg,border:\`1px solid \${p===y?r.purple+"55":r.border}\`,borderRadius:"5px",padding:"4px 8px",color:p===y?r.purple:r.muted,fontSize:"10px",cursor:"pointer",fontFamily:f},children:T},y))})]})]}),a==="challenges"&&(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:o?"1fr 1fr":"repeat(auto-fill, minmax(300px, 1fr))",gap:"14px"},children:[(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[h.map((y,T)=>{let O=e.includes(y.id),m=o?.id===y.id,d=y.type==="debug"?r.red:y.type==="syntax"?y.color:r.cyan;return(0,i.jsxs)("div",{onClick:()=>{s(y),u(!1)},style:{padding:"16px 18px",background:m?y.color+"14":O?r.green+"0a":r.panel,border:\`1px solid \${m?y.color+"55":O?r.green+"33":r.border}\`,borderRadius:"10px",cursor:"pointer",transition:"all .2s",animation:\`fadeIn .3s ease \${T*.05}s both\`,borderLeft:\`3px solid \${O?r.green:y.color}\`},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"6px"},children:[(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"2px"},children:[(0,i.jsx)("span",{style:{fontSize:"9px",padding:"1px 6px",borderRadius:"3px",background:d+"22",color:d,border:\`1px solid \${d}33\`,fontFamily:f,letterSpacing:"1px"},children:y.type==="debug"?"\\u{1F41B} DEBUG":"SYNTAXE"}),(0,i.jsxs)("span",{style:{fontSize:"9px",color:y.color,fontFamily:f},children:["NV.",y.level]})]}),(0,i.jsxs)("div",{style:{fontSize:"14px",fontWeight:700,fontFamily:V,color:O?r.muted:r.text},children:[O&&"\\u2713 ",y.title]})]}),(0,i.jsx)(Vl,{xp:y.xp})]}),(0,i.jsx)("div",{style:{fontSize:"11px",color:r.muted,lineHeight:1.5,marginBottom:"8px"},children:y.desc.length>100?y.desc.slice(0,100)+"...":y.desc}),(0,i.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px"},children:y.tags.map(g=>(0,i.jsx)(Jt,{color:y.color,children:g},g))})]},y.id)}),h.length===0&&(0,i.jsx)("div",{style:{padding:"32px",textAlign:"center",color:r.muted,fontFamily:f,fontSize:"12px"},children:"Aucun challenge pour ce filtre."})]}),o&&(0,i.jsxs)(ft,{glow:o.color,style:{padding:"20px",position:"sticky",top:"20px",alignSelf:"start",animation:"fadeIn .2s ease",maxHeight:"85vh",overflowY:"auto"},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"12px"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:"9px",color:o.type==="debug"?r.red:o.color,fontFamily:f,letterSpacing:"2px"},children:o.type==="debug"?"\\u{1F41B} CHALLENGE DEBUG":"CHALLENGE SYNTAXE"}),(0,i.jsx)("h3",{style:{fontFamily:V,fontWeight:800,fontSize:"16px",color:r.text,margin:"2px 0"},children:o.title})]}),(0,i.jsx)("button",{onClick:()=>s(null),style:{background:"none",border:"none",color:r.muted,cursor:"pointer",fontSize:"16px"},children:"\\u2715"})]}),(0,i.jsx)("div",{style:{padding:"14px",background:o.color+"0d",border:\`1px solid \${o.color}22\`,borderRadius:"8px",marginBottom:"14px"},children:o.desc.startsWith(\`
\`)||o.desc.includes("\`\`\`")?(0,i.jsx)(um,{content:o.desc}):(0,i.jsx)("div",{style:{fontSize:"12px",color:r.text,lineHeight:1.6},children:o.desc})}),!c&&(0,i.jsxs)("div",{style:{padding:"12px 14px",background:r.amber+"0d",border:\`1px solid \${r.amber}33\`,borderRadius:"8px",marginBottom:"14px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.amber,fontFamily:f,marginBottom:"4px"},children:"\\u{1F4A1} INDICE"}),(0,i.jsx)("div",{style:{fontSize:"12px",color:r.text,lineHeight:1.5},children:o.hint})]}),c&&(0,i.jsxs)("div",{style:{marginBottom:"14px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.cyan,fontFamily:f,marginBottom:"6px"},children:"\\u2713 SOLUTION COMPL\\xC8TE"}),(0,i.jsx)("pre",{style:{background:"#0d1117",border:\`1px solid \${r.border}\`,borderRadius:"8px",padding:"14px",fontSize:"11px",color:"#94a3b8",fontFamily:f,overflowX:"auto",margin:0,whiteSpace:"pre-wrap",lineHeight:1.65},children:o.solution})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[!c&&(0,i.jsx)(En,{onClick:()=>u(!0),color:r.amber,variant:"outline",children:"Voir solution"}),(0,i.jsx)(En,{onClick:()=>n(\`J'ai besoin d'aide pour le challenge "\${o.title}". Voici l'\\xE9nonc\\xE9:
\${o.desc}

Peux-tu me guider sans me donner directement la solution ?\`),color:r.purple,variant:"outline",children:"\\u{1F916} Demander ROS-Bot"}),!e.includes(o.id)&&(0,i.jsxs)(En,{onClick:()=>t(o.id,o.xp),color:r.green,children:["\\u2713 Marqu\\xE9 fait (+",o.xp," XP)"]}),e.includes(o.id)&&(0,i.jsx)("div",{style:{padding:"8px 14px",background:r.green+"11",border:\`1px solid \${r.green}33\`,borderRadius:"8px",fontSize:"11px",color:r.green,fontFamily:f},children:"\\u2713 Challenge compl\\xE9t\\xE9 !"})]})]})]}),a==="projects"&&(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:o?"1fr 1fr":"repeat(auto-fill, minmax(320px, 1fr))",gap:"16px"},children:[(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:h_.map((y,T)=>{let O=o?.id===y.id;return(0,i.jsxs)("div",{onClick:()=>s(O?null:y),style:{padding:"20px",cursor:"pointer",background:O?y.color+"12":r.panel,border:\`1px solid \${O?y.color+"55":r.border}\`,borderRadius:"12px",transition:"all .25s",animation:\`fadeIn .35s ease \${T*.08}s both\`,borderLeft:\`3px solid \${y.color}\`},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{fontSize:"9px",color:y.color,fontFamily:f,letterSpacing:"2px",marginBottom:"2px"},children:["NIVEAU ",y.level," \\u2022 ",y.duration]}),(0,i.jsx)("div",{style:{fontSize:"15px",fontWeight:700,fontFamily:V,color:r.text},children:y.title})]}),(0,i.jsx)(Vl,{xp:y.xp,color:y.color})]}),(0,i.jsx)("div",{style:{fontSize:"12px",color:r.muted,lineHeight:1.5,marginBottom:"10px"},children:y.desc}),(0,i.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px"},children:y.tags.map(m=>(0,i.jsx)(Jt,{color:y.color,children:m},m))})]},y.id)})}),o&&(0,i.jsxs)(ft,{glow:o.color,style:{padding:"22px",position:"sticky",top:"20px",alignSelf:"start",animation:"fadeIn .2s ease",maxHeight:"80vh",overflowY:"auto"},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"14px"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:"9px",color:o.color,fontFamily:f,letterSpacing:"2px"},children:"CAHIER DES CHARGES"}),(0,i.jsx)("h3",{style:{fontFamily:V,fontWeight:800,fontSize:"17px",color:r.text,margin:"4px 0 0"},children:o.title})]}),(0,i.jsx)("button",{onClick:()=>s(null),style:{background:"none",border:"none",color:r.muted,cursor:"pointer",fontSize:"16px"},children:"\\u2715"})]}),(0,i.jsx)("div",{style:{padding:"12px 14px",background:o.color+"0d",border:\`1px solid \${o.color}22\`,borderRadius:"8px",marginBottom:"14px",fontSize:"12px",color:r.text,lineHeight:1.6},children:o.desc}),(0,i.jsxs)("div",{style:{marginBottom:"14px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,letterSpacing:"2px",marginBottom:"8px"},children:"\\u{1F4CB} SP\\xC9CIFICATIONS TECHNIQUES"}),o.specs.map((y,T)=>(0,i.jsxs)("div",{style:{display:"flex",gap:"10px",marginBottom:"8px",padding:"8px 12px",background:r.faint,borderRadius:"6px"},children:[(0,i.jsx)("span",{style:{color:o.color,fontFamily:f,fontSize:"11px",flexShrink:0},children:String(T+1).padStart(2,"0")}),(0,i.jsx)("span",{style:{fontSize:"11px",color:r.text,lineHeight:1.5},children:y})]},T))]}),(0,i.jsxs)("div",{style:{marginBottom:"14px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,letterSpacing:"2px",marginBottom:"8px"},children:"\\u{1F527} STACK TECHNIQUE"}),(0,i.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:o.techStack.map(y=>(0,i.jsx)(Jt,{color:o.color,children:y},y))})]}),(0,i.jsxs)("div",{style:{marginBottom:"16px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,letterSpacing:"2px",marginBottom:"6px"},children:"\\u{1F4C1} PROJET GITHUB DE R\\xC9F\\xC9RENCE"}),(0,i.jsxs)("a",{href:o.githubTemplate,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"11px",color:r.blue,fontFamily:f,textDecoration:"none",display:"flex",alignItems:"center",gap:"4px",padding:"8px 12px",background:r.blue+"0d",border:\`1px solid \${r.blue}22\`,borderRadius:"6px"},children:["\\u2699 ",o.githubTemplate.replace("https://github.com/","")," \\u2197"]})]}),(0,i.jsx)(En,{onClick:()=>n(\`Je veux construire le projet "\${o.title}" (Niveau \${o.level}, \${o.duration}).

Cahier des charges :
\${o.specs.map((y,T)=>\`\${T+1}. \${y}\`).join(\`
\`)}

Stack : \${o.techStack.join(", ")}

Aide-moi \\xE0 :
1. Concevoir l'architecture des nodes
2. D\\xE9finir les topics/services/actions
3. M'expliquer par o\\xF9 commencer
4. Estimer les \\xE9tapes de d\\xE9veloppement\`),color:r.purple,style:{width:"100%"},children:"\\u{1F916} Construire avec ROS-Bot \\u2192"})]})]})]})}function E_({totalXP:e,completedChallenges:t,progress:n}){let[a,l]=(0,E.useState)("xp"),[o,s]=(0,E.useState)(!1),[c,u]=(0,E.useState)("Toi"),[p,v]=(0,E.useState)(!1),[h,b]=(0,E.useState)([]),[_,y]=(0,E.useState)(!0),O=Rn.flatMap(C=>C.modules).filter(C=>n[C.id]).length,m=7;(0,E.useEffect)(()=>{(async()=>{try{let j=await window.storage.list("lb:",!0);if(j?.keys){let ke=await Promise.all(j.keys.map(async Te=>{try{let qe=await window.storage.get(Te,!0);return qe?JSON.parse(qe.value):null}catch{return null}}));b(ke.filter(Boolean))}}catch{}y(!1)})()},[o]);let d=async()=>{try{let C=\`lb:\${c.replace(/\\s+/g,"_").toLowerCase()}\`,j={name:c,xp:e,challenges:t.length,modules:O,streak:m,country:"\\u{1F30D}",savedAt:Date.now(),isYou:!1};await window.storage.set(C,JSON.stringify(j),!0),s(!0)}catch{s(!0)}},g=C=>C===1?"#ffd700":C===2?"#c0c0c0":C===3?"#cd7f32":r.muted,x={name:c+" (Toi)",xp:e,challenges:t.length,modules:O,streak:m,avatar:"\\u{1F464}",country:"DZ",badge:null,isYou:!0},S=[...[...x_.filter(C=>!C.isYou).map(C=>({...C,fromStatic:!0})),...h.filter(C=>C.name!==c),x]].sort((C,j)=>a==="xp"?j.xp-C.xp:a==="streak"?j.streak-C.streak:j.challenges-C.challenges).map((C,j)=>({...C,rank:j+1})),B=S[0]?.xp||1,k=S.find(C=>C.isYou)?.rank||99;return(0,i.jsxs)("div",{style:{maxWidth:"900px"},children:[(0,i.jsx)("div",{style:{marginBottom:"24px"},children:(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"12px"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:"11px",color:r.muted,fontFamily:f,letterSpacing:"3px",marginBottom:"4px"},children:"CLASSEMENT GLOBAL"}),(0,i.jsxs)("h2",{style:{fontFamily:V,fontWeight:800,fontSize:"24px",color:r.text},children:["\\u{1F3C6} Leaderboard ",(0,i.jsx)("span",{style:{color:r.amber},children:"ROS2Academy"})]})]}),(0,i.jsx)("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:[["xp","XP"],["streak","S\\xE9rie"],["challenges","Challenges"]].map(([C,j])=>(0,i.jsx)("button",{onClick:()=>l(C),style:{background:a===C?r.amber+"22":r.panel,border:\`1px solid \${a===C?r.amber+"66":r.border}\`,borderRadius:"6px",padding:"5px 12px",color:a===C?r.amber:r.muted,fontSize:"10px",cursor:"pointer",fontFamily:f},children:j},C))})]})}),(0,i.jsxs)("div",{style:{padding:"14px 18px",marginBottom:"20px",background:r.blue+"0d",border:\`1px solid \${r.blue}33\`,borderRadius:"10px",display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[(0,i.jsx)("span",{style:{fontSize:"20px"},children:"\\u{1F310}"}),(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsx)("div",{style:{fontSize:"12px",fontWeight:700,color:r.text,fontFamily:f,marginBottom:"2px"},children:"Partage ton score avec la communaut\\xE9 !"}),(0,i.jsx)("div",{style:{fontSize:"11px",color:r.muted},children:"Ton score sera visible par tous les \\xE9tudiants de la plateforme."})]}),p?(0,i.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,i.jsx)("input",{value:c,onChange:C=>u(C.target.value),placeholder:"Ton pseudo",style:{background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",padding:"7px 12px",color:r.text,fontSize:"12px",fontFamily:f,outline:"none",width:"130px"}}),(0,i.jsx)(En,{onClick:()=>{d(),v(!1)},color:r.green,children:"\\u2713 Publier"})]}):(0,i.jsx)(En,{onClick:()=>v(!0),color:o?r.green:r.blue,variant:o?"outline":"solid",children:o?"\\u2713 Publi\\xE9 !":"Partager mon score"})]}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",gap:"12px",marginBottom:"28px",alignItems:"flex-end"},children:[S[1],S[0],S[2]].filter(Boolean).map((C,j)=>{let ke=[140,170,120],Te=["#c0c0c0","#ffd700","#cd7f32"],qe=["\\u{1F948}","\\u{1F947}","\\u{1F949}"],M=Te[j];return(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",animation:\`fadeIn .5s ease \${j*.1}s both\`},children:[(0,i.jsx)("div",{style:{fontSize:C.isYou?"30px":"24px"},children:C.avatar||"\\u{1F916}"}),(0,i.jsx)("div",{style:{fontSize:"11px",fontWeight:700,color:C.isYou?r.blue:r.text,fontFamily:f},children:C.name.split(" ")[0]}),(0,i.jsxs)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f},children:[C.xp.toLocaleString()," XP"]}),(0,i.jsx)("div",{style:{width:"80px",height:\`\${ke[j]}px\`,background:\`linear-gradient(180deg, \${M}20, \${M}08)\`,border:\`1px solid \${M}44\`,borderRadius:"8px 8px 0 0",display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"12px"},children:(0,i.jsx)("span",{style:{fontSize:"22px"},children:qe[j]})})]},C.name+j)})}),(0,i.jsxs)(ft,{style:{overflow:"hidden",marginBottom:"16px"},children:[(0,i.jsx)("div",{style:{padding:"10px 20px",borderBottom:\`1px solid \${r.border}\`,display:"grid",gridTemplateColumns:"44px 1fr 100px 80px 90px 60px",gap:"8px",alignItems:"center"},children:["#","Joueur","XP","S\\xE9rie","Challenges","\\u{1F30D}"].map(C=>(0,i.jsx)("div",{style:{fontSize:"9px",color:r.muted,fontFamily:f,letterSpacing:"2px"},children:C},C))}),_?(0,i.jsx)("div",{style:{padding:"20px",textAlign:"center",color:r.muted,fontFamily:f,fontSize:"11px"},children:"Chargement du classement..."}):S.map((C,j)=>{let ke=Math.round(C.xp/B*100),Te=g(C.rank);return(0,i.jsxs)("div",{style:{padding:"11px 20px",background:C.isYou?r.blue+"0d":j%2===0?"transparent":r.bg+"44",border:C.isYou?\`1px solid \${r.blue}33\`:"none",display:"grid",gridTemplateColumns:"44px 1fr 100px 80px 90px 60px",gap:"8px",alignItems:"center",animation:\`fadeIn .3s ease \${j*.03}s both\`},children:[(0,i.jsx)("div",{style:{fontSize:"13px",fontWeight:700,color:Te,fontFamily:f},children:C.rank<=3?["\\u{1F947}","\\u{1F948}","\\u{1F949}"][C.rank-1]:C.rank}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",minWidth:0},children:[(0,i.jsx)("span",{style:{fontSize:"18px",flexShrink:0},children:C.avatar||"\\u{1F9D1}"}),(0,i.jsxs)("div",{style:{minWidth:0},children:[(0,i.jsxs)("div",{style:{fontSize:"12px",fontWeight:700,color:C.isYou?r.blue:r.text,fontFamily:f,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[C.name," ",C.badge]}),(0,i.jsx)("div",{style:{height:"3px",width:\`\${ke}%\`,background:C.isYou?r.blue:r.border,borderRadius:"99px",marginTop:"4px",maxWidth:"120px",boxShadow:C.isYou?\`0 0 4px \${r.blue}\`:"none"}})]})]}),(0,i.jsx)("div",{style:{fontSize:"12px",color:r.amber,fontFamily:f,fontWeight:700},children:C.xp.toLocaleString()}),(0,i.jsxs)("div",{style:{fontSize:"12px",color:r.red,fontFamily:f},children:["\\u{1F525} ",C.streak,"j"]}),(0,i.jsxs)("div",{style:{fontSize:"12px",color:r.purple,fontFamily:f},children:["\\u26A1 ",C.challenges]}),(0,i.jsx)("div",{style:{fontSize:"11px",color:r.muted,fontFamily:f},children:C.country})]},C.name+j)})]}),(0,i.jsxs)("div",{style:{padding:"14px 20px",background:r.blue+"12",border:\`1px solid \${r.blue}44\`,borderRadius:"10px",display:"flex",alignItems:"center",gap:"12px",animation:"fadeIn .5s ease"},children:[(0,i.jsx)("span",{style:{fontSize:"22px"},children:"\\u{1F464}"}),(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsxs)("div",{style:{fontSize:"12px",fontWeight:700,color:r.blue,fontFamily:f},children:["Ta position actuelle : #",k]}),(0,i.jsx)("div",{style:{fontSize:"11px",color:r.muted,marginTop:"2px"},children:S[k-2]?\`Il te manque \${S[k-2].xp-e} XP pour passer #\${k-1}\`:"Tu es en t\\xEAte ! \\u{1F389}"})]}),(0,i.jsxs)("div",{style:{textAlign:"right"},children:[(0,i.jsxs)("div",{style:{fontSize:"20px",fontWeight:800,color:r.blue,fontFamily:V},children:["#",k]}),(0,i.jsxs)("div",{style:{fontSize:"10px",color:r.muted},children:[e," XP"]})]})]})]})}function A_(){let[e,t]=(0,E.useState)("docs");return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{display:"flex",gap:"6px",marginBottom:"20px",flexWrap:"wrap"},children:[{id:"docs",label:"Documentation",icon:"\\u{1F4D6}"},{id:"videos",label:"Vid\\xE9os Tutos",icon:"\\u25B6"},{id:"community",label:"Communaut\\xE9",icon:"\\u{1F4AC}"},{id:"github",label:"GitHub",icon:"\\u2699"}].map(a=>(0,i.jsxs)("button",{onClick:()=>t(a.id),style:{background:e===a.id?r.blue+"22":r.panel,border:\`1px solid \${e===a.id?r.blue+"66":r.border}\`,borderRadius:"8px",padding:"8px 16px",color:e===a.id?r.blue:r.muted,fontSize:"12px",cursor:"pointer",fontFamily:f,fontWeight:700,display:"flex",alignItems:"center",gap:"6px"},children:[a.icon," ",a.label,(0,i.jsx)("span",{style:{fontSize:"9px",padding:"1px 5px",background:r.faint,borderRadius:"99px",color:r.muted},children:cm[a.id].length})]},a.id))}),(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"14px"},children:cm[e].map((a,l)=>(0,i.jsx)("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",animation:\`fadeIn .3s ease \${l*.05}s both\`,display:"block"},children:(0,i.jsxs)("div",{style:{background:r.panel,border:\`1px solid \${r.border}\`,borderRadius:"12px",padding:"18px 20px",height:"100%",display:"flex",flexDirection:"column",gap:"10px",cursor:"pointer",transition:"all .25s"},onMouseEnter:o=>{o.currentTarget.style.borderColor=a.color,o.currentTarget.style.transform="translateY(-2px)",o.currentTarget.style.boxShadow=\`0 6px 20px \${a.color}18\`},onMouseLeave:o=>{o.currentTarget.style.borderColor=r.border,o.currentTarget.style.transform="",o.currentTarget.style.boxShadow=""},children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"10px",alignItems:"flex-start"},children:[(0,i.jsx)("div",{style:{width:"34px",height:"34px",borderRadius:"8px",background:a.color+"18",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",flexShrink:0},children:a.icon}),(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsx)("div",{style:{fontSize:"13px",fontWeight:700,color:r.text,fontFamily:V,lineHeight:1.3},children:a.title}),(0,i.jsxs)("div",{style:{fontSize:"10px",color:a.color,marginTop:"2px"},children:[a.source||a.channel,a.duration&&\` \\u2022 \${a.duration}\`,a.stars&&\` \\u2022 \\u2605 \${a.stars}\`]})]})]}),(0,i.jsx)("div",{style:{fontSize:"12px",color:r.muted,lineHeight:1.6,flex:1},children:a.desc}),(0,i.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px"},children:a.tags.map(o=>(0,i.jsx)(Jt,{color:a.color,children:o},o))}),(0,i.jsx)("div",{style:{fontSize:"10px",color:a.color,fontFamily:f},children:"Ouvrir \\u2197"})]})},l))})]})}function D_({initialMessage:e,clearInitial:t}){let[n,a]=(0,E.useState)([{role:"bot",text:\`Salut ! Je suis **ROS-Bot** \\u{1F916}

Je suis ton assistant p\\xE9dagogique expert en ROS2. Je peux t'aider \\xE0 :

- **Comprendre** les concepts ROS2 (nodes, topics, services, TF2...)
- **D\\xE9boguer** ton code
- **Construire** tes projets \\xE9tape par \\xE9tape
- **R\\xE9pondre** \\xE0 toutes tes questions

Pose-moi ta question ou envoie-moi un challenge ! \\u{1F680}\`}]),[l,o]=(0,E.useState)(""),[s,c]=(0,E.useState)(!1),[u,p]=(0,E.useState)([]),v=(0,E.useRef)();(0,E.useEffect)(()=>{v.current?.scrollIntoView({behavior:"smooth"})},[n]),(0,E.useEffect)(()=>{e&&(o(e),t())},[e]);let h=async y=>{let T=y||l.trim();if(!T||s)return;o("");let O={role:"user",text:T};a(g=>[...g,O]);let m=[...u,{role:"user",content:T}];c(!0),await new Promise(g=>setTimeout(g,500+Math.random()*400));let d="\\u{1F9EA} **D\\xE9mo hors-ligne** \\u2014 dans la version connect\\xE9e de ROS2Academy, ROS-Bot r\\xE9pond ici avec un vrai mod\\xE8le Claude (via l'API Anthropic + le system prompt ROS2 d\\xE9di\\xE9). Cette page \\xE9tant un aper\\xE7u statique du portfolio, l'appel r\\xE9seau est d\\xE9sactiv\\xE9, mais toute la logique (contexte, historique, suggestions) est bien fonctionnelle et pr\\xEAte \\xE0 \\xEAtre branch\\xE9e sur une cl\\xE9 API.";a(g=>[...g,{role:"bot",text:d}]),p([...m,{role:"assistant",content:d}]),c(!1)},b=y=>y.split(/(\`\`\`[\\s\\S]*?\`\`\`|\`[^\`\\n]+\`|\\*\\*[^*]+\\*\\*)/g).map((O,m)=>{if(O.startsWith("\`\`\`")){let d=O.slice(3).split(\`
\`),g=d[0],x=d.slice(1,-1).join(\`
\`);return(0,i.jsxs)("pre",{style:{background:"#0d1117",border:\`1px solid \${r.border}\`,borderRadius:"7px",padding:"12px",margin:"8px 0",fontSize:"11px",color:"#94a3b8",fontFamily:f,overflowX:"auto",whiteSpace:"pre-wrap",lineHeight:1.65},children:[(0,i.jsx)("span",{style:{color:r.cyan,display:"block",fontSize:"9px",marginBottom:"6px"},children:g}),x]},m)}return O.startsWith("**")?(0,i.jsx)("strong",{style:{color:r.text},children:O.slice(2,-2)},m):O.startsWith("\`")?(0,i.jsx)("code",{style:{background:r.faint,padding:"1px 5px",borderRadius:"3px",fontSize:"11px",fontFamily:f,color:r.cyan},children:O.slice(1,-1)},m):(0,i.jsx)("span",{children:O},m)}),_=["C'est quoi la diff\\xE9rence entre un topic et un service ?","Comment cr\\xE9er un message personnalis\\xE9 ?","Explique-moi les QoS profiles","Comment d\\xE9boguer un node ROS2 qui ne publie pas ?","Aide-moi \\xE0 commencer le projet Robot \\xC9cho","Quelle est la diff\\xE9rence Jazzy vs Jazzy ?"];return(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 280px",gap:"16px",height:"calc(100vh - 180px)"},children:[(0,i.jsxs)(ft,{style:{display:"flex",flexDirection:"column",overflow:"hidden"},children:[(0,i.jsxs)("div",{style:{padding:"14px 18px",borderBottom:\`1px solid \${r.border}\`,display:"flex",alignItems:"center",gap:"10px"},children:[(0,i.jsx)("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:"linear-gradient(135deg, #3b82f6, #8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"},children:"\\u{1F916}"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontWeight:700,color:r.text,fontFamily:V},children:"ROS-Bot"}),(0,i.jsx)("div",{style:{fontSize:"10px",color:r.cyan,fontFamily:f},children:"\\u25CF Expert ROS2 \\u2022 Jazzy & Jazzy"})]}),(0,i.jsxs)("div",{style:{marginLeft:"auto",fontSize:"10px",color:r.muted,fontFamily:f},children:[u.length," messages"]})]}),(0,i.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"16px",display:"flex",flexDirection:"column",gap:"12px"},children:[n.map((y,T)=>(0,i.jsxs)("div",{style:{display:"flex",justifyContent:y.role==="user"?"flex-end":"flex-start",animation:"fadeIn .25s ease"},children:[y.role==="bot"&&(0,i.jsx)("div",{style:{width:"26px",height:"26px",borderRadius:"50%",background:"linear-gradient(135deg, #3b82f6, #8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",flexShrink:0,marginRight:"8px",alignSelf:"flex-end"},children:"\\u{1F916}"}),(0,i.jsx)("div",{style:{maxWidth:"78%",background:y.role==="user"?"linear-gradient(135deg, #3b82f6, #8b5cf6)":r.faint,border:y.role==="bot"?\`1px solid \${r.border}\`:"none",borderRadius:y.role==="user"?"16px 16px 4px 16px":"4px 16px 16px 16px",padding:"12px 15px",fontSize:"13px",color:y.role==="user"?"#fff":"#cbd5e1",lineHeight:1.65},children:y.role==="bot"?b(y.text):y.text})]},T)),s&&(0,i.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,i.jsx)("div",{style:{width:"26px",height:"26px",borderRadius:"50%",background:"linear-gradient(135deg, #3b82f6, #8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px"},children:"\\u{1F916}"}),(0,i.jsx)("div",{style:{background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"4px 16px 16px 16px",padding:"12px 16px",display:"flex",gap:"4px",alignItems:"center"},children:[0,1,2].map(y=>(0,i.jsx)("div",{style:{width:"6px",height:"6px",borderRadius:"50%",background:r.blue,animation:\`dot \${1.2}s ease \${y*.2}s infinite\`}},y))})]}),(0,i.jsx)("div",{ref:v})]}),(0,i.jsxs)("div",{style:{padding:"12px 16px",borderTop:\`1px solid \${r.border}\`,display:"flex",gap:"8px"},children:[(0,i.jsx)("input",{value:l,onChange:y=>o(y.target.value),onKeyDown:y=>y.key==="Enter"&&!y.shiftKey&&h(),placeholder:"Pose ta question ROS2... (Entr\\xE9e pour envoyer)",style:{flex:1,background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"10px",padding:"11px 16px",color:r.text,fontSize:"13px",outline:"none",fontFamily:f}}),(0,i.jsx)(En,{onClick:()=>h(),color:r.blue,disabled:s||!l.trim(),children:"\\u2191"})]})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[(0,i.jsxs)(ft,{style:{padding:"16px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,letterSpacing:"2px",marginBottom:"10px"},children:"SUGGESTIONS"}),_.map((y,T)=>(0,i.jsx)("button",{onClick:()=>h(y),style:{width:"100%",textAlign:"left",background:"transparent",border:\`1px solid \${r.border}\`,borderRadius:"7px",padding:"9px 12px",marginBottom:"6px",color:r.muted,fontSize:"11px",cursor:"pointer",fontFamily:f,transition:"all .15s"},onMouseEnter:O=>{O.target.style.borderColor=r.blue,O.target.style.color=r.blue},onMouseLeave:O=>{O.target.style.borderColor=r.border,O.target.style.color=r.muted},children:y},T))]}),(0,i.jsxs)(ft,{style:{padding:"16px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,letterSpacing:"2px",marginBottom:"10px"},children:"CAPACIT\\xC9S"}),["Expliquer les concepts","Corriger du code","Aider \\xE0 concevoir","Guider un projet","Comparer Jazzy"].map((y,T)=>(0,i.jsxs)("div",{style:{fontSize:"11px",color:r.text,padding:"5px 0",borderBottom:T<4?\`1px solid \${r.border}\`:"none",display:"flex",alignItems:"center",gap:"8px"},children:[(0,i.jsx)("span",{style:{color:r.green},children:"\\u2713"})," ",y]},T))]})]})]})}function um({content:e}){let[t,n]=(0,E.useState)(null),a=(u,p)=>{navigator.clipboard.writeText(u),n(p),setTimeout(()=>n(null),1500)},l=e.split(\`
\`),o=[],s=0,c=0;for(;s<l.length;){let u=l[s];if(u.startsWith("\`\`\`")){let p=u.slice(3),v=[];for(s++;s<l.length&&!l[s].startsWith("\`\`\`");)v.push(l[s]),s++;let h=v.join(\`
\`),b=c++;o.push((0,i.jsxs)("div",{style:{position:"relative",margin:"12px 0"},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 14px",background:r.bg,borderRadius:"8px 8px 0 0",border:\`1px solid \${r.border}\`,borderBottom:"none"},children:[(0,i.jsx)("span",{style:{fontSize:"9px",color:r.cyan,fontFamily:f,letterSpacing:"1px"},children:p}),(0,i.jsx)("button",{onClick:()=>a(h,b),style:{background:"none",border:\`1px solid \${r.border}\`,color:t===b?r.green:r.muted,fontSize:"9px",padding:"2px 8px",borderRadius:"4px",cursor:"pointer",fontFamily:f},children:t===b?"\\u2713 copi\\xE9":"copier"})]}),(0,i.jsx)("pre",{style:{background:"#0d1117",border:\`1px solid \${r.border}\`,borderTop:"none",borderRadius:"0 0 8px 8px",padding:"14px",margin:0,fontSize:"12px",color:"#94a3b8",fontFamily:f,overflowX:"auto",whiteSpace:"pre-wrap",lineHeight:1.7},children:h})]},\`code-\${s}\`))}else u.startsWith("## ")?o.push((0,i.jsx)("h2",{style:{fontFamily:V,fontWeight:800,fontSize:"18px",color:r.text,margin:"18px 0 8px",borderBottom:\`1px solid \${r.border}\`,paddingBottom:"6px"},children:u.slice(3)},s)):u.startsWith("### ")?o.push((0,i.jsx)("h3",{style:{fontFamily:V,fontWeight:700,fontSize:"14px",color:r.blue,margin:"14px 0 6px"},children:u.slice(4)},s)):u.trim()&&o.push((0,i.jsx)("p",{style:{fontSize:"13px",color:"#94a3b8",lineHeight:1.65,margin:"4px 0"},children:u},s));s++}return(0,i.jsx)("div",{children:o})}var pc="DJIDEL",O_="Admin";function N_(e){let t=5381;for(let n=0;n<e.length;n++)t=(t<<5)+t^e.charCodeAt(n),t=t>>>0;return t.toString(16).padStart(8,"0")}var Zt={admin:"#f59e0b",prof:"#8b5cf6",etudiant:"#3b82f6"},k_={admin:"Admin",prof:"Professeur",etudiant:"\\xC9tudiant"};function It({role:e}){return(0,i.jsx)("span",{style:{fontSize:"9px",fontFamily:f,fontWeight:700,color:Zt[e]||r.muted,background:(Zt[e]||r.muted)+"22",border:\`1px solid \${Zt[e]||r.muted}44\`,borderRadius:"4px",padding:"1px 6px",letterSpacing:"0.5px"},children:k_[e]||e})}function we({label:e,value:t,onChange:n,type:a="text",placeholder:l=""}){return(0,i.jsxs)("div",{style:{marginBottom:"14px"},children:[e&&(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:e}),(0,i.jsx)("input",{type:a,value:t,onChange:o=>n(o.target.value),placeholder:l,style:{width:"100%",padding:"10px 14px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"8px",color:r.text,fontSize:"13px",fontFamily:f,outline:"none"}})]})}function M_({onLogin:e}){let[t,n]=(0,E.useState)("login"),[a,l]=(0,E.useState)(""),[o,s]=(0,E.useState)(""),[c,u]=(0,E.useState)(""),[p,v]=(0,E.useState)(""),[h,b]=(0,E.useState)("etudiant"),[_,y]=(0,E.useState)(""),[T,O]=(0,E.useState)(!1),m=async()=>{y(""),O(!0);try{if(c.trim()===pc&&p===O_){e({pseudo:pc,prenom:"Admin",nom:"DJIDEL",role:"admin",joinDate:new Date().toISOString()}),O(!1);return}if(t==="login"){let d=null;try{let g=await window.storage.get("user:"+c.trim().toLowerCase(),!0);g&&(d=JSON.parse(g.value))}catch{}if(!d){y("Compte introuvable"),O(!1);return}if(d.password!==p){y("Mot de passe incorrect"),O(!1);return}if(d.role==="prof"&&d.status!=="approved"){y("Compte professeur en attente de validation par l'admin"),O(!1);return}e(d)}else{if(!a.trim()||!o.trim()||!c.trim()||!p){y("Tous les champs sont requis"),O(!1);return}if(c.trim().toLowerCase()===pc.toLowerCase()){y("Pseudo r\\xE9serv\\xE9"),O(!1);return}try{if(await window.storage.get("user:"+c.trim().toLowerCase(),!0)){y("Pseudo d\\xE9j\\xE0 utilis\\xE9"),O(!1);return}}catch{}let d={pseudo:c.trim(),prenom:a.trim(),nom:o.trim().toUpperCase(),role:h,status:h==="prof"?"pending":"approved",joinDate:new Date().toISOString(),bio:"",canAddChallenge:!1};if(await window.storage.set("auth:"+c.trim().toLowerCase(),JSON.stringify({pseudo:c.trim(),hash:N_(p)}),!1),await window.storage.set("user:"+c.trim().toLowerCase(),JSON.stringify(d),!0),h==="prof"){y(""),O(!1),alert("Inscription envoy\\xE9e ! L'admin doit valider votre compte professeur."),n("login");return}e(d)}}catch(d){y("Erreur: "+d.message)}O(!1)};return(0,i.jsx)("div",{style:{minHeight:"100vh",background:r.bg,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:V},children:(0,i.jsxs)("div",{style:{width:"440px",background:r.panel,border:\`1px solid \${r.border}\`,borderRadius:"16px",padding:"36px",boxShadow:"0 24px 64px #00000088"},children:[(0,i.jsxs)("div",{style:{textAlign:"center",marginBottom:"28px"},children:[(0,i.jsx)("div",{style:{width:"54px",height:"54px",borderRadius:"14px",background:"linear-gradient(135deg,#3b82f6,#8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"26px",color:"#fff",fontFamily:V,fontWeight:900,margin:"0 auto 12px",animation:"float 3s ease-in-out infinite"},children:"R"}),(0,i.jsxs)("div",{style:{fontWeight:800,fontSize:"22px"},children:["ROS2",(0,i.jsx)("span",{style:{color:r.blue},children:"Academy"})]}),(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,letterSpacing:"2px",marginTop:"3px"},children:"JAZZY JALISCO \\u{1F3B7}"})]}),(0,i.jsx)("div",{style:{display:"flex",background:r.faint,borderRadius:"8px",padding:"3px",marginBottom:"22px"},children:[["login","\\u{1F511} Connexion"],["register","\\u2728 Inscription"]].map(([d,g])=>(0,i.jsx)("button",{onClick:()=>{n(d),y("")},style:{flex:1,padding:"7px",borderRadius:"6px",border:"none",cursor:"pointer",background:t===d?r.blue:"transparent",color:t===d?"#fff":r.muted,fontSize:"12px",fontFamily:f,fontWeight:700,transition:"all .2s"},children:g},d))}),t==="register"&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{style:{marginBottom:"16px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"6px",letterSpacing:"1px"},children:"JE SUIS"}),(0,i.jsx)("div",{style:{display:"flex",gap:"8px"},children:[["etudiant","\\u{1F393} \\xC9tudiant"],["prof","\\u{1F468}\\u200D\\u{1F3EB} Professeur"]].map(([d,g])=>(0,i.jsx)("button",{onClick:()=>b(d),style:{flex:1,padding:"9px",borderRadius:"8px",border:"none",cursor:"pointer",background:h===d?(Zt[d]||r.blue)+"22":r.faint,color:h===d?Zt[d]||r.blue:r.muted,fontSize:"12px",fontFamily:f,fontWeight:700,outline:h===d?\`1px solid \${Zt[d]||r.blue}66\`:"none",transition:"all .2s"},children:g},d))}),h==="prof"&&(0,i.jsx)("div",{style:{marginTop:"8px",padding:"8px 12px",background:r.amber+"11",border:\`1px solid \${r.amber}33\`,borderRadius:"6px",fontSize:"11px",color:r.amber,fontFamily:f},children:"\\u26A0 Le compte professeur doit \\xEAtre valid\\xE9 par l'administrateur avant l'acc\\xE8s"})]}),(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginBottom:"4px"},children:[(0,i.jsx)(we,{label:"PR\\xC9NOM",value:a,onChange:l,placeholder:"Mohamed"}),(0,i.jsx)(we,{label:"NOM",value:o,onChange:s,placeholder:"BELKACEM"})]})]}),(0,i.jsx)(we,{label:"PSEUDO",value:c,onChange:u,placeholder:"mon_pseudo"}),(0,i.jsx)(we,{label:"MOT DE PASSE",value:p,onChange:v,type:"password",placeholder:"\\u2022\\u2022\\u2022\\u2022\\u2022\\u2022\\u2022\\u2022"}),_&&(0,i.jsxs)("div",{style:{background:r.red+"18",border:\`1px solid \${r.red}44\`,borderRadius:"7px",padding:"8px 12px",fontSize:"12px",color:r.red,marginBottom:"14px",fontFamily:f},children:["\\u26A0 ",_]}),(0,i.jsx)("button",{onClick:m,disabled:T,style:{width:"100%",padding:"11px",borderRadius:"8px",border:"none",background:T?r.muted:"linear-gradient(135deg,#3b82f6,#8b5cf6)",color:"#fff",fontSize:"13px",fontFamily:f,fontWeight:700,cursor:T?"default":"pointer",transition:"all .2s"},children:T?"...":t==="login"?"\\u{1F511} Se connecter":"\\u2728 Cr\\xE9er mon compte"}),(0,i.jsx)("div",{style:{textAlign:"center",marginTop:"14px",fontSize:"10px",color:r.muted,fontFamily:f},children:"Plateforme p\\xE9dagogique ROS2 \\u2014 USTHB"}),(0,i.jsx)("div",{style:{textAlign:"center",marginTop:"6px",fontSize:"9px",color:r.muted+"88",fontFamily:f},children:"\\u{1F512} Mot de passe chiffr\\xE9 \\u2014 jamais visible par les autres"}),(0,i.jsx)("div",{style:{textAlign:"center",marginTop:"4px",fontSize:"9px",color:r.muted+"88",fontFamily:f},children:"\\u2705 La session est conserv\\xE9e automatiquement \\xE0 la reconnexion"})]})})}function B_({currentUser:e}){let[t,n]=(0,E.useState)("users"),[a,l]=(0,E.useState)([]),[o,s]=(0,E.useState)([]),[c,u]=(0,E.useState)([]),[p,v]=(0,E.useState)(!0),[h,b]=(0,E.useState)(!1),[_,y]=(0,E.useState)(""),[T,O]=(0,E.useState)(""),[m,d]=(0,E.useState)(""),[g,x]=(0,E.useState)(100),[N,q]=(0,E.useState)(2),[S,B]=(0,E.useState)("syntax"),[k,C]=(0,E.useState)(""),[j,ke]=(0,E.useState)(!1),[Te,qe]=(0,E.useState)(""),[M,be]=(0,E.useState)(""),[D,L]=(0,E.useState)(300),[ce,Ce]=(0,E.useState)(2),[R,G]=(0,E.useState)("5-10h"),pe=async()=>{v(!0);try{let A=await window.storage.list("user:",!0),fe=[],Pt=[],_t=[];for(let Rt of A.keys||[])try{let Ri=await window.storage.get(Rt,!0);if(!Ri)continue;let In=JSON.parse(Ri.value);fe.push(In),In.role==="prof"&&In.status==="pending"&&Pt.push(In),In.challengeRequest==="pending"&&_t.push(In)}catch{}l(fe),s(Pt),u(_t)}catch{}v(!1)};(0,E.useEffect)(()=>{pe()},[]);let je=async A=>{let{password:fe,passwordHash:Pt,..._t}=A,Rt={..._t,status:"approved"};await window.storage.set("user:"+A.pseudo.toLowerCase(),JSON.stringify(Rt),!0),await pe()},Ql=async A=>{let{password:fe,passwordHash:Pt,..._t}=A,Rt={..._t,status:"rejected"};await window.storage.set("user:"+A.pseudo.toLowerCase(),JSON.stringify(Rt),!0),await pe()},fm=async A=>{let{password:fe,passwordHash:Pt,..._t}=A,Rt={..._t,canAddChallenge:!0,challengeRequest:"approved"};await window.storage.set("user:"+A.pseudo.toLowerCase(),JSON.stringify(Rt),!0),await pe()},mm=async A=>{let{password:fe,passwordHash:Pt,..._t}=A,Rt={..._t,challengeRequest:"rejected"};await window.storage.set("user:"+A.pseudo.toLowerCase(),JSON.stringify(Rt),!0),await pe()},gm=async A=>{if(window.confirm(\`Supprimer d\\xE9finitivement le compte de \${A.prenom} \${A.nom} (@\${A.pseudo}) ?

Cette action est irr\\xE9versible.\`)){try{await window.storage.delete("user:"+A.pseudo.toLowerCase(),!0)}catch{}try{await window.storage.delete("auth:"+A.pseudo.toLowerCase(),!1)}catch{}await pe()}},ym=async()=>{if(!_.trim()||!T.trim())return;let A={id:"ch_"+Date.now(),type:S,level:N,title:_.trim(),desc:T.trim(),xp:Number(g),color:r.purple,hint:k.trim(),solution:m.trim(),tags:[],addedBy:e.pseudo,date:new Date().toISOString()},fe=(()=>{try{return JSON.parse(localStorage.getItem("extra_challenges")||"[]")}catch{return[]}})();localStorage.setItem("extra_challenges",JSON.stringify([...fe,A])),y(""),O(""),d(""),C(""),x(100),b(!1),alert("Challenge publi\\xE9 !")},_m=async()=>{if(!Te.trim()||!M.trim())return;let A={id:"proj_"+Date.now(),title:Te.trim(),desc:M.trim(),xp:Number(D),level:ce,duree:R,addedBy:e.pseudo,date:new Date().toISOString()},fe=(()=>{try{return JSON.parse(localStorage.getItem("extra_projects")||"[]")}catch{return[]}})();localStorage.setItem("extra_projects",JSON.stringify([...fe,A])),qe(""),be(""),L(300),ke(!1),alert("Projet publi\\xE9 !")},bm=[{id:"users",icon:"\\u{1F465}",label:"Utilisateurs"},{id:"profs",icon:"\\u23F3",label:\`Profs en attente (\${o.length})\`},{id:"challenges_req",icon:"\\u{1F511}",label:\`Demandes challenge (\${c.length})\`},{id:"add_challenge",icon:"\\u26A1",label:"Ajouter challenge"},{id:"add_project",icon:"\\u{1F680}",label:"Ajouter projet"}],vm=A=>({display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px",borderRadius:"7px",border:"none",cursor:"pointer",background:A?r.amber+"22":"transparent",color:A?r.amber:r.muted,fontSize:"12px",fontFamily:f,textAlign:"left",outline:A?\`1px solid \${r.amber}44\`:"none",transition:"all .15s"}),hm=A=>(0,i.jsxs)("div",{style:{display:"flex",gap:"12px",alignItems:"center",background:r.faint,borderRadius:"8px",padding:"10px 14px",marginBottom:"8px"},children:[(0,i.jsx)("div",{style:{width:"38px",height:"38px",borderRadius:"9px",flexShrink:0,background:(Zt[A.role]||r.blue)+"22",border:\`1px solid \${Zt[A.role]||r.blue}33\`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"},children:A.role==="admin"?"\\u2B50":A.role==="prof"?"\\u{1F468}\\u200D\\u{1F3EB}":"\\u{1F393}"}),(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"},children:[(0,i.jsxs)("span",{style:{fontFamily:f,fontWeight:700,fontSize:"13px"},children:[A.prenom," ",A.nom]}),(0,i.jsxs)("span",{style:{fontSize:"11px",color:r.muted,fontFamily:f},children:["@",A.pseudo]}),(0,i.jsx)(It,{role:A.role}),A.status==="pending"&&(0,i.jsx)("span",{style:{fontSize:"9px",color:r.amber,fontFamily:f,background:r.amber+"18",borderRadius:"3px",padding:"1px 6px"},children:"EN ATTENTE"}),A.status==="rejected"&&(0,i.jsx)("span",{style:{fontSize:"9px",color:r.red,fontFamily:f,background:r.red+"18",borderRadius:"3px",padding:"1px 6px"},children:"REJET\\xC9"}),A.status==="approved"&&A.role!=="etudiant"&&(0,i.jsx)("span",{style:{fontSize:"9px",color:r.green,fontFamily:f,background:r.green+"18",borderRadius:"3px",padding:"1px 6px"},children:"VALID\\xC9"}),A.canAddChallenge&&(0,i.jsx)("span",{style:{fontSize:"9px",color:r.cyan,fontFamily:f,background:r.cyan+"18",borderRadius:"3px",padding:"1px 6px"},children:"\\u26A1 CHALLENGES"})]}),(0,i.jsxs)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginTop:"2px"},children:["Inscrit le ",new Date(A.joinDate).toLocaleDateString("fr"),A.bio&&(0,i.jsxs)("span",{style:{marginLeft:"8px",color:r.muted},children:["\\u2014 ",A.bio.slice(0,40),A.bio.length>40?"...":""]})]})]}),(0,i.jsx)("button",{onClick:()=>gm(A),title:"Supprimer ce compte",style:{flexShrink:0,width:"32px",height:"32px",borderRadius:"7px",border:\`1px solid \${r.red}33\`,background:r.red+"11",color:r.red,fontSize:"14px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all .15s"},onMouseEnter:fe=>{fe.currentTarget.style.background=r.red+"33",fe.currentTarget.style.border=\`1px solid \${r.red}66\`},onMouseLeave:fe=>{fe.currentTarget.style.background=r.red+"11",fe.currentTarget.style.border=\`1px solid \${r.red}33\`},children:"\\u{1F5D1}"})]},A.pseudo);return(0,i.jsxs)("div",{style:{display:"flex",gap:"16px",animation:"fadeIn .3s ease"},children:[(0,i.jsxs)("div",{style:{width:"220px",background:r.panel,border:\`1px solid \${r.amber}33\`,borderRadius:"12px",padding:"12px",flexShrink:0},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.amber,fontFamily:f,letterSpacing:"1px",marginBottom:"10px",display:"flex",alignItems:"center",gap:"6px"},children:"\\u2B50 PANEL ADMIN"}),bm.map(A=>(0,i.jsxs)("button",{onClick:()=>n(A.id),style:vm(t===A.id),children:[(0,i.jsx)("span",{children:A.icon}),(0,i.jsx)("span",{children:A.label})]},A.id))]}),(0,i.jsxs)("div",{style:{flex:1},children:[t==="users"&&(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{style:{fontFamily:V,fontWeight:800,fontSize:"18px",marginBottom:"16px"},children:["\\u{1F465} Tous les utilisateurs (",a.length,")"]}),p?(0,i.jsx)("div",{style:{color:r.muted,fontFamily:f},children:"Chargement..."}):a.length===0?(0,i.jsx)("div",{style:{color:r.muted,fontFamily:f},children:"Aucun utilisateur inscrit"}):a.map(hm)]}),t==="profs"&&(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{style:{fontFamily:V,fontWeight:800,fontSize:"18px",marginBottom:"16px"},children:["\\u23F3 Professeurs en attente de validation (",o.length,")"]}),o.length===0?(0,i.jsx)("div",{style:{textAlign:"center",padding:"40px",color:r.muted,fontFamily:f},children:"\\u2705 Aucune demande en attente"}):o.map(A=>(0,i.jsxs)("div",{style:{background:r.panel,border:\`1px solid \${r.amber}33\`,borderRadius:"10px",padding:"16px",marginBottom:"12px"},children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"10px",alignItems:"center",marginBottom:"10px"},children:[(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsxs)("div",{style:{fontFamily:f,fontWeight:700},children:[A.prenom," ",A.nom]}),(0,i.jsxs)("div",{style:{fontSize:"11px",color:r.muted,fontFamily:f},children:["@",A.pseudo]}),(0,i.jsxs)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginTop:"2px"},children:["Demande le ",new Date(A.joinDate).toLocaleDateString("fr")]})]}),(0,i.jsx)(It,{role:"prof"})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,i.jsx)("button",{onClick:()=>je(A),style:{padding:"7px 16px",borderRadius:"6px",border:"none",cursor:"pointer",background:r.green+"22",color:r.green,fontSize:"12px",fontFamily:f,fontWeight:700,outline:\`1px solid \${r.green}44\`},children:"\\u2705 Valider"}),(0,i.jsx)("button",{onClick:()=>Ql(A),style:{padding:"7px 16px",borderRadius:"6px",border:"none",cursor:"pointer",background:r.red+"22",color:r.red,fontSize:"12px",fontFamily:f,fontWeight:700,outline:\`1px solid \${r.red}44\`},children:"\\u2715 Rejeter"})]})]},A.pseudo))]}),t==="challenges_req"&&(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{style:{fontFamily:V,fontWeight:800,fontSize:"18px",marginBottom:"16px"},children:["\\u{1F511} Demandes acc\\xE8s challenge (",c.length,")"]}),c.length===0?(0,i.jsx)("div",{style:{textAlign:"center",padding:"40px",color:r.muted,fontFamily:f},children:"\\u2705 Aucune demande en attente"}):c.map(A=>(0,i.jsxs)("div",{style:{background:r.panel,border:\`1px solid \${r.purple}33\`,borderRadius:"10px",padding:"16px",marginBottom:"12px"},children:[(0,i.jsx)("div",{style:{display:"flex",gap:"10px",alignItems:"center",marginBottom:"10px"},children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{fontFamily:f,fontWeight:700},children:[A.prenom," ",A.nom]}),(0,i.jsxs)("div",{style:{fontSize:"11px",color:r.muted,fontFamily:f},children:["@",A.pseudo," \\u2014 ",(0,i.jsx)(It,{role:A.role})]})]})}),(0,i.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,i.jsx)("button",{onClick:()=>fm(A),style:{padding:"7px 16px",borderRadius:"6px",border:"none",cursor:"pointer",background:r.green+"22",color:r.green,fontSize:"12px",fontFamily:f,fontWeight:700,outline:\`1px solid \${r.green}44\`},children:"\\u2705 Accorder l'acc\\xE8s"}),(0,i.jsx)("button",{onClick:()=>mm(A),style:{padding:"7px 16px",borderRadius:"6px",border:"none",cursor:"pointer",background:r.red+"22",color:r.red,fontSize:"12px",fontFamily:f,fontWeight:700,outline:\`1px solid \${r.red}44\`},children:"\\u2715 Refuser"})]})]},A.pseudo))]}),t==="add_challenge"&&(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{style:{fontFamily:V,fontWeight:800,fontSize:"18px",marginBottom:"16px"},children:"\\u26A1 Ajouter un Mini-Challenge"}),(0,i.jsxs)("div",{style:{background:r.panel,border:\`1px solid \${r.border}\`,borderRadius:"12px",padding:"20px"},children:[(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[(0,i.jsx)("div",{style:{gridColumn:"1/-1"},children:(0,i.jsx)(we,{label:"TITRE DU CHALLENGE",value:_,onChange:y,placeholder:"Mon nouveau challenge"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"6px",letterSpacing:"1px"},children:"NIVEAU (1-5)"}),(0,i.jsx)("div",{style:{display:"flex",gap:"6px"},children:[1,2,3,4,5].map(A=>(0,i.jsx)("button",{onClick:()=>q(A),style:{flex:1,padding:"6px",borderRadius:"5px",border:"none",cursor:"pointer",background:N===A?r.blue+"22":r.faint,color:N===A?r.blue:r.muted,fontSize:"12px",fontFamily:f,fontWeight:700,outline:N===A?\`1px solid \${r.blue}44\`:"none"},children:A},A))})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"6px",letterSpacing:"1px"},children:"TYPE"}),(0,i.jsx)("div",{style:{display:"flex",gap:"6px"},children:[["syntax","Syntaxe"],["debug","Debug"]].map(([A,fe])=>(0,i.jsx)("button",{onClick:()=>B(A),style:{flex:1,padding:"6px",borderRadius:"5px",border:"none",cursor:"pointer",background:S===A?r.cyan+"22":r.faint,color:S===A?r.cyan:r.muted,fontSize:"11px",fontFamily:f,fontWeight:700,outline:S===A?\`1px solid \${r.cyan}44\`:"none"},children:fe},A))})]})]}),(0,i.jsxs)("div",{style:{marginBottom:"12px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"\\xC9NONC\\xC9"}),(0,i.jsx)("textarea",{value:T,onChange:A=>O(A.target.value),placeholder:"D\\xE9cris l'exercice...",rows:4,style:{width:"100%",padding:"10px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.text,fontSize:"12px",fontFamily:f,outline:"none",resize:"vertical"}})]}),(0,i.jsxs)("div",{style:{marginBottom:"12px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"INDICE"}),(0,i.jsx)("input",{value:k,onChange:A=>C(A.target.value),placeholder:"Indice pour guider l'\\xE9tudiant...",style:{width:"100%",padding:"10px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.text,fontSize:"12px",fontFamily:f,outline:"none"}})]}),(0,i.jsxs)("div",{style:{marginBottom:"16px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"SOLUTION COMPL\\xC8TE"}),(0,i.jsx)("textarea",{value:m,onChange:A=>d(A.target.value),placeholder:"Code solution comment\\xE9...",rows:6,style:{width:"100%",padding:"10px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.text,fontSize:"12px",fontFamily:f,outline:"none",resize:"vertical"}})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"XP R\\xC9COMPENSE"}),(0,i.jsx)("input",{type:"number",value:g,onChange:A=>x(A.target.value),min:10,max:500,style:{width:"80px",padding:"8px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.amber,fontSize:"13px",fontFamily:f,outline:"none"}})]}),(0,i.jsx)("button",{onClick:ym,disabled:!_.trim()||!T.trim(),style:{marginTop:"18px",padding:"9px 20px",borderRadius:"8px",border:"none",background:!_.trim()||!T.trim()?r.muted:r.purple,color:"#fff",fontSize:"12px",fontFamily:f,fontWeight:700,cursor:"pointer"},children:"\\u26A1 Publier le challenge"})]})]})]}),t==="add_project"&&(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{style:{fontFamily:V,fontWeight:800,fontSize:"18px",marginBottom:"16px"},children:"\\u{1F680} Ajouter un Mini-Projet"}),(0,i.jsxs)("div",{style:{background:r.panel,border:\`1px solid \${r.border}\`,borderRadius:"12px",padding:"20px"},children:[(0,i.jsx)(we,{label:"TITRE DU PROJET",value:Te,onChange:qe,placeholder:"Mon super projet ROS2"}),(0,i.jsxs)("div",{style:{marginBottom:"12px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"DESCRIPTION / CAHIER DES CHARGES"}),(0,i.jsx)("textarea",{value:M,onChange:A=>be(A.target.value),placeholder:"D\\xE9cris le projet, les specs techniques, les objectifs...",rows:6,style:{width:"100%",padding:"10px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.text,fontSize:"12px",fontFamily:f,outline:"none",resize:"vertical"}})]}),(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"16px"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"6px",letterSpacing:"1px"},children:"NIVEAU (1-5)"}),(0,i.jsx)("div",{style:{display:"flex",gap:"4px"},children:[1,2,3,4,5].map(A=>(0,i.jsx)("button",{onClick:()=>Ce(A),style:{flex:1,padding:"6px 3px",borderRadius:"5px",border:"none",cursor:"pointer",background:ce===A?r.amber+"22":r.faint,color:ce===A?r.amber:r.muted,fontSize:"12px",fontFamily:f,fontWeight:700,outline:ce===A?\`1px solid \${r.amber}44\`:"none"},children:A},A))})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"XP"}),(0,i.jsx)("input",{type:"number",value:D,onChange:A=>L(A.target.value),min:100,style:{width:"100%",padding:"8px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.amber,fontSize:"13px",fontFamily:f,outline:"none"}})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"DUR\\xC9E ESTIM\\xC9E"}),(0,i.jsx)("input",{value:R,onChange:A=>G(A.target.value),placeholder:"5-10h",style:{width:"100%",padding:"8px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.text,fontSize:"12px",fontFamily:f,outline:"none"}})]})]}),(0,i.jsx)("button",{onClick:_m,disabled:!Te.trim()||!M.trim(),style:{padding:"9px 20px",borderRadius:"8px",border:"none",background:!Te.trim()||!M.trim()?r.muted:r.amber,color:"#fff",fontSize:"12px",fontFamily:f,fontWeight:700,cursor:"pointer"},children:"\\u{1F680} Publier le projet"})]})]})]})]})}function L_({currentUser:e}){let[t,n]=(0,E.useState)("add_challenge"),[a,l]=(0,E.useState)(""),[o,s]=(0,E.useState)(""),[c,u]=(0,E.useState)(""),[p,v]=(0,E.useState)(100),[h,b]=(0,E.useState)(2),[_,y]=(0,E.useState)("syntax"),[T,O]=(0,E.useState)(""),[m,d]=(0,E.useState)(""),[g,x]=(0,E.useState)(""),[N,q]=(0,E.useState)(300),[S,B]=(0,E.useState)(2),[k,C]=(0,E.useState)("5-10h"),j=()=>{if(!a.trim()||!o.trim())return;let M={id:"ch_"+Date.now(),type:_,level:h,title:a.trim(),desc:o.trim(),xp:Number(p),color:r.purple,hint:T.trim(),solution:c.trim(),tags:[],addedBy:e.pseudo,date:new Date().toISOString()},be=(()=>{try{return JSON.parse(localStorage.getItem("extra_challenges")||"[]")}catch{return[]}})();localStorage.setItem("extra_challenges",JSON.stringify([...be,M])),l(""),s(""),u(""),O(""),v(100),alert("\\u2705 Challenge publi\\xE9 avec succ\\xE8s !")},ke=()=>{if(!m.trim()||!g.trim())return;let M={id:"proj_"+Date.now(),title:m.trim(),desc:g.trim(),xp:Number(N),level:S,duree:k,addedBy:e.pseudo,date:new Date().toISOString()},be=(()=>{try{return JSON.parse(localStorage.getItem("extra_projects")||"[]")}catch{return[]}})();localStorage.setItem("extra_projects",JSON.stringify([...be,M])),d(""),x(""),q(300),alert("\\u2705 Projet publi\\xE9 avec succ\\xE8s !")},Te=[{id:"add_challenge",icon:"\\u26A1",label:"Ajouter un Challenge"},{id:"add_project",icon:"\\u{1F680}",label:"Ajouter un Projet"},{id:"my_content",icon:"\\u{1F4CB}",label:"Mes publications"}],qe=M=>({display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px",borderRadius:"7px",border:"none",cursor:"pointer",background:M?r.purple+"22":"transparent",color:M?r.purple:r.muted,fontSize:"12px",fontFamily:f,textAlign:"left",outline:M?\`1px solid \${r.purple}44\`:"none"});return(0,i.jsxs)("div",{style:{display:"flex",gap:"16px",animation:"fadeIn .3s ease"},children:[(0,i.jsxs)("div",{style:{width:"200px",background:r.panel,border:\`1px solid \${r.purple}33\`,borderRadius:"12px",padding:"12px",flexShrink:0},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.purple,fontFamily:f,letterSpacing:"1px",marginBottom:"10px"},children:"\\u{1F468}\\u200D\\u{1F3EB} ESPACE PROF"}),Te.map(M=>(0,i.jsxs)("button",{onClick:()=>n(M.id),style:qe(t===M.id),children:[(0,i.jsx)("span",{children:M.icon}),(0,i.jsx)("span",{children:M.label})]},M.id))]}),(0,i.jsxs)("div",{style:{flex:1},children:[t==="add_challenge"&&(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{style:{fontFamily:V,fontWeight:800,fontSize:"18px",marginBottom:"16px"},children:"\\u26A1 Nouveau Challenge"}),(0,i.jsxs)("div",{style:{background:r.panel,border:\`1px solid \${r.border}\`,borderRadius:"12px",padding:"20px"},children:[(0,i.jsx)(we,{label:"TITRE",value:a,onChange:l,placeholder:"Titre du challenge"}),(0,i.jsxs)("div",{style:{display:"flex",gap:"12px",marginBottom:"12px"},children:[(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"6px",letterSpacing:"1px"},children:"NIVEAU"}),(0,i.jsx)("div",{style:{display:"flex",gap:"5px"},children:[1,2,3,4,5].map(M=>(0,i.jsx)("button",{onClick:()=>b(M),style:{flex:1,padding:"6px",borderRadius:"5px",border:"none",cursor:"pointer",background:h===M?r.blue+"22":r.faint,color:h===M?r.blue:r.muted,fontSize:"12px",fontFamily:f,fontWeight:700,outline:h===M?\`1px solid \${r.blue}44\`:"none"},children:M},M))})]}),(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"6px",letterSpacing:"1px"},children:"TYPE"}),(0,i.jsx)("div",{style:{display:"flex",gap:"5px"},children:[["syntax","Syntaxe"],["debug","Debug"]].map(([M,be])=>(0,i.jsx)("button",{onClick:()=>y(M),style:{flex:1,padding:"6px",borderRadius:"5px",border:"none",cursor:"pointer",background:_===M?r.cyan+"22":r.faint,color:_===M?r.cyan:r.muted,fontSize:"11px",fontFamily:f,fontWeight:700,outline:_===M?\`1px solid \${r.cyan}44\`:"none"},children:be},M))})]})]}),(0,i.jsxs)("div",{style:{marginBottom:"12px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"\\xC9NONC\\xC9"}),(0,i.jsx)("textarea",{value:o,onChange:M=>s(M.target.value),placeholder:"D\\xE9cris l'exercice...",rows:4,style:{width:"100%",padding:"10px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.text,fontSize:"12px",fontFamily:f,outline:"none",resize:"vertical"}})]}),(0,i.jsxs)("div",{style:{marginBottom:"12px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"INDICE"}),(0,i.jsx)("input",{value:T,onChange:M=>O(M.target.value),placeholder:"Indice progressif...",style:{width:"100%",padding:"10px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.text,fontSize:"12px",fontFamily:f,outline:"none"}})]}),(0,i.jsxs)("div",{style:{marginBottom:"16px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"SOLUTION"}),(0,i.jsx)("textarea",{value:c,onChange:M=>u(M.target.value),placeholder:"Code solution...",rows:5,style:{width:"100%",padding:"10px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.text,fontSize:"12px",fontFamily:f,outline:"none",resize:"vertical"}})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:"12px",alignItems:"flex-end"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"XP"}),(0,i.jsx)("input",{type:"number",value:p,onChange:M=>v(M.target.value),min:10,style:{width:"80px",padding:"8px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.amber,fontSize:"13px",fontFamily:f,outline:"none"}})]}),(0,i.jsx)("button",{onClick:j,disabled:!a.trim()||!o.trim(),style:{padding:"9px 20px",borderRadius:"8px",border:"none",background:!a.trim()||!o.trim()?r.muted:r.purple,color:"#fff",fontSize:"12px",fontFamily:f,fontWeight:700,cursor:"pointer"},children:"\\u26A1 Publier"})]})]})]}),t==="add_project"&&(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{style:{fontFamily:V,fontWeight:800,fontSize:"18px",marginBottom:"16px"},children:"\\u{1F680} Nouveau Projet"}),(0,i.jsxs)("div",{style:{background:r.panel,border:\`1px solid \${r.border}\`,borderRadius:"12px",padding:"20px"},children:[(0,i.jsx)(we,{label:"TITRE",value:m,onChange:d,placeholder:"Titre du projet"}),(0,i.jsxs)("div",{style:{marginBottom:"12px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"DESCRIPTION / SPECS"}),(0,i.jsx)("textarea",{value:g,onChange:M=>x(M.target.value),placeholder:"Cahier des charges, objectifs, stack technique...",rows:6,style:{width:"100%",padding:"10px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.text,fontSize:"12px",fontFamily:f,outline:"none",resize:"vertical"}})]}),(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"16px"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"6px",letterSpacing:"1px"},children:"NIVEAU"}),(0,i.jsx)("div",{style:{display:"flex",gap:"4px"},children:[1,2,3,4,5].map(M=>(0,i.jsx)("button",{onClick:()=>B(M),style:{flex:1,padding:"6px 3px",borderRadius:"5px",border:"none",cursor:"pointer",background:S===M?r.amber+"22":r.faint,color:S===M?r.amber:r.muted,fontSize:"12px",fontFamily:f,fontWeight:700,outline:S===M?\`1px solid \${r.amber}44\`:"none"},children:M},M))})]}),(0,i.jsx)("div",{children:(0,i.jsx)(we,{label:"XP",value:String(N),onChange:M=>q(M)})}),(0,i.jsx)("div",{children:(0,i.jsx)(we,{label:"DUR\\xC9E",value:k,onChange:C,placeholder:"10-20h"})})]}),(0,i.jsx)("button",{onClick:ke,disabled:!m.trim()||!g.trim(),style:{padding:"9px 20px",borderRadius:"8px",border:"none",background:!m.trim()||!g.trim()?r.muted:r.amber,color:"#fff",fontSize:"12px",fontFamily:f,fontWeight:700,cursor:"pointer"},children:"\\u{1F680} Publier"})]})]}),t==="my_content"&&(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{style:{fontFamily:V,fontWeight:800,fontSize:"18px",marginBottom:"16px"},children:"\\u{1F4CB} Mes Publications"}),(()=>{let M=(()=>{try{return JSON.parse(localStorage.getItem("extra_challenges")||"[]")}catch{return[]}})().filter(D=>D.addedBy===e.pseudo),be=(()=>{try{return JSON.parse(localStorage.getItem("extra_projects")||"[]")}catch{return[]}})().filter(D=>D.addedBy===e.pseudo);return M.length===0&&be.length===0?(0,i.jsx)("div",{style:{color:r.muted,fontFamily:f},children:"Aucune publication pour l'instant"}):(0,i.jsxs)("div",{children:[M.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{style:{fontSize:"11px",color:r.muted,fontFamily:f,marginBottom:"8px"},children:["CHALLENGES (",M.length,")"]}),M.map(D=>(0,i.jsxs)("div",{style:{background:r.faint,borderRadius:"8px",padding:"10px 14px",marginBottom:"8px"},children:[(0,i.jsx)("span",{style:{fontFamily:f,fontWeight:700},children:D.title})," ",(0,i.jsxs)("span",{style:{fontSize:"10px",color:r.muted},children:["Nv.",D.level," \\u2014 ",D.xp," XP"]})]},D.id))]}),be.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{style:{fontSize:"11px",color:r.muted,fontFamily:f,marginBottom:"8px",marginTop:"12px"},children:["PROJETS (",be.length,")"]}),be.map(D=>(0,i.jsxs)("div",{style:{background:r.faint,borderRadius:"8px",padding:"10px 14px",marginBottom:"8px"},children:[(0,i.jsx)("span",{style:{fontFamily:f,fontWeight:700},children:D.title})," ",(0,i.jsxs)("span",{style:{fontSize:"10px",color:r.muted},children:["Nv.",D.level," \\u2014 ",D.xp," XP"]})]},D.id))]})]})})()]})]})]})}function w_({currentUser:e}){let[t,n]=(0,E.useState)("list"),[a,l]=(0,E.useState)([]),[o,s]=(0,E.useState)(!0),[c,u]=(0,E.useState)(null),[p,v]=(0,E.useState)("all"),[h,b]=(0,E.useState)(""),[_,y]=(0,E.useState)(""),[T,O]=(0,E.useState)([]),[m,d]=(0,E.useState)(""),[g,x]=(0,E.useState)(""),[N,q]=(0,E.useState)(""),[S,B]=(0,E.useState)(!1),k=["Nav2","SLAM","Gazebo","TF2","ros2_control","MoveIt2","URDF","Actions","Services","Topics","Launch","QoS","Debug","Installation"],C=[["all","Toutes"],["open","Sans r\\xE9ponse"],["resolved","R\\xE9solues"],["mine","Mes questions"]],j=async()=>{s(!0);try{let D=await window.storage.list("forum:",!0),L=[];for(let ce of D.keys||[])try{let Ce=await window.storage.get(ce,!0);Ce&&L.push(JSON.parse(Ce.value))}catch{}L.sort((ce,Ce)=>new Date(Ce.date)-new Date(ce.date)),l(L)}catch{l([])}s(!1)};(0,E.useEffect)(()=>{j()},[]);let ke=async()=>{if(!h.trim()||!_.trim())return;B(!0);let D={id:"forum:"+e.pseudo+"_"+Date.now(),auteur:e.pseudo,prenomNom:e.prenom+" "+e.nom,role:e.role,titre:h.trim(),desc:_.trim(),code:m.trim(),tags:T,date:new Date().toISOString(),replies:[],resolved:!1,views:0};await window.storage.set(D.id,JSON.stringify(D),!0),b(""),y(""),d(""),O([]),await j(),n("list"),B(!1)},Te=async D=>{if(!g.trim())return;let L={id:Date.now(),auteur:e.pseudo,prenomNom:e.prenom+" "+e.nom,role:e.role,text:g.trim(),code:N.trim(),date:new Date().toISOString(),isAccepted:!1},ce={...D,replies:[...D.replies,L],resolved:!1};await window.storage.set(D.id,JSON.stringify(ce),!0),x(""),q(""),l(Ce=>Ce.map(R=>R.id===D.id?ce:R)),u(ce)},qe=async(D,L)=>{let ce={...D,resolved:!0,replies:D.replies.map(Ce=>({...Ce,isAccepted:Ce.id===L}))};await window.storage.set(D.id,JSON.stringify(ce),!0),l(Ce=>Ce.map(R=>R.id===D.id?ce:R)),u(ce)},M=a.filter(D=>p==="open"?!D.resolved&&D.replies.length===0:p==="resolved"?D.resolved:p==="mine"?D.auteur===e.pseudo:!0),be={admin:"\\u2B50",prof:"\\u{1F468}\\u200D\\u{1F3EB}",etudiant:"\\u{1F393}"};if(t==="new")return(0,i.jsxs)("div",{style:{maxWidth:"720px",animation:"fadeIn .3s ease"},children:[(0,i.jsx)("button",{onClick:()=>n("list"),style:{background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",padding:"7px 14px",color:r.muted,fontSize:"12px",fontFamily:f,cursor:"pointer",marginBottom:"20px"},children:"\\u2190 Retour"}),(0,i.jsx)("h2",{style:{fontFamily:V,fontWeight:800,fontSize:"18px",marginBottom:"20px"},children:"\\u2753 Poser une question"}),(0,i.jsxs)("div",{style:{background:r.panel,border:\`1px solid \${r.border}\`,borderRadius:"12px",padding:"20px"},children:[(0,i.jsx)(we,{label:"TITRE DE LA QUESTION",value:h,onChange:b,placeholder:"Comment configurer Nav2 avec un robot custom ?"}),(0,i.jsxs)("div",{style:{marginBottom:"12px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"DESCRIPTION DU PROBL\\xC8ME"}),(0,i.jsx)("textarea",{value:_,onChange:D=>y(D.target.value),rows:5,placeholder:"Explique le contexte, ce que tu as essay\\xE9, le message d'erreur...",style:{width:"100%",padding:"10px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.text,fontSize:"12px",fontFamily:f,outline:"none",resize:"vertical"}})]}),(0,i.jsxs)("div",{style:{marginBottom:"12px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"CODE / ERREUR (optionnel)"}),(0,i.jsx)("textarea",{value:m,onChange:D=>d(D.target.value),rows:4,placeholder:"Colle ici ton code ou le message d'erreur...",style:{width:"100%",padding:"10px 12px",background:r.bg,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.cyan,fontSize:"12px",fontFamily:f,outline:"none",resize:"vertical"}})]}),(0,i.jsxs)("div",{style:{marginBottom:"16px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"8px",letterSpacing:"1px"},children:"TAGS (s\\xE9lectionne les sujets concern\\xE9s)"}),(0,i.jsx)("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:k.map(D=>(0,i.jsx)("button",{onClick:()=>O(L=>L.includes(D)?L.filter(ce=>ce!==D):[...L,D]),style:{padding:"4px 10px",borderRadius:"5px",border:"none",cursor:"pointer",background:T.includes(D)?r.blue+"22":r.faint,color:T.includes(D)?r.blue:r.muted,fontSize:"11px",fontFamily:f,outline:T.includes(D)?\`1px solid \${r.blue}44\`:"none"},children:D},D))})]}),(0,i.jsx)("button",{onClick:ke,disabled:S||!h.trim()||!_.trim(),style:{padding:"9px 20px",borderRadius:"8px",border:"none",background:S||!h.trim()||!_.trim()?r.muted:r.blue,color:"#fff",fontSize:"12px",fontFamily:f,fontWeight:700,cursor:"pointer"},children:S?"Envoi...":"\\u2753 Publier ma question"})]})]});if(t==="detail"&&c){let D=a.find(L=>L.id===c.id)||c;return(0,i.jsxs)("div",{style:{maxWidth:"720px",animation:"fadeIn .3s ease"},children:[(0,i.jsx)("button",{onClick:()=>n("list"),style:{background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",padding:"7px 14px",color:r.muted,fontSize:"12px",fontFamily:f,cursor:"pointer",marginBottom:"20px"},children:"\\u2190 Forum"}),(0,i.jsxs)("div",{style:{background:r.panel,border:\`1px solid \${D.resolved?r.green:r.border}\`,borderRadius:"12px",padding:"20px",marginBottom:"16px"},children:[(0,i.jsx)("div",{style:{display:"flex",gap:"8px",alignItems:"flex-start",marginBottom:"12px"},children:(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center",marginBottom:"6px"},children:[D.resolved&&(0,i.jsx)("span",{style:{fontSize:"11px",color:r.green,background:r.green+"18",border:\`1px solid \${r.green}44\`,borderRadius:"4px",padding:"1px 7px",fontFamily:f},children:"\\u2705 R\\xE9solue"}),D.tags?.map(L=>(0,i.jsx)(Jt,{color:r.blue,children:L},L))]}),(0,i.jsx)("h3",{style:{fontFamily:V,fontWeight:700,fontSize:"16px",marginBottom:"8px"},children:D.titre}),(0,i.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,i.jsx)("span",{style:{fontSize:"12px"},children:be[D.role]||"\\u{1F393}"}),(0,i.jsx)("span",{style:{fontSize:"12px",fontFamily:f,fontWeight:700},children:D.prenomNom}),(0,i.jsx)(It,{role:D.role}),(0,i.jsx)("span",{style:{fontSize:"11px",color:r.muted,fontFamily:f},children:new Date(D.date).toLocaleDateString("fr")})]})]})}),(0,i.jsx)("p",{style:{color:r.text,fontSize:"13px",lineHeight:1.7,marginBottom:D.code?"12px":"0"},children:D.desc}),D.code&&(0,i.jsx)("pre",{style:{background:r.bg,border:\`1px solid \${r.border}\`,borderRadius:"8px",padding:"12px",fontSize:"11px",fontFamily:f,color:r.cyan,overflowX:"auto",marginTop:"8px"},children:D.code})]}),(0,i.jsxs)("div",{style:{fontSize:"11px",color:r.muted,fontFamily:f,letterSpacing:"1px",marginBottom:"12px"},children:[D.replies.length," R\\xC9PONSE",D.replies.length!==1?"S":""]}),D.replies.map(L=>(0,i.jsxs)("div",{style:{background:r.panel,border:\`1px solid \${L.isAccepted?r.green:r.border}\`,borderRadius:"10px",padding:"16px",marginBottom:"10px"},children:[L.isAccepted&&(0,i.jsx)("div",{style:{fontSize:"11px",color:r.green,fontFamily:f,fontWeight:700,marginBottom:"8px"},children:"\\u2705 R\\xE9ponse accept\\xE9e"}),(0,i.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"},children:[(0,i.jsx)("span",{style:{fontSize:"14px"},children:be[L.role]||"\\u{1F393}"}),(0,i.jsx)("span",{style:{fontSize:"12px",fontFamily:f,fontWeight:700},children:L.prenomNom}),(0,i.jsx)(It,{role:L.role}),(0,i.jsx)("span",{style:{fontSize:"11px",color:r.muted,fontFamily:f},children:new Date(L.date).toLocaleDateString("fr")})]}),(0,i.jsx)("p",{style:{color:r.text,fontSize:"13px",lineHeight:1.6,marginBottom:L.code?"8px":"0"},children:L.text}),L.code&&(0,i.jsx)("pre",{style:{background:r.bg,border:\`1px solid \${r.border}\`,borderRadius:"7px",padding:"10px",fontSize:"11px",fontFamily:f,color:r.cyan,overflowX:"auto"},children:L.code}),D.auteur===e.pseudo&&!L.isAccepted&&!D.resolved&&(0,i.jsx)("button",{onClick:()=>qe(D,L.id),style:{marginTop:"8px",padding:"5px 12px",borderRadius:"5px",border:"none",cursor:"pointer",background:r.green+"22",color:r.green,fontSize:"11px",fontFamily:f,fontWeight:700,outline:\`1px solid \${r.green}44\`},children:"\\u2705 Marquer comme accept\\xE9e"})]},L.id)),!D.resolved&&(0,i.jsxs)("div",{style:{background:r.panel,border:\`1px solid \${r.blue}33\`,borderRadius:"10px",padding:"16px",marginTop:"8px"},children:[(0,i.jsx)("div",{style:{fontSize:"11px",color:r.blue,fontFamily:f,letterSpacing:"1px",marginBottom:"12px"},children:"AJOUTER UNE R\\xC9PONSE"}),(0,i.jsx)("div",{style:{marginBottom:"10px"},children:(0,i.jsx)("textarea",{value:g,onChange:L=>x(L.target.value),rows:4,placeholder:"Ta r\\xE9ponse...",style:{width:"100%",padding:"10px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.text,fontSize:"12px",fontFamily:f,outline:"none",resize:"vertical"}})}),(0,i.jsx)("div",{style:{marginBottom:"12px"},children:(0,i.jsx)("textarea",{value:N,onChange:L=>q(L.target.value),rows:3,placeholder:"Code de ta solution (optionnel)...",style:{width:"100%",padding:"10px 12px",background:r.bg,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.cyan,fontSize:"12px",fontFamily:f,outline:"none",resize:"vertical"}})}),(0,i.jsx)("button",{onClick:()=>Te(D),disabled:!g.trim(),style:{padding:"8px 18px",borderRadius:"7px",border:"none",background:g.trim()?r.blue:r.muted,color:"#fff",fontSize:"12px",fontFamily:f,fontWeight:700,cursor:"pointer"},children:"\\u{1F4AC} R\\xE9pondre"})]})]})}return(0,i.jsxs)("div",{style:{animation:"fadeIn .3s ease"},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"20px"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{style:{fontFamily:V,fontWeight:800,fontSize:"20px",marginBottom:"4px"},children:"\\u2753 Forum \\u2014 Questions & R\\xE9ponses"}),(0,i.jsx)("p",{style:{color:r.muted,fontSize:"13px"},children:"Pose tes questions, r\\xE9ponds \\xE0 tes camarades, aide la communaut\\xE9"})]}),(0,i.jsx)("button",{onClick:()=>n("new"),style:{background:"linear-gradient(135deg,#3b82f6,#8b5cf6)",border:"none",borderRadius:"8px",padding:"9px 18px",color:"#fff",fontSize:"12px",fontFamily:f,fontWeight:700,cursor:"pointer"},children:"+ Poser une question"})]}),(0,i.jsx)("div",{style:{display:"flex",gap:"6px",marginBottom:"16px",flexWrap:"wrap"},children:C.map(([D,L])=>(0,i.jsxs)("button",{onClick:()=>v(D),style:{padding:"5px 12px",borderRadius:"6px",border:"none",cursor:"pointer",background:p===D?r.blue+"22":r.faint,color:p===D?r.blue:r.muted,fontSize:"11px",fontFamily:f,outline:p===D?\`1px solid \${r.blue}44\`:"none"},children:[L," ",D==="all"?\`(\${a.length})\`:""]},D))}),o?(0,i.jsx)("div",{style:{color:r.muted,fontFamily:f,padding:"20px"},children:"Chargement..."}):M.length===0?(0,i.jsxs)("div",{style:{textAlign:"center",padding:"60px 20px"},children:[(0,i.jsx)("div",{style:{fontSize:"40px",marginBottom:"12px"},children:"\\u2753"}),(0,i.jsx)("div",{style:{fontFamily:V,fontWeight:700,marginBottom:"8px"},children:"Aucune question"}),(0,i.jsx)("div",{style:{color:r.muted,fontSize:"13px"},children:"Sois le premier \\xE0 poser une question !"})]}):M.map(D=>(0,i.jsx)("div",{onClick:()=>{u(D),n("detail")},style:{background:r.panel,border:\`1px solid \${D.resolved?r.green+"44":r.border}\`,borderRadius:"10px",padding:"14px 16px",marginBottom:"10px",cursor:"pointer",transition:"all .2s"},onMouseEnter:L=>L.currentTarget.style.border=\`1px solid \${r.blue}44\`,onMouseLeave:L=>L.currentTarget.style.border=\`1px solid \${D.resolved?r.green+"44":r.border}\`,children:(0,i.jsxs)("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[(0,i.jsxs)("div",{style:{textAlign:"center",flexShrink:0},children:[(0,i.jsx)("div",{style:{width:"42px",height:"42px",borderRadius:"8px",background:D.replies.length>0?r.blue+"22":r.faint,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",fontFamily:f,fontWeight:700,color:D.replies.length>0?r.blue:r.muted},children:D.replies.length}),(0,i.jsx)("div",{style:{fontSize:"9px",color:r.muted,fontFamily:f,marginTop:"2px"},children:"r\\xE9p."})]}),(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center",marginBottom:"4px"},children:[D.resolved&&(0,i.jsx)("span",{style:{fontSize:"10px",color:r.green,background:r.green+"18",border:\`1px solid \${r.green}33\`,borderRadius:"3px",padding:"0 5px",fontFamily:f},children:"\\u2705"}),(0,i.jsx)("span",{style:{fontFamily:V,fontWeight:700,fontSize:"14px"},children:D.titre})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"},children:[(0,i.jsx)("span",{style:{fontSize:"11px"},children:be[D.role]||"\\u{1F393}"}),(0,i.jsx)("span",{style:{fontSize:"11px",color:r.muted,fontFamily:f},children:D.prenomNom}),(0,i.jsx)(It,{role:D.role}),D.tags?.slice(0,3).map(L=>(0,i.jsx)(Jt,{color:r.blue,children:L},L)),(0,i.jsx)("span",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginLeft:"auto"},children:new Date(D.date).toLocaleDateString("fr")})]})]})]})},D.id))]})}function q_({currentUser:e}){let[t,n]=(0,E.useState)([]),[a,l]=(0,E.useState)(!0),[o,s]=(0,E.useState)(!1),[c,u]=(0,E.useState)("all"),[p,v]=(0,E.useState)(null),[h,b]=(0,E.useState)(""),[_,y]=(0,E.useState)(""),[T,O]=(0,E.useState)(""),[m,d]=(0,E.useState)(""),[g,x]=(0,E.useState)([]),[N,q]=(0,E.useState)("D\\xE9butant"),[S,B]=(0,E.useState)(""),[k,C]=(0,E.useState)(!1),j=["Nav2","SLAM","Gazebo","MoveIt2","TF2","YOLOv8","ros2_control","URDF","Actions","Lifecycle","Zenoh","microROS","Docker","CV"],ke=["D\\xE9butant","Interm\\xE9diaire","Avanc\\xE9","Expert"],Te={D\\u00E9butant:r.blue,Interm\\u00E9diaire:r.purple,Avanc\\u00E9:r.amber,Expert:r.red},qe=async()=>{l(!0);try{let R=await window.storage.list("travail:",!0),G=[];for(let pe of R.keys||[])try{let je=await window.storage.get(pe,!0);je&&G.push(JSON.parse(je.value))}catch{}G.sort((pe,je)=>new Date(je.date)-new Date(pe.date)),n(G)}catch{n([])}l(!1)};(0,E.useEffect)(()=>{qe()},[]);let M=async()=>{if(!h.trim())return;C(!0);let R={id:"travail:"+e.pseudo+"_"+Date.now(),auteur:e.pseudo,prenomNom:e.prenom+" "+e.nom,role:e.role,titre:h.trim(),desc:_.trim(),github:T.trim(),video:m.trim(),tags:g,niveauProjet:N,date:new Date().toISOString(),likes:[],comments:[]};try{await window.storage.set(R.id,JSON.stringify(R),!0),b(""),y(""),O(""),d(""),x([]),q("D\\xE9butant"),s(!1),await qe()}catch{}C(!1)},be=async R=>{let G=R.likes.includes(e.pseudo),pe={...R,likes:G?R.likes.filter(je=>je!==e.pseudo):[...R.likes,e.pseudo]};await window.storage.set(R.id,JSON.stringify(pe),!0),n(je=>je.map(Ql=>Ql.id===R.id?pe:Ql)),p?.id===R.id&&v(pe)},D=async R=>{if(!S.trim())return;let G={...R,comments:[...R.comments,{auteur:e.pseudo,prenomNom:e.prenom+" "+e.nom,role:e.role,text:S.trim(),date:new Date().toISOString()}]};await window.storage.set(R.id,JSON.stringify(G),!0),B(""),n(pe=>pe.map(je=>je.id===R.id?G:je)),v(G)},L=Te,ce={admin:"\\u2B50",prof:"\\u{1F468}\\u200D\\u{1F3EB}",etudiant:"\\u{1F393}"},Ce=c==="all"?t:c==="mine"?t.filter(R=>R.auteur===e.pseudo):t.filter(R=>R.niveauProjet===c);if(p){let R=t.find(G=>G.id===p.id)||p;return(0,i.jsxs)("div",{style:{animation:"fadeIn .3s ease"},children:[(0,i.jsx)("button",{onClick:()=>v(null),style:{background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",padding:"7px 14px",color:r.muted,fontSize:"12px",fontFamily:f,cursor:"pointer",marginBottom:"20px"},children:"\\u2190 Travaux"}),(0,i.jsxs)("div",{style:{background:r.panel,border:\`1px solid \${r.border}\`,borderRadius:"12px",padding:"24px"},children:[(0,i.jsx)("div",{style:{display:"flex",gap:"12px",alignItems:"flex-start",marginBottom:"14px"},children:(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center",marginBottom:"4px",flexWrap:"wrap"},children:[(0,i.jsxs)("span",{style:{fontFamily:f,fontWeight:700,fontSize:"11px"},children:[ce[R.role]||"\\u{1F393}"," ",R.prenomNom]}),(0,i.jsx)(It,{role:R.role}),(0,i.jsx)("span",{style:{fontSize:"9px",color:L[R.niveauProjet]||r.blue,background:(L[R.niveauProjet]||r.blue)+"18",border:\`1px solid \${L[R.niveauProjet]||r.blue}33\`,borderRadius:"3px",padding:"0 6px",fontFamily:f},children:R.niveauProjet}),(0,i.jsx)("span",{style:{fontSize:"10px",color:r.muted,fontFamily:f},children:new Date(R.date).toLocaleDateString("fr")})]}),(0,i.jsx)("h3",{style:{fontFamily:V,fontWeight:800,fontSize:"18px"},children:R.titre})]})}),R.desc&&(0,i.jsx)("p",{style:{color:r.text,lineHeight:1.7,marginBottom:"14px",fontSize:"13px"},children:R.desc}),R.tags?.length>0&&(0,i.jsx)("div",{style:{display:"flex",gap:"5px",flexWrap:"wrap",marginBottom:"14px"},children:R.tags.map(G=>(0,i.jsx)(Jt,{color:r.cyan,children:G},G))}),(0,i.jsxs)("div",{style:{display:"flex",gap:"10px",marginBottom:"20px",flexWrap:"wrap"},children:[R.github&&(0,i.jsx)("a",{href:R.github,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:"6px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",padding:"7px 14px",color:r.text,fontSize:"12px",fontFamily:f,textDecoration:"none"},children:"\\u{1F419} GitHub"}),R.video&&(0,i.jsx)("a",{href:R.video,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:"6px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",padding:"7px 14px",color:r.red,fontSize:"12px",fontFamily:f,textDecoration:"none"},children:"\\u25B6 Vid\\xE9o d\\xE9mo"}),(0,i.jsxs)("button",{onClick:()=>be(R),style:{display:"flex",alignItems:"center",gap:"6px",background:R.likes?.includes(e.pseudo)?r.pink+"22":r.faint,border:\`1px solid \${R.likes?.includes(e.pseudo)?r.pink+"66":r.border}\`,borderRadius:"7px",padding:"7px 14px",color:R.likes?.includes(e.pseudo)?r.pink:r.muted,fontSize:"12px",fontFamily:f,cursor:"pointer"},children:["\\u2764 ",R.likes?.length||0," likes"]})]}),(0,i.jsxs)("div",{style:{borderTop:\`1px solid \${r.border}\`,paddingTop:"18px"},children:[(0,i.jsxs)("div",{style:{fontFamily:f,fontSize:"11px",color:r.muted,letterSpacing:"1px",marginBottom:"14px"},children:["COMMENTAIRES (",R.comments?.length||0,")"]}),(0,i.jsx)("div",{style:{display:"flex",gap:"10px",marginBottom:"14px"},children:(0,i.jsxs)("div",{style:{flex:1,display:"flex",gap:"8px"},children:[(0,i.jsx)("input",{value:S,onChange:G=>B(G.target.value),onKeyDown:G=>G.key==="Enter"&&D(R),placeholder:"Ajouter un commentaire...",style:{flex:1,padding:"8px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.text,fontSize:"12px",fontFamily:f,outline:"none"}}),(0,i.jsx)("button",{onClick:()=>D(R),style:{background:r.blue,border:"none",borderRadius:"7px",padding:"8px 14px",color:"#fff",fontSize:"12px",fontFamily:f,cursor:"pointer"},children:"\\u2191"})]})}),(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:(R.comments||[]).map((G,pe)=>(0,i.jsx)("div",{style:{display:"flex",gap:"10px",alignItems:"flex-start",background:r.faint,borderRadius:"8px",padding:"10px 14px"},children:(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center",marginBottom:"3px"},children:[(0,i.jsx)("span",{style:{fontSize:"12px",fontWeight:700,fontFamily:f,color:r.blue},children:G.prenomNom||G.auteur}),(0,i.jsx)(It,{role:G.role}),(0,i.jsx)("span",{style:{fontSize:"10px",color:r.muted,fontFamily:f},children:new Date(G.date).toLocaleDateString("fr")})]}),(0,i.jsx)("div",{style:{fontSize:"13px",color:r.text,lineHeight:1.5},children:G.text})]})},pe))})]})]})]})}return(0,i.jsxs)("div",{style:{animation:"fadeIn .3s ease"},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{style:{fontFamily:V,fontWeight:800,fontSize:"20px",marginBottom:"4px"},children:"\\u{1F4C2} Travaux \\xC9tudiants"}),(0,i.jsx)("p",{style:{color:r.muted,fontSize:"13px"},children:"Partagez vos projets, obtenez des retours de la communaut\\xE9"})]}),(0,i.jsx)("button",{onClick:()=>s(!o),style:{background:o?r.faint:"linear-gradient(135deg,#3b82f6,#8b5cf6)",border:o?\`1px solid \${r.border}\`:"none",borderRadius:"8px",padding:"9px 18px",color:"#fff",fontSize:"12px",fontFamily:f,fontWeight:700,cursor:"pointer"},children:o?"\\u2715 Annuler":"+ Poster mon travail"})]}),o&&(0,i.jsxs)("div",{style:{background:r.panel,border:\`1px solid \${r.blue}44\`,borderRadius:"12px",padding:"20px",marginBottom:"20px",animation:"fadeIn .3s ease"},children:[(0,i.jsx)("div",{style:{fontFamily:f,fontSize:"11px",color:r.blue,letterSpacing:"1px",marginBottom:"16px"},children:"NOUVEAU TRAVAIL"}),(0,i.jsx)(we,{label:"TITRE *",value:h,onChange:b,placeholder:"Mon robot autonome ROS2 Jazzy"}),(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginBottom:"12px"},children:[(0,i.jsx)(we,{label:"LIEN GITHUB",value:T,onChange:O,placeholder:"https://github.com/..."}),(0,i.jsx)(we,{label:"LIEN VID\\xC9O D\\xC9MO",value:m,onChange:d,placeholder:"https://youtube.com/..."})]}),(0,i.jsxs)("div",{style:{marginBottom:"12px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"DESCRIPTION"}),(0,i.jsx)("textarea",{value:_,onChange:R=>y(R.target.value),placeholder:"D\\xE9cris ton projet, ce que tu as appris, les difficult\\xE9s rencontr\\xE9es...",rows:3,style:{width:"100%",padding:"10px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.text,fontSize:"12px",fontFamily:f,outline:"none",resize:"vertical"}})]}),(0,i.jsxs)("div",{style:{marginBottom:"12px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"6px",letterSpacing:"1px"},children:"NIVEAU DU PROJET"}),(0,i.jsx)("div",{style:{display:"flex",gap:"6px"},children:ke.map(R=>(0,i.jsx)("button",{onClick:()=>q(R),style:{flex:1,padding:"6px",borderRadius:"5px",border:"none",cursor:"pointer",background:N===R?(L[R]||r.blue)+"22":r.faint,color:N===R?L[R]||r.blue:r.muted,fontSize:"10px",fontFamily:f,fontWeight:700,outline:N===R?\`1px solid \${L[R]||r.blue}44\`:"none"},children:R},R))})]}),(0,i.jsxs)("div",{style:{marginBottom:"16px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"8px",letterSpacing:"1px"},children:"TECHNOLOGIES"}),(0,i.jsx)("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:j.map(R=>(0,i.jsx)("button",{onClick:()=>x(G=>G.includes(R)?G.filter(pe=>pe!==R):[...G,R]),style:{padding:"4px 10px",borderRadius:"5px",border:"none",cursor:"pointer",background:g.includes(R)?r.cyan+"22":r.faint,color:g.includes(R)?r.cyan:r.muted,fontSize:"11px",fontFamily:f,outline:g.includes(R)?\`1px solid \${r.cyan}44\`:"none"},children:R},R))})]}),(0,i.jsx)("button",{onClick:M,disabled:k||!h.trim(),style:{padding:"9px 20px",borderRadius:"8px",border:"none",background:k||!h.trim()?r.muted:"linear-gradient(135deg,#3b82f6,#8b5cf6)",color:"#fff",fontSize:"12px",fontFamily:f,fontWeight:700,cursor:"pointer"},children:k?"Publication...":"\\u{1F680} Publier"})]}),(0,i.jsx)("div",{style:{display:"flex",gap:"6px",marginBottom:"16px",flexWrap:"wrap"},children:[["all","Tous"],["mine","Mes travaux"],["D\\xE9butant",""],["Interm\\xE9diaire",""],["Avanc\\xE9",""],["Expert",""]].map(([R,G])=>(0,i.jsx)("button",{onClick:()=>u(R),style:{padding:"5px 12px",borderRadius:"6px",border:"none",cursor:"pointer",background:c===R?r.blue+"22":r.faint,color:c===R?r.blue:r.muted,fontSize:"11px",fontFamily:f,outline:c===R?\`1px solid \${r.blue}44\`:"none"},children:G||R},R))}),a?(0,i.jsx)("div",{style:{textAlign:"center",padding:"40px",color:r.muted,fontFamily:f},children:"Chargement..."}):Ce.length===0?(0,i.jsxs)("div",{style:{textAlign:"center",padding:"60px"},children:[(0,i.jsx)("div",{style:{fontSize:"36px",marginBottom:"12px"},children:"\\u{1F4C2}"}),(0,i.jsx)("div",{style:{fontFamily:V,fontWeight:700},children:"Aucun travail pour l'instant"}),(0,i.jsx)("div",{style:{color:r.muted,fontSize:"13px",marginTop:"6px"},children:"Sois le premier \\xE0 partager !"})]}):(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"14px"},children:Ce.map(R=>(0,i.jsxs)("div",{onClick:()=>v(R),onMouseEnter:G=>G.currentTarget.style.border=\`1px solid \${r.blue}44\`,onMouseLeave:G=>G.currentTarget.style.border=\`1px solid \${r.border}\`,style:{background:r.panel,border:\`1px solid \${r.border}\`,borderRadius:"12px",padding:"16px",cursor:"pointer",transition:"all .2s"},children:[(0,i.jsx)("div",{style:{display:"flex",gap:"8px",alignItems:"flex-start",marginBottom:"10px"},children:(0,i.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,i.jsx)("div",{style:{fontWeight:700,fontSize:"14px",fontFamily:V,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:R.titre}),(0,i.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center",marginTop:"3px",flexWrap:"wrap"},children:[(0,i.jsxs)("span",{style:{fontSize:"10px",fontFamily:f},children:[ce[R.role]||"\\u{1F393}"," ",R.prenomNom]}),(0,i.jsx)("span",{style:{fontSize:"9px",color:L[R.niveauProjet]||r.blue,background:(L[R.niveauProjet]||r.blue)+"18",border:\`1px solid \${L[R.niveauProjet]||r.blue}33\`,borderRadius:"3px",padding:"0 5px",fontFamily:f},children:R.niveauProjet})]})]})}),R.desc&&(0,i.jsx)("p",{style:{color:r.muted,fontSize:"12px",lineHeight:1.5,marginBottom:"8px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:R.desc}),R.tags?.length>0&&(0,i.jsxs)("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"8px"},children:[R.tags.slice(0,3).map(G=>(0,i.jsx)(Jt,{color:r.cyan,children:G},G)),R.tags.length>3&&(0,i.jsxs)(Jt,{color:r.muted,children:["+",R.tags.length-3]})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:"10px",borderTop:\`1px solid \${r.border}\`,paddingTop:"8px"},children:[(0,i.jsxs)("span",{style:{fontSize:"11px",color:r.pink,fontFamily:f},children:["\\u2764 ",R.likes?.length||0]}),(0,i.jsxs)("span",{style:{fontSize:"11px",color:r.muted,fontFamily:f},children:["\\u{1F4AC} ",R.comments?.length||0]}),R.github&&(0,i.jsx)("span",{style:{fontSize:"11px",color:r.muted,fontFamily:f},children:"\\u{1F419}"}),R.video&&(0,i.jsx)("span",{style:{fontSize:"11px",color:r.muted,fontFamily:f},children:"\\u25B6"})]})]},R.id))})]})}function j_({currentUser:e,onUpdateUser:t,onLogout:n}){let[a,l]=(0,E.useState)(!1),[o,s]=(0,E.useState)(e.bio||""),[c,u]=(0,E.useState)(e.github||""),[p,v]=(0,E.useState)(!1),[h,b]=(0,E.useState)(e.challengeRequest==="pending"||e.challengeRequest==="approved"),_=Zt[e.role]||r.blue,y=async()=>{v(!0);let{passwordHash:O,password:m,...d}={...e,bio:o,github:c},g=d;await window.storage.set("user:"+e.pseudo.toLowerCase(),JSON.stringify(g),!0),t(g),l(!1),v(!1)},T=async()=>{let{password:O,passwordHash:m,...d}=e,g={...d,challengeRequest:"pending"};await window.storage.set("user:"+e.pseudo.toLowerCase(),JSON.stringify(g),!0),t(g),b(!0)};return(0,i.jsxs)("div",{style:{maxWidth:"600px",margin:"0 auto",animation:"fadeIn .3s ease"},children:[(0,i.jsxs)("div",{style:{background:r.panel,border:\`1px solid \${r.border}\`,borderRadius:"16px",padding:"28px",marginBottom:"16px"},children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"16px",alignItems:"flex-start",marginBottom:"20px"},children:[(0,i.jsxs)("div",{style:{width:"64px",height:"64px",borderRadius:"14px",background:\`linear-gradient(135deg,\${_}44,\${_}22)\`,border:\`2px solid \${_}44\`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",fontFamily:V,fontWeight:900,color:_},children:[e.prenom?.[0]?.toUpperCase()||"?",e.nom?.[0]?.toUpperCase()||""]}),(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsxs)("div",{style:{fontFamily:V,fontWeight:800,fontSize:"20px"},children:[e.prenom," ",(0,i.jsx)("span",{style:{textTransform:"uppercase"},children:e.nom})]}),(0,i.jsxs)("div",{style:{fontSize:"12px",color:r.muted,fontFamily:f,marginTop:"2px"},children:["@",e.pseudo]}),(0,i.jsxs)("div",{style:{display:"flex",gap:"8px",marginTop:"6px",alignItems:"center"},children:[(0,i.jsx)(It,{role:e.role}),(0,i.jsxs)("span",{style:{fontSize:"10px",color:r.muted,fontFamily:f},children:["Membre depuis ",new Date(e.joinDate||Date.now()).toLocaleDateString("fr")]})]})]}),(0,i.jsx)("button",{onClick:()=>l(!a),style:{background:a?r.faint:_+"22",border:\`1px solid \${a?r.border:_+"44"}\`,borderRadius:"7px",padding:"7px 14px",color:a?r.muted:_,fontSize:"11px",fontFamily:f,cursor:"pointer"},children:a?"Annuler":"\\u270F Modifier"})]}),a?(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{marginBottom:"12px"},children:[(0,i.jsx)("div",{style:{fontSize:"10px",color:r.muted,fontFamily:f,marginBottom:"5px",letterSpacing:"1px"},children:"BIO"}),(0,i.jsx)("textarea",{value:o,onChange:O=>s(O.target.value),rows:3,placeholder:"D\\xE9cris-toi en quelques mots...",style:{width:"100%",padding:"10px 12px",background:r.faint,border:\`1px solid \${r.border}\`,borderRadius:"7px",color:r.text,fontSize:"12px",fontFamily:f,outline:"none",resize:"vertical"}})]}),(0,i.jsx)(we,{label:"GITHUB",value:c,onChange:u,placeholder:"https://github.com/monpseudo"}),(0,i.jsx)("button",{onClick:y,disabled:p,style:{padding:"9px 20px",borderRadius:"8px",border:"none",background:p?r.muted:_,color:"#fff",fontSize:"12px",fontFamily:f,fontWeight:700,cursor:"pointer"},children:p?"Sauvegarde...":"\\u{1F4BE} Sauvegarder"})]}):(0,i.jsxs)("div",{children:[o&&(0,i.jsx)("p",{style:{color:r.text,fontSize:"13px",lineHeight:1.6,marginBottom:"10px"},children:o}),c&&(0,i.jsxs)("a",{href:c,target:"_blank",rel:"noopener noreferrer",style:{color:r.cyan,fontSize:"12px",fontFamily:f,textDecoration:"none"},children:["\\u{1F419} ",c]}),!o&&!c&&(0,i.jsx)("p",{style:{color:r.muted,fontSize:"12px",fontFamily:f,fontStyle:"italic"},children:'Clique sur "Modifier" pour compl\\xE9ter ton profil'})]})]}),e.role==="etudiant"&&!e.canAddChallenge&&(0,i.jsxs)("div",{style:{background:r.panel,border:\`1px solid \${r.purple}33\`,borderRadius:"12px",padding:"16px",marginBottom:"16px"},children:[(0,i.jsx)("div",{style:{fontFamily:f,fontSize:"12px",fontWeight:700,color:r.purple,marginBottom:"6px"},children:"\\u26A1 Acc\\xE8s ajout de challenges"}),(0,i.jsx)("p",{style:{fontSize:"12px",color:r.muted,lineHeight:1.5,marginBottom:"12px"},children:"Tu peux demander l'autorisation \\xE0 l'admin pour contribuer en ajoutant tes propres challenges \\xE0 la plateforme."}),e.challengeRequest==="approved"?(0,i.jsx)("span",{style:{fontSize:"12px",color:r.green,fontFamily:f},children:"\\u2705 Acc\\xE8s accord\\xE9 !"}):h||e.challengeRequest==="pending"?(0,i.jsx)("span",{style:{fontSize:"12px",color:r.amber,fontFamily:f},children:"\\u23F3 Demande en attente de validation"}):(0,i.jsx)("button",{onClick:T,style:{padding:"7px 16px",borderRadius:"7px",border:"none",cursor:"pointer",background:r.purple+"22",color:r.purple,fontSize:"12px",fontFamily:f,fontWeight:700,outline:\`1px solid \${r.purple}44\`},children:"\\u{1F511} Demander l'acc\\xE8s"})]}),(0,i.jsx)("button",{onClick:n,style:{width:"100%",padding:"10px",borderRadius:"8px",background:r.red+"11",border:\`1px solid \${r.red}33\`,color:r.red,fontSize:"12px",fontFamily:f,fontWeight:700,cursor:"pointer"},children:"\\u{1F6AA} Se d\\xE9connecter"})]})}function fc(){let[e,t]=(0,E.useState)(null),[n,a]=(0,E.useState)("roadmap"),[l,o]=(0,E.useState)({"m1-1":!0,"m1-2":!0,"m2-1":!0,"m2-2":!0,"m2-3":!0}),[s,c]=(0,E.useState)([]),[u,p]=(0,E.useState)(640),[v]=(0,E.useState)(7),[h,b]=(0,E.useState)(null);(0,E.useEffect)(()=>{(async()=>{try{let B=localStorage.getItem("ros2_user");if(!B)return;let k=JSON.parse(B);t(k);try{let C=await window.storage.get("user:"+k.pseudo.toLowerCase(),!0);if(C){let j=JSON.parse(C.value);if(j.role==="prof"&&j.status==="rejected"){localStorage.removeItem("ros2_user"),t(null);return}t(j),localStorage.setItem("ros2_user",JSON.stringify(j))}}catch{}}catch{}})()},[]);let _=S=>{t(S);try{localStorage.setItem("ros2_user",JSON.stringify(S))}catch{}},y=()=>{t(null);try{localStorage.removeItem("ros2_user")}catch{}a("roadmap")},T=S=>{t(S);try{localStorage.setItem("ros2_user",JSON.stringify(S))}catch{}};if(!e)return(0,i.jsx)(M_,{onLogin:_});let O=(S,B)=>{l[S]||(o(k=>({...k,[S]:!0})),p(k=>k+B))},m=(S,B)=>{s.includes(S)||(c(k=>[...k,S]),p(k=>k+B))},d=S=>{b(S),a("chatbot")},g=e.role==="admin",x=e.role==="prof",N=e.canAddChallenge||x||g,q=[{id:"roadmap",icon:"\\u25C8",label:"Roadmap"},{id:"progress",icon:"\\u25C7",label:"Progression"},{id:"challenges",icon:"\\u26A1",label:"Challenges"},{id:"leaderboard",icon:"\\u{1F3C6}",label:"Leaderboard"},{id:"travaux",icon:"\\u{1F4C2}",label:"Travaux"},{id:"forum",icon:"\\u2753",label:"Forum"},{id:"resources",icon:"\\u{1F4DA}",label:"Ressources"},{id:"chatbot",icon:"\\u{1F916}",label:"ROS-Bot"},...g?[{id:"admin",icon:"\\u2B50",label:"Admin"}]:[],...x?[{id:"prof",icon:"\\u{1F468}\\u200D\\u{1F3EB}",label:"Espace Prof"}]:[],{id:"profil",icon:"\\u{1F464}",label:\`\${e.prenom} \${e.nom}\`}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:\`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: \${r.bg}; color: \${r.text}; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: \${r.panel}; }
        ::-webkit-scrollbar-thumb { background: \${r.border}; border-radius: 99px; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes dot { 0%,80%,100%{transform:scale(.7);opacity:.4} 40%{transform:scale(1.1);opacity:1} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes glow { 0%,100%{opacity:.4} 50%{opacity:1} }
        input::placeholder { color: \${r.muted}; }
      \`}),(0,i.jsxs)("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[(0,i.jsxs)("header",{style:{padding:"0 24px",height:"56px",borderBottom:\`1px solid \${r.border}\`,background:r.panel+"ee",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",gap:"16px",position:"sticky",top:0,zIndex:200},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginRight:"8px"},children:[(0,i.jsx)("div",{style:{width:"32px",height:"32px",borderRadius:"9px",background:"linear-gradient(135deg, #3b82f6, #8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:V,fontWeight:900,fontSize:"16px",color:"#fff",animation:"float 3s ease-in-out infinite"},children:"R"}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{fontFamily:V,fontWeight:800,fontSize:"15px",letterSpacing:"-.3px"},children:["ROS2",(0,i.jsx)("span",{style:{color:r.blue},children:"Academy"})]}),(0,i.jsx)("div",{style:{fontSize:"8px",color:r.muted,fontFamily:f,letterSpacing:"2px"},children:"PLATEFORME \\xC9DU"})]})]}),(0,i.jsx)("nav",{style:{display:"flex",gap:"2px",flex:1},children:q.map(S=>(0,i.jsxs)("button",{onClick:()=>a(S.id),style:{background:n===S.id?(S.id==="admin"?r.amber:S.id==="prof"?r.purple:r.blue)+"18":"transparent",border:\`1px solid \${n===S.id?(S.id==="admin"?r.amber:S.id==="prof"?r.purple:r.blue)+"44":"transparent"}\`,borderRadius:"7px",padding:"5px 12px",color:n===S.id?S.id==="admin"?r.amber:S.id==="prof"?r.purple:r.blue:r.muted,fontSize:"11px",cursor:"pointer",fontFamily:f,display:"flex",alignItems:"center",gap:"5px",transition:"all .15s"},children:[(0,i.jsx)("span",{children:S.icon}),(0,i.jsx)("span",{children:S.label}),S.id==="chatbot"&&(0,i.jsx)("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:r.green,display:"inline-block",animation:"glow 2s ease infinite"}})]},S.id))}),(0,i.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"5px",padding:"4px 10px",background:r.red+"11",border:\`1px solid \${r.red}33\`,borderRadius:"6px"},children:[(0,i.jsx)("span",{style:{fontSize:"12px"},children:"\\u{1F525}"}),(0,i.jsxs)("span",{style:{fontSize:"11px",color:r.red,fontFamily:f,fontWeight:700},children:[v,"j"]})]}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"5px",padding:"4px 10px",background:r.amber+"11",border:\`1px solid \${r.amber}33\`,borderRadius:"6px"},children:[(0,i.jsx)("span",{style:{fontSize:"11px"},children:"\\u26A1"}),(0,i.jsxs)("span",{style:{fontSize:"11px",color:r.amber,fontFamily:f,fontWeight:700},children:[u.toLocaleString()," XP"]})]})]})]}),(0,i.jsx)("main",{style:{flex:1,padding:"24px",maxWidth:"1280px",margin:"0 auto",width:"100%"},children:(0,i.jsxs)("div",{style:{animation:"fadeIn .3s ease"},children:[n==="roadmap"&&(0,i.jsx)(z_,{progress:l,onModuleDone:O,totalXP:u}),n==="progress"&&(0,i.jsx)(T_,{progress:l,totalXP:u,streak:v}),n==="challenges"&&(0,i.jsx)(R_,{completedChallenges:s,onCompleteChallenge:m,onAskBot:d}),n==="leaderboard"&&(0,i.jsx)(E_,{totalXP:u,completedChallenges:s,progress:l}),n==="resources"&&(0,i.jsx)(A_,{}),n==="chatbot"&&(0,i.jsx)(D_,{initialMessage:h,clearInitial:()=>b(null)}),n==="travaux"&&(0,i.jsx)(q_,{currentUser:e}),n==="forum"&&(0,i.jsx)(w_,{currentUser:e}),n==="admin"&&g&&(0,i.jsx)(B_,{currentUser:e}),n==="prof"&&x&&(0,i.jsx)(L_,{currentUser:e}),n==="profil"&&(0,i.jsx)(j_,{currentUser:e,onUpdateUser:T,onLogout:y})]},n)}),(0,i.jsxs)("footer",{style:{padding:"10px 24px",borderTop:\`1px solid \${r.border}\`,display:"flex",justifyContent:"space-between",fontSize:"10px",color:r.muted,fontFamily:f},children:[(0,i.jsx)("span",{children:"ROS2Academy \\u2014 Jazzy Jalisco \\u{1F3B7}"}),(0,i.jsxs)("span",{children:["Open Robotics \\u2022 ",(0,i.jsx)("a",{href:"https://ros.org",target:"_blank",rel:"noopener noreferrer",style:{color:r.blue},children:"ros.org"})]})]})]})]})}var pm=An(Xl()),U_=(0,dm.createRoot)(document.getElementById("root"));U_.render((0,pm.jsx)(fc,{}));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/

<\/script>
</body>
</html>
`;export{e as default};
