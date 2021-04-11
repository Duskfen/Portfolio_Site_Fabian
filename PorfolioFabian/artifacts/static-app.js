(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4OTAuMDcgMjMzLjk5Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZhZDJhYTt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkViZW5lXzEiIGRhdGEtbmFtZT0iRWJlbmUgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjgxLDY0LjgzbDguMTktLjU1VjU0LjgxYzAtMTEuNzgsNS43OS0xNy41NywxNy4yOS0xNy41Nyw1LjQzLDAsMTAuODYsMi4zOSwxMy40Myw4LjI4bC05LjIsNC44N2MtLjU1LTYuMzUtMy41OC0xMC43Ni03LjA4LTEwLjc2LTYuNzEsMC02LjYyLDEwLjg1LTYuNjIsMjIuMDh2Mi4xMWwxNy44NC0xLjEtMS4xLDYuNjJMMjk3LDY4LjE1VjkzLjkxYzAsMTMuNTIsMi45NCwxNS41NCwyLjk0LDE1LjU0SDI4Ny40MnMxLjc1LTIsMS43NS0yMnYtMjBMMjgxLDY3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM0Mi4xNCw4Mi4zMWM0Ljg4LDAsOS4yOS4yOCwxMS42OC40Ni0uNTUtMTIuNTEtNS4xNS0xNi4zNy0xMi44OC0xNi4zNy02LjI1LDAtMTIuNiw1LjE1LTE2LjA5LDEyLjZoLS4xOWwtMS40Ny0xMC4xMmM3LTYuOSwxMy4zNC05LDIwLjc5LTlDMzU0LjEsNjAsMzYxLjY0LDY1Ljk0LDM2MS42NCw4MVY5NC4xOGMwLDkuNjYsMS44NCwxMS41OSwyLjU4LDEydi4xOGwtMTAuNjcsNC4wNS4wOS0xMi4wNWMtNSw3LjE4LTExLjg3LDExLjc4LTE5LjUsMTEuNzgtOC40NywwLTE0LTUuNjItMTQtMTIuNTFDMzIwLjE1LDg4Ljc1LDMyNi40MSw4Mi4zMSwzNDIuMTQsODIuMzFabS01LDIxLjUzYzYuNzIsMCwxMi4xNS0zLjg2LDE2LjU2LTkuODRsLjA5LTguMjhjLTIyLC4wOS0yNC45Myw1LjctMjQuOTMsMTAuM0MzMjguODksMTAyLjE5LDMzNCwxMDMuODQsMzM3LjE3LDEwMy44NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNzMsNDUuMDZsMTEuODctNy44MnYzMi4xYzMuNzctNS4wNiwxMC05LjY2LDE4LjIxLTkuNjYsMTAuODYsMCwxOS43OCw5LjIsMTkuNzgsMjQuMzgsMCwxMy41My0xMi43OCwyNi4yMi0yNSwyNi4yMi01LjI0LDAtMTAuNzYtMS42Ni0xNC4wNy01LjE1bC04LjEsNS41Mi0uMTgtLjE5QTQzLjI3LDQzLjI3LDAsMCwwLDM3Nyw5OC41MVY1Mi43OGMwLTYuNjItMy03LjQ1LTQuMDUtNy41NFptMjYuNzcsNjAuNjJjOC4yOC4xOCwxNC4zNS02LjcxLDE0LjM1LTE5Ljc4LDAtMTEuNDEtNi4zNC0xOS43OC0xNC4zNS0xOS43OC03LjE3LDAtMTIuMDUsMy4yMi0xNC45LDcuNjRWOTQuMThDMzg3LjQ5LDEwMi4yOCwzOTQuMTEsMTA1LjY4LDM5OS43MiwxMDUuNjhaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDMyLjM1LDY2LjIybDEyLjMzLTUuNTNWOTMuOTFjMCwxMy41MiwzLDE1LjU0LDMsMTUuNTRINDM1LjIxczEuNjUtMiwxLjY1LTIyTDQzNyw3Ni44OWMwLTguMTktMy4zMS0xMC00LjYtMTAuNFptMy41LTE5LjUxYTQuNjksNC42OSwwLDEsMSw0LjY5LDQuNjlBNC43Miw0LjcyLDAsMCwxLDQzNS44NSw0Ni43MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00ODAuNDksODIuMzFjNC44NywwLDkuMjkuMjgsMTEuNjguNDZDNDkxLjYyLDcwLjI2LDQ4Nyw2Ni40LDQ3OS4yOSw2Ni40Yy02LjI1LDAtMTIuNiw1LjE1LTE2LjEsMTIuNkg0NjNsLTEuNDctMTAuMTJjNy02LjksMTMuMzQtOSwyMC43OS05QzQ5Mi40NSw2MCw1MDAsNjUuOTQsNTAwLDgxVjk0LjE4YzAsOS42NiwxLjg0LDExLjU5LDIuNTgsMTJ2LjE4bC0xMC42Nyw0LjA1TDQ5Miw5OC4zMmMtNSw3LjE4LTExLjg3LDExLjc4LTE5LjUxLDExLjc4LTguNDYsMC0xNC01LjYyLTE0LTEyLjUxQzQ1OC41LDg4Ljc1LDQ2NC43Niw4Mi4zMSw0ODAuNDksODIuMzFabS01LDIxLjUzYzYuNzIsMCwxMi4xNC0zLjg2LDE2LjU2LTkuODRsLjA5LTguMjhjLTIyLC4wOS0yNC45Myw1LjctMjQuOTMsMTAuM0M0NjcuMjQsMTAyLjE5LDQ3Mi4zLDEwMy44NCw0NzUuNTIsMTAzLjg0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTUyMy45NCw2MC42OVY3Mi41NmMzLjc3LTYuNDQsMTAuNDktMTIuNiwxOC40LTEyLjYsOS43NSwwLDE3LDYsMTcsMjEuMDdWOTMuOTFjLjM3LDEzLjUyLDIuMTEsMTUuNTQsMi4xMSwxNS41NEg1NTAuOHMuNjUtMiwuNzQtMjJ2LTNjMC0xMy00LjQyLTE3LjM4LTEyLjYtMTcuNTctNiwwLTExLjc4LDQtMTUsMTAuM1Y5My45MWMwLDEzLjUyLDIuMTIsMTUuNTQsMi4xMiwxNS41NEg1MTUuMzhzLjc0LTIsLjc0LTIybC4wOS0xMC41OGMwLTkuNDgtMi4xMS0xMC43Ny0yLjQ4LTEwLjc3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMyMC4yNiwxNjYuNEgzMjBjLTMuNjgtNi40NC0xMC41OC04LjkyLTE2Ljc1LTguOTItNS43LDAtMTAuMjEsMS41Ni0xMC4yMSw1LjgsMCwzLjU4LDIuMyw1Ljc5LDExLjEzLDlsMy40MSwxLjI5YzEyLjUxLDQuODcsMTUuNTQsOC4yOCwxNS41NCwxNC4xNywwLDcuNjMtNi44LDE0LjQ0LTE4LjY3LDE0LjQ0LTgsMC0xNS45Mi0zLjc3LTIwLTcuNzNsMS0xMC44NS4xOC0uMWMzLjY4LDcuNTUsMTQsMTIuNzksMjEuMDcsMTIuNzlzOS42Ni0yLjg1LDkuNjYtNi4wN2MwLTMuODYtMi40OS02LTExLjIyLTkuMzhsLTQuNDItMS41N2MtMTAuNC0zLjg2LTE0LjcyLTYuOS0xNC43Mi0xNHM4LjEtMTMuNDMsMTguMzEtMTMuNDNhMzIuMSwzMi4xLDAsMCwxLDE3Ljk0LDUuMjRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzU1LjU0LDE1Ny4yYy05LjU2LDAtMTQuMzUsNS44OS0xNC4zNSwxOC44NiwwLDEyLjYxLDcuMDksMjAuMzMsMTcsMjAuMzMsOC41NiwwLDE0LjgxLTYuMjUsMTcuMy0xMS43N2guMTh2NC44N2MtMS42NSw0LTcuNjMsMTIuNDItMjAuMTUsMTIuNDItMTEsMC0yMy4zNi04LjA5LTIzLjM2LTI0LDAtMTQuMTcsMTMuNTItMjYuMjIsMjYuMzEtMjYuMjIsOC4xOSwwLDE1LjA5LDMuNjgsMTgsOS4xMWwtNC4yMyw5LjI5aC0uNTVDMzcwLjE3LDE2NC42NSwzNjQuMSwxNTcuMiwzNTUuNTQsMTU3LjJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzg0LjgxLDEzNi44N2wxMS44Ny03LjYzdjM1LjMyYzMuNzctNi40NCwxMC40OC0xMi42LDE4LjQtMTIuNiw5Ljc1LDAsMTcsNiwxNywyMS4wN3YxMi44OGMuMzYsMTMuNTIsMi4xMSwxNS41NCwyLjExLDE1LjU0SDQyMy41NHMuNjQtMiwuNzQtMjJ2LTIuOTVjMC0xMy00LjQyLTE3LjM4LTEyLjYxLTE3LjU3LTYsMC0xMS43Nyw0LTE1LDEwLjN2MTYuNjZjMCwxMy41MiwyLjExLDE1LjU0LDIuMTEsMTUuNTRIMzg4LjEycy43NC0yLC43NC0yMlYxNDQuNjljMC02LjQ0LTIuOTUtNy4zNi00LjA1LTcuNTRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDQ5LjA4LDE1My44OWMuMTgsNS4yNSwxLjg0LDkuOTQsMTIuNTEsMzcuOWw5LjM4LTMwLTMuMzEtNy45MWgxMC45NWE0Mi4xMSw0Mi4xMSwwLDAsMCwyLjIxLDkuOTRMNDg5LjU2LDE5MmM5LjU2LTI3LjE0LDExLjEzLTMzLjQsMTEuMTMtMzguMjdoOC41NUw0OTAsMjAxLjQ1aC0yLjc2TDQ3NCwxNjkuMzVsLTExLjc4LDMyLjFoLTIuNzVsLTIyLjI3LTQ3LjU2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTUzNS4zLDE3NC4zMWM0Ljg4LDAsOS4yOS4yOCwxMS42OC40Ni0uNTUtMTIuNTEtNS4xNS0xNi4zNy0xMi44OC0xNi4zNy02LjI1LDAtMTIuNiw1LjE1LTE2LjA5LDEyLjZoLS4xOWwtMS40Ny0xMC4xMmM3LTYuOSwxMy4zNC05LDIwLjc5LTksMTAuMTIuMDksMTcuNjYsNi4wNywxNy42NiwyMS4xNnYxMy4xNWMwLDkuNjYsMS44NCwxMS41OSwyLjU4LDEydi4xOGwtMTAuNjcsNC4wNS4wOS0xMi4wNWMtNSw3LjE4LTExLjg3LDExLjc4LTE5LjUsMTEuNzgtOC40NywwLTE0LTUuNjItMTQtMTIuNTFDNTEzLjMxLDE4MC43NSw1MTkuNTcsMTc0LjMxLDUzNS4zLDE3NC4zMVptLTUsMjEuNTNjNi43MiwwLDEyLjE1LTMuODYsMTYuNTYtOS44NGwuMDktOC4yOGMtMjIsLjA5LTI0LjkzLDUuNy0yNC45MywxMC4zQzUyMi4wNSwxOTQuMTksNTI3LjExLDE5NS44NCw1MzAuMzMsMTk1Ljg0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU3OC43NSwxNTIuNjl2MTAuNzdjMy02LDcuODItMTEuNSwxNC4zNS0xMS41LDUuNDMsMCw4Ljc0LDIuMjEsMTAuNDksNC42OWwtMi4yMSw5Ljg0LS4zNi0uMDljLS44My00Ljc4LTUuMjUtNy42My0xMC41OC03LjYzLTUsMC05LDMuODYtMTEuNjksOS45M3YxNy4yMWMwLDEzLjUyLDIuMTIsMTUuNTQsMi4xMiwxNS41NEg1NzAuMnMuNzMtMiwuNzMtMjJsLjEtMTAuNThjMC05LjQ4LTIuMTItMTAuNzctMi40OS0xMC43N1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02MDcuNjgsMjAxLjA4YzI4LjI0LTM1Ljg3LDMwLjE3LTM4LjM2LDMyLjY1LTQzLjMybC0yMC40MiwxLjQ3Yy00LjYuNzMtOSwyLjM5LTEwLjY3LDMuNDlsLS4xOC0uMDksMS4zOC05LjIsMzIsLjU1SDY1M2wtMjYuNSwzNC41OWEzNy4yNiwzNy4yNiwwLDAsMC01LjUyLDkuMmwyMS0xLjI5YTI5LjQyLDI5LjQyLDAsMCwwLDEwLjQtMy42N2wuMTguMDktMS4zOCw4LjgzLTQzLjYxLS4yOFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02NjAuNDYsMTU4LjIybDEyLjMzLTUuNTN2MzMuMjJjMCwxMy41MiwzLDE1LjU0LDMsMTUuNTRINjYzLjMyczEuNjUtMiwxLjY1LTIybC4wOS0xMC41OGMwLTguMTktMy4zMS0xMC00LjYtMTAuNFptMy41LTE5LjUxYTQuNjksNC42OSwwLDEsMSw0LjY5LDQuNjlBNC43Miw0LjcyLDAsMCwxLDY2NCwxMzguNzFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjk4LjE0LDE1Mi42OXYxMS44N2MzLjc3LTYuNDQsMTAuNDktMTIuNiwxOC40LTEyLjYsOS43NSwwLDE3LDYsMTcsMjEuMDd2MTIuODhjLjM2LDEzLjUyLDIuMTEsMTUuNTQsMi4xMSwxNS41NEg3MjVzLjY0LTIsLjc0LTIydi0yLjk1YzAtMTMtNC40Mi0xNy4zOC0xMi42MS0xNy41Ny02LDAtMTEuNzcsNC0xNSwxMC4zdjE2LjY2YzAsMTMuNTIsMi4xMSwxNS41NCwyLjExLDE1LjU0SDY4OS41OHMuNzQtMiwuNzQtMjJsLjA5LTEwLjU4YzAtOS40OC0yLjEyLTEwLjc3LTIuNDgtMTAuNzdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzU1Ljk0LDE5Ni43NmMtNS4wNi0uNzMtOC44My0yLjMtOC44My02LjI1LDAtNC4yNCw0Ljc4LTYuNjMsOS43NS04LjM4YTE0LjI0LDE0LjI0LDAsMCwxLTkuMzgtMTMuOGMwLTkuMSw5LjQ3LTE2LjY1LDIxLjUzLTE2LjY1LDYsMCwxMC43NiwxLjQ3LDEzLjg5LDQuMjMsMy40LjEsNi45LTEuMTksMTAuODUtMy42OGwxLjIsOC4yOS05LjExLS40NmExNS43NiwxNS43NiwwLDAsMSwxLjM4LDYuOGMwLDguMTktOS4xMSwxNi42NS0yMi40NSwxNi42NWEyMSwyMSwwLDAsMS01LS41NWMtMywxLjExLTUuMTUsMi4zLTUuMTUsNC4yMywwLDcuNzMsMzYuMzQtLjM2LDM2LjM0LDE1LjA5LDAsOC43NC0xMS42OCwxNi4xLTI1Ljk0LDE2LjEtOC4xLDAtMTguODYtMi44NS0xOC44Ni0xMC42N0M3NDYuMTksMjAzLjI5LDc1MC41MSwxOTkuNTIsNzU1Ljk0LDE5Ni43NlptMTIuMjQsMTguMzFjOC4zNywwLDE0LjM1LTQuODgsMTQuMzUtOS4xMSwwLTguMzctMTMuMTYtNy44Mi0yMy4zNy04Ljc0LTMuNTksMS44NC00LjUxLDQuMzItNC41MSw3LjczQzc1NC42NSwyMTEuMzksNzU5LDIxNS4wNyw3NjguMTgsMjE1LjA3Wm0xLjM4LTM1LjI0YzUuNDIsMCw5Ljg0LTQuMjMsOS44NC0xMC4zOSwwLTkuMTEtNi4wNy0xNC4zNS0xNC4xNy0xNC4zNS02LjYyLDAtOS45MywzLjQtOS45MywxMC42N0M3NTUuMywxNzMuODUsNzYxLDE3OS44Myw3NjkuNTYsMTc5LjgzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTgyMy45MSwxNTEuNjhjMTEuNjgsMCwyMC42MSw4LjQ3LDIwLjYxLDI1Ljc2SDgwOC4xOGMuOTIsMTEuMTMsNy4yNywxOC45NSwxNy40OCwxOC45NSw5LjI5LDAsMTQuNDQtNi4zNCwxNi44My0xMmguMTl2NS4wNmMtMS42Niw0LTcsMTIuNDItMjAuNywxMi40Mi0xMi4zMywwLTIyLjU0LTguNjQtMjIuNTQtMjQuNTZDNzk5LjQ0LDE2Mi44Miw4MTIuMjMsMTUxLjY4LDgyMy45MSwxNTEuNjhabTExLjY4LDIwLjdDODM0LjQsMTYxLjM0LDgyOSwxNTcsODIwLjMyLDE1N2MtNy4yNywwLTEyLDQuNjktMTIuMjMsMTYuNjVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNODY1LjI0LDE1Mi42OXYxMC43N2MyLjk0LTYsNy44MS0xMS41LDE0LjM1LTExLjUsNS40MiwwLDguNzQsMi4yMSwxMC40OCw0LjY5bC0yLjIsOS44NC0uMzctLjA5Yy0uODMtNC43OC01LjI1LTcuNjMtMTAuNTgtNy42My01LDAtOSwzLjg2LTExLjY4LDkuOTN2MTcuMjFjMCwxMy41MiwyLjExLDE1LjU0LDIuMTEsMTUuNTRIODU2LjY4cy43NC0yLC43NC0yMmwuMDktMTAuNThjMC05LjQ4LTIuMTItMTAuNzctMi40OS0xMC43N1oiLz48L2c+PGcgaWQ9IkViZW5lXzMiIGRhdGEtbmFtZT0iRWJlbmUgMyI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAyLjE1LDE0NC42MmMtNC4wNyw0LTcsNi44OC04LjY3LDguNjQtLjc0Ljc2LTEuMjIsMS4yOC0xLjQ5LDEuNmwtLjIuMjRjLTguNywxMC41MS0yLjMzLDIzLjY2LTIuMjYsMjMuNzlsMCwuMTFhMTcuMzgsMTcuMzgsMCwwLDAsNi43Myw4LjM3QTE3Ljg0LDE3Ljg0LDAsMCwwLDEwOS42NCwxOTBhMTcuNTksMTcuNTksMCwwLDAsMTEuMjktNy40NmgwYTE3LjI2LDE3LjI2LDAsMCwwLDIuNjQtMTMuMTRsLTcuNi0zNy44QzExMC44OSwxMzYuMywxMDYsMTQwLjksMTAyLjE1LDE0NC42MloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDcuMTMsNTVhMTcuMjgsMTcuMjgsMCwwLDAtNi43NC04LjM2LDE3Ljg1LDE3Ljg1LDAsMCwwLTI0LjYxLDQuODNoMGExNy4yNCwxNy4yNCwwLDAsMC0yLjY1LDEzLjE1bDcuNiwzNy43OWM1LjA5LTQuNzEsMTAtOS4zMSwxMy44My0xMyw0LjA2LTQsNy02Ljg3LDguNjYtOC42My43NC0uNzYsMS4yMy0xLjI5LDEuNDktMS42MWwuMjEtLjIzYzguNy0xMC41MiwyLjMyLTIzLjY3LDIuMjYtMjMuOFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMTguMzUsMEM1MywwLDAsNTIuMzgsMCwxMTdTNTMsMjM0LDExOC4zNSwyMzRzMTE4LjM2LTUyLjM4LDExOC4zNi0xMTdTMTgzLjcyLDAsMTE4LjM1LDBaTTE0My43LDEwNi4zNnMtNy42LDYuODEtMTYuODIsMTUuMjJsOS4xLDQ1LjM2YTI5LjU2LDI5LjU2LDAsMCwxLTQuNTUsMjIuNTYsMzAuMTIsMzAuMTIsMCwwLDEtMTkuMzQsMTIuNzgsMzEuMTUsMzEuMTUsMCwwLDEtNiwuNTgsMzAuNTQsMzAuNTQsMCwwLDEtMTYuODItNS4wNkEzMC4wNywzMC4wNywwLDAsMSw3Ni44LDE4MC41MWMtLjE2LS42Mi0uMzEtMS4yMi0uNDMtMS44My0uMTctLjgyLS4zLTEuNjgtLjQxLTIuNjRhMjMuNjcsMjMuNjcsMCwwLDEsNy4zOC0xOS4zOGwzMi0zMS4wNyw1LjQ1LTUuMjlMMTQzLjcsOTguMDZabTkuNjctMjktMzIsMzEuMDctNS40NSw1LjI5TDkzLDEzNS45M3YtOC4yOXM3LjYtNi44MiwxNi44Mi0xNS4yM2wtOS4xLTQ1LjM2YTI5LjU1LDI5LjU1LDAsMCwxLDQuNTQtMjIuNTYsMzAuMTcsMzAuMTcsMCwwLDEsMTkuMzQtMTIuNzgsMzEuMjUsMzEuMjUsMCwwLDEsNi0uNTgsMzAuNDIsMzAuNDIsMCwwLDEsMTYuODEsNS4wNywzMC4wNSwzMC4wNSwwLDAsMSwxMi41LDE3LjI4Yy4xNi42Mi4zLDEuMjIuNDMsMS44My4xNy44Mi4zLDEuNjkuNDEsMi42NUEyMy43MiwyMy43MiwwLDAsMSwxNTMuMzcsNzcuMzNaIi8+PC9nPjwvc3ZnPg=="

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(39);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(74);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(76);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(47);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(46);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(40);

var _helpers = __webpack_require__(77);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(73)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ProjectDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_project_overview_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59);
/* harmony import */ var _css_project_overview_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_project_overview_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_logo_full_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _impressum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(34);
/* harmony import */ var lethargy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15);
/* harmony import */ var lethargy__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lethargy__WEBPACK_IMPORTED_MODULE_15__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var ProjectInformation = __webpack_require__(17);








