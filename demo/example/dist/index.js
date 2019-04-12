/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);

(function () {
  /**
   * bind event on single element
   */
  window.myhandler1 = function myhandler1(e) {
    e.preventDefault();
    console.log('listen body; delegate a', this, e);
  };

    window.singleEvent = document.querySelector('body').addDelegateListener('click', 'a', myhandler1);
  /**
   * bind event on multiple elements
   */

  window.myhandler2 = function myhandler2(e) {
    console.log('listen div; delegate p', this, e);
  };

    window.multipleEvents = document.querySelectorAll('div').addDelegateListener('click', 'p', myhandler2);
  console.log('use singleEvent.off() to remove the listener');
  console.log('use multipleEvents.forEach(element => element.off()) to remove all multiple listeners');
})();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    var r,
        o,
        i,
        s = n(1);
    r = function r(e) {
        return e;
    }, o = function o(eventType, selector, e) {
        var t = r(e.name + selector);
        if (this.delegatedListenersList && e.name in this.delegatedListenersList) return console.warn("Cannot bind event. Handler and selector already registered"), !1;
        var n = s(this, selector, e);
        this.addEventListener(eventType, n, !1), this.delegatedListenersList || (this.delegatedListenersList = []), this.delegatedListenersList[t] = {
            eventType: eventType,
            internalHandler: n
    };
    }, i = function i(eventType, selector, e) {
        if ("string" == typeof eventType) {
            if ("string" == typeof selector) {
                if ("function" == typeof e && "" !== e.name) {
                    if (this instanceof NodeList) for (var t = this.length, n = 0; n < t; ++n) {
                        o.call(this[n], eventType, selector, e);
                    } else this instanceof Element ? o.call(this, eventType, selector, e) : console.warn("Cannot bind event on non-Element objects");
                } else console.warn("Cannot bind event. Handler must be a named function in order to safely remove it later.");
            } else console.warn("Cannot bind event. Selector must be a string.");
        } else console.warn("Cannot bind event. EventType must be a string.");
    }, Element.prototype.addDelegateListener = i, Element.prototype.removeDelegateListener = function (eventType, selector, e) {
        if ("string" == typeof eventType) {
            if ("string" == typeof selector) {
                if ("function" == typeof e && "" !== e.name) {
                    var t = r(e.name + selector);
                    this.delegatedListenersList && t in this.delegatedListenersList && (this.removeEventListener(this.delegatedListenersList[t].eventType, this.delegatedListenersList[t].internalHandler, !1), delete this.delegatedListenersList[t]);
                } else console.warn("Cannot remove event. Handler must be a named function in order to safely remove it later.");
            } else console.warn("Cannot remove event. Selector must be a string.");
        } else console.warn("Cannot remove event. EventType must be a string.");
    }, NodeList.prototype.addDelegateListener = i;
}, function (e, t, n) {
  var r = n(2);

  e.exports = function (e, selector, t) {
    return function (selector, e, t) {
      var n = r(this, t.target, selector);
      n && (t.delegateTarget = this, e.call(n, t));
    }.bind(e, selector, t);
  };
}, function (e, t) {
  var r = Node.ELEMENT_NODE;
  Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);

  e.exports = function (e, t, selector) {
    for (var n = t; n && n.nodeType === r && n !== e; n = n.parentElement) {
      if (n.matches(selector)) return n;
    }

    return !!e.matches(selector) && e;
  };
}]);

/***/ })
/******/ ]);