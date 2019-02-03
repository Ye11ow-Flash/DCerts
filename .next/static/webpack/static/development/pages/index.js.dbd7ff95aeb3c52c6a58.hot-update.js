webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/verify.js":
/*!******************************!*\
  !*** ./components/verify.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Ethereum/web3 */ "./Ethereum/web3.js");
/* harmony import */ var _Ethereum_Contracts_certificateInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Ethereum/Contracts/certificateInstance */ "./Ethereum/Contracts/certificateInstance.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! object-hash */ "./node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Prafful\\Desktop\\DCerts\\components\\verify.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var h = '';
var tx = {
  logo: "sdfsdf",
  cname: "",
  fname: "",
  lname: "",
  desc: "",
  date: "",
  sign: ""
};
var sig = '';

var VerifyCert =
/*#__PURE__*/
function (_Component) {
  _inherits(VerifyCert, _Component);

  function VerifyCert(props) {
    var _this;

    _classCallCheck(this, VerifyCert);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VerifyCert).call(this, props));
    _this.state = {
      tx: {
        logo: "abcd"
      }
    };
    return _this;
  }

  _createClass(VerifyCert, [{
    key: "setJson",
    value: function setJson(e) {
      var json = e.target.files;
      var reader = new FileReader();
      reader.readAsDataURL(json[0]);
      reader.addEventListener('load', function () {
        tx = JSON.parse(atob(reader.result.substring(29)));
        h = tx.txHash;
        sig = tx.digitalSignature;
        delete tx.txHash;
        delete tx.digitalSignature;
        console.log(_typeof(tx));
      });
    }
  }, {
    key: "verify",
    value: function () {
      var _verify = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var hashedCert, transaction, functionSignature, input2, fromAccount, method, params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  tx: tx
                });
                console.log(_typeof(tx));
                hashedCert = object_hash__WEBPACK_IMPORTED_MODULE_5___default()(tx);
                _context.next = 5;
                return _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getTransaction(h);

              case 5:
                transaction = _context.sent;
                functionSignature = _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.abi.encodeFunctionSignature('upload(string)');
                input2 = _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.abi.decodeParameter('string', transaction.input.replace(functionSignature, ''));
                input2 = input2.replace('\"', '');
                console.log("input2 = " + input2);
                if (input2 == hashedCert) alert("Certificate contents verified");else alert("Certificate contents not verified");
                fromAccount = transaction.from;
                method = 'personal_ecRecover';
                params = [sig, input2];
                _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].currentProvider.sendAsync({
                  method: method,
                  params: params,
                  fromAccount: fromAccount
                }, function (err, result) {
                  var recovered = result.result;
                  console.log(recovered);
                  console.log(fromAccount);
                  if (recovered === fromAccount) console.log("Sender verified");else console.log("Sender not verified");
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function verify() {
        return _verify.apply(this, arguments);
      }

      return verify;
    }() // 	personalSignButton.addEventListener('click', function(event) {
    //   event.preventDefault()
    //   var text = terms
    //   var msg = ethUtil.bufferToHex(new Buffer(text, 'utf8'))
    //   // var msg = '0x1' // hexEncode(text)
    //   console.log(msg)
    //   var from = web3.eth.accounts[0]
    //   if (!from) return connect()
    //   /*  web3.personal.sign not yet implemented!!!
    //    *  We're going to have to assemble the tx manually!
    //    *  This is what it would probably look like, though:
    //     web3.personal.sign(msg, from) function (err, result) {
    //       if (err) return console.error(err)
    //       console.log('PERSONAL SIGNED:' + result)
    //     })
    //   */
    //    console.log('CLICKED, SENDING PERSONAL SIGN REQ')
    //   var params = [msg, from]
    //   var method = 'personal_sign'
    // web3.currentProvider.sendAsync({
    //   method,
    //   params,
    //   from,
    // }, function (err, result) {
    //   if (err) return console.error(err)
    //   if (result.error) return console.error(result.error)
    //   console.log('PERSONAL SIGNED:' + JSON.stringify(result.result))
    //   console.log('recovering...')
    //   const msgParams = { data: msg }
    //   msgParams.sig = result.result
    //   console.dir({ msgParams })
    //   const recovered = sigUtil.recoverPersonalSignature(msgParams)
    //   console.dir({ recovered })
    //   if (recovered === from ) {
    //     console.log('SigUtil Successfully verified signer as ' + from)
    //   } else {
    //     console.dir(recovered)
    //     console.log('SigUtil Failed to verify signer when comparing ' + recovered.result + ' to ' + from)
    //     console.log('Failed, comparing %s to %s', recovered, from)
    //   }
    //     /*
    //     method = 'personal_ecRecover'
    //     var params = [msg, result.result]
    //     web3.currentProvider.sendAsync({
    //       method,
    //       params,
    //       from,
    //     }, function (err, recovered) {
    //       console.dir({ err, recovered })
    //       if (err) return console.error(err)
    //       if (result.error) return console.error(result.error)
    //       if (result.result === from ) {
    //         console.log('Successfully verified signer as ' + from)
    //       } else {
    //         console.log('Failed to verify signer when comparing ' + result.result + ' to ' + from)
    //       }
    //     })
    //     */
    //   })
    // })

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "file",
        onChange: function onChange(e) {
          return _this2.setJson(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Upload JSON file for verification"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "success",
        onClick: function onClick() {
          return _this2.verify();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Verify"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        padding: 10,
        className: "block-example border border-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        row: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 1,
          offset: 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, this.state.tx.logo), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, this.state.tx.cname), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          offset: 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "Certificate Of Recognition")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, this.state.tx.fname), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, this.state.tx.lname), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 5,
          order: 5,
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, this.state.tx.desc), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, this.state.tx.date), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, this.state.tx.sign), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      })))))));
    }
  }]);

  return VerifyCert;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (VerifyCert); // <Button onClick={() => this.verify()}> Verify Certificate </Button>

/***/ })

})
//# sourceMappingURL=index.js.dbd7ff95aeb3c52c6a58.hot-update.js.map