var right_arrow = __webpack_require__(16);



var ProjectList = /*#__PURE__*/function () {
  function ProjectList() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, ProjectList);

    this.projects = [];

    var _iterator = _createForOfIteratorHelper(ProjectInformation.projects),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var project = _step.value;
        this.projects.push(new Project(project));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(ProjectList, [{
    key: "getProjectAt",
    value: function getProjectAt(index) {
      if (index % this.projects.length < 0) {
        return this.projects[this.projects.length + index % this.projects.length];
      }

      return this.projects[index % this.projects.length];
    }
  }]);

  return ProjectList;
}();

var Project = function Project(information) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Project);

  this.title = information.title;
  this.textheading = information.textheading;
  this.subtext = information.subtext;
  this.image_extention = information.image_extention;
  this.titleImage = __webpack_require__(27)("./".concat(information.path, "/main.jpg"));
  this.images = [];

  for (var i = 0; i < information.count_imgs; i++) {
    this.images.push(__webpack_require__(28)("./".concat(information.path, "/img/").concat(i, ".").concat(information.image_extention[i % information.image_extention.length])));
  }
};

var Index = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(Index, _Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Index);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "calculateMarqueeCount", function () {
      var ev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      try {
        var marquee = document.querySelectorAll(".marquee_text")[0];

        _this.setState({
          marqueeCount: Math.ceil(window.innerWidth / marquee.scrollWidth) + 1
        });
      } catch (e) {}
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "nextPicture", function (ev) {
      var add = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (document.querySelector("#currentpicture").getAnimations()[0] === undefined) {
        _this.setState({
          currentProject: _this.state.currentProject + add,
          lastProject: _this.state.currentProject
        }, function () {
          _this.calculateMarqueeCount();

          var marquee = document.querySelector("#marquee");
          marquee.style = "opacity: 0 !important";
          setTimeout(function () {
            _this.calculateMarqueeCount();

            _this.animateMarquee(document.querySelectorAll(".marquee_text"));

            marquee.style = "";
          }, 1501);

          _this.handleNextAnimations();
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "handleNextAnimations", function () {
      var currentpicture = document.querySelector("#currentpicture");

      if (_this.state.currentProject < _this.state.lastProject) {
        currentpicture.animate([{
          clipPath: "inset(5% 95% 5% 5%)"
        }, {
          clipPath: "inset(5%)"
        }], {
          duration: 900,
          iterations: 1,
          easing: "ease-in-out"
        });
      } else {
        currentpicture.animate([{
          clipPath: "inset(5% 5% 5% 95%)"
        }, {
          clipPath: "inset(5%)"
        }], {
          duration: 900,
          iterations: 1,
          easing: "ease-in-out"
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "openProjectdetails", function (ev) {
      var footer = document.querySelector("#footerOverview"); //animate footer

      footer.style = "position:relative; top: calc(100% + 140px)";
      footer.animate([{
        top: 0
      }, {
        top: "calc(100% + 140px)"
      }], {
        duration: 1000,
        delay: 300,
        easing: "ease-out"
      });

      _this.setState({
        showMarquee: false
      });

      var project_overview_section = document.querySelector("#project_overview_section");
      project_overview_section.classList.add("project_overview_section_clicked");
      var lines = document.querySelectorAll(".line");
      lines.style = "width: 0";
      lines.forEach(function (line) {
        return line.animate([{
          width: "50%"
        }, {
          width: 0
        }], {
          duration: 1000,
          easing: "ease-in-out"
        });
      });
      setTimeout(function () {
        _this.setState({
          showDetails: true
        });
      }, 1000);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "showProjectTitle", function (ev) {
      _this.setState({
        showMarquee: true
      }, function () {
        return _this.animateMarquee(document.querySelectorAll(".marquee_text"));
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "hideProjectTitle", function (ev) {
      var showagain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _this.setState({
        showMarquee: false
      });

      if (showagain) {
        _this.showProjectTitle();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "createMarquees", function () {
      var marquees = [];

      for (var i = 0; i < _this.state.marqueeCount; i++) {
        marquees.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: "marquee_text",
          key: "marqueetext_".concat(i)
        }, _this.state.projects.getProjectAt(_this.state.currentProject).title));
      }

      return marquees;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateMarquee", function (marqueeElements) {
      if (document.querySelector("#currentpicture").getAnimations()[0] === undefined) {
        marqueeElements.forEach(function (element, index) {
          var _element$getAnimation;

          (_element$getAnimation = element.getAnimations()[0]) === null || _element$getAnimation === void 0 ? void 0 : _element$getAnimation.cancel();
          element.animate([{
            transform: "translateX(-".concat(element.scrollWidth, "px)")
          }], {
            duration: element.scrollWidth * 3.8,
            iterations: Infinity,
            easing: "linear",
            id: "marquee_".concat(index)
          });
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateToUeberMich", function () {
      var wrapper = document.querySelector("#wrapper");
      var animation = wrapper.animate([{
        clipPath: "inset(0%)",
        opacity: 1
      }, {
        clipPath: "inset(0% 0% 100% 0%)",
        opacity: 1
      }], {
        duration: 1000,
        delay: 30,
        easing: "ease-in-out"
      });

      animation.onfinish = function () {
        document.querySelector("#aboutWrapper").style = "";
        wrapper.remove();
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateMountFromAbout", function () {
      var wrapper = document.querySelector("#wrapper");
      wrapper.style = "position:relative; bottom:100vh";
      var animation = wrapper.animate([{
        clipPath: "inset(0% 0% 100% 0%)"
      }, {
        clipPath: "inset(0%)"
      }], {
        duration: 1000,
        easing: "ease-in-out"
      });

      animation.onfinish = function () {
        wrapper.style = "";
        document.querySelector("#aboutWrapper").remove();
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateToSubPage", function () {
      var footer = document.querySelector("#footerOverview");
      var arrow = document.querySelector("header .right_arrow");
      var currentpicture = document.querySelector("#currentpicture");
      document.querySelector("#picturebefore").style = "opacity:0";
      currentpicture.animate([{
        clipPath: "inset(5% 5% 5% 5%)",
        opacity: 1
      }, {
        clipPath: "inset(5% 5% 95% 5%)",
        opacity: 0
      }], {
        duration: 1001,
        easing: "ease-in-out"
      });
      arrow.animate([{
        opacity: 1
      }, {
        opacity: 0
      }], {
        duration: 1001,
        easing: "ease-out"
      });
      footer.style = "position:relative";
      footer.animate([{
        top: 0
      }, {
        top: "calc(100% + 140px)"
      }], {
        duration: 1001,
        easing: "ease-out"
      });
      setTimeout(function () {
        return document.querySelector("#wrapper").remove();
      }, 1000);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateMountFromSubpage", function () {
      var currentpicture = document.querySelector("#currentpicture");
      var picturebefore = document.querySelector("#picturebefore");
      picturebefore.animate([{
        opacity: 0
      }, {
        opacity: 0
      }], {
        duration: 1001,
        delay: 900,
        easing: "ease-in-out"
      });
      currentpicture.animate([{
        clipPath: "inset(95% 5% 5%  5%)",
        opacity: 0
      }, {
        clipPath: "inset(85% 5% 5%  5%)",
        opacity: 1
      }, {
        clipPath: "inset(60% 5% 5%  5%)",
        opacity: 1
      }, {
        clipPath: "inset(5% 5% 5% 5%)",
        opacity: 1
      }], {
        duration: 1001,
        delay: 900,
        easing: "ease-in-out"
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "CheckIfHmoreThanWidth", function () {
      if (window.innerHeight >= window.innerWidth) {
        document.querySelectorAll("#project_overview_section img").forEach(function (img) {
          img.style = "width: 69%";
        });
      } else {
        document.querySelectorAll("#project_overview_section img").forEach(function (img) {
          img.style = "";
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateFooterIn", function () {
      var footer = document.querySelector("#footerOverview"); //animate footer

      footer.style = "position:relative; top: calc(100% + 140px)";
      var footeranim = footer.animate([{
        top: "calc(100% + 140px)"
      }, {
        top: 0
      }], {
        duration: 1000,
        delay: 300
      });

      footeranim.onfinish = function () {
        footer.style = "";
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "windowListenerHandler", function () {
      _this.CheckIfHmoreThanWidth();

      _this.calculateMarqueeCount();
    });

    _this.state = {
      projects: new ProjectList(),
      currentProject: _this.props.currentProjectNumber | 0,
      lastProject: _this.props.lastProjectNumber | -1,
      showDetails: false,
      clickedRoute: null,
      showMarquee: false,
      marqueeCount: 2
    };
    _this.lethargy = new lethargy__WEBPACK_IMPORTED_MODULE_15__["Lethargy"]();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "wrapper",
        onWheel: function onWheel(e) {
          if (_this2.lethargy.check(e) === false) return;

          if (!_this2.state.showDetails) {
            if (e.deltaY < 0) _this2.nextPicture(e, -1);else _this2.nextPicture(e, 1);
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "projectDetailWrapper",
        className: this.state.showMarquee ? "marqueeactive" : null
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "marquee",
        className: this.state.showMarquee ? null : "hide"
      }, this.createMarquees()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "head_items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.nextPicture(null, -1 * _this2.state.currentProject);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
        alt: "logo",
        className: "full_logo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "right_arrow",
        onClick: function onClick(ev) {
          return _this2.nextPicture(ev, 1);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: right_arrow
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        id: "project_overview_wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "line lineleft"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "project_overview_section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        id: "currentpicture",
        src: this.state.projects.getProjectAt(this.state.currentProject).titleImage,
        alt: this.state.projects.getProjectAt(this.state.currentProject).title,
        className: "TitleImage",
        onClick: function onClick(ev) {
          return _this2.openProjectdetails(ev);
        },
        onMouseOverCapture: function onMouseOverCapture(ev) {
          return _this2.showProjectTitle(ev);
        },
        onMouseLeave: function onMouseLeave(ev) {
          return _this2.hideProjectTitle(ev);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        id: "picturebefore",
        src: this.state.projects.getProjectAt(this.state.lastProject).titleImage,
        alt: this.state.projects.getProjectAt(this.state.lastProject).title,
        className: "TitleImage"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "line lineright"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("footer", {
        id: "footerOverview"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "footer_overview_items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          _this2.setState({
            clickedRoute: "Impressum"
          });

          _this2.animateToSubPage();
        }
      }, "impressum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          _this2.setState({
            clickedRoute: "About"
          }, function () {
            return _this2.animateToUeberMich();
          });
        }
      }, "\xFCber mich"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          _this2.setState({
            clickedRoute: "Contact"
          });

          _this2.animateToSubPage();
        }
      }, "kontakt"))))), this.state.showDetails ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ProjectDetails_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        currentProject: this.state.projects.getProjectAt(this.state.currentProject),
        currentProjectNumber: this.state.currentProject,
        lastProjectNumber: this.state.lastProject,
        allProjects: this.state.projects
      }) : null, this.state.clickedRoute === "Impressum" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_impressum__WEBPACK_IMPORTED_MODULE_12__["default"], {
        currentProjectNumber: this.state.currentProject,
        lastProjectNumber: this.state.lastProject
      }) : null, this.state.clickedRoute === "About" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_about__WEBPACK_IMPORTED_MODULE_14__["default"], {
        currentProjectNumber: this.state.currentProject,
        lastProjectNumber: this.state.lastProject
      }) : null, this.state.clickedRoute === "Contact" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_contact__WEBPACK_IMPORTED_MODULE_13__["default"], {
        currentProjectNumber: this.state.currentProject,
        lastProjectNumber: this.state.lastProject
      }) : null);
    }
  }, {
    key: "removeLoadingScreen",
    value: function removeLoadingScreen() {
      try {
        var loading_screen = document.querySelector("#loadingScreen");
        var animation = loading_screen.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 300,
          delay: 1400,
          iterations: 1,
          easing: "linear"
        });

        animation.onfinish = function () {
          return loading_screen.remove();
        };
      } catch (_unused) {
        console.error("this should not happen; Loading screen couldn't be removed");
      }

      ;
    }
  }, {
    key: "removeDetailWrapper",
    value: function removeDetailWrapper() {
      try {
        var wrapper = document.querySelector("#Detailwrapper");
        setTimeout(function () {
          wrapper.remove();
        }, 900); //timeout so this component has enough time to render
      } catch (e) {
        console.error(e);
      }

      ;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animateFooterIn();

      if (this.props.removeDetailWrapper) {
        this.removeDetailWrapper();
      } else if (this.props.calledFromSubPage) {
        this.animateMountFromSubpage();
      } else if (this.props.calledFromAbout) {
        this.animateMountFromAbout();
      } else {
        this.removeLoadingScreen();
      }

      window.addEventListener("resize", this.windowListenerHandler);
      this.CheckIfHmoreThanWidth();
      this.calculateMarqueeCount();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.windowListenerHandler);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ProjectDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_project_overview_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59);
/* harmony import */ var _css_project_overview_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_project_overview_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_MobileMain_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(111);
/* harmony import */ var _css_MobileMain_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_MobileMain_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_logo_full_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _impressum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37);
/* harmony import */ var lethargy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15);
/* harmony import */ var lethargy__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lethargy__WEBPACK_IMPORTED_MODULE_16__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var ProjectInformation = __webpack_require__(17);









var right_arrow = __webpack_require__(16);



var ProjectList = /*#__PURE__*/function () {
  function ProjectList() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, ProjectList);

    this.projects = [];

    var _iterator = _createForOfIteratorHelper(ProjectInformation.projects),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var project = _step.value;
        this.projects.push(new Project(project));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(ProjectList, [{
    key: "getProjectAt",
    value: function getProjectAt(index) {
      if (index % this.projects.length < 0) {
        return this.projects[this.projects.length + index % this.projects.length];
      }

      return this.projects[index % this.projects.length];
    }
  }]);

  return ProjectList;
}();

var Project = function Project(information) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Project);

  this.title = information.title;
  this.textheading = information.textheading;
  this.subtext = information.subtext;
  this.image_extention = information.image_extention;
  this.titleImage = __webpack_require__(27)("./".concat(information.path, "/main.jpg"));
  this.images = [];

  for (var i = 0; i < information.count_imgs; i++) {
    this.images.push(__webpack_require__(28)("./".concat(information.path, "/img/").concat(i, ".").concat(information.image_extention[i % information.image_extention.length])));
  }
};

