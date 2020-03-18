webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ShowStatsByCountry.js":
/*!******************************************!*\
  !*** ./components/ShowStatsByCountry.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowStatsByCountry; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_getStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/getStats */ "./util/getStats.js");
/* harmony import */ var _ShowStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShowStats */ "./components/ShowStats.js");

var _jsxFileName = "C:\\Users\\Randy\\Desktop\\projects\\coronavirusapp\\components\\ShowStatsByCountry.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function ShowStatsByCountry(_ref) {
  var url = _ref.url;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("USA"),
      selectedCountry = _useState[0],
      setSelectedCountry = _useState[1];

  var _getStats = Object(_util_getStats__WEBPACK_IMPORTED_MODULE_2__["default"])("https://covid19.mathdro.id/api/countries"),
      countries = _getStats.stats;

  function selectChangeHandler(e) {
    setSelectedCountry(e.target.value);
  }

  if (!countries) return ".";else {
    console.log(selectedCountry);
    return __jsx("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(_ShowStats__WEBPACK_IMPORTED_MODULE_3__["default"], {
      selectedCountry: "Global",
      url: "https://covid19.mathdro.id/api/countries/" + selectedCountry,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("select", {
      onChange: function onChange(e) {
        return selectChangeHandler(e);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, Object.entries(countries.countries).map(function (_ref2) {
      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 1),
          country = _ref3[0];

      return __jsx("option", {
        key: country + "_Key",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, country);
    })));
  }
}

/***/ })

})
//# sourceMappingURL=index.js.0f908ba7924997bce7db.hot-update.js.map