!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){Element.prototype.delegator=function(eventType,selector,listener){var e=this,useCapture=3<arguments.length&&void 0!==arguments[3]&&arguments[3],t=function(selector,listener,e){var r=this,t=function e(t,selector){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;return t===r?t:t.nodeType!==Node.DOCUMENT_NODE&&t.nodeType!==Node.DOCUMENT_TYPE_NODE&&(n.call(t,selector)?t:null!=t.parentElement&&e(t.parentElement,selector))}(e.target,selector);t&&listener.call(t,e)}.bind(this,selector,listener);return this.addEventListener(eventType,t,useCapture),{off:function(){e.removeEventListener(eventType,t,useCapture),t=null}}}}]);