var Index = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(Index, _Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Index);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "calculateMarqueeCount", function () {
      var ev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      try {
        var marquee = document.querySelectorAll(".marquee_text")[0];

        _this.setState({
          marqueeCount: Math.ceil(window.innerWidth / marquee.scrollWidth) + 1
        });
      } catch (e) {}
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "nextPicture", function (ev) {
      var add = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (document.querySelector("#currentpicture").getAnimations()[0] === undefined) {
        _this.setState({
          currentProject: _this.state.currentProject + add,
          lastProject: _this.state.currentProject
        }, function () {
          _this.calculateMarqueeCount();

          var marquee = document.querySelector("#marquee");
          marquee.style = "opacity: 0 !important";
          setTimeout(function () {
            _this.calculateMarqueeCount();

            _this.animateMarquee(document.querySelectorAll(".marquee_text"));

            marquee.style = "";
          }, 1501);

          _this.handleNextAnimations();
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "handleNextAnimations", function () {
      var currentpicture = document.querySelector("#currentpicture");

      if (_this.state.currentProject < _this.state.lastProject) {
        currentpicture.animate([{
          clipPath: "inset(5% 95% 5% 5%)"
        }, {
          clipPath: "inset(5%)"
        }], {
          duration: 900,
          iterations: 1,
          easing: "ease-in-out"
        });
      } else {
        currentpicture.animate([{
          clipPath: "inset(5% 5% 5% 95%)"
        }, {
          clipPath: "inset(5%)"
        }], {
          duration: 900,
          iterations: 1,
          easing: "ease-in-out"
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "openProjectdetails", function (ev) {
      var footer = document.querySelector("#footerOverview"); //animate footer

      footer.style = "position:relative; top: calc(100% + 140px)";
      footer.animate([{
        top: 0
      }, {
        top: "calc(100% + 140px)"
      }], {
        duration: 1000,
        delay: 300,
        easing: "ease-out"
      });

      _this.setState({
        showMarquee: false
      });

      var project_overview_section = document.querySelector("#project_overview_section");
      project_overview_section.classList.add("project_overview_section_clicked");
      setTimeout(function () {
        _this.setState({
          showDetails: true
        });
      }, 1000);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "showProjectTitle", function (ev) {
      _this.setState({
        showMarquee: true
      }, function () {
        return _this.animateMarquee(document.querySelectorAll(".marquee_text"));
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "hideProjectTitle", function (ev) {
      var showagain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _this.setState({
        showMarquee: false
      });

      if (showagain) {
        _this.showProjectTitle();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "createMarquees", function () {
      var marquees = [];

      for (var i = 0; i < _this.state.marqueeCount; i++) {
        marquees.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: "marquee_text",
          key: "marqueetext_".concat(i)
        }, _this.state.projects.getProjectAt(_this.state.currentProject).title));
      }

      return marquees;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateMarquee", function (marqueeElements) {
      if (document.querySelector("#currentpicture").getAnimations()[0] === undefined) {
        marqueeElements.forEach(function (element, index) {
          var _element$getAnimation;

          (_element$getAnimation = element.getAnimations()[0]) === null || _element$getAnimation === void 0 ? void 0 : _element$getAnimation.cancel();
          element.animate([{
            transform: "translateX(-".concat(element.scrollWidth, "px)")
          }], {
            duration: element.scrollWidth * 3.8,
            iterations: Infinity,
            easing: "linear",
            id: "marquee_".concat(index)
          });
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateToUeberMich", function () {
      var wrapper = document.querySelector("#wrapper");
      var animation = wrapper.animate([{
        clipPath: "inset(0%)",
        opacity: 1
      }, {
        clipPath: "inset(0% 0% 100% 0%)",
        opacity: 1
      }], {
        duration: 1000,
        delay: 30,
        easing: "ease-in-out"
      });

      animation.onfinish = function () {
        document.querySelector("#aboutWrapper").style = "";
        wrapper.remove();
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateMountFromAbout", function () {
      var wrapper = document.querySelector("#wrapper");
      wrapper.style = "position:relative; bottom:100vh";
      var animation = wrapper.animate([{
        clipPath: "inset(0% 0% 100% 0%)"
      }, {
        clipPath: "inset(0%)"
      }], {
        duration: 1000,
        easing: "ease-in-out"
      });

      animation.onfinish = function () {
        wrapper.style = "";
        document.querySelector("#aboutWrapper").remove();
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateToSubPage", function () {
      var footer = document.querySelector("#footerOverview");
      var arrows = document.querySelector("#project_overview_arrows");
      var currentpicture = document.querySelector("#currentpicture");
      document.querySelector("#picturebefore").style = "opacity:0";
      currentpicture.animate([{
        clipPath: "inset(5% 5% 5% 5%)",
        opacity: 1
      }, {
        clipPath: "inset(5% 5% 95% 5%)",
        opacity: 0
      }], {
        duration: 1001,
        easing: "ease-in-out"
      });
      arrows.animate([{
        opacity: 1
      }, {
        opacity: 0
      }], {
        duration: 1001,
        easing: "ease-out"
      });
      footer.style = "position:relative";
      footer.animate([{
        top: 0
      }, {
        top: "calc(100% + 140px)"
      }], {
        duration: 1001,
        easing: "ease-out"
      });
      setTimeout(function () {
        return document.querySelector("#wrapper").remove();
      }, 1000);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateMountFromSubpage", function () {
      var currentpicture = document.querySelector("#currentpicture");
      var picturebefore = document.querySelector("#picturebefore");
      var arrows = document.querySelector("#project_overview_arrows");
      arrows.animate([{
        opacity: 0
      }, {
        opacity: 1
      }], {
        duration: 1001,
        delay: 900,
        easing: "ease-out"
      });
      picturebefore.animate([{
        opacity: 0
      }, {
        opacity: 0
      }], {
        duration: 1001,
        delay: 900,
        easing: "ease-in-out"
      });
      currentpicture.animate([{
        clipPath: "inset(95% 5% 5%  5%)",
        opacity: 0
      }, {
        clipPath: "inset(85% 5% 5%  5%)",
        opacity: 1
      }, {
        clipPath: "inset(60% 5% 5%  5%)",
        opacity: 1
      }, {
        clipPath: "inset(5% 5% 5% 5%)",
        opacity: 1
      }], {
        duration: 1001,
        delay: 900,
        easing: "ease-in-out"
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateFooterIn", function () {
      var footer = document.querySelector("#footerOverview"); //animate footer

      footer.style = "position:relative; top: calc(100% + 140px)";
      var footeranim = footer.animate([{
        top: "calc(100% + 140px)"
      }, {
        top: 0
      }], {
        duration: 1000,
        delay: 300
      });

      footeranim.onfinish = function () {
        footer.style = "";
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "windowListenerHandler", function () {
      _this.calculateMarqueeCount();
    });

    _this.state = {
      projects: new ProjectList(),
      currentProject: _this.props.currentProjectNumber | 0,
      lastProject: _this.props.lastProjectNumber | -1,
      showDetails: false,
      clickedRoute: null,
      showMarquee: false,
      marqueeCount: 2
    };
    _this.lethargy = new lethargy__WEBPACK_IMPORTED_MODULE_16__["Lethargy"]();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "wrapper",
        onWheel: function onWheel(e) {
          if (_this2.lethargy.check(e) === false) return;

          if (!_this2.state.showDetails) {
            if (e.deltaY < 0) _this2.nextPicture(e, -1);else _this2.nextPicture(e, 1);
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "projectDetailWrapper",
        className: this.state.showMarquee ? "marqueeactive" : null
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "marquee",
        className: this.state.showMarquee ? null : "hide"
      }, this.createMarquees()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "head_items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.nextPicture(null, -1 * _this2.state.currentProject);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
        alt: "logo",
        className: "full_logo"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        id: "project_overview_wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "project_overview_section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        id: "currentpicture",
        src: this.state.projects.getProjectAt(this.state.currentProject).titleImage,
        alt: this.state.projects.getProjectAt(this.state.currentProject).title,
        className: "TitleImage",
        onClick: function onClick(ev) {
          return _this2.openProjectdetails(ev);
        },
        onMouseOverCapture: function onMouseOverCapture(ev) {
          return _this2.showProjectTitle(ev);
        },
        onMouseLeave: function onMouseLeave(ev) {
          return _this2.hideProjectTitle(ev);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        id: "picturebefore",
        src: this.state.projects.getProjectAt(this.state.lastProject).titleImage,
        alt: this.state.projects.getProjectAt(this.state.lastProject).title,
        className: "TitleImage"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        id: "project_overview_arrows"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "left_arrow",
        onClick: function onClick(ev) {
          return _this2.nextPicture(ev, -1);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: right_arrow
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "right_arrow",
        onClick: function onClick(ev) {
          return _this2.nextPicture(ev, 1);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: right_arrow
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("footer", {
        id: "footerOverview"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "footer_overview_items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          _this2.setState({
            clickedRoute: "Impressum"
          });

          _this2.animateToSubPage();
        }
      }, "impressum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          _this2.setState({
            clickedRoute: "About"
          }, function () {
            return _this2.animateToUeberMich();
          });
        }
      }, "\xFCber mich"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          _this2.setState({
            clickedRoute: "Contact"
          });

          _this2.animateToSubPage();
        }
      }, "kontakt"))))), this.state.showDetails ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ProjectDetails_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        currentProject: this.state.projects.getProjectAt(this.state.currentProject),
        currentProjectNumber: this.state.currentProject,
        lastProjectNumber: this.state.lastProject,
        allProjects: this.state.projects
      }) : null, this.state.clickedRoute === "Impressum" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_impressum__WEBPACK_IMPORTED_MODULE_13__["default"], {
        currentProjectNumber: this.state.currentProject,
        lastProjectNumber: this.state.lastProject
      }) : null, this.state.clickedRoute === "About" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_about__WEBPACK_IMPORTED_MODULE_15__["default"], {
        currentProjectNumber: this.state.currentProject,
        lastProjectNumber: this.state.lastProject
      }) : null, this.state.clickedRoute === "Contact" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_contact__WEBPACK_IMPORTED_MODULE_14__["default"], {
        currentProjectNumber: this.state.currentProject,
        lastProjectNumber: this.state.lastProject
      }) : null);
    }
  }, {
    key: "removeLoadingScreen",
    value: function removeLoadingScreen() {
      try {
        var loading_screen = document.querySelector("#loadingScreen");
        var animation = loading_screen.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 300,
          delay: 1400,
          iterations: 1,
          easing: "linear"
        });

        animation.onfinish = function () {
          return loading_screen.remove();
        };
      } catch (_unused) {
        console.error("this should not happen; Loading screen couldn't be removed");
      }

      ;
    }
  }, {
    key: "removeDetailWrapper",
    value: function removeDetailWrapper() {
      try {
        var wrapper = document.querySelector("#Detailwrapper");
        setTimeout(function () {
          wrapper.remove();
        }, 900); //timeout so this component has enough time to render
      } catch (e) {
        console.error(e);
      }

      ;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animateFooterIn();

      if (this.props.removeDetailWrapper) {
        this.removeDetailWrapper();
      } else if (this.props.calledFromSubPage) {
        this.animateMountFromSubpage();
      } else if (this.props.calledFromAbout) {
        this.animateMountFromAbout();
      } else {
        this.removeLoadingScreen();
      }

      window.addEventListener("resize", this.windowListenerHandler);
      this.calculateMarqueeCount();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.windowListenerHandler);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("lethargy");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iRWJlbmVfMSIgZGF0YS1uYW1lPSJFYmVuZSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzMuMDUgNjIuMTYiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmFkMmFhO308L3N0eWxlPjwvZGVmcz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMzcyLjUyIDMxLjExIDI5OS40NiAwLjI4IDMxMC4zNyAyNS45NyAwLjQ1IDI1Ljk3IDAuNDUgMzYuMjUgMzEwLjM3IDM2LjI1IDI5OS40NiA2MS45MyAzNzIuNTIgMzEuMTEiLz48L3N2Zz4="

/***/ }),
/* 17 */
/***/ (function(module) {

module.exports = JSON.parse("{\"projects\":[{\"path\":\"europify\",\"title\":\"LOGODESIGN\",\"textheading\":\"europify\",\"subtext\":[\"wettbewerbseinreichung\",\"logodesign für unabhängiges institut\",\"gewinnerdesign\"],\"count_imgs\":4,\"image_extention\":[\"jpg\",\"jpg\",\"mp4\",\"jpg\"]},{\"path\":\"bhl\",\"title\":\"BRANDING x PORTRÄTFOTOGRAFIE\",\"textheading\":\"deejay bhl\",\"subtext\":[\"logo + branding für deejay\",\"merchandising design\",\"social media konzept\"],\"count_imgs\":6,\"image_extention\":[\"jpg\",\"jpg\",\"jpg\",\"jpg\",\"mp4\",\"jpg\"]},{\"path\":\"gin_packaging\",\"title\":\"PACKAGING-DESIGN\",\"textheading\":\"abstrakt gin\",\"subtext\":[\"etikett für hochwertigen gin\",\"auffallende, herausstechende optik\",\"eigenes handlettering\",\"eigene spezialfotografie\",\"mockup anfertigung\"],\"count_imgs\":4,\"image_extention\":[\"jpg\"]},{\"path\":\"nautilus_branding\",\"title\":\"BRANDING\",\"textheading\":\"nautilus architecture\",\"subtext\":[\"branding für architekturbüro\",\"schriftmischung\",\"drucksorten\",\"webseite\",\"billboard-anzeige\"],\"count_imgs\":6,\"image_extention\":[\"jpg\",\"jpg\",\"jpg\",\"jpg\",\"mp4\",\"jpg\"]}]}");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, "/* ------------------- Footer ------------------- */\r\n\r\n.FooterSubPage {\r\n   display: flex;\r\n   align-items: center;\r\n   margin-top: 20px;\r\n   width: 100vw;\r\n   margin-left:-70px;\r\n}\r\n\r\n.FooterSubPage>div {\r\n   width: 100%;\r\n}\r\n\r\n.FooterSubPage #DetailsFooterBase {\r\n   width: 100%;\r\n}\r\n\r\n.FooterSubPage .detailsline {\r\n   width: 100%;\r\n}\r\n\r\n.FooterSubPage #DetailsProgressLine {\r\n   transition: width 1s;\r\n   width: 0;\r\n}\r\n\r\n.FooterSubPage #DetailsFooterBase .detailsline {\r\n   border-bottom: 1px solid var(--foreground);\r\n   position: relative;\r\n   bottom: 30px;\r\n}\r\n\r\n.FooterSubPage #DetailsFooterBase #DetailsFooterBaseTitle {\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n   height: 60px;\r\n   font-family: Coconut;\r\n}\r\n\r\n.FooterSubPage #DetailsFooterBase #DetailsFooterBaseTitle p {\r\n   display: inline;\r\n   background-color: var(--background);\r\n   z-index: 1;\r\n   font-family: Coconut;\r\n   padding-left: 10px;\r\n   padding-right: 10px;\r\n}\r\n\r\n/* ------------------- End Footer ------------------- */", ""]);



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, ".subWrapper{\r\n   background-color: var(--background);\r\n}\r\n\r\n.main_aside{\r\n   grid-area: project_overview;\r\n   width:calc(100vw - 140px);\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n}\r\na{\r\n   cursor: pointer;\r\n}\r\n\r\n.main_aside > div {\r\n   margin-bottom: 6.5%;\r\n}", ""]);



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loading_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50);
/* harmony import */ var _css_loading_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_loading_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_loading_icon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);
/* harmony import */ var _img_loading_icon_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_loading_icon_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



 // --------------------------

var ProjectInformation = __webpack_require__(17);



var right_arrow = __webpack_require__(16);

var sexyBackgroundImage = __webpack_require__(26);

var ProjectList = /*#__PURE__*/function () {
  function ProjectList() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, ProjectList);

    this.projects = [];

    var _iterator = _createForOfIteratorHelper(ProjectInformation.projects),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var project = _step.value;
        this.projects.push(new Project(project));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(ProjectList, [{
    key: "getProjectAt",
    value: function getProjectAt(index) {
      if (index % this.projects.length < 0) {
        return this.projects[this.projects.length + index % this.projects.length];
      }

      return this.projects[index % this.projects.length];
    }
  }]);

  return ProjectList;
}();

var Project = function Project(information) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Project);

  this.title = information.title;
  this.textheading = information.textheading;
  this.subtext = information.subtext;
  this.image_extention = information.image_extention;
  this.titleImage = __webpack_require__(27)("./".concat(information.path, "/main.jpg"));
  this.images = [];

  for (var i = 0; i < information.count_imgs; i++) {
    this.images.push(__webpack_require__(28)("./".concat(information.path, "/img/").concat(i, ".").concat(information.image_extention[i % information.image_extention.length])));
  }
}; // --------------------------


var LoadingScreen = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0___default()(LoadingScreen, _Component);

  var _super = _createSuper(LoadingScreen);

  function LoadingScreen(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, LoadingScreen);

    _this = _super.call(this, props);
    _this.state = {
      projects: new ProjectList()
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(LoadingScreen, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "loadingScreen"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "loadingItem"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_loading_icon_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        id: "loading_empty",
        alt: "loading..."
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_loading_icon_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        id: "loading_full",
        alt: "loading..."
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "invisibleLoading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8___default.a
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: right_arrow
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: sexyBackgroundImage
      }), this.state.projects.projects.map(function (project, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "loading_image_".concat(i)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: project.titleImage
        }));
      }), this.state.projects.projects.map(function (project, i) {
        return project.images.map(function (image, j) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            src: image,
            key: "loading_subimage_".concat(j)
          });
        });
      })));
    }
  }]);

  return LoadingScreen;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoadingScreen);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18);
/* harmony import */ var _css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_SubPage_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19);
/* harmony import */ var _css_SubPage_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_SubPage_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_contact_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61);
/* harmony import */ var _css_contact_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_contact_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var Contact = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Contact, _Component);

  var _super = _createSuper(Contact);

  function Contact(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Contact);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "returnToMainPage", function () {
      _this.setState({
        returnToMainPage: true
      });

      _this.animateUnMount();

      setTimeout(function () {
        return document.querySelector("#contactWrapper").remove();
      }, 1000);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "animateMount", function () {
      var main = document.querySelector(".main_aside");
      var footer = document.querySelector(".FooterSubPage");
      main.style = "position:relative";
      main.animate([{
        opacity: 0,
        top: "30px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 500,
        delay: 980
      });
      footer.style = "position:relative";
      footer.animate([{
        opacity: 0,
        top: "40px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 1000,
        delay: 980
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "animateUnMount", function () {
      var main = document.querySelector(".main_aside");
      var footer = document.querySelector(".FooterSubPage");
      main.style = "position:relative;opacity:0";
      main.animate([{
        opacity: 0,
        top: "30px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 400,
        direction: "reverse"
      });
      footer.style = "position:relative; opacity:0";
      footer.animate([{
        opacity: 0,
        top: "40px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 800,
        direction: "reverse"
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "animateMountFromAbout", function () {
      var wrapper = document.querySelector("#contactWrapper");
      wrapper.style = "position:relative; bottom:100vh";
      var animation = wrapper.animate([{
        clipPath: "inset(0% 0% 100% 0%)"
      }, {
        clipPath: "inset(0%)"
      }], {
        duration: 1000,
        easing: "ease-in-out"
      });

      animation.onfinish = function () {
        wrapper.style = "";
        document.querySelector("#aboutWrapper").remove();
      };
    });

    _this.state = {
      returnToMainPage: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Contact, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "contactWrapper",
        className: "subWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "projectDetailWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "head_items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: this.returnToMainPage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "logo",
        className: "full_logo"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "main_aside"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        id: "contacttel"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "tel:+436502322462"
      }, "+43 650\u200A/\u200A23 22 462")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        id: "contactmail"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "mailto:mail@fabianschwarzinger.work?subject=Erz\xE4hl%20mir%20was"
      }, "mail@fabianschwarzinger.work")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "contactText"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Bindungen einzugehen kann schwierig sein, ich wei\xDF."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Aber ich bei\xDFe nicht, versprochen."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Machen wir\u2019s doch so: Sie schreiben \xBBErz\xE4hl mir was\xAB in den"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Betreff und ich schreibe Ihnen eine kleine Anekdote aus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "meinem Leben zur\xFCck, dann ist das Eis schon mal gebrochen,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "einverstanden?")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("footer", {
        className: "FooterSubPage"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "DetailsFooterBase"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "DetailsFooterBaseTitle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "KONTAKT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "detailsline"
      })))))), this.state.returnToMainPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_12__["default"], {
        calledFromSubPage: true,
        currentProjectNumber: this.props.currentProjectNumber | 0,
        lastProjectNumber: this.props.lastProjectNumber | -1
      }) : null);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.calledFromAbout) {
        this.animateMountFromAbout();
      } else this.animateMount();
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18);
/* harmony import */ var _css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_SubPage_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19);
/* harmony import */ var _css_SubPage_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_SubPage_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_contact_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61);
/* harmony import */ var _css_contact_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_contact_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_MobileSubPage_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64);
/* harmony import */ var _css_MobileSubPage_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_MobileSubPage_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var Contact = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Contact, _Component);

  var _super = _createSuper(Contact);

  function Contact(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Contact);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "returnToMainPage", function () {
      _this.setState({
        returnToMainPage: true
      });

      _this.animateUnMount();

      setTimeout(function () {
        return document.querySelector("#contactWrapper").remove();
      }, 1000);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "animateMount", function () {
      var main = document.querySelector(".main_aside");
      var footer = document.querySelector(".FooterSubPage");
      main.style = "position:relative";
      main.animate([{
        opacity: 0,
        top: "30px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 500,
        delay: 980
      });
      footer.style = "position:relative";
      footer.animate([{
        opacity: 0,
        top: "40px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 1000,
        delay: 980
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "animateUnMount", function () {
      var main = document.querySelector(".main_aside");
      var footer = document.querySelector(".FooterSubPage");
      main.style = "position:relative;opacity:0";
      main.animate([{
        opacity: 0,
        top: "30px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 400,
        direction: "reverse"
      });
      footer.style = "position:relative; opacity:0";
      footer.animate([{
        opacity: 0,
        top: "40px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 800,
        direction: "reverse"
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "animateMountFromAbout", function () {
      var wrapper = document.querySelector("#contactWrapper");
      wrapper.style = "position:relative; bottom:100vh";
      var animation = wrapper.animate([{
        clipPath: "inset(0% 0% 100% 0%)"
      }, {
        clipPath: "inset(0%)"
      }], {
        duration: 1000,
        easing: "ease-in-out"
      });

      animation.onfinish = function () {
        wrapper.style = "";
        document.querySelector("#aboutWrapper").remove();
      };
    });

    _this.state = {
      returnToMainPage: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Contact, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "contactWrapper",
        className: "subWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "projectDetailWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "head_items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: this.returnToMainPage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "logo",
        className: "full_logo"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "main_aside"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        id: "contacttel"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "tel:+436502322462"
      }, "+43 650\u200A/\u200A23 22 462")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        id: "contactmail"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "mailto:mail@fabianschwarzinger.work?subject=Erz\xE4hl%20mir%20was"
      }, "mail@fabianschwarzinger.work")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "contactText"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Bindungen einzugehen kann schwierig sein, ich wei\xDF."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Aber ich bei\xDFe nicht, versprochen."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Machen wir\u2019s doch so: Sie schreiben \xBBErz\xE4hl mir was\xAB in den"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Betreff und ich schreibe Ihnen eine kleine Anekdote aus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "meinem Leben zur\xFCck, dann ist das Eis schon mal gebrochen,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "einverstanden?")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("footer", {
        className: "FooterSubPage"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "DetailsFooterBase"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "DetailsFooterBaseTitle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "KONTAKT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "detailsline"
      })))))), this.state.returnToMainPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_13__["default"], {
        calledFromSubPage: true,
        currentProjectNumber: this.props.currentProjectNumber | 0,
        lastProjectNumber: this.props.lastProjectNumber | -1
      }) : null);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.calledFromAbout) {
        this.animateMountFromAbout();
      } else this.animateMount();
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDgwIDEwODAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmFkMmFhO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iRWJlbmVfMyIgZGF0YS1uYW1lPSJFYmVuZSAzIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02NDguMTQsNDU5LjIxbC05Ny43Niw5NC45Yy03LjU4LDcuMzctMTUuMzYsMTQuOTQtMjMuMjQsMjIuNTZMMzkwLjU4LDcwOS4yN2MtMjMuMDYsMjIuMzgtMzQuMjQsNTEuNjgtMzEuNDgsODIuNjYuNDcsNC4wOSwxLDcuNzcsMS43NCwxMS4yOC41NSwyLjU5LDEuMTcsNS4xNywxLjg0LDcuOEExMjguMjUsMTI4LjI1LDAsMCwwLDQxNiw4ODQuNzhhMTI5LjkzLDEyOS45MywwLDAsMCw3MS43MywyMS42MiwxMzIuNDYsMTMyLjQ2LDAsMCwwLDI1LjU0LTIuNSwxMjguNjYsMTI4LjY2LDAsMCwwLDgyLjU0LTU0LjUyLDEyNi4xNCwxMjYuMTQsMCwwLDAsMTkuMzktOTYuMjdMNTc2LjM4LDU1OS41NmMzOS4zNC0zNS44OSw3MS43Ni02NSw3MS43Ni02NVpNNTYyLjI3LDc2My41NUE3My41Myw3My41MywwLDAsMSw1NTEsODE5LjY0aDBhNzYuMjIsNzYuMjIsMCwwLDEtMTA1LDIwLjYyLDc0LjA2LDc0LjA2LDAsMCwxLTI4Ljc0LTM1LjY4bC0uMjEtLjQ3Yy0uMjgtLjU2LTI3LjQ4LTU2LjY5LDkuNjUtMTAxLjU1bC44Ny0xYzEuMTItMS4zNywzLjE5LTMuNiw2LjM1LTYuODUsNy4yMi03LjUxLDE5LjYzLTE5Ljg3LDM3LTM2Ljg1LDE2LjM1LTE1Ljg3LDM3LjI4LTM1LjQ5LDU5LTU1LjU4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQzMS44Niw2MjAuNzlsOTcuNzYtOTQuOWM3LjU4LTcuMzcsMTUuMzYtMTQuOTQsMjMuMjQtMjIuNTZsMTM2LjU2LTEzMi42YzIzLjA2LTIyLjM4LDM0LjI0LTUxLjY4LDMxLjQ4LTgyLjY2LS40Ny00LjA5LTEtNy43Ny0xLjc0LTExLjI4LS41NS0yLjU5LTEuMTctNS4xNy0xLjg0LTcuOEExMjguMjUsMTI4LjI1LDAsMCwwLDY2NCwxOTUuMjJhMTI5LjkzLDEyOS45MywwLDAsMC03MS43My0yMS42MiwxMzIuNDYsMTMyLjQ2LDAsMCwwLTI1LjU0LDIuNSwxMjguNjYsMTI4LjY2LDAsMCwwLTgyLjU0LDU0LjUyLDEyNi4xNCwxMjYuMTQsMCwwLDAtMTkuMzksOTYuMjdsMzguODMsMTkzLjU1Yy0zOS4zNCwzNS44OS03MS43Niw2NS03MS43Niw2NVptODUuODctMzA0LjM0QTczLjUzLDczLjUzLDAsMCwxLDUyOSwyNjAuMzZoMGE3Ni4yMiw3Ni4yMiwwLDAsMSwxMDUtMjAuNjIsNzQuMDYsNzQuMDYsMCwwLDEsMjguNzQsMzUuNjhsLjIxLjQ3Yy4yOC41NiwyNy40OCw1Ni42OS05LjY1LDEwMS41NWwtLjg3LDFjLTEuMTIsMS4zNy0zLjE5LDMuNi02LjM1LDYuODUtNy4yMiw3LjUxLTE5LjYzLDE5Ljg3LTM3LDM2Ljg1LTE2LjM1LDE1Ljg3LTM3LjI4LDM1LjQ5LTU5LDU1LjU4WiIvPjwvZz48L3N2Zz4="

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(40);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(75)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/SexyBackgroundImage.5b747999.jpg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bhl/main.jpg": 53,
	"./europify/main.jpg": 54,
	"./gin_packaging/main.jpg": 55,
	"./nautilus_branding/main.jpg": 56
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 27;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bhl/img/0.jpg": 85,
	"./bhl/img/1.jpg": 86,
	"./bhl/img/2.jpg": 87,
	"./bhl/img/3.jpg": 88,
	"./bhl/img/4.mp4": 89,
	"./bhl/img/5.jpg": 90,
	"./bhl/main.jpg": 53,
	"./europify/img/0.jpg": 91,
	"./europify/img/1.jpg": 92,
	"./europify/img/2.mp4": 93,
	"./europify/img/3.jpg": 94,
	"./europify/main.jpg": 54,
	"./gin_packaging/img/0.jpg": 95,
	"./gin_packaging/img/1.jpg": 96,
	"./gin_packaging/img/2.jpg": 97,
	"./gin_packaging/img/3.jpg": 98,
	"./gin_packaging/main.jpg": 55,
	"./nautilus_branding/img/0.jpg": 99,
	"./nautilus_branding/img/1.jpg": 100,
	"./nautilus_branding/img/2.jpg": 101,
	"./nautilus_branding/img/3.jpg": 102,
	"./nautilus_branding/img/4.mp4": 103,
	"./nautilus_branding/img/5.jpg": 104,
	"./nautilus_branding/main.jpg": 56,
	"./projects_information": 17,
	"./projects_information.json": 17
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 28;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var NotFound = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(NotFound, _Component);

  var _super = _createSuper(NotFound);

  function NotFound() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NotFound);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NotFound, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          "display": "flex",
          "justify-content": "center",
          "align-items": "center",
          "width": "100vw",
          "height": "100vh",
          "backgroundColor": "var(--background)"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "404 - not found"));
    }
  }, {
    key: "removeLoadingScreen",
    value: function removeLoadingScreen() {
      try {
        var loading_screen = document.querySelector("#loadingScreen");
        var animation = loading_screen.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 300,
          delay: 1400,
          iterations: 1,
          easing: "linear"
        });

        animation.onfinish = function () {
          return loading_screen.remove();
        };
      } catch (_unused) {
        console.error("this should not happen; Loading screen couldn't be removed");
      }

      ;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.removeLoadingScreen();
    }
  }]);

  return NotFound;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SuspenseContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);


/**
* It take react component as children and using suspense api to show fallback component
* for lazy loading component using React.lazy https://reactjs.org/docs/code-splitting.html
* @param props children i.e React Component
*/

function SuspenseContainer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingScreen__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }, props.children); //return <Suspense fallback={<p>Das ist Suspense</p>}>{props.children}</Suspense>;
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_circle_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(105);
/* harmony import */ var _css_circle_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_circle_css__WEBPACK_IMPORTED_MODULE_8__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var circle;
var context;
var mouseX = -30;
var mouseY = -30;
var canvasPos;

var MouseCircle = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(MouseCircle, _Component);

  var _super = _createSuper(MouseCircle);

  function MouseCircle(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MouseCircle);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "setMousePosition", function (e) {
      var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (touch) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
        return;
      }

      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "update", function () {
      circle.style.left = mouseX - 30 + "px";
      circle.style.top = mouseY - 30 + "px";
      requestAnimationFrame(_this.update);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MouseCircle, [{
    key: "fillCircle",
    value: function fillCircle(e) {
      circle.style.backgroundColor = "#fad2aa";
      setTimeout(function () {
        circle.style.backgroundColor = "transparent";
      }, 300);
    }
  }, {
    key: "clickCircle",
    value: function clickCircle(ev) {
      var ripple = document.querySelector("#circle .ripple");
      ripple.classList.add("rippleactive");
      setTimeout(function () {
        ripple.classList.remove("rippleactive");
      }, 400);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "circle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "ripple"
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      circle = document.getElementById("circle");
      document.addEventListener("mousemove", this.setMousePosition, false);
      document.addEventListener("touchmove", function (e) {
        return _this2.setMousePosition(e, true);
      }, false);
      document.addEventListener("click", this.clickCircle, false); // document.addEventListener("click", this.fillCircle, false)

      this.update();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousemove", this.setMousePosition);
    }
  }]);

  return MouseCircle;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MouseCircle);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_logo_full_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_projectDetails_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57);
/* harmony import */ var _css_projectDetails_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_projectDetails_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13);
/* harmony import */ var lethargy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15);
/* harmony import */ var lethargy__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lethargy__WEBPACK_IMPORTED_MODULE_12__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var right_arrow = __webpack_require__(16);




var BlockNextImage = false;
var nextMultiplier = 60;
var lastMP4 = null;

var Project = /*#__PURE__*/function () {
  function Project(project) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, Project);

    if (project) {
      this.images = project.images;
      this.image_extension = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(project.image_extention);
      this.subtext = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(project.subtext);
      this.title = project.title;
      this.textheading = project === null || project === void 0 ? void 0 : project.textheading;
    } //if i remove this there is a weird build error 
    //the error is only in npm run build.. when npm run start the issue never happens..
    //I think this is a error with react-static build
    else {
        this.images = [];
        this.image_extension = [];
        this.subtext = [];
        this.title = "";
        this.textheading = "";
      }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(Project, [{
    key: "getImageAt",
    value: function getImageAt(index) {
      var returnstring;
      var ismp4 = false;

      if (index % this.images.length < 0) {
        returnstring = this.images[this.images.length + index % this.images.length];
        if (this.image_extension[this.image_extension.length + index % this.image_extension.length] === "mp4") ismp4 = true;
      } else {
        returnstring = this.images[index % this.images.length];
        if (this.image_extension[index % this.image_extension.length] === "mp4") ismp4 = true;
      }

      if (ismp4) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("video", {
          preload: "auto",
          loop: true,
          className: "centeritem",
          id: "video" + returnstring.replaceAll("/", "SLASH").replaceAll(".", "DOT")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
          src: returnstring,
          type: "video/mp4"
        }));
      } else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: returnstring,
        className: "centeritem ".concat(index == 0 ? "showFull" : ""),
        id: index == 0 ? "Mainimg" : null
      });
    }
  }, {
    key: "isMp4",
    value: function isMp4(index) {
      if (index % this.images.length < 0) {
        if (this.image_extension[this.image_extension.length + index % this.image_extension.length] === "mp4") return true;
      } else {
        if (this.image_extension[index % this.image_extension.length] === "mp4") return true;
      }

      return false;
    }
  }, {
    key: "getMp4id",
    value: function getMp4id(index) {
      var returnstring;

      if (index % this.images.length < 0) {
        returnstring = this.images[this.images.length + index % this.images.length];
      } else {
        returnstring = this.images[index % this.images.length];
      }

      return returnstring.replaceAll("/", "SLASH").replaceAll(".", "DOT");
    }
  }, {
    key: "calcCurrentPictureInRealIndex",
    value: function calcCurrentPictureInRealIndex(index) {
      if (index % this.images.length < 0) {
        return this.images.length + index % this.images.length;
      } else {
        return index % this.images.length;
      }
    }
  }]);

  return Project;
}();

