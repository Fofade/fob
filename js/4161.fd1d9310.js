(self.webpackChunkfob=self.webpackChunkfob||[]).push([[4161],{24019:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},90260:function(e,t,i){"use strict";var n,o,s,r=i(24019),a=i(19781),l=i(17854),h=i(60614),d=i(70111),c=i(92597),u=i(70648),g=i(66330),p=i(68880),m=i(31320),f=i(3070).f,_=i(47976),C=i(79518),E=i(27674),S=i(5112),v=i(69711),T=l.Int8Array,b=T&&T.prototype,N=l.Uint8ClampedArray,L=N&&N.prototype,R=T&&C(T),A=b&&C(b),I=Object.prototype,w=l.TypeError,y=S("toStringTag"),O=v("TYPED_ARRAY_TAG"),D=v("TYPED_ARRAY_CONSTRUCTOR"),M=r&&!!E&&"Opera"!==u(l.opera),k=!1,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},x={BigInt64Array:8,BigUint64Array:8},F=function(e){if(!d(e))return!1;var t=u(e);return c(P,t)||c(x,t)};for(n in P)(s=(o=l[n])&&o.prototype)?p(s,D,o):M=!1;for(n in x)(s=(o=l[n])&&o.prototype)&&p(s,D,o);if((!M||!h(R)||R===Function.prototype)&&(R=function(){throw w("Incorrect invocation")},M))for(n in P)l[n]&&E(l[n],R);if((!M||!A||A===I)&&(A=R.prototype,M))for(n in P)l[n]&&E(l[n].prototype,A);if(M&&C(L)!==A&&E(L,A),a&&!c(A,y))for(n in k=!0,f(A,y,{get:function(){return d(this)?this[O]:void 0}}),P)l[n]&&p(l[n],O,n);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_CONSTRUCTOR:D,TYPED_ARRAY_TAG:k&&O,aTypedArray:function(e){if(F(e))return e;throw w("Target is not a typed array")},aTypedArrayConstructor:function(e){if(h(e)&&(!E||_(R,e)))return e;throw w(g(e)+" is not a typed array constructor")},exportTypedArrayMethod:function(e,t,i,n){if(a){if(i)for(var o in P){var s=l[o];if(s&&c(s.prototype,e))try{delete s.prototype[e]}catch(r){try{s.prototype[e]=t}catch(h){}}}A[e]&&!i||m(A,e,i?t:M&&b[e]||t,n)}},exportTypedArrayStaticMethod:function(e,t,i){var n,o;if(a){if(E){if(i)for(n in P)if((o=l[n])&&c(o,e))try{delete o[e]}catch(s){}if(R[e]&&!i)return;try{return m(R,e,i?t:M&&R[e]||t)}catch(s){}}for(n in P)!(o=l[n])||o[e]&&!i||m(o,e,t)}},isView:function(e){if(!d(e))return!1;var t=u(e);return"DataView"===t||c(P,t)||c(x,t)},isTypedArray:F,TypedArray:R,TypedArrayPrototype:A}},49920:function(e,t,i){var n=i(47293);e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},79518:function(e,t,i){var n=i(17854),o=i(92597),s=i(60614),r=i(47908),a=i(6200),l=i(49920),h=a("IE_PROTO"),d=n.Object,c=d.prototype;e.exports=l?d.getPrototypeOf:function(e){var t=r(e);if(o(t,h))return t[h];var i=t.constructor;return s(i)&&t instanceof i?i.prototype:t instanceof d?c:null}},84590:function(e,t,i){var n=i(17854),o=i(73002),s=n.RangeError;e.exports=function(e,t){var i=o(e);if(i%t)throw s("Wrong offset");return i}},73002:function(e,t,i){var n=i(17854),o=i(19303),s=n.RangeError;e.exports=function(e){var t=o(e);if(t<0)throw s("The argument can't be less than 0");return t}},3462:function(e,t,i){"use strict";var n=i(17854),o=i(46916),s=i(90260),r=i(26244),a=i(84590),l=i(47908),h=i(47293),d=n.RangeError,c=n.Int8Array,u=c&&c.prototype,g=u&&u.set,p=s.aTypedArray,m=s.exportTypedArrayMethod,f=!h((function(){var e=new Uint8ClampedArray(2);return o(g,e,{length:1,0:3},1),3!==e[1]})),_=f&&s.NATIVE_ARRAY_BUFFER_VIEWS&&h((function(){var e=new c(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));m("set",(function(e){p(this);var t=a(arguments.length>1?arguments[1]:void 0,1),i=l(e);if(f)return o(g,this,i,t);var n=this.length,s=r(i),h=0;if(s+t>n)throw d("Wrong length");for(;h<s;)this[t+h]=i[h++]}),!f||_)},90229:function(e,t,i){"use strict";i.r(t),i.d(t,{PixelRatio:function(){return h},addMatchMediaChangeListener:function(){return l},getZoomFactor:function(){return d},isAndroid:function(){return C},isChrome:function(){return p},isElectron:function(){return _},isFirefox:function(){return u},isSafari:function(){return m},isStandalone:function(){return S},isWebKit:function(){return g},isWebkitWebView:function(){return f}});var n=i(49266),o=i(55662);class s{constructor(){this._zoomFactor=1}getZoomFactor(){return this._zoomFactor}}s.INSTANCE=new s;class r extends o.JT{constructor(){super(),this._onDidChange=this._register(new n.Q5),this.onDidChange=this._onDidChange.event,this._listener=()=>this._handleChange(!0),this._mediaQueryList=null,this._handleChange(!1)}_handleChange(e){var t;null===(t=this._mediaQueryList)||void 0===t||t.removeEventListener("change",this._listener),this._mediaQueryList=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this._mediaQueryList.addEventListener("change",this._listener),e&&this._onDidChange.fire()}}class a extends o.JT{constructor(){super(),this._onDidChange=this._register(new n.Q5),this.onDidChange=this._onDidChange.event,this._value=this._getPixelRatio();const e=this._register(new r);this._register(e.onDidChange((()=>{this._value=this._getPixelRatio(),this._onDidChange.fire(this._value)})))}get value(){return this._value}_getPixelRatio(){const e=document.createElement("canvas").getContext("2d");return(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1)}}function l(e,t){"string"==typeof e&&(e=window.matchMedia(e)),e.addEventListener("change",t)}const h=new class{constructor(){this._pixelRatioMonitor=null}_getOrCreatePixelRatioMonitor(){return this._pixelRatioMonitor||(this._pixelRatioMonitor=(0,o.dk)(new a)),this._pixelRatioMonitor}get value(){return this._getOrCreatePixelRatioMonitor().value}get onDidChange(){return this._getOrCreatePixelRatioMonitor().onDidChange}};function d(){return s.INSTANCE.getZoomFactor()}const c=navigator.userAgent,u=c.indexOf("Firefox")>=0,g=c.indexOf("AppleWebKit")>=0,p=c.indexOf("Chrome")>=0,m=!p&&c.indexOf("Safari")>=0,f=!p&&!m&&g,_=c.indexOf("Electron/")>=0,C=c.indexOf("Android")>=0;let E=!1;if(window.matchMedia){const e=window.matchMedia("(display-mode: standalone)");E=e.matches,l(e,(({matches:e})=>{E=e}))}function S(){return E}},54436:function(e,t,i){"use strict";i.d(t,{D:function(){return s}});var n=i(90229),o=i(67868);const s={clipboard:{writeText:o.tY||document.queryCommandSupported&&document.queryCommandSupported("copy")||!!(navigator&&navigator.clipboard&&navigator.clipboard.writeText),readText:o.tY||!!(navigator&&navigator.clipboard&&navigator.clipboard.readText)},keyboard:o.tY||n.isStandalone()?0:navigator.keyboard||n.isSafari?1:2,touch:"ontouchstart"in window||navigator.maxTouchPoints>0,pointerEvents:window.PointerEvent&&("ontouchstart"in window||window.navigator.maxTouchPoints>0||navigator.maxTouchPoints>0)}},84240:function(e,t,i){"use strict";i.d(t,{P:function(){return o},g:function(){return n}});const n={RESOURCES:"ResourceURLs",DOWNLOAD_URL:"DownloadURL",FILES:"Files",TEXT:i(44132).v.text},o={CurrentDragAndDropData:void 0}},94081:function(e,t,i){"use strict";i.d(t,{$:function(){return he},$Z:function(){return de},Ay:function(){return G},Ce:function(){return oe},Cp:function(){return ce},D6:function(){return R},DI:function(){return M},Dx:function(){return L},FK:function(){return P},Fx:function(){return U},GQ:function(){return E},H$:function(){return ue},I8:function(){return D},IC:function(){return S},If:function(){return x},OO:function(){return W},PO:function(){return g},R3:function(){return ne},Re:function(){return q},Ro:function(){return I},Uh:function(){return ge},Uw:function(){return p},V3:function(){return pe},_0:function(){return ee},_F:function(){return Ce},_h:function(){return _e},_q:function(){return Ee},dS:function(){return K},dp:function(){return y},eg:function(){return Se},fk:function(){return j},go:function(){return ie},i:function(){return O},jL:function(){return T},jg:function(){return B},jt:function(){return me},lI:function(){return v},mc:function(){return se},mu:function(){return C},nm:function(){return f},tw:function(){return Q},uN:function(){return X},uU:function(){return H},vL:function(){return J},vY:function(){return z},w:function(){return k},wY:function(){return fe},wn:function(){return F},xQ:function(){return w},zB:function(){return Z}});i(21703);var n=i(90229),o=i(54436),s=i(44376),r=i(99238),a=i(13629),l=i(49266),h=i(79524),d=i(55662),c=i(16642),u=i(67868);function g(e){for(;e.firstChild;)e.firstChild.remove()}function p(e){var t;return null!==(t=null==e?void 0:e.isConnected)&&void 0!==t&&t}class m{constructor(e,t,i,n){this._node=e,this._type=t,this._handler=i,this._options=n||!1,this._node.addEventListener(this._type,this._handler,this._options)}dispose(){this._handler&&(this._node.removeEventListener(this._type,this._handler,this._options),this._node=null,this._handler=null)}}function f(e,t,i,n){return new m(e,t,i,n)}function _(e){return function(t){return e(new r.n(t))}}const C=function(e,t,i,n){let o=i;return"click"===t||"mousedown"===t?o=_(i):"keydown"!==t&&"keypress"!==t&&"keyup"!==t||(o=function(e){return function(t){return e(new s.y(t))}}(i)),f(e,t,o,n)},E=function(e,t,i){return function(e,t,i){return f(e,u.gn&&o.D.pointerEvents?Q.POINTER_DOWN:Q.MOUSE_DOWN,t,i)}(e,_(t),i)};function S(e,t,i){let n=null;const o=e=>s.fire(e),s=new l.Q5({onFirstListenerAdd:()=>{n||(n=new m(e,t,o,i))},onLastListenerRemove:()=>{n&&(n.dispose(),n=null)}});return s}let v,T,b=null;class N{constructor(e,t=0){this._runner=e,this.priority=t,this._canceled=!1}dispose(){this._canceled=!0}execute(){if(!this._canceled)try{this._runner()}catch(e){(0,a.dL)(e)}}static sort(e,t){return t.priority-e.priority}}function L(e){return document.defaultView.getComputedStyle(e,null)}function R(e){if(e!==document.body)return new I(e.clientWidth,e.clientHeight);if(u.gn&&window.visualViewport)return new I(window.visualViewport.width,window.visualViewport.height);if(window.innerWidth&&window.innerHeight)return new I(window.innerWidth,window.innerHeight);if(document.body&&document.body.clientWidth&&document.body.clientHeight)return new I(document.body.clientWidth,document.body.clientHeight);if(document.documentElement&&document.documentElement.clientWidth&&document.documentElement.clientHeight)return new I(document.documentElement.clientWidth,document.documentElement.clientHeight);throw new Error("Unable to figure out browser width and height")}!function(){let e=[],t=null,i=!1,n=!1;const o=()=>{for(i=!1,t=e,e=[],n=!0;t.length>0;){t.sort(N.sort);t.shift().execute()}n=!1};T=(t,n=0)=>{const s=new N(t,n);return e.push(s),i||(i=!0,function(e){if(!b){const e=e=>setTimeout((()=>e((new Date).getTime())),0);b=self.requestAnimationFrame||self.msRequestAnimationFrame||self.webkitRequestAnimationFrame||self.mozRequestAnimationFrame||self.oRequestAnimationFrame||e}b.call(self,e)}(o)),s},v=(e,i)=>{if(n){const n=new N(e,i);return t.push(n),n}return T(e,i)}}();class A{static convertToPixels(e,t){return parseFloat(t)||0}static getDimension(e,t,i){const n=L(e);let o="0";return n&&(o=n.getPropertyValue?n.getPropertyValue(t):n.getAttribute(i)),A.convertToPixels(e,o)}static getBorderLeftWidth(e){return A.getDimension(e,"border-left-width","borderLeftWidth")}static getBorderRightWidth(e){return A.getDimension(e,"border-right-width","borderRightWidth")}static getBorderTopWidth(e){return A.getDimension(e,"border-top-width","borderTopWidth")}static getBorderBottomWidth(e){return A.getDimension(e,"border-bottom-width","borderBottomWidth")}static getPaddingLeft(e){return A.getDimension(e,"padding-left","paddingLeft")}static getPaddingRight(e){return A.getDimension(e,"padding-right","paddingRight")}static getPaddingTop(e){return A.getDimension(e,"padding-top","paddingTop")}static getPaddingBottom(e){return A.getDimension(e,"padding-bottom","paddingBottom")}static getMarginLeft(e){return A.getDimension(e,"margin-left","marginLeft")}static getMarginTop(e){return A.getDimension(e,"margin-top","marginTop")}static getMarginRight(e){return A.getDimension(e,"margin-right","marginRight")}static getMarginBottom(e){return A.getDimension(e,"margin-bottom","marginBottom")}}class I{constructor(e,t){this.width=e,this.height=t}with(e=this.width,t=this.height){return e!==this.width||t!==this.height?new I(e,t):this}static is(e){return"object"==typeof e&&"number"==typeof e.height&&"number"==typeof e.width}static lift(e){return e instanceof I?e:new I(e.width,e.height)}static equals(e,t){return e===t||!(!e||!t)&&(e.width===t.width&&e.height===t.height)}}function w(e){let t=e.offsetParent,i=e.offsetTop,n=e.offsetLeft;for(;null!==(e=e.parentNode)&&e!==document.body&&e!==document.documentElement;){i-=e.scrollTop;const o=V(e)?null:L(e);o&&(n-="rtl"!==o.direction?e.scrollLeft:-e.scrollLeft),e===t&&(n+=A.getBorderLeftWidth(e),i+=A.getBorderTopWidth(e),i+=e.offsetTop,n+=e.offsetLeft,t=e.offsetParent)}return{left:n,top:i}}function y(e,t,i){"number"==typeof t&&(e.style.width=`${t}px`),"number"==typeof i&&(e.style.height=`${i}px`)}function O(e){const t=e.getBoundingClientRect();return{left:t.left+M.scrollX,top:t.top+M.scrollY,width:t.width,height:t.height}}function D(e){let t=e,i=1;do{const e=L(t).zoom;null!=e&&"1"!==e&&(i*=e),t=t.parentElement}while(null!==t&&t!==document.documentElement);return i}I.None=new I(0,0);const M=new class{get scrollX(){return"number"==typeof window.scrollX?window.scrollX:document.body.scrollLeft+document.documentElement.scrollLeft}get scrollY(){return"number"==typeof window.scrollY?window.scrollY:document.body.scrollTop+document.documentElement.scrollTop}};function k(e){const t=A.getMarginLeft(e)+A.getMarginRight(e);return e.offsetWidth+t}function P(e){const t=A.getBorderLeftWidth(e)+A.getBorderRightWidth(e),i=A.getPaddingLeft(e)+A.getPaddingRight(e);return e.offsetWidth-t-i}function x(e){const t=A.getBorderTopWidth(e)+A.getBorderBottomWidth(e),i=A.getPaddingTop(e)+A.getPaddingBottom(e);return e.offsetHeight-t-i}function F(e){const t=A.getMarginTop(e)+A.getMarginBottom(e);return e.offsetHeight+t}function B(e,t){for(;e;){if(e===t)return!0;e=e.parentNode}return!1}function U(e,t,i){for(;e&&e.nodeType===e.ELEMENT_NODE;){if(e.classList.contains(t))return e;if(i)if("string"==typeof i){if(e.classList.contains(i))return null}else if(e===i)return null;e=e.parentNode}return null}function H(e,t,i){return!!U(e,t,i)}function V(e){return e&&!!e.host&&!!e.mode}function W(e){return!!G(e)}function G(e){for(;e.parentNode;){if(e===document.body)return null;e=e.parentNode}return V(e)?e:null}function z(){let e=document.activeElement;for(;null==e?void 0:e.shadowRoot;)e=e.shadowRoot.activeElement;return e}function K(e=document.getElementsByTagName("head")[0]){const t=document.createElement("style");return t.type="text/css",t.media="screen",e.appendChild(t),t}let Y=null;function $(){return Y||(Y=K()),Y}function j(e,t,i=$()){i&&t&&i.sheet.insertRule(e+"{"+t+"}",0)}function X(e,t=$()){if(!t)return;const i=function(e){var t,i;return(null===(t=null==e?void 0:e.sheet)||void 0===t?void 0:t.rules)?e.sheet.rules:(null===(i=null==e?void 0:e.sheet)||void 0===i?void 0:i.cssRules)?e.sheet.cssRules:[]}(t),n=[];for(let o=0;o<i.length;o++){-1!==i[o].selectorText.indexOf(e)&&n.push(o)}for(let o=n.length-1;o>=0;o--)t.sheet.deleteRule(n[o])}function q(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&1===e.nodeType&&"string"==typeof e.nodeName}const Q={CLICK:"click",AUXCLICK:"auxclick",DBLCLICK:"dblclick",MOUSE_UP:"mouseup",MOUSE_DOWN:"mousedown",MOUSE_OVER:"mouseover",MOUSE_MOVE:"mousemove",MOUSE_OUT:"mouseout",MOUSE_ENTER:"mouseenter",MOUSE_LEAVE:"mouseleave",MOUSE_WHEEL:"wheel",POINTER_UP:"pointerup",POINTER_DOWN:"pointerdown",POINTER_MOVE:"pointermove",POINTER_LEAVE:"pointerleave",CONTEXT_MENU:"contextmenu",WHEEL:"wheel",KEY_DOWN:"keydown",KEY_PRESS:"keypress",KEY_UP:"keyup",LOAD:"load",BEFORE_UNLOAD:"beforeunload",UNLOAD:"unload",PAGE_SHOW:"pageshow",PAGE_HIDE:"pagehide",ABORT:"abort",ERROR:"error",RESIZE:"resize",SCROLL:"scroll",FULLSCREEN_CHANGE:"fullscreenchange",WK_FULLSCREEN_CHANGE:"webkitfullscreenchange",SELECT:"select",CHANGE:"change",SUBMIT:"submit",RESET:"reset",FOCUS:"focus",FOCUS_IN:"focusin",FOCUS_OUT:"focusout",BLUR:"blur",INPUT:"input",STORAGE:"storage",DRAG_START:"dragstart",DRAG:"drag",DRAG_ENTER:"dragenter",DRAG_LEAVE:"dragleave",DRAG_OVER:"dragover",DROP:"drop",DRAG_END:"dragend",ANIMATION_START:n.isWebKit?"webkitAnimationStart":"animationstart",ANIMATION_END:n.isWebKit?"webkitAnimationEnd":"animationend",ANIMATION_ITERATION:n.isWebKit?"webkitAnimationIteration":"animationiteration"},Z={stop:function(e,t){e.preventDefault?e.preventDefault():e.returnValue=!1,t&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0)}};function J(e){const t=[];for(let i=0;e&&e.nodeType===e.ELEMENT_NODE;i++)t[i]=e.scrollTop,e=e.parentNode;return t}function ee(e,t){for(let i=0;e&&e.nodeType===e.ELEMENT_NODE;i++)e.scrollTop!==t[i]&&(e.scrollTop=t[i]),e=e.parentNode}class te extends d.JT{constructor(e){super(),this._onDidFocus=this._register(new l.Q5),this.onDidFocus=this._onDidFocus.event,this._onDidBlur=this._register(new l.Q5),this.onDidBlur=this._onDidBlur.event;let t=te.hasFocusWithin(e),i=!1;const n=()=>{i=!1,t||(t=!0,this._onDidFocus.fire())},o=()=>{t&&(i=!0,window.setTimeout((()=>{i&&(i=!1,t=!1,this._onDidBlur.fire())}),0))};this._refreshStateHandler=()=>{te.hasFocusWithin(e)!==t&&(t?o():n())},this._register(f(e,Q.FOCUS,n,!0)),this._register(f(e,Q.BLUR,o,!0)),this._register(f(e,Q.FOCUS_IN,(()=>this._refreshStateHandler()))),this._register(f(e,Q.FOCUS_OUT,(()=>this._refreshStateHandler())))}static hasFocusWithin(e){const t=G(e);return B(t?t.activeElement:document.activeElement,e)}}function ie(e){return new te(e)}function ne(e,...t){if(e.append(...t),1===t.length&&"string"!=typeof t[0])return t[0]}function oe(e,t){return e.insertBefore(t,e.firstChild),t}function se(e,...t){e.innerText="",ne(e,...t)}const re=/([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;var ae;function le(e,t,i,...n){const o=re.exec(t);if(!o)throw new Error("Bad use of emmet");i=Object.assign({},i||{});const s=o[1]||"div";let r;return r=e!==ae.HTML?document.createElementNS(e,s):document.createElement(s),o[3]&&(r.id=o[3]),o[4]&&(r.className=o[4].replace(/\./g," ").trim()),Object.keys(i).forEach((e=>{const t=i[e];void 0!==t&&(/^on\w+$/.test(e)?r[e]=t:"selected"===e?t&&r.setAttribute(e,"true"):r.setAttribute(e,t))})),r.append(...n),r}function he(e,t,...i){return le(ae.HTML,e,t,...i)}function de(...e){for(const t of e)t.style.display="",t.removeAttribute("aria-hidden")}function ce(...e){for(const t of e)t.style.display="none",t.setAttribute("aria-hidden","true")}function ue(e){return Array.prototype.slice.call(document.getElementsByTagName(e),0)}function ge(e){const t=window.devicePixelRatio*e;return Math.max(1,Math.floor(t))/window.devicePixelRatio}function pe(e){window.open(e,"_blank","noopener")}function me(e){const t=()=>{e(),i=T(t)};let i=T(t);return(0,d.OF)((()=>i.dispose()))}function fe(e){return e?`url('${c.Gi.asBrowserUri(e).toString(!0).replace(/'/g,"%27")}')`:"url('')"}function _e(e){return`'${e.replace(/'/g,"%27")}'`}function Ce(e,t=!1){const i=document.createElement("a");return h.v5("afterSanitizeAttributes",(n=>{for(const o of["href","src"])if(n.hasAttribute(o)){const s=n.getAttribute(o);if("href"===o&&s.startsWith("#"))continue;if(i.href=s,!e.includes(i.protocol.replace(/:$/,""))){if(t&&"src"===o&&i.href.startsWith("data:"))continue;n.removeAttribute(o)}}})),(0,d.OF)((()=>{h.ok("afterSanitizeAttributes")}))}!function(e){e.HTML="http://www.w3.org/1999/xhtml",e.SVG="http://www.w3.org/2000/svg"}(ae||(ae={})),he.SVG=function(e,t,...i){return le(ae.SVG,e,t,...i)},c.WX.setPreferredWebSchema(/^https:/.test(window.location.href)?"https":"http");class Ee extends l.Q5{constructor(){super(),this._subscriptions=new d.SL,this._keyStatus={altKey:!1,shiftKey:!1,ctrlKey:!1,metaKey:!1},this._subscriptions.add(f(window,"keydown",(e=>{if(e.defaultPrevented)return;const t=new s.y(e);if(6!==t.keyCode||!e.repeat){if(e.altKey&&!this._keyStatus.altKey)this._keyStatus.lastKeyPressed="alt";else if(e.ctrlKey&&!this._keyStatus.ctrlKey)this._keyStatus.lastKeyPressed="ctrl";else if(e.metaKey&&!this._keyStatus.metaKey)this._keyStatus.lastKeyPressed="meta";else if(e.shiftKey&&!this._keyStatus.shiftKey)this._keyStatus.lastKeyPressed="shift";else{if(6===t.keyCode)return;this._keyStatus.lastKeyPressed=void 0}this._keyStatus.altKey=e.altKey,this._keyStatus.ctrlKey=e.ctrlKey,this._keyStatus.metaKey=e.metaKey,this._keyStatus.shiftKey=e.shiftKey,this._keyStatus.lastKeyPressed&&(this._keyStatus.event=e,this.fire(this._keyStatus))}}),!0)),this._subscriptions.add(f(window,"keyup",(e=>{e.defaultPrevented||(!e.altKey&&this._keyStatus.altKey?this._keyStatus.lastKeyReleased="alt":!e.ctrlKey&&this._keyStatus.ctrlKey?this._keyStatus.lastKeyReleased="ctrl":!e.metaKey&&this._keyStatus.metaKey?this._keyStatus.lastKeyReleased="meta":!e.shiftKey&&this._keyStatus.shiftKey?this._keyStatus.lastKeyReleased="shift":this._keyStatus.lastKeyReleased=void 0,this._keyStatus.lastKeyPressed!==this._keyStatus.lastKeyReleased&&(this._keyStatus.lastKeyPressed=void 0),this._keyStatus.altKey=e.altKey,this._keyStatus.ctrlKey=e.ctrlKey,this._keyStatus.metaKey=e.metaKey,this._keyStatus.shiftKey=e.shiftKey,this._keyStatus.lastKeyReleased&&(this._keyStatus.event=e,this.fire(this._keyStatus)))}),!0)),this._subscriptions.add(f(document.body,"mousedown",(()=>{this._keyStatus.lastKeyPressed=void 0}),!0)),this._subscriptions.add(f(document.body,"mouseup",(()=>{this._keyStatus.lastKeyPressed=void 0}),!0)),this._subscriptions.add(f(document.body,"mousemove",(e=>{e.buttons&&(this._keyStatus.lastKeyPressed=void 0)}),!0)),this._subscriptions.add(f(window,"blur",(()=>{this.resetKeyStatus()})))}get keyStatus(){return this._keyStatus}resetKeyStatus(){this.doResetKeyStatus(),this.fire(this._keyStatus)}doResetKeyStatus(){this._keyStatus={altKey:!1,shiftKey:!1,ctrlKey:!1,metaKey:!1}}static getInstance(){return Ee.instance||(Ee.instance=new Ee),Ee.instance}dispose(){super.dispose(),this._subscriptions.dispose()}}class Se extends d.JT{constructor(e,t){super(),this.element=e,this.callbacks=t,this.counter=0,this.dragStartTime=0,this.registerListeners()}registerListeners(){this._register(f(this.element,Q.DRAG_ENTER,(e=>{this.counter++,this.dragStartTime=e.timeStamp,this.callbacks.onDragEnter(e)}))),this._register(f(this.element,Q.DRAG_OVER,(e=>{var t,i;e.preventDefault(),null===(i=(t=this.callbacks).onDragOver)||void 0===i||i.call(t,e,e.timeStamp-this.dragStartTime)}))),this._register(f(this.element,Q.DRAG_LEAVE,(e=>{this.counter--,0===this.counter&&(this.dragStartTime=0,this.callbacks.onDragLeave(e))}))),this._register(f(this.element,Q.DRAG_END,(e=>{this.counter=0,this.dragStartTime=0,this.callbacks.onDragEnd(e)}))),this._register(f(this.element,Q.DROP,(e=>{this.counter=0,this.dragStartTime=0,this.callbacks.onDrop(e)})))}}},79524:function(e,t,i){"use strict";i.d(t,{Nw:function(){return Z},ok:function(){return ee},v5:function(){return J}});i(21703);var n=Object.hasOwnProperty,o=Object.setPrototypeOf,s=Object.isFrozen,r=Object.getPrototypeOf,a=Object.getOwnPropertyDescriptor,l=Object.freeze,h=Object.seal,d=Object.create,c="undefined"!=typeof Reflect&&Reflect,u=c.apply,g=c.construct;u||(u=function(e,t,i){return e.apply(t,i)}),l||(l=function(e){return e}),h||(h=function(e){return e}),g||(g=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(
/*! @license DOMPurify 2.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.1/LICENSE */
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"abap",extensions:[".abap"],aliases:["abap","ABAP"],loader:()=>i.e(3268).then(i.bind(i,63268))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"apex",extensions:[".cls"],aliases:["Apex","apex"],mimetypes:["text/x-apex-source","text/x-apex"],loader:()=>i.e(3956).then(i.bind(i,23956))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"azcli",extensions:[".azcli"],aliases:["Azure CLI","azcli"],loader:()=>i.e(6346).then(i.bind(i,86346))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"bat",extensions:[".bat",".cmd"],aliases:["Batch","bat"],loader:()=>i.e(7007).then(i.bind(i,7007))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"bicep",extensions:[".bicep"],aliases:["Bicep"],loader:()=>i.e(7099).then(i.bind(i,77099))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"cameligo",extensions:[".mligo"],aliases:["Cameligo"],loader:()=>i.e(5106).then(i.bind(i,95106))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"clojure",extensions:[".clj",".cljs",".cljc",".edn"],aliases:["clojure","Clojure"],loader:()=>i.e(386).then(i.bind(i,70386))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"coffeescript",extensions:[".coffee"],aliases:["CoffeeScript","coffeescript","coffee"],mimetypes:["text/x-coffeescript","text/coffeescript"],loader:()=>i.e(5191).then(i.bind(i,85191))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"c",extensions:[".c",".h"],aliases:["C","c"],loader:()=>i.e(1636).then(i.bind(i,11636))}),A({id:"cpp",extensions:[".cpp",".cc",".cxx",".hpp",".hh",".hxx"],aliases:["C++","Cpp","cpp"],loader:()=>i.e(1636).then(i.bind(i,11636))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"csharp",extensions:[".cs",".csx",".cake"],aliases:["C#","csharp"],loader:()=>i.e(9007).then(i.bind(i,39007))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"csp",extensions:[],aliases:["CSP","csp"],loader:()=>i.e(2401).then(i.bind(i,72401))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"css",extensions:[".css"],aliases:["CSS","css"],mimetypes:["text/css"],loader:()=>i.e(6044).then(i.bind(i,76044))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"cypher",extensions:[".cypher",".cyp"],aliases:["Cypher","OpenCypher"],loader:()=>i.e(8822).then(i.bind(i,48822))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"dart",extensions:[".dart"],aliases:["Dart","dart"],mimetypes:["text/x-dart-source","text/x-dart"],loader:()=>i.e(2784).then(i.bind(i,72784))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"dockerfile",extensions:[".dockerfile"],filenames:["Dockerfile"],aliases:["Dockerfile"],loader:()=>i.e(2250).then(i.bind(i,82250))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"ecl",extensions:[".ecl"],aliases:["ECL","Ecl","ecl"],loader:()=>i.e(7083).then(i.bind(i,17083))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"elixir",extensions:[".ex",".exs"],aliases:["Elixir","elixir","ex"],loader:()=>i.e(9700).then(i.bind(i,89700))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"flow9",extensions:[".flow"],aliases:["Flow9","Flow","flow9","flow"],loader:()=>i.e(1022).then(i.bind(i,1022))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"fsharp",extensions:[".fs",".fsi",".ml",".mli",".fsx",".fsscript"],aliases:["F#","FSharp","fsharp"],loader:()=>i.e(7146).then(i.bind(i,67146))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"freemarker2",extensions:[".ftl",".ftlh",".ftlx"],aliases:["FreeMarker2","Apache FreeMarker2"],loader:()=>i.e(3986).then(i.bind(i,93986)).then((e=>e.TagAutoInterpolationDollar))}),A({id:"freemarker2.tag-angle.interpolation-dollar",aliases:["FreeMarker2 (Angle/Dollar)","Apache FreeMarker2 (Angle/Dollar)"],loader:()=>i.e(3986).then(i.bind(i,93986)).then((e=>e.TagAngleInterpolationDollar))}),A({id:"freemarker2.tag-bracket.interpolation-dollar",aliases:["FreeMarker2 (Bracket/Dollar)","Apache FreeMarker2 (Bracket/Dollar)"],loader:()=>i.e(3986).then(i.bind(i,93986)).then((e=>e.TagBracketInterpolationDollar))}),A({id:"freemarker2.tag-angle.interpolation-bracket",aliases:["FreeMarker2 (Angle/Bracket)","Apache FreeMarker2 (Angle/Bracket)"],loader:()=>i.e(3986).then(i.bind(i,93986)).then((e=>e.TagAngleInterpolationBracket))}),A({id:"freemarker2.tag-bracket.interpolation-bracket",aliases:["FreeMarker2 (Bracket/Bracket)","Apache FreeMarker2 (Bracket/Bracket)"],loader:()=>i.e(3986).then(i.bind(i,93986)).then((e=>e.TagBracketInterpolationBracket))}),A({id:"freemarker2.tag-auto.interpolation-dollar",aliases:["FreeMarker2 (Auto/Dollar)","Apache FreeMarker2 (Auto/Dollar)"],loader:()=>i.e(3986).then(i.bind(i,93986)).then((e=>e.TagAutoInterpolationDollar))}),A({id:"freemarker2.tag-auto.interpolation-bracket",aliases:["FreeMarker2 (Auto/Bracket)","Apache FreeMarker2 (Auto/Bracket)"],loader:()=>i.e(3986).then(i.bind(i,93986)).then((e=>e.TagAutoInterpolationBracket))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"go",extensions:[".go"],aliases:["Go"],loader:()=>i.e(6590).then(i.bind(i,46590))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"graphql",extensions:[".graphql",".gql"],aliases:["GraphQL","graphql","gql"],mimetypes:["application/graphql"],loader:()=>i.e(3700).then(i.bind(i,93700))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"handlebars",extensions:[".handlebars",".hbs"],aliases:["Handlebars","handlebars","hbs"],mimetypes:["text/x-handlebars-template"],loader:()=>i.e(3703).then(i.bind(i,73703))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"hcl",extensions:[".tf",".tfvars",".hcl"],aliases:["Terraform","tf","HCL","hcl"],loader:()=>i.e(9765).then(i.bind(i,69765))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"html",extensions:[".html",".htm",".shtml",".xhtml",".mdoc",".jsp",".asp",".aspx",".jshtm"],aliases:["HTML","htm","html","xhtml"],mimetypes:["text/html","text/x-jshtm","text/template","text/ng-template"],loader:()=>i.e(9111).then(i.bind(i,69111))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"ini",extensions:[".ini",".properties",".gitconfig"],filenames:["config",".gitattributes",".gitconfig",".editorconfig"],aliases:["Ini","ini"],loader:()=>i.e(2008).then(i.bind(i,72008))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"java",extensions:[".java",".jav"],aliases:["Java","java"],mimetypes:["text/x-java-source","text/x-java"],loader:()=>i.e(4366).then(i.bind(i,54366))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"javascript",extensions:[".js",".es6",".jsx",".mjs",".cjs"],firstLine:"^#!.*\\bnode",filenames:["jakefile"],aliases:["JavaScript","javascript","js"],mimetypes:["text/javascript"],loader:()=>i.e(6048).then(i.bind(i,66048))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"julia",extensions:[".jl"],aliases:["julia","Julia"],loader:()=>i.e(8412).then(i.bind(i,78412))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"kotlin",extensions:[".kt"],aliases:["Kotlin","kotlin"],mimetypes:["text/x-kotlin-source","text/x-kotlin"],loader:()=>i.e(3415).then(i.bind(i,23415))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"less",extensions:[".less"],aliases:["Less","less"],mimetypes:["text/x-less","text/less"],loader:()=>i.e(5661).then(i.bind(i,55661))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"lexon",extensions:[".lex"],aliases:["Lexon"],loader:()=>i.e(1319).then(i.bind(i,51319))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"lua",extensions:[".lua"],aliases:["Lua","lua"],loader:()=>i.e(6896).then(i.bind(i,56896))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"liquid",extensions:[".liquid",".html.liquid"],aliases:["Liquid","liquid"],mimetypes:["application/liquid"],loader:()=>i.e(2936).then(i.bind(i,72936))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"m3",extensions:[".m3",".i3",".mg",".ig"],aliases:["Modula-3","Modula3","modula3","m3"],loader:()=>i.e(9928).then(i.bind(i,39928))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"markdown",extensions:[".md",".markdown",".mdown",".mkdn",".mkd",".mdwn",".mdtxt",".mdtext"],aliases:["Markdown","markdown"],loader:()=>i.e(1598).then(i.bind(i,31598))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"mips",extensions:[".s"],aliases:["MIPS","MIPS-V"],mimetypes:["text/x-mips","text/mips","text/plaintext"],loader:()=>i.e(2532).then(i.bind(i,72532))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"msdax",extensions:[".dax",".msdax"],aliases:["DAX","MSDAX"],loader:()=>i.e(7517).then(i.bind(i,97517))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"mysql",extensions:[],aliases:["MySQL","mysql"],loader:()=>i.e(7643).then(i.bind(i,47643))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"objective-c",extensions:[".m"],aliases:["Objective-C"],loader:()=>i.e(15).then(i.bind(i,60015))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"pascal",extensions:[".pas",".p",".pp"],aliases:["Pascal","pas"],mimetypes:["text/x-pascal-source","text/x-pascal"],loader:()=>i.e(9380).then(i.bind(i,9380))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"pascaligo",extensions:[".ligo"],aliases:["Pascaligo","ligo"],loader:()=>i.e(5630).then(i.bind(i,75630))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"perl",extensions:[".pl"],aliases:["Perl","pl"],loader:()=>i.e(5662).then(i.bind(i,15662))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"pgsql",extensions:[],aliases:["PostgreSQL","postgres","pg","postgre"],loader:()=>i.e(5019).then(i.bind(i,85019))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"php",extensions:[".php",".php4",".php5",".phtml",".ctp"],aliases:["PHP","php"],mimetypes:["application/x-php"],loader:()=>i.e(5710).then(i.bind(i,85710))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"pla",extensions:[".pla"],loader:()=>i.e(7473).then(i.bind(i,97473))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"postiats",extensions:[".dats",".sats",".hats"],aliases:["ATS","ATS/Postiats"],loader:()=>i.e(9903).then(i.bind(i,9903))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"powerquery",extensions:[".pq",".pqm"],aliases:["PQ","M","Power Query","Power Query M"],loader:()=>i.e(5096).then(i.bind(i,95096))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"powershell",extensions:[".ps1",".psm1",".psd1"],aliases:["PowerShell","powershell","ps","ps1"],loader:()=>i.e(5254).then(i.bind(i,5254))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"proto",extensions:[".proto"],aliases:["protobuf","Protocol Buffers"],loader:()=>i.e(6540).then(i.bind(i,46540))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"pug",extensions:[".jade",".pug"],aliases:["Pug","Jade","jade"],loader:()=>i.e(7010).then(i.bind(i,57010))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"python",extensions:[".py",".rpy",".pyw",".cpy",".gyp",".gypi"],aliases:["Python","py"],firstLine:"^#!/.*\\bpython[0-9.-]*\\b",loader:()=>i.e(786).then(i.bind(i,80786))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"qsharp",extensions:[".qs"],aliases:["Q#","qsharp"],loader:()=>i.e(5527).then(i.bind(i,15527))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"r",extensions:[".r",".rhistory",".rmd",".rprofile",".rt"],aliases:["R","r"],loader:()=>i.e(8248).then(i.bind(i,8248))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"razor",extensions:[".cshtml"],aliases:["Razor","razor"],mimetypes:["text/x-cshtml"],loader:()=>i.e(9583).then(i.bind(i,89583))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"redis",extensions:[".redis"],aliases:["redis"],loader:()=>i.e(6388).then(i.bind(i,6388))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"redshift",extensions:[],aliases:["Redshift","redshift"],loader:()=>i.e(9906).then(i.bind(i,69906))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"restructuredtext",extensions:[".rst"],aliases:["reStructuredText","restructuredtext"],loader:()=>i.e(4034).then(i.bind(i,94034))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"ruby",extensions:[".rb",".rbx",".rjs",".gemspec",".pp"],filenames:["rakefile","Gemfile"],aliases:["Ruby","rb"],loader:()=>i.e(3817).then(i.bind(i,83817))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"rust",extensions:[".rs",".rlib"],aliases:["Rust","rust"],loader:()=>i.e(9270).then(i.bind(i,19270))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"sb",extensions:[".sb"],aliases:["Small Basic","sb"],loader:()=>i.e(2358).then(i.bind(i,82358))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"scala",extensions:[".scala",".sc",".sbt"],aliases:["Scala","scala","SBT","Sbt","sbt","Dotty","dotty"],mimetypes:["text/x-scala-source","text/x-scala","text/x-sbt","text/x-dotty"],loader:()=>i.e(5856).then(i.bind(i,95856))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"scheme",extensions:[".scm",".ss",".sch",".rkt"],aliases:["scheme","Scheme"],loader:()=>i.e(7500).then(i.bind(i,37500))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"scss",extensions:[".scss"],aliases:["Sass","sass","scss"],mimetypes:["text/x-scss","text/scss"],loader:()=>i.e(1030).then(i.bind(i,11030))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"shell",extensions:[".sh",".bash"],aliases:["Shell","sh"],loader:()=>i.e(8647).then(i.bind(i,8647))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"sol",extensions:[".sol"],aliases:["sol","solidity","Solidity"],loader:()=>i.e(3629).then(i.bind(i,63629))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"aes",extensions:[".aes"],aliases:["aes","sophia","Sophia"],loader:()=>i.e(501).then(i.bind(i,59928))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"sparql",extensions:[".rq"],aliases:["sparql","SPARQL"],loader:()=>i.e(9674).then(i.bind(i,89674))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"sql",extensions:[".sql"],aliases:["SQL"],loader:()=>i.e(413).then(i.bind(i,70413))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"st",extensions:[".st",".iecst",".iecplc",".lc3lib"],aliases:["StructuredText","scl","stl"],loader:()=>i.e(622).then(i.bind(i,20622))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"swift",aliases:["Swift","swift"],extensions:[".swift"],mimetypes:["text/swift"],loader:()=>i.e(2804).then(i.bind(i,52804))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"systemverilog",extensions:[".sv",".svh"],aliases:["SV","sv","SystemVerilog","systemverilog"],loader:()=>i.e(6862).then(i.bind(i,26862))}),A({id:"verilog",extensions:[".v",".vh"],aliases:["V","v","Verilog","verilog"],loader:()=>i.e(6862).then(i.bind(i,26862))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"tcl",extensions:[".tcl"],aliases:["tcl","Tcl","tcltk","TclTk","tcl/tk","Tcl/Tk"],loader:()=>i.e(5985).then(i.bind(i,5985))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"twig",extensions:[".twig"],aliases:["Twig","twig"],mimetypes:["text/x-twig"],loader:()=>i.e(3202).then(i.bind(i,13202))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"typescript",extensions:[".ts",".tsx"],aliases:["TypeScript","ts","typescript"],mimetypes:["text/typescript"],loader:()=>i.e(7954).then(i.bind(i,97954))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"vb",extensions:[".vb"],aliases:["Visual Basic","vb"],loader:()=>i.e(3263).then(i.bind(i,53263))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"xml",extensions:[".xml",".dtd",".ascx",".csproj",".config",".wxi",".wxl",".wxs",".xaml",".svg",".svgz",".opf",".xsl"],firstLine:"(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",aliases:["XML","xml"],mimetypes:["text/xml","application/xml","application/xaml+xml","application/xml-dtd"],loader:()=>i.e(7973).then(i.bind(i,25527))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
A({id:"yaml",extensions:[".yaml",".yml"],aliases:["YAML","yaml","YML","yml"],mimetypes:["application/x-yaml","text/x-yaml"],loader:()=>i.e(2341).then(i.bind(i,82341))});
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var I=Object.defineProperty,w=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,O=Object.prototype.hasOwnProperty,D=(e,t,i,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of y(t))O.call(e,o)||o===i||I(e,o,{get:()=>t[o],enumerable:!(n=w(t,o))||n.enumerable});return e},M={};((e,t,i)=>{D(e,t,"default"),i&&D(i,t,"default")})(M,f);var k=class{constructor(e,t,i){(0,_.Z)(this,"_onDidChange",new M.Emitter),(0,_.Z)(this,"_options",void 0),(0,_.Z)(this,"_modeConfiguration",void 0),(0,_.Z)(this,"_languageId",void 0),this._languageId=e,this.setOptions(t),this.setModeConfiguration(i)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get modeConfiguration(){return this._modeConfiguration}get diagnosticsOptions(){return this.options}get options(){return this._options}setOptions(e){this._options=e||Object.create(null),this._onDidChange.fire(this)}setDiagnosticsOptions(e){this.setOptions(e)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}},P={validate:!0,lint:{compatibleVendorPrefixes:"ignore",vendorPrefix:"warning",duplicateProperties:"warning",emptyRules:"warning",importStatement:"ignore",boxModel:"ignore",universalSelector:"ignore",zeroUnits:"ignore",fontFaceProperties:"warning",hexColorLength:"error",argumentsInColorFunction:"error",unknownProperties:"warning",ieHack:"ignore",unknownVendorSpecificProperties:"ignore",propertyIgnoredDueToDisplay:"warning",important:"ignore",float:"ignore",idSelector:"ignore"},data:{useDefaultDataProvider:!0},format:{newlineBetweenSelectors:!0,newlineBetweenRules:!0,spaceAroundSelectorSeparator:!1,braceStyle:"collapse",maxPreserveNewLines:void 0,preserveNewLines:!0}},x={completionItems:!0,hovers:!0,documentSymbols:!0,definitions:!0,references:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0,documentFormattingEdits:!0,documentRangeFormattingEdits:!0},F=new k("css",P,x),B=new k("scss",P,x),U=new k("less",P,x);function H(){return i.e(6786).then(i.bind(i,16786))}M.languages.css={cssDefaults:F,lessDefaults:U,scssDefaults:B},M.languages.onLanguage("less",(()=>{H().then((e=>e.setupMode(U)))})),M.languages.onLanguage("scss",(()=>{H().then((e=>e.setupMode(B)))})),M.languages.onLanguage("css",(()=>{H().then((e=>e.setupMode(F)))}));
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var V=Object.defineProperty,W=Object.getOwnPropertyDescriptor,G=Object.getOwnPropertyNames,z=Object.prototype.hasOwnProperty,K=(e,t,i,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of G(t))z.call(e,o)||o===i||V(e,o,{get:()=>t[o],enumerable:!(n=W(t,o))||n.enumerable});return e},Y={};((e,t,i)=>{K(e,t,"default"),i&&K(i,t,"default")})(Y,f);var $={format:{tabSize:4,insertSpaces:!1,wrapLineLength:120,unformatted:'default": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, span, strong, sub, sup, textarea, tt, var',contentUnformatted:"pre",indentInnerHtml:!1,preserveNewLines:!0,maxPreserveNewLines:void 0,indentHandlebars:!1,endWithNewline:!1,extraLiners:"head, body, /html",wrapAttributes:"auto"},suggest:{},data:{useDefaultDataProvider:!0}};function j(e){return{completionItems:!0,hovers:!0,documentSymbols:!0,links:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,selectionRanges:!0,diagnostics:e===X,documentFormattingEdits:e===X,documentRangeFormattingEdits:e===X}}var X="html",q="handlebars",Q="razor",Z=oe(X,$,j(X)),J=Z.defaults,ee=oe(q,$,j(q)),te=ee.defaults,ie=oe(Q,$,j(Q)),ne=ie.defaults;function oe(e,t=$,n=j(e)){const o=new class{constructor(e,t,i){(0,_.Z)(this,"_onDidChange",new Y.Emitter),(0,_.Z)(this,"_options",void 0),(0,_.Z)(this,"_modeConfiguration",void 0),(0,_.Z)(this,"_languageId",void 0),this._languageId=e,this.setOptions(t),this.setModeConfiguration(i)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get options(){return this._options}get modeConfiguration(){return this._modeConfiguration}setOptions(e){this._options=e||Object.create(null),this._onDidChange.fire(this)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}}(e,t,n);let s;const r=Y.languages.onLanguage(e,(async()=>{s=(await i.e(4962).then(i.bind(i,14962))).setupMode(o)}));return{defaults:o,dispose(){r.dispose(),s?.dispose(),s=void 0}}}Y.languages.html={htmlDefaults:J,razorDefaults:ne,handlebarDefaults:te,htmlLanguageService:Z,handlebarLanguageService:ee,razorLanguageService:ie,registerHTMLLanguageService:oe};
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
//# sourceMappingURL=4161.fd1d9310.js.map