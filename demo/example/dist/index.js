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
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/example/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/example/src/index.js":
/*!***********************************!*\
  !*** ./demo/example/src/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../src/event-delegation */ "./src/event-delegation.js");

(function () {
  /**
   * bind event on single element
   */
  window.bodyHandler = function aHandler(e) {
    e.preventDefault();
    console.log('listen body; delegate a', this, e);
  };

  document.querySelector('body').addDelegateListener('click', 'a', bodyHandler);
  /**
   * bind event on multiple elements
   */

  window.divHandler = function divHandler(e) {
    console.log('listen div; delegate p', this, e);
  };

  document.querySelectorAll('div').addDelegateListener('click', 'p', divHandler);
  console.log('window.bodyHandler and window.divHandler have been respectively registered on <body> and <div> elements in this page');
  console.log("to removed those handlers use document.querySelector('body').removeDelegateListener('click', 'a', window.bodyHandler)");
  console.log("you can use removeDelegateListener() on single elements only");
})();

/***/ }),

/***/ "./src/createInternalHandler.js":
/*!**************************************!*\
  !*** ./src/createInternalHandler.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _getMatchedElement = __webpack_require__(/*! ./getMatchedElement */ "./src/getMatchedElement.js");
/**
 * create internal handler
 * @param attachedElement
 * @param selector
 * @param handler
 */


var createInternalHandler = function createInternalHandler(attachedElement, selector, handler) {
  return function (selector, handler, event) {
    var matchedElement = _getMatchedElement(this, event.target, selector);

    if (matchedElement) {
      event.delegateTarget = this; // save Element to which the event was originally attached (jQuery-like)

      handler.call(matchedElement, event);
    }
  }.bind(attachedElement, selector, handler);
};

module.exports = createInternalHandler;

/***/ }),

/***/ "./src/event-delegation.js":
/*!*********************************!*\
  !*** ./src/event-delegation.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _createHandler = __webpack_require__(/*! ./createInternalHandler */ "./src/createInternalHandler.js");

(function () {
  /**
   * in case string alteration needed in the future
   * @param {string} text
   * @returns {string}
   */
  var _createKey = function _createKey(text) {
    return text;
  };
  /**
   * _addDelegateListenerInternal
   * @param {Event} eventType
   * @param {string} selector
   * @param {function} handler
   * @returns {boolean}
   */


  var _addDelegateListenerInternal = function _addDelegateListenerInternal(eventType, selector, handler) {
    if (this.delegatedListenersList && handler.name in this.delegatedListenersList) {
      console.warn('Cannot bind event. Handler and selector already registered');
      return false;
    }

    var internalHandler = _createHandler(this, selector, handler);

    this.addEventListener(eventType, internalHandler, false);
    if (!this.delegatedListenersList) this.delegatedListenersList = [];
    if (handler.name === '') return true;

    var handlerHash = _createKey(handler.name + selector);

    this.delegatedListenersList[handlerHash] = {
      eventType: eventType,
      internalHandler: internalHandler
    };
  };
  /**
   * addDelegateListener
   * @param {Event} eventType
   * @param {string} selector
   * @param {function} handler
   */


  var addDelegateListener = function addDelegateListener(eventType, selector, handler) {
    if (typeof eventType !== 'string' || typeof selector !== 'string' || typeof handler !== 'function') {
      console.warn('Cannot bind event. Wrong arguments types');
      return false;
    }

    if (this instanceof NodeList) {
      var length = this.length;

      for (var i = 0; i < length; ++i) {
        _addDelegateListenerInternal.call(this[i], eventType, selector, handler);
      }

      return true;
    }

    if (this instanceof Element) {
      _addDelegateListenerInternal.call(this, eventType, selector, handler);

      return true;
    }

    console.warn('Cannot bind event on non-Element objects');
    return false;
  };
  /**
   *
   * @param {Event} eventType
   * @param {string} selector
   * @param {function} handler
   */


  var removeDelegateListener = function removeDelegateListener(eventType, selector, handler) {
    if (typeof eventType !== 'string' || typeof selector !== 'string' || typeof handler !== 'function' || handler.name === '') {
      console.warn('Cannot remove event. Wrong arguments types');
      return;
    }

    var key = _createKey(handler.name + selector);

    if (this.delegatedListenersList && key in this.delegatedListenersList) {
      this.removeEventListener(this.delegatedListenersList[key].eventType, this.delegatedListenersList[key].internalHandler, false);
      delete this.delegatedListenersList[key];
    }
  };

  window.Element.prototype.addDelegateListener = addDelegateListener;
  window.Element.prototype.removeDelegateListener = removeDelegateListener;
  window.NodeList.prototype.addDelegateListener = addDelegateListener;
})();

/***/ }),

/***/ "./src/getMatchedElement.js":
/*!**********************************!*\
  !*** ./src/getMatchedElement.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ELEMENT_NODE = Node.ELEMENT_NODE;
/**
 * apply polyfill
 */

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
/**
 * matcher
 * @param attachedElement
 * @param element
 * @param selector
 * @returns {boolean|Element}
 */


var getMatchedElement = function getMatchedElement(attachedElement, element, selector) {
  for (var el = element; el && el.nodeType === ELEMENT_NODE && el !== attachedElement; el = el.parentElement) {
    if (el.matches(selector)) return el;
  }

  return attachedElement.matches(selector) ? attachedElement : false;
};

module.exports = getMatchedElement;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map