var ProjectDetails = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(ProjectDetails, _Component);

  var _super = _createSuper(ProjectDetails);

  function ProjectDetails(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, ProjectDetails);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "loadNextProject", function () {
      var wrapper = document.querySelector("#Detailwrapper");

      _this.animateUnMountToProjectDetails(wrapper, document.querySelector("#detail_next_picture"));

      _this.setState({
        loadNextProject: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateUnMountToProjectDetails", function (wrapper, detailNextPicture) {
      var main_wrapper = document.querySelector("#main_wrapper");
      detailNextPicture.style = "opacity:0";
      detailNextPicture.animate([{
        opacity: 1
      }, {
        opacity: 0
      }], {
        duration: 300,
        easing: "ease-out"
      });
      var animation = main_wrapper.animate([{
        left: "calc(-".concat(_this.state.currentpic * nextMultiplier, "vw - 70px")
      }, {
        left: "-100%"
      }], {
        duration: 1000,
        easing: "ease-out"
      });

      animation.onfinish = function () {
        wrapper.remove();
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "returnToOverview", function () {
      window.removeEventListener("resize", _this.WindowEventHandler); //remove event listener -> to prevent errors

      var timeout = 0;
      if (_this.state.currentpic != 0) timeout = 1000; //so the page gets time to scroll back to the first image

      _this.nextPicture(null, -1 * _this.state.currentpic); //wait until it is scrolled back to the first img


      setTimeout(function () {
        var mainimg = document.querySelector("#main_wrapper #Mainimg");
        var secondimg = document.querySelectorAll("#main_wrapper > div")[1];
        var footer = document.querySelector("#DetailsFooter"); //animate footer

        footer.style = "position:relative";
        footer.animate([{
          top: 0
        }, {
          top: "calc(100% + 140px)"
        }], {
          duration: 1001,
          easing: "ease-out"
        }); //animate right side

        secondimg.animate([{
          marginLeft: nextMultiplier - 100 + "vw"
        }, {
          marginLeft: 0
        }], {
          duration: 1001,
          easing: "ease-out"
        }); //animate left side

        if (_this.state.displayDescription) {
          var left = document.querySelector("#detail_description_text");
          left.animate([{
            top: left.getBoundingClientRect().top + "px",
            opacity: 1
          }, {
            top: left.getBoundingClientRect().top + 40 + "px",
            opacity: 1
          }, {
            top: left.getBoundingClientRect().top + 80 + "px",
            opacity: 0
          }, {
            top: left.getBoundingClientRect().top + 80 + "px",
            opacity: 0
          }], {
            duration: 1001,
            easing: "ease-out"
          });
        } //animate main img


        document.querySelector("#main_wrapper").classList.add("main_wrapper_return_to_overview");
        mainimg.animate([{
          clipPath: "inset(0)"
        }, {
          clipPath: "inset(5%)"
        }], {
          duration: 1000,
          easing: "ease-out"
        });

        _this.setState({
          returnToOverview: true
        });
      }, timeout);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "updateProgressBar", function (index) {
      document.querySelector("#DetailsFooter #DetailsProgressLine").style = "width: ".concat(_this.perCentStep * index, "%");
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "nextPicture", function (event, add) {
      if (_this.state.currentpic + add >= 0 && _this.state.currentpic + add < _this.state.projects.images.length && !BlockNextImage) {
        var realindex = _this.state.projects.calcCurrentPictureInRealIndex(_this.state.currentpic); //remove highlight of old


        document.querySelectorAll(".centeritem")[realindex].classList.remove("showFull"); //hide left or right text

        if (_this.state.displayDescription && realindex >= 0) document.querySelector("#detail_description_text").classList.add("hide");
        if (_this.state.displayDescription && realindex <= _this.state.projects.images.length - 1) document.querySelector("#detail_next_picture").classList.add("displayNone");

        _this.setState({
          currentpic: _this.state.currentpic + add
        }, function () {
          realindex = realindex + add;

          _this.updateProgressBar(realindex);

          document.querySelector("#main_wrapper").style = "width: ".concat(_this.state.projects.images.length * nextMultiplier + 100, "vw; left: calc(-").concat(_this.state.currentpic * nextMultiplier, "vw - 70px)"); //display left or right text

          if (_this.state.displayDescription && realindex === 0) setTimeout(function () {
            return document.querySelector("#detail_description_text").classList.remove("hide");
          }, 400);

          if (_this.state.displayDescription && realindex === _this.state.projects.images.length - 1) {
            var detailNext = document.querySelector("#detail_next_picture");
            detailNext.style = "opacity:1";
            setTimeout(function () {
              detailNext.classList.remove("displayNone");
              detailNext.style = "";
            }, 400);
          } //add highlight to new


          document.querySelectorAll(".centeritem")[realindex].classList.add("showFull");

          if (_this.state.projects.isMp4(_this.state.currentpic)) {
            lastMP4 = document.querySelector("#video".concat(_this.state.projects.getMp4id(_this.state.currentpic)));
            lastMP4.play();
          } else if (lastMP4 !== null) {
            lastMP4.pause();
            lastMP4 = null;
          }
        });

        BlockNextImage = true;
        setTimeout(function () {
          return BlockNextImage = false;
        }, 1000);
      } else if (_this.state.currentpic + add >= _this.state.projects.images.length && !BlockNextImage) {
        //play "end of collection animation"
        var mainwrapper = document.querySelector("#main_wrapper");
        mainwrapper.animate([{
          left: "calc(-".concat(_this.state.currentpic * nextMultiplier, "vw - 70px)")
        }, {
          left: "calc(-".concat(_this.state.currentpic * nextMultiplier, "vw - 150px)")
        }, {
          left: "calc(-".concat(_this.state.currentpic * nextMultiplier, "vw - 70px)")
        }], {
          duration: 900,
          easing: "ease-out"
        });
        BlockNextImage = true;
        setTimeout(function () {
          return BlockNextImage = false;
        }, 900);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "CheckIfNextPictureShouldBeTeasered", function () {
      var mainImg = document.querySelector("#Mainimg");

      if (mainImg.clientWidth === 0) {
        //just so if it don't get called to early (before rendering of the imgs)..
        setTimeout(_this.CheckIfNextPictureShouldBeTeasered, 10);
        return;
      }

      if (document.body.clientWidth < mainImg.clientWidth / 0.6 + 100) {
        //to small -> ...
        nextMultiplier = 100;
        document.querySelectorAll("#main_wrapper > div").forEach(function (div) {
          return div.classList.add("toSmallToPreview");
        });

        _this.nextPicture(null, 0);

        _this.setState({
          displayDescription: false
        });
      } else if (nextMultiplier === 100) {
        nextMultiplier = 60;
        document.querySelectorAll("#main_wrapper > div").forEach(function (div) {
          return div.classList.remove("toSmallToPreview");
        });

        _this.nextPicture(null, 0);

        _this.setState({
          displayDescription: true
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "CheckIfHmoreThanWidth", function () {
      if (window.innerHeight >= window.innerWidth) {
        document.querySelectorAll("#main_wrapper img, #main_wrapper video").forEach(function (img) {
          img.style = "width: 100%";
        });
      } else {
        document.querySelectorAll("#main_wrapper img, #main_wrapper video").forEach(function (img) {
          img.style = "";
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateMount", function () {
      //left side
      if (_this.state.displayDescription) {
        var left = document.querySelector("#detail_description_text");

        _this.calculateTextWidthHeight();

        left.animate([{
          top: left.getBoundingClientRect().top + 80 + "px",
          opacity: 0
        }, {
          top: left.getBoundingClientRect().top + 0 + "px",
          opacity: 1
        }], {
          duration: 1000,
          delay: 0,
          easing: "ease-out"
        }); //right side

        var secondimg = document.querySelectorAll("#main_wrapper > div")[1];
        secondimg.animate([{
          marginLeft: 0
        }, {
          marginLeft: nextMultiplier - 100 + "vw"
        }], {
          duration: 1000,
          delay: 500,
          easing: "ease-out"
        });
      } //animate footer


      var footer = document.querySelector("#DetailsFooter");
      footer.style = "position:relative";
      var footeranim = footer.animate([{
        top: "calc(100% + 140px)"
      }, {
        top: 0
      }], {
        duration: 1000,
        delay: 500,
        easing: "ease-out"
      });

      footeranim.onfinish = function () {
        return footer.style = "";
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateMountFromProjectDetails", function () {
      var main_wrapper = document.querySelector("#main_wrapper");
      main_wrapper.animate([{
        left: "100vw"
      }, {
        left: "calc(-".concat(_this.state.currentpic * nextMultiplier, "vw - 70px")
      }], {
        duration: 1000,
        easing: "ease-out"
      });

      if (_this.state.displayDescription) {
        var left = document.querySelector("#detail_description_text");

        _this.calculateTextWidthHeight();

        left.animate([{
          top: left.getBoundingClientRect().top + 80 + "px",
          opacity: 0
        }, {
          top: left.getBoundingClientRect().top + 0 + "px",
          opacity: 1
        }], {
          duration: 1000,
          delay: 0,
          easing: "ease-out"
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "calculateTextWidthHeight", function () {
      if (_this.state.displayDescription) {
        var mainImgWidth = document.querySelector("#Mainimg").clientWidth;

        if (mainImgWidth === 0) {
          //just so if it don't get called to early (before rendering of the imgs)..
          setTimeout(_this.calculateTextWidthHeight, 10);
          return;
        }

        var windowwidth = document.body.clientWidth;
        var texttochange = document.querySelector("#detail_description_text");
        texttochange.style = "width: calc(".concat((windowwidth - mainImgWidth) / 2, "px - 10%)");
        return (windowwidth - mainImgWidth) / 2;
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "WindowEventHandler", function () {
      _this.CheckIfHmoreThanWidth();

      _this.CheckIfNextPictureShouldBeTeasered();

      _this.calculateTextWidthHeight();
    });

    _this.state = {
      projects: new Project(props.currentProject),
      currentpic: 0,
      returnToOverview: false,
      loadNextProject: false,
      displayDescription: true
    };
    _this.lethargy = new lethargy__WEBPACK_IMPORTED_MODULE_12__["Lethargy"]();
    _this.perCentStep = 100 / (_this.state.projects.images.length - 1);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(ProjectDetails, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "Detailwrapper",
        onWheel: function onWheel(e) {
          if (_this2.lethargy.check(e) === false) return;
          if (e.deltaY < 0) _this2.nextPicture(e, -1);else _this2.nextPicture(e, 1);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "projectDetailWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "head_items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.returnToOverview
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "logo",
        className: "full_logo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "right_arrow",
        onClick: function onClick(ev) {
          return _this2.nextPicture(ev, 1);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: right_arrow
      })))), this.state.displayDescription ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "detail_description_text"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, this.state.projects.textheading), this.state.projects.subtext.map(function (text, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          key: "subtext_" + i
        }, text);
      }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        id: "main_wrapper",
        style: {
          width: "".concat(this.state.projects.images.length * 100, "vw"),
          left: "-70px"
        }
      }, this.state.projects.images.map(function (image, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: "detailImage_".concat(i)
        }, _this2.state.projects.getImageAt(i));
      })), this.state.displayDescription ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.loadNextProject();
        },
        className: "displayNone",
        id: "detail_next_picture"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "n\xE4chstes Projekt >")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("footer", {
        id: "DetailsFooter"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "DetailsFooterBase"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "DetailsFooterBaseTitle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, this.state.projects.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "detailsline",
        id: "DetailsProgressLine"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "detailsline"
      })))))), this.state.returnToOverview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_11__["default"], {
        removeDetailWrapper: true,
        currentProjectNumber: this.props.currentProjectNumber,
        lastProjectNumber: this.props.lastProjectNumber
      }) : null, this.state.loadNextProject ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ProjectDetails, {
        calledFromProjectDetails: true,
        currentProject: this.props.allProjects.getProjectAt(this.props.currentProjectNumber + 1),
        currentProjectNumber: this.props.currentProjectNumber + 1,
        lastProjectNumber: this.props.lastProjectNumber + 1,
        allProjects: this.props.allProjects
      }) : null);
    }
  }, {
    key: "removeOverview",
    value: function removeOverview() {
      try {
        var wrapper = document.querySelector("#wrapper");
        setTimeout(function () {
          wrapper.remove();
        }, 900); //timeout so this component has enough time to render
      } catch (e) {
        console.error(e);
      }

      ;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (this.props.calledFromProjectDetails) {
        var wrapper = document.querySelectorAll("#main_wrapper")[1];
        var left = document.querySelectorAll("#detail_description_text")[1];
        wrapper.classList.add("hide");
        left.classList.add("hide");
        setTimeout(function () {
          wrapper.classList.remove("hide");
          left.classList.remove("hide");

          _this3.animateMountFromProjectDetails();

          window.addEventListener("resize", _this3.WindowEventHandler);

          _this3.CheckIfHmoreThanWidth();

          _this3.CheckIfNextPictureShouldBeTeasered();

          _this3.updateProgressBar(_this3.state.currentpic);
        }, 1100);
      } else {
        this.animateMount();

        try {
          this.removeOverview();
        } catch (e) {
          console.error(e);
        }

        window.addEventListener("resize", this.WindowEventHandler);
        this.CheckIfHmoreThanWidth();
        this.CheckIfNextPictureShouldBeTeasered();
        this.updateProgressBar(this.state.currentpic);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.WindowEventHandler);
    }
  }]);

  return ProjectDetails;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProjectDetails);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18);
/* harmony import */ var _css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_SubPage_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19);
/* harmony import */ var _css_SubPage_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_SubPage_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_impressum_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60);
/* harmony import */ var _css_impressum_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_impressum_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var Impressum = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Impressum, _Component);

  var _super = _createSuper(Impressum);

  function Impressum(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Impressum);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "returnToMainPage", function () {
      _this.setState({
        returnToMainPage: true
      });

      _this.animateUnMount();

      setTimeout(function () {
        return document.querySelector("#impressumWrapper").remove();
      }, 1000);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "animateMount", function () {
      var main = document.querySelector(".main_aside");
      var footer = document.querySelector(".FooterSubPage");
      main.style = "position:relative";
      main.animate([{
        opacity: 0,
        top: "30px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 500,
        delay: 980
      });
      footer.style = "position:relative";
      footer.animate([{
        opacity: 0,
        top: "40px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 1000,
        delay: 980
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "animateUnMount", function () {
      var main = document.querySelector(".main_aside");
      var footer = document.querySelector(".FooterSubPage");
      main.style = "position:relative;opacity:0";
      main.animate([{
        opacity: 0,
        top: "30px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 400,
        direction: "reverse"
      });
      footer.style = "position:relative; opacity:0";
      footer.animate([{
        opacity: 0,
        top: "40px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 800,
        direction: "reverse"
      });
    });

    _this.state = {
      returnToMainPage: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Impressum, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "impressumWrapper",
        className: "subWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "projectDetailWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "head_items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: this.returnToMainPage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "logo",
        className: "full_logo"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "main_aside"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Fabian Schwarzinger"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Grafikdesigner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "3920 Gro\xDF Gerungs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Wiesensfeld 20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "\xD6sterreich")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("footer", {
        className: "FooterSubPage"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "DetailsFooterBase"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "DetailsFooterBaseTitle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "IMPRESSUM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "detailsline"
      })))))), this.state.returnToMainPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_12__["default"], {
        calledFromSubPage: true,
        currentProjectNumber: this.props.currentProjectNumber | 0,
        lastProjectNumber: this.props.lastProjectNumber | -1
      }) : null);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animateMount();
    }
  }]);

  return Impressum;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Impressum);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);
/* harmony import */ var _css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
/* harmony import */ var _css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_SubPage_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19);
/* harmony import */ var _css_SubPage_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_SubPage_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_ueber_mich_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62);
/* harmony import */ var _css_ueber_mich_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_ueber_mich_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lethargy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15);
/* harmony import */ var lethargy__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lethargy__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_logo_full_svg__WEBPACK_IMPORTED_MODULE_14__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var right_arrow = __webpack_require__(16);

var sexyBackgroundImage = __webpack_require__(26);

var Lebenslauf = __webpack_require__(63);

var MainElements = /*#__PURE__*/function () {
  function MainElements() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, MainElements);

    this.mainElements = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "TextElement"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "gr\xFC\xDF gott!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Ich bin ein Designer stammend aus dem Waldviertel, einem idyllischen Fleck im Osten \xD6sterreichs."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Meine Ausbildung habe ich an der h\xF6heren technischen Lehranstalt f\xFCr Grafik- & Kommunikationsdesign in Linz mit Auszeichnung abgeschlossen. Seitdem verfolge ich das Ziel, die Welt Tag f\xFCr Tag zu versch\xF6nern.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "TextElement"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "hobby? los!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "(Dystopische) Filme schauen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Boxen / Fitness"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Mundharmonika spielen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Makro- & Produktfotografie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Techniknews aufsaugen")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "TextElement"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "ich in 3 worten"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Organisationstalent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Fairness-Freak"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Sarkasmus-Apostel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "TextElement"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "noch nicht genug?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Dann downloade gleich meinen ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
      className: "linkInTextElement",
      href: Lebenslauf,
      download: "Schwarzinger-Lebenslauf.pdf"
    }, "Lebenslauf "), "und schreibe mir eine ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
      href: "mailto:mail@fabianschwarzinger.work",
      className: "linkInTextElement"
    }, "E-Mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      className: "italic"
    }, "!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Wir k\xF6nnen uns dann gleich an die Arbeit machen, die Welt gemeinsam zu versch\xF6nern!"))];
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(MainElements, [{
    key: "getElementAt",
    value: function getElementAt(index) {
      if (index % this.mainElements.length < 0) {
        return this.mainElements[this.mainElements.length + index % this.mainElements.length];
      }

      return this.mainElements[index % this.mainElements.length];
    }
  }, {
    key: "getRealIndex",
    value: function getRealIndex(index) {
      if (index % this.mainElements.length < 0) {
        return this.mainElements.length + index % this.mainElements.length;
      }

      return index % this.mainElements.length;
    }
  }]);

  return MainElements;
}();

var Branding = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(Branding, _Component);

  var _super = _createSuper(Branding);

  function Branding(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Branding);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "updateProgressBar", function (index) {
      document.querySelector("#aboutWrapper #DetailsProgressLine").style = "width: ".concat(_this.perCentStep * index, "%");
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateNextElement", function () {
      var lastElement = document.querySelector("#aboutWrapper #lastTextElement");
      var currentElement = document.querySelector("#aboutWrapper #currentTextElement");

      if (_this.state.currentTextElement > _this.state.lastTextElement) {
        lastElement.animate([{
          opacity: 1,
          left: lastElement.style.left,
          zIndex: 1
        }, {
          opacity: 0,
          left: lastElement.getBoundingClientRect().left - 400 + "px",
          zIndex: 1
        }], {
          duration: 600,
          easing: "ease-out"
        });
        currentElement.animate([{
          opacity: 0,
          left: lastElement.getBoundingClientRect().left + 300 + "px"
        }, {
          opacity: 0,
          left: lastElement.getBoundingClientRect().left + 300 + "px"
        }, {
          opacity: 1,
          left: lastElement.style.left
        }], {
          duration: 1200,
          easing: "ease-out"
        });
      } else {
        lastElement.animate([{
          opacity: 1,
          left: lastElement.style.left,
          zIndex: 1
        }, {
          opacity: 0,
          left: lastElement.getBoundingClientRect().left + 300 + "px",
          zIndex: 1
        }], {
          duration: 600,
          easing: "ease-out"
        });
        currentElement.animate([{
          opacity: 0,
          left: lastElement.getBoundingClientRect().left - 400 + "px"
        }, {
          opacity: 0,
          left: lastElement.getBoundingClientRect().left - 400 + "px"
        }, {
          opacity: 1,
          left: lastElement.style.left
        }], {
          duration: 1200,
          easing: "ease-out"
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateLastHasReached", function (add) {
      var currentElement = document.querySelector("#aboutWrapper #currentTextElement");

      if (add < 0) {
        currentElement.animate([{
          opacity: 1,
          left: currentElement.style.left
        }, {
          opacity: 1,
          left: currentElement.getBoundingClientRect().left + 10 + "px"
        }, {
          opacity: 1,
          left: currentElement.style.left
        }], {
          duration: 1000,
          easing: "ease-out"
        });
      }

      if (add > 0) {
        currentElement.animate([{
          opacity: 1,
          left: currentElement.style.left
        }, {
          opacity: 1,
          left: currentElement.getBoundingClientRect().left - 110 + "px"
        }, {
          opacity: 1,
          left: currentElement.style.left
        }], {
          duration: 1000,
          easing: "ease-out"
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "nextElement", function () {
      var add = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      //only if there are no running animations..
      if (document.querySelector("#aboutWrapper #currentTextElement").getAnimations().length <= 0) {
        if (_this.state.currentTextElement + add < _this.state.textElements.mainElements.length && _this.state.currentTextElement + add >= 0) {
          _this.setState({
            currentTextElement: _this.state.currentTextElement + add,
            lastTextElement: _this.state.currentTextElement
          }, function () {
            _this.updateProgressBar(_this.state.textElements.getRealIndex(_this.state.currentTextElement));

            _this.animateNextElement();
          });
        } else {
          _this.animateLastHasReached(add);
        }
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "goToKontaktPage", function () {
      _this.setState({
        goToContact: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "returnToMainPage", function () {
      _this.setState({
        returnToMainPage: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateMount", function () {
      var main = document.querySelector("#aboutWrapper .main_aside");
      var footer = document.querySelector("#aboutWrapper .FooterSubPage");
      main.style = "position:relative; opacity: 0";
      main.animate([{
        opacity: 0,
        top: "30px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 500,
        delay: 1000
      });
      setTimeout(function () {
        return main.style = "position:relative";
      }, 1001);
      footer.style = "position:relative; opacity: 0";
      footer.animate([{
        opacity: 0,
        top: "40px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 1000,
        delay: 1000
      });
      setTimeout(function () {
        return footer.style = "position:relative";
      }, 1001);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "ScaleSexyImageAndText", function () {
      var body = document.body;
      var image = document.querySelector("#SexyBackgroundImage");
      var text1 = document.querySelector("#aboutWrapper .main_aside #lastTextElement");
      var text2 = document.querySelector("#aboutWrapper .main_aside #currentTextElement");
      var textwrapper = document.querySelector("#aboutWrapper .main_aside");

      if (image.clientWidth === 0) {
        setTimeout(_this.ScaleSexyImageAndText, 30);
        return;
      }

      image.style = "left: ".concat(body.clientWidth / 3 - image.clientWidth / 3, "px");
      text1.style = "left: ".concat(body.clientWidth / 3 * 2 - text1.clientWidth / 2, "px;\n      top: ").concat(image.clientHeight / 100 * 35 - textwrapper.getBoundingClientRect().top, "px");
      text2.style = "left: ".concat(body.clientWidth / 3 * 2 - text2.clientWidth / 2, "px;\n      top: ").concat(image.clientHeight / 100 * 35 - textwrapper.getBoundingClientRect().top, "px");
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "componentDidMount", function () {
      _this.animateMount();

      document.querySelector("#aboutWrapper").style = "position:relative;top:-100vh";

      _this.ScaleSexyImageAndText();

      window.addEventListener("resize", _this.ScaleSexyImageAndText);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "componentWillUnmount", function () {
      window.removeEventListener("resize", _this.ScaleSexyImageAndText);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "WindowPopstateEventHandler", function (e) {
      e.preventDefault();

      _this.returnToMainPage();
    });

    _this.state = {
      returnToMainPage: false,
      goToContact: false,
      textElements: new MainElements(),
      currentTextElement: 0,
      lastTextElement: -1
    };
    _this.lethargy = new lethargy__WEBPACK_IMPORTED_MODULE_13__["Lethargy"]();
    _this.perCentStep = 100 / (_this.state.textElements.mainElements.length - 1);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Branding, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "aboutWrapper",
        onWheel: function onWheel(e) {
          if (_this2.lethargy.check(e) === false) return;

          if (!_this2.state.showDetails) {
            if (e.deltaY < 0) _this2.nextElement(-1);else _this2.nextElement(1);
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "projectDetailWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "head_items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: this.returnToMainPage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        alt: "logo",
        className: "full_logo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.nextElement();
        },
        className: "right_arrow"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: right_arrow
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "main_aside"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "currentTextElement"
      }, this.state.textElements.getElementAt(this.state.currentTextElement), this.state.currentTextElement < this.state.textElements.mainElements.length - 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ElementLinkToNext"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.nextElement();
        }
      }, "n\xE4chste >")) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "lastTextElement"
      }, this.state.textElements.getElementAt(this.state.lastTextElement), this.state.lastTextElement < this.state.textElements.mainElements.length - 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ElementLinkToNext"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.nextElement();
        }
      }, "n\xE4chste >")) : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("footer", {
        className: "FooterSubPage"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "DetailsFooterBase"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "detailsline",
        id: "DetailsProgressLine"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "detailsline"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "DetailsSubText"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: Lebenslauf,
        target: "_blank"
      }, "lebenslauf")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: this.goToKontaktPage
      }, "kontakt")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "SexyBackgroundImage"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: sexyBackgroundImage,
        alt: "Bild von Fabian"
      }))), this.state.returnToMainPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
        calledFromAbout: true,
        currentProjectNumber: this.props.currentProjectNumber | 0,
        lastProjectNumber: this.props.lastProjectNumber | -1
      }) : null, this.state.goToContact ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
        calledFromAbout: true,
        currentProjectNumber: this.props.currentProjectNumber | 0,
        lastProjectNumber: this.props.lastProjectNumber | -1
      }) : null);
    }
  }]);

  return Branding;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Branding);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_logo_full_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_projectDetails_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57);
