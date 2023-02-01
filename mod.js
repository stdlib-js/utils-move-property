// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,r=Object.prototype,o=r.toString,n=r.__defineGetter__,a=r.__defineSetter__,l=r.__lookupGetter__,i=r.__lookupSetter__;var c=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,c){var u,p,_,f;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof c||null===c||"[object Array]"===o.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((p="value"in c)&&(l.call(e,t)||i.call(e,t)?(u=e.__proto__,e.__proto__=r,delete e[t],e[t]=c.value,e.__proto__=u):e[t]=c.value),_="get"in c,f="set"in c,p&&(_||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&n&&n.call(e,t,c.get),f&&a&&a.call(e,t,c.set),e};function u(){var e,t=arguments,r=t[0],o="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)o+="&arg[]="+encodeURIComponent(t[e]);return o}function p(e,t,r){var o;if("object"!=typeof e||null===e)throw new TypeError(u("0kkCK",e));if("object"!=typeof r||null===r)throw new TypeError(u("0kkCL",r));return void 0!==(o=Object.getOwnPropertyDescriptor(e,t))&&(delete e[t],c(r,t,o),!0)}export{p as default};
//# sourceMappingURL=mod.js.map
