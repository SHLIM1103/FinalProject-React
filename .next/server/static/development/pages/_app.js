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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./assets/scss/styles.scss":
/*!*********************************!*\
  !*** ./assets/scss/styles.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Preloader/index.js":
/*!***************************************!*\
  !*** ./components/Preloader/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\SOHYUN LIM\\Developer Liiim\\SpringBoot\\SpringBoot-finalproject\\fe\\components\\Preloader\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Preloader = () => {
  return __jsx("div", {
    className: "preloader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Preloader);

/***/ }),

/***/ "./data/products.json":
/*!****************************!*\
  !*** ./data/products.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"1\",\"sku\":\"asdf101\",\"name\":\"Lorem ipsum decor one\",\"slug\":\"lorem-ipsum-decor-one\",\"price\":17,\"discount\":10,\"new\":true,\"rating\":4,\"ratingCount\":5,\"saleCount\":90,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/decor/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/decor/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/decor/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/decor/1.jpg\",\"/assets/images/product/decor/2.jpg\"],\"image\":[\"/assets/images/product/decor/1.jpg\",\"/assets/images/product/decor/2.jpg\",\"/assets/images/product/decor/3.jpg\",\"/assets/images/product/decor/4.jpg\",\"/assets/images/product/decor/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"2\",\"sku\":\"asdf102\",\"name\":\"Lorem ipsum decor two\",\"slug\":\"lorem-ipsum-decor-two\",\"price\":18,\"discount\":12,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":10,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/decor/2.jpg\",\"/assets/images/product/decor/3.jpg\"],\"image\":[\"/assets/images/product/decor/2.jpg\",\"/assets/images/product/decor/3.jpg\",\"/assets/images/product/decor/4.jpg\",\"/assets/images/product/decor/5.jpg\",\"/assets/images/product/decor/6.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"3\",\"sku\":\"asdf103\",\"name\":\"Lorem ipsum decor three\",\"slug\":\"lorem-ipsum-decor-three\",\"price\":14,\"discount\":0,\"new\":true,\"rating\":3,\"ratingCount\":5,\"saleCount\":13,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/decor/3.jpg\",\"/assets/images/product/decor/4.jpg\"],\"image\":[\"/assets/images/product/decor/3.jpg\",\"/assets/images/product/decor/4.jpg\",\"/assets/images/product/decor/5.jpg\",\"/assets/images/product/decor/6.jpg\",\"/assets/images/product/decor/7.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"4\",\"sku\":\"asdf104\",\"name\":\"Lorem ipsum decor four\",\"slug\":\"lorem-ipsum-decor-four\",\"price\":12,\"discount\":5,\"new\":false,\"rating\":4,\"ratingCount\":15,\"saleCount\":19,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":12,\"affiliateLink\":\"https://www.amazon.com\",\"thumbImage\":[\"/assets/images/product/decor/4.jpg\",\"/assets/images/product/decor/5.jpg\"],\"image\":[\"/assets/images/product/decor/4.jpg\",\"/assets/images/product/decor/5.jpg\",\"/assets/images/product/decor/6.jpg\",\"/assets/images/product/decor/7.jpg\",\"/assets/images/product/decor/8.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"5\",\"sku\":\"asdf105\",\"name\":\"Lorem ipsum decor five\",\"slug\":\"lorem-ipsum-decor-five\",\"price\":16,\"discount\":0,\"new\":true,\"rating\":2,\"ratingCount\":5,\"saleCount\":12,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":14,\"thumbImage\":[\"/assets/images/product/decor/5.jpg\",\"/assets/images/product/decor/6.jpg\"],\"image\":[\"/assets/images/product/decor/5.jpg\",\"/assets/images/product/decor/6.jpg\",\"/assets/images/product/decor/7.jpg\",\"/assets/images/product/decor/8.jpg\",\"/assets/images/product/decor/9.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"6\",\"sku\":\"asdf106\",\"name\":\"Lorem ipsum decor six\",\"slug\":\"lorem-ipsum-decor-six\",\"price\":12,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":4,\"saleCount\":16,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":0,\"thumbImage\":[\"/assets/images/product/decor/6.jpg\",\"/assets/images/product/decor/7.jpg\"],\"image\":[\"/assets/images/product/decor/6.jpg\",\"/assets/images/product/decor/7.jpg\",\"/assets/images/product/decor/8.jpg\",\"/assets/images/product/decor/9.jpg\",\"/assets/images/product/decor/10.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"7\",\"sku\":\"asdf107\",\"name\":\"Lorem ipsum decor seven\",\"slug\":\"lorem-ipsum-decor-seven\",\"price\":17,\"discount\":12,\"new\":true,\"rating\":3,\"ratingCount\":7,\"saleCount\":13,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":18,\"thumbImage\":[\"/assets/images/product/decor/7.jpg\",\"/assets/images/product/decor/8.jpg\"],\"image\":[\"/assets/images/product/decor/7.jpg\",\"/assets/images/product/decor/8.jpg\",\"/assets/images/product/decor/9.jpg\",\"/assets/images/product/decor/10.jpg\",\"/assets/images/product/decor/1.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"8\",\"sku\":\"asdf108\",\"name\":\"Lorem ipsum decor eight\",\"slug\":\"lorem-ipsum-decor-eight\",\"price\":15,\"discount\":0,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":30,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":12,\"thumbImage\":[\"/assets/images/product/decor/8.jpg\",\"/assets/images/product/decor/9.jpg\"],\"image\":[\"/assets/images/product/decor/8.jpg\",\"/assets/images/product/decor/9.jpg\",\"/assets/images/product/decor/10.jpg\",\"/assets/images/product/decor/1.jpg\",\"/assets/images/product/decor/2.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"9\",\"sku\":\"asdf109\",\"name\":\"Lorem ipsum decor nine\",\"slug\":\"lorem-ipsum-decor-nine\",\"price\":20,\"discount\":12,\"new\":true,\"rating\":3,\"ratingCount\":5,\"saleCount\":20,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":16,\"thumbImage\":[\"/assets/images/product/decor/9.jpg\",\"/assets/images/product/decor/10.jpg\"],\"image\":[\"/assets/images/product/decor/9.jpg\",\"/assets/images/product/decor/10.jpg\",\"/assets/images/product/decor/1.jpg\",\"/assets/images/product/decor/2.jpg\",\"/assets/images/product/decor/3.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"10\",\"sku\":\"asdf110\",\"name\":\"Lorem ipsum decor ten\",\"slug\":\"lorem-ipsum-decor-ten\",\"price\":30,\"discount\":20,\"new\":false,\"rating\":4,\"ratingCount\":10,\"saleCount\":30,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":14,\"thumbImage\":[\"/assets/images/product/decor/10.jpg\",\"/assets/images/product/decor/1.jpg\"],\"image\":[\"/assets/images/product/decor/10.jpg\",\"/assets/images/product/decor/1.jpg\",\"/assets/images/product/decor/2.jpg\",\"/assets/images/product/decor/3.jpg\",\"/assets/images/product/decor/4.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"11\",\"sku\":\"asdf111\",\"name\":\"Lorem ipsum fashion one\",\"slug\":\"lorem-ipsum-fashion-one\",\"price\":17,\"discount\":10,\"new\":true,\"rating\":4,\"ratingCount\":5,\"saleCount\":90,\"category\":[\"fashion\",\"men\"],\"tag\":[\"fashion\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/1.jpg\",\"/assets/images/product/fashion/2.jpg\"],\"image\":[\"/assets/images/product/fashion/1.jpg\",\"/assets/images/product/fashion/2.jpg\",\"/assets/images/product/fashion/3.jpg\",\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"12\",\"sku\":\"asdf112\",\"name\":\"Lorem ipsum fashion two\",\"slug\":\"lorem-ipsum-fashion-two\",\"price\":13,\"discount\":14,\"new\":false,\"rating\":4,\"ratingCount\":7,\"saleCount\":70,\"category\":[\"fashion\",\"men\"],\"tag\":[\"fashion\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/4.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/2.jpg\",\"/assets/images/product/fashion/3.jpg\"],\"image\":[\"/assets/images/product/fashion/2.jpg\",\"/assets/images/product/fashion/3.jpg\",\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\",\"/assets/images/product/fashion/6.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"13\",\"sku\":\"asdf113\",\"name\":\"Lorem ipsum fashion three\",\"slug\":\"lorem-ipsum-fashion-three\",\"price\":16,\"discount\":20,\"new\":true,\"rating\":5,\"ratingCount\":27,\"saleCount\":78,\"category\":[\"fashion\",\"men\"],\"tag\":[\"fashion\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/4.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/5.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/3.jpg\",\"/assets/images/product/fashion/4.jpg\"],\"image\":[\"/assets/images/product/fashion/3.jpg\",\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\",\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/7.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"14\",\"sku\":\"asdf114\",\"name\":\"Lorem ipsum fashion four\",\"slug\":\"lorem-ipsum-fashion-four\",\"price\":10,\"discount\":25,\"new\":false,\"rating\":4,\"ratingCount\":20,\"saleCount\":70,\"category\":[\"fashion\",\"men\"],\"tag\":[\"fashion\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/4.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/5.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/6.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\"],\"image\":[\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\",\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/7.jpg\",\"/assets/images/product/fashion/8.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"15\",\"sku\":\"asdf115\",\"name\":\"Lorem ipsum fashion five\",\"slug\":\"lorem-ipsum-fashion-five\",\"price\":15,\"discount\":5,\"new\":true,\"rating\":4,\"ratingCount\":10,\"saleCount\":63,\"category\":[\"fashion\",\"men\"],\"tag\":[\"fashion\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/5.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/6.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/7.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/5.jpg\",\"/assets/images/product/fashion/1.jpg\"],\"image\":[\"/assets/images/product/fashion/5.jpg\",\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/7.jpg\",\"/assets/images/product/fashion/8.jpg\",\"/assets/images/product/fashion/9.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"16\",\"sku\":\"asdf116\",\"name\":\"Lorem ipsum fashion six\",\"slug\":\"lorem-ipsum-fashion-six\",\"price\":17,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":60,\"category\":[\"fashion\",\"women\"],\"tag\":[\"fashion\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/6.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/7.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/8.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/7.jpg\"],\"image\":[\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/7.jpg\",\"/assets/images/product/fashion/8.jpg\",\"/assets/images/product/fashion/9.jpg\",\"/assets/images/product/fashion/10.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"17\",\"sku\":\"asdf117\",\"name\":\"Lorem ipsum fashion seven\",\"slug\":\"lorem-ipsum-fashion-seven\",\"price\":27,\"discount\":20,\"new\":true,\"rating\":4,\"ratingCount\":25,\"saleCount\":70,\"category\":[\"fashion\",\"women\"],\"tag\":[\"fashion\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/7.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/8.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/9.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/7.jpg\",\"/assets/images/product/fashion/8.jpg\"],\"image\":[\"/assets/images/product/fashion/7.jpg\",\"/assets/images/product/fashion/8.jpg\",\"/assets/images/product/fashion/9.jpg\",\"/assets/images/product/fashion/10.jpg\",\"/assets/images/product/fashion/1.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"18\",\"sku\":\"asdf118\",\"name\":\"Lorem ipsum fashion eight\",\"slug\":\"lorem-ipsum-fashion-eight\",\"price\":25,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":20,\"saleCount\":50,\"category\":[\"fashion\",\"women\"],\"tag\":[\"fashion\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/8.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/9.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/10.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/8.jpg\",\"/assets/images/product/fashion/9.jpg\"],\"image\":[\"/assets/images/product/fashion/8.jpg\",\"/assets/images/product/fashion/9.jpg\",\"/assets/images/product/fashion/10.jpg\",\"/assets/images/product/fashion/1.jpg\",\"/assets/images/product/fashion/2.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"19\",\"sku\":\"asdf119\",\"name\":\"Lorem ipsum fashion nine\",\"slug\":\"lorem-ipsum-fashion-nine\",\"price\":35,\"discount\":20,\"new\":true,\"rating\":4,\"ratingCount\":25,\"saleCount\":150,\"category\":[\"fashion\",\"women\"],\"tag\":[\"fashion\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/9.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/10.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/9.jpg\",\"/assets/images/product/fashion/10.jpg\"],\"image\":[\"/assets/images/product/fashion/9.jpg\",\"/assets/images/product/fashion/10.jpg\",\"/assets/images/product/fashion/1.jpg\",\"/assets/images/product/fashion/2.jpg\",\"/assets/images/product/fashion/3.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"20\",\"sku\":\"asdf120\",\"name\":\"Lorem ipsum fashion ten\",\"slug\":\"lorem-ipsum-fashion-ten\",\"price\":45,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":5,\"saleCount\":10,\"category\":[\"fashion\",\"women\"],\"tag\":[\"fashion\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/10.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/10.jpg\",\"/assets/images/product/fashion/6.jpg\"],\"image\":[\"/assets/images/product/fashion/10.jpg\",\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/3.jpg\",\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"21\",\"sku\":\"asdf121\",\"name\":\"Lorem ipsum cosmetics one\",\"slug\":\"lorem-ipsum-cosmetics-one\",\"price\":18,\"discount\":12,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":10,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/cosmetics/1.jpg\",\"/assets/images/product/cosmetics/2.jpg\"],\"image\":[\"/assets/images/product/cosmetics/1.jpg\",\"/assets/images/product/cosmetics/2.jpg\",\"/assets/images/product/cosmetics/3.jpg\",\"/assets/images/product/cosmetics/4.jpg\",\"/assets/images/product/cosmetics/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"22\",\"sku\":\"asdf122\",\"name\":\"Lorem ipsum cosmetics two\",\"slug\":\"lorem-ipsum-cosmetics-two\",\"price\":28,\"discount\":10,\"new\":true,\"rating\":4,\"ratingCount\":5,\"saleCount\":12,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":20,\"thumbImage\":[\"/assets/images/product/cosmetics/2.jpg\",\"/assets/images/product/cosmetics/3.jpg\"],\"image\":[\"/assets/images/product/cosmetics/2.jpg\",\"/assets/images/product/cosmetics/3.jpg\",\"/assets/images/product/cosmetics/4.jpg\",\"/assets/images/product/cosmetics/5.jpg\",\"/assets/images/product/cosmetics/6.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"23\",\"sku\":\"asdf123\",\"name\":\"Lorem ipsum cosmetics three\",\"slug\":\"lorem-ipsum-cosmetics-three\",\"price\":22,\"discount\":15,\"new\":false,\"rating\":5,\"ratingCount\":7,\"saleCount\":12,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":40,\"thumbImage\":[\"/assets/images/product/cosmetics/3.jpg\",\"/assets/images/product/cosmetics/4.jpg\"],\"image\":[\"/assets/images/product/cosmetics/3.jpg\",\"/assets/images/product/cosmetics/4.jpg\",\"/assets/images/product/cosmetics/5.jpg\",\"/assets/images/product/cosmetics/6.jpg\",\"/assets/images/product/cosmetics/7.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"24\",\"sku\":\"asdf124\",\"name\":\"Lorem ipsum cosmetics four\",\"slug\":\"lorem-ipsum-cosmetics-four\",\"price\":30,\"discount\":10,\"new\":true,\"rating\":5,\"ratingCount\":17,\"saleCount\":22,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":50,\"thumbImage\":[\"/assets/images/product/cosmetics/4.jpg\",\"/assets/images/product/cosmetics/5.jpg\"],\"image\":[\"/assets/images/product/cosmetics/4.jpg\",\"/assets/images/product/cosmetics/5.jpg\",\"/assets/images/product/cosmetics/6.jpg\",\"/assets/images/product/cosmetics/7.jpg\",\"/assets/images/product/cosmetics/8.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"25\",\"sku\":\"asdf125\",\"name\":\"Lorem ipsum cosmetics five\",\"slug\":\"lorem-ipsum-cosmetics-five\",\"price\":20,\"discount\":20,\"new\":false,\"rating\":5,\"ratingCount\":27,\"saleCount\":30,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":40,\"thumbImage\":[\"/assets/images/product/cosmetics/5.jpg\",\"/assets/images/product/cosmetics/6.jpg\"],\"image\":[\"/assets/images/product/cosmetics/5.jpg\",\"/assets/images/product/cosmetics/6.jpg\",\"/assets/images/product/cosmetics/7.jpg\",\"/assets/images/product/cosmetics/8.jpg\",\"/assets/images/product/cosmetics/9.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"26\",\"sku\":\"asdf126\",\"name\":\"Lorem ipsum cosmetics six\",\"slug\":\"lorem-ipsum-cosmetics-six\",\"price\":30,\"discount\":10,\"new\":true,\"rating\":5,\"ratingCount\":25,\"saleCount\":20,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/cosmetics/6.jpg\",\"/assets/images/product/cosmetics/7.jpg\"],\"image\":[\"/assets/images/product/cosmetics/6.jpg\",\"/assets/images/product/cosmetics/7.jpg\",\"/assets/images/product/cosmetics/8.jpg\",\"/assets/images/product/cosmetics/9.jpg\",\"/assets/images/product/cosmetics/10.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"27\",\"sku\":\"asdf127\",\"name\":\"Lorem ipsum cosmetics seven\",\"slug\":\"lorem-ipsum-cosmetics-seven\",\"price\":20,\"discount\":5,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":10,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":20,\"thumbImage\":[\"/assets/images/product/cosmetics/7.jpg\",\"/assets/images/product/cosmetics/8.jpg\"],\"image\":[\"/assets/images/product/cosmetics/7.jpg\",\"/assets/images/product/cosmetics/8.jpg\",\"/assets/images/product/cosmetics/9.jpg\",\"/assets/images/product/cosmetics/10.jpg\",\"/assets/images/product/cosmetics/1.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"28\",\"sku\":\"asdf128\",\"name\":\"Lorem ipsum cosmetics eight\",\"slug\":\"lorem-ipsum-cosmetics-eight\",\"price\":10,\"discount\":15,\"new\":true,\"rating\":5,\"ratingCount\":25,\"saleCount\":20,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/cosmetics/8.jpg\",\"/assets/images/product/cosmetics/9.jpg\"],\"image\":[\"/assets/images/product/cosmetics/8.jpg\",\"/assets/images/product/cosmetics/9.jpg\",\"/assets/images/product/cosmetics/10.jpg\",\"/assets/images/product/cosmetics/1.jpg\",\"/assets/images/product/cosmetics/2.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"29\",\"sku\":\"asdf129\",\"name\":\"Lorem ipsum cosmetics nine\",\"slug\":\"lorem-ipsum-cosmetics-nine\",\"price\":20,\"discount\":25,\"new\":false,\"rating\":4,\"ratingCount\":20,\"saleCount\":30,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":20,\"thumbImage\":[\"/assets/images/product/cosmetics/9.jpg\",\"/assets/images/product/cosmetics/10.jpg\"],\"image\":[\"/assets/images/product/cosmetics/9.jpg\",\"/assets/images/product/cosmetics/10.jpg\",\"/assets/images/product/cosmetics/1.jpg\",\"/assets/images/product/cosmetics/2.jpg\",\"/assets/images/product/cosmetics/3.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"30\",\"sku\":\"asdf130\",\"name\":\"Lorem ipsum cosmetics ten\",\"slug\":\"lorem-ipsum-cosmetics-ten\",\"price\":30,\"discount\":15,\"new\":true,\"rating\":5,\"ratingCount\":10,\"saleCount\":20,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":30,\"thumbImage\":[\"/assets/images/product/cosmetics/10.jpg\",\"/assets/images/product/cosmetics/1.jpg\"],\"image\":[\"/assets/images/product/cosmetics/10.jpg\",\"/assets/images/product/cosmetics/1.jpg\",\"/assets/images/product/cosmetics/2.jpg\",\"/assets/images/product/cosmetics/3.jpg\",\"/assets/images/product/cosmetics/4.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"31\",\"sku\":\"asdf131\",\"name\":\"Lorem ipsum furniture one\",\"slug\":\"lorem-ipsum-furniture-one\",\"price\":17,\"discount\":10,\"new\":true,\"rating\":4,\"ratingCount\":5,\"saleCount\":90,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/furniture/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/furniture/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/furniture/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/furniture/1.jpg\",\"/assets/images/product/furniture/2.jpg\"],\"image\":[\"/assets/images/product/furniture/1.jpg\",\"/assets/images/product/furniture/2.jpg\",\"/assets/images/product/furniture/3.jpg\",\"/assets/images/product/furniture/4.jpg\",\"/assets/images/product/furniture/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"32\",\"sku\":\"asdf132\",\"name\":\"Lorem ipsum furniture two\",\"slug\":\"lorem-ipsum-furniture-two\",\"price\":18,\"discount\":12,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":10,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/furniture/2.jpg\",\"/assets/images/product/furniture/3.jpg\"],\"image\":[\"/assets/images/product/furniture/2.jpg\",\"/assets/images/product/furniture/3.jpg\",\"/assets/images/product/furniture/4.jpg\",\"/assets/images/product/furniture/5.jpg\",\"/assets/images/product/furniture/6.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"33\",\"sku\":\"asdf133\",\"name\":\"Lorem ipsum furniture three\",\"slug\":\"lorem-ipsum-furniture-three\",\"price\":14,\"discount\":0,\"new\":true,\"rating\":3,\"ratingCount\":5,\"saleCount\":13,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/furniture/3.jpg\",\"/assets/images/product/furniture/4.jpg\"],\"image\":[\"/assets/images/product/furniture/3.jpg\",\"/assets/images/product/furniture/4.jpg\",\"/assets/images/product/furniture/5.jpg\",\"/assets/images/product/furniture/6.jpg\",\"/assets/images/product/furniture/7.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"34\",\"sku\":\"asdf134\",\"name\":\"Lorem ipsum furniture four\",\"slug\":\"lorem-ipsum-furniture-four\",\"price\":12,\"discount\":5,\"new\":false,\"rating\":4,\"ratingCount\":15,\"saleCount\":19,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":12,\"affiliateLink\":\"https://www.amazon.com\",\"thumbImage\":[\"/assets/images/product/furniture/4.jpg\",\"/assets/images/product/furniture/5.jpg\"],\"image\":[\"/assets/images/product/furniture/4.jpg\",\"/assets/images/product/furniture/5.jpg\",\"/assets/images/product/furniture/6.jpg\",\"/assets/images/product/furniture/7.jpg\",\"/assets/images/product/furniture/8.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"35\",\"sku\":\"asdf135\",\"name\":\"Lorem ipsum furniture five\",\"slug\":\"lorem-ipsum-furniture-five\",\"price\":16,\"discount\":0,\"new\":true,\"rating\":2,\"ratingCount\":5,\"saleCount\":12,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":14,\"thumbImage\":[\"/assets/images/product/furniture/5.jpg\",\"/assets/images/product/furniture/6.jpg\"],\"image\":[\"/assets/images/product/furniture/5.jpg\",\"/assets/images/product/furniture/6.jpg\",\"/assets/images/product/furniture/7.jpg\",\"/assets/images/product/furniture/8.jpg\",\"/assets/images/product/furniture/9.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"36\",\"sku\":\"asdf136\",\"name\":\"Lorem ipsum furniture six\",\"slug\":\"lorem-ipsum-furniture-six\",\"price\":12,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":4,\"saleCount\":16,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":0,\"thumbImage\":[\"/assets/images/product/furniture/6.jpg\",\"/assets/images/product/furniture/7.jpg\"],\"image\":[\"/assets/images/product/furniture/6.jpg\",\"/assets/images/product/furniture/7.jpg\",\"/assets/images/product/furniture/8.jpg\",\"/assets/images/product/furniture/9.jpg\",\"/assets/images/product/furniture/10.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"37\",\"sku\":\"asdf137\",\"name\":\"Lorem ipsum furniture seven\",\"slug\":\"lorem-ipsum-furniture-seven\",\"price\":17,\"discount\":12,\"new\":true,\"rating\":3,\"ratingCount\":7,\"saleCount\":13,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":18,\"thumbImage\":[\"/assets/images/product/furniture/7.jpg\",\"/assets/images/product/furniture/8.jpg\"],\"image\":[\"/assets/images/product/furniture/7.jpg\",\"/assets/images/product/furniture/8.jpg\",\"/assets/images/product/furniture/9.jpg\",\"/assets/images/product/furniture/10.jpg\",\"/assets/images/product/furniture/1.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"38\",\"sku\":\"asdf138\",\"name\":\"Lorem ipsum furniture eight\",\"slug\":\"lorem-ipsum-furniture-eight\",\"price\":15,\"discount\":0,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":30,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":12,\"thumbImage\":[\"/assets/images/product/furniture/8.jpg\",\"/assets/images/product/furniture/9.jpg\"],\"image\":[\"/assets/images/product/furniture/8.jpg\",\"/assets/images/product/furniture/9.jpg\",\"/assets/images/product/furniture/10.jpg\",\"/assets/images/product/furniture/1.jpg\",\"/assets/images/product/furniture/2.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"39\",\"sku\":\"asdf139\",\"name\":\"Lorem ipsum furniture nine\",\"slug\":\"lorem-ipsum-furniture-nine\",\"price\":20,\"discount\":12,\"new\":true,\"rating\":3,\"ratingCount\":5,\"saleCount\":20,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":16,\"thumbImage\":[\"/assets/images/product/furniture/9.jpg\",\"/assets/images/product/furniture/10.jpg\"],\"image\":[\"/assets/images/product/furniture/9.jpg\",\"/assets/images/product/furniture/10.jpg\",\"/assets/images/product/furniture/1.jpg\",\"/assets/images/product/furniture/2.jpg\",\"/assets/images/product/furniture/3.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"40\",\"sku\":\"asdf140\",\"name\":\"Lorem ipsum furniture ten\",\"slug\":\"lorem-ipsum-furniture-ten\",\"price\":30,\"discount\":20,\"new\":false,\"rating\":4,\"ratingCount\":10,\"saleCount\":30,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":14,\"thumbImage\":[\"/assets/images/product/furniture/10.jpg\",\"/assets/images/product/furniture/1.jpg\"],\"image\":[\"/assets/images/product/furniture/10.jpg\",\"/assets/images/product/furniture/1.jpg\",\"/assets/images/product/furniture/2.jpg\",\"/assets/images/product/furniture/3.jpg\",\"/assets/images/product/furniture/4.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"41\",\"sku\":\"asdf141\",\"name\":\"Lorem ipsum perfumes one\",\"slug\":\"lorem-ipsum-perfumes-one\",\"price\":18,\"discount\":12,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":10,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/perfumes/1.jpg\",\"/assets/images/product/perfumes/2.jpg\"],\"image\":[\"/assets/images/product/perfumes/1.jpg\",\"/assets/images/product/perfumes/2.jpg\",\"/assets/images/product/perfumes/3.jpg\",\"/assets/images/product/perfumes/4.jpg\",\"/assets/images/product/perfumes/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"42\",\"sku\":\"asdf142\",\"name\":\"Lorem ipsum perfumes two\",\"slug\":\"lorem-ipsum-perfumes-two\",\"price\":28,\"discount\":10,\"new\":true,\"rating\":4,\"ratingCount\":5,\"saleCount\":12,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":20,\"thumbImage\":[\"/assets/images/product/perfumes/2.jpg\",\"/assets/images/product/perfumes/3.jpg\"],\"image\":[\"/assets/images/product/perfumes/2.jpg\",\"/assets/images/product/perfumes/3.jpg\",\"/assets/images/product/perfumes/4.jpg\",\"/assets/images/product/perfumes/5.jpg\",\"/assets/images/product/perfumes/6.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"43\",\"sku\":\"asdf143\",\"name\":\"Lorem ipsum perfumes three\",\"slug\":\"lorem-ipsum-perfumes-three\",\"price\":22,\"discount\":15,\"new\":false,\"rating\":5,\"ratingCount\":7,\"saleCount\":12,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":40,\"thumbImage\":[\"/assets/images/product/perfumes/3.jpg\",\"/assets/images/product/perfumes/4.jpg\"],\"image\":[\"/assets/images/product/perfumes/3.jpg\",\"/assets/images/product/perfumes/4.jpg\",\"/assets/images/product/perfumes/5.jpg\",\"/assets/images/product/perfumes/6.jpg\",\"/assets/images/product/perfumes/7.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"44\",\"sku\":\"asdf144\",\"name\":\"Lorem ipsum perfumes four\",\"slug\":\"lorem-ipsum-perfumes-four\",\"price\":30,\"discount\":10,\"new\":true,\"rating\":5,\"ratingCount\":17,\"saleCount\":22,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":50,\"thumbImage\":[\"/assets/images/product/perfumes/4.jpg\",\"/assets/images/product/perfumes/5.jpg\"],\"image\":[\"/assets/images/product/perfumes/4.jpg\",\"/assets/images/product/perfumes/5.jpg\",\"/assets/images/product/perfumes/6.jpg\",\"/assets/images/product/perfumes/7.jpg\",\"/assets/images/product/perfumes/8.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"45\",\"sku\":\"asdf145\",\"name\":\"Lorem ipsum perfumes five\",\"slug\":\"lorem-ipsum-perfumes-five\",\"price\":20,\"discount\":20,\"new\":false,\"rating\":5,\"ratingCount\":27,\"saleCount\":30,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":40,\"thumbImage\":[\"/assets/images/product/perfumes/5.jpg\",\"/assets/images/product/perfumes/6.jpg\"],\"image\":[\"/assets/images/product/perfumes/5.jpg\",\"/assets/images/product/perfumes/6.jpg\",\"/assets/images/product/perfumes/7.jpg\",\"/assets/images/product/perfumes/8.jpg\",\"/assets/images/product/perfumes/9.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"46\",\"sku\":\"asdf146\",\"name\":\"Lorem ipsum perfumes six\",\"slug\":\"lorem-ipsum-perfumes-six\",\"price\":30,\"discount\":10,\"new\":true,\"rating\":5,\"ratingCount\":25,\"saleCount\":20,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/perfumes/6.jpg\",\"/assets/images/product/perfumes/7.jpg\"],\"image\":[\"/assets/images/product/perfumes/6.jpg\",\"/assets/images/product/perfumes/7.jpg\",\"/assets/images/product/perfumes/8.jpg\",\"/assets/images/product/perfumes/9.jpg\",\"/assets/images/product/perfumes/10.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"47\",\"sku\":\"asdf147\",\"name\":\"Lorem ipsum perfumes seven\",\"slug\":\"lorem-ipsum-perfumes-seven\",\"price\":20,\"discount\":5,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":10,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":20,\"thumbImage\":[\"/assets/images/product/perfumes/7.jpg\",\"/assets/images/product/perfumes/8.jpg\"],\"image\":[\"/assets/images/product/perfumes/7.jpg\",\"/assets/images/product/perfumes/8.jpg\",\"/assets/images/product/perfumes/9.jpg\",\"/assets/images/product/perfumes/10.jpg\",\"/assets/images/product/perfumes/1.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"48\",\"sku\":\"asdf148\",\"name\":\"Lorem ipsum perfumes eight\",\"slug\":\"lorem-ipsum-perfumes-eight\",\"price\":10,\"discount\":15,\"new\":true,\"rating\":5,\"ratingCount\":25,\"saleCount\":20,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/perfumes/8.jpg\",\"/assets/images/product/perfumes/9.jpg\"],\"image\":[\"/assets/images/product/perfumes/8.jpg\",\"/assets/images/product/perfumes/9.jpg\",\"/assets/images/product/perfumes/10.jpg\",\"/assets/images/product/perfumes/1.jpg\",\"/assets/images/product/perfumes/2.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"49\",\"sku\":\"asdf149\",\"name\":\"Lorem ipsum perfumes nine\",\"slug\":\"lorem-ipsum-perfumes-nine\",\"price\":20,\"discount\":25,\"new\":false,\"rating\":4,\"ratingCount\":20,\"saleCount\":30,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":20,\"thumbImage\":[\"/assets/images/product/perfumes/9.jpg\",\"/assets/images/product/perfumes/10.jpg\"],\"image\":[\"/assets/images/product/perfumes/9.jpg\",\"/assets/images/product/perfumes/10.jpg\",\"/assets/images/product/perfumes/1.jpg\",\"/assets/images/product/perfumes/2.jpg\",\"/assets/images/product/perfumes/3.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"50\",\"sku\":\"asdf150\",\"name\":\"Lorem ipsum perfumes ten\",\"slug\":\"lorem-ipsum-perfumes-ten\",\"price\":30,\"discount\":15,\"new\":true,\"rating\":5,\"ratingCount\":10,\"saleCount\":20,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":30,\"thumbImage\":[\"/assets/images/product/perfumes/10.jpg\",\"/assets/images/product/perfumes/1.jpg\"],\"image\":[\"/assets/images/product/perfumes/10.jpg\",\"/assets/images/product/perfumes/1.jpg\",\"/assets/images/product/perfumes/2.jpg\",\"/assets/images/product/perfumes/3.jpg\",\"/assets/images/product/perfumes/4.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"51\",\"sku\":\"asdf151\",\"name\":\"Lorem ipsum wearables one\",\"slug\":\"lorem-ipsum-wearables-one\",\"price\":17,\"discount\":10,\"new\":true,\"rating\":4,\"ratingCount\":5,\"saleCount\":90,\"category\":[\"wearables\",\"men\"],\"tag\":[\"wearables\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/1.jpg\",\"/assets/images/product/wearables/2.jpg\"],\"image\":[\"/assets/images/product/wearables/1.jpg\",\"/assets/images/product/wearables/2.jpg\",\"/assets/images/product/wearables/3.jpg\",\"/assets/images/product/wearables/4.jpg\",\"/assets/images/product/wearables/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"52\",\"sku\":\"asdf152\",\"name\":\"Lorem ipsum wearables two\",\"slug\":\"lorem-ipsum-wearables-two\",\"price\":13,\"discount\":14,\"new\":false,\"rating\":4,\"ratingCount\":7,\"saleCount\":70,\"category\":[\"wearables\",\"men\"],\"tag\":[\"wearables\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/4.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/2.jpg\",\"/assets/images/product/wearables/3.jpg\"],\"image\":[\"/assets/images/product/wearables/2.jpg\",\"/assets/images/product/wearables/3.jpg\",\"/assets/images/product/wearables/4.jpg\",\"/assets/images/product/wearables/5.jpg\",\"/assets/images/product/wearables/6.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"53\",\"sku\":\"asdf153\",\"name\":\"Lorem ipsum wearables three\",\"slug\":\"lorem-ipsum-wearables-three\",\"price\":16,\"discount\":20,\"new\":true,\"rating\":5,\"ratingCount\":27,\"saleCount\":78,\"category\":[\"wearables\",\"men\"],\"tag\":[\"wearables\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/4.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/5.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/3.jpg\",\"/assets/images/product/wearables/4.jpg\"],\"image\":[\"/assets/images/product/wearables/3.jpg\",\"/assets/images/product/wearables/4.jpg\",\"/assets/images/product/wearables/5.jpg\",\"/assets/images/product/wearables/6.jpg\",\"/assets/images/product/wearables/7.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"54\",\"sku\":\"asdf154\",\"name\":\"Lorem ipsum wearables four\",\"slug\":\"lorem-ipsum-wearables-four\",\"price\":10,\"discount\":25,\"new\":false,\"rating\":4,\"ratingCount\":20,\"saleCount\":70,\"category\":[\"wearables\",\"men\"],\"tag\":[\"wearables\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/4.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/5.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/6.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/4.jpg\",\"/assets/images/product/wearables/5.jpg\"],\"image\":[\"/assets/images/product/wearables/4.jpg\",\"/assets/images/product/wearables/5.jpg\",\"/assets/images/product/wearables/6.jpg\",\"/assets/images/product/wearables/7.jpg\",\"/assets/images/product/wearables/8.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"55\",\"sku\":\"asdf155\",\"name\":\"Lorem ipsum wearables five\",\"slug\":\"lorem-ipsum-wearables-five\",\"price\":15,\"discount\":5,\"new\":true,\"rating\":4,\"ratingCount\":10,\"saleCount\":63,\"category\":[\"wearables\",\"men\"],\"tag\":[\"wearables\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/5.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/6.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/7.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/5.jpg\",\"/assets/images/product/wearables/6.jpg\"],\"image\":[\"/assets/images/product/wearables/5.jpg\",\"/assets/images/product/wearables/6.jpg\",\"/assets/images/product/wearables/7.jpg\",\"/assets/images/product/wearables/8.jpg\",\"/assets/images/product/wearables/9.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"56\",\"sku\":\"asdf156\",\"name\":\"Lorem ipsum wearables six\",\"slug\":\"lorem-ipsum-wearables-six\",\"price\":17,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":60,\"category\":[\"wearables\",\"women\"],\"tag\":[\"wearables\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/6.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/7.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/8.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/6.jpg\",\"/assets/images/product/wearables/7.jpg\"],\"image\":[\"/assets/images/product/wearables/6.jpg\",\"/assets/images/product/wearables/7.jpg\",\"/assets/images/product/wearables/8.jpg\",\"/assets/images/product/wearables/9.jpg\",\"/assets/images/product/wearables/10.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"57\",\"sku\":\"asdf157\",\"name\":\"Lorem ipsum wearables seven\",\"slug\":\"lorem-ipsum-wearables-seven\",\"price\":27,\"discount\":20,\"new\":true,\"rating\":4,\"ratingCount\":25,\"saleCount\":70,\"category\":[\"wearables\",\"women\"],\"tag\":[\"wearables\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/7.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/8.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/9.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/7.jpg\",\"/assets/images/product/wearables/8.jpg\"],\"image\":[\"/assets/images/product/wearables/7.jpg\",\"/assets/images/product/wearables/8.jpg\",\"/assets/images/product/wearables/9.jpg\",\"/assets/images/product/wearables/10.jpg\",\"/assets/images/product/wearables/1.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"58\",\"sku\":\"asdf158\",\"name\":\"Lorem ipsum wearables eight\",\"slug\":\"lorem-ipsum-wearables-eight\",\"price\":25,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":20,\"saleCount\":50,\"category\":[\"wearables\",\"women\"],\"tag\":[\"wearables\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/8.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/9.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/10.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/8.jpg\",\"/assets/images/product/wearables/9.jpg\"],\"image\":[\"/assets/images/product/wearables/8.jpg\",\"/assets/images/product/wearables/9.jpg\",\"/assets/images/product/wearables/10.jpg\",\"/assets/images/product/wearables/1.jpg\",\"/assets/images/product/wearables/2.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"59\",\"sku\":\"asdf159\",\"name\":\"Lorem ipsum wearables nine\",\"slug\":\"lorem-ipsum-wearables-nine\",\"price\":35,\"discount\":20,\"new\":true,\"rating\":4,\"ratingCount\":25,\"saleCount\":150,\"category\":[\"wearables\",\"women\"],\"tag\":[\"wearables\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/9.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/10.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/9.jpg\",\"/assets/images/product/wearables/10.jpg\"],\"image\":[\"/assets/images/product/wearables/9.jpg\",\"/assets/images/product/wearables/10.jpg\",\"/assets/images/product/wearables/1.jpg\",\"/assets/images/product/wearables/2.jpg\",\"/assets/images/product/wearables/3.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"60\",\"sku\":\"asdf160\",\"name\":\"Lorem ipsum wearables ten\",\"slug\":\"lorem-ipsum-wearables-ten\",\"price\":45,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":5,\"saleCount\":10,\"category\":[\"wearables\",\"women\"],\"tag\":[\"wearables\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/10.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/10.jpg\",\"/assets/images/product/wearables/1.jpg\"],\"image\":[\"/assets/images/product/wearables/10.jpg\",\"/assets/images/product/wearables/1.jpg\",\"/assets/images/product/wearables/2.jpg\",\"/assets/images/product/wearables/3.jpg\",\"/assets/images/product/wearables/4.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"61\",\"sku\":\"asdf161\",\"name\":\"Lorem ipsum jewelry one\",\"slug\":\"lorem-ipsum-jewelry-one\",\"price\":10,\"discount\":10,\"new\":true,\"rating\":5,\"ratingCount\":17,\"saleCount\":22,\"category\":[\"jewelry\"],\"tag\":[\"jewelry\"],\"stock\":50,\"thumbImage\":[\"/assets/images/product/jewelry/1.png\",\"/assets/images/product/jewelry/2.png\"],\"image\":[\"/assets/images/product/jewelry/1.png\",\"/assets/images/product/jewelry/2.png\",\"/assets/images/product/jewelry/3.png\",\"/assets/images/product/jewelry/4.png\",\"/assets/images/product/jewelry/5.png\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"62\",\"sku\":\"asdf162\",\"name\":\"Lorem ipsum jewelry two\",\"slug\":\"lorem-ipsum-jewelry-two\",\"price\":9,\"discount\":5,\"new\":false,\"rating\":4,\"ratingCount\":15,\"saleCount\":20,\"category\":[\"jewelry\"],\"tag\":[\"jewelry\"],\"stock\":30,\"thumbImage\":[\"/assets/images/product/jewelry/2.png\",\"/assets/images/product/jewelry/3.png\"],\"image\":[\"/assets/images/product/jewelry/2.png\",\"/assets/images/product/jewelry/3.png\",\"/assets/images/product/jewelry/4.png\",\"/assets/images/product/jewelry/5.png\",\"/assets/images/product/jewelry/1.png\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"63\",\"sku\":\"asdf163\",\"name\":\"Lorem ipsum jewelry three\",\"slug\":\"lorem-ipsum-jewelry-three\",\"price\":8,\"discount\":6,\"new\":true,\"rating\":4,\"ratingCount\":15,\"saleCount\":16,\"category\":[\"jewelry\"],\"tag\":[\"jewelry\"],\"stock\":28,\"thumbImage\":[\"/assets/images/product/jewelry/3.png\",\"/assets/images/product/jewelry/4.png\"],\"image\":[\"/assets/images/product/jewelry/3.png\",\"/assets/images/product/jewelry/4.png\",\"/assets/images/product/jewelry/5.png\",\"/assets/images/product/jewelry/1.png\",\"/assets/images/product/jewelry/2.png\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"64\",\"sku\":\"asdf164\",\"name\":\"Lorem ipsum jewelry four\",\"slug\":\"lorem-ipsum-jewelry-four\",\"price\":7,\"discount\":5,\"new\":false,\"rating\":5,\"ratingCount\":5,\"saleCount\":6,\"category\":[\"jewelry\"],\"tag\":[\"jewelry\"],\"stock\":8,\"thumbImage\":[\"/assets/images/product/jewelry/4.png\",\"/assets/images/product/jewelry/5.png\"],\"image\":[\"/assets/images/product/jewelry/4.png\",\"/assets/images/product/jewelry/5.png\",\"/assets/images/product/jewelry/1.png\",\"/assets/images/product/jewelry/2.png\",\"/assets/images/product/jewelry/3.png\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"65\",\"sku\":\"asdf165\",\"name\":\"Lorem ipsum jewelry five\",\"slug\":\"lorem-ipsum-jewelry-five\",\"price\":9,\"discount\":9,\"new\":true,\"rating\":3,\"ratingCount\":15,\"saleCount\":10,\"category\":[\"jewelry\"],\"tag\":[\"jewelry\"],\"stock\":19,\"thumbImage\":[\"/assets/images/product/jewelry/5.png\",\"/assets/images/product/jewelry/1.png\"],\"image\":[\"/assets/images/product/jewelry/5.png\",\"/assets/images/product/jewelry/1.png\",\"/assets/images/product/jewelry/2.png\",\"/assets/images/product/jewelry/3.png\",\"/assets/images/product/jewelry/4.png\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"66\",\"sku\":\"asdf166\",\"name\":\"Lorem ipsum swimsuit one\",\"slug\":\"lorem-ipsum-swimsuit-one\",\"price\":5,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":5,\"saleCount\":10,\"category\":[\"fashion\",\"women\",\"swimsuit\"],\"tag\":[\"fashion\",\"women\",\"swimsuit\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/11.png\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/12.png\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/13.png\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/11.png\",\"/assets/images/product/fashion/12.png\"],\"image\":[\"/assets/images/product/fashion/11.png\",\"/assets/images/product/fashion/12.png\",\"/assets/images/product/fashion/13.png\",\"/assets/images/product/fashion/14.png\",\"/assets/images/product/fashion/15.png\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"67\",\"sku\":\"asdf167\",\"name\":\"Lorem ipsum swimsuit two\",\"slug\":\"lorem-ipsum-swimsuit-two\",\"price\":12,\"discount\":5,\"new\":true,\"rating\":4,\"ratingCount\":15,\"saleCount\":15,\"category\":[\"fashion\",\"women\",\"swimsuit\"],\"tag\":[\"fashion\",\"women\",\"swimsuit\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/12.png\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/13.png\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/14.png\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/12.png\",\"/assets/images/product/fashion/13.png\"],\"image\":[\"/assets/images/product/fashion/12.png\",\"/assets/images/product/fashion/13.png\",\"/assets/images/product/fashion/14.png\",\"/assets/images/product/fashion/15.png\",\"/assets/images/product/fashion/16.png\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"68\",\"sku\":\"asdf168\",\"name\":\"Lorem ipsum swimsuit three\",\"slug\":\"lorem-ipsum-swimsuit-three\",\"price\":18,\"discount\":15,\"new\":false,\"rating\":4,\"ratingCount\":15,\"saleCount\":10,\"category\":[\"fashion\",\"women\",\"swimsuit\"],\"tag\":[\"fashion\",\"women\",\"swimsuit\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/13.png\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/14.png\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/15.png\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/13.png\",\"/assets/images/product/fashion/14.png\"],\"image\":[\"/assets/images/product/fashion/13.png\",\"/assets/images/product/fashion/14.png\",\"/assets/images/product/fashion/15.png\",\"/assets/images/product/fashion/16.png\",\"/assets/images/product/fashion/17.png\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"69\",\"sku\":\"asdf169\",\"name\":\"Lorem ipsum swimsuit four\",\"slug\":\"lorem-ipsum-swimsuit-four\",\"price\":8,\"discount\":15,\"new\":false,\"rating\":4,\"ratingCount\":15,\"saleCount\":10,\"category\":[\"fashion\",\"women\",\"swimsuit\"],\"tag\":[\"fashion\",\"women\",\"swimsuit\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/14.png\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/15.png\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/16.png\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/14.png\",\"/assets/images/product/fashion/15.png\"],\"image\":[\"/assets/images/product/fashion/14.png\",\"/assets/images/product/fashion/15.png\",\"/assets/images/product/fashion/16.png\",\"/assets/images/product/fashion/17.png\",\"/assets/images/product/fashion/18.png\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"70\",\"sku\":\"asdf170\",\"name\":\"Lorem ipsum swimsuit five\",\"slug\":\"lorem-ipsum-swimsuit-five\",\"price\":13,\"discount\":10,\"new\":true,\"rating\":5,\"ratingCount\":20,\"saleCount\":19,\"category\":[\"fashion\",\"women\",\"swimsuit\"],\"tag\":[\"fashion\",\"women\",\"swimsuit\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/15.png\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/16.png\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/17.png\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/15.png\",\"/assets/images/product/fashion/16.png\"],\"image\":[\"/assets/images/product/fashion/15.png\",\"/assets/images/product/fashion/16.png\",\"/assets/images/product/fashion/17.png\",\"/assets/images/product/fashion/18.png\",\"/assets/images/product/fashion/11.png\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"71\",\"sku\":\"asdf171\",\"name\":\"Lorem ipsum swimsuit six\",\"slug\":\"lorem-ipsum-swimsuit-six\",\"price\":14,\"discount\":10,\"new\":false,\"rating\":3,\"ratingCount\":20,\"saleCount\":19,\"category\":[\"fashion\",\"women\",\"swimsuit\"],\"tag\":[\"fashion\",\"women\",\"swimsuit\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/16.png\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/17.png\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/18.png\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/16.png\",\"/assets/images/product/fashion/17.png\"],\"image\":[\"/assets/images/product/fashion/16.png\",\"/assets/images/product/fashion/17.png\",\"/assets/images/product/fashion/18.png\",\"/assets/images/product/fashion/11.png\",\"/assets/images/product/fashion/12.png\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"72\",\"sku\":\"asdf172\",\"name\":\"Lorem ipsum swimsuit seven\",\"slug\":\"lorem-ipsum-swimsuit-seven\",\"price\":15,\"discount\":9,\"new\":false,\"rating\":4,\"ratingCount\":21,\"saleCount\":20,\"category\":[\"fashion\",\"women\",\"swimsuit\"],\"tag\":[\"fashion\",\"women\",\"swimsuit\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/17.png\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/18.png\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/11.png\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/17.png\",\"/assets/images/product/fashion/18.png\"],\"image\":[\"/assets/images/product/fashion/17.png\",\"/assets/images/product/fashion/18.png\",\"/assets/images/product/fashion/11.png\",\"/assets/images/product/fashion/12.png\",\"/assets/images/product/fashion/13.png\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"73\",\"sku\":\"asdf173\",\"name\":\"Lorem ipsum swimsuit eight\",\"slug\":\"lorem-ipsum-swimsuit-eight\",\"price\":16,\"discount\":10,\"new\":true,\"rating\":3,\"ratingCount\":22,\"saleCount\":23,\"category\":[\"fashion\",\"women\",\"swimsuit\"],\"tag\":[\"fashion\",\"women\",\"swimsuit\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/18.png\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/11.png\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/12.png\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/18.png\",\"/assets/images/product/fashion/11.png\"],\"image\":[\"/assets/images/product/fashion/18.png\",\"/assets/images/product/fashion/11.png\",\"/assets/images/product/fashion/12.png\",\"/assets/images/product/fashion/13.png\",\"/assets/images/product/fashion/14.png\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"}]");

/***/ }),