/* harmony import */ var _css_projectDetails_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_projectDetails_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_MobileDetails_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(110);
/* harmony import */ var _css_MobileDetails_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_MobileDetails_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14);
/* harmony import */ var lethargy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15);
/* harmony import */ var lethargy__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lethargy__WEBPACK_IMPORTED_MODULE_13__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var right_arrow = __webpack_require__(16);





var BlockNextImage = false;
var nextMultiplier = 100;
var lastMP4 = null;

var Project = /*#__PURE__*/function () {
  function Project(project) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, Project);

    if (project) {
      this.images = project.images;
      this.image_extension = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(project.image_extention);
      this.subtext = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(project.subtext);
      this.title = project.title;
      this.textheading = project === null || project === void 0 ? void 0 : project.textheading;
    } //if i remove this there is a weird build error 
    //the error is only in npm run build.. when npm run start the issue never happens..
    //I think this is a error with react-static build
    else {
        this.images = [];
        this.image_extension = [];
        this.subtext = [];
        this.title = "";
        this.textheading = "";
      }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(Project, [{
    key: "getImageAt",
    value: function getImageAt(index) {
      var returnstring;
      var ismp4 = false;

      if (index % this.images.length < 0) {
        returnstring = this.images[this.images.length + index % this.images.length];
        if (this.image_extension[this.image_extension.length + index % this.image_extension.length] === "mp4") ismp4 = true;
      } else {
        returnstring = this.images[index % this.images.length];
        if (this.image_extension[index % this.image_extension.length] === "mp4") ismp4 = true;
      }

      if (ismp4) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("video", {
          preload: "auto",
          loop: true,
          className: "centeritem",
          id: "video" + returnstring.replaceAll("/", "SLASH").replaceAll(".", "DOT")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
          src: returnstring,
          type: "video/mp4"
        }));
      } else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: returnstring,
        className: "centeritem ".concat(index == 0 ? "showFull" : ""),
        id: index == 0 ? "Mainimg" : null
      });
    }
  }, {
    key: "isMp4",
    value: function isMp4(index) {
      if (index % this.images.length < 0) {
        if (this.image_extension[this.image_extension.length + index % this.image_extension.length] === "mp4") return true;
      } else {
        if (this.image_extension[index % this.image_extension.length] === "mp4") return true;
      }

      return false;
    }
  }, {
    key: "getMp4id",
    value: function getMp4id(index) {
      var returnstring;

      if (index % this.images.length < 0) {
        returnstring = this.images[this.images.length + index % this.images.length];
      } else {
        returnstring = this.images[index % this.images.length];
      }

      return returnstring.replaceAll("/", "SLASH").replaceAll(".", "DOT");
    }
  }, {
    key: "calcCurrentPictureInRealIndex",
    value: function calcCurrentPictureInRealIndex(index) {
      if (index % this.images.length < 0) {
        return this.images.length + index % this.images.length;
      } else {
        return index % this.images.length;
      }
    }
  }]);

  return Project;
}();

var ProjectDetails = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(ProjectDetails, _Component);

  var _super = _createSuper(ProjectDetails);

  function ProjectDetails(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, ProjectDetails);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "loadNextProject", function () {
      var wrapper = document.querySelector("#Detailwrapper");

      _this.animateUnMountToProjectDetails(wrapper, document.querySelector("#mobile_detail_next_picture"));

      _this.setState({
        loadNextProject: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateUnMountToProjectDetails", function (wrapper, detailNextPicture) {
      var main_wrapper = document.querySelector("#main_wrapper");
      detailNextPicture.style = "opacity:0";
      detailNextPicture.animate([{
        opacity: 1
      }, {
        opacity: 0
      }], {
        duration: 300,
        easing: "ease-out"
      });
      var animation = main_wrapper.animate([{
        left: "calc(-".concat(_this.state.currentpic * nextMultiplier, "vw - 20px")
      }, {
        left: "-100%"
      }], {
        duration: 1000,
        easing: "ease-out"
      });

      animation.onfinish = function () {
        wrapper.remove();
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "returnToOverview", function () {
      window.removeEventListener("resize", _this.WindowEventHandler); //remove event listener -> to prevent errors

      var timeout = 0;
      if (_this.state.currentpic != 0) timeout = 1000; //so the page gets time to scroll back to the first image

      _this.nextPicture(null, -1 * _this.state.currentpic); //wait until it is scrolled back to the first img


      setTimeout(function () {
        var mainimg = document.querySelector("#main_wrapper #Mainimg");
        var secondimg = document.querySelectorAll("#main_wrapper > div")[1];
        var footer = document.querySelector("#DetailsFooter"); //animate footer

        footer.style = "position:relative";
        footer.animate([{
          top: 0
        }, {
          top: "calc(100% + 140px)"
        }], {
          duration: 1001,
          easing: "ease-out"
        }); //animate right side

        secondimg.animate([{
          marginLeft: nextMultiplier - 100 + "vw"
        }, {
          marginLeft: 0
        }], {
          duration: 1001,
          easing: "ease-out"
        }); //animate main img

        document.querySelector("#main_wrapper").classList.add("main_wrapper_return_to_overview");
        mainimg.animate([{
          clipPath: "inset(0)"
        }, {
          clipPath: "inset(5%)"
        }], {
          duration: 1000,
          easing: "ease-out"
        });

        _this.setState({
          returnToOverview: true
        });
      }, timeout);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "updateProgressBar", function (index) {
      document.querySelector("#DetailsFooter #DetailsProgressLine").style = "width: ".concat(_this.perCentStep * index, "%");
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "nextPicture", function (event, add) {
      if (_this.state.currentpic + add >= 0 && _this.state.currentpic + add < _this.state.projects.images.length && !BlockNextImage) {
        var realindex = _this.state.projects.calcCurrentPictureInRealIndex(_this.state.currentpic); //remove highlight of old


        document.querySelectorAll(".centeritem")[realindex].classList.remove("showFull");

        _this.setState({
          currentpic: _this.state.currentpic + add
        }, function () {
          realindex = realindex + add;

          _this.updateProgressBar(realindex);

          document.querySelector("#main_wrapper").style = "width: ".concat(_this.state.projects.images.length * nextMultiplier + 100, "vw; left: calc(-").concat(_this.state.currentpic * nextMultiplier, "vw - 20px)"); //add highlight to new

          document.querySelectorAll(".centeritem")[realindex].classList.add("showFull");

          if (_this.state.projects.isMp4(_this.state.currentpic)) {
            lastMP4 = document.querySelector("#video".concat(_this.state.projects.getMp4id(_this.state.currentpic)));
            lastMP4.play();
          } else if (lastMP4 !== null) {
            lastMP4.pause();
            lastMP4 = null;
          }
        });

        BlockNextImage = true;
        setTimeout(function () {
          return BlockNextImage = false;
        }, 1000);
      } else if (_this.state.currentpic + add >= _this.state.projects.images.length && !BlockNextImage) {
        //play "end of collection animation"
        var mainwrapper = document.querySelector("#main_wrapper");
        mainwrapper.animate([{
          left: "calc(-".concat(_this.state.currentpic * nextMultiplier, "vw - 20px)")
        }, {
          left: "calc(-".concat(_this.state.currentpic * nextMultiplier, "vw - 110px)")
        }, {
          left: "calc(-".concat(_this.state.currentpic * nextMultiplier, "vw - 20px)")
        }], {
          duration: 900,
          easing: "ease-out"
        });
        BlockNextImage = true;
        setTimeout(function () {
          return BlockNextImage = false;
        }, 900);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateMount", function () {
      //animate footer
      var footer = document.querySelector("#DetailsFooter");
      footer.style = "position:relative";
      var footeranim = footer.animate([{
        top: "calc(100% + 140px)"
      }, {
        top: 0
      }], {
        duration: 1000,
        delay: 500,
        easing: "ease-out"
      });

      footeranim.onfinish = function () {
        return footer.style = "";
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateMountFromProjectDetails", function () {
      var main_wrapper = document.querySelector("#main_wrapper");
      main_wrapper.animate([{
        left: "100vw"
      }, {
        left: "calc(-".concat(_this.state.currentpic * nextMultiplier, "vw - 20px")
      }], {
        duration: 1000,
        easing: "ease-out"
      });
    });

    _this.state = {
      projects: new Project(props.currentProject),
      currentpic: 0,
      returnToOverview: false,
      loadNextProject: false
    };
    _this.lethargy = new lethargy__WEBPACK_IMPORTED_MODULE_13__["Lethargy"]();
    _this.perCentStep = 100 / (_this.state.projects.images.length - 1);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(ProjectDetails, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "Detailwrapper",
        onWheel: function onWheel(e) {
          if (_this2.lethargy.check(e) === false) return;
          if (e.deltaY < 0) _this2.nextPicture(e, -1);else _this2.nextPicture(e, 1);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "projectDetailWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "head_items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.returnToOverview
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "logo",
        className: "full_logo"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        id: "main_wrapper",
        style: {
          width: "".concat(this.state.projects.images.length * 100, "vw"),
          left: "-20px"
        }
      }, this.state.projects.images.map(function (image, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: "detailImage_".concat(i),
          className: "toSmallToPreview"
        }, _this2.state.projects.getImageAt(i));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        id: "project_overview_arrows"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "left_arrow",
        onClick: function onClick(ev) {
          return _this2.nextPicture(ev, -1);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: right_arrow
      })), this.state.projects.calcCurrentPictureInRealIndex(this.state.currentpic) >= this.state.projects.images.length - 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.loadNextProject();
        },
        id: "mobile_detail_next_picture"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "n\xE4chstes Projekt >")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "right_arrow",
        onClick: function onClick(ev) {
          return _this2.nextPicture(ev, 1);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: right_arrow
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("footer", {
        id: "DetailsFooter"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "DetailsFooterBase"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "DetailsFooterBaseTitle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, this.state.projects.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "detailsline",
        id: "DetailsProgressLine"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "detailsline"
      })))))), this.state.returnToOverview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_12__["default"], {
        removeDetailWrapper: true,
        currentProjectNumber: this.props.currentProjectNumber,
        lastProjectNumber: this.props.lastProjectNumber
      }) : null, this.state.loadNextProject ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ProjectDetails, {
        calledFromProjectDetails: true,
        currentProject: this.props.allProjects.getProjectAt(this.props.currentProjectNumber + 1),
        currentProjectNumber: this.props.currentProjectNumber + 1,
        lastProjectNumber: this.props.lastProjectNumber + 1,
        allProjects: this.props.allProjects
      }) : null);
    }
  }, {
    key: "removeOverview",
    value: function removeOverview() {
      try {
        var wrapper = document.querySelector("#wrapper");
        setTimeout(function () {
          wrapper.remove();
        }, 900); //timeout so this component has enough time to render
      } catch (e) {
        console.error(e);
      }

      ;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (this.props.calledFromProjectDetails) {
        var wrapper = document.querySelectorAll("#main_wrapper")[1];
        var left = document.querySelectorAll("#detail_description_text")[1];
        wrapper.classList.add("hide");
        setTimeout(function () {
          wrapper.classList.remove("hide");

          _this3.animateMountFromProjectDetails();

          window.addEventListener("resize", _this3.WindowEventHandler);

          _this3.updateProgressBar(_this3.state.currentpic);
        }, 1100);
      } else {
        this.animateMount();

        try {
          this.removeOverview();
        } catch (e) {
          console.error(e);
        }

        this.updateProgressBar(this.state.currentpic);
      }
    }
  }]);

  return ProjectDetails;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProjectDetails);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18);
/* harmony import */ var _css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_SubPage_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19);
/* harmony import */ var _css_SubPage_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_SubPage_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_impressum_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60);
/* harmony import */ var _css_impressum_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_impressum_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_MobileSubPage_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64);
/* harmony import */ var _css_MobileSubPage_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_MobileSubPage_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var Impressum = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Impressum, _Component);

  var _super = _createSuper(Impressum);

  function Impressum(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Impressum);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "returnToMainPage", function () {
      _this.setState({
        returnToMainPage: true
      });

      _this.animateUnMount();

      setTimeout(function () {
        return document.querySelector("#impressumWrapper").remove();
      }, 1000);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "animateMount", function () {
      var main = document.querySelector(".main_aside");
      var footer = document.querySelector(".FooterSubPage");
      main.style = "position:relative";
      main.animate([{
        opacity: 0,
        top: "30px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 500,
        delay: 980
      });
      footer.style = "position:relative";
      footer.animate([{
        opacity: 0,
        top: "40px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 1000,
        delay: 980
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "animateUnMount", function () {
      var main = document.querySelector(".main_aside");
      var footer = document.querySelector(".FooterSubPage");
      main.style = "position:relative;opacity:0";
      main.animate([{
        opacity: 0,
        top: "30px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 400,
        direction: "reverse"
      });
      footer.style = "position:relative; opacity:0";
      footer.animate([{
        opacity: 0,
        top: "40px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 800,
        direction: "reverse"
      });
    });

    _this.state = {
      returnToMainPage: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Impressum, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "impressumWrapper",
        className: "subWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "projectDetailWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "head_items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: this.returnToMainPage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "logo",
        className: "full_logo"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "main_aside"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Fabian Schwarzinger"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Grafikdesigner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "3920 Gro\xDF Gerungs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Wiesensfeld 20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "\xD6sterreich")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("footer", {
        className: "FooterSubPage"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "DetailsFooterBase"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "DetailsFooterBaseTitle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "IMPRESSUM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "detailsline"
      })))))), this.state.returnToMainPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_13__["default"], {
        calledFromSubPage: true,
        currentProjectNumber: this.props.currentProjectNumber | 0,
        lastProjectNumber: this.props.lastProjectNumber | -1
      }) : null);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animateMount();
    }
  }]);

  return Impressum;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Impressum);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22);
/* harmony import */ var _css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
/* harmony import */ var _css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_footerSubPage_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_SubPage_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19);
/* harmony import */ var _css_SubPage_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_SubPage_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_ueber_mich_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62);
/* harmony import */ var _css_ueber_mich_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_ueber_mich_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_MobileAboutMe_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(112);
/* harmony import */ var _css_MobileAboutMe_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_MobileAboutMe_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lethargy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15);
/* harmony import */ var lethargy__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lethargy__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_logo_full_svg__WEBPACK_IMPORTED_MODULE_15__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }











var right_arrow = __webpack_require__(16);

var sexyBackgroundImage = __webpack_require__(26);

var Lebenslauf = __webpack_require__(63);

var MainElements = /*#__PURE__*/function () {
  function MainElements() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, MainElements);

    this.mainElements = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "TextElement rightText"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "gr\xFC\xDF gott!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "TextElement"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "gr\xFC\xDF gott!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Ich bin ein Designer stammend aus dem Waldviertel, einem idyllischen Fleck im Osten \xD6sterreichs."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Meine Ausbildung habe ich an der h\xF6heren technischen Lehranstalt f\xFCr Grafik- & Kommunikationsdesign in Linz mit Auszeichnung abgeschlossen. Seitdem verfolge ich das Ziel, die Welt Tag f\xFCr Tag zu versch\xF6nern.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "TextElement"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "hobby? los!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "(Dystopische) Filme schauen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Boxen / Fitness"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Mundharmonika spielen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Makro- & Produktfotografie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Techniknews aufsaugen")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "TextElement"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "ich in 3 worten"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Organisationstalent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Fairness-Freak"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Sarkasmus-Apostel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "TextElement"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "noch nicht genug?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Dann downloade gleich meinen ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
      className: "linkInTextElement",
      href: Lebenslauf,
      download: "Schwarzinger-Lebenslauf.pdf"
    }, "Lebenslauf "), "und schreibe mir eine ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
      href: "mailto:mail@fabianschwarzinger.work",
      className: "linkInTextElement"
    }, "E-Mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      className: "italic"
    }, "!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Wir k\xF6nnen uns dann gleich an die Arbeit machen, die Welt gemeinsam zu versch\xF6nern!"))];
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(MainElements, [{
    key: "getElementAt",
    value: function getElementAt(index) {
      if (index % this.mainElements.length < 0) {
        return this.mainElements[this.mainElements.length + index % this.mainElements.length];
      }

      return this.mainElements[index % this.mainElements.length];
    }
  }, {
    key: "getRealIndex",
    value: function getRealIndex(index) {
      if (index % this.mainElements.length < 0) {
        return this.mainElements.length + index % this.mainElements.length;
      }

      return index % this.mainElements.length;
    }
  }]);

  return MainElements;
}();

