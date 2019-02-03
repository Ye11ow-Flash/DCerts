webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Ethereum/web3 */ "./Ethereum/web3.js");
/* harmony import */ var _Ethereum_Contracts_certificateInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Ethereum/Contracts/certificateInstance */ "./Ethereum/Contracts/certificateInstance.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-hash */ "./node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _loginform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loginform */ "./components/loginform.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu */ "./components/menu.js");
/* harmony import */ var _verify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verify */ "./components/verify.js");
var _jsxFileName = "C:\\Users\\Prafful\\Desktop\\DCerts\\components\\menu.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';










var CertMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(CertMenu, _Component);

  function CertMenu() {
    _classCallCheck(this, CertMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(CertMenu).apply(this, arguments));
  }

  _createClass(CertMenu, [{
    key: "constuctor",
    value: function constuctor() {
      this.routeChange = this.routeChange.bind(this);
    }
  }, {
    key: "routeChange",
    value: function routeChange() {
      var path = "./loginform.js";
      this.props.history.push(path);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: {
          size: 6,
          offset: 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: {
          size: 6,
          offset: 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: {
          size: 6,
          offset: 6
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: {
          size: 6,
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: {
          size: 6,
          offset: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: {
          size: 6,
          offset: 7
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: {
          size: 6,
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        color: "info",
        onClick: this.routeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Create Certificate"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: {
          size: 6,
          offset: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        color: "warning",
        onClick: function onClick() {
          return _this.signAndSend();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "View Certificate"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: {
          size: 6,
          offset: 7
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        color: "success",
        onClick: function onClick() {
          return _this.signAndSend();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Verify Certificate"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BrowserRouter, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Switch, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, {
        exact: true,
        path: "/",
        component: _menu__WEBPACK_IMPORTED_MODULE_7__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, {
        path: "/loginform",
        component: _loginform__WEBPACK_IMPORTED_MODULE_6__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, {
        path: "/addproject",
        component: AddProject,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, {
        path: "/addprojectapplication",
        component: MyProApp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, {
        path: "/addprojectcompleted",
        component: MyProComp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, {
        path: "/updateprofile",
        component: UpdateProfile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, {
        path: "*",
        component: NotFound,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })))));
    }
  }]);

  return CertMenu;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CertMenu);

/***/ })

})
//# sourceMappingURL=index.js.edaaec731e09053c5555.hot-update.js.map