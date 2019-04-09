/******/
(function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            i: moduleId,
            /******/            l: false,
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {enumerable: true, get: getter});
            /******/
        }
        /******/
    };
    /******/
    /******/ 	// define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {value: true});
        /******/
    };
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {enumerable: true, value: value});
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
            return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/            function getDefault() {
                return module['default'];
            } :
            /******/            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 0);
    /******/
})
/************************************************************************/
/******/([
    /* 0 */
    /***/ (function (module, exports, __webpack_require__) {

        __webpack_require__(1);

        var delegate = __webpack_require__(2);

        (function () {
            var prepareDom = function prepareDom() {
                var counter = 0;
                var max = 1000;

                var recursAppend = function recursAppend(el) {
                    if (counter === max) return false;
                    var newEl = document.createElement(counter === max - 1 ? 'span' : "p");
                    el.appendChild(newEl);
                    counter++;
                    recursAppend(newEl);
                };

                var section = document.querySelector('section');
                recursAppend(section);
            };

            prepareDom();
            prepareDom();
            prepareDom();
            prepareDom();
            prepareDom(); // delegate(document.querySelector('section'), 'body', 'click', function (e) {
            //     //console.log("clicked!");
            //     return true;
            // }, false);

            document.querySelector('body').addDelegateListener('click', 'section', function (e) {
                //console.log("clicked!");
                return true;
            });
        })();

        /***/
    }),
    /* 1 */
    /***/ (function (module, exports) {

        function _typeof(obj) {
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                    return typeof obj;
                };
            } else {
                _typeof = function _typeof(obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
            }
            return _typeof(obj);
        }

        !function (n) {
            var r = {};

            function o(e) {
                if (r[e]) return r[e].exports;
                var t = r[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports;
            }

            o.m = n, o.c = r, o.d = function (e, t, n) {
                o.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                });
            }, o.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                });
            }, o.t = function (t, e) {
                if (1 & e && (t = o(t)), 8 & e) return t;
                if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
                var n = Object.create(null);
                if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t) for (var r in t) {
                    o.d(n, r, function (e) {
                        return t[e];
                    }.bind(null, r));
                }
                return n;
            }, o.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default;
                } : function () {
                    return e;
                };
                return o.d(t, "a", t), t;
            }, o.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, o.p = "", o(o.s = 0);
        }([function (e, t, n) {
            var r = n(1);

            Element.prototype.addDelegateListener = function (eventType, selector, listener) {
                var e = this,
                    useCapture = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
                    t = r(this, selector, listener);
                return this.addEventListener(eventType, t, useCapture), {
                    off: function off() {
                        e.removeEventListener(eventType, t, useCapture), t = null;
                    }
                };
            };
        }, function (e, t, n) {
            var o = n(2);

            e.exports = function (e, selector, listener) {
                return function (selector, listener, e) {
                    var t = performance.now(),
                        n = o(e.target, selector);

                    if (n) {
                        var r = performance.now();
                        console.log(r - t), listener.call(n, e);
                    }
                }.bind(e, selector, listener);
            };
        }, function (e, t) {
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);

            e.exports = function (e, selector) {
                for (var t = e; t && 9 !== t.nodeType; t = t.parentElement) {
                    if (t.matches(selector)) return t;
                }
            };
        }]);

        /***/
    }),
    /* 2 */
    /***/ (function (module, exports, __webpack_require__) {

        var closest = __webpack_require__(3);

        /**
         * Delegates event to a selector.
         *
         * @param {Element} element
         * @param {String} selector
         * @param {String} type
         * @param {Function} callback
         * @param {Boolean} useCapture
         * @return {Object}
         */
        function _delegate(element, selector, type, callback, useCapture) {
            var listenerFn = listener.apply(this, arguments);

            element.addEventListener(type, listenerFn, useCapture);

            return {
                destroy: function () {
                    element.removeEventListener(type, listenerFn, useCapture);
                }
            }
        }

        /**
         * Delegates event to a selector.
         *
         * @param {Element|String|Array} [elements]
         * @param {String} selector
         * @param {String} type
         * @param {Function} callback
         * @param {Boolean} useCapture
         * @return {Object}
         */
        function delegate(elements, selector, type, callback, useCapture) {
            // Handle the regular Element usage
            if (typeof elements.addEventListener === 'function') {
                return _delegate.apply(null, arguments);
            }

            // Handle Element-less usage, it defaults to global delegation
            if (typeof type === 'function') {
                // Use `document` as the first parameter, then apply arguments
                // This is a short way to .unshift `arguments` without running into deoptimizations
                return _delegate.bind(null, document).apply(null, arguments);
            }

            // Handle Selector-based usage
            if (typeof elements === 'string') {
                elements = document.querySelectorAll(elements);
            }

            // Handle Array-like based usage
            return Array.prototype.map.call(elements, function (element) {
                return _delegate(element, selector, type, callback, useCapture);
            });
        }

        /**
         * Finds closest match and invokes callback.
         *
         * @param {Element} element
         * @param {String} selector
         * @param {String} type
         * @param {Function} callback
         * @return {Function}
         */
        function listener(element, selector, type, callback) {
            return function (e) {
                const t0 = performance.now();
                e.delegateTarget = closest(e.target, selector);

                if (e.delegateTarget) {
                    const t1 = performance.now();
                    console.log(t1 - t0);
                    callback.call(element, e);
                }
            }
        }

        module.exports = delegate;


        /***/
    }),
    /* 3 */
    /***/ (function (module, exports) {

        var DOCUMENT_NODE_TYPE = 9;

        /**
         * A polyfill for Element.matches()
         */
        if (typeof Element !== 'undefined' && !Element.prototype.matches) {
            var proto = Element.prototype;

            proto.matches = proto.matchesSelector ||
                proto.mozMatchesSelector ||
                proto.msMatchesSelector ||
                proto.oMatchesSelector ||
                proto.webkitMatchesSelector;
        }

        /**
         * Finds the closest parent that matches a selector.
         *
         * @param {Element} element
         * @param {String} selector
         * @return {Function}
         */
        function closest(element, selector) {
            while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                if (typeof element.matches === 'function' &&
                    element.matches(selector)) {
                    return element;
                }
                element = element.parentNode;
            }
        }

        module.exports = closest;


        /***/
    })
    /******/]);