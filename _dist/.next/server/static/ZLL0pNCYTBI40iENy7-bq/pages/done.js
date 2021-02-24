module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0+As":
/***/ (function(module, exports) {

module.exports = "./../_next/static/images/web-event-upload-done-c07d5a5f6351e60d4ab5b26d208f4c53.png";

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("BEpR");


/***/ }),

/***/ "4kNS":
/***/ (function(module, exports) {

module.exports = "./../_next/static/images/app_event_upload_done-9d1f97496bc45ea1849a98608c86a658.png";

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "BEpR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ScreenModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("QmJI");
/* harmony import */ var _src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("kS2n");











var Done =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Done, _React$Component);

  function Done() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Done);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Done)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      loaded: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "model", null);

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Done, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.model = new _ScreenModel__WEBPACK_IMPORTED_MODULE_8__["default"]();
      this.setState({
        loaded: true
      });
      Object(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_9__[/* sendEvent */ "b"])(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_9__[/* ZB_EVENT_TYPE */ "a"].ZB_SCREEN_VIEW, {
        screen_name: "청약인증완료",
        ad_area_danji_id: "51434",
        ad_name: "롯데캐슬클라시아"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var loaded = this.state.loaded;
      if (!loaded) return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null);
      var images = this.model.images;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: images.title,
        className: "catalog_img-full",
        alt: "done"
      }));
    }
  }]);

  return Done;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Done);

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "QmJI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vYYK");




var ScreenModel =
/*#__PURE__*/
function () {
  function ScreenModel() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ScreenModel);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "images", this.isMobile ? {
      title: __webpack_require__("4kNS")
    } : {
      title: __webpack_require__("0+As")
    });
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ScreenModel, [{
    key: "isMobile",
    get: function get() {
      return window.innerWidth <= 650;
    }
  }]);

  return ScreenModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (ScreenModel);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YOb4":
/***/ (function(module, exports) {

module.exports = require("@aws-amplify/analytics");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iQeP":
/***/ (function(module, exports) {

module.exports = require("@aws-amplify/core");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kS2n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(defineProperty["a" /* default */])(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: external "@aws-amplify/analytics"
var analytics_ = __webpack_require__("YOb4");
var analytics_default = /*#__PURE__*/__webpack_require__.n(analytics_);

// EXTERNAL MODULE: external "@aws-amplify/core"
var core_ = __webpack_require__("iQeP");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// CONCATENATED MODULE: ./src/utils/DeviceInfos.js




var DeviceInfos_DeviceInfos =
/*#__PURE__*/
function () {
  function DeviceInfos() {
    Object(classCallCheck["a" /* default */])(this, DeviceInfos);
  }

  Object(createClass["a" /* default */])(DeviceInfos, null, [{
    key: "getSDKVersion",
    value: function getSDKVersion() {
      try {
        return 0;
      } catch (e) {
        return 0;
      }
    }
  }, {
    key: "getBundleId",
    value: function getBundleId() {
      try {
        return process.env.PLATFORM === "m" ? "com.jikbang4a.m" : "com.jikbang4a.pc";
      } catch (e) {
        return "";
      }
    }
  }, {
    key: "getVersion",
    value: function getVersion() {
      return "";
    }
  }, {
    key: "getIpAddress",
    value: function () {
      var _getIpAddress = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                return _context.abrupt("return", "");

              case 4:
                _context.prev = 4;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", "");

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 4]]);
      }));

      function getIpAddress() {
        return _getIpAddress.apply(this, arguments);
      }

      return getIpAddress;
    }()
  }, {
    key: "getBuildNumber",
    value: function getBuildNumber() {
      return "";
    }
  }, {
    key: "getCodePushVersion",
    value: function () {
      var _getCodePushVersion = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", "");

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getCodePushVersion() {
        return _getCodePushVersion.apply(this, arguments);
      }

      return getCodePushVersion;
    }()
  }, {
    key: "clearUpdates",
    value: function clearUpdates() {
      return;
    }
  }, {
    key: "getDeviceLocale",
    value: function getDeviceLocale() {
      try {
        return navigator.language;
      } catch (e) {
        return "";
      }
    }
  }, {
    key: "getBrand",
    value: function getBrand() {
      return "";
    }
  }, {
    key: "getModel",
    value: function getModel() {
      return "";
    }
  }, {
    key: "getDeviceId",
    value: function getDeviceId() {
      return "";
    }
  }, {
    key: "getDeviceName",
    value: function getDeviceName() {
      return "";
    }
  }, {
    key: "getSystemName",
    value: function getSystemName() {
      return process.env.PLATFORM;
    }
  }, {
    key: "getSystemVersion",
    value: function getSystemVersion() {
      return "";
    }
  }, {
    key: "getTimezone",
    value: function getTimezone() {
      return "";
    }
  }, {
    key: "getAppsflyerId",
    value: function () {
      var _getAppsflyerId = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3() {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", null);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getAppsflyerId() {
        return _getAppsflyerId.apply(this, arguments);
      }

      return getAppsflyerId;
    }()
  }, {
    key: "getAdIdObject",
    value: function () {
      var _getAdIdObject = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4() {
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", {
                  value: null,
                  uuid: null
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getAdIdObject() {
        return _getAdIdObject.apply(this, arguments);
      }

      return getAdIdObject;
    }()
  }, {
    key: "getUserAgent",
    value: function () {
      var _getUserAgent = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5() {
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                return _context5.abrupt("return", "".concat(navigator.userAgent));

              case 4:
                _context5.prev = 4;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", "");

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 4]]);
      }));

      function getUserAgent() {
        return _getUserAgent.apply(this, arguments);
      }

      return getUserAgent;
    }()
  }]);

  return DeviceInfos;
}();
// CONCATENATED MODULE: ./src/utils/PinPoint.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sendEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZB_EVENT_TYPE; });
/* unused harmony export endpointGenerated */









