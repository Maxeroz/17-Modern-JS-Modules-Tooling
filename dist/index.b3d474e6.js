var t,r,e,n,o,i,a,u,c,f,l,s,p,v,h,y,g=globalThis,d={},m=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
d=m("object"==typeof globalThis&&globalThis)||m("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
m("object"==typeof self&&self)||m("object"==typeof g&&g)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||d||Function("return this")();var b={},w={};w=d;var S={},O={},j={},E={};j=!(E=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var L=Function.prototype,x=L.call,P=j&&L.bind.bind(x,x);O=j?P:function(t){return function(){return x.apply(t,arguments)}};var T={},_={},I={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
I=function(t){return null==t};var M=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
_=function(t){if(I(t))throw new M("Can't call method on "+t);return t};var k=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
T=function(t){return k(_(t))};var F=O({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
S=Object.hasOwn||function(t,r){return F(T(t),r)};var D={},N={},C={};C=!1;var G={},A={},z=Object.defineProperty;A=function(t,r){try{z(d,t,{value:r,configurable:!0,writable:!0})}catch(e){d[t]=r}return r};var R="__core-js_shared__";G=d[R]||A(R,{}),(N=function(t,r){return G[t]||(G[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.33.1",mode:C?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.1/LICENSE",source:"https://github.com/zloirock/core-js"});var B={},H=0,W=Math.random(),Y=O(1..toString);B=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Y(++H+W,36)};var q={},K={},V={};V="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var $=d.process,J=d.Deno,Q=$&&$.versions||J&&J.version,U=Q&&Q.v8;U&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(n=(e=U.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!n&&V&&(!(e=V.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=V.match(/Chrome\/(\d+)/))&&(n=+e[1]),K=n;var X=d.String;// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
q=!!Object.getOwnPropertySymbols&&!E(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!X(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&K&&K<41});var Z={};Z=q&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tt=d.Symbol,tr=N("wks"),te=Z?tt.for||tt:tt&&tt.withoutSetter||B;r=D=function(t){return S(tr,t)||(tr[t]=q&&S(tt,t)?tt[t]:te("Symbol."+t)),tr[t]};var tn={};// Detect IE8's incomplete defineProperty implementation
tn=!E(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var to={},ti={},ta={},tu={},tc={},tf="object"==typeof document&&document.all,tl=(tc={all:tf,IS_HTMLDDA:void 0===tf&&void 0!==tf}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
tu=tc.IS_HTMLDDA?function(t){return"function"==typeof t||t===tl}:function(t){return"function"==typeof t};var ts=tc.all;ta=tc.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:tu(t)||t===ts}:function(t){return"object"==typeof t?null!==t:tu(t)};var tp=d.document,tv=ta(tp)&&ta(tp.createElement);ti=function(t){return tv?tp.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
to=!tn&&!E(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(ti("div"),"a",{get:function(){return 7}}).a});var th={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
th=tn&&E(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var ty={},tg=String,td=TypeError;// `Assert: Type(argument) is Object`
ty=function(t){if(ta(t))return t;throw new td(tg(t)+" is not an object")};var tm={},tb={},tw={},tS=Function.prototype.call;tw=j?tS.bind(tS):function(){return tS.apply(tS,arguments)};var tO={},tj={};tj=function(t,r){var e;return arguments.length<2?(e=d[t],tu(e)?e:void 0):d[t]&&d[t][r]};var tE={};tE=O({}.isPrototypeOf);var tL=Object;tO=Z?function(t){return"symbol"==typeof t}:function(t){var r=tj("Symbol");return tu(r)&&tE(r.prototype,tL(t))};var tx={},tP={},tT={},t_=String;tT=function(t){try{return t_(t)}catch(t){return"Object"}};var tI=TypeError;// `Assert: IsCallable(argument) is true`
tP=function(t){if(tu(t))return t;throw new tI(tT(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
tx=function(t,r){var e=t[r];return I(e)?void 0:tP(e)};var tM={},tk=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
tM=function(t,r){var e,n;if("string"===r&&tu(e=t.toString)&&!ta(n=tw(e,t))||tu(e=t.valueOf)&&!ta(n=tw(e,t))||"string"!==r&&tu(e=t.toString)&&!ta(n=tw(e,t)))return n;throw new tk("Can't convert object to primitive value")};var tF=TypeError,tD=D("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
tb=function(t,r){if(!ta(t)||tO(t))return t;var e,n=tx(t,tD);if(n){if(void 0===r&&(r="default"),e=tw(n,t,r),!ta(e)||tO(e))return e;throw new tF("Can't convert object to primitive value")}return void 0===r&&(r="number"),tM(t,r)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
tm=function(t){var r=tb(t,"string");return tO(r)?r:r+""};var tN=TypeError,tC=Object.defineProperty,tG=Object.getOwnPropertyDescriptor,tA="enumerable",tz="configurable",tR="writable";o=tn?th?function(t,r,e){if(ty(t),r=tm(r),ty(e),"function"==typeof t&&"prototype"===r&&"value"in e&&tR in e&&!e[tR]){var n=tG(t,r);n&&n[tR]&&(t[r]=e.value,e={configurable:tz in e?e[tz]:n[tz],enumerable:tA in e?e[tA]:n[tA],writable:!1})}return tC(t,r,e)}:tC:function(t,r,e){if(ty(t),r=tm(r),ty(e),to)try{return tC(t,r,e)}catch(t){}if("get"in e||"set"in e)throw new tN("Accessors not supported");return"value"in e&&(t[r]=e.value),t},b=function(t){var e=w.Symbol||(w.Symbol={});S(e,t)||o(e,t,{value:r(t)})};var tB={}.propertyIsEnumerable,tH=Object.getOwnPropertyDescriptor;a=tH&&!tB.call({1:2},1)?function(t){var r=tH(this,t);return!!r&&r.enumerable}:tB;var tW={};tW=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}};var tY={},tq={},tK={},tV=O({}.toString),t$=O("".slice);tK=function(t){return t$(tV(t),8,-1)};var tJ=Object,tQ=O("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
tq=E(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!tJ("z").propertyIsEnumerable(0)})?function(t){return"String"===tK(t)?tQ(t,""):tJ(t)}:tJ,tY=function(t){return tq(_(t))};// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var tU=Object.getOwnPropertyDescriptor;i=tn?tU:function(t,r){if(t=tY(t),r=tm(r),to)try{return tU(t,r)}catch(t){}if(S(t,r))return tW(!tw(a,t,r),t[r])};var tX=d.Symbol;if(// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-explicit-resource-management
b("dispose"),tX){var tZ=i(tX,"dispose");// workaround of NodeJS 20.4 bug
// https://github.com/nodejs/node/issues/48699
// and incorrect descriptor from some transpilers and userland helpers
tZ.enumerable&&tZ.configurable&&tZ.writable&&o(tX,"dispose",{value:tZ.value,enumerable:!1,configurable:!1,writable:!1})}var t0={},t1={};t1=tn?function(t,r,e){return o(t,r,tW(1,e))}:function(t,r,e){return t[r]=e,t};var t2={},t3={},t4=Function.prototype,t7=tn&&Object.getOwnPropertyDescriptor,t9=S(t4,"name")&&(!tn||tn&&t7(t4,"name").configurable),t8={},t5=O(Function.toString);tu(G.inspectSource)||(G.inspectSource=function(t){return t5(t)}),t8=G.inspectSource;var t6={},rt={},rr=d.WeakMap;rt=tu(rr)&&/native code/.test(String(rr));var re={},rn=N("keys");re=function(t){return rn[t]||(rn[t]=B(t))};var ro={};ro={};var ri="Object already initialized",ra=d.TypeError,ru=d.WeakMap;if(rt||G.state){var rc=G.state||(G.state=new ru);/* eslint-disable no-self-assign -- prototype methods protection */rc.get=rc.get,rc.has=rc.has,rc.set=rc.set,/* eslint-enable no-self-assign -- prototype methods protection */u=function(t,r){if(rc.has(t))throw new ra(ri);return r.facade=t,rc.set(t,r),r},c=function(t){return rc.get(t)||{}},f=function(t){return rc.has(t)}}else{var rf=re("state");ro[rf]=!0,u=function(t,r){if(S(t,rf))throw new ra(ri);return r.facade=t,t1(t,rf,r),r},c=function(t){return S(t,rf)?t[rf]:{}},f=function(t){return S(t,rf)}}var rl=(t6={set:u,get:c,has:f,enforce:function(t){return f(t)?c(t):u(t,{})},getterFor:function(t){return function(r){var e;if(!ta(r)||(e=c(r)).type!==t)throw new ra("Incompatible receiver, "+t+" required");return e}}}).enforce,rs=t6.get,rp=String,rv=Object.defineProperty,rh=O("".slice),ry=O("".replace),rg=O([].join),rd=tn&&!E(function(){return 8!==rv(function(){},"length",{value:8}).length}),rm=String(String).split("String"),rb=t3=function(t,r,e){"Symbol("===rh(rp(r),0,7)&&(r="["+ry(rp(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!S(t,"name")||t9&&t.name!==r)&&(tn?rv(t,"name",{value:r,configurable:!0}):t.name=r),rd&&e&&S(e,"arity")&&t.length!==e.arity&&rv(t,"length",{value:e.arity});try{e&&S(e,"constructor")&&e.constructor?tn&&rv(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=rl(t);return S(n,"source")||(n.source=rg(rm,"string"==typeof r?r:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=rb(function(){return tu(this)&&rs(this).source||t8(this)},"toString"),t2=function(t,r,e,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:r;if(tu(e)&&t3(e,a,n),n.global)i?t[r]=e:A(r,e);else{try{n.unsafe?t[r]&&(i=!0):delete t[r]}catch(t){}i?t[r]=e:o(t,r,{value:e,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var rw={},rS={},rO={},rj={},rE={},rL={},rx=Math.ceil,rP=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
rL=Math.trunc||function(t){var r=+t;return(r>0?rP:rx)(r)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
rE=function(t){var r=+t;// eslint-disable-next-line no-self-compare -- NaN check
return r!=r||0===r?0:rL(r)};var rT=Math.max,r_=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
rj=function(t,r){var e=rE(t);return e<0?rT(e+r,0):r_(e,r)};var rI={},rM={},rk=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
rM=function(t){return t>0?rk(rE(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
rI=function(t){return rM(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var rF=function(t){return function(r,e,n){var o,i=tY(r),a=rI(i),u=rj(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&e!=e){for(;a>u;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=i[u++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>u;u++)if((t||u in i)&&i[u]===e)return t||u||0;return!t&&-1}},rD={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:rF(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:rF(!1)}.indexOf,rN=O([].push);rO=function(t,r){var e,n=tY(t),o=0,i=[];for(e in n)!S(ro,e)&&S(n,e)&&rN(i,e);// Don't enum bug & hidden keys
for(;r.length>o;)S(n,e=r[o++])&&(~rD(i,e)||rN(i,e));return i};var rC=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(t){return rO(t,rC)},s=Object.getOwnPropertySymbols;var rG=O([].concat);// all object keys, includes non-enumerable and symbols
rS=tj("Reflect","ownKeys")||function(t){var r=l(ty(t));return s?rG(r,s(t)):r},rw=function(t,r,e){for(var n=rS(r),a=0;a<n.length;a++){var u=n[a];S(t,u)||e&&S(e,u)||o(t,u,i(r,u))}};var rA={},rz=/#|\.prototype\./,rR=function(t,r){var e=rH[rB(t)];return e===rY||e!==rW&&(tu(r)?E(r):!!r)},rB=rR.normalize=function(t){return String(t).replace(rz,".").toLowerCase()},rH=rR.data={},rW=rR.NATIVE="N",rY=rR.POLYFILL="P";rA=rR,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/t0=function(t,r){var e,n,o,a,u,c=t.target,f=t.global,l=t.stat;if(e=f?d:l?d[c]||A(c,{}):(d[c]||{}).prototype)for(n in r){// contained in target
if(a=r[n],o=t.dontCallGetSet?(u=i(e,n))&&u.value:e[n],!rA(f?n:c+(l?".":"#")+n,t.forced)&&void 0!==o){if(typeof a==typeof o)continue;rw(a,o)}(t.sham||o&&o.sham)&&t1(a,"sham",!0),t2(e,n,a,t)}};var rq={},rK={},rV=Function.prototype,r$=rV.apply,rJ=rV.call;// eslint-disable-next-line es/no-reflect -- safe
rK="object"==typeof Reflect&&Reflect.apply||(j?rJ.bind(r$):function(){return rJ.apply(r$,arguments)});var rQ={},rU={},rX=(rU=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===tK(t))return O(t)})(rU.bind);// optional / simple context binding
rQ=function(t,r){return tP(t),void 0===r?t:j?rX(t,r):function(){return t.apply(r,arguments)}};var rZ={};rZ=tj("document","documentElement");var r0={};r0=O([].slice);var r1={},r2=TypeError;r1=function(t,r){if(t<r)throw new r2("Not enough arguments");return t};var r3={};// eslint-disable-next-line redos/no-vulnerable -- safe
r3=/(?:ipad|iphone|ipod).*applewebkit/i.test(V);var r4={};r4="process"===tK(d.process);var r7=d.setImmediate,r9=d.clearImmediate,r8=d.process,r5=d.Dispatch,r6=d.Function,et=d.MessageChannel,er=d.String,ee=0,en={},eo="onreadystatechange";E(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
p=d.location});var ei=function(t){if(S(en,t)){var r=en[t];delete en[t],r()}},ea=function(t){return function(){ei(t)}},eu=function(t){ei(t.data)},ec=function(t){// old engines have not location.origin
d.postMessage(er(t),p.protocol+"//"+p.host)};r7&&r9||(r7=function(t){r1(arguments.length,1);var r=tu(t)?t:r6(t),e=r0(arguments,1);return en[++ee]=function(){rK(r,void 0,e)},v(ee),ee},r9=function(t){delete en[t]},r4?v=function(t){r8.nextTick(ea(t))}:r5&&r5.now?v=function(t){r5.now(ea(t))}:et&&!r3?(y=(h=new et).port2,h.port1.onmessage=eu,v=rQ(y.postMessage,y)):d.addEventListener&&tu(d.postMessage)&&!d.importScripts&&p&&"file:"!==p.protocol&&!E(ec)?(v=ec,d.addEventListener("message",eu,!1)):v=eo in ti("script")?function(t){rZ.appendChild(ti("script"))[eo]=function(){rZ.removeChild(this),ei(t)}}:function(t){setTimeout(ea(t),0)});var ef=(rq={set:r7,clear:r9}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
t0({global:!0,bind:!0,enumerable:!0,forced:d.clearImmediate!==ef},{clearImmediate:ef});var el=rq.set,es={},ep={};/* global Bun -- Deno case */ep="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var ev=d.Function,eh=/MSIE .\./.test(V)||ep&&((t=d.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
es=function(t,r){var e=r?2:1;return eh?function(n,o/* , ...arguments */){var i=r1(arguments.length,1)>e,a=tu(n)?n:ev(n),u=i?r0(arguments,e):[],c=i?function(){rK(a,this,u)}:a;return r?t(c,o):t(c)}:t};// https://github.com/oven-sh/bun/issues/1633
var ey=d.setImmediate?es(el,!1):el;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
t0({global:!0,bind:!0,enumerable:!0,forced:d.setImmediate!==ey},{setImmediate:ey});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function l(t,e,n,i){var a,u,c=Object.create((e&&e.prototype instanceof g?e:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(c,"_invoke",{value:(a=new P(i||[]),u=p,function(e,o){if(u===v)throw Error("Generator is already running");if(u===h){if("throw"===e)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:r,done:!0}}for(a.method=e,a.arg=o;;){var i=a.delegate;if(i){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(e,n){var o=n.method,i=e.iterator[o];if(i===r)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&e.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=r,t(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),y);var a=s(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var u=a.arg;return u?u.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[e.resultName]=u.value,// Resume execution at the desired location (see delegateYield).
n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,y):u:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,y)}(i,a);if(c){if(c===y)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===p)throw u=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=v;var f=s(t,n,a);if("normal"===f.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
u=a.done?h:"suspendedYield",f.arg===y)continue;return{value:f.arg,done:a.done}}"throw"===f.type&&(u=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=f.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",v="executing",h="completed",y={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function d(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};f(b,a,function(){return this});var w=Object.getPrototypeOf,S=w&&w(w(T([])));S&&S!==e&&n.call(S,a)&&// of the polyfill.
(b=S);var O=m.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function j(t){["next","throw","return"].forEach(function(r){f(t,r,function(t){return this._invoke(r,t)})})}function E(t,r){var e;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,u){var c=s(t[o],t,i);if("throw"===c.type)u(c.arg);else{var f=c.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,u)},function(t){e("throw",t,a,u)}):r.resolve(l).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
f.value=t,a(f)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return e("throw",t,a,u)})}}(o,i,e,a)})}return e=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
e?e.then(a,// invocations of the iterator.
a):a()}})}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function x(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw TypeError(typeof t+" is not iterable")}return d.prototype=m,o(O,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:d,configurable:!0}),d.displayName=f(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},j(E.prototype),f(E.prototype,u,function(){return this}),t.AsyncIterator=E,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new E(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(t){return t.done?t.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
j(O),f(O,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
f(O,a,function(){return this}),f(O,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(f){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=r,i)?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),x(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;x(e)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=r),y}},t}({});try{regeneratorRuntime=eg}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=eg:Function("r","regeneratorRuntime = r")(eg)}console.log("Importing module");const ed=new class{constructor(t){this.name=t}}("Maksim");console.log(ed);//# sourceMappingURL=index.b3d474e6.js.map

//# sourceMappingURL=index.b3d474e6.js.map