/***/ "./lib/with-redux-store.js":
/*!*********************************!*\
  !*** ./lib/with-redux-store.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
var _jsxFileName = "C:\\Users\\SOHYUN LIM\\Developer Liiim\\SpringBoot\\SpringBoot-finalproject\\fe\\lib\\with-redux-store.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const isServer = true;
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (App => {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return _objectSpread(_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 14
        }
      }));
    }

  };
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_with_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/with-redux-store */ "./lib/with-redux-store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions_productActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions/productActions */ "./redux/actions/productActions.js");
/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/products.json */ "./data/products.json");
var _data_products_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/products.json */ "./data/products.json", 1);
/* harmony import */ var _assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/scss/styles.scss */ "./assets/scss/styles.scss");
/* harmony import */ var _assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Preloader */ "./components/Preloader/index.js");
var _jsxFileName = "C:\\Users\\SOHYUN LIM\\Developer Liiim\\SpringBoot\\SpringBoot-finalproject\\fe\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor(props) {
    super(props);
    this.persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_6__["persistStore"])(props.reduxStore);
    props.reduxStore.dispatch(Object(_redux_actions_productActions__WEBPACK_IMPORTED_MODULE_8__["fetchProducts"])(_data_products_json__WEBPACK_IMPORTED_MODULE_9__));
  }

  render() {
    const {
      Component,
      pageProps,
      reduxStore
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, "# ZER0 SH0P #"), __jsx("link", {
      rel: "icon",
      href: process.env.PUBLIC_URL + "/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,3000,4000,5000,6000,7001,3001,4001,5001,6001,700&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    })), __jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastProvider"], {
      placement: "bottom-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
      store: reduxStore,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, __jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__["PersistGate"], {
      loading: __jsx(_components_Preloader__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 35
        }
      }),
      persistor: this.persistor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_redux_store__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp));

