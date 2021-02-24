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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "++qH":
/***/ (function(module, exports) {

module.exports = "./../_next/static/images/m_notice_2-5affb448e888532602f3909c8f6c1b63.png";

/***/ }),

/***/ "+Bb/":
/***/ (function(module, exports) {

module.exports = "./../_next/static/images/m_up_load_photo_btn-62779605d02a8f6c0da49af74a8cf5a5.png";

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/b+T":
/***/ (function(module, exports) {

module.exports = "./../_next/static/images/web-noti-2-65a4aa7e32cf1e1dcd1b0b36682885cd.png";

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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gDgk");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "4plC":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAF5vfZ2AAAAYFBMVEUAAABVVVVQUFBJSUlGRkZHR0dGRkZERERERERISEhHR0dERERGRkZGRkZFRUVGRkZERERFRUVERERERERERERFRUVERERFRUVFRUVERERFRUVFRUVFRUVERERFRUVERER4gZ8lAAAAH3RSTlMADBAVFhkhODxAQUtmdX6Eh4mKrLPJys/X2Nv1+fr9QuyBeQAAAO5JREFUaN7tmUkOgkAQANsFUHADVxx0/v9LRb1pMOkWJmDVDdpKScKWQeRXeMPm27ZmR8sc/+twtWeB737ovOVPdfQD+MChcep83DjNBjb9dhJFg5+vuCSgBZz3S73afNGihlP3elVkepcNT+0Ivbf6iFsiAAQkqeZqNzXcAGvXGdwKFxfX5IrFreVCLZdmOw9oF9jYvbA3Jlv/WnHyZ96tAAAAYJik9XcDFwfJev33JGO2ysiSJUuWLNkuScJkRS6P7LXrrMj2ecCGhSAtUflK53+ZLkiTJk2adG/Ts1DpRYC1iPF6l09YkgEAGBI3yUBGk9MGh2YAAAAASUVORK5CYII="

/***/ }),

/***/ "6vSa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vYYK");
/* harmony import */ var _src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("kS2n");







var ScreenModel =
/*#__PURE__*/
function () {
  function ScreenModel() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, ScreenModel);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "images", this.isMobile ? {
      title: __webpack_require__("oRZ0"),
      placeholder: __webpack_require__("+Bb/"),
      frame: __webpack_require__("Hu6G"),
      footer: __webpack_require__("++qH"),
      arrow: __webpack_require__("4plC"),
      replay: __webpack_require__("GdwD")
    } : {
      title: __webpack_require__("w7Xr"),
      placeholder: __webpack_require__("Gkzk"),
      frame: __webpack_require__("zTVa"),
      footer: __webpack_require__("/b+T"),
      arrow: __webpack_require__("4plC"),
      replay: __webpack_require__("GdwD")
    });
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ScreenModel, [{
    key: "genQueryParams",
    value: function genQueryParams(path) {
      var params = {};
      path.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
        params[key] = value;
      });
      return params;
    }
  }, {
    key: "requestSubmit",
    value: function () {
      var _requestSubmit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(phone, file, mktAgreement) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // submit 이벤트 호출 시 핀포인트 호출
                Object(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_5__[/* sendEvent */ "b"])(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_5__[/* ZB_EVENT_TYPE */ "a"].ZB_SCREEN_CLICK, {
                  screen_name: "청약인증",
                  button_name: "보내기",
                  ad_name: "롯데캐슬클라시아",
                  ad_area_danji_id: area_danji_id
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function requestSubmit(_x, _x2, _x3) {
        return _requestSubmit.apply(this, arguments);
      }

      return requestSubmit;
    }()
  }, {
    key: "isMobile",
    get: function get() {
      return window.innerWidth <= 650;
    }
  }]);

  return ScreenModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (ScreenModel);

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

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "GdwD":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA8CAMAAAAXHsnOAAABy1BMVEUAAAD/AAD/AAD/AAD/AAD/Kyv/JCT/ICD/ORz/Mxr/Li7/Kyv/Oyf/NyT/MyL/MDD/LS3/Myb/Oi7/Nyz/NSv/Myn/Oyf/OS//Ny7/NSz/Myv/Oin/Ni7/NS3/OSv/OS3/OCz/Nyv/OS//Oiv/Oi3/Oy7/Oi3/Oy//Oi7/OS7/Nyz/Oi//OS//OjD/Oy7/OC//Oi7/OTD/Oy//Oi7/OS7/OzD/Oi//Oi//OC7/OjD/Oi//OS//OS7/Oy7/OjD/OjD/Oy//Oi7/Oi7/OS//Oi//Oi7/OS7/OTD/Oi//OjD/Oi//OS//OjD/OS//Oy//Oi7/OjD/OS//Oy//Oy//OzD/Oi//Oi//OS//OjD/OS//Oy//Oi//Oi7/Oy//Oi//Oi//Oi//OzD/OjD/Oi//OzD/OjD/OjD/Oy//OjD/OzD/Oy//OzD/OzD/Oi//Oi//Oy//OjD/Oy//OjD/Oy//OzD/OjD/Oi//Oi//Oy//OjD/OjD/OjD/Oy//Oy//Oi//OjD/OzD/Oy//Oi//OjD/OzD/Oy//Oi//OzD/OjD/Oy//OjD/Oi//Oy//Oy//OjD/OjD/Oy//Oy//Oi//OjD/OzD/OzD/Oi//Oi//OzBZpk4aAAAAmHRSTlMAAQIDBAYHCAkKCwwNDg8QERQWFxgZGhscHR4fISIkKCkqMTU5PT5BQkNFRkdLTlJUVVdYWVtcXV9gYWJjZGVmaGlqbG1ub3Bydnd4e31+f4CBgoeLjI2OkJeYmZqcnp+ipaaoqrCxsrW2t7q7vMLExsfL1NXW19jZ2tvc3d7f4OHi4+Xm5+nr7O7x8vP09fb3+Pn6+/z9/pQyWhQAAAKnSURBVEjHlZb5XxJBGMYnCJEwDSWNjA41JTOiw5AOqdxSOySQ7tuktDwiKJKyyNKMuDRl58+NfWdZFpjZ4/1lP/Pu8/3sOzPvPLMI0eNCI9IV3t+7dem59MYuPfqRAs7qAbxZrAvg0lgXwBWwLsCbwboA7i/WBZB6tANiPZqBcj0CYN2ho55S8N8/zDy41N1h0FRPJT7eP7mPpb+WxdT4FD5IB25vY0b8vGKmAQ1BJoGfUj+yM1SUaba25KPl0zTCENyUFLn9tu6Rl/F/5XHmIo0wVarKWoRE89XFciI/qFxVeaebT7wVM3/6FauqtIb5lrg/8QNKayXvpcFfhHhlUaiqqvn6VglxmbqBRqiqulvP5QD4ZkfMqmraOwBA8Q69SYwhvhYwzwCx5KATpbUq1BygoxtAnGJ0bkMo11Sdsc4B8MjEIIw3apdwOC8AKQfrdNQdUNsSfMKl3RAjANzUDowC8EI7cJwXgEXtwCFomTiyNgmhwYQc0JUrKJErRaZdHegAIIXiYFtH1IHDUFIMLQAwoA4MwKQX0HNYrTF1YAyEz9A4PCPqwBsQjiMXPJM2Nb0tCcI+5EgJz4JfDfAXxOYzPQRy3qqst85L7e2B2W/2KgO9YD+8R9iQBLCzZiW9eRZECbgsJojbBZWAIDGBCRi0LhPzPM/W+/LEw1vF00dsaq2f2dlrRDEsjhunyHh1iK4fEvVT0k9XZ0y8FAIU97QEiO3hWGcl6VoXPf2du6Va3uKeE1+tH5Pnz0hXbpRrrqT3cFHphjlbU2e6/GY7MX29x97WtrdndPqzdCOl6+bnScruQL5YCl6WSHrqJ+d8wrx18WMn1VD9K3T5Dz/LUZ2T8Xp5bNKp0DPt7nCsSh12qxmKwd7luxt5//VL9PU9X5e9zrD+A7NJ4fSjcfISAAAAAElFTkSuQmCC"

