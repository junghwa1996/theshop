module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "4plC":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAF5vfZ2AAAAYFBMVEUAAABVVVVQUFBJSUlGRkZHR0dGRkZERERERERISEhHR0dERERGRkZGRkZFRUVGRkZERERFRUVERERERERERERFRUVERERFRUVFRUVERERFRUVFRUVFRUVERERFRUVERER4gZ8lAAAAH3RSTlMADBAVFhkhODxAQUtmdX6Eh4mKrLPJys/X2Nv1+fr9QuyBeQAAAO5JREFUaN7tmUkOgkAQANsFUHADVxx0/v9LRb1pMOkWJmDVDdpKScKWQeRXeMPm27ZmR8sc/+twtWeB737ovOVPdfQD+MChcep83DjNBjb9dhJFg5+vuCSgBZz3S73afNGihlP3elVkepcNT+0Ivbf6iFsiAAQkqeZqNzXcAGvXGdwKFxfX5IrFreVCLZdmOw9oF9jYvbA3Jlv/WnHyZ96tAAAAYJik9XcDFwfJev33JGO2ysiSJUuWLNkuScJkRS6P7LXrrMj2ecCGhSAtUflK53+ZLkiTJk2adG/Ts1DpRYC1iPF6l09YkgEAGBI3yUBGk9MGh2YAAAAASUVORK5CYII="

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6vSa");


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

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "YOb4":
/***/ (function(module, exports) {

module.exports = require("@aws-amplify/analytics");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

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

/***/ "w7Xr":
/***/ (function(module, exports) {

module.exports = "./../_next/static/images/web-title-2-01-b6d1747a74448e09f73b0d1163a2d16f.png";

/***/ }),

/***/ "zTVa":
/***/ (function(module, exports) {

module.exports = "./../_next/static/images/web_imgBox-4830256f801f0335981acdbcd62ad0cc.png";

/***/ })

/******/ });