var logger = new core_["ConsoleLogger"]("PinPoint");
function sendEvent(_x, _x2, _x3, _x4) {
  return _sendEvent.apply(this, arguments);
}

function _sendEvent() {
  _sendEvent = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(eventName, params, context, args) {
    var generated, values;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return endpointGenerated();

          case 3:
            generated = _context.sent;
            values = getParamsByContext(eventName, params, context, args);
            analytics_default.a.record({
              name: eventName.toString(),
              attributes: _objectSpread({}, values, generated),
              immediate: true
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _sendEvent.apply(this, arguments);
}

var ZB_EVENT_TYPE = {
  ZB_APP_INSTALL: "ZB_APP_INSTALL",
  ONEROOM_FILTER_RESULTS: "ONEROOM_FILTER_RESULTS",
  VILLA_FILTER_RESULTS: "VILLA_FILTER_RESULTS",
  OFFICETEL_FILTER_RESULTS: "OFFICETEL_FILTER_RESULTS",
  APART_FILTER_RESULTS: "APART_FILTER_RESULTS",
  ZB_SCREEN_MAP_CLICK: "ZB_SCREEN_MAP_CLICK",
  ZB_GNB_CLICK: "ZB_GNB_CLICK",
  SIGN_UP: "SIGN_UP",
  ZB_SCREEN_CLICK: "ZB_SCREEN_CLICK",
  ZB_SCREEN_VIEW: "ZB_SCREEN_VIEW",
  VIEW_ITEM: "VIEW_ITEM",
  ECOMMERCE_PURCHASE: "ECOMMERCE_PURCHASE",
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
  ZB_AD_CLICK: "ZB_AD_CLICK",
  ZB_AD_IMPRESSION: "ZB_AD_IMPRESSION",
  VIEW_SEARCH_RESULTS: "VIEW_SEARCH_RESULTS",
  ZB_WAY_SEARCHING: "ZB_WAY_SEARCHING",
  ZB_VR_MOVING: "ZB_VR_MOVING",
  ZB_VR_LOADING: "ZB_VR_LOADING",
  RN_BUNDLE_INIT: "RN_BUNDLE_INIT",
  CODE_PUSH_CHECK: "CODE_PUSH_CHECK",
  CODE_PUSH_START: "CODE_PUSH_START",
  CODE_PUSH_END: "CODE_PUSH_END",
  APART_PURCHASE: "APART_PURCHASE",
  ZB_AD_PAGE_OPEN: "ZB_AD_PAGE_OPEN" // 핀포인트 추가

};
function endpointGenerated() {
  return _endpointGenerated.apply(this, arguments);
}

function _endpointGenerated() {
  _endpointGenerated = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2() {
    var result, _result$, adid, uuid, userAgent, appsflyerId, deviceIP, params, sendParams;

    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return promise_default.a.all([DeviceInfos_DeviceInfos.getAdIdObject(), DeviceInfos_DeviceInfos.getUserAgent(), DeviceInfos_DeviceInfos.getAppsflyerId(), DeviceInfos_DeviceInfos.getIpAddress()]);

          case 2:
            result = _context2.sent;
            _result$ = result[0], adid = _result$.value, uuid = _result$.uuid;
            userAgent = result[1];
            appsflyerId = result[2];
            deviceIP = result[3];
            logger.log("adId= ", adid, " uuid= ", uuid, " appsflyerId= ", appsflyerId, " userAgent= ", userAgent);
            params = {
              appVersion: "".concat(DeviceInfos_DeviceInfos.getVersion()),
              locale: "".concat(DeviceInfos_DeviceInfos.getDeviceLocale()),
              make: "".concat(DeviceInfos_DeviceInfos.getBrand()),
              model: "".concat(DeviceInfos_DeviceInfos.getModel()),
              modelVersion: "".concat(DeviceInfos_DeviceInfos.getDeviceId()),
              platform: "".concat(DeviceInfos_DeviceInfos.getSystemName()),
              platformVersion: "".concat(DeviceInfos_DeviceInfos.getSystemVersion()),
              timezone: "".concat(DeviceInfos_DeviceInfos.getTimezone()),
              adId: adid,
              uuid: uuid,
              appsflyerId: appsflyerId,
              deviceIP: deviceIP // userAgent: userAgent

            };
            sendParams = {};

            keys_default()(params).forEach(function (key, index) {
              var value = params[key];
              if (!!value && value.length > 0) sendParams[key] = value;
            });

            return _context2.abrupt("return", sendParams);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _endpointGenerated.apply(this, arguments);
}

function getParamsByContext(eventName, params, context, args) {
  var result = {};

  keys_default()(params).forEach(function (key) {
    var value = getValueByContext(eventName, key, params[key], context, args);

    if (value) {
      result[key] = value;
    }
  });

  return result;
}

function getValueByContext(eventName, key, value, context, args) {
  var result = null;
  var error = null;

  if (value === null) {
    error = new Error("eventName: ".concat(eventName, ", key: ").concat(key, ": null value is not allowed in sendEvent param"));
  }

  switch (typeof value) {
    case "string":
      result = value;
      break;

    case "number":
      {
        result = "".concat(value);
        break;
      }

    case "boolean":
      {
        result = "".concat(value);
        break;
      }

    case "function":
      if (!!context) {
        try {
          var funcResult = value.call(context, context, args);
          result = getValueByContext(eventName, key, funcResult, context, args);
        } catch (e) {
          error = e;
        }
      }

      break;

    case "object":
      {
        error = new Error("\n\t\t\teventName: ".concat(eventName, ", key: ").concat(key, ", value: ").concat(stringify_default()(value), ": type object is not allowed in sendEvent param"));
        break;
      }

    case "symbol":
      {
        error = new Error("eventName: ".concat(eventName, ", key: ").concat(key, ", value: ").concat(value.toString(), ": type symbol is not allowed in sendEvent param"));
        break;
      }

    case "undefined":
      {
        error = new Error("eventName: ".concat(eventName, ", key: ").concat(key, ": type undefined is not allowed in sendEvent param"));
        break;
      }
  }

  if (error) {
    if (process.env.STAGE === "prod") {// Bugsnag.notify(error)
    } else {
      console.error(error);
    }
  }

  return result;
}

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });