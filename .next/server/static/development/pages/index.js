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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Ethereum/Contracts/certificateInstance.js":
/*!***************************************************!*\
  !*** ./Ethereum/Contracts/certificateInstance.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../web3 */ "./Ethereum/web3.js");
/* harmony import */ var _build_Certificate_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../build/Certificate.json */ "./Ethereum/build/Certificate.json");
var _build_Certificate_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../build/Certificate.json */ "./Ethereum/build/Certificate.json", 1);


var instance = new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(JSON.parse(_build_Certificate_json__WEBPACK_IMPORTED_MODULE_1__.interface), '0xB9eB184f1c06a35dF14B8F0E0948d3FBe9AB27d6');
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./Ethereum/build/Certificate.json":
/*!*****************************************!*\
  !*** ./Ethereum/build/Certificate.json ***!
  \*****************************************/
/*! exports provided: assembly, bytecode, functionHashes, gasEstimates, interface, metadata, opcodes, runtimeBytecode, srcmap, srcmapRuntime, default */
/***/ (function(module) {

module.exports = {"assembly":{".code":[{"begin":28,"end":221,"name":"PUSH","value":"80"},{"begin":28,"end":221,"name":"PUSH","value":"40"},{"begin":28,"end":221,"name":"MSTORE"},{"begin":28,"end":221,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"1"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"1"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":28,"end":221,"name":"POP"},{"begin":28,"end":221,"name":"PUSH #[$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":28,"end":221,"name":"DUP1"},{"begin":28,"end":221,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":28,"end":221,"name":"PUSH","value":"0"},{"begin":28,"end":221,"name":"CODECOPY"},{"begin":28,"end":221,"name":"PUSH","value":"0"},{"begin":28,"end":221,"name":"RETURN"}],".data":{"0":{".auxdata":"a165627a7a72305820f9455f6908c8724eafaccaa2ecd2021b39550c9acab640510f1c0e50891fec890029",".code":[{"begin":28,"end":221,"name":"PUSH","value":"80"},{"begin":28,"end":221,"name":"PUSH","value":"40"},{"begin":28,"end":221,"name":"MSTORE"},{"begin":28,"end":221,"name":"PUSH","value":"4"},{"begin":28,"end":221,"name":"CALLDATASIZE"},{"begin":28,"end":221,"name":"LT"},{"begin":28,"end":221,"name":"PUSH [tag]","value":"1"},{"begin":28,"end":221,"name":"JUMPI"},{"begin":28,"end":221,"name":"PUSH","value":"FFFFFFFF"},{"begin":28,"end":221,"name":"PUSH","value":"100000000000000000000000000000000000000000000000000000000"},{"begin":28,"end":221,"name":"PUSH","value":"0"},{"begin":28,"end":221,"name":"CALLDATALOAD"},{"begin":28,"end":221,"name":"DIV"},{"begin":28,"end":221,"name":"AND"},{"begin":28,"end":221,"name":"PUSH","value":"42CE1488"},{"begin":28,"end":221,"name":"DUP2"},{"begin":28,"end":221,"name":"EQ"},{"begin":28,"end":221,"name":"PUSH [tag]","value":"2"},{"begin":28,"end":221,"name":"JUMPI"},{"begin":28,"end":221,"name":"tag","value":"1"},{"begin":28,"end":221,"name":"JUMPDEST"},{"begin":28,"end":221,"name":"PUSH","value":"0"},{"begin":28,"end":221,"name":"DUP1"},{"begin":28,"end":221,"name":"REVERT"},{"begin":115,"end":218,"name":"tag","value":"2"},{"begin":115,"end":218,"name":"JUMPDEST"},{"begin":115,"end":218,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"3"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"3"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":115,"end":218,"name":"PUSH","value":"40"},{"begin":115,"end":218,"name":"DUP1"},{"begin":115,"end":218,"name":"MLOAD"},{"begin":115,"end":218,"name":"PUSH","value":"20"},{"begin":115,"end":218,"name":"PUSH","value":"4"},{"begin":115,"end":218,"name":"DUP1"},{"begin":115,"end":218,"name":"CALLDATALOAD"},{"begin":115,"end":218,"name":"DUP1"},{"begin":115,"end":218,"name":"DUP3"},{"begin":115,"end":218,"name":"ADD"},{"begin":115,"end":218,"name":"CALLDATALOAD"},{"begin":115,"end":218,"name":"PUSH","value":"1F"},{"begin":115,"end":218,"name":"DUP2"},{"begin":115,"end":218,"name":"ADD"},{"begin":115,"end":218,"name":"DUP5"},{"begin":115,"end":218,"name":"SWAP1"},{"begin":115,"end":218,"name":"DIV"},{"begin":115,"end":218,"name":"DUP5"},{"begin":115,"end":218,"name":"MUL"},{"begin":115,"end":218,"name":"DUP6"},{"begin":115,"end":218,"name":"ADD"},{"begin":115,"end":218,"name":"DUP5"},{"begin":115,"end":218,"name":"ADD"},{"begin":115,"end":218,"name":"SWAP1"},{"begin":115,"end":218,"name":"SWAP6"},{"begin":115,"end":218,"name":"MSTORE"},{"begin":115,"end":218,"name":"DUP5"},{"begin":115,"end":218,"name":"DUP5"},{"begin":115,"end":218,"name":"MSTORE"},{"begin":115,"end":218,"name":"PUSH [tag]","value":"4"},{"begin":115,"end":218,"name":"SWAP5"},{"begin":115,"end":218,"name":"CALLDATASIZE"},{"begin":115,"end":218,"name":"SWAP5"},{"begin":115,"end":218,"name":"SWAP3"},{"begin":115,"end":218,"name":"SWAP4"},{"begin":115,"end":218,"name":"PUSH","value":"24"},{"begin":115,"end":218,"name":"SWAP4"},{"begin":115,"end":218,"name":"SWAP3"},{"begin":115,"end":218,"name":"DUP5"},{"begin":115,"end":218,"name":"ADD"},{"begin":115,"end":218,"name":"SWAP2"},{"begin":115,"end":218,"name":"SWAP1"},{"begin":115,"end":218,"name":"DUP2"},{"begin":115,"end":218,"name":"SWAP1"},{"begin":115,"end":218,"name":"DUP5"},{"begin":115,"end":218,"name":"ADD"},{"begin":115,"end":218,"name":"DUP4"},{"begin":115,"end":218,"name":"DUP3"},{"begin":115,"end":218,"name":"DUP1"},{"begin":115,"end":218,"name":"DUP3"},{"begin":115,"end":218,"name":"DUP5"},{"begin":115,"end":218,"name":"CALLDATACOPY"},{"begin":-1,"end":-1,"name":"POP"},{"begin":115,"end":218,"name":"SWAP5"},{"begin":115,"end":218,"name":"SWAP8"},{"begin":-1,"end":-1,"name":"POP"},{"begin":115,"end":218,"name":"PUSH [tag]","value":"5"},{"begin":115,"end":218,"name":"SWAP7"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":115,"end":218,"name":"JUMP"},{"begin":115,"end":218,"name":"tag","value":"4"},{"begin":115,"end":218,"name":"JUMPDEST"},{"begin":115,"end":218,"name":"STOP"},{"begin":115,"end":218,"name":"tag","value":"5"},{"begin":115,"end":218,"name":"JUMPDEST"},{"begin":181,"end":191,"name":"CALLER"},{"begin":168,"end":180,"name":"PUSH","value":"0"},{"begin":168,"end":192,"name":"SWAP1"},{"begin":168,"end":192,"name":"DUP2"},{"begin":168,"end":192,"name":"MSTORE"},{"begin":168,"end":192,"name":"PUSH","value":"20"},{"begin":168,"end":192,"name":"DUP2"},{"begin":168,"end":192,"name":"DUP2"},{"begin":168,"end":192,"name":"MSTORE"},{"begin":168,"end":192,"name":"PUSH","value":"40"},{"begin":168,"end":192,"name":"DUP3"},{"begin":168,"end":192,"name":"KECCAK256"},{"begin":27,"end":37,"name":"DUP1"},{"begin":27,"end":37,"name":"SLOAD"},{"begin":39,"end":40,"name":"PUSH","value":"1"},{"begin":23,"end":41,"name":"DUP2"},{"begin":23,"end":41,"name":"ADD"},{"begin":45,"end":68,"name":"DUP1"},{"begin":45,"end":68,"name":"DUP4"},{"begin":45,"end":68,"name":"SSTORE"},{"begin":168,"end":210,"name":"SWAP2"},{"begin":168,"end":210,"name":"DUP5"},{"begin":168,"end":210,"name":"MSTORE"},{"begin":168,"end":210,"name":"SWAP3"},{"begin":168,"end":210,"name":"DUP3"},{"begin":168,"end":210,"name":"SWAP1"},{"begin":168,"end":210,"name":"KECCAK256"},{"begin":168,"end":210,"name":"DUP5"},{"begin":168,"end":210,"name":"MLOAD"},{"begin":23,"end":41,"name":"SWAP2"},{"begin":23,"end":41,"name":"SWAP4"},{"begin":168,"end":210,"name":"PUSH [tag]","value":"8"},{"begin":168,"end":210,"name":"SWAP4"},{"begin":168,"end":210,"name":"SWAP2"},{"begin":168,"end":210,"name":"ADD"},{"begin":168,"end":210,"name":"SWAP2"},{"begin":168,"end":210,"name":"SWAP1"},{"begin":168,"end":210,"name":"DUP6"},{"begin":168,"end":210,"name":"ADD"},{"begin":168,"end":210,"name":"SWAP1"},{"begin":168,"end":210,"name":"PUSH [tag]","value":"9"},{"begin":168,"end":210,"name":"JUMP","value":"[in]"},{"begin":168,"end":210,"name":"tag","value":"8"},{"begin":168,"end":210,"name":"JUMPDEST"},{"begin":168,"end":210,"name":"POP"},{"begin":168,"end":210,"name":"POP"},{"begin":115,"end":218,"name":"POP"},{"begin":115,"end":218,"name":"JUMP","value":"[out]"},{"begin":28,"end":221,"name":"tag","value":"9"},{"begin":28,"end":221,"name":"JUMPDEST"},{"begin":28,"end":221,"name":"DUP3"},{"begin":28,"end":221,"name":"DUP1"},{"begin":28,"end":221,"name":"SLOAD"},{"begin":28,"end":221,"name":"PUSH","value":"1"},{"begin":28,"end":221,"name":"DUP2"},{"begin":28,"end":221,"name":"PUSH","value":"1"},{"begin":28,"end":221,"name":"AND"},{"begin":28,"end":221,"name":"ISZERO"},{"begin":28,"end":221,"name":"PUSH","value":"100"},{"begin":28,"end":221,"name":"MUL"},{"begin":28,"end":221,"name":"SUB"},{"begin":28,"end":221,"name":"AND"},{"begin":28,"end":221,"name":"PUSH","value":"2"},{"begin":28,"end":221,"name":"SWAP1"},{"begin":28,"end":221,"name":"DIV"},{"begin":28,"end":221,"name":"SWAP1"},{"begin":28,"end":221,"name":"PUSH","value":"0"},{"begin":28,"end":221,"name":"MSTORE"},{"begin":28,"end":221,"name":"PUSH","value":"20"},{"begin":28,"end":221,"name":"PUSH","value":"0"},{"begin":28,"end":221,"name":"KECCAK256"},{"begin":28,"end":221,"name":"SWAP1"},{"begin":28,"end":221,"name":"PUSH","value":"1F"},{"begin":28,"end":221,"name":"ADD"},{"begin":28,"end":221,"name":"PUSH","value":"20"},{"begin":28,"end":221,"name":"SWAP1"},{"begin":28,"end":221,"name":"DIV"},{"begin":28,"end":221,"name":"DUP2"},{"begin":28,"end":221,"name":"ADD"},{"begin":28,"end":221,"name":"SWAP3"},{"begin":28,"end":221,"name":"DUP3"},{"begin":28,"end":221,"name":"PUSH","value":"1F"},{"begin":28,"end":221,"name":"LT"},{"begin":28,"end":221,"name":"PUSH [tag]","value":"11"},{"begin":28,"end":221,"name":"JUMPI"},{"begin":28,"end":221,"name":"DUP1"},{"begin":28,"end":221,"name":"MLOAD"},{"begin":28,"end":221,"name":"PUSH","value":"FF"},{"begin":28,"end":221,"name":"NOT"},{"begin":28,"end":221,"name":"AND"},{"begin":28,"end":221,"name":"DUP4"},{"begin":28,"end":221,"name":"DUP1"},{"begin":28,"end":221,"name":"ADD"},{"begin":28,"end":221,"name":"OR"},{"begin":28,"end":221,"name":"DUP6"},{"begin":28,"end":221,"name":"SSTORE"},{"begin":28,"end":221,"name":"PUSH [tag]","value":"13"},{"begin":28,"end":221,"name":"JUMP"},{"begin":28,"end":221,"name":"tag","value":"11"},{"begin":28,"end":221,"name":"JUMPDEST"},{"begin":28,"end":221,"name":"DUP3"},{"begin":28,"end":221,"name":"DUP1"},{"begin":28,"end":221,"name":"ADD"},{"begin":28,"end":221,"name":"PUSH","value":"1"},{"begin":28,"end":221,"name":"ADD"},{"begin":28,"end":221,"name":"DUP6"},{"begin":28,"end":221,"name":"SSTORE"},{"begin":28,"end":221,"name":"DUP3"},{"begin":28,"end":221,"name":"ISZERO"},{"begin":28,"end":221,"name":"PUSH [tag]","value":"13"},{"begin":28,"end":221,"name":"JUMPI"},{"begin":28,"end":221,"name":"SWAP2"},{"begin":28,"end":221,"name":"DUP3"},{"begin":28,"end":221,"name":"ADD"},{"begin":28,"end":221,"name":"tag","value":"12"},{"begin":28,"end":221,"name":"JUMPDEST"},{"begin":28,"end":221,"name":"DUP3"},{"begin":28,"end":221,"name":"DUP2"},{"begin":28,"end":221,"name":"GT"},{"begin":28,"end":221,"name":"ISZERO"},{"begin":28,"end":221,"name":"PUSH [tag]","value":"13"},{"begin":28,"end":221,"name":"JUMPI"},{"begin":28,"end":221,"name":"DUP3"},{"begin":28,"end":221,"name":"MLOAD"},{"begin":28,"end":221,"name":"DUP3"},{"begin":28,"end":221,"name":"SSTORE"},{"begin":28,"end":221,"name":"SWAP2"},{"begin":28,"end":221,"name":"PUSH","value":"20"},{"begin":28,"end":221,"name":"ADD"},{"begin":28,"end":221,"name":"SWAP2"},{"begin":28,"end":221,"name":"SWAP1"},{"begin":28,"end":221,"name":"PUSH","value":"1"},{"begin":28,"end":221,"name":"ADD"},{"begin":28,"end":221,"name":"SWAP1"},{"begin":28,"end":221,"name":"PUSH [tag]","value":"12"},{"begin":28,"end":221,"name":"JUMP"},{"begin":28,"end":221,"name":"tag","value":"13"},{"begin":28,"end":221,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":28,"end":221,"name":"PUSH [tag]","value":"14"},{"begin":28,"end":221,"name":"SWAP3"},{"begin":28,"end":221,"name":"SWAP2"},{"begin":-1,"end":-1,"name":"POP"},{"begin":28,"end":221,"name":"PUSH [tag]","value":"15"},{"begin":28,"end":221,"name":"JUMP","value":"[in]"},{"begin":28,"end":221,"name":"tag","value":"14"},{"begin":28,"end":221,"name":"JUMPDEST"},{"begin":28,"end":221,"name":"POP"},{"begin":28,"end":221,"name":"SWAP1"},{"begin":28,"end":221,"name":"JUMP","value":"[out]"},{"begin":28,"end":221,"name":"tag","value":"15"},{"begin":28,"end":221,"name":"JUMPDEST"},{"begin":28,"end":221,"name":"PUSH [tag]","value":"16"},{"begin":28,"end":221,"name":"SWAP2"},{"begin":28,"end":221,"name":"SWAP1"},{"begin":28,"end":221,"name":"tag","value":"17"},{"begin":28,"end":221,"name":"JUMPDEST"},{"begin":28,"end":221,"name":"DUP1"},{"begin":28,"end":221,"name":"DUP3"},{"begin":28,"end":221,"name":"GT"},{"begin":28,"end":221,"name":"ISZERO"},{"begin":28,"end":221,"name":"PUSH [tag]","value":"14"},{"begin":28,"end":221,"name":"JUMPI"},{"begin":28,"end":221,"name":"PUSH","value":"0"},{"begin":28,"end":221,"name":"DUP2"},{"begin":28,"end":221,"name":"SSTORE"},{"begin":28,"end":221,"name":"PUSH","value":"1"},{"begin":28,"end":221,"name":"ADD"},{"begin":28,"end":221,"name":"PUSH [tag]","value":"17"},{"begin":28,"end":221,"name":"JUMP"},{"begin":28,"end":221,"name":"tag","value":"16"},{"begin":28,"end":221,"name":"JUMPDEST"},{"begin":28,"end":221,"name":"SWAP1"},{"begin":28,"end":221,"name":"JUMP","value":"[out]"}]}}},"bytecode":"608060405234801561001057600080fd5b5061019f806100206000396000f3006080604052600436106100405763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166342ce14888114610045575b600080fd5b34801561005157600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261009e9436949293602493928401919081908401838280828437509497506100a09650505050505050565b005b33600090815260208181526040822080546001810180835591845292829020845191936100d393910191908501906100d8565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061011957805160ff1916838001178555610146565b82800160010185558215610146579182015b8281111561014657825182559160200191906001019061012b565b50610152929150610156565b5090565b61017091905b80821115610152576000815560010161015c565b905600a165627a7a72305820f9455f6908c8724eafaccaa2ecd2021b39550c9acab640510f1c0e50891fec890029","functionHashes":{"upload(string)":"42ce1488"},"gasEstimates":{"creation":[129,83000],"external":{"upload(string)":null},"internal":{}},"interface":"[{\"constant\":false,\"inputs\":[{\"name\":\"certificate\",\"type\":\"string\"}],\"name\":\"upload\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]","metadata":"{\"compiler\":{\"version\":\"0.4.25+commit.59dbf8f1\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"certificate\",\"type\":\"string\"}],\"name\":\"upload\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"\":\"Certificate\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"\":{\"keccak256\":\"0x3513782de66f8dead4c9b5557bf5586b609eab9f4d5a4bd5b28104545e63bbdc\",\"urls\":[\"bzzr://bda1a5e47098de285fda777d12f2e5af883dc8de119e61c1a3948be452dbf892\"]}},\"version\":1}","opcodes":"PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19F DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x40 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x42CE1488 DUP2 EQ PUSH2 0x45 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x51 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x4 DUP1 CALLDATALOAD DUP1 DUP3 ADD CALLDATALOAD PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP6 ADD DUP5 ADD SWAP1 SWAP6 MSTORE DUP5 DUP5 MSTORE PUSH2 0x9E SWAP5 CALLDATASIZE SWAP5 SWAP3 SWAP4 PUSH1 0x24 SWAP4 SWAP3 DUP5 ADD SWAP2 SWAP1 DUP2 SWAP1 DUP5 ADD DUP4 DUP3 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP8 POP PUSH2 0xA0 SWAP7 POP POP POP POP POP POP POP JUMP JUMPDEST STOP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x20 DUP2 DUP2 MSTORE PUSH1 0x40 DUP3 KECCAK256 DUP1 SLOAD PUSH1 0x1 DUP2 ADD DUP1 DUP4 SSTORE SWAP2 DUP5 MSTORE SWAP3 DUP3 SWAP1 KECCAK256 DUP5 MLOAD SWAP2 SWAP4 PUSH2 0xD3 SWAP4 SWAP2 ADD SWAP2 SWAP1 DUP6 ADD SWAP1 PUSH2 0xD8 JUMP JUMPDEST POP POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x119 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x146 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x146 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x146 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x12B JUMP JUMPDEST POP PUSH2 0x152 SWAP3 SWAP2 POP PUSH2 0x156 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x170 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x152 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x15C JUMP JUMPDEST SWAP1 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xf9 GASLIMIT 0x5f PUSH10 0x8C8724EAFACCAA2ECD2 MUL SHL CODECOPY SSTORE 0xc SWAP11 0xca 0xb6 BLOCKHASH MLOAD 0xf SHR 0xe POP DUP10 0x1f 0xec DUP10 STOP 0x29 ","runtimeBytecode":"6080604052600436106100405763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166342ce14888114610045575b600080fd5b34801561005157600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261009e9436949293602493928401919081908401838280828437509497506100a09650505050505050565b005b33600090815260208181526040822080546001810180835591845292829020845191936100d393910191908501906100d8565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061011957805160ff1916838001178555610146565b82800160010185558215610146579182015b8281111561014657825182559160200191906001019061012b565b50610152929150610156565b5090565b61017091905b80821115610152576000815560010161015c565b905600a165627a7a72305820f9455f6908c8724eafaccaa2ecd2021b39550c9acab640510f1c0e50891fec890029","srcmap":"28:193:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;28:193:0;;;;;;;","srcmapRuntime":"28:193:0:-;;;;;;;;;;;;;;;;;;;;;;;115:103;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;115:103:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;115:103:0;;-1:-1:-1;115:103:0;;-1:-1:-1;;;;;;;115:103:0;;;;181:10;168:12;:24;;;;;;;;;;27:10:-1;;39:1;23:18;;45:23;;;168:42:0;;;;;;;;;23:18:-1;;168:42:0;;;;;;;;;;:::i;:::-;;;115:103;:::o;28:193::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;28:193:0;;;-1:-1:-1;28:193:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o"};

/***/ }),

/***/ "./Ethereum/web3.js":
/*!**************************!*\
  !*** ./Ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Web3 = __webpack_require__(/*! web3 */ "web3");

var web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // in browser and mm is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on server or user not running mm
  var provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/0ee8112fe7754369a520a9182901a8dc');
  web3 = new Web3(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "./components/loginform.js":
/*!*********************************!*\
  !*** ./components/loginform.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Ethereum/web3 */ "./Ethereum/web3.js");
/* harmony import */ var _Ethereum_Contracts_certificateInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Ethereum/Contracts/certificateInstance */ "./Ethereum/Contracts/certificateInstance.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! object-hash */ "object-hash");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "next/link");
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
var cert = {};

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
      done: false,
      cert: cert
    };
    return _this;
  } // async signAndSend(){
  // 	var hashedCert = hash(this.state);
  // 	console.log("signing");
  // 	console.log(hashedCert);
  // 	// console.log(this.state.accounts[0]);
  // 	var signed = await web3.eth.signTypedData(hashedCert, this.state.accounts[0]);
  // 	// console.log("signed");
  // await certificate.methods.upload(hashedCert).send({
  // 	from: this.state.accounts[0]
  // }).on('transactionHash', function(txHash){
  // 	x = txHash;
  // });
  // }


  _createClass(CertificateForm, [{
    key: "signAndSend",
    value: function () {
      var _signAndSend = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var that, hashedCert, fromAccount, params, method, signedCert;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = this;
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

                signedCert = "";
                _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].currentProvider.sendAsync({
                  method: method,
                  params: params,
                  fromAccount: fromAccount
                },
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(err, result) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!err) {
                              _context2.next = 2;
                              break;
                            }

                            return _context2.abrupt("return", console.error(err));

                          case 2:
                            if (!result.error) {
                              _context2.next = 4;
                              break;
                            }

                            return _context2.abrupt("return", console.error(result.error));

                          case 4:
                            console.log('PERSONAL SIGNED:' + JSON.stringify(result.result));
                            signedCert = JSON.stringify(result.result);
                            _context2.next = 8;
                            return _Ethereum_Contracts_certificateInstance__WEBPACK_IMPORTED_MODULE_4__["default"].methods.upload(hashedCert).send({
                              from: fromAccount
                            }).on('transactionHash', function (txHash) {
                              console.log(txHash);
                              x = txHash;
                              cert.txHash = x;
                              cert.digitalSignature = signedCert;
                              cert.pk = fromAccount;
                              console.log(cert.txHash);
                              that.setState({
                                cert: cert,
                                done: true
                              });
                            });

                          case 8:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(txHash) {
        var hashedCert, tx, functionSignature, input2;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // console.log("hi");
                hashedCert = object_hash__WEBPACK_IMPORTED_MODULE_5___default()(this.state);
                console.log('waiting..');
                _context4.next = 4;
                return _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getTransaction(x);

              case 4:
                tx = _context4.sent;
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
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function verify(_x3) {
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
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        row: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
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
          size: 1,
          offset: 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
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
          lineNumber: 182
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
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
          lineNumber: 186
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          offset: 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "Certificate Of Recognition")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
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
          lineNumber: 205
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
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
          lineNumber: 209
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
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
          lineNumber: 217
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
          lineNumber: 218
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
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
          lineNumber: 227
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          size: 'auto',
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
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
          lineNumber: 231
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: {
          size: 6,
          offset: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
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
          lineNumber: 240
        },
        __self: this
      }, "Submit"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, this.state.done ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "pull-right btn btn-success",
        style: {
          margin: 10
        },
        href: "data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(cert))),
        download: "certificate.json",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, " Download Data as JSON") : ''), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "Click", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "./verify",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Ethereum/web3 */ "./Ethereum/web3.js");
/* harmony import */ var _Ethereum_Contracts_certificateInstance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Ethereum/Contracts/certificateInstance */ "./Ethereum/Contracts/certificateInstance.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! object-hash */ "object-hash");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _loginform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loginform */ "./components/loginform.js");
/* harmony import */ var _verify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verify */ "./components/verify.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Ethereum/web3 */ "./Ethereum/web3.js");
/* harmony import */ var _Ethereum_Contracts_certificateInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Ethereum/Contracts/certificateInstance */ "./Ethereum/Contracts/certificateInstance.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! object-hash */ "object-hash");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "next/link");
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
var sig, pk;

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
        sig = tx.digitalSignature.replace('\"', '').replace('\"', '');
        pk = tx.pk;
        delete tx.pk;
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
                console.log("sig " + sig);
                _context.next = 6;
                return _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getTransaction(h);

              case 6:
                transaction = _context.sent;
                functionSignature = _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.abi.encodeFunctionSignature('upload(string)');
                input2 = _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.abi.decodeParameter('string', transaction.input.replace(functionSignature, ''));
                input2 = input2.replace('\"', '');
                console.log("input2 = " + input2);
                if (input2 === hashedCert) alert("Certificate contents verified");else alert("Certificate contents not verified");
                fromAccount = transaction.from;
                method = 'personal_ecRecover';
                params = [hashedCert, sig];
                _Ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].currentProvider.sendAsync({
                  method: method,
                  params: params,
                  fromAccount: fromAccount
                }, function (err, result) {
                  var recovered = fromAccount;
                  console.log("recovered " + recovered);
                  console.log("from " + fromAccount);
                  if (recovered === pk) alert("Sender verified");else alert("Sender not verified");
                });

              case 16:
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

/***/ }),

/***/ "./history.js":
/*!********************!*\
  !*** ./history.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var history;

if (typeof document !== 'undefined') {
  var createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ "history/createBrowserHistory").default;

  history = createBrowserHistory();
}

/* harmony default export */ __webpack_exports__["default"] = (history);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_loginform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loginform */ "./components/loginform.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _components_verify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/verify */ "./components/verify.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../history */ "./history.js");
var _jsxFileName = "C:\\Users\\Prafful\\Desktop\\DCerts\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loginform__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "history/createBrowserHistory":
/*!***********************************************!*\
  !*** external "history/createBrowserHistory" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "object-hash":
/*!******************************!*\
  !*** external "object-hash" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("object-hash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map