var Branding = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(Branding, _Component);

  var _super = _createSuper(Branding);

  function Branding(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Branding);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "updateProgressBar", function (index) {
      document.querySelector("#aboutWrapper #DetailsProgressLine").style = "width: ".concat(_this.perCentStep * index, "%");
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateNextElement", function () {
      var lastElement = document.querySelector("#aboutWrapper #lastTextElement");
      var currentElement = document.querySelector("#aboutWrapper #currentTextElement");

      if (_this.state.currentTextElement > _this.state.lastTextElement) {
        lastElement.animate([{
          opacity: 1,
          left: 0 + "px",
          zIndex: 1
        }, {
          opacity: 0,
          left: -400 + "px",
          zIndex: 1
        }], {
          duration: 600,
          easing: "ease-out"
        });
        currentElement.animate([{
          opacity: 0,
          left: 300 + "px"
        }, {
          opacity: 0,
          left: 300 + "px"
        }, {
          opacity: 1,
          left: 0 + "px"
        }], {
          duration: 1200,
          easing: "ease-out"
        });
      } else {
        lastElement.animate([{
          opacity: 1,
          left: 0 + "px",
          zIndex: 1
        }, {
          opacity: 0,
          left: 300 + "px",
          zIndex: 1
        }], {
          duration: 600,
          easing: "ease-out"
        });
        currentElement.animate([{
          opacity: 0,
          left: -400 + "px"
        }, {
          opacity: 0,
          left: -400 + "px"
        }, {
          opacity: 0,
          left: -250 + "px"
        }, {
          opacity: 1,
          left: 0 + "px"
        }], {
          duration: 1200,
          easing: "ease-out"
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateLastHasReached", function (add) {
      var currentElement = document.querySelector("#aboutWrapper #currentTextElement");

      if (add < 0) {
        currentElement.animate([{
          opacity: 1,
          left: 0 + "px"
        }, {
          opacity: 1,
          left: 90 + "px"
        }, {
          opacity: 1,
          left: 0 + "px"
        }], {
          duration: 1000,
          easing: "ease-out"
        });
      }

      if (add > 0) {
        currentElement.animate([{
          opacity: 1,
          left: 0 + "px"
        }, {
          opacity: 1,
          left: -90 + "px"
        }, {
          opacity: 1,
          left: 0 + "px"
        }], {
          duration: 1000,
          easing: "ease-out"
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "nextElement", function () {
      var add = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      //only if there are no running animations..
      if (document.querySelector("#aboutWrapper #currentTextElement").getAnimations().length <= 0) {
        if (_this.state.currentTextElement + add < _this.state.textElements.mainElements.length && _this.state.currentTextElement + add >= 0) {
          _this.setState({
            currentTextElement: _this.state.currentTextElement + add,
            lastTextElement: _this.state.currentTextElement
          }, function () {
            if (_this.state.currentTextElement === 1) _this.PositionSexyImageLeft();else if (_this.state.currentTextElement === 0) _this.PositionSexyImageInitial();

            _this.updateProgressBar(_this.state.textElements.getRealIndex(_this.state.currentTextElement));

            _this.animateNextElement();
          });
        } else {
          _this.animateLastHasReached(add);
        }
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "goToKontaktPage", function () {
      _this.setState({
        goToContact: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "returnToMainPage", function () {
      _this.setState({
        returnToMainPage: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "animateMount", function () {
      var main = document.querySelector("#aboutWrapper .main_aside");
      var footer = document.querySelector("#aboutWrapper .FooterSubPage");
      var arrows = document.querySelector("#aboutWrapper #project_overview_arrows");
      arrows.style = "position:relative; opacity: 0";
      arrows.animate([{
        opacity: 0
      }, {
        opacity: 1
      }], {
        duration: 1000,
        delay: 1000,
        easing: "ease-out"
      });
      main.style = "position:relative; opacity: 0";
      main.animate([{
        opacity: 0,
        top: "30px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 500,
        delay: 1000
      });
      footer.style = "position:relative; opacity: 0";
      footer.animate([{
        opacity: 0,
        top: "40px"
      }, {
        opacity: 1,
        top: 0
      }], {
        duration: 1000,
        delay: 1000
      });
      setTimeout(function () {
        footer.style = "";
        main.style = "";
        arrows.style = "";
      }, 1001);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "ScaleSexyImage", function () {
      var body = document.body;
      var image = document.querySelector("#SexyBackgroundImage");

      if (image.clientWidth === 0) {
        setTimeout(_this.ScaleSexyImage, 30);
        return;
      }

      image.style = "left: ".concat(body.clientWidth / 3 - image.clientWidth / 3.5, "px");
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "PositionSexyImageInitial", function () {
      var body = document.body;
      var image = document.querySelector("#SexyBackgroundImage");
      image.animate([{
        left: image.style.left
      }, {
        left: body.clientWidth / 3 - image.clientWidth / 3.5 + "px"
      }], {
        duration: 1200,
        easing: "ease-out"
      });

      _this.ScaleSexyImage();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "PositionSexyImageLeft", function () {
      //todo animation
      var image = document.querySelector("#SexyBackgroundImage");
      image.animate([{
        left: image.style.left
      }, {
        left: -image.clientWidth / 2 + "px"
      }], {
        duration: 1200,
        easing: "ease-out"
      });
      image.style = "left: ".concat(-image.clientWidth / 2, "px");
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "componentDidMount", function () {
      _this.animateMount();

      document.querySelector("#aboutWrapper").style = "position:relative;top:-100vh";

      _this.ScaleSexyImage();

      window.addEventListener("resize", _this.ScaleSexyImage);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "componentWillUnmount", function () {
      window.removeEventListener("resize", _this.ScaleSexyImage);
    });

    _this.state = {
      returnToMainPage: false,
      goToContact: false,
      textElements: new MainElements(),
      currentTextElement: 0,
      lastTextElement: -1
    };
    _this.lethargy = new lethargy__WEBPACK_IMPORTED_MODULE_14__["Lethargy"]();
    _this.perCentStep = 100 / (_this.state.textElements.mainElements.length - 1);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Branding, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "aboutWrapper",
        onWheel: function onWheel(e) {
          if (_this2.lethargy.check(e) === false) return;

          if (!_this2.state.showDetails) {
            if (e.deltaY < 0) _this2.nextElement(-1);else _this2.nextElement(1);
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "projectDetailWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "head_items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: this.returnToMainPage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
        alt: "logo",
        className: "full_logo"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "main_aside"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "currentTextElement"
      }, this.state.textElements.getElementAt(this.state.currentTextElement)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "lastTextElement"
      }, this.state.textElements.getElementAt(this.state.lastTextElement)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        id: "project_overview_arrows"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "left_arrow",
        onClick: function onClick(ev) {
          return _this2.nextElement(-1);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: right_arrow
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "right_arrow",
        onClick: function onClick(ev) {
          return _this2.nextElement(1);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: right_arrow
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("footer", {
        className: "FooterSubPage"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "DetailsFooterBase"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "detailsline",
        id: "DetailsProgressLine"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "detailsline"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "DetailsSubText"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: Lebenslauf,
        target: "_blank"
      }, "lebenslauf")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: this.goToKontaktPage
      }, "kontakt")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "SexyBackgroundImage"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: sexyBackgroundImage,
        alt: "Bild von Fabian"
      }))), this.state.returnToMainPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
        calledFromAbout: true,
        currentProjectNumber: this.props.currentProjectNumber | 0,
        lastProjectNumber: this.props.lastProjectNumber | -1
      }) : null, this.state.goToContact ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
        calledFromAbout: true,
        currentProjectNumber: this.props.currentProjectNumber | 0,
        lastProjectNumber: this.props.lastProjectNumber | -1
      }) : null);
    }
  }]);

  return Branding;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Branding);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(4);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(5);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(7);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(3);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(42);

// EXTERNAL MODULE: D:/Documents/Projekte/2021/Webseite_Fabian_Schwarzinger/Program2/PorfolioFabian/src/components/404.js
var _404 = __webpack_require__(29);

// EXTERNAL MODULE: D:/Documents/Projekte/2021/Webseite_Fabian_Schwarzinger/Program2/PorfolioFabian/src/components/ReactSuspenseWrapper.js
var ReactSuspenseWrapper = __webpack_require__(30);

// EXTERNAL MODULE: D:/Documents/Projekte/2021/Webseite_Fabian_Schwarzinger/Program2/PorfolioFabian/src/components/LoadingScreen.js
var LoadingScreen = __webpack_require__(20);

// EXTERNAL MODULE: D:/Documents/Projekte/2021/Webseite_Fabian_Schwarzinger/Program2/PorfolioFabian/src/components/circle.js
var circle = __webpack_require__(31);

// EXTERNAL MODULE: D:/Documents/Projekte/2021/Webseite_Fabian_Schwarzinger/Program2/PorfolioFabian/src/components/index.js
var components = __webpack_require__(13);

// EXTERNAL MODULE: D:/Documents/Projekte/2021/Webseite_Fabian_Schwarzinger/Program2/PorfolioFabian/src/components/Mobile/index.js
var Mobile = __webpack_require__(14);

// CONCATENATED MODULE: D:/Documents/Projekte/2021/Webseite_Fabian_Schwarzinger/Program2/PorfolioFabian/src/BeforeComponentIndexWrapper.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var BeforeComponentIndexWrapper_BeforeComponentIndexWrapper = /*#__PURE__*/function (_Component) {
  inherits_default()(BeforeComponentIndexWrapper, _Component);

  var _super = _createSuper(BeforeComponentIndexWrapper);

  function BeforeComponentIndexWrapper(props) {
    classCallCheck_default()(this, BeforeComponentIndexWrapper);

    return _super.call(this, props);
  }

  createClass_default()(BeforeComponentIndexWrapper, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, typeof window !== "undefined" && window.matchMedia("(max-width: 1024px)").matches ? /*#__PURE__*/external_react_default.a.createElement("div", {
        id: "mobileWrapper"
      }, /*#__PURE__*/external_react_default.a.createElement(Mobile["default"], null)) : /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(circle["default"], null), /*#__PURE__*/external_react_default.a.createElement(components["default"], null)));
    }
  }]);

  return BeforeComponentIndexWrapper;
}(external_react_["Component"]);

/* harmony default export */ var src_BeforeComponentIndexWrapper = (BeforeComponentIndexWrapper_BeforeComponentIndexWrapper);
// CONCATENATED MODULE: D:/Documents/Projekte/2021/Webseite_Fabian_Schwarzinger/Program2/PorfolioFabian/src/App.js






function App_createSuper(Derived) { var hasNativeReflectConstruct = App_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function App_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var App_App = /*#__PURE__*/function (_Component) {
  inherits_default()(App, _Component);

  var _super = App_createSuper(App);

  function App(props) {
    classCallCheck_default()(this, App);

    return _super.call(this, props);
  }

  createClass_default()(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement(ReactSuspenseWrapper["default"], null, /*#__PURE__*/external_react_default.a.createElement(LoadingScreen["default"], null), /*#__PURE__*/external_react_default.a.createElement(router_["Router"], null, /*#__PURE__*/external_react_default.a.createElement(src_BeforeComponentIndexWrapper, {
        path: "/"
      }), /*#__PURE__*/external_react_default.a.createElement(_404["default"], {
        path: "*"
      })));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }]);

  return App;
}(external_react_["Component"]);

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App_App);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(39);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(25);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("D:\\Documents\\Projekte\\2021\\Webseite_Fabian_Schwarzinger\\Program2\\PorfolioFabian\\node_modules\\react-static\\lib\\browser");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Imports
var urlEscape = __webpack_require__(51);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(52));

// Module
exports.push([module.i, "@font-face {\r\n   font-family: Coconut;\r\n   src: url(" + ___CSS_LOADER_URL___0___ + ");\r\n   font-weight: normal;\r\n}\r\n\r\n#loadingScreen {\r\n   position: absolute;\r\n   top: 0;\r\n   left: 0;\r\n   height: 100%;\r\n   width: 100%;\r\n   background-color: var(--background);\r\n   z-index: 6;\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n}\r\n\r\n.loadingItem{\r\n   width:80px;\r\n   height: 80px;\r\n}\r\n\r\n.loadingItem img {\r\n   width: 80px;\r\n   display: block;\r\n   padding:0;\r\n   margin:0;\r\n}\r\n\r\n#loading_empty {\r\n   height: 100%;\r\n   opacity: 0.2;\r\n}\r\n\r\n#loading_full {\r\n   height: 100%;\r\n   width:80px;\r\n   position:relative;\r\n   bottom:80px;\r\n   -webkit-animation: 2s fillloading ease-in-out;\r\n           animation: 2s fillloading ease-in-out;\r\n}\r\n\r\n#loadingScreen #invisibleLoading{\r\n   opacity: 0 !important;\r\n   position: absolute;\r\n}\r\n\r\n@-webkit-keyframes fillloading {\r\n   from {\r\n      -webkit-clip-path: inset(100% 0 0 0);\r\n              clip-path: inset(100% 0 0 0); \r\n   }\r\n   to {\r\n      -webkit-clip-path: inset(0);\r\n              clip-path: inset(0);\r\n   }\r\n}\r\n\r\n@keyframes fillloading {\r\n   from {\r\n      -webkit-clip-path: inset(100% 0 0 0);\r\n              clip-path: inset(100% 0 0 0); \r\n   }\r\n   to {\r\n      -webkit-clip-path: inset(0);\r\n              clip-path: inset(0);\r\n   }\r\n}", ""]);



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Coconat-Regular.7d420524.otf";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/main.030f879b.jpg";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/main.a853243e.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/main.9dcb30f2.jpg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/main.7dcb6648.jpg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, "#Detailwrapper{\r\n   background-color: var(--background);\r\n}\r\n\r\n#main_wrapper {\r\n   position: relative;\r\n   transition: left .9s ease-out !important;\r\n}\r\n\r\n#main_wrapper>div {\r\n   height: 100%;\r\n   width: 100vw;\r\n   float: left;\r\n}\r\n\r\n#main_wrapper>div img, #main_wrapper>div video {\r\n   opacity: 0.6;\r\n   transition: opacity 0.6s\r\n}\r\n\r\n#main_wrapper>div:not(:first-child) {\r\n   margin-left: -40vw;\r\n}\r\n\r\n#main_wrapper>.toSmallToPreview:not(:first-child) {\r\n   margin-left: 0;\r\n}\r\n\r\n#main_wrapper .centeritem {\r\n   display: block;\r\n   margin: auto;\r\n   -o-object-fit: contain;\r\n      object-fit: contain;\r\n   height: 100%;\r\n}\r\n\r\n.main_wrapper_return_to_overview #Mainimg {\r\n   -webkit-clip-path: inset(5%);\r\n           clip-path: inset(5%);\r\n}\r\n\r\nheader {\r\n   width: calc(100vw - 140px)\r\n}\r\n\r\n#detail_description_text {\r\n   position: fixed;\r\n   top: calc(11% + 70px);\r\n   left: 75px;\r\n   width: calc(40% - 200px);\r\n   margin-right: 30px;\r\n   height: calc(78% - 140px);\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n   flex-wrap: wrap;\r\n   word-wrap: break-word;\r\n   transition: none !important;\r\n   transition: opacity 0.3s !important;\r\n}\r\n\r\n#detail_next_picture {\r\n   position: fixed;\r\n   display: inline;\r\n   top: calc(50% - 10px);\r\n   right: 75px;\r\n   word-wrap: break-word;\r\n   transition: none !important;\r\n   transition: opacity 0.3s !important;\r\n   cursor: pointer;\r\n}\r\n\r\n#detail_description_text p, #detail_description_text h2 {\r\n   margin: 0;\r\n}\r\n\r\n#detail_description_text h2 {\r\n   font-family: Coconut;\r\n   font-size: 14pt;\r\n   margin-bottom: 10px;\r\n}\r\n\r\n#detail_description_text p, #detail_next_picture p {\r\n   font-family: ClarikaProGrotesque;\r\n   font-size: 12pt;\r\n   margin-left: 10px;\r\n}\r\n\r\n#detail_next_picture p{\r\n   display: inline;\r\n}\r\n\r\n.showFull {\r\n   opacity: 1 !important;\r\n}\r\n\r\n.hide {\r\n   opacity: 0 !important;\r\n}\r\n\r\n.displayNone {\r\n   display: none;\r\n   opacity: 0 !important;\r\n}\r\n\r\n/* ------------------- Footer ------------------- */\r\n\r\n#DetailsFooter{\r\n   width: 100vw;\r\n   margin-left:-70px;\r\n}\r\n\r\n#DetailsFooter {\r\n   display: flex;\r\n   align-items: center;\r\n   margin-top: 20px;\r\n}\r\n\r\n#DetailsFooter>div {\r\n   width: 100%;\r\n}\r\n\r\n#DetailsFooter #DetailsFooterBase {\r\n   width: 100%;\r\n}\r\n\r\n#DetailsFooter .detailsline {\r\n   width: 100%;\r\n}\r\n\r\n#DetailsFooter #DetailsFooterBase .detailsline {\r\n   border-bottom: 1px solid var(--foreground);\r\n   position: relative;\r\n   bottom: 30px;\r\n}\r\n\r\n#DetailsFooter #DetailsFooterBase #DetailsFooterBaseTitle {\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n   height: 60px;\r\n   font-family: Coconut;\r\n}\r\n\r\n#DetailsFooter #DetailsFooterBase #DetailsFooterBaseTitle p {\r\n   display: inline;\r\n   background-color: var(--background);\r\n   z-index: 1;\r\n   font-family: Coconut;\r\n   padding-left: 10px;\r\n   padding-right: 10px;\r\n}\r\n\r\n#DetailsFooter #DetailsProgressLine {\r\n   width: 0;\r\n   transition: width 1s;\r\n}\r\n\r\n/* ------------------- End Footer ------------------- */", ""]);



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Imports
var urlEscape = __webpack_require__(51);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(106));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(107));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(108));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(109));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(52));