/***/ }),

/***/ "./redux/actions/cartActions.js":
/*!**************************************!*\
  !*** ./redux/actions/cartActions.js ***!
  \**************************************/
/*! exports provided: ADD_TO_CART, DECREASE_QUANTITY, DELETE_FROM_CART, DELETE_ALL_FROM_CART, addToCart, decreaseQuantity, deleteFromCart, deleteAllFromCart, cartItemStock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREASE_QUANTITY", function() { return DECREASE_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FROM_CART", function() { return DELETE_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ALL_FROM_CART", function() { return DELETE_ALL_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseQuantity", function() { return decreaseQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFromCart", function() { return deleteFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAllFromCart", function() { return deleteAllFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartItemStock", function() { return cartItemStock; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ADD_TO_CART = "ADD_TO_CART";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART"; //add to cart

const addToCart = (item, addToast, quantityCount, selectedProductColor, selectedProductSize) => {
  return dispatch => {
    if (addToast) {
      addToast("Added To Cart", {
        appearance: "success",
        autoDismiss: true
      });
    }

    dispatch({
      type: ADD_TO_CART,
      payload: _objectSpread(_objectSpread({}, item), {}, {
        quantity: quantityCount,
        selectedProductColor: selectedProductColor ? selectedProductColor : item.selectedProductColor ? item.selectedProductColor : null,
        selectedProductSize: selectedProductSize ? selectedProductSize : item.selectedProductSize ? item.selectedProductSize : null
      })
    });
  };
}; //decrease from cart

const decreaseQuantity = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Item Decremented From Cart", {
        appearance: "warning",
        autoDismiss: true
      });
    }

    dispatch({
      type: DECREASE_QUANTITY,
      payload: item
    });
  };
}; //delete from cart

const deleteFromCart = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Removed From Cart", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: DELETE_FROM_CART,
      payload: item
    });
  };
}; //delete all from cart

const deleteAllFromCart = addToast => {
  return dispatch => {
    if (addToast) {
      addToast("Removed All From Cart", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: DELETE_ALL_FROM_CART
    });
  };
}; // get stock of cart item

const cartItemStock = (item, color, size) => {
  if (item.stock) {
    return item.stock;
  } else {
    return item.variation.filter(single => single.color === color)[0].size.filter(single => single.name === size)[0].stock;
  }
};

/***/ }),

/***/ "./redux/actions/compareActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/compareActions.js ***!
  \*****************************************/
/*! exports provided: ADD_TO_COMPARE, DELETE_FROM_COMPARE, addToCompare, deleteFromCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_COMPARE", function() { return ADD_TO_COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FROM_COMPARE", function() { return DELETE_FROM_COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCompare", function() { return addToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFromCompare", function() { return deleteFromCompare; });
const ADD_TO_COMPARE = "ADD_TO_COMPARE";
const DELETE_FROM_COMPARE = "DELETE_FROM_COMPARE"; // add to compare

const addToCompare = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Added To Compare", {
        appearance: "success",
        autoDismiss: true
      });
    }

    dispatch({
      type: ADD_TO_COMPARE,
      payload: item
    });
  };
}; // delete from compare

const deleteFromCompare = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Removed From Compare", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: DELETE_FROM_COMPARE,
      payload: item
    });
  };
};

/***/ }),

/***/ "./redux/actions/productActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/productActions.js ***!
  \*****************************************/
/*! exports provided: FETCH_PRODUCTS_SUCCESS, fetchProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_SUCCESS", function() { return FETCH_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
}); // fetch products


const fetchProducts = products => {
  return dispatch => {
    dispatch(fetchProductsSuccess(products));
  };
};

/***/ }),

/***/ "./redux/actions/wishlistActions.js":
/*!******************************************!*\
  !*** ./redux/actions/wishlistActions.js ***!
  \******************************************/
/*! exports provided: ADD_TO_WISHLIST, DELETE_FROM_WISHLIST, DELETE_ALL_FROM_WISHLIST, addToWishlist, deleteFromWishlist, deleteAllFromWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_WISHLIST", function() { return ADD_TO_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FROM_WISHLIST", function() { return DELETE_FROM_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ALL_FROM_WISHLIST", function() { return DELETE_ALL_FROM_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToWishlist", function() { return addToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFromWishlist", function() { return deleteFromWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAllFromWishlist", function() { return deleteAllFromWishlist; });
const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
const DELETE_FROM_WISHLIST = "DELETE_FROM_WISHLIST";
const DELETE_ALL_FROM_WISHLIST = "DELETE_ALL_FROM_WISHLIST"; // add to wishlist

const addToWishlist = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Added To Wishlist", {
        appearance: "success",
        autoDismiss: true
      });
    }

    dispatch({
      type: ADD_TO_WISHLIST,
      payload: item
    });
  };
}; // delete from wishlist

const deleteFromWishlist = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Removed From Wishlist", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: DELETE_FROM_WISHLIST,
      payload: item
    });
  };
}; //delete all from wishlist

const deleteAllFromWishlist = addToast => {
  return dispatch => {
    if (addToast) {
      addToast("Removed All From Wishlist", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: DELETE_ALL_FROM_WISHLIST
    });
  };
};

/***/ }),

/***/ "./redux/reducers/cartReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/cartReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_cartActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/cartActions */ "./redux/actions/cartActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initState = [];

const cartReducer = (state = initState, action) => {
  const cartItems = state,
        product = action.payload;

  if (action.type === _actions_cartActions__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_CART"]) {
    // for non variant products
    if (product.variation === undefined) {
      const cartItem = cartItems.filter(item => item.id === product.id)[0];

      if (cartItem === undefined) {
        return [...cartItems, _objectSpread(_objectSpread({}, product), {}, {
          quantity: product.quantity ? product.quantity : 1,
          cartItemId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
        })];
      } else {
        return cartItems.map(item => item.cartItemId === cartItem.cartItemId ? _objectSpread(_objectSpread({}, item), {}, {
          quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1
        }) : item);
      } // for variant products

    } else {
      const cartItem = cartItems.filter(item => item.id === product.id && product.selectedProductColor && product.selectedProductColor === item.selectedProductColor && product.selectedProductSize && product.selectedProductSize === item.selectedProductSize && (product.cartItemId ? product.cartItemId === item.cartItemId : true))[0];

      if (cartItem === undefined) {
        return [...cartItems, _objectSpread(_objectSpread({}, product), {}, {
          quantity: product.quantity ? product.quantity : 1,
          cartItemId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
        })];
      } else if (cartItem !== undefined && (cartItem.selectedProductColor !== product.selectedProductColor || cartItem.selectedProductSize !== product.selectedProductSize)) {
        return [...cartItems, _objectSpread(_objectSpread({}, product), {}, {
          quantity: product.quantity ? product.quantity : 1,
          cartItemId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
        })];
      } else {
        return cartItems.map(item => item.cartItemId === cartItem.cartItemId ? _objectSpread(_objectSpread({}, item), {}, {
          quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1,
          selectedProductColor: product.selectedProductColor,
          selectedProductSize: product.selectedProductSize
        }) : item);
      }
    }
  }

  if (action.type === _actions_cartActions__WEBPACK_IMPORTED_MODULE_1__["DECREASE_QUANTITY"]) {
    if (product.quantity === 1) {
      const remainingItems = (cartItems, product) => cartItems.filter(cartItem => cartItem.cartItemId !== product.cartItemId);

      return remainingItems(cartItems, product);
    } else {
      return cartItems.map(item => item.cartItemId === product.cartItemId ? _objectSpread(_objectSpread({}, item), {}, {
        quantity: item.quantity - 1
      }) : item);
    }
  }

  if (action.type === _actions_cartActions__WEBPACK_IMPORTED_MODULE_1__["DELETE_FROM_CART"]) {
    const remainingItems = (cartItems, product) => cartItems.filter(cartItem => cartItem.cartItemId !== product.cartItemId);

    return remainingItems(cartItems, product);
  }

  if (action.type === _actions_cartActions__WEBPACK_IMPORTED_MODULE_1__["DELETE_ALL_FROM_CART"]) {
    return cartItems.filter(item => {
      return false;
    });
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (cartReducer);

/***/ }),

/***/ "./redux/reducers/compareReducer.js":
/*!******************************************!*\
  !*** ./redux/reducers/compareReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_compareActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/compareActions */ "./redux/actions/compareActions.js");

const initState = [];

const compareReducer = (state = initState, action) => {
  const compareItems = state,
        product = action.payload;

  if (action.type === _actions_compareActions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_COMPARE"]) {
    const compareItem = compareItems.filter(item => item.id === product.id)[0];

    if (compareItem === undefined) {
      return [...compareItems, product];
    } else {
      return compareItems;
    }
  }

  if (action.type === _actions_compareActions__WEBPACK_IMPORTED_MODULE_0__["DELETE_FROM_COMPARE"]) {
    const remainingItems = (compareItems, product) => compareItems.filter(compareItem => compareItem.id !== product.id);

    return remainingItems(compareItems, product);
  }

  return compareItems;
};

/* harmony default export */ __webpack_exports__["default"] = (compareReducer);

/***/ }),

/***/ "./redux/reducers/productReducer.js":
/*!******************************************!*\
  !*** ./redux/reducers/productReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_productActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/productActions */ "./redux/actions/productActions.js");

const initState = [];

const productReducer = (state = initState, action) => {
  if (action.type === _actions_productActions__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS_SUCCESS"]) {
    state = action.payload.slice(0);
    return state;
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (productReducer);

/***/ }),

/***/ "./redux/reducers/rootReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/rootReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productReducer */ "./redux/reducers/productReducer.js");
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartReducer */ "./redux/reducers/cartReducer.js");
/* harmony import */ var _wishlistReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wishlistReducer */ "./redux/reducers/wishlistReducer.js");
/* harmony import */ var _compareReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compareReducer */ "./redux/reducers/compareReducer.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  productData: _productReducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  cartData: _cartReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  wishlistData: _wishlistReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  compareData: _compareReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/reducers/wishlistReducer.js":
/*!*******************************************!*\
  !*** ./redux/reducers/wishlistReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_wishlistActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/wishlistActions */ "./redux/actions/wishlistActions.js");

const initState = [];

const wishlistReducer = (state = initState, action) => {
  const wishlistItems = state,
        product = action.payload;

  if (action.type === _actions_wishlistActions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_WISHLIST"]) {
    const wishlistItem = wishlistItems.filter(item => item.id === product.id)[0];

    if (wishlistItem === undefined) {
      return [...wishlistItems, product];
    } else {
      return wishlistItems;
    }
  }

  if (action.type === _actions_wishlistActions__WEBPACK_IMPORTED_MODULE_0__["DELETE_FROM_WISHLIST"]) {
    const remainingItems = (wishlistItems, product) => wishlistItems.filter(wishlistItem => wishlistItem.id !== product.id);

    return remainingItems(wishlistItems, product);
  }

  if (action.type === _actions_wishlistActions__WEBPACK_IMPORTED_MODULE_0__["DELETE_ALL_FROM_WISHLIST"]) {
    return wishlistItems.filter(item => {
      return false;
    });
  }

  return wishlistItems;
};

/* harmony default export */ __webpack_exports__["default"] = (wishlistReducer);

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/rootReducer */ "./redux/reducers/rootReducer.js");






const persistConfig = {
  key: "primary",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default())
};
const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistReducer"])(persistConfig, _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_5__["default"]);
function initializeStore() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a)));
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toast-notifications":
/*!********************************************!*\
  !*** external "react-toast-notifications" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJlbG9hZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi93aXRoLXJlZHV4LXN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2NvbXBhcmVBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvcHJvZHVjdEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy93aXNobGlzdEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvY2FydFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvY29tcGFyZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvcHJvZHVjdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvcm9vdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvd2lzaGxpc3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJQcmVsb2FkZXIiLCJpc1NlcnZlciIsIl9fTkVYVF9SRURVWF9TVE9SRV9fIiwiZ2V0T3JDcmVhdGVTdG9yZSIsImluaXRpYWxTdGF0ZSIsImluaXRpYWxpemVTdG9yZSIsIndpbmRvdyIsIkFwcCIsIkFwcFdpdGhSZWR1eCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsInJlZHV4U3RvcmUiLCJjdHgiLCJhcHBQcm9wcyIsImluaXRpYWxSZWR1eFN0YXRlIiwiZ2V0U3RhdGUiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIkNvbnRhaW5lciIsImNyZWF0ZVVybCIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfcmVmIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJfZXJyb3JJbmZvIiwicm91dGVyIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidXJsIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwiZXhlY09uY2UiLCJjb25zb2xlIiwid2FybiIsInAiLCJjaGlsZHJlbiIsInBhdGhuYW1lIiwiYXNQYXRoIiwicXVlcnkiLCJiYWNrIiwicHVzaCIsImFzIiwicHVzaFRvIiwiaHJlZiIsInB1c2hSb3V0ZSIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIiwicGVyc2lzdG9yIiwicGVyc2lzdFN0b3JlIiwiZGlzcGF0Y2giLCJmZXRjaFByb2R1Y3RzIiwicHJvZHVjdHMiLCJwcm9jZXNzIiwiZW52IiwiUFVCTElDX1VSTCIsIndpdGhSZWR1eFN0b3JlIiwiQUREX1RPX0NBUlQiLCJERUNSRUFTRV9RVUFOVElUWSIsIkRFTEVURV9GUk9NX0NBUlQiLCJERUxFVEVfQUxMX0ZST01fQ0FSVCIsImFkZFRvQ2FydCIsIml0ZW0iLCJhZGRUb2FzdCIsInF1YW50aXR5Q291bnQiLCJzZWxlY3RlZFByb2R1Y3RDb2xvciIsInNlbGVjdGVkUHJvZHVjdFNpemUiLCJhcHBlYXJhbmNlIiwiYXV0b0Rpc21pc3MiLCJ0eXBlIiwicGF5bG9hZCIsInF1YW50aXR5IiwiZGVjcmVhc2VRdWFudGl0eSIsImRlbGV0ZUZyb21DYXJ0IiwiZGVsZXRlQWxsRnJvbUNhcnQiLCJjYXJ0SXRlbVN0b2NrIiwiY29sb3IiLCJzaXplIiwic3RvY2siLCJ2YXJpYXRpb24iLCJmaWx0ZXIiLCJzaW5nbGUiLCJuYW1lIiwiQUREX1RPX0NPTVBBUkUiLCJERUxFVEVfRlJPTV9DT01QQVJFIiwiYWRkVG9Db21wYXJlIiwiZGVsZXRlRnJvbUNvbXBhcmUiLCJGRVRDSF9QUk9EVUNUU19TVUNDRVNTIiwiZmV0Y2hQcm9kdWN0c1N1Y2Nlc3MiLCJBRERfVE9fV0lTSExJU1QiLCJERUxFVEVfRlJPTV9XSVNITElTVCIsIkRFTEVURV9BTExfRlJPTV9XSVNITElTVCIsImFkZFRvV2lzaGxpc3QiLCJkZWxldGVGcm9tV2lzaGxpc3QiLCJkZWxldGVBbGxGcm9tV2lzaGxpc3QiLCJpbml0U3RhdGUiLCJjYXJ0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY2FydEl0ZW1zIiwicHJvZHVjdCIsInVuZGVmaW5lZCIsImNhcnRJdGVtIiwiaWQiLCJjYXJ0SXRlbUlkIiwidXVpZHY0IiwibWFwIiwicmVtYWluaW5nSXRlbXMiLCJjb21wYXJlUmVkdWNlciIsImNvbXBhcmVJdGVtcyIsImNvbXBhcmVJdGVtIiwicHJvZHVjdFJlZHVjZXIiLCJzbGljZSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicHJvZHVjdERhdGEiLCJjYXJ0RGF0YSIsIndpc2hsaXN0RGF0YSIsIndpc2hsaXN0UmVkdWNlciIsImNvbXBhcmVEYXRhIiwid2lzaGxpc3RJdGVtcyIsIndpc2hsaXN0SXRlbSIsInBlcnNpc3RDb25maWciLCJrZXkiLCJzdG9yYWdlIiwicGVyc2lzdGVkUmVkdWNlciIsInBlcnNpc3RSZWR1Y2VyIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlE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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1JLGFBQWEsR0FBRztBQUNwQkMsS0FBRyxFQUFFLFNBRGU7QUFFcEJDLDZFQUFPQTtBQUZhLENBQXRCO0FBS0EsTUFBTUMsZ0JBQWdCLEdBQUdDLG9FQUFjLENBQUNKLGFBQUQsRUFBZ0JULDZEQUFoQixDQUF2QztBQUVPLFNBQVNoSSxlQUFULEdBQTJCO0FBQ2hDLFNBQU84SSx5REFBVyxDQUNoQkYsZ0JBRGdCLEVBRWhCRyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQ0Msa0RBQUQsQ0FBaEIsQ0FGSCxDQUFsQjtBQUlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJjb25zdCBQcmVsb2FkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZGVyXCI+PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyO1xyXG4iLCJpbXBvcnQgeyBpbml0aWFsaXplU3RvcmUgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuY29uc3QgX19ORVhUX1JFRFVYX1NUT1JFX18gPSBcIl9fTkVYVF9SRURVWF9TVE9SRV9fXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRPckNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gIC8vIEFsd2F5cyBtYWtlIGEgbmV3IHN0b3JlIGlmIHNlcnZlciwgb3RoZXJ3aXNlIHN0YXRlIGlzIHNoYXJlZCBiZXR3ZWVuIHJlcXVlc3RzXHJcbiAgaWYgKGlzU2VydmVyKSB7XHJcbiAgICByZXR1cm4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgc3RvcmUgaWYgdW5hdmFpbGFibGUgb24gdGhlIGNsaWVudCBhbmQgc2V0IGl0IG9uIHRoZSB3aW5kb3cgb2JqZWN0XHJcbiAgaWYgKCF3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dKSB7XHJcbiAgICB3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dID0gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG4gIHJldHVybiB3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoQXBwKSA9PiB7XHJcbiAgcmV0dXJuIGNsYXNzIEFwcFdpdGhSZWR1eCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpIHtcclxuICAgICAgLy8gR2V0IG9yIENyZWF0ZSB0aGUgc3RvcmUgd2l0aCBgdW5kZWZpbmVkYCBhcyBpbml0aWFsU3RhdGVcclxuICAgICAgLy8gVGhpcyBhbGxvd3MgeW91IHRvIHNldCBhIGN1c3RvbSBkZWZhdWx0IGluaXRpYWxTdGF0ZVxyXG4gICAgICBjb25zdCByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSgpO1xyXG5cclxuICAgICAgLy8gUHJvdmlkZSB0aGUgc3RvcmUgdG8gZ2V0SW5pdGlhbFByb3BzIG9mIHBhZ2VzXHJcbiAgICAgIGFwcENvbnRleHQuY3R4LnJlZHV4U3RvcmUgPSByZWR1eFN0b3JlO1xyXG5cclxuICAgICAgbGV0IGFwcFByb3BzID0ge307XHJcbiAgICAgIGlmICh0eXBlb2YgQXBwLmdldEluaXRpYWxQcm9wcyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmFwcFByb3BzLFxyXG4gICAgICAgIGluaXRpYWxSZWR1eFN0YXRlOiByZWR1eFN0b3JlLmdldFN0YXRlKCksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICB0aGlzLnJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKHByb3BzLmluaXRpYWxSZWR1eFN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiA8QXBwIHsuLi50aGlzLnByb3BzfSByZWR1eFN0b3JlPXt0aGlzLnJlZHV4U3RvcmV9IC8+O1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5Db250YWluZXI9Q29udGFpbmVyO2V4cG9ydHMuY3JlYXRlVXJsPWNyZWF0ZVVybDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzOy8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoX3JlZil7dmFye0NvbXBvbmVudCxjdHh9PV9yZWY7dmFyIHBhZ2VQcm9wcz1hd2FpdCgwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsY3R4KTtyZXR1cm57cGFnZVByb3BzfTt9Y2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50ey8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4vLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsX2Vycm9ySW5mbyl7dGhyb3cgZXJyb3I7fXJlbmRlcigpe3Zhcntyb3V0ZXIsQ29tcG9uZW50LHBhZ2VQcm9wcyxfX05fU1NHLF9fTl9TU1B9PXRoaXMucHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe30scGFnZVByb3BzLC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiEoX19OX1NTR3x8X19OX1NTUCk/e3VybDpjcmVhdGVVcmwocm91dGVyKX06e30pKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO3ZhciB3YXJuQ29udGFpbmVyO3ZhciB3YXJuVXJsO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt3YXJuQ29udGFpbmVyPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLndhcm4oXCJXYXJuaW5nOiB0aGUgYENvbnRhaW5lcmAgaW4gYF9hcHBgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkXCIpO30pO3dhcm5Vcmw9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUuZXJyb3IoXCJXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3VybC1kZXByZWNhdGVkXCIpO30pO30vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZnVuY3Rpb24gQ29udGFpbmVyKHApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5Db250YWluZXIoKTtyZXR1cm4gcC5jaGlsZHJlbjt9ZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcil7Ly8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbnZhcntwYXRobmFtZSxhc1BhdGgscXVlcnl9PXJvdXRlcjtyZXR1cm57Z2V0IHF1ZXJ5KCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBxdWVyeTt9LGdldCBwYXRobmFtZSgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcGF0aG5hbWU7fSxnZXQgYXNQYXRoKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBhc1BhdGg7fSxiYWNrOigpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JvdXRlci5iYWNrKCk7fSxwdXNoOih1cmwsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiByb3V0ZXIucHVzaCh1cmwsYXMpO30scHVzaFRvOihocmVmLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTt2YXIgcHVzaFJvdXRlPWFzP2hyZWY6Jyc7dmFyIHB1c2hVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSxwdXNoVXJsKTt9LHJlcGxhY2U6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCxhcyk7fSxyZXBsYWNlVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciByZXBsYWNlUm91dGU9YXM/aHJlZjonJzt2YXIgcmVwbGFjZVVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLHJlcGxhY2VVcmwpO319O30iLCJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCB3aXRoUmVkdXhTdG9yZSBmcm9tIFwiLi4vbGliL3dpdGgtcmVkdXgtc3RvcmVcIlxyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IFRvYXN0UHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiXHJcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCJcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiXHJcbmltcG9ydCB7IGZldGNoUHJvZHVjdHMgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9wcm9kdWN0QWN0aW9uc1wiXHJcbmltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vZGF0YS9wcm9kdWN0cy5qc29uXCJcclxuaW1wb3J0IFwiLi4vYXNzZXRzL3Njc3Mvc3R5bGVzLnNjc3NcIlxyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1ByZWxvYWRlclwiXHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5wZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUocHJvcHMucmVkdXhTdG9yZSlcclxuICAgIHByb3BzLnJlZHV4U3RvcmUuZGlzcGF0Y2goZmV0Y2hQcm9kdWN0cyhwcm9kdWN0cykpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPiMgWkVSMCBTSDBQICM8L3RpdGxlPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9mYXZpY29uLmljb1wifSAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9V29yaytTYW5zOml0YWwsd2dodEAwLDMwMDAsNDAwMCw1MDAwLDYwMDAsNzAwMSwzMDAxLDQwMDEsNTAwMSw2MDAxLDcwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxUb2FzdFByb3ZpZGVyIHBsYWNlbWVudD1cImJvdHRvbS1sZWZ0XCI+XHJcbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3JlZHV4U3RvcmV9PlxyXG4gICAgICAgICAgICA8UGVyc2lzdEdhdGUgbG9hZGluZz17PFByZWxvYWRlciAvPn0gcGVyc2lzdG9yPXt0aGlzLnBlcnNpc3Rvcn0+XHJcbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8L1RvYXN0UHJvdmlkZXI+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXhTdG9yZShNeUFwcClcclxuIiwiZXhwb3J0IGNvbnN0IEFERF9UT19DQVJUID0gXCJBRERfVE9fQ0FSVFwiO1xyXG5leHBvcnQgY29uc3QgREVDUkVBU0VfUVVBTlRJVFkgPSBcIkRFQ1JFQVNFX1FVQU5USVRZXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfRlJPTV9DQVJUID0gXCJERUxFVEVfRlJPTV9DQVJUXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQUxMX0ZST01fQ0FSVCA9IFwiREVMRVRFX0FMTF9GUk9NX0NBUlRcIjtcclxuXHJcbi8vYWRkIHRvIGNhcnRcclxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChcclxuICBpdGVtLFxyXG4gIGFkZFRvYXN0LFxyXG4gIHF1YW50aXR5Q291bnQsXHJcbiAgc2VsZWN0ZWRQcm9kdWN0Q29sb3IsXHJcbiAgc2VsZWN0ZWRQcm9kdWN0U2l6ZVxyXG4pID0+IHtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgaWYgKGFkZFRvYXN0KSB7XHJcbiAgICAgIGFkZFRvYXN0KFwiQWRkZWQgVG8gQ2FydFwiLCB7IGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiLCBhdXRvRGlzbWlzczogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX1RPX0NBUlQsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgIHF1YW50aXR5OiBxdWFudGl0eUNvdW50LFxyXG4gICAgICAgIHNlbGVjdGVkUHJvZHVjdENvbG9yOiBzZWxlY3RlZFByb2R1Y3RDb2xvclxyXG4gICAgICAgICAgPyBzZWxlY3RlZFByb2R1Y3RDb2xvclxyXG4gICAgICAgICAgOiBpdGVtLnNlbGVjdGVkUHJvZHVjdENvbG9yXHJcbiAgICAgICAgICA/IGl0ZW0uc2VsZWN0ZWRQcm9kdWN0Q29sb3JcclxuICAgICAgICAgIDogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZFByb2R1Y3RTaXplOiBzZWxlY3RlZFByb2R1Y3RTaXplXHJcbiAgICAgICAgICA/IHNlbGVjdGVkUHJvZHVjdFNpemVcclxuICAgICAgICAgIDogaXRlbS5zZWxlY3RlZFByb2R1Y3RTaXplXHJcbiAgICAgICAgICA/IGl0ZW0uc2VsZWN0ZWRQcm9kdWN0U2l6ZVxyXG4gICAgICAgICAgOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcbi8vZGVjcmVhc2UgZnJvbSBjYXJ0XHJcbmV4cG9ydCBjb25zdCBkZWNyZWFzZVF1YW50aXR5ID0gKGl0ZW0sIGFkZFRvYXN0KSA9PiB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIGlmIChhZGRUb2FzdCkge1xyXG4gICAgICBhZGRUb2FzdChcIkl0ZW0gRGVjcmVtZW50ZWQgRnJvbSBDYXJ0XCIsIHtcclxuICAgICAgICBhcHBlYXJhbmNlOiBcIndhcm5pbmdcIixcclxuICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogREVDUkVBU0VfUVVBTlRJVFksIHBheWxvYWQ6IGl0ZW0gfSk7XHJcbiAgfTtcclxufTtcclxuLy9kZWxldGUgZnJvbSBjYXJ0XHJcbmV4cG9ydCBjb25zdCBkZWxldGVGcm9tQ2FydCA9IChpdGVtLCBhZGRUb2FzdCkgPT4ge1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICBpZiAoYWRkVG9hc3QpIHtcclxuICAgICAgYWRkVG9hc3QoXCJSZW1vdmVkIEZyb20gQ2FydFwiLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiwgYXV0b0Rpc21pc3M6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IERFTEVURV9GUk9NX0NBUlQsIHBheWxvYWQ6IGl0ZW0gfSk7XHJcbiAgfTtcclxufTtcclxuLy9kZWxldGUgYWxsIGZyb20gY2FydFxyXG5leHBvcnQgY29uc3QgZGVsZXRlQWxsRnJvbUNhcnQgPSBhZGRUb2FzdCA9PiB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIGlmIChhZGRUb2FzdCkge1xyXG4gICAgICBhZGRUb2FzdChcIlJlbW92ZWQgQWxsIEZyb20gQ2FydFwiLCB7XHJcbiAgICAgICAgYXBwZWFyYW5jZTogXCJlcnJvclwiLFxyXG4gICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBERUxFVEVfQUxMX0ZST01fQ0FSVCB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuLy8gZ2V0IHN0b2NrIG9mIGNhcnQgaXRlbVxyXG5leHBvcnQgY29uc3QgY2FydEl0ZW1TdG9jayA9IChpdGVtLCBjb2xvciwgc2l6ZSkgPT4ge1xyXG4gIGlmIChpdGVtLnN0b2NrKSB7XHJcbiAgICByZXR1cm4gaXRlbS5zdG9jaztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGl0ZW0udmFyaWF0aW9uXHJcbiAgICAgIC5maWx0ZXIoc2luZ2xlID0+IHNpbmdsZS5jb2xvciA9PT0gY29sb3IpWzBdXHJcbiAgICAgIC5zaXplLmZpbHRlcihzaW5nbGUgPT4gc2luZ2xlLm5hbWUgPT09IHNpemUpWzBdLnN0b2NrO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IEFERF9UT19DT01QQVJFID0gXCJBRERfVE9fQ09NUEFSRVwiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0ZST01fQ09NUEFSRSA9IFwiREVMRVRFX0ZST01fQ09NUEFSRVwiO1xyXG5cclxuLy8gYWRkIHRvIGNvbXBhcmVcclxuZXhwb3J0IGNvbnN0IGFkZFRvQ29tcGFyZSA9IChpdGVtLCBhZGRUb2FzdCkgPT4ge1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICBpZiAoYWRkVG9hc3QpIHtcclxuICAgICAgYWRkVG9hc3QoXCJBZGRlZCBUbyBDb21wYXJlXCIsIHtcclxuICAgICAgICBhcHBlYXJhbmNlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogQUREX1RPX0NPTVBBUkUsIHBheWxvYWQ6IGl0ZW0gfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbi8vIGRlbGV0ZSBmcm9tIGNvbXBhcmVcclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUZyb21Db21wYXJlID0gKGl0ZW0sIGFkZFRvYXN0KSA9PiB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIGlmIChhZGRUb2FzdCkge1xyXG4gICAgICBhZGRUb2FzdChcIlJlbW92ZWQgRnJvbSBDb21wYXJlXCIsIHtcclxuICAgICAgICBhcHBlYXJhbmNlOiBcImVycm9yXCIsXHJcbiAgICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IERFTEVURV9GUk9NX0NPTVBBUkUsIHBheWxvYWQ6IGl0ZW0gfSk7XHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IEZFVENIX1BST0RVQ1RTX1NVQ0NFU1MgPSBcIkZFVENIX1BST0RVQ1RTX1NVQ0NFU1NcIjtcclxuXHJcbmNvbnN0IGZldGNoUHJvZHVjdHNTdWNjZXNzID0gcHJvZHVjdHMgPT4gKHtcclxuICB0eXBlOiBGRVRDSF9QUk9EVUNUU19TVUNDRVNTLFxyXG4gIHBheWxvYWQ6IHByb2R1Y3RzXHJcbn0pO1xyXG5cclxuLy8gZmV0Y2ggcHJvZHVjdHNcclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHMgPSBwcm9kdWN0cyA9PiB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNTdWNjZXNzKHByb2R1Y3RzKSk7XHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IEFERF9UT19XSVNITElTVCA9IFwiQUREX1RPX1dJU0hMSVNUXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfRlJPTV9XSVNITElTVCA9IFwiREVMRVRFX0ZST01fV0lTSExJU1RcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9BTExfRlJPTV9XSVNITElTVCA9IFwiREVMRVRFX0FMTF9GUk9NX1dJU0hMSVNUXCI7XHJcblxyXG4vLyBhZGQgdG8gd2lzaGxpc3RcclxuZXhwb3J0IGNvbnN0IGFkZFRvV2lzaGxpc3QgPSAoaXRlbSwgYWRkVG9hc3QpID0+IHtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgaWYgKGFkZFRvYXN0KSB7XHJcbiAgICAgIGFkZFRvYXN0KFwiQWRkZWQgVG8gV2lzaGxpc3RcIiwge1xyXG4gICAgICAgIGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBRERfVE9fV0lTSExJU1QsIHBheWxvYWQ6IGl0ZW0gfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbi8vIGRlbGV0ZSBmcm9tIHdpc2hsaXN0XHJcbmV4cG9ydCBjb25zdCBkZWxldGVGcm9tV2lzaGxpc3QgPSAoaXRlbSwgYWRkVG9hc3QpID0+IHtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgaWYgKGFkZFRvYXN0KSB7XHJcbiAgICAgIGFkZFRvYXN0KFwiUmVtb3ZlZCBGcm9tIFdpc2hsaXN0XCIsIHtcclxuICAgICAgICBhcHBlYXJhbmNlOiBcImVycm9yXCIsXHJcbiAgICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IERFTEVURV9GUk9NX1dJU0hMSVNULCBwYXlsb2FkOiBpdGVtIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG4vL2RlbGV0ZSBhbGwgZnJvbSB3aXNobGlzdFxyXG5leHBvcnQgY29uc3QgZGVsZXRlQWxsRnJvbVdpc2hsaXN0ID0gYWRkVG9hc3QgPT4ge1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICBpZiAoYWRkVG9hc3QpIHtcclxuICAgICAgYWRkVG9hc3QoXCJSZW1vdmVkIEFsbCBGcm9tIFdpc2hsaXN0XCIsIHtcclxuICAgICAgICBhcHBlYXJhbmNlOiBcImVycm9yXCIsXHJcbiAgICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IERFTEVURV9BTExfRlJPTV9XSVNITElTVCB9KTtcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQge1xyXG4gIEFERF9UT19DQVJULFxyXG4gIERFQ1JFQVNFX1FVQU5USVRZLFxyXG4gIERFTEVURV9GUk9NX0NBUlQsXHJcbiAgREVMRVRFX0FMTF9GUk9NX0NBUlRcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5cclxuY29uc3QgaW5pdFN0YXRlID0gW107XHJcblxyXG5jb25zdCBjYXJ0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgY2FydEl0ZW1zID0gc3RhdGUsXHJcbiAgICBwcm9kdWN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gQUREX1RPX0NBUlQpIHtcclxuICAgIC8vIGZvciBub24gdmFyaWFudCBwcm9kdWN0c1xyXG4gICAgaWYgKHByb2R1Y3QudmFyaWF0aW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgY2FydEl0ZW0gPSBjYXJ0SXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKVswXTtcclxuICAgICAgaWYgKGNhcnRJdGVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgLi4uY2FydEl0ZW1zLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgICBxdWFudGl0eTogcHJvZHVjdC5xdWFudGl0eSA/IHByb2R1Y3QucXVhbnRpdHkgOiAxLFxyXG4gICAgICAgICAgICBjYXJ0SXRlbUlkOiB1dWlkdjQoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGNhcnRJdGVtcy5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICBpdGVtLmNhcnRJdGVtSWQgPT09IGNhcnRJdGVtLmNhcnRJdGVtSWRcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IHByb2R1Y3QucXVhbnRpdHlcclxuICAgICAgICAgICAgICAgICAgPyBpdGVtLnF1YW50aXR5ICsgcHJvZHVjdC5xdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgICA6IGl0ZW0ucXVhbnRpdHkgKyAxXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IGl0ZW1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGZvciB2YXJpYW50IHByb2R1Y3RzXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjYXJ0SXRlbSA9IGNhcnRJdGVtcy5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW0pID0+XHJcbiAgICAgICAgICBpdGVtLmlkID09PSBwcm9kdWN0LmlkICYmXHJcbiAgICAgICAgICBwcm9kdWN0LnNlbGVjdGVkUHJvZHVjdENvbG9yICYmXHJcbiAgICAgICAgICBwcm9kdWN0LnNlbGVjdGVkUHJvZHVjdENvbG9yID09PSBpdGVtLnNlbGVjdGVkUHJvZHVjdENvbG9yICYmXHJcbiAgICAgICAgICBwcm9kdWN0LnNlbGVjdGVkUHJvZHVjdFNpemUgJiZcclxuICAgICAgICAgIHByb2R1Y3Quc2VsZWN0ZWRQcm9kdWN0U2l6ZSA9PT0gaXRlbS5zZWxlY3RlZFByb2R1Y3RTaXplICYmXHJcbiAgICAgICAgICAocHJvZHVjdC5jYXJ0SXRlbUlkID8gcHJvZHVjdC5jYXJ0SXRlbUlkID09PSBpdGVtLmNhcnRJdGVtSWQgOiB0cnVlKVxyXG4gICAgICApWzBdO1xyXG5cclxuICAgICAgaWYgKGNhcnRJdGVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgLi4uY2FydEl0ZW1zLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgICBxdWFudGl0eTogcHJvZHVjdC5xdWFudGl0eSA/IHByb2R1Y3QucXVhbnRpdHkgOiAxLFxyXG4gICAgICAgICAgICBjYXJ0SXRlbUlkOiB1dWlkdjQoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgY2FydEl0ZW0gIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIChjYXJ0SXRlbS5zZWxlY3RlZFByb2R1Y3RDb2xvciAhPT0gcHJvZHVjdC5zZWxlY3RlZFByb2R1Y3RDb2xvciB8fFxyXG4gICAgICAgICAgY2FydEl0ZW0uc2VsZWN0ZWRQcm9kdWN0U2l6ZSAhPT0gcHJvZHVjdC5zZWxlY3RlZFByb2R1Y3RTaXplKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgLi4uY2FydEl0ZW1zLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgICBxdWFudGl0eTogcHJvZHVjdC5xdWFudGl0eSA/IHByb2R1Y3QucXVhbnRpdHkgOiAxLFxyXG4gICAgICAgICAgICBjYXJ0SXRlbUlkOiB1dWlkdjQoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGNhcnRJdGVtcy5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICBpdGVtLmNhcnRJdGVtSWQgPT09IGNhcnRJdGVtLmNhcnRJdGVtSWRcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IHByb2R1Y3QucXVhbnRpdHlcclxuICAgICAgICAgICAgICAgICAgPyBpdGVtLnF1YW50aXR5ICsgcHJvZHVjdC5xdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgICA6IGl0ZW0ucXVhbnRpdHkgKyAxLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQcm9kdWN0Q29sb3I6IHByb2R1Y3Quc2VsZWN0ZWRQcm9kdWN0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFByb2R1Y3RTaXplOiBwcm9kdWN0LnNlbGVjdGVkUHJvZHVjdFNpemVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDogaXRlbVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gREVDUkVBU0VfUVVBTlRJVFkpIHtcclxuICAgIGlmIChwcm9kdWN0LnF1YW50aXR5ID09PSAxKSB7XHJcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0l0ZW1zID0gKGNhcnRJdGVtcywgcHJvZHVjdCkgPT5cclxuICAgICAgICBjYXJ0SXRlbXMuZmlsdGVyKFxyXG4gICAgICAgICAgKGNhcnRJdGVtKSA9PiBjYXJ0SXRlbS5jYXJ0SXRlbUlkICE9PSBwcm9kdWN0LmNhcnRJdGVtSWRcclxuICAgICAgICApO1xyXG4gICAgICByZXR1cm4gcmVtYWluaW5nSXRlbXMoY2FydEl0ZW1zLCBwcm9kdWN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjYXJ0SXRlbXMubWFwKChpdGVtKSA9PlxyXG4gICAgICAgIGl0ZW0uY2FydEl0ZW1JZCA9PT0gcHJvZHVjdC5jYXJ0SXRlbUlkXHJcbiAgICAgICAgICA/IHsgLi4uaXRlbSwgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgLSAxIH1cclxuICAgICAgICAgIDogaXRlbVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSBERUxFVEVfRlJPTV9DQVJUKSB7XHJcbiAgICBjb25zdCByZW1haW5pbmdJdGVtcyA9IChjYXJ0SXRlbXMsIHByb2R1Y3QpID0+XHJcbiAgICAgIGNhcnRJdGVtcy5maWx0ZXIoXHJcbiAgICAgICAgKGNhcnRJdGVtKSA9PiBjYXJ0SXRlbS5jYXJ0SXRlbUlkICE9PSBwcm9kdWN0LmNhcnRJdGVtSWRcclxuICAgICAgKTtcclxuICAgIHJldHVybiByZW1haW5pbmdJdGVtcyhjYXJ0SXRlbXMsIHByb2R1Y3QpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSBERUxFVEVfQUxMX0ZST01fQ0FSVCkge1xyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJ0UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgQUREX1RPX0NPTVBBUkUsIERFTEVURV9GUk9NX0NPTVBBUkUgfSBmcm9tIFwiLi4vYWN0aW9ucy9jb21wYXJlQWN0aW9uc1wiO1xyXG5cclxuY29uc3QgaW5pdFN0YXRlID0gW107XHJcblxyXG5jb25zdCBjb21wYXJlUmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgY29tcGFyZUl0ZW1zID0gc3RhdGUsXHJcbiAgICBwcm9kdWN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gQUREX1RPX0NPTVBBUkUpIHtcclxuICAgIGNvbnN0IGNvbXBhcmVJdGVtID0gY29tcGFyZUl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpWzBdO1xyXG4gICAgaWYgKGNvbXBhcmVJdGVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIFsuLi5jb21wYXJlSXRlbXMsIHByb2R1Y3RdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNvbXBhcmVJdGVtcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gREVMRVRFX0ZST01fQ09NUEFSRSkge1xyXG4gICAgY29uc3QgcmVtYWluaW5nSXRlbXMgPSAoY29tcGFyZUl0ZW1zLCBwcm9kdWN0KSA9PlxyXG4gICAgICBjb21wYXJlSXRlbXMuZmlsdGVyKGNvbXBhcmVJdGVtID0+IGNvbXBhcmVJdGVtLmlkICE9PSBwcm9kdWN0LmlkKTtcclxuICAgIHJldHVybiByZW1haW5pbmdJdGVtcyhjb21wYXJlSXRlbXMsIHByb2R1Y3QpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBhcmVJdGVtcztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBhcmVSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBGRVRDSF9QUk9EVUNUU19TVUNDRVNTIH0gZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdEFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IFtdO1xyXG5cclxuY29uc3QgcHJvZHVjdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUykge1xyXG4gICAgc3RhdGUgPSBhY3Rpb24ucGF5bG9hZC5zbGljZSgwKTtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjdFJlZHVjZXIgZnJvbSBcIi4vcHJvZHVjdFJlZHVjZXJcIjtcclxuaW1wb3J0IGNhcnRSZWR1Y2VyIGZyb20gXCIuL2NhcnRSZWR1Y2VyXCI7XHJcbmltcG9ydCB3aXNobGlzdFJlZHVjZXIgZnJvbSBcIi4vd2lzaGxpc3RSZWR1Y2VyXCI7XHJcbmltcG9ydCBjb21wYXJlUmVkdWNlciBmcm9tIFwiLi9jb21wYXJlUmVkdWNlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBwcm9kdWN0RGF0YTogcHJvZHVjdFJlZHVjZXIsXHJcbiAgY2FydERhdGE6IGNhcnRSZWR1Y2VyLFxyXG4gIHdpc2hsaXN0RGF0YTogd2lzaGxpc3RSZWR1Y2VyLFxyXG4gIGNvbXBhcmVEYXRhOiBjb21wYXJlUmVkdWNlcixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHtcclxuICBBRERfVE9fV0lTSExJU1QsXHJcbiAgREVMRVRFX0ZST01fV0lTSExJU1QsXHJcbiAgREVMRVRFX0FMTF9GUk9NX1dJU0hMSVNUXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvd2lzaGxpc3RBY3Rpb25zXCI7XHJcblxyXG5jb25zdCBpbml0U3RhdGUgPSBbXTtcclxuXHJcbmNvbnN0IHdpc2hsaXN0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3Qgd2lzaGxpc3RJdGVtcyA9IHN0YXRlLFxyXG4gICAgcHJvZHVjdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IEFERF9UT19XSVNITElTVCkge1xyXG4gICAgY29uc3Qgd2lzaGxpc3RJdGVtID0gd2lzaGxpc3RJdGVtcy5maWx0ZXIoXHJcbiAgICAgIGl0ZW0gPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZFxyXG4gICAgKVswXTtcclxuICAgIGlmICh3aXNobGlzdEl0ZW0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gWy4uLndpc2hsaXN0SXRlbXMsIHByb2R1Y3RdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHdpc2hsaXN0SXRlbXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IERFTEVURV9GUk9NX1dJU0hMSVNUKSB7XHJcbiAgICBjb25zdCByZW1haW5pbmdJdGVtcyA9ICh3aXNobGlzdEl0ZW1zLCBwcm9kdWN0KSA9PlxyXG4gICAgICB3aXNobGlzdEl0ZW1zLmZpbHRlcih3aXNobGlzdEl0ZW0gPT4gd2lzaGxpc3RJdGVtLmlkICE9PSBwcm9kdWN0LmlkKTtcclxuICAgIHJldHVybiByZW1haW5pbmdJdGVtcyh3aXNobGlzdEl0ZW1zLCBwcm9kdWN0KTtcclxuICB9XHJcblxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gREVMRVRFX0FMTF9GUk9NX1dJU0hMSVNUKSB7XHJcbiAgICByZXR1cm4gd2lzaGxpc3RJdGVtcy5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHdpc2hsaXN0SXRlbXM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXNobGlzdFJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiO1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvcm9vdFJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAga2V5OiBcInByaW1hcnlcIixcclxuICBzdG9yYWdlXHJcbn07XHJcblxyXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcm9vdFJlZHVjZXIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVTdG9yZSgpIHtcclxuICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxyXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=