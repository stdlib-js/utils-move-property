// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,o=r.toString,n=r.__defineGetter__,i=r.__defineSetter__,l=r.__lookupGetter__,a=r.__lookupSetter__,u=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,u){var c,p,f,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof u||null===u||"[object Array]"===o.call(u))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+u+"`.");if((p="value"in u)&&(l.call(e,t)||a.call(e,t)?(c=e.__proto__,e.__proto__=r,delete e[t],e[t]=u.value,e.__proto__=c):e[t]=u.value),f="get"in u,_="set"in u,p&&(f||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&n&&n.call(e,t,u.get),_&&i&&i.call(e,t,u.set),e};function c(){var e,t=arguments,r=t[0],o="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)o+="&arg[]="+encodeURIComponent(t[e]);return o}return function(e,t,r){var o;if("object"!=typeof e||null===e)throw new TypeError(c("0kkCK",e));if("object"!=typeof r||null===r)throw new TypeError(c("0kkCL",r));return void 0!==(o=Object.getOwnPropertyDescriptor(e,t))&&(delete e[t],u(r,t,o),!0)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).moveProperty=t();
//# sourceMappingURL=browser.js.map
