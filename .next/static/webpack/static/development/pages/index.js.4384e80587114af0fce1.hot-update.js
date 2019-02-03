webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/loginform.js":
/*!*********************************!*\
  !*** ./components/loginform.js ***!
  \*********************************/
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

var _jsxFileName = "C:\\Users\\Prafful\\Desktop\\DCerts\\components\\loginform.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






 // import InputGroup from 'react-bootstrap';
// import Button from 'react-bootstrap/lib/Button';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import Form from 'react-bootstrap/lib/Form';
// import FormControl from 'react-bootstrap/lib/FormControl';
// const ganache = require('ganache-cli');
// const Web3 = require('web3');
// const web3 = new Web3(ganache.provider());
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import 'jquery/src/jquery';
// import 'bootstrap';
// import {FormControl} from 'react-bootstrap';

var x = "";
var pk = "";
var sign = "";

var CertificateForm =
/*#__PURE__*/
function (_Component) {
  _inherits(CertificateForm, _Component);

  _createClass(CertificateForm, [{
    key: "componentDidMount",
    // static async getInitialProps(){
    // 	const accounts = await web3.eth.getAccounts();
    // 	return {accounts: accounts};
    // }
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var accounts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getAccounts();

              case 2:
                accounts = _context.sent;
                this.setState({
                  accounts: accounts
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }]);

  function CertificateForm(props) {
    var _this;

    _classCallCheck(this, CertificateForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CertificateForm).call(this, props));
    _this.state = {
      logo: "",
      cname: "",
      fname: "",
      lname: "",
      desc: "",
      date: "",
      sign: "",
      txHash: "",
      done: false
    };
    return _this;
  } // async signAndSend(){
  // 	var hashedCert = hash(this.state);
  // 	console.log("signing");
  // 	console.log(hashedCert);
  // 	// console.log(this.state.accounts[0]);
  // 	var signed = await web3.eth.signTypedData(hashedCert, this.state.accounts[0]);
  // 	// console.log("signed");
  // 	await certificate.methods.upload(hashedCert).send({
  // 		from: this.state.accounts[0]
  // 	}).on('transactionHash', function(txHash){
  // 		x = txHash;
  // 	});
  // }


  _createClass(CertificateForm, [{
    key: "signAndSend",
    value: function () {
      var _signAndSend = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var cert, hashedCert, fromAccount, params, method;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cert = {
                  logo: this.state.logo,
                  sign: this.state.sign,
                  fname: this.state.fname,
                  lname: this.state.lname,
                  desc: this.state.desc,
                  date: this.state.date,
                  cname: this.state.cname
                };
                hashedCert = object_hash__WEBPACK_IMPORTED_MODULE_5___default()(cert);
                fromAccount = this.state.accounts[0];
                params = [hashedCert, fromAccount];
                method = 'personal_sign'; // console.log(this.state.accounts[0]);
                // var signed = await web3.eth.signTypedData(hashedCert, this.state.accounts[0]);
                // console.log("signed");
                // await certificate.methods.upload(hashedCert).send({
                // 	from: this.state.accounts[0]
                // }).on('transactionHash', function(txHash){
                // 	x = txHash;
                // 	// alert('transaction successful. ');
                // 	cert.txHash = x;
                // });

                _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].currentProvider.sendAsync({
                  method: method,
                  params: params,
                  fromAccount: fromAccount
                }, function (err, result) {
                  if (err) return console.error(err);
                  if (result.error) return console.error(result.error);
                  console.log('PERSONAL SIGNED:' + JSON.stringify(result.result)); // console.log('recovering...')
                  // const msgParams = { data: msg }
                  // msgParams.sig = result.result
                  // console.dir({ msgParams })
                  // const recovered = sigUtil.recoverPersonalSignature(msgParams)
                  // console.dir({ recovered })
                  // if (recovered === from ) {
                  //   console.log('SigUtil Successfully verified signer as ' + from)
                  // } else {
                  //   console.dir(recovered)
                  //   console.log('SigUtil Failed to verify signer when comparing ' + recovered.result + ' to ' + from)
                  //   console.log('Failed, comparing %s to %s', recovered, from)
                });
                this.setState({
                  cert: cert,
                  done: true
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function signAndSend() {
        return _signAndSend.apply(this, arguments);
      }

      return signAndSend;
    }()
  }, {
    key: "verify",
    value: function () {
      var _verify = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(txHash) {
        var hashedCert, tx, functionSignature, input2;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // console.log("hi");
                hashedCert = object_hash__WEBPACK_IMPORTED_MODULE_5___default()(this.state);
                console.log('waiting..');
                _context3.next = 4;
                return _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getTransaction(x);

              case 4:
                tx = _context3.sent;
                console.log('done');
                console.log(tx);
                functionSignature = _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.abi.encodeFunctionSignature('upload(string)'); // console.log(input.length);

                console.log(tx.input);
                console.log(_typeof(tx.input));
                input2 = _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.abi.decodeParameter('string', tx.input.replace(functionSignature, ''));
                console.log(hashedCert == input2); // console.log(tx);
                // console.log(functionSignature);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function verify(_x) {
        return _verify.apply(this, arguments);
      }

      return verify;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        padding: 10,
        className: "block-example border border-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        row: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
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
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 1,
          offset: 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "text",
        placeholder: "logo",
        value: this.state.logo,
        onChange: function onChange(event) {
          return _this2.setState({
            logo: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "text",
        placeholder: "company name",
        value: this.state.cname,
        onChange: function onChange(event) {
          return _this2.setState({
            cname: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          offset: 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Certificate Of Recognition")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "text",
        placeholder: "first name",
        value: this.state.fname,
        onChange: function onChange(event) {
          return _this2.setState({
            fname: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "text",
        placeholder: "last name",
        value: this.state.lname,
        onChange: function onChange(event) {
          return _this2.setState({
            lname: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
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
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "textarea",
        placeholder: "In recognition for your outstanding academic performance, and your efforts in assisting others to achieve their goals. Your volunteer services for students with learning disabilities has resulted in a rise in their academic performance as well.",
        value: this.state.desc,
        onChange: function onChange(event) {
          return _this2.setState({
            desc: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "date",
        placeholder: "date",
        value: this.state.date,
        onChange: function onChange(event) {
          return _this2.setState({
            date: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "text",
        placeholder: "signature",
        value: this.state.sign,
        onChange: function onChange(event) {
          return _this2.setState({
            sign: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: {
          size: 6,
          offset: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        size: "lg",
        color: "primary",
        onClick: function onClick() {
          return _this2.signAndSend();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "Submit"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, this.state.done ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "pull-right btn btn-success",
        style: {
          margin: 10
        },
        href: "data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(this.state.cert))),
        download: "certificate.json",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, " Download Data as JSON") : ''), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "Click", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "./verify",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "here")), ' ', "to read more")));
    }
  }]);

  return CertificateForm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CertificateForm); // 0x60095ea77f093baf7d12372d68c027f272da667414ce11431aa2c73d63b1b0bb

/***/ }),

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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Ethereum/web3 */ "./Ethereum/web3.js");
/* harmony import */ var _Ethereum_Contracts_certificateInstance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Ethereum/Contracts/certificateInstance */ "./Ethereum/Contracts/certificateInstance.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! object-hash */ "./node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _loginform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loginform */ "./components/loginform.js");
/* harmony import */ var _verify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verify */ "./components/verify.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
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


 // import DynamicComponent = dynamic(() => import('../components/loginform')











var history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createMemoryHistory"])();

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        md: {
          size: 6,
          offset: 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        md: {
          size: 6,
          offset: 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        md: {
          size: 6,
          offset: 6
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        md: {
          size: 6,
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        md: {
          size: 6,
          offset: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        md: {
          size: 6,
          offset: 7
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        md: {
          size: 6,
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        size: "lg",
        color: "info",
        onClick: this.routeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Create Certificate"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        md: {
          size: 6,
          offset: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        size: "lg",
        color: "warning",
        onClick: this.routeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "View Certificate"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        md: {
          size: 6,
          offset: 7
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        size: "lg",
        color: "success",
        onClick: this.routeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Verify Certificate"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })))))));
    }
  }]);

  return CertMenu;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CertMenu); // <BrowserRouter history={history}>
// 			      <Switch>
// 			          <Route exact path="/" component={CertMenu} />
// 			          <Route path="/loginform" component={Loginform} />
// 			          <Route path="/verify" component={Verify} />
// 			      </Switch>
// 			  	</BrowserRouter>

/***/ }),

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
        delete tx.txHash;
        console.log(_typeof(tx));
      });
    }
  }, {
    key: "verify",
    value: function () {
      var _verify = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var hashedCert, transaction, functionSignature, input2;
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
                if (hashedCert == input2) alert("Verified.");else alert("Not verified.");

              case 9:
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
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "file",
        onChange: function onChange(e) {
          return _this2.setJson(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Upload JSON file for verification"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "success",
        onClick: function onClick() {
          return _this2.verify();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Verify"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        padding: 10,
        className: "block-example border border-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        row: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 1,
          offset: 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, this.state.tx.logo), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, this.state.tx.cname), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
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
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          offset: 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Certificate Of Recognition")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, this.state.tx.fname), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, this.state.tx.lname), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
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
          size: 5,
          order: 5,
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, this.state.tx.desc), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
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
          offset: 2
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
      }, this.state.tx.date), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 3
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
      }, this.state.tx.sign), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      })))))));
    }
  }]);

  return VerifyCert;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (VerifyCert); // <Button onClick={() => this.verify()}> Verify Certificate </Button>

