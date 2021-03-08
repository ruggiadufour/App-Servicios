/*! Shifty 2.13.0 - https://github.com/jeremyckahn/shifty */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("shifty",[],n):"object"==typeof exports?exports.shifty=n():t.shifty=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=4)}([function(t,n,e){"use strict";(function(t){e.d(n,"e",(function(){return E})),e.d(n,"c",(function(){return I})),e.d(n,"b",(function(){return q})),e.d(n,"a",(function(){return Q})),e.d(n,"d",(function(){return N}));var r=e(1),i=e.n(r),u=e(2);function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var f,l,h,p,d,_,v,y,g,m,b,w,S,O,j,k="undefined"!=typeof window?window:t,M=k.requestAnimationFrame||k.webkitRequestAnimationFrame||k.oRequestAnimationFrame||k.msRequestAnimationFrame||k.mozCancelRequestAnimationFrame&&k.mozRequestAnimationFrame||setTimeout,P=function(){},T=null,x=null,A=i()({},u),E=function(t,n,e,r,i,u,o){for(l in f=t<u?0:(t-u)/i,n)h=o[l],p=h.call?h:A[h],d=e[l],n[l]=d+(r[l]-d)*p(f);return n},F=function(t,n){_=t._duration,v=t._timestamp,b=t._currentState,w=t._targetState,S=t._delay,m=_-((y=v+S+_)-(g=n>y?y:n)),g>=y?(t._render(w,t._data,m),t.stop(!0)):(t._applyFilter("beforeTween"),g<v+S?v=_=g=1:v+=S,E(g,b,t._originalState,w,_,v,t._easing),t._applyFilter("afterTween"),t._render(b,t._data,m))},I=function(t,n,e){return function(){for(t=Q.now(),n=T;n;)e=n._next,F(n,t),n=e}()},C=function t(){T&&(M.call(k,t,1e3/60),I())},q=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"linear",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=s(n);if("string"===r||"function"===r)for(var i in t)e[i]=n;else for(var u in t)e[u]=n[u]||"linear";return e},D=function(t){t===T?(T=t._next)?T._previous=null:x=null:t===x?(x=t._previous)?x._next=null:T=null:(O=t._previous,j=t._next,O._next=j,j._previous=O),t._previous=t._next=null},Q=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;o(this,t),c(this,"_config",{}),c(this,"_data",{}),c(this,"_filters",[]),c(this,"_next",null),c(this,"_previous",null),c(this,"_timestamp",null),c(this,"_resolve",null),c(this,"_reject",null),c(this,"_currentState",{}),c(this,"_originalState",{}),c(this,"_targetState",{}),c(this,"_start",P),c(this,"_render",P),this._currentState=n||this._currentState,e&&this.setConfig(e)}var n,e,r;return n=t,(e=[{key:"_applyFilter",value:function(t){for(var n=this._filters.length;n>0;n--){var e=this._filters[n-n][t];e&&e(this)}}},{key:"tween",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return this._isPlaying&&this.stop(),!n&&this._config||this.setConfig(n),this._pausedAtTime=null,this._timestamp=t.now(),this._start(this.get(),this._data),this._resume(this._timestamp)}},{key:"setConfig",value:function(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i()(this._config,e);var r=this._config,u=r.promise,o=void 0===u?Promise:u,a=r.start,c=void 0===a?P:a,s=r.render,f=void 0===s?this._config.step||P:s,l=r.step,h=void 0===l?P:l;for(var p in this._data=this._config.data||this._config.attachment||this._data,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=e.delay||0,this._start=c,this._render=f||h,this._duration=this._config.duration||500,i()(this._currentState,e.from),i()(this._originalState,this._currentState),i()(this._targetState,this._currentState,e.to),this._easing=q(this._currentState,this._config.easing,this._easing),this._filters.length=0,t.filters)t.filters[p].doesApply(this)&&this._filters.push(t.filters[p]);return this._applyFilter("tweenCreated"),this._promise=new o((function(t,e){n._resolve=t,n._reject=e})),this}},{key:"get",value:function(){return i()({},this._currentState)}},{key:"set",value:function(t){this._currentState=t}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=t.now(),this._isPlaying=!1,D(this),this}},{key:"resume",value:function(){return this._resume()}},{key:"_resume",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.now();return null===this._timestamp?this.tween():(this._isPlaying||(this._pausedAtTime&&(this._timestamp+=n-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,null===T?(T=this,x=this,C()):(this._previous=x,x._next=this,x=this)),this._promise)}},{key:"seek",value:function(n){n=Math.max(n,0);var e=t.now();return this._timestamp+n===0||(this._timestamp=e-n,this._isPlaying||F(this,e)),this}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._isPlaying?(this._isPlaying=!1,D(this),t&&(this._applyFilter("beforeTween"),E(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),this._applyFilter("afterTween"),this._applyFilter("afterTweenEnd")),this._resolve&&this._resolve({data:this._data,state:this._currentState,tweenable:this}),this._resolve=null,this._reject=null,i()(this._targetState,this._currentState),i()(this._originalState,this._targetState),this):this}},{key:"cancel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this._currentState,e=this._data,r=this._isPlaying;return r?(this._reject({data:e,state:n,tweenable:this}),this._resolve=null,this._reject=null,this.stop(t)):this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"setScheduleFunction",value:function(n){t.setScheduleFunction(n)}},{key:"data",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t&&(this._data=i()({},t)),this._data}},{key:"dispose",value:function(){for(var t in this)delete this[t]}}])&&a(n.prototype,e),r&&a(n,r),t}();function N(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new Q,e=n.tween(t);return e.tweenable=n,e}Q.setScheduleFunction=function(t){return M=t},Q.formulas=A,Q.filters={},Q.now=Date.now||function(){return+new Date}}).call(this,e(3))},function(t,n,e){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var n={},e=0;e<10;e++)n["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(t){return n[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,n){for(var e,a,c=o(t),s=1;s<arguments.length;s++){for(var f in e=Object(arguments[s]))i.call(e,f)&&(c[f]=e[f]);if(r){a=r(e);for(var l=0;l<a.length;l++)u.call(e,a[l])&&(c[a[l]]=e[a[l]])}}return c}},function(t,n,e){"use strict";e.r(n),e.d(n,"linear",(function(){return r})),e.d(n,"easeInQuad",(function(){return i})),e.d(n,"easeOutQuad",(function(){return u})),e.d(n,"easeInOutQuad",(function(){return o})),e.d(n,"easeInCubic",(function(){return a})),e.d(n,"easeOutCubic",(function(){return c})),e.d(n,"easeInOutCubic",(function(){return s})),e.d(n,"easeInQuart",(function(){return f})),e.d(n,"easeOutQuart",(function(){return l})),e.d(n,"easeInOutQuart",(function(){return h})),e.d(n,"easeInQuint",(function(){return p})),e.d(n,"easeOutQuint",(function(){return d})),e.d(n,"easeInOutQuint",(function(){return _})),e.d(n,"easeInSine",(function(){return v})),e.d(n,"easeOutSine",(function(){return y})),e.d(n,"easeInOutSine",(function(){return g})),e.d(n,"easeInExpo",(function(){return m})),e.d(n,"easeOutExpo",(function(){return b})),e.d(n,"easeInOutExpo",(function(){return w})),e.d(n,"easeInCirc",(function(){return S})),e.d(n,"easeOutCirc",(function(){return O})),e.d(n,"easeInOutCirc",(function(){return j})),e.d(n,"easeOutBounce",(function(){return k})),e.d(n,"easeInBack",(function(){return M})),e.d(n,"easeOutBack",(function(){return P})),e.d(n,"easeInOutBack",(function(){return T})),e.d(n,"elastic",(function(){return x})),e.d(n,"swingFromTo",(function(){return A})),e.d(n,"swingFrom",(function(){return E})),e.d(n,"swingTo",(function(){return F})),e.d(n,"bounce",(function(){return I})),e.d(n,"bouncePast",(function(){return C})),e.d(n,"easeFromTo",(function(){return q})),e.d(n,"easeFrom",(function(){return D})),e.d(n,"easeTo",(function(){return Q}));
/*!
 * All equations are adapted from Thomas Fuchs'
 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
 *
 * Based on Easing Equations (c) 2003 [Robert
 * Penner](http://www.robertpenner.com/), all rights reserved. This work is
 * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
 */
/*!
 *  TERMS OF USE - EASING EQUATIONS
 *  Open source under the BSD License.
 *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
 */
var r=function(t){return t},i=function(t){return Math.pow(t,2)},u=function(t){return-(Math.pow(t-1,2)-1)},o=function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},a=function(t){return Math.pow(t,3)},c=function(t){return Math.pow(t-1,3)+1},s=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},f=function(t){return Math.pow(t,4)},l=function(t){return-(Math.pow(t-1,4)-1)},h=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},p=function(t){return Math.pow(t,5)},d=function(t){return Math.pow(t-1,5)+1},_=function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},v=function(t){return 1-Math.cos(t*(Math.PI/2))},y=function(t){return Math.sin(t*(Math.PI/2))},g=function(t){return-.5*(Math.cos(Math.PI*t)-1)},m=function(t){return 0===t?0:Math.pow(2,10*(t-1))},b=function(t){return 1===t?1:1-Math.pow(2,-10*t)},w=function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},S=function(t){return-(Math.sqrt(1-t*t)-1)},O=function(t){return Math.sqrt(1-Math.pow(t-1,2))},j=function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},k=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},M=function(t){var n=1.70158;return t*t*((n+1)*t-n)},P=function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},T=function(t){var n=1.70158;return(t/=.5)<1?t*t*((1+(n*=1.525))*t-n)*.5:.5*((t-=2)*t*((1+(n*=1.525))*t+n)+2)},x=function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},A=function(t){var n=1.70158;return(t/=.5)<1?t*t*((1+(n*=1.525))*t-n)*.5:.5*((t-=2)*t*((1+(n*=1.525))*t+n)+2)},E=function(t){var n=1.70158;return t*t*((n+1)*t-n)},F=function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},I=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},C=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},q=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},D=function(t){return Math.pow(t,4)},Q=function(t){return Math.pow(t,.25)}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";e.r(n),e.d(n,"processTweens",(function(){return o.c})),e.d(n,"Tweenable",(function(){return o.a})),e.d(n,"tween",(function(){return o.d})),e.d(n,"interpolate",(function(){return F})),e.d(n,"Scene",(function(){return B})),e.d(n,"setBezierFunction",(function(){return z})),e.d(n,"unsetBezierFunction",(function(){return L}));var r={};e.r(r),e.d(r,"doesApply",(function(){return O})),e.d(r,"tweenCreated",(function(){return j})),e.d(r,"beforeTween",(function(){return k})),e.d(r,"afterTween",(function(){return M}));var i,u,o=e(0),a=/(\d|-|\.)/,c=/([^\-0-9.]+)/g,s=/[0-9.-]+/g,f=(i=s.source,u=/,\s*/.source,new RegExp("rgb\\(".concat(i).concat(u).concat(i).concat(u).concat(i,"\\)"),"g")),l=/^.*\(/,h=/#([0-9]|[a-f]){3,6}/gi,p=function(t,n){return t.map((function(t,e){return"_".concat(n,"_").concat(e)}))};function d(t){return parseInt(t,16)}var _=function(t){return"rgb(".concat((n=t,3===(n=n.replace(/#/,"")).length&&(n=(n=n.split(""))[0]+n[0]+n[1]+n[1]+n[2]+n[2]),[d(n.substr(0,2)),d(n.substr(2,2)),d(n.substr(4,2))]).join(","),")");var n},v=function(t,n,e){var r=n.match(t),i=n.replace(t,"VAL");return r&&r.forEach((function(t){return i=i.replace("VAL",e(t))})),i},y=function(t){for(var n in t){var e=t[n];"string"==typeof e&&e.match(h)&&(t[n]=v(h,e,_))}},g=function(t){var n=t.match(s).map(Math.floor),e=t.match(l)[0];return"".concat(e).concat(n.join(","),")")},m=function(t){return t.match(s)},b=function(t,n){var e={};return n.forEach((function(n){e[n]=t[n],delete t[n]})),e},w=function(t,n){return n.map((function(n){return t[n]}))},S=function(t,n){return n.forEach((function(n){return t=t.replace("VAL",+n.toFixed(4))})),t},O=function(t){for(var n in t._currentState)if("string"==typeof t._currentState[n])return!0;return!1};function j(t){var n=t._currentState;[n,t._originalState,t._targetState].forEach(y),t._tokenData=function(t){var n,e,r={};for(var i in t){var u=t[i];"string"==typeof u&&(r[i]={formatString:(n=u,e=void 0,e=n.match(c),e?(1===e.length||n.charAt(0).match(a))&&e.unshift(""):e=["",""],e.join("VAL")),chunkNames:p(m(u),i)})}return r}(n)}function k(t){var n=t._currentState,e=t._originalState,r=t._targetState,i=t._easing,u=t._tokenData;!function(t,n){var e=function(e){var r=n[e].chunkNames,i=t[e];if("string"==typeof i){var u=i.split(" "),o=u[u.length-1];r.forEach((function(n,e){return t[n]=u[e]||o}))}else r.forEach((function(n){return t[n]=i}));delete t[e]};for(var r in n)e(r)}(i,u),[n,e,r].forEach((function(t){return function(t,n){var e=function(e){m(t[e]).forEach((function(r,i){return t[n[e].chunkNames[i]]=+r})),delete t[e]};for(var r in n)e(r)}(t,u)}))}function M(t){var n=t._currentState,e=t._originalState,r=t._targetState,i=t._easing,u=t._tokenData;[n,e,r].forEach((function(t){return function(t,n){for(var e in n){var r=n[e],i=r.chunkNames,u=r.formatString,o=S(u,w(b(t,i),i));t[e]=v(f,o,g)}}(t,u)})),function(t,n){for(var e in n){var r=n[e].chunkNames,i=t[r[0]];t[e]="string"==typeof i?r.map((function(n){var e=t[n];return delete t[n],e})).join(" "):i}}(i,u)}function P(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function T(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?P(Object(e),!0).forEach((function(n){x(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):P(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function x(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var A=new o.a,E=o.a.filters,F=function(t,n,e,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,u=T({},t),a=Object(o.b)(t,r);for(var c in A._filters.length=0,A.set({}),A._currentState=u,A._originalState=t,A._targetState=n,A._easing=a,E)E[c].doesApply(A)&&A._filters.push(E[c]);A._applyFilter("tweenCreated"),A._applyFilter("beforeTween");var s=Object(o.e)(e,u,t,n,1,i,a);return A._applyFilter("afterTween"),s};function I(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return C(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return C(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function q(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function D(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Q(t,n){var e=n.get(t);if(!e)throw new TypeError("attempted to get private field on non-instance");return e.get?e.get.call(t):e.value}var N=new WeakMap,B=function(){function t(){q(this,t),N.set(this,{writable:!0,value:[]});for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];e.forEach(this.add.bind(this))}var n,e,r;return n=t,(e=[{key:"add",value:function(t){return Q(this,N).push(t),t}},{key:"remove",value:function(t){var n=Q(this,N).indexOf(t);return~n&&Q(this,N).splice(n,1),t}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return Q(this,N).some((function(t){return t.isPlaying()}))}},{key:"play",value:function(){return Q(this,N).forEach((function(t){return t.tween()})),this}},{key:"pause",value:function(){return Q(this,N).forEach((function(t){return t.pause()})),this}},{key:"resume",value:function(){return Q(this,N).forEach((function(t){return t.resume()})),this}},{key:"stop",value:function(t){return Q(this,N).forEach((function(n){return n.stop(t)})),this}},{key:"tweenables",get:function(){return I(Q(this,N))}},{key:"promises",get:function(){return Q(this,N).map((function(t){return t._promise}))}}])&&D(n.prototype,e),r&&D(n,r),t}();function R(t,n,e,r,i,u){var o,a,c=0,s=0,f=0,l=0,h=0,p=0,d=function(t){return((c*t+s)*t+f)*t},_=function(t){return(3*c*t+2*s)*t+f},v=function(t){return t>=0?t:0-t};return c=1-(f=3*n)-(s=3*(r-n)-f),l=1-(p=3*e)-(h=3*(i-e)-p),o=t,a=function(t){return 1/(200*t)}(u),function(t){return((l*t+h)*t+p)*t}(function(t,n){var e,r,i,u,o,a;for(i=t,a=0;a<8;a++){if(u=d(i)-t,v(u)<n)return i;if(o=_(i),v(o)<1e-6)break;i-=u/o}if((i=t)<(e=0))return e;if(i>(r=1))return r;for(;e<r;){if(u=d(i),v(u-t)<n)return i;t>u?e=i:r=i,i=.5*(r-e)+e}return i}(o,a))}var z=function(t,n,e,r,i){var u=function(t,n,e,r){return function(i){return R(i,t,n,e,r,1)}}(n,e,r,i);return u.displayName=t,u.x1=n,u.y1=e,u.x2=r,u.y2=i,o.a.formulas[t]=u},L=function(t){return delete o.a.formulas[t]};o.a.filters.token=r}])}));
//# sourceMappingURL=shifty.js.map