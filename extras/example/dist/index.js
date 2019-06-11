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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * in case string alteration needed in the future
 * @param {Array} text
 * @returns {string}
 */
var _createKey = function _createKey(text) {
  return text.join('');
};
/**
 * check valid string
 * @param eventType
 * @returns {boolean}
 */


var _isValidString = function _isValidString(eventType) {
  return typeof eventType === 'string' && eventType !== '';
};

module.exports = {
  _createKey: _createKey,
  _isValidString: _isValidString
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);

(function () {
  /**
   * bind event on single element
   */
  var bodyHandler = function bodyHandler(e) {
    e.preventDefault();
    console.log('listen body; delegate a', this, e);
  };

  document.querySelector('body').addDelegateListener('click', 'a', bodyHandler);
  /**
   * bind event on multiple elements
   */

  var divHandler = function divHandler(e) {
    console.log('listen div; delegate p', this, e);
  };

  document.querySelectorAll('div').addDelegateListener('click', 'p', divHandler);
  window.bodyHandler = bodyHandler;
  window.divHandler = divHandler;
  console.log('window.bodyHandler and window.divHandler have been respectively registered on <body> and <div> elements in this page');
  console.log('to remove these handlers use document.querySelector(\'body\').removeDelegateListener(\'click\', \'a\', window.bodyHandler)');
  console.log('you can use removeDelegateListener() on single Element nodes only');
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var addDelegateListener = __webpack_require__(3);

var removeDelegateListener = __webpack_require__(6);

(function () {
  window.Element.prototype.addDelegateListener = addDelegateListener;
  window.Element.prototype.removeDelegateListener = removeDelegateListener;
  window.NodeList.prototype.addDelegateListener = addDelegateListener;
  window.HTMLCollection.prototype.addDelegateListener = addDelegateListener;
})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    _isValidString = _require._isValidString,
    _createKey = _require._createKey;

var _createInternalHandler = __webpack_require__(4);
/**
 * _addDelegateListenerInternal
 * @param {string} eventType
 * @param {string} selector
 * @param {function} handler
 * @param {boolean} useCapture
 */


var _addDelegateListenerInternal = function _addDelegateListenerInternal(eventType, selector, handler, useCapture) {
  var handlerHash = _createKey([handler.name, selector, useCapture]);

  if (this.delegatedListenersList && handlerHash in this.delegatedListenersList) {
    console.warn('Cannot bind event. A listener with same arguments is already registered. ' + 'If you need to register multiple listeners with same arguments consider to pass an anonymous function as handler, ' + 'but be aware that you won\'t be able to remove the listener in the future.');
    return;
  }

  var internalHandler = _createInternalHandler(this, selector, handler);

  this.addEventListener(eventType, internalHandler, useCapture);
  if (!this.delegatedListenersList) this.delegatedListenersList = [];
  if (handler.name === '') return;
  this.delegatedListenersList[handlerHash] = {
    eventType: eventType,
    internalHandler: internalHandler
  };
};
/**
 * addDelegateListener
 * @param {string} eventType
 * @param {string} selector
 * @param {function} handler
 * @param {boolean} useCapture
 */


var addDelegateListener = function addDelegateListener(eventType, selector, handler) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!_isValidString(eventType) || !_isValidString(selector) || typeof handler !== 'function') {
    console.warn('Cannot bind event. Wrong arguments types');
    return;
  }

  if (this instanceof NodeList || this instanceof HTMLCollection) {
    var length = this.length;

    for (var i = 0; i < length; ++i) {
      _addDelegateListenerInternal.call(this[i], eventType, selector, handler, useCapture);
    }

    return;
  }

  if (this instanceof Element) {
    _addDelegateListenerInternal.call(this, eventType, selector, handler, useCapture);

    return;
  }

  console.warn('Cannot bind event on non-Element objects');
};

module.exports = addDelegateListener;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _getMatchedElement = __webpack_require__(5);
/**
 * create internal handler
 * @param attachedElement
 * @param selector
 * @param handler
 */


var _createInternalHandler = function _createInternalHandler(attachedElement, selector, handler) {
  return function (selector, handler, event) {
    var matchedElement = _getMatchedElement(this, event.target, selector);

    if (matchedElement) {
      // save Element to which the event was originally attached (jQuery-like)
      event.delegateTarget = this;
      handler.call(matchedElement, event);
    }
  }.bind(attachedElement, selector, handler);
};

module.exports = _createInternalHandler;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

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


var _getMatchedElement = function _getMatchedElement(attachedElement, element, selector) {
  // node.ELEMENT_NODE;
  var ELEMENT_NODE = 1;

  for (var el = element; el && el.nodeType === ELEMENT_NODE && el !== attachedElement; el = el.parentElement) {
    if (el.matches(selector)) return el;
  }

  return attachedElement.nodeType === ELEMENT_NODE && attachedElement.matches(selector) ? attachedElement : false;
};

module.exports = _getMatchedElement;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    _isValidString = _require._isValidString,
    _createKey = _require._createKey;
/**
 *
 * @param {string} eventType
 * @param {string} selector
 * @param {function} handler
 * @param {boolean} useCapture
 */


var removeDelegateListener = function removeDelegateListener(eventType, selector, handler) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!_isValidString(eventType) || !_isValidString(selector) || typeof handler !== 'function' || handler.name === '') {
    console.warn('Cannot remove event. Wrong arguments types or handler is anonymous. Cannot unbind anonymous functions.');
    return;
  }

  var key = _createKey([handler.name, selector, useCapture]);

  if (this.delegatedListenersList && key in this.delegatedListenersList) {
    this.removeEventListener(this.delegatedListenersList[key].eventType, this.delegatedListenersList[key].internalHandler, false);
    delete this.delegatedListenersList[key];
  }
};

module.exports = removeDelegateListener;

/***/ })
/******/ ]);