/***/ }),

/***/ "Gkzk":
/***/ (function(module, exports) {

module.exports = "./../_next/static/images/w-up-load-photo-btn-ebe2567c14158b4f509d69159bf08b53.png";

/***/ }),

/***/ "Hu6G":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABCQAAAMgCAMAAAG7eXM1AAAB7FBMVEUAAAD///////+qqqr///+/v7/////////////j4+PY2NjMzMzf39/V1dX////////Z2dnb29v////c3NzZ2dnT09PV1dX////W1tb////////////d3d3////////U1NT////////T09P////v7+/S0tLb29vR0dHS0tLS0tL////d3d3////////////////6+vrT09PT09P////S0tL////a2tr////////////S0tLU1NT////T09PR0dHR0dHt7e3////S0tLS0tLS0tLR0dHS0tLX19fT09PS0tLk5OT////R0dHR0dHS0tLS0tLR0dHR0dHT09PR0dHS0tLS0tLS0tL////S0tLh4eH6+vr////+/v7S0tL////v7+/////R0dH////////W1tbp6enS0tLS0tLi4uL////R0dH7+/vS0tLq6urR0dHR0dHa2trS0tL+/v7////S0tLR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///9E8PCCAAAAdXRSTlMAAQIDAwQEBQgJDQ8QEhITFBUVFhsdHh4fJCUpLS0wNTU2Oj0+RE1OT1BQUldbXV9kaGlqa3R2dnd5fH2BhYaLjo6PkpSXmJmbnqCrrbK1tre+v8TFxsfKy8vN0NHS0tTd39/i6Ons7u7u7+/z8/T19/n6+v2frCDAAAAUCUlEQVR42u3d/5eU1X0H8LvWuNpGDPVL09hqS2ox1iQt0aaholVrUxu1UhO1X7SxbaBaKt3qe1lgFZFGV6KAghBhFxbuP9ofZnZ3dtidYdQ5M87zep2cHLI5ic/5PO/7vs9w54FSSimlfDepo/jXT6bKiuvn6yi1LiJ1tFJKKdfXkSulHB6Lqxj9RdSU743BVdSRZ7M1i/G4iuqOuCPuiDvijrgj7og74o64I+6IO+KOuCPuiDvijrgj7og74o64I+6IO+KOuCPuiDvijrgj7og74o64I+6IO+KOuCPuiDvijrgj7og7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"

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

/***/ "gDgk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ScreenModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("6vSa");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("kS2n");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("xXj+");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_14__);















var bizPlatform = "www";

if (react_device_detect__WEBPACK_IMPORTED_MODULE_14__["isAndroid"]) {
  bizPlatform = "and";
}

if (react_device_detect__WEBPACK_IMPORTED_MODULE_14__["isIOS"]) {
  bizPlatform = "ios";
}

var business = "";
var mkt = "";
var adId = "";
var user_no = "";
var windowNavigator = global.navigator;
var userPlatform = "www";

try {
  var filter = "win16|win32|win64|mac|macintel";
  var navPlatform = windowNavigator.platform.toLowerCase();
  var navUserAgent = windowNavigator.userAgent.toLowerCase();

  if (filter.indexOf(navPlatform) < 0) {
    if (navUserAgent.match('android') != null) {
      userPlatform = "Android";
    } else if (navUserAgent.match('iphone') != null || navUserAgent.match('ipad') != null || navUserAgent.match('ipod') != null) {
      userPlatform = "iOS";
    } else {
      userPlatform = "m";
    }
  }
} catch (e) {}

var apiEndPoint = "https://apis.zigbang.com/v2/campaign/pre_consulting"; //dev
//const apiEndPoint = "https://apis.zigbang.com/v2/campaign/pre_consulting"; //real
// const apiEndPoint = "https://apis-preview.zigbang.net/v2/campaign/pre_consulting"; //preview

var Register =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Register, _React$Component);

  function Register() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Register)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "state", {
      loaded: false,
      phone: "",
      isAgreementExtended: false,
      agreement1: false,
      agreement2: false,
      agreement3: false,
      file: null,
      previewImg: null,
      isProcessing: false,
      popTimer: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "modalRef1", react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "modalRef2", react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "modalRef3", react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "toastRef", react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "model", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "params", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Register, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.model = new _ScreenModel__WEBPACK_IMPORTED_MODULE_11__["default"]();
      this.setState({
        loaded: true
      });
      this.getParam();
      setTimeout(function () {
        window && window.parent.postMessage("onLoadEnd", "*");
      }, 1000);
      var params = this.model.genQueryParams(this.props.router.asPath);
      var path = this.props.router.asPath;

      if (path.indexOf("?") != -1) {
        path = path.substring(0, path.indexOf("?"));
      }

      var arSplitUrl = path.split("/");
      var nArLength = arSplitUrl.length;
      var domain = this.props.router.query.domain;
      this.state.domain = domain;
      var domain_platform = "";
      var mkt_source = "";

      if (domain) {
        if (domain === "zigbang") domain_platform = "zb";
        if (domain === "daum") domain_platform = "da";
        if (domain === "hogangnono") domain_platform = "hg";
      }

      if (params.mkt_source) {
        mkt_source = params.mkt_source;
      }

      if (params.adId || params.adid) {
        adId = params.adId || params.adid;
      }

      if (params.user_no) {
        user_no = params.user_no;
      }

      business = domain_platform + "_" + bizPlatform;
      mkt = mkt_source;
      var time = new Date().getTime();
      var headTag = document.getElementsByTagName("body")[0];
      var newScript = document.createElement('script');
      newScript.type = 'text/javascript';

      newScript.onload = function () {};

      newScript.src = '../static/js/common.min.js?ts=' + time;
      headTag.appendChild(newScript); // 페이지 진입 시 핀포인트 호출

      Object(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_13__[/* sendEvent */ "b"])(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_13__[/* ZB_EVENT_TYPE */ "a"].ZB_SCREEN_VIEW, {
        user_no: user_no,
        adId: adId,
        screen_name: "분양카달로그",
        ad_name: "더샵거제디클리브",
        platform: userPlatform,
        business: business,
        mkt: mkt
      });

      if (adId) {
        var changeUrl = this.updateURLParameter(location.href, 'adid', '');
        history.pushState("", "", changeUrl);
      }
    }
  }, {
    key: "updateURLParameter",
    value: function updateURLParameter(url, param, paramVal) {
      var TheAnchor = null;
      var newAdditionalURL = "";
      var tempArray = url.split("?");
      var baseURL = tempArray[0];
      var additionalURL = tempArray[1];
      var temp = "";

      if (additionalURL) {
        var tmpAnchor = additionalURL.split("#");
        var TheParams = tmpAnchor[0];
        TheAnchor = tmpAnchor[1];

        if (TheAnchor) {
          additionalURL = TheParams;
        }

        tempArray = additionalURL.split("&");

        for (var i = 0; i < tempArray.length; i++) {
          if (tempArray[i].split('=')[0] != param) {
            newAdditionalURL += temp + tempArray[i];
            temp = "&";
          }
        }
      } else {
        var tmpAnchor = baseURL.split("#");
        var TheParams = tmpAnchor[0];
        TheAnchor = tmpAnchor[1];

        if (TheParams) {
          baseURL = TheParams;
        }
      }

      if (TheAnchor) {
        paramVal += "#" + TheAnchor;
      }

      var rows_txt = temp + "" + param + "=" + paramVal;
      return baseURL + "?" + newAdditionalURL + rows_txt;
    }
    /*페이지 렌더*/

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var loaded = this.state.loaded;
      if (!loaded) return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "momo-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "momo-gnb"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        className: "btn-gnb-open"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", null)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "gnb-open-bg"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "gnb-open"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        className: "btn-gnb-close"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", null)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;"
      }, "HOME")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;"
      }, "RENEWAL 3.0")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;"
      }, "THE SHARP LIFE")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;"
      }, "LOCATION")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;"
      }, "GALLERY")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;"
      }, "INTERVIEW")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;"
      }, "TALK TALK")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;"
      }, "MODEL HOUSE")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;"
      }, "EVENT")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;"
      }, "SUMMARY"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section kv"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "iframe-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/kv_2nd.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("iframe", {
        id: "video01",
        frameBorder: "0",
        allow: "fullscreen; autoplay",
        allowFullScreen: true,
        "data-src": "https://apis.zigbang.com/v2/vimeo/514157521?dnt=1&muted=1",
        "data-idx": "0"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        className: "btn-sound",
        "data-idx": "0",
        "data-muted": "true"
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section emblem"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box bg-type1"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type1"
      }, "RENEWAL 3.0"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "scroll-animate"
      }, "\uACBD\uB0A8\uC5D0\uC11C \uCCAB \uB9CC\uB0A8", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uB9AC\uB274\uC5BC\uB41C \uB354\uC0F5")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "logo scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/logo.png",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "scroll-animate"
      }, "\uB354\uC0F5\uC774 2021\uB144 \uC0C8\uB85C\uC6B4 \uBAA8\uC2B5\uC73C\uB85C \uAC70\uC81C\uC5D0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uCC3E\uC544\uC635\uB2C8\uB2E4. \uB354\uC0F5\uC758 \uCC28\uBCC4\uD654\uB41C \uC775\uC2A4\uD14C\uB9AC\uC5B4,", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uB2E8\uC9C0\uC758 \uC0C1\uC9D5\uC774\uC790 \uC790\uB791\uC774 \uB420", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uB79C\uB4DC\uB9C8\uD06C \uAC8C\uC774\uD2B8, \uC138\uACC4\uC801\uC778 \uB514\uC790\uC778 \uAC70\uC7A5", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC54C\uB808\uC0B0\uB4DC\uB85C \uBA58\uB514\uB2C8\uC640 \uAC1C\uBC1C\uD55C \uD328\uD134\uAE4C\uC9C0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC8FC\uAC70\uC758 \u672C\uC774 \uB420 \uB354\uC0F5\uC758", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uB9AC\uB274\uC5BC 3.0\uC744 \uAC70\uC81C\uC5D0\uC11C \uB9CC\uB098\uBCF4\uC138\uC694.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "iframe-box scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/video_thumb_01.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("iframe", {
        id: "video02",
        frameBorder: "0",
        allow: "fullscreen; autoplay",
        allowFullScreen: true,
        "data-src": "https://apis.zigbang.com/v2/vimeo/514160123?dnt=1&muted=1",
        "data-idx": "1"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        className: "btn-sound",
        "data-idx": "0",
        "data-muted": "true"
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section life"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box bg-type2"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type2"
      }, "THE SHARP LIFE"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "scroll-animate"
      }, "\uAC70\uC81C\uC5D0\uC11C \uB9CC\uB098\uB294", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "'\uB354\uC0F5\uB2E4\uC6C0'")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "scroll-animate"
      }, "\uC9D1\uC774 \uAC00\uC838\uC57C\uD560 \uBCF8\uC9C8\uC801 \uAC00\uCE58, \uADF8\uB9AC\uACE0 \uADF8 \uC548\uC5D0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uB2F4\uAE38 \uB77C\uC774\uD504\uC2A4\uD0C0\uC77C\uC744 \uD568\uAED8 \uACE0\uBBFC\uD558\uB294", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uD3EC\uC2A4\uCF54\uAC74\uC124 \uB354\uC0F5 \uC544\uD30C\uD2B8.", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\u2018\uB354\uC0F5\uB2E4\uC6C0\u2019\uC774\uB780 \uC774\uB7F0 \uAC83\uC785\uB2C8\uB2E4.", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-slider scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slider slider06"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/life-img1.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/life-img2.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/life-img3.jpg",
        alt: ""
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "sub-text"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", null, "The \uACE0\uAE09\uC2A4\uB7EC\uC6B4 \uC678\uAD00"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uC54C\uB808\uC0B0\uB4DC\uB85C \uBA58\uB514\uB2C8\uC758 \uB3C5\uCC3D\uC801\uC778 \uD328\uD134 \uB514\uC790\uC778"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-slider right scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slider slider06"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/life-img4.jpg",
        alt: ""
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "sub-text"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", null, "The \uB611\uB611\uD55C \uC2DC\uC2A4\uD15C"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uC544\uD30C\uD2B8 \uB0B4\uC678\uBD80 \uC2DC\uC2A4\uD15C\uC744 \uC81C\uC5B4\uD560 \uC218 \uC788\uB294 \uC2A4\uB9C8\uD2B8 \uC6D4"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-slider scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slider slider06"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/life-img5.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/life-img6.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/life-img7.jpg",
        alt: ""
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "sub-text"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", null, "The \uCF8C\uC801\uD55C \uB2E8\uC9C0 \uB0B4\uBD80"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uC0AC\uACC4\uC808 \uB0B4\uB0B4 \uB9D1\uC740\uACF5\uAE30 \uAC00\uB4DD\uD55C \uC790\uC5F0\uCE5C\uD654\uC801 \uB2E8\uC9C0")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section location"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box bg-type1"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type1"
      }, "LOCATION"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "scroll-animate"
      }, "\uC0C8\uB85C\uC6B4 \uC8FC\uAC70\uD0C0\uC6B4", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uB79C\uC120 \uAC70\uC81C \uD0D0\uBC29\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "scroll-animate"
      }, "\uAC70\uC81C\uC758 \uC911\uC2EC\uC5D0 \uC704\uCE58\uD55C \uB354\uC0F5 \uAC70\uC81C\uB514\uD074\uB9AC\uBE0C.", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC8FC\uBCC0\uC5D0 \uD3B8\uC758 \uC2DC\uC124\uACFC \uC790\uC5F0 \uBC0F \uAD50\uC721 \uD658\uACBD\uC744 \uACE0\uB8E8", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uAC16\uCD94\uACE0 \uC0C8\uB85C\uC6B4 \uC8FC\uAC70 \uC911\uC2EC\uC9C0\uB85C \uBC1C\uB3CB\uC6C0\uD569\uB2C8\uB2E4.", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uAC70\uC81C \uC0C1\uB3D9\uC9C0\uAD6C \uB0B4 \uCD5C\uC120\uD638\uB3C4 \uC9C0\uC5ED\uC774\uC790", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uAD50\uD1B5\uAE4C\uC9C0 \uD3B8\uB9AC\uD55C \uAC70\uC81C\uC758 \uC911\uC2EC\uC73C\uB85C GO GO!")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "iframe-box scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/video_thumb_02.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("iframe", {
        id: "video03",
        frameBorder: "0",
        allow: "fullscreen; autoplay",
        allowFullScreen: true,
        "data-src": "https://apis.zigbang.com/v2/vimeo/514162764?dnt=1&muted=1",
        "data-idx": "2"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        className: "btn-sound",
        "data-idx": "0",
        "data-muted": "true"
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section gallery"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box bg-type2"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type2"
      }, "GALLERY")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-slider scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slider slider01"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/gallery01.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/gallery02.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/gallery03.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/gallery04.jpg",
        alt: ""
      })))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section interview"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box bg-type1"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type1"
      }, "INTERVIEW"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "scroll-animate"
      }, "\uC804\uBB38\uAC00\uAC00 \uB9D0\uD558\uB294 3.0 \uB354\uC0F5", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uBE44\uD558\uC778\uB4DC \uC2A4\uD1A0\uB9AC")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "scroll-animate"
      }, "\uBCF8\uACA9 \uB9AC\uB274\uC5BC\uC744 \uD1B5\uD574 \uC5C5\uADF8\uB808\uC774\uB4DC\uB41C", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC2DC\uC2A4\uD15C\uACFC \uB514\uC790\uC778, \uB354\uC0F5 \uAC70\uC81C\uB514\uD074\uB9AC\uBE0C\uC5D0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC801\uC6A9\uB41C \uC2A4\uB9C8\uD2B8\uD55C \uAE30\uC220\uACFC \uAD50\uD1B5 \uBC0F \uAC1C\uBC1C \uD638\uC7AC", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uB4F1 \uC804\uBB38\uAC00\uAC00 \uB9D0\uD558\uB294 \uB9AC\uB274\uC5BC\uB41C \uB354\uC0F5\uC758 \uC9C4\uC9DC", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uBE44\uD558\uC778\uB4DC \uC2A4\uD1A0\uB9AC\uB97C \uB4E4\uC5B4\uBCF4\uC138\uC694.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "iframe-box scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/video_thumb_03.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("iframe", {
        id: "video04",
        frameBorder: "0",
        allow: "fullscreen; autoplay",
        allowFullScreen: true,
        "data-src": "https://apis.zigbang.com/v2/vimeo/514166486?dnt=1&muted=1",
        "data-idx": "3"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        className: "btn-sound",
        "data-idx": "0",
        "data-muted": "true"
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section qna"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box bg-type3"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type3"
      }, "TALK TALK")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Q."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "3.0 \uB354\uC0F5\uC5D0\uC11C \uB9AC\uB274\uC5BC\uB41C \uBD80\uBD84\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "A."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uC548\uC804\uD55C \uC8FC\uAC70 \uD658\uACBD(Reliable Safety),", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC548\uB77D\uD55C \uD658\uACBD(Comfort), \uD55C\uCE35 \uD5A5\uC0C1\uB41C", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uD3B8\uC758 (Enhanced Convenience),", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC138\uB828\uB41C \uB514\uC790\uC778 (Refine Design)", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC774\uB807\uAC8C 4\uAC00\uC9C0\uB97C \uAF3D\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Q."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, " \uB354\uC0F5 \uAC70\uC81C\uB514\uD074\uB9AC\uBE0C\uC5D0 \uC811\uBAA9\uD55C AiQ\uC5D0 \uB300\uD574", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC18C\uAC1C\uD574\uC8FC\uC138\uC694.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "A."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uC571\uC73C\uB85C \uC870\uBA85, \uB09C\uBC29, \uD658\uAE30 \uC81C\uC5B4 \uBC0F \uC8FC\uCC28", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC704\uCE58, \uD0DD\uBC30\uB3C4\uCC29, \uC5D0\uB108\uC9C0 \uC0AC\uC6A9\uB7C9 \uB4F1", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC815\uBCF4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC548\uBA74\uC778\uC2DD", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uB85C\uBE44\uD3F0, \uC5D8\uB9AC\uBCA0\uC774\uD130 \uC0B4\uADE0\uC870\uBA85, \uACF5\uAE30\uCE21\uC815", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "LED\uC2E0\uD638\uB4F1\uC740 \uAE30\uC220\uC744\uD65C\uC6A9\uD574 \uC548\uC804\uACFC", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uAC74\uAC15 \uAE4C\uC9C0 \uC0DD\uAC01\uD55C \uC2DC\uC2A4\uD15C\uC774\uC8E0. ")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Q."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uB354\uC0F5 \uAC70\uC81C \uB514\uD074\uB9AC\uBE0C\uB294 \uC5B4\uB5A4 \uC544\uD30C\uD2B8\uC778\uAC00\uC694?")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "A."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uAC70\uC81C\uC2DC \uC0C1\uB3D9\uB3D9\uC5D0 \uB4E4\uC5B4\uC11C\uB294 \uB300\uB2E8\uC9C0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC544\uD30C\uD2B8\uC785\uB2C8\uB2E4. \uB2E8\uC9C0 \uC778\uADFC\uC774 KTX \uC5ED\uC0AC", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uD6C4\uBCF4\uC9C0\uC5D0 \uC120\uC815\uB418\uBA74\uC11C \uC810\uC810 \uB728\uAC70\uC6B4", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uAC10\uC790\uAC00 \uB418\uB294 \uC911\uC785\uB2C8\uB2E4. ")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section contact"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box "
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type2"
      }, "CONTACT"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "scroll-animate"
      }, "\uB9AC\uB274\uC5BC\uB41C 3.0 \uB354\uC0F5\uC744", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uB9CC\uB098\uB294 \uAC00\uC7A5 \uBE60\uB978 \uBC29\uBC95"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "contact-img"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/contact-img.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uC0AC\uC804\uD64D\uBCF4\uAD00"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uAC70\uC81C\uC2DC \uC0C1\uB3D9\uB3D9 448-1, \uC0C1\uAC001\uCE35")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uD604\uC7A5"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uACBD\uC0C1\uB0A8\uB3C4 \uAC70\uC81C\uC2DC \uC0C1\uB3D9\uB3D9 756\uBC88\uC9C0")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "inquiry scroll-animate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uBB38\uC758"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "1661-3007"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "74\u33A1 /84\u33A1 /98\u33A1"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section event"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box "
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type4"
      }, "EVENT")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/event-bg.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        onSubmit: this.apiSubmit.bind(this)
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "tel",
        id: "phone",
        className: "phone-input",
        placeholder: "\uD734\uB300\uD3F0 \uBC88\uD638 \uC785\uB825 (- \uC81C\uC678)",
        maxLength: "11"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "input-check"
      }, "\u203B \uBCF8\uC778\uC758 \uC5F0\uB77D\uCC98\uB85C \uC791\uC131\uD574 \uC8FC\uC138\uC694."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "agree-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "checkbox",
        id: "agree01",
        onClick: function onClick(event) {
          return _this2.toggleCheckboxAll(event);
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "agree01"
      }, "\uBAA8\uB450 \uB3D9\uC758\uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-detail-agree"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "checkbox",
        id: "agree02",
        onClick: function onClick(event) {
          return _this2.toggleCheckbox(event, "agreement1");
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "agree02"
      }, "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758(\uD544\uC218)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-popup btn-terms terms01"
      }, "\uC57D\uAD00\uBCF4\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "checkbox",
        id: "agree03",
        onClick: function onClick(event) {
          return _this2.toggleCheckbox(event, "agreement2");
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "agree03"
      }, "\uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5 \uB3D9\uC758(\uD544\uC218)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-popup btn-terms terms02"
      }, "\uC57D\uAD00\uBCF4\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "checkbox",
        id: "agree04",
        onClick: function onClick(event) {
          return _this2.toggleCheckbox(event, "agreement3");
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "agree04"
      }, "\uBD80\uB3D9\uC0B0 \uC815\uBCF4 \uBC0F \uC774\uBCA4\uD2B8 \uD61C\uD0DD \uC218\uC2E0(\uC120\uD0DD)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-popup btn-terms terms03"
      }, "\uC57D\uAD00\uBCF4\uAE30"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "btn-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "submit",
        className: "btn-submit"
      }, "\uBD84\uC591 \uC548\uB0B4\uBC1B\uAE30"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-popup btn-notice"
      }, "\uC774\uBCA4\uD2B8 \uC720\uC758\uC0AC\uD56D \uBCF4\uAE30")))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-go-top"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uB9E8\uC704\uB85C \uC62C\uB9AC\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uCEE8\uD150\uCE20\uC5D0\uC11C \uC0AC\uC6A9\uB41C \uC601\uC0C1\uACFC \uC774\uBBF8\uC9C0\uB294 \uC18C\uBE44\uC790\uC758 \uC774\uD574\uB97C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uB3D5\uAE30 \uC704\uD55C \uAC83\uC73C\uB85C \uC0AC\uC5C5\uACFC\uC815 \uBC0F \uC2E4\uC81C \uC2DC\uACF5\uC5D0 \uB530\uB77C \uBCC0\uACBD\uB420 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC138\uBD80\uC801\uC778 \uB0B4\uC6A9\uC740 \uC785\uC8FC\uC790 \uBAA8\uC9D1\uACF5\uACE0\uC640 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uBAA8\uB378\uD558\uC6B0\uC2A4\uC5D0\uC11C \uD655\uC778 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", null, "\uC0AC\uC5C5\uAC1C\uC694"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "desc-list"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "\uC0AC\uC5C5\uBA85"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uB354\uC0F5 \uAC70\uC81C\uB514\uD074\uB9AC\uBE0C")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "\uC704\uCE58"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uACBD\uC0C1\uB0A8\uB3C4 \uAC70\uC81C\uC2DC \uC0C1\uB3D9\uB3D9 765\uBC88\uC9C0 \uC678 114\uD544\uC9C0")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "\uADDC\uBAA8"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uC9C0\uD558 3\uCE35, \uC9C0\uC0C1 1 ~ 25\uCE35 / 13\uAC1C\uB3D9")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "\uC138\uB300\uC218"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uCD1D 1288\uC138\uB300")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "\uC2DC\uACF5"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "(\uC8FC)\uD3EC\uC2A4\uCF54\uAC74\uC124")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "\uBB38\uC758"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "tel:1661-3007"
      }, "1661-3007")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "desc-list zigbang-info"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "\uC0C1\uD638 : (\uC8FC)\uC9C1\uBC29 | \uB300\uD45C : \uC548\uC131\uC6B0 | \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638 : 120-87-61559"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "\uC8FC\uC18C : \uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC11C\uCD08\uAD6C \uC11C\uCD08\uB300\uB85C 411, 5\uCE35(\uC11C\uCD08\uB3D9, GT\uD0C0\uC6CC)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "\uD1B5\uC2E0\uD310\uB9E4\uC5C5 \uC2E0\uACE0\uBC88\uD638 : \uC81C2020-\uC11C\uC6B8\uC11C\uCD08-0852\uD638"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "\uC11C\uBE44\uC2A4 \uC774\uC6A9\uBB38\uC758 : 1661-8734 | \uC774\uBA54\uC77C : ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "mailto:cs@zigbang.com"
      }, "cs@zigbang.com")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "\uC11C\uBE44\uC2A4 \uC81C\uD734\uBB38\uC758 : ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "mailto:partnership@zigbang.com"
      }, "partnership@zigbang.com")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "\uD329\uC2A4 : 02-568-4908")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "copyright"
      }, "Copyright \xA92020 ZIGBANG All rights reserved."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "logo"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/logo.png",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "term-check"
      }, "\uD544\uC218 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD574 \uC8FC\uC138\uC694."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "layer-popup event"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-close"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uB808\uC774\uC5B4 \uD31D\uC5C5\uB2EB\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "\uC774\uBCA4\uD2B8 \uCC38\uC5EC \uC720\uC758\uC0AC\uD56D"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "\uBCF8 \uACBD\uD488\uC740 \uD034\uC988 \uC774\uBCA4\uD2B8\uB97C \uC2E0\uCCAD\uD558\uC2E0 \uACE0\uAC1D \uAC00\uC6B4\uB370 \uCD94\uCCA8\uC744 \uD1B5\uD574 \uC81C\uACF5\uD574 \uB4DC\uB9AC\uACE0 \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "\uACBD\uD488\uC740 1\uC778\uB2F9 \uD55C \uBC88\uB9CC \uC81C\uACF5\uB418\uBA70, \uC911\uBCF5\uC73C\uB85C \uC99D\uC815\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "\uBE44\uC815\uC0C1\uC801\uC778 \uBC29\uBC95\uC73C\uB85C \uCC38\uC5EC \uC2DC \uACBD\uD488 \uC9C0\uAE09 \uB300\uC0C1\uC5D0\uC11C \uC81C\uC678\uB429\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "\uACBD\uD488 \uC774\uBBF8\uC9C0\uB294 \uC2E4\uBB3C\uACFC \uCC28\uC774\uAC00 \uC788\uC744 \uC218 \uC788\uC73C\uBA70, \uC774\uBCA4\uD2B8 \uC8FC\uAD00\uC0AC\uC778 \uC9C1\uBC29\uACFC \uD638\uAC31\uB178\uB178\uC758 \uC0AC\uC815\uC5D0 \uB530\uB77C \uB300\uCCB4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "\uBCF8 \uC774\uBCA4\uD2B8\uB294 \uACE0\uAC1D\uC758 \uD3B8\uC758\uB97C \uC704\uD574 \uC81C\uC138\uACF5\uACFC\uAE08 \uC2E0\uACE0 \uBC0F \uB0A9\uBD80\uB97C \uB300\uD589\uD574 \uB4DC\uB9AC\uACE0 \uC788\uC73C\uBA70, \uC138\uBB34\uB2F9\uAD6D\uC5D0 \uC2E0\uACE0\uB97C \uC704\uD574 \uBD88\uAC00\uD53C\uD558\uAC8C \uC2E0\uBD84\uC99D \uCD2C\uC601\uBCF8\uC758 \uC81C\uCD9C\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "\uC2E0\uBD84\uC99D \uCD2C\uC601\uBCF8\uC740 \uC774\uBCA4\uD2B8 \uB2F9\uCCA8 \uC5EC\uBD80 \uD655\uC778\uACFC \uC138\uBB34\uB2F9\uAD6D \uC2E0\uACE0 \uBAA9\uC801 \uC678\uC5D0\uB294 \uD65C\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA70, \uBAA9\uC801 \uB2EC\uC131 \uC989\uC2DC \uC77C\uAD04 \uD3D0\uAE30 \uCC98\uB9AC\uB429\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "\uC774\uBCA4\uD2B8 \uBB38\uC758\uB294 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "tel:1833-5023"
      }, "1833-5023"), "\uB85C \uC804\uD654 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "(\uC804\uD654 \uAC00\uB2A5 \uC2DC\uAC04 \uD3C9\uC77C 10:00~18:00)")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "layer-popup terms terms01"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-close"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uB808\uC774\uC5B4 \uD31D\uC5C5\uB2EB\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758(\uD544\uC218)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "(\uC8FC)\uC9C1\uBC29\uC740 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1 \uBC0F \uC774\uC6A9\uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uC815\uBCF4\uC8FC\uCCB4\uB294 \uBCF8 \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uC5D0 \uAD00\uD55C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uC2E4 \uAD8C\uB9AC\uAC00 \uC788\uC73C\uB098,\xA0\uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uD544\uC694\uD55C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uCD5C\uC18C\uD55C\uC758 \uAC1C\uC778\uC815\uBCF4\uC774\uBBC0\uB85C \uB3D9\uC758\uB97C \uD574 \uC8FC\uC154\uC57C \uC11C\uBE44\uC2A4\uB97C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uC774\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uBCF4\uB2E4 \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uD68C\uC0AC\uC758 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC744 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uCC38\uC870\uD558\uC5EC \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uC81C\uACF5\uD574\uC8FC\uC2DC\uB294 \uAC1C\uC778\uC815\uBCF4\uB294\xA0\u2018\uC0C1\uB2F4 \uC548\uB0B4\uB97C \uC694\uCCAD\uD558\uAE30 \uC704\uD55C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uC6A9\uB3C4\u2019\uC758 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBAA9\uC801\uC73C\uB85C \uC218\uC9D1\uD558\uBA70 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uC774\uC678 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uBAA9\uC801\uC73C\uB85C\uB294 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dl", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", null, "\uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uC774\uC6A9 \uBAA9\uC801"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", null, "\uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBC0F \uC0C1\uB2F4,\xA0\uBD80\uC815\uC774\uC6A9 \uD655\uC778 \uBC0F \uBC29\uC9C0,\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uB9CC\uC871\uB3C4 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uBC0F \uC124\uBB38\uC870\uC0AC, \uBCF8\uC778\xB7\uC5F0\uB839\uD655\uC778,\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uC2E0\uADDC\uC11C\uBE44\uC2A4 \uAC1C\uBC1C,\xA0\uD504\uB85C\uBAA8\uC158 \uC548\uB0B4", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uBB38\uC758\uC0AC\uD56D \uB610\uB294 \uBD88\uB9CC\xB7\uBD84\uC7C1\uCC98\uB9AC,\xA0\uB9DE\uCDA4\uD615 \uC11C\uBE44\uC2A4 \uC81C\uACF5,\xA0\uC11C\uBE44\uC2A4 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uAC1C\uC120\uC5D0 \uD65C\uC6A9,\xA0\uACC4\uC815\uB3C4\uC6A9 \uBC0F \uBD80\uC815\uAC70\uB798 \uBC29\uC9C0"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", null, "\uC218\uC9D1\uD558\uB294 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", null, "\uC5F0\uB77D\uCC98 (\uD734\uB300\uD3F0 \uBC88\uD638 \uB610\uB294 \uC804\uD654\uBC88\uD638)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", null, "\uAC1C\uC778\uC815\uBCF4\uC758 \uC774\uC6A9 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uBC0F \uBCF4\uC720\uAE30\uAC04"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", null, "\uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBAA9\uC801 \uB2EC\uC131 \uC2DC\uAE4C\uC9C0 \uB610\uB294 \uD68C\uC6D0\uD0C8\uD1F4 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uC2DC \uC989\uC2DC \uC0AD\uC81C. ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uB2E8, \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960 \uBC0F \uAD00\uACC4 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uBC95\uB839\uC5D0 \uB530\uB978 \uBCF4\uAD00 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uC758\uBB34\uAC00 \uC788\uC744 \uACBD\uC6B0 \uD574\uB2F9 \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uD568.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uBCF8 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC704\uD574\uC11C \uD544\uC218\uC801\uC778 \uB3D9\uC758\uC774\uBBC0\uB85C,\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uB3D9\uC758\uB97C \uD558\uC9C0 \uC54A\uC73C\uBA74 \uD574\uB2F9 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uC2E4 \uC218 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC5C6\uC2B5\uB2C8\uB2E4.\xA0\uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uB294 \uACBD\uC6B0\uC5D0\uB3C4 \uB2E4\uB978 \uC9C1\uBC29 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9\uC5D0\uB294 \uC601\uD5A5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "layer-popup terms terms02"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-close"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uB808\uC774\uC5B4 \uD31D\uC5C5\uB2EB\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "\uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5 \uB3D9\uC758(\uD544\uC218)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "(\uC8FC)\uC9C1\uBC29\uC740 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1 \uBC0F \uC774\uC6A9\uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uC815\uBCF4\uC8FC\uCCB4\uB294 \uBCF8 \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uC5D0 \uAD00\uD55C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uC2E4 \uAD8C\uB9AC\uAC00 \uC788\uC73C\uB098,\xA0\uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uD544\uC694\uD55C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uCD5C\uC18C\uD55C\uC758 \uAC1C\uC778\uC815\uBCF4\uC774\uBBC0\uB85C \uB3D9\uC758\uB97C\xA0\uD574\uC8FC\uC154\uC57C\xA0\uC11C\uBE44\uC2A4\uB97C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uC774\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uBCF4\uB2E4 \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uD68C\uC0AC\uC758 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC744 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uCC38\uC870\uD558\uC5EC \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dl", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", null, "\uAC1C\uC778\uC815\uBCF4 \uC81C\uACF5\uBC1B\uB294 \uC790"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", null, "\uC0BC\uC131\uBB3C\uC0B0\u321C, \u321C\uC5E0\uBE44\uC564\uD640\uB529\uC2A4"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", null, "\uC81C\uACF5 \uC815\uBCF4"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", null, "\uD734\uB300\uD3F0 \uBC88\uD638"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", null, "\uBAA9\uC801"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", null, "\uC774\uC6A9\uC790\uAC00 \uBB38\uC758\uD55C \uC11C\uBE44\uC2A4 \uC81C\uACF5"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", null, "\uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", null, "\uC11C\uBE44\uC2A4 \uBAA9\uC801 \uB2EC\uC131 \uC2DC\uAE4C\uC9C0.\xA0\uB2E8,\xA0\uC804\uC790\uC0C1\uAC70\uB798 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uB4F1\uC5D0\uC11C\uC758 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960 \uBC0F \uAD00\uACC4 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uBC95\uB839\uC5D0 \uB530\uB978 \uBCF4\uAD00 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uC758\uBB34\uAC00 \uC788\uC744 \uACBD\uC6B0 \uD574\uB2F9 \uAE30\uAC04 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uB3D9\uC548 \uBCF4\uAD00\uD568.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uBCF8 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC704\uD574\uC11C \uD544\uC218\uC801\uC778 \uB3D9\uC758\uC774\uBBC0\uB85C,\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uB3D9\uC758\uB97C \uD558\uC9C0 \uC54A\uC73C\uBA74 \uD574\uB2F9 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uC2E4 \uC218 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC5C6\uC2B5\uB2C8\uB2E4.\xA0\uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uB294 \uACBD\uC6B0\uC5D0\uB3C4 \uB2E4\uB978 \uC9C1\uBC29 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9\uC5D0\uB294 \uC601\uD5A5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "layer-popup terms terms03"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-close"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uB808\uC774\uC5B4 \uD31D\uC5C5\uB2EB\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "\uBD80\uB3D9\uC0B0 \uC815\uBCF4 \uBC0F \uC774\uBCA4\uD2B8 \uD61C\uD0DD \uC218\uC2E0(\uC120\uD0DD)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "(\uC8FC)\uC9C1\uBC29\uC740 \uB354 \uB098\uC740 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uACE0\uC790\xA0\uAD11\uACE0\xB7\uB9C8\uCF00\uD305\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uBAA9\uC801\uC758 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uC5D0 \uB300\uD55C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uB3D9\uC758\uB97C \uBC1B\uACE0\uC790 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uC218\uC9D1\uB41C \uAC1C\uC778 \uC815\uBCF4\uB294\xA0SMS, PUSH\uC54C\uB9BC \uB4F1 \uC601\uB9AC\uBAA9\uC801\uC758 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uAD11\uACE0\uC131 \uC815\uBCF4 \uC804\uB2EC\uC5D0 \uD65C\uC6A9\uB418\uAC70\uB098 \uC601\uC5C5 \uBC0F ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uB9C8\uCF00\uD305 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uBAA9\uC801\uC73C\uB85C \uD65C\uC6A9\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dl", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", null, "\uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uC774\uC6A9 \uBAA9\uC801"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", null, "\uC9C1\uBC29 \uBC0F \uC81C\uD734\uC0AC\uC758\xA0\uC0C1\uD488\xB7\uC11C\uBE44\uC2A4\uC5D0\xA0\uB300\uD55C\xA0\uAD11\uACE0\xB7", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uD64D\uBCF4\xB7\uD504\uB85C\uBAA8\uC158\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uC81C\uACF5"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", null, "\uC218\uC9D1\uD558\uB294 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only"
      }), "\uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", null, "\uC5F0\uB77D\uCC98 (\uD734\uB300\uD3F0 \uBC88\uD638 \uB610\uB294 \uC804\uD654\uBC88\uD638)")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "\uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uC2DC\uB294 \uACBD\uC6B0\uC5D0\uB3C4 \uC11C\uBE44\uC2A4\uB294 \uC774\uC6A9\uC774 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB610\uD55C,\xA0\uAD11\uACE0\xB7\uB9C8\uCF00\uD305\xA0\uB3D9\uC758\uB294 \uC9C1\uBC29 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uACE0\uAC1D\uC13C\uD130(", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "tel:1661-8734"
      }, "1661-8734"), ")\uB97C \uD1B5\uD574\uC11C \uC5B8\uC81C\uB4E0\uC9C0 \uCCA0\uD68C\uD560 \uC218 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only"
      }), "\uC788\uC2B5\uB2C8\uB2E4."))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "layer-popup finish"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uC774\uBCA4\uD2B8 \uCC38\uC5EC\uAC00", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "\uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-close"
      }, "\uB2EB\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "floating-banner"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;"
      }, "INVITATION")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "vr-iframe-box rotate"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("iframe", {
        src: "",
        id: "vr-iframe",
        frameborder: "0",
        allow: "fullscreen",
        allowfullscreen: true
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-popup-close m-only"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uB808\uC774\uC5B4 \uD31D\uC5C5\uB2EB\uAE30"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "layer-popup plan-expand"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slider slider04"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup01.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup02.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup03.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup04.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup05.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup06.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup07.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup08.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup09.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup10.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup11.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup12.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup13.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup14.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup15.jpg",
        alt: ""
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-popup-close"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uB808\uC774\uC5B4 \uD31D\uC5C5\uB2EB\uAE30"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "layer-popup gallery-expand"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-popup-close"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\uB808\uC774\uC5B4 \uD31D\uC5C5\uB2EB\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slider slider05"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery01.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery02.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery03.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery04.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery05.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery06.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery07.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery08.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery09.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery10.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery11.jpg",
        alt: ""
      })))))));
    }
  }, {
    key: "customAlert",
    value: function customAlert(message) {
      $(".term-check").html(message);
      $(".term-check").show();
      clearTimeout(this.state.popTimer);
      this.state.ppopTimer = setTimeout(function () {
        $(".term-check").hide();
      }, 3000);
    }
    /*pinpoint 모두 동의*/

  }, {
    key: "toggleCheckboxAll",
    value: function toggleCheckboxAll(event) {
      //event.preventDefault();
      var _this$state = this.state,
          isAgreementExtended = _this$state.isAgreementExtended,
          agreement1 = _this$state.agreement1,
          agreement2 = _this$state.agreement2,
          agreement3 = _this$state.agreement3; // 모두 동의 클릭시 핀포인트 호출

      Object(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_13__[/* sendEvent */ "b"])(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_13__[/* ZB_EVENT_TYPE */ "a"].ZB_SCREEN_CLICK, {
        user_no: user_no,
        adId: adId,
        screen_name: "분양카달로그",
        button_name: "모두동의",
        ad_name: "더샵거제디클리브",
        platform: userPlatform,
        business: business,
        mkt: mkt
      });

      if (isAgreementExtended) {
        $('#agree01').prop('checked', false);
        $('#agree02').prop('checked', false);
        $('#agree03').prop('checked', false);
        $('#agree04').prop('checked', false);
        this.state.agreement1 = false;
        this.state.agreement2 = false;
        this.state.agreement3 = false;
        this.state.isAgreementExtended = false;
      } else {
        $('#agree01').prop('checked', true);
        $('#agree02').prop('checked', true);
        $('#agree03').prop('checked', true);
        $('#agree04').prop('checked', true);
        this.state.agreement1 = true;
        this.state.agreement2 = true;
        this.state.agreement3 = true;
        this.state.isAgreementExtended = true;
      }
    }
  }, {
    key: "toggleCheckbox",
    value: function toggleCheckbox(event, target) {
      // event.preventDefault();
      var _this$state2 = this.state,
          isAgreementExtended = _this$state2.isAgreementExtended,
          agreement1 = _this$state2.agreement1,
          agreement2 = _this$state2.agreement2,
          agreement3 = _this$state2.agreement3;

      if (target == 'agreement1') {
        this.state.agreement1 = event.target.checked;
      }

      if (target == 'agreement2') {
        this.state.agreement2 = event.target.checked;
      }

      if (target == 'agreement3') {
        this.state.agreement3 = event.target.checked;
      }

      if (this.state.agreement1 && this.state.agreement2 && this.state.agreement3) {
        this.state.isAgreementExtended = true;
      } else {
        this.state.isAgreementExtended = false;
      }

      $('#agree01').prop('checked', this.state.isAgreementExtended);
    }
  }, {
    key: "getParam",
    value: function getParam() {
      var _this3 = this;

      var params = this.model.genQueryParams(this.props.router.asPath);
      var domain_platform = "";
      var mkt_source = "";
      var path = this.props.router.asPath;

      if (path.indexOf("?") != -1) {
        path = path.substring(0, path.indexOf("?"));
      }

      var arSplitUrl = path.split("/");
      var nArLength = arSplitUrl.length;
      var domain = this.props.router.query.domain;
      this.state.domain = domain;

      if (domain) {
        if (domain === "zigbang") domain_platform = "zb";
        if (domain === "daum") domain_platform = "da";
        if (domain === "hogangnono") domain_platform = "hg";
      }

      if (params.mkt_source) {
        mkt_source = params.mkt_source;
      }

      business = domain + "_" + bizPlatform;
      mkt = mkt_source;
      this.setState({
        business: business,
        mkt: mkt
      }, function () {
        _this3.params = params;
      });
    }
  }, {
    key: "submitValidation",
    value: function submitValidation(phone, agreement1, agreement2) {
      var regExp = /^01([0|1|6|7|8|9]{1})([0-9]{3,4})([0-9]{4})$/;

      if (!phone) {
        this.customAlert("연락처를 입력해주세요.");
        return false;
      } else {
        if (!regExp.test(phone)) {
          this.customAlert("연락처가 잘못 입력되었습니다. 다시 한 번 확인해 주세요.");
          return false;
        } else {
          if (!agreement1 || !agreement2) {
            this.customAlert("필수 약관에 동의해 주세요.");
            return false;
          } else {
            return true;
          }
        }
      }
    }
  }, {
    key: "apiSubmit",
    value: function () {
      var _apiSubmit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var _this$state3, domain, agreement1, agreement2, agreement3, $this, mkt_device, marketing_media, marketing_source, params, phone, validation, marketing_approvement;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$state3 = this.state, domain = _this$state3.domain, agreement1 = _this$state3.agreement1, agreement2 = _this$state3.agreement2, agreement3 = _this$state3.agreement3;
                $this = this;
                mkt_device = react_device_detect__WEBPACK_IMPORTED_MODULE_14__["osName"] + "-" + react_device_detect__WEBPACK_IMPORTED_MODULE_14__["browserName"];
                marketing_media = "기타";
                marketing_source = "";
                params = this.model.genQueryParams(this.props.router.asPath);

                if (params.mkt_source) {
                  marketing_source = params.mkt_source;
                }

                if (domain) {
                  if (domain === "zigbang") marketing_media = "직방";
                  if (domain === "daum") marketing_media = "다음";
                  if (domain === "hogangnono") marketing_media = "호갱노노";
                }

                phone = $('#phone').val();
                validation = this.submitValidation(phone, agreement1, agreement2);
                marketing_approvement = this.state.agreement3;

                if (validation) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return", null);

              case 14:
                $('body').append('<div className="overlay"></div>');
                $("#loading").show();
                console.log("apiSubmit(os) : " + react_device_detect__WEBPACK_IMPORTED_MODULE_14__["osName"]); //Windows

                console.log("apiSubmit(browser) : " + react_device_detect__WEBPACK_IMPORTED_MODULE_14__["browserName"]); //firefox

                console.log("apiSubmit(phone) : " + phone); //01012345678

                console.log("apiSubmit(device) : " + mkt_device); //windows-firefox

                console.log("apiSubmit(mkt_source) : " + marketing_source);
                console.log("apiSubmit(media) : " + marketing_media); //직방

                console.log("apiSubmit(user_no) : " + user_no); //user_no    

                console.log("apiSubmit(adid) : " + adId); //adId

                console.log("apiSubmit(mkt_approvement) : " + marketing_approvement); //marketing_approvement

                console.log("apiSubmit(domain) : " + domain); //marketing_approvement

                $('input').val('');
                $('input[type="checkbox"]').prop('checked', false);
                this.state.agreement1 = false;
                this.state.agreement2 = false;
                this.state.agreement3 = false;
                fetch(apiEndPoint, {
                  method: "POST",
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                    campaign_id: 23,
                    //(전달받은 분양광고 ID)
                    area_danji_id: 36389,
                    //(전달받은 단지 ID , 없을경우  0)
                    domain: domain,
                    //(path 로 전달받은 domain , ex : ) zigbang, hogangnono, daum )
                    user_phone: phone,
                    //(신청자 전화번호)
                    marketing_source: marketing_source || null,
                    // (마케팅관련파라미터)
                    device_type: mkt_device,
                    //(디바이스 타입)
                    marketing_approvement: marketing_approvement //(마케팅 수집 동의 여부)

                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  }
                }).then(function (response) {
                  response.status; //=> number 100–599

                  response.statusText; //=> String

                  response.headers; //=> Headers

                  response.url; //=> String

                  return response.json().then(function (json) {
                    return json;
                  });
                }).then(function (json) {
                  console.log(json.code);
                  console.log(json.name);
                  console.log(json.message);
                  console.log(json.campaignOfferId);

                  if (json.code === undefined) {
                    /*json 결과 {} 즉, 이 조건을 타면 신청 된 것임*/
                    var campaign_offer_id = json.campaignOfferId; // 신청완료 핀포인트 호출
                    // 신청 완료시 핀포인트 호출 

                    Object(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_13__[/* sendEvent */ "b"])(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_13__[/* ZB_EVENT_TYPE */ "a"].APART_PURCHASE, {
                      user_no: user_no,
                      adId: adId,
                      screen_name: "분양카달로그",
                      button_name: "응모하기",
                      ad_name: "더샵거제디클리브",
                      platform: userPlatform,
                      business: business,
                      mkt: marketing_source,
                      campaign_offer_id: campaign_offer_id
                    });
                    $("#loading").hide();

                    if (screen.width >= 769) {
                      $(".layer-popup").css("top", $(document).scrollTop() + 55);
                    } else {
                      $(".layer-popup").css("top", $(document).scrollTop());
                    }

                    $(".layer-popup.finish").show();
                  } else {
                    $this.customAlert(json.message);
                    $("#loading").hide();
                    $('.overlay').remove();
                  }
                });

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function apiSubmit(_x) {
        return _apiSubmit.apply(this, arguments);
      }

      return apiSubmit;
    }()
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(Register));

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

/***/ "oRZ0":
/***/ (function(module, exports) {

module.exports = "./../_next/static/images/m_title_2_01-2599bf67cfabe89cd7418ee3913ed402.png";

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

/***/ }),

/***/ "w7Xr":
/***/ (function(module, exports) {

module.exports = "./../_next/static/images/web-title-2-01-b6d1747a74448e09f73b0d1163a2d16f.png";

/***/ }),

/***/ "xXj+":
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "zTVa":
/***/ (function(module, exports) {

module.exports = "./../_next/static/images/web_imgBox-4830256f801f0335981acdbcd62ad0cc.png";

/***/ })

/******/ });