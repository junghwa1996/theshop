webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ScreenModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ScreenModel */ "./pages/index/ScreenModel.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/utils/PinPoint */ "./src/utils/PinPoint.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_14__);










var _jsxFileName = "E:\\\uBE44\uC2A4\uD1A4\uC2A4 \uC790\uB8CC\\theshop\\_dist\\pages\\index\\index.js";





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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Register, _React$Component);

  function Register() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Register)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "modalRef1", react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "modalRef2", react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "modalRef3", react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "toastRef", react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "model", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "params", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Register, [{
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

      Object(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_13__["sendEvent"])(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_13__["ZB_EVENT_TYPE"].ZB_SCREEN_VIEW, {
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
      if (!loaded) return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      });
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "momo-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "momo-gnb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        className: "btn-gnb-open",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "gnb-open-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "gnb-open",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        className: "btn-gnb-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "HOME")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "RENEWAL 3.0")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "THE SHARP LIFE")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "LOCATION")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "GALLERY")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "INTERVIEW")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "TALK TALK")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "MODEL HOUSE")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "EVENT")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "SUMMARY"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section kv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "iframe-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/kv_2nd.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("iframe", {
        id: "video01",
        frameBorder: "0",
        allow: "fullscreen; autoplay",
        allowFullScreen: true,
        "data-src": "https://apis.zigbang.com/v2/vimeo/514157521?dnt=1&muted=1",
        "data-idx": "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        className: "btn-sound",
        "data-idx": "0",
        "data-muted": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section emblem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box bg-type1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "RENEWAL 3.0"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "\uACBD\uB0A8\uC5D0\uC11C \uCCAB \uB9CC\uB0A8", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "\uB9AC\uB274\uC5BC\uB41C \uB354\uC0F5")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "logo scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/logo.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "2021\uB144 \uB354\uC0F5\uC774 \uC0C8\uB85C\uC6B4 \uBAA8\uC2B5\uC73C\uB85C \uAC70\uC81C\uC5D0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }), "\uCC3E\uC544\uC635\uB2C8\uB2E4. \uB354\uC0F5\uC758 \uCC28\uBCC4\uD654\uB41C \uC775\uC2A4\uD14C\uB9AC\uC5B4,", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }), "\uB2E8\uC9C0\uC758 \uC0C1\uC9D5\uC774\uC790 \uC790\uB791\uC774 \uB420", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }), "\uB79C\uB4DC\uB9C8\uD06C \uAC8C\uC774\uD2B8, \uC138\uACC4\uC801\uC778 \uB514\uC790\uC778 \uAC70\uC7A5", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }), "\uC54C\uB808\uC0B0\uB4DC\uB85C \uBA58\uB514\uB2C8\uC640 \uAC1C\uBC1C\uD55C \uD328\uD134\uAE4C\uC9C0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }), "\uC8FC\uAC70\uC758 \u672C\uC774 \uB420 \uB354\uC0F5\uC758", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }), "\uB9AC\uB274\uC5BC\uB41C 3.0\uC744 \uAC70\uC81C\uC5D0\uC11C \uB9CC\uB098\uBCF4\uC138\uC694.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "iframe-box scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/video_thumb_01.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("iframe", {
        id: "video02",
        frameBorder: "0",
        allow: "fullscreen; autoplay",
        allowFullScreen: true,
        "data-src": "https://apis.zigbang.com/v2/vimeo/514160123?dnt=1&muted=1",
        "data-idx": "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        className: "btn-sound",
        "data-idx": "0",
        "data-muted": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section life",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box bg-type2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "THE SHARP LIFE"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "\uAC70\uC81C\uC5D0\uC11C \uB9CC\uB098\uB294", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "'\uB354\uC0F5\uB2E4\uC6C0'")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "\uC9D1\uC774 \uAC00\uC838\uC57C\uD560 \uBCF8\uC9C8\uC801 \uAC00\uCE58, \uADF8\uB9AC\uACE0 \uADF8 \uC548\uC5D0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }), "\uB2F4\uAE38 \uB77C\uC774\uD504\uC2A4\uD0C0\uC77C\uC744 \uD568\uAED8 \uACE0\uBBFC\uD558\uB294", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }), "\uD3EC\uC2A4\uCF54\uAC74\uC124 \uB354\uC0F5 \uC544\uD30C\uD2B8.", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }), "\u2018\uB354\uC0F5\uB2E4\uC6C0\u2019\uC774\uB780 \uC774\uB7F0 \uAC83\uC785\uB2C8\uB2E4.", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-slider scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slider slider06",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/life-img1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/life-img2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/life-img3.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "sub-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, "THE \uACE0\uAE09\uC2A4\uB7EC\uC6B4 \uC678\uAD00"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, "\uC54C\uB808\uC0B0\uB4DC\uB85C \uBA58\uB514\uB2C8\uC758 \uB3C5\uCC3D\uC801\uC778 \uD328\uD134 \uB514\uC790\uC778"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-slider right scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slider slider06",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/life-img4.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "sub-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, "THE \uB611\uB611\uD55C \uC2DC\uC2A4\uD15C"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, "\uC544\uD30C\uD2B8 \uB0B4\uC678\uBD80 \uC2DC\uC2A4\uD15C\uC744 \uC81C\uC5B4\uD560 \uC218 \uC788\uB294 \uC2A4\uB9C8\uD2B8 \uC6D4"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-slider scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slider slider06",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/life-img5.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/life-img6.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/life-img7.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "sub-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, "THE \uCF8C\uC801\uD55C \uB2E8\uC9C0 \uB0B4\uBD80"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, "\uC0AC\uACC4\uC808 \uB0B4\uB0B4 \uB9D1\uC740\uACF5\uAE30 \uAC00\uB4DD\uD55C \uC790\uC5F0\uCE5C\uD654\uC801 \uB2E8\uC9C0")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section location",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box bg-type1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, "LOCATION"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, "\uC0C8\uB85C\uC6B4 \uC8FC\uAC70\uD0C0\uC6B4", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, "\uAC70\uC81C \uB79C\uC120\uD0D0\uBC29\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, "\uAC70\uC81C\uC758 \uC911\uC2EC\uC5D0 \uC704\uCE58\uD55C \uB354\uC0F5 \uAC70\uC81C\uB514\uD074\uB9AC\uBE0C.", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }), "\uC8FC\uBCC0\uC5D0 \uD3B8\uC758 \uC2DC\uC124\uACFC \uC790\uC5F0 \uBC0F \uAD50\uC721 \uD658\uACBD\uC744 \uACE0\uB8E8", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }), "\uAC16\uCD94\uACE0 \uC0C8\uB85C\uC6B4 \uC8FC\uAC70 \uC911\uC2EC\uC9C0\uB85C \uBC1C\uB3CB\uC6C0\uD569\uB2C8\uB2E4.", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }), "\uAC70\uC81C \uC0C1\uB3D9\uC9C0\uAD6C \uB0B4 \uCD5C\uC120\uD638\uB3C4 \uC9C0\uC5ED\uC774\uC790", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }), "\uAD50\uD1B5\uAE4C\uC9C0 \uD3B8\uB9AC\uD55C \uAC70\uC81C\uC758 \uC911\uC2EC\uC73C\uB85C GO GO!")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "iframe-box scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/video_thumb_02.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("iframe", {
        id: "video03",
        frameBorder: "0",
        allow: "fullscreen; autoplay",
        allowFullScreen: true,
        "data-src": "https://apis.zigbang.com/v2/vimeo/514162764?dnt=1&muted=1",
        "data-idx": "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        className: "btn-sound",
        "data-idx": "0",
        "data-muted": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box bg-type2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, "GALLERY")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-slider scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slider slider01",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/gallery01.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/gallery02.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/gallery03.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/gallery04.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section interview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box bg-type1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, "INTERVIEW"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, "\uC804\uBB38\uAC00\uAC00 \uB9D0\uD558\uB294 3.0 \uB354\uC0F5", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, "\uBE44\uD558\uC778\uB4DC \uC2A4\uD1A0\uB9AC")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, "\uBCF8\uACA9 \uB9AC\uB274\uC5BC\uC744 \uD1B5\uD574 \uC5C5\uADF8\uB808\uC774\uB4DC\uB41C", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }), "\uC2DC\uC2A4\uD15C\uACFC \uB514\uC790\uC778, \uB354\uC0F5 \uAC70\uC81C\uB514\uD074\uB9AC\uBE0C\uC5D0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }), "\uC801\uC6A9\uB41C \uC2A4\uB9C8\uD2B8\uD55C \uAE30\uC220\uACFC \uAD50\uD1B5 \uBC0F \uAC1C\uBC1C \uD638\uC7AC", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }), "\uAE4C\uC9C0 \uC804\uBB38\uAC00\uAC00 \uB9D0\uD558\uB294 \uB9AC\uB274\uC5BC\uB41C \uB354\uC0F5\uC758 \uC9C4\uC9DC", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }), "\uBE44\uD558\uC778\uB4DC \uC2A4\uD1A0\uB9AC\uB97C \uB4E4\uC5B4\uBCF4\uC138\uC694.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "iframe-box scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/video_thumb_03.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("iframe", {
        id: "video04",
        frameBorder: "0",
        allow: "fullscreen; autoplay",
        allowFullScreen: true,
        "data-src": "https://apis.zigbang.com/v2/vimeo/514166486?dnt=1&muted=1",
        "data-idx": "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        className: "btn-sound",
        "data-idx": "0",
        "data-muted": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section qna",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box bg-type3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, "TALK TALK")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, "Q."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, "3.0 \uB354\uC0F5\uC5D0\uC11C \uB9AC\uB274\uC5BC\uB41C \uBD80\uBD84\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, "A."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, "\uC548\uC804\uD55C \uC8FC\uAC70 \uD658\uACBD(Reliable Safety),", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }), "\uC548\uB77D\uD55C \uD658\uACBD(Comfort), \uD55C\uCE35 \uD5A5\uC0C1\uB41C", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }), "\uD3B8\uC758 (Enhanced Convenience),", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }), "\uC138\uB828\uB41C \uB514\uC790\uC778 (Refine Design)", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }), "\uC774\uB807\uAC8C 4\uAC00\uC9C0\uB97C \uAF3D\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, "Q."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }, " \uB354\uC0F5 \uAC70\uC81C\uB514\uD074\uB9AC\uBE0C\uC5D0 \uC811\uBAA9\uD55C", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }), " AiQ\uC5D0 \uB300\uD574", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }), "\uC18C\uAC1C\uD574\uC8FC\uC138\uC694.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, "A."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, "\uC571\uC73C\uB85C \uC870\uBA85, \uB09C\uBC29, \uD658\uAE30 \uC81C\uC5B4 \uBC0F \uC8FC\uCC28", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }), "\uC704\uCE58, \uD0DD\uBC30\uB3C4\uCC29, \uC5D0\uB108\uC9C0 \uC0AC\uC6A9\uB7C9 \uB4F1", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }), "\uC815\uBCF4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }), "\uC548\uBA74\uC778\uC2DD \uB85C\uBE44\uD3F0, \uC5D8\uB9AC\uBCA0\uC774\uD130 \uC0B4\uADE0\uC870\uBA85, \uACF5\uAE30\uCE21\uC815 LED\uC2E0\uD638\uB4F1\uC740 \uAE30\uC220\uC744\uD65C\uC6A9\uD574 \uC548\uC804\uACFC \uAC74\uAC15 \uAE4C\uC9C0 \uC0DD\uAC01\uD55C", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }), " \uC2DC\uC2A4\uD15C\uC774\uC8E0. ")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, "Q."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }, "\uB354\uC0F5 \uAC70\uC81C \uB514\uD074\uB9AC\uBE0C\uB294 \uC5B4\uB5A4", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }), " \uC544\uD30C\uD2B8\uC778\uAC00\uC694?")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, "A."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, "\uAC70\uC81C\uC2DC \uC0C1\uB3D9\uB3D9\uC5D0 \uB4E4\uC5B4\uC11C\uB294 \uB300\uB2E8\uC9C0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }), "\uC544\uD30C\uD2B8\uC785\uB2C8\uB2E4. \uB2E8\uC9C0 \uC778\uADFC\uC774 KTX", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }), " \uC5ED\uC0AC", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }), "\uD6C4\uBCF4\uC9C0\uC5D0 \uC120\uC815\uB418\uBA74\uC11C \uC810\uC810", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }), " \uB728\uAC70\uC6B4", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }), "\uAC10\uC790\uAC00 \uB418\uB294 \uC911\uC785\uB2C8\uB2E4. ")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, "CONTACT"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }, "\uB9AC\uB274\uC5BC\uB41C 3.0 \uB354\uC0F5\uC744", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }, "\uB9CC\uB098\uB294 \uAC00\uC7A5 \uBE60\uB978 \uBC29\uBC95"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "contact-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/contact-img.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }, "\uC0AC\uC804\uD64D\uBCF4\uAD00"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }, "\uAC70\uC81C\uC2DC \uC0C1\uB3D9\uB3D9 448-1, \uC0C1\uAC001\uCE35")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, "\uD604\uC7A5"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        },
        __self: this
      }, "\uACBD\uC0C1\uB0A8\uB3C4 \uAC70\uC81C\uC2DC \uC0C1\uB3D9\uB3D9 756\uBC88\uC9C0")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "inquiry scroll-animate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }, "\uBB38\uC758"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, "1661-3007"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      }, "74\u33A1 /84\u33A1 /98\u33A1"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "section event",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-box ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "marker txt-en type4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }, "EVENT")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/event-bg.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        onSubmit: this.apiSubmit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "tel",
        id: "phone",
        className: "phone-input",
        placeholder: "\uD734\uB300\uD3F0 \uBC88\uD638 \uC785\uB825 (- \uC81C\uC678)",
        maxLength: "11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "input-check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        __self: this
      }, "\u203B \uBCF8\uC778\uC758 \uC5F0\uB77D\uCC98\uB85C \uC791\uC131\uD574 \uC8FC\uC138\uC694."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "agree-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "checkbox",
        id: "agree01",
        onClick: function onClick(event) {
          return _this2.toggleCheckboxAll(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "agree01",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }, "\uBAA8\uB450 \uB3D9\uC758\uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-detail-agree",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "checkbox",
        id: "agree02",
        onClick: function onClick(event) {
          return _this2.toggleCheckbox(event, "agreement1");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "agree02",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      }, "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758(\uD544\uC218)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-popup btn-terms terms01",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }, "\uC57D\uAD00\uBCF4\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "checkbox",
        id: "agree03",
        onClick: function onClick(event) {
          return _this2.toggleCheckbox(event, "agreement2");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "agree03",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }, "\uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5 \uB3D9\uC758(\uD544\uC218)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-popup btn-terms terms02",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, "\uC57D\uAD00\uBCF4\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "checkbox",
        id: "agree04",
        onClick: function onClick(event) {
          return _this2.toggleCheckbox(event, "agreement3");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "agree04",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        __self: this
      }, "\uBD80\uB3D9\uC0B0 \uC815\uBCF4 \uBC0F \uC774\uBCA4\uD2B8 \uD61C\uD0DD \uC218\uC2E0(\uC120\uD0DD)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-popup btn-terms terms03",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, "\uC57D\uAD00\uBCF4\uAE30"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "btn-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "submit",
        className: "btn-submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        },
        __self: this
      }, "\uBD84\uC591 \uC548\uB0B4\uBC1B\uAE30"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-popup btn-notice",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        __self: this
      }, "\uC774\uBCA4\uD2B8 \uC720\uC758\uC0AC\uD56D \uBCF4\uAE30")))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("footer", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-go-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        },
        __self: this
      }, "\uB9E8\uC704\uB85C \uC62C\uB9AC\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, "\uCEE8\uD150\uCE20\uC5D0\uC11C \uC0AC\uC6A9\uB41C \uC601\uC0C1\uACFC \uC774\uBBF8\uC9C0\uB294 \uC18C\uBE44\uC790\uC758 \uC774\uD574\uB97C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }), "\uB3D5\uAE30 \uC704\uD55C \uAC83\uC73C\uB85C \uC0AC\uC5C5\uACFC\uC815 \uBC0F \uC2E4\uC81C \uC2DC\uACF5\uC5D0 \uB530\uB77C \uBCC0\uACBD\uB420 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }), "\uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC138\uBD80\uC801\uC778 \uB0B4\uC6A9\uC740 \uC785\uC8FC\uC790 \uBAA8\uC9D1\uACF5\uACE0\uC640 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }), "\uBAA8\uB378\uD558\uC6B0\uC2A4\uC5D0\uC11C \uD655\uC778 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, "\uC0AC\uC5C5\uAC1C\uC694"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "desc-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        __self: this
      }, "\uC0AC\uC5C5\uBA85"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, "\uB354\uC0F5 \uAC70\uC81C\uB514\uD074\uB9AC\uBE0C")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }, "\uC704\uCE58"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }, "\uACBD\uC0C1\uB0A8\uB3C4 \uAC70\uC81C\uC2DC \uC0C1\uB3D9\uB3D9 765\uBC88\uC9C0 \uC678 114\uD544\uC9C0")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      }, "\uADDC\uBAA8"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }, "\uC9C0\uD558 3\uCE35, \uC9C0\uC0C1 1 ~ 25\uCE35 / 13\uAC1C\uB3D9")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        },
        __self: this
      }, "\uC138\uB300\uC218"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }, "\uCD1D 1288\uC138\uB300")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }, "\uC2DC\uACF5"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }, "(\uC8FC)\uD3EC\uC2A4\uCF54\uAC74\uC124")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, "\uBB38\uC758"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "tel:1661-3007",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      }, "1661-3007")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "desc-list zigbang-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }, "\uC0C1\uD638 : (\uC8FC)\uC9C1\uBC29 | \uB300\uD45C : \uC548\uC131\uC6B0 | \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638 : 120-87-61559"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        },
        __self: this
      }, "\uC8FC\uC18C : \uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC11C\uCD08\uAD6C \uC11C\uCD08\uB300\uB85C 411, 5\uCE35(\uC11C\uCD08\uB3D9, GT\uD0C0\uC6CC)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545
        },
        __self: this
      }, "\uD1B5\uC2E0\uD310\uB9E4\uC5C5 \uC2E0\uACE0\uBC88\uD638 : \uC81C2020-\uC11C\uC6B8\uC11C\uCD08-0852\uD638"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      }, "\uC11C\uBE44\uC2A4 \uC774\uC6A9\uBB38\uC758 : 1661-8734 | \uC774\uBA54\uC77C : ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "mailto:cs@zigbang.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      }, "cs@zigbang.com")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      }, "\uC11C\uBE44\uC2A4 \uC81C\uD734\uBB38\uC758 : ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "mailto:partnership@zigbang.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      }, "partnership@zigbang.com")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }, "\uD329\uC2A4 : 02-568-4908")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }, "Copyright \xA92020 ZIGBANG All rights reserved."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/logo.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "term-check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      }, "\uD544\uC218 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD574 \uC8FC\uC138\uC694."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "layer-popup event",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, "\uB808\uC774\uC5B4 \uD31D\uC5C5\uB2EB\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, "\uC774\uBCA4\uD2B8 \uCC38\uC5EC \uC720\uC758\uC0AC\uD56D"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }, "\uBCF8 \uACBD\uD488\uC740 \uD034\uC988 \uC774\uBCA4\uD2B8\uB97C \uC2E0\uCCAD\uD558\uC2E0 \uACE0\uAC1D \uAC00\uC6B4\uB370 \uCD94\uCCA8\uC744 \uD1B5\uD574 \uC81C\uACF5\uD574 \uB4DC\uB9AC\uACE0 \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        },
        __self: this
      }, "\uACBD\uD488\uC740 1\uC778\uB2F9 \uD55C \uBC88\uB9CC \uC81C\uACF5\uB418\uBA70, \uC911\uBCF5\uC73C\uB85C \uC99D\uC815\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        },
        __self: this
      }, "\uBE44\uC815\uC0C1\uC801\uC778 \uBC29\uBC95\uC73C\uB85C \uCC38\uC5EC \uC2DC \uACBD\uD488 \uC9C0\uAE09 \uB300\uC0C1\uC5D0\uC11C \uC81C\uC678\uB429\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        },
        __self: this
      }, "\uACBD\uD488 \uC774\uBBF8\uC9C0\uB294 \uC2E4\uBB3C\uACFC \uCC28\uC774\uAC00 \uC788\uC744 \uC218 \uC788\uC73C\uBA70, \uC774\uBCA4\uD2B8 \uC8FC\uAD00\uC0AC\uC778 \uC9C1\uBC29\uACFC \uD638\uAC31\uB178\uB178\uC758 \uC0AC\uC815\uC5D0 \uB530\uB77C \uB300\uCCB4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569
        },
        __self: this
      }, "\uBCF8 \uC774\uBCA4\uD2B8\uB294 \uACE0\uAC1D\uC758 \uD3B8\uC758\uB97C \uC704\uD574 \uC81C\uC138\uACF5\uACFC\uAE08 \uC2E0\uACE0 \uBC0F \uB0A9\uBD80\uB97C \uB300\uD589\uD574 \uB4DC\uB9AC\uACE0 \uC788\uC73C\uBA70, \uC138\uBB34\uB2F9\uAD6D\uC5D0 \uC2E0\uACE0\uB97C \uC704\uD574 \uBD88\uAC00\uD53C\uD558\uAC8C \uC2E0\uBD84\uC99D \uCD2C\uC601\uBCF8\uC758 \uC81C\uCD9C\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        },
        __self: this
      }, "\uC2E0\uBD84\uC99D \uCD2C\uC601\uBCF8\uC740 \uC774\uBCA4\uD2B8 \uB2F9\uCCA8 \uC5EC\uBD80 \uD655\uC778\uACFC \uC138\uBB34\uB2F9\uAD6D \uC2E0\uACE0 \uBAA9\uC801 \uC678\uC5D0\uB294 \uD65C\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA70, \uBAA9\uC801 \uB2EC\uC131 \uC989\uC2DC \uC77C\uAD04 \uD3D0\uAE30 \uCC98\uB9AC\uB429\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      }, "\uC774\uBCA4\uD2B8 \uBB38\uC758\uB294 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "tel:1833-5023",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      }, "1833-5023"), "\uB85C \uC804\uD654 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      }), "(\uC804\uD654 \uAC00\uB2A5 \uC2DC\uAC04 \uD3C9\uC77C 10:00~18:00)")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "layer-popup terms terms01",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        },
        __self: this
      }, "\uB808\uC774\uC5B4 \uD31D\uC5C5\uB2EB\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      }, "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758(\uD544\uC218)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      }, "(\uC8FC)\uC9C1\uBC29\uC740 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      }), "\uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1 \uBC0F \uC774\uC6A9\uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        },
        __self: this
      }, "\uC815\uBCF4\uC8FC\uCCB4\uB294 \uBCF8 \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uC5D0 \uAD00\uD55C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        },
        __self: this
      }), "\uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uC2E4 \uAD8C\uB9AC\uAC00 \uC788\uC73C\uB098,\xA0\uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        },
        __self: this
      }), "\uD544\uC694\uD55C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        },
        __self: this
      }), "\uCD5C\uC18C\uD55C\uC758 \uAC1C\uC778\uC815\uBCF4\uC774\uBBC0\uB85C \uB3D9\uC758\uB97C \uD574 \uC8FC\uC154\uC57C \uC11C\uBE44\uC2A4\uB97C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        },
        __self: this
      }), "\uC774\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        },
        __self: this
      }, "\uBCF4\uB2E4 \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uD68C\uC0AC\uC758 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC744 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        },
        __self: this
      }), "\uCC38\uC870\uD558\uC5EC \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        },
        __self: this
      }, "\uC81C\uACF5\uD574\uC8FC\uC2DC\uB294 \uAC1C\uC778\uC815\uBCF4\uB294\xA0\u2018\uC0C1\uB2F4 \uC548\uB0B4\uB97C \uC694\uCCAD\uD558\uAE30 \uC704\uD55C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        },
        __self: this
      }), "\uC6A9\uB3C4\u2019\uC758 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBAA9\uC801\uC73C\uB85C \uC218\uC9D1\uD558\uBA70 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        },
        __self: this
      }), "\uC774\uC678 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        },
        __self: this
      }), "\uBAA9\uC801\uC73C\uB85C\uB294 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dl", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588
        },
        __self: this
      }, "\uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588
        },
        __self: this
      }), "\uC774\uC6A9 \uBAA9\uC801"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        },
        __self: this
      }, "\uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBC0F \uC0C1\uB2F4,\xA0\uBD80\uC815\uC774\uC6A9 \uD655\uC778 \uBC0F \uBC29\uC9C0,\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        },
        __self: this
      }), "\uB9CC\uC871\uB3C4 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        },
        __self: this
      }), "\uBC0F \uC124\uBB38\uC870\uC0AC, \uBCF8\uC778\xB7\uC5F0\uB839\uD655\uC778,\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        },
        __self: this
      }), "\uC2E0\uADDC\uC11C\uBE44\uC2A4 \uAC1C\uBC1C,\xA0\uD504\uB85C\uBAA8\uC158 \uC548\uB0B4", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        },
        __self: this
      }), "\uBB38\uC758\uC0AC\uD56D \uB610\uB294 \uBD88\uB9CC\xB7\uBD84\uC7C1\uCC98\uB9AC,\xA0\uB9DE\uCDA4\uD615 \uC11C\uBE44\uC2A4 \uC81C\uACF5,\xA0\uC11C\uBE44\uC2A4 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        },
        __self: this
      }), "\uAC1C\uC120\uC5D0 \uD65C\uC6A9,\xA0\uACC4\uC815\uB3C4\uC6A9 \uBC0F \uBD80\uC815\uAC70\uB798 \uBC29\uC9C0"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        },
        __self: this
      }, "\uC218\uC9D1\uD558\uB294 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        },
        __self: this
      }), "\uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592
        },
        __self: this
      }, "\uC5F0\uB77D\uCC98 (\uD734\uB300\uD3F0 \uBC88\uD638 \uB610\uB294 \uC804\uD654\uBC88\uD638)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        },
        __self: this
      }, "\uAC1C\uC778\uC815\uBCF4\uC758 \uC774\uC6A9 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        },
        __self: this
      }), "\uBC0F \uBCF4\uC720\uAE30\uAC04"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        },
        __self: this
      }, "\uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBAA9\uC801 \uB2EC\uC131 \uC2DC\uAE4C\uC9C0 \uB610\uB294 \uD68C\uC6D0\uD0C8\uD1F4 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        },
        __self: this
      }), "\uC2DC \uC989\uC2DC \uC0AD\uC81C. ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        },
        __self: this
      }), "\uB2E8, \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        },
        __self: this
      }), "\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960 \uBC0F \uAD00\uACC4 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        },
        __self: this
      }), "\uBC95\uB839\uC5D0 \uB530\uB978 \uBCF4\uAD00 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        },
        __self: this
      }), "\uC758\uBB34\uAC00 \uC788\uC744 \uACBD\uC6B0 \uD574\uB2F9 \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uD568.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        },
        __self: this
      }, "\uBCF8 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC704\uD574\uC11C \uD544\uC218\uC801\uC778 \uB3D9\uC758\uC774\uBBC0\uB85C,\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        },
        __self: this
      }), "\uB3D9\uC758\uB97C \uD558\uC9C0 \uC54A\uC73C\uBA74 \uD574\uB2F9 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uC2E4 \uC218 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        },
        __self: this
      }), "\uC5C6\uC2B5\uB2C8\uB2E4.\xA0\uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uB294 \uACBD\uC6B0\uC5D0\uB3C4 \uB2E4\uB978 \uC9C1\uBC29 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        },
        __self: this
      }), "\uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9\uC5D0\uB294 \uC601\uD5A5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "layer-popup terms terms02",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        },
        __self: this
      }, "\uB808\uC774\uC5B4 \uD31D\uC5C5\uB2EB\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606
        },
        __self: this
      }, "\uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5 \uB3D9\uC758(\uD544\uC218)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        },
        __self: this
      }, "(\uC8FC)\uC9C1\uBC29\uC740 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        },
        __self: this
      }), "\uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1 \uBC0F \uC774\uC6A9\uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        },
        __self: this
      }, "\uC815\uBCF4\uC8FC\uCCB4\uB294 \uBCF8 \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uC5D0 \uAD00\uD55C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        },
        __self: this
      }), "\uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uC2E4 \uAD8C\uB9AC\uAC00 \uC788\uC73C\uB098,\xA0\uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        },
        __self: this
      }), "\uD544\uC694\uD55C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        },
        __self: this
      }), "\uCD5C\uC18C\uD55C\uC758 \uAC1C\uC778\uC815\uBCF4\uC774\uBBC0\uB85C \uB3D9\uC758\uB97C\xA0\uD574\uC8FC\uC154\uC57C\xA0\uC11C\uBE44\uC2A4\uB97C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        },
        __self: this
      }), "\uC774\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609
        },
        __self: this
      }, "\uBCF4\uB2E4 \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uD68C\uC0AC\uC758 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC744 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609
        },
        __self: this
      }), "\uCC38\uC870\uD558\uC5EC \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dl", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612
        },
        __self: this
      }, "\uAC1C\uC778\uC815\uBCF4 \uC81C\uACF5\uBC1B\uB294 \uC790"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613
        },
        __self: this
      }, "\uC0BC\uC131\uBB3C\uC0B0\u321C, \u321C\uC5E0\uBE44\uC564\uD640\uB529\uC2A4"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614
        },
        __self: this
      }, "\uC81C\uACF5 \uC815\uBCF4"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615
        },
        __self: this
      }, "\uD734\uB300\uD3F0 \uBC88\uD638"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616
        },
        __self: this
      }, "\uBAA9\uC801"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617
        },
        __self: this
      }, "\uC774\uC6A9\uC790\uAC00 \uBB38\uC758\uD55C \uC11C\uBE44\uC2A4 \uC81C\uACF5"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618
        },
        __self: this
      }, "\uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619
        },
        __self: this
      }, "\uC11C\uBE44\uC2A4 \uBAA9\uC801 \uB2EC\uC131 \uC2DC\uAE4C\uC9C0.\xA0\uB2E8,\xA0\uC804\uC790\uC0C1\uAC70\uB798 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619
        },
        __self: this
      }), "\uB4F1\uC5D0\uC11C\uC758 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619
        },
        __self: this
      }), "\uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960 \uBC0F \uAD00\uACC4 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619
        },
        __self: this
      }), "\uBC95\uB839\uC5D0 \uB530\uB978 \uBCF4\uAD00 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619
        },
        __self: this
      }), "\uC758\uBB34\uAC00 \uC788\uC744 \uACBD\uC6B0 \uD574\uB2F9 \uAE30\uAC04 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619
        },
        __self: this
      }), "\uB3D9\uC548 \uBCF4\uAD00\uD568.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622
        },
        __self: this
      }, "\uBCF8 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC704\uD574\uC11C \uD544\uC218\uC801\uC778 \uB3D9\uC758\uC774\uBBC0\uB85C,\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622
        },
        __self: this
      }), "\uB3D9\uC758\uB97C \uD558\uC9C0 \uC54A\uC73C\uBA74 \uD574\uB2F9 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uC2E4 \uC218 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622
        },
        __self: this
      }), "\uC5C6\uC2B5\uB2C8\uB2E4.\xA0\uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uB294 \uACBD\uC6B0\uC5D0\uB3C4 \uB2E4\uB978 \uC9C1\uBC29 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622
        },
        __self: this
      }), "\uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9\uC5D0\uB294 \uC601\uD5A5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "layer-popup terms terms03",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627
        },
        __self: this
      }, "\uB808\uC774\uC5B4 \uD31D\uC5C5\uB2EB\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630
        },
        __self: this
      }, "\uBD80\uB3D9\uC0B0 \uC815\uBCF4 \uBC0F \uC774\uBCA4\uD2B8 \uD61C\uD0DD \uC218\uC2E0(\uC120\uD0DD)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632
        },
        __self: this
      }, "(\uC8FC)\uC9C1\uBC29\uC740 \uB354 \uB098\uC740 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uACE0\uC790\xA0\uAD11\uACE0\xB7\uB9C8\uCF00\uD305\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632
        },
        __self: this
      }), "\uBAA9\uC801\uC758 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uC5D0 \uB300\uD55C ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632
        },
        __self: this
      }), "\uB3D9\uC758\uB97C \uBC1B\uACE0\uC790 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632
        },
        __self: this
      }), "\uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633
        },
        __self: this
      }, "\uC218\uC9D1\uB41C \uAC1C\uC778 \uC815\uBCF4\uB294\xA0SMS, PUSH\uC54C\uB9BC \uB4F1 \uC601\uB9AC\uBAA9\uC801\uC758 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633
        },
        __self: this
      }), "\uAD11\uACE0\uC131 \uC815\uBCF4 \uC804\uB2EC\uC5D0 \uD65C\uC6A9\uB418\uAC70\uB098 \uC601\uC5C5 \uBC0F ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633
        },
        __self: this
      }), "\uB9C8\uCF00\uD305 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633
        },
        __self: this
      }), "\uBAA9\uC801\uC73C\uB85C \uD65C\uC6A9\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dl", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 635
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636
        },
        __self: this
      }, "\uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636
        },
        __self: this
      }), "\uC774\uC6A9 \uBAA9\uC801"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637
        },
        __self: this
      }, "\uC9C1\uBC29 \uBC0F \uC81C\uD734\uC0AC\uC758\xA0\uC0C1\uD488\xB7\uC11C\uBE44\uC2A4\uC5D0\xA0\uB300\uD55C\xA0\uAD11\uACE0\xB7", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637
        },
        __self: this
      }), "\uD64D\uBCF4\xB7\uD504\uB85C\uBAA8\uC158\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637
        },
        __self: this
      }), "\uC81C\uACF5"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638
        },
        __self: this
      }, "\uC218\uC9D1\uD558\uB294 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "pc-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638
        },
        __self: this
      }), "\uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639
        },
        __self: this
      }, "\uC5F0\uB77D\uCC98 (\uD734\uB300\uD3F0 \uBC88\uD638 \uB610\uB294 \uC804\uD654\uBC88\uD638)")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642
        },
        __self: this
      }, "\uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uC2DC\uB294 \uACBD\uC6B0\uC5D0\uB3C4 \uC11C\uBE44\uC2A4\uB294 \uC774\uC6A9\uC774 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642
        },
        __self: this
      }), "\uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB610\uD55C,\xA0\uAD11\uACE0\xB7\uB9C8\uCF00\uD305\xA0\uB3D9\uC758\uB294 \uC9C1\uBC29 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642
        },
        __self: this
      }), "\uACE0\uAC1D\uC13C\uD130(", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "tel:1661-8734",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642
        },
        __self: this
      }, "1661-8734"), ")\uB97C \uD1B5\uD574\uC11C \uC5B8\uC81C\uB4E0\uC9C0 \uCCA0\uD68C\uD560 \uC218 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642
        },
        __self: this
      }), "\uC788\uC2B5\uB2C8\uB2E4."))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "layer-popup finish",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 646
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 647
        },
        __self: this
      }, "\uC774\uBCA4\uD2B8 \uCC38\uC5EC\uAC00", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 647
        },
        __self: this
      }), "\uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648
        },
        __self: this
      }, "\uB2EB\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "floating-banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 652
        },
        __self: this
      }, "INVITATION")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "vr-iframe-box rotate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 655
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("iframe", {
        src: "",
        id: "vr-iframe",
        frameborder: "0",
        allow: "fullscreen",
        allowfullscreen: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-popup-close m-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657
        },
        __self: this
      }, "\uB808\uC774\uC5B4 \uD31D\uC5C5\uB2EB\uAE30"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "layer-popup plan-expand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 660
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slider slider04",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup01.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup02.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 669
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup03.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 673
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup04.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 673
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 676
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup05.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 676
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 678
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup06.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 681
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup07.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 684
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 685
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup08.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 685
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 687
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 688
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup09.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 688
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 690
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup10.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 694
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup11.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 694
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 696
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 697
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup12.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 697
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 699
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 700
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup13.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 700
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 702
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 703
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup14.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 703
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 705
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 706
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/popup15.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 706
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-popup-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 710
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 710
        },
        __self: this
      }, "\uB808\uC774\uC5B4 \uD31D\uC5C5\uB2EB\uAE30"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "layer-popup gallery-expand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 713
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn-popup-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714
        },
        __self: this
      }, "\uB808\uC774\uC5B4 \uD31D\uC5C5\uB2EB\uAE30")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slider slider05",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 716
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 717
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 718
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery01.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 718
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 721
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 722
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery02.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 722
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 726
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery03.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 726
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 729
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 730
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery04.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 730
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery05.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 737
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 738
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery06.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 738
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 741
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery07.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 745
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery08.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 749
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 750
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery09.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 750
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery10.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "slide-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 758
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/img/pop_gallery11.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 758
        },
        __self: this
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

      Object(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_13__["sendEvent"])(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_13__["ZB_EVENT_TYPE"].ZB_SCREEN_CLICK, {
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
      var _apiSubmit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
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

                    Object(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_13__["sendEvent"])(_src_utils_PinPoint__WEBPACK_IMPORTED_MODULE_13__["ZB_EVENT_TYPE"].APART_PURCHASE, {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.339ce675deb7f385fe33.hot-update.js.map