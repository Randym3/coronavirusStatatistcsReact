webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ShowStats.js":
/*!*********************************!*\
  !*** ./components/ShowStats.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_getStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/getStats */ "./util/getStats.js");
var _jsxFileName = "C:\\Users\\Randy\\Desktop\\projects\\coronavirusapp\\components\\ShowStats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ShowStats(_ref) {
  var url = _ref.url;

  var _getStats = Object(_util_getStats__WEBPACK_IMPORTED_MODULE_1__["default"])(url),
      stats = _getStats.stats,
      error = _getStats.error;

  if (!stats) return "Loading...";
  if (error) return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "500 internal servor error. sorry");else {
    return __jsx("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "stats-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Confirmed: ", stats.confirmed.value), __jsx("div", {
      className: "stats-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Recovered: ", stats.recovered.value), __jsx("div", {
      className: "stats-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Deaths: ", stats.deaths.value), __jsx("div", {
      className: "stats-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Death Rate:", " ", (stats.deaths.value / stats.confirmed.value).toFixed(4) * 100 + "%"));
  }
}

/***/ })

})
//# sourceMappingURL=index.js.7953d9b6c4d7ab9c877d.hot-update.js.map