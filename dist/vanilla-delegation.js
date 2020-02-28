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
/******/ 	return __webpack_require__(__webpack_require__.s = "./vanilla-delegation.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/addDelegateListener.js":
/*!************************************!*\
  !*** ./src/addDelegateListener.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addDelegateListener; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_createInternalHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/_createInternalHandler */ "./src/utils/_createInternalHandler.js");


/**
 * _addDelegateListenerInternal
 * @param {string} eventType
 * @param {string} selector
 * @param {function} handler
 * @param {boolean} useCapture
 */

var addDelegateListenerInternal = function _addDelegateListenerInternal(eventType, selector, handler, useCapture) {
  var handlerHash = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createKey"])([handler.name, selector, useCapture]);

  if (this.delegatedListenersList && handlerHash in this.delegatedListenersList) {
    console.warn('Cannot bind event. A listener with same arguments is already registered. ' + 'If you need to register multiple listeners with same arguments consider to pass an anonymous function as handler, ' + 'but be aware that you won\'t be able to remove the listener in the future.');
    return;
  }

  var internalHandler = Object(_utils_createInternalHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(this, selector, handler);
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


function addDelegateListener(eventType, selector, handler) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isValidString"])(eventType) || !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isValidString"])(selector) || typeof handler !== 'function') {
    console.warn('Cannot bind event. Wrong arguments types');
    return;
  }

  if (this instanceof NodeList || this instanceof HTMLCollection) {
    var length = this.length;

    for (var i = 0; i < length; i += 1) {
      addDelegateListenerInternal.call(this[i], eventType, selector, handler, useCapture);
    }

    return;
  }

  if (this instanceof Element) {
    addDelegateListenerInternal.call(this, eventType, selector, handler, useCapture);
    return;
  }

  console.warn('Cannot bind event on non-Element objects');
}

/***/ }),

/***/ "./src/removeDelegateListener.js":
/*!***************************************!*\
  !*** ./src/removeDelegateListener.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeDelegateListener; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");

/**
 *
 * @param {string} eventType
 * @param {string} selector
 * @param {function} handler
 * @param {boolean} useCapture
 */

function removeDelegateListener(eventType, selector, handler) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isValidString"])(eventType) || !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isValidString"])(selector) || typeof handler !== 'function' || handler.name === '') {
    console.warn('Cannot remove event. Wrong arguments types or handler is anonymous. Cannot unbind anonymous functions.');
    return;
  }

  var key = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createKey"])([handler.name, selector, useCapture]);

  if (this.delegatedListenersList && key in this.delegatedListenersList) {
    this.removeEventListener(this.delegatedListenersList[key].eventType, this.delegatedListenersList[key].internalHandler, false);
    delete this.delegatedListenersList[key];
  }
}

/***/ }),

/***/ "./src/utils/_createInternalHandler.js":
/*!*********************************************!*\
  !*** ./src/utils/_createInternalHandler.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createInternalHandler; });
/* harmony import */ var _getMatchedElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMatchedElement */ "./src/utils/_getMatchedElement.js");

/**
 * create internal handler
 * @param attachedElement
 * @param selector
 * @param handler
 */

function createInternalHandler(attachedElement, selector, handler) {
  return function createInternalSubHandler(selectorInput, handlerInput, eventInput) {
    var matchedElement = Object(_getMatchedElement__WEBPACK_IMPORTED_MODULE_0__["default"])(this, eventInput.target, selectorInput);

    if (matchedElement) {
      // save Element to which the event was originally attached (jQuery-like)
      eventInput.delegateTarget = this;
      handlerInput.call(matchedElement, eventInput);
    }
  }.bind(attachedElement, selector, handler);
}

/***/ }),

/***/ "./src/utils/_getMatchedElement.js":
/*!*****************************************!*\
  !*** ./src/utils/_getMatchedElement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


function getMatchedElement(attachedElement, element, selector) {
  // node.ELEMENT_NODE;
  var ELEMENT_NODE = 1;

  for (var el = element; el && el.nodeType === ELEMENT_NODE && el !== attachedElement; el = el.parentElement) {
    if (el.matches(selector)) return el;
  }

  return attachedElement.nodeType === ELEMENT_NODE && attachedElement.matches(selector) ? attachedElement : false;
}

/* harmony default export */ __webpack_exports__["default"] = (getMatchedElement);

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: createKey, isValidString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKey", function() { return createKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidString", function() { return isValidString; });
/**
 * in case string alteration needed in the future
 * @param {Array} text
 * @returns {string}
 */
function createKey(text) {
  return text.join('');
}
/**
 * check valid string
 * @param eventType
 * @returns {boolean}
 */

function isValidString(eventType) {
  return typeof eventType === 'string' && eventType !== '';
}

/***/ }),

/***/ "./vanilla-delegation.js":
/*!*******************************!*\
  !*** ./vanilla-delegation.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_addDelegateListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/addDelegateListener */ "./src/addDelegateListener.js");
/* harmony import */ var _src_removeDelegateListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/removeDelegateListener */ "./src/removeDelegateListener.js");



(function exportVanillaDelegation() {
  window.Element.prototype.addDelegateListener = _src_addDelegateListener__WEBPACK_IMPORTED_MODULE_0__["default"];
  window.Element.prototype.removeDelegateListener = _src_removeDelegateListener__WEBPACK_IMPORTED_MODULE_1__["default"];
  window.NodeList.prototype.addDelegateListener = _src_addDelegateListener__WEBPACK_IMPORTED_MODULE_0__["default"];
  window.HTMLCollection.prototype.addDelegateListener = _src_addDelegateListener__WEBPACK_IMPORTED_MODULE_0__["default"];
})();

/***/ })

/******/ });
//# sourceMappingURL=vanilla-delegation.js.map