// Module
exports.push([module.i, "@font-face{\r\n   font-family: ClarikaProGrotesque;\r\n   src: url(" + ___CSS_LOADER_URL___0___ + ");\r\n   font-weight: normal;\r\n}\r\n@font-face{\r\n   font-family: ClarikaProGrotesque;\r\n   src: url(" + ___CSS_LOADER_URL___1___ + ");\r\n   font-weight: bold;\r\n}\r\n@font-face{\r\n   font-family: ClarikaProGrotesque;\r\n   src: url(" + ___CSS_LOADER_URL___2___ + ");\r\n   font-style:italic;\r\n   font-weight: bold;\r\n}\r\n@font-face{\r\n   font-family: ClarikaProGrotesque;\r\n   src: url(" + ___CSS_LOADER_URL___3___ + ");\r\n   font-style:italic;\r\n}\r\n\r\n@font-face{\r\n   font-family: Coconut;\r\n   src: url(" + ___CSS_LOADER_URL___4___ + ");\r\n   font-weight: normal;\r\n}\r\n\r\n:root{\r\n   --background:#003a38;\r\n   --foreground: #fad2aa;\r\n}\r\n* {\r\n   scroll-behavior: smooth;\r\n   overflow:hidden;\r\n   font-family: Coconut;\r\n } \r\nhtml{\r\n\r\n   padding: 0;\r\n   overflow: hidden;\r\n}\r\n\r\nbody{\r\n   background-color: black;\r\n   color: var(--foreground);\r\n   padding:0;\r\n   margin:0;\r\n   position:relative;\r\n}\r\n\r\na{\r\n   text-decoration: none;\r\n   color: var(--foreground);\r\n}\r\na:active{\r\n   border:none;\r\n}\r\n\r\n#wrapper{\r\n   background-color: var(--background);\r\n}\r\n\r\n#root{height: 100%;}\r\n#projectDetailWrapper{\r\n   display: grid;\r\n   height: calc(100vh - 140px);\r\n   padding:70px;\r\n   grid-template-rows: 1fr 5fr 1fr;\r\n   grid-template-areas:\r\n   \"header\"\r\n   \"project_overview\"\r\n   \"footer\";\r\n}\r\n\r\nheader *, footer *{\r\n   font-family: ClarikaProGrotesque;\r\n   font-size:14pt;\r\n}\r\n\r\nheader{\r\n   display: flex;\r\n   grid-area: header;\r\n   /* background-color: blue; */\r\n   align-items: flex-start ;\r\n}\r\n#head_items{\r\n   height:70px;\r\n   width:100%;\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: flex-start;\r\n}\r\n\r\nfooter{\r\n   display: flex;\r\n   grid-area: footer;\r\n   /* background-color: red; */\r\n}\r\n#footer_overview_items{\r\n   display: flex;\r\n   width:100%;\r\n   align-items: flex-end;\r\n   justify-content: space-between;\r\n}\r\n#project_overview_wrapper{\r\n   grid-area: project_overview;\r\n   /* background-color: yellow; */\r\n}\r\n\r\n\r\n.full_logo{\r\n   width: 153px;\r\n   -o-object-fit: contain;\r\n      object-fit: contain;\r\n}\r\n.right_arrow, .left_arrow{\r\n   width:53px;\r\n}\r\n\r\n.left_arrow img {\r\n   transform: rotate(180deg);\r\n}", ""]);



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, "#project_overview_wrapper {\r\n   width: calc(100% + 340px);\r\n   margin-left:-170px;\r\n   height: 100%;\r\n   display: flex;\r\n   flex-wrap: wrap;\r\n   justify-content: center;\r\n   align-items: center;\r\n}\r\n\r\n#project_overview_section {\r\n   height: 100%;\r\n   text-align: center;\r\n\r\n}\r\n#picturebefore{\r\n   position:relative;\r\n   bottom:100%;\r\n   z-index: 1;\r\n}\r\n#currentpicture{\r\n   z-index: 2;\r\n}\r\n\r\n#footerOverview a{\r\n   cursor: pointer;\r\n}\r\n\r\n#project_overview_section img {\r\n   cursor: pointer;\r\n   display: block;\r\n   margin-right: 20px;\r\n   margin-left:20px;\r\n   height: 100%;\r\n   position: relative;\r\n   transform: scale(1) translateZ(0);\r\n   -webkit-backface-visibility: hidden;\r\n           backface-visibility: hidden;\r\n   -o-object-fit: contain;\r\n      object-fit: contain;\r\n   transition: 0.3s ease-out;\r\n   margin:auto;\r\n   -webkit-clip-path: inset(5% 5%  5%  5%);\r\n           clip-path: inset(5% 5%  5%  5%);\r\n   transition: -webkit-clip-path 1s ease-out;\r\n   transition: clip-path 1s ease-out;\r\n   transition: clip-path 1s ease-out, -webkit-clip-path 1s ease-out;\r\n}  \r\n\r\n#subtext_currentpicture{\r\n   display: flex;\r\n   width: 100%;\r\n   justify-content: center;\r\n}\r\n\r\n.project_overview_section_clicked img{\r\n   -webkit-clip-path: inset(0) !important;\r\n           clip-path: inset(0) !important;\r\n}\r\n\r\n\r\n.line {\r\n   border-bottom: 1px solid var(--foreground);\r\n   height: 0px;\r\n   width: 50%;\r\n   -webkit-animation: lineanimation 3s ease-in-out 0s ;\r\n           animation: lineanimation 3s ease-in-out 0s ;\r\n   position:absolute;\r\n   top: calc(50% + 1px);\r\n   z-index: 0;\r\n}\r\n\r\n.lineright{\r\n   right:0;\r\n}\r\n.lineleft{\r\n   left: 0;\r\n}\r\n\r\n#marquee {\r\n   font-family: font;\r\n   z-index: 1;\r\n   height: 100%;\r\n   position: absolute;\r\n   top:0;\r\n   left:0;\r\n   display:flex;\r\n   align-items: center;\r\n   font-size: 130pt;\r\n   pointer-events: none;\r\n   white-space: nowrap;\r\n}\r\n\r\n.hide{\r\n   opacity: 0;\r\n}\r\n\r\n#projectDetailWrapper > *{\r\n   transition: 0.3s;\r\n}\r\n.marqueeactive > *{\r\n   opacity:0.3 !important;\r\n}\r\n.marqueeactive #marquee{\r\n   opacity: 1 !important;\r\n}\r\n\r\n.marquee_text{\r\n   padding-right: 130pt; \r\n}\r\n\r\n@-webkit-keyframes lineanimation {\r\n   0% {\r\n      width: 0;\r\n   }\r\n   100% {\r\n      width: 50%;\r\n   }\r\n}\r\n\r\n@keyframes lineanimation {\r\n   0% {\r\n      width: 0;\r\n   }\r\n   100% {\r\n      width: 50%;\r\n   }\r\n}", ""]);



/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, "#impressumWrapper .main_aside p {\r\n font-family:  ClarikaProGrotesque;\r\n margin: 0;\r\n font-size: 13pt;\r\n}\r\n\r\n#impressumWrapper .main_aside div {\r\n   margin-top: 10px;\r\n  }", ""]);



/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, "#contacttel, #contactmail{\r\n   font-family: Coconut;\r\n   font-size: 16pt;\r\n   margin-top:10px;\r\n   margin-bottom: 10px;\r\n}\r\n\r\n#contactText{\r\n   margin-top: 20px;\r\n}\r\n\r\n#contactText p{\r\n   padding:0;\r\n   margin:0;\r\n   font-family: ClarikaProGrotesque;\r\n   font-size: 13pt;\r\n}", ""]);



/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, "#SexyBackgroundImage {\r\n   position:absolute;\r\n   top:0;\r\n   left:0;\r\n   z-index: -1;\r\n}\r\n#SexyBackgroundImage img{\r\n   -o-object-fit: contain;\r\n      object-fit: contain;\r\n   height: 100vh;\r\n}\r\n\r\n#aboutWrapper footer{\r\n   padding-top:30px;\r\n}\r\n\r\n#aboutWrapper .FooterSubPage{\r\n   margin-top: 0;\r\n}\r\n\r\n#aboutWrapper .FooterSubPage #DetailsFooterBase .detailsline {\r\n   bottom: 0px;\r\n}\r\n\r\n#aboutWrapper .DetailsSubText {\r\n   width: calc(100vw - 140px);\r\n   margin-left: 70px;\r\n   display: flex;\r\n   justify-content: space-between;\r\n}\r\n\r\n#aboutWrapper .main_aside {\r\n   display: block;\r\n}\r\n\r\n#aboutWrapper .TextElement h2 {\r\n   font-family: Coconut;\r\n   font-size: 14pt;\r\n}\r\n#aboutWrapper .TextElement p, #aboutWrapper .ElementLinkToNext{\r\n   font-family: ClarikaProGrotesque;\r\n   font-size: 14pt;\r\n   margin:0;\r\n   margin-top:5px;\r\n   margin-left: 20px;\r\n}\r\n\r\n#aboutWrapper .TextElement a {\r\n   font-family: ClarikaProGrotesque;\r\n   font-style: italic;\r\n   font-weight: bold;\r\n}\r\n\r\n#aboutWrapper .ElementLinkToNext {\r\n   margin-top:20px !important;\r\n}\r\n#aboutWrapper .ElementLinkToNext a{\r\n   font-family: ClarikaProGrotesque;\r\n   font-style: italic;\r\n}\r\n\r\n#aboutWrapper #lastTextElement{\r\n   position: absolute;\r\n   z-index: -1;\r\n   top:0;\r\n   opacity: 0;\r\n}\r\n\r\n#aboutWrapper #lastTextElement, #aboutWrapper #currentTextElement {\r\n   position: absolute;\r\n   width: 450px;\r\n}\r\n\r\n.italic{\r\n   font-family: ClarikaProGrotesque;\r\n   font-style: italic;\r\n}", ""]);



/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Schwarzinger_Lebenslauf.7ab6a56e.pdf";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, "#mobileWrapper .main_aside{\r\n   width: calc(100% - 20px);\r\n}\r\n\r\n#mobileWrapper .FooterSubPage{\r\n   width:100vw;\r\n   margin-left: -20px;\r\n}\r\n\r\n#mobileWrapper .main_aside > div{\r\n   padding-left: 20px;\r\n   padding-right: 20px;\r\n}\r\n\r\n#mobileWrapper #contacttel, #mobileWrapper #contactmail {\r\n   font-size: 14pt;\r\n}\r\n#mobileWrapper #contactText p{\r\n   font-size: 10pt;\r\n}", ""]);



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loading_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50);
/* harmony import */ var _css_loading_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_loading_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_loading_icon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);
/* harmony import */ var _img_loading_icon_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_loading_icon_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



 // --------------------------

var ProjectInformation = __webpack_require__(17);



var right_arrow = __webpack_require__(16);

var sexyBackgroundImage = __webpack_require__(26);

var ProjectList = /*#__PURE__*/function () {
  function ProjectList() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, ProjectList);

    this.projects = [];

    var _iterator = _createForOfIteratorHelper(ProjectInformation.projects),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var project = _step.value;
        this.projects.push(new Project(project));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(ProjectList, [{
    key: "getProjectAt",
    value: function getProjectAt(index) {
      if (index % this.projects.length < 0) {
        return this.projects[this.projects.length + index % this.projects.length];
      }

      return this.projects[index % this.projects.length];
    }
  }]);

  return ProjectList;
}();

var Project = function Project(information) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Project);

  this.title = information.title;
  this.textheading = information.textheading;
  this.subtext = information.subtext;
  this.image_extention = information.image_extention;
  this.titleImage = __webpack_require__(27)("./".concat(information.path, "/main.jpg"));
  this.images = [];

  for (var i = 0; i < information.count_imgs; i++) {
    this.images.push(__webpack_require__(28)("./".concat(information.path, "/img/").concat(i, ".").concat(information.image_extention[i % information.image_extention.length])));
  }
}; // --------------------------


var LoadingScreen = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0___default()(LoadingScreen, _Component);

  var _super = _createSuper(LoadingScreen);

  function LoadingScreen(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, LoadingScreen);

    _this = _super.call(this, props);
    _this.state = {
      projects: new ProjectList()
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(LoadingScreen, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "loadingScreen"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "loadingItem"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_loading_icon_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        id: "loading_empty",
        alt: "loading..."
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_loading_icon_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        id: "loading_full",
        alt: "loading..."
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "invisibleLoading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_8___default.a
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: right_arrow
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: sexyBackgroundImage
      }), this.state.projects.projects.map(function (project, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "loading_image_".concat(i)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: project.titleImage
        }));
      }), this.state.projects.projects.map(function (project, i) {
        return project.images.map(function (image, j) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            src: image,
            key: "loading_subimage_".concat(j)
          });
        });
      })));
    }
  }]);

  return LoadingScreen;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoadingScreen);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(41);

var _router = __webpack_require__(42);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
__webpack_require__(71);
module.exports = __webpack_require__(78);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(70)["default"];

var _require = __webpack_require__(44),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(44),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(72),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);
































Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 29))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/components/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 34))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(34);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/about";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/components/about.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/circle.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 31))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/circle.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/circle";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/components/circle.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/contact.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 21))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/contact.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/contact";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/components/contact.js';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/impressum.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/impressum.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/impressum";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/components/impressum.js';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 13))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/index";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/components/index.js';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/LoadingScreen.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 20))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/LoadingScreen.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/LoadingScreen";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/components/LoadingScreen.js';
var t_7 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Mobile/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 37))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Mobile/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(37);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Mobile/about";
  }
}), universalOptions);
t_7.template = '__react_static_root__/src/components/Mobile/about.js';
var t_8 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Mobile/contact.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Mobile/contact.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Mobile/contact";
  }
}), universalOptions);
t_8.template = '__react_static_root__/src/components/Mobile/contact.js';
var t_9 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Mobile/impressum.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 36))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Mobile/impressum.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Mobile/impressum";
  }
}), universalOptions);
t_9.template = '__react_static_root__/src/components/Mobile/impressum.js';
var t_10 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Mobile/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 14))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Mobile/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Mobile/index";
  }
}), universalOptions);
t_10.template = '__react_static_root__/src/components/Mobile/index.js';
var t_11 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Mobile/LoadingScreen.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/components/Mobile/LoadingScreen */).then(__webpack_require__.bind(null, 65))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Mobile/LoadingScreen.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(65);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Mobile/LoadingScreen";
  }
}), universalOptions);
t_11.template = '__react_static_root__/src/components/Mobile/LoadingScreen.js';
var t_12 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Mobile/ProjectDetails.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 35))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Mobile/ProjectDetails.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Mobile/ProjectDetails";
  }
}), universalOptions);
t_12.template = '__react_static_root__/src/components/Mobile/ProjectDetails.js';
var t_13 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/ProjectDetails.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/ProjectDetails.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/ProjectDetails";
  }
}), universalOptions);
t_13.template = '__react_static_root__/src/components/ProjectDetails.js';
var t_14 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/ReactSuspenseWrapper.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 30))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/ReactSuspenseWrapper.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/ReactSuspenseWrapper";
  }
}), universalOptions);
t_14.template = '__react_static_root__/src/components/ReactSuspenseWrapper.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/components/404.js': t_0,
  '__react_static_root__/src/components/about.js': t_1,
  '__react_static_root__/src/components/circle.js': t_2,
  '__react_static_root__/src/components/contact.js': t_3,
  '__react_static_root__/src/components/impressum.js': t_4,
  '__react_static_root__/src/components/index.js': t_5,
  '__react_static_root__/src/components/LoadingScreen.js': t_6,
  '__react_static_root__/src/components/Mobile/about.js': t_7,
  '__react_static_root__/src/components/Mobile/contact.js': t_8,
  '__react_static_root__/src/components/Mobile/impressum.js': t_9,
  '__react_static_root__/src/components/Mobile/index.js': t_10,
  '__react_static_root__/src/components/Mobile/LoadingScreen.js': t_11,
  '__react_static_root__/src/components/Mobile/ProjectDetails.js': t_12,
  '__react_static_root__/src/components/ProjectDetails.js': t_13,
  '__react_static_root__/src/components/ReactSuspenseWrapper.js': t_14
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/components/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(40);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 25,
	"./": 25,
	"./index": 25,
	"./index.js": 25
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 75;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(39);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(46);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(47);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(48);

var _interopRequireWildcard = __webpack_require__(49);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(79);

var _Suspense = _interopRequireDefault(__webpack_require__(80));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(83)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("D:\\Documents\\Projekte\\2021\\Webseite_Fabian_Schwarzinger\\Program2\\PorfolioFabian\\node_modules\\react-static\\lib\\browser\\hooks\\useStaticInfo");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(49);

var _interopRequireDefault = __webpack_require__(48);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(81));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(82));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);



 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_3__["Head"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Fabian Schwarzinger Portfolio")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null))), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(84)(module)))

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/0.030f879b.jpg";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1.64fc29f0.jpg";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/2.5345b7b3.jpg";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/3.f66c5c32.jpg";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/4.a4e69599.mp4";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/5.fd0cf19c.jpg";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/0.a853243e.jpg";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1.bd44ef41.jpg";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/2.e079c157.mp4";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/3.b30002c6.jpg";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/0.9dcb30f2.jpg";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1.1fe10f49.jpg";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/2.0b28a916.jpg";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/3.c2f2f16a.jpg";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/0.7dcb6648.jpg";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1.bf7d31be.jpg";

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/2.a139c227.jpg";

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/3.2b20992b.jpg";

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/4.96ae8c79.mp4";

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/5.185182fd.jpg";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, "#circle{\r\n   position: absolute;\r\n   width:60px;\r\n   height:60px;\r\n   border: 1px solid var(--foreground); \r\n   border-radius: 30px;\r\n   transition: 0.2s ease-out;\r\n   pointer-events: none;\r\n   z-index: 5;\r\n}\r\n\r\n.ripple\r\n{\r\n   pointer-events: none;\r\n    content: '';\r\n    position: absolute;\r\n    left:0px;\r\n    top:0px;\r\n    width:100%;\r\n    height:100%;\r\n    background-color: var(--foreground); /* Reddish background */\r\n    border-radius: 50%;\r\n}\r\n\r\n.ripple\r\n{\r\n   opacity: 0; /* This css rule makes #tb:after(ripple layer) invisible */\r\n   transform: scale(0,0);\r\n   transition: 0.2s;\r\n}\r\n\r\n.rippleactive\r\n{\r\n   background-color: var(--foreground); /* Reddish background */\r\n    opacity: 0.25;\r\n    transform: scale(1,1);\r\n    transition: transform 0.2s, opacity 0.5s;\r\n}\r\n", ""]);



/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ClarikaProGrot-Lt.25375b56.otf";

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ClarikaProGrot-Md.28594521.otf";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ClarikaProGrot-DmIt.72a121f6.otf";

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ClarikaProGrot-It.faab6697.otf";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, "#mobileWrapper #DetailsFooter{\r\n   margin-left:-20px;\r\n   font-size: 10pt;\r\n   width:100vw !important;\r\n}\r\n\r\n#mobileWrapper #main_wrapper .centeritem{\r\n   width: 100%\r\n}\r\n\r\n#mobileWrapper #mobile_detail_next_picture{\r\n   cursor:pointer; /* actually useless for mobile devices... */\r\n}\r\n", ""]);



/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, "#mobileWrapper #projectDetailWrapper{\r\n   padding:40px 20px 40px 20px;\r\n   height: calc(100vh - 80px);\r\n   grid-template-rows: 1fr 6fr 1fr 2fr;\r\n   grid-template-areas: \"header\" \"project_overview\" \"arrows\" \"footer\";\r\n}\r\n\r\n#mobileWrapper header, #mobileWrapper footer{\r\n   width: calc(100vw - 40px)\r\n}\r\n\r\n#mobileWrapper #project_overview_wrapper {\r\n   width: 100vw;\r\n   margin-left:-20px;\r\n}\r\n\r\n#mobileWrapper #project_overview_section img{\r\n   margin:0;\r\n   width: 100%;\r\n}\r\n\r\n#mobileWrapper #footer_overview_items{\r\n   align-items:center;\r\n}\r\n\r\n#mobileWrapper #project_overview_arrows {\r\n   width:calc(100vw - 40px);\r\n   display:flex;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n   grid-area: \"arrows\";\r\n\r\n}\r\n\r\n#mobileWrapper header *, #mobileWrapper footer *{\r\n   font-family: ClarikaProGrotesque;\r\n   font-size:12pt;\r\n}", ""]);



/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, "#mobileWrapper #aboutWrapper .TextElement p, #mobileWrapper #aboutWrapper .ElementLinkToNext{\r\n   font-size:10pt;\r\n}\r\n\r\n#mobileWrapper #aboutWrapper #lastTextElement, #mobileWrapper #aboutWrapper #currentTextElement{\r\n   width:calc(100vw - 40px);\r\n   margin-left:20px;\r\n}\r\n\r\n#mobileWrapper .main_aside > div {\r\n   margin-top:calc(20vh - 10%);\r\n}\r\n#mobileWrapper #aboutWrapper #lastTextElement{\r\n   top: unset;\r\n}\r\n\r\n#mobileWrapper .main_aside {\r\n   width: 100vw;\r\n   margin-left:-20px;\r\n}\r\n\r\n#mobileWrapper #aboutWrapper footer {\r\n   width: 100vw;\r\n   margin-left:-20px;\r\n}\r\n\r\n#mobileWrapper .rightText {\r\n   text-align: right;\r\n}\r\n\r\n#mobileWrapper #aboutWrapper .main_aside > div{\r\n   padding: 0;\r\n}", ""]);



/***/ })
/******/ ]);
});