/***/ }),

/***/ "./node_modules/next/dist/lib/dynamic.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/lib/dynamic.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noSSR = noSSR;
exports.default = dynamic;

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/lib/loadable.js"));

var isServerSide = typeof window === 'undefined';

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is neccesary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  } // This will only be rendered on the server side


  return function () {
    return _react.default.createElement(loadableOptions.loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
}

function DefaultLoading() {
  return _react.default.createElement("p", null, "loading...");
}

function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable.default;
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading;

      if (true) {
        if (isLoading) {
          return _react.default.createElement(DefaultLoading, null);
        }

        if (error) {
          return _react.default.createElement("p", null, error.message, _react.default.createElement("br", null), error.stack);
        }
      }

      return _react.default.createElement(DefaultLoading, null);
    } // Support for direct import(), eg: dynamic(import('../hello-world'))
    // Note that this is only kept for the edge case where someone is passing in a promise as first argument
    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
    // To make sure we don't execute the import without rendering first

  };

  if (typeof dynamicOptions.then === 'function') {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if ((0, _typeof2.default)(dynamicOptions) === 'object') {
    loadableOptions = (0, _objectSpread2.default)({}, loadableOptions, dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = (0, _objectSpread2.default)({}, loadableOptions, options); // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })

  if (dynamicOptions.render) {
    loadableOptions.render = function (loaded, props) {
      return dynamicOptions.render(props, loaded);
    };
  } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


  if (dynamicOptions.modules) {
    loadableFn = _loadable.default.Map;
    var loadModules = {};
    var modules = dynamicOptions.modules();
    (0, _keys.default)(modules).forEach(function (key) {
      var value = modules[key];

      if (typeof value.then === 'function') {
        loadModules[key] = function () {
          return value.then(function (mod) {
            return mod.default || mod;
          });
        };

        return;
      }

      loadModules[key] = value;
    });
    loadableOptions.loader = loadModules;
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = (0, _objectSpread2.default)({}, loadableOptions, loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/lib/dynamic */ "./node_modules/next/dist/lib/dynamic.js")


/***/ })

})
//# sourceMappingURL=index.js.4384e80587114af0fce1.hot-update.js.map