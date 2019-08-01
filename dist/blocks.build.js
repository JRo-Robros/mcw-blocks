/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion_trigger_block_js__ = __webpack_require__(/*! ./accordion-trigger/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_content_block_js__ = __webpack_require__(/*! ./accordion-content/block.js */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_block_js__ = __webpack_require__(/*! ./accordion/block.js */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slidebox_content_block_js__ = __webpack_require__(/*! ./slidebox-content/block.js */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slidebox_img_block_js__ = __webpack_require__(/*! ./slidebox-img/block.js */ 13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slidebox_block_js__ = __webpack_require__(/*! ./slidebox/block.js */ 16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__slidebox_holder_block_js__ = __webpack_require__(/*! ./slidebox-holder/block.js */ 19);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__parallax_img_block_js__ = __webpack_require__(/*! ./parallax-img/block.js */ 22);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slide_block_js__ = __webpack_require__(/*! ./slide/block.js */ 25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__slider_block_js__ = __webpack_require__(/*! ./slider/block.js */ 28);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5pbXBvcnQgJy4vYWNjb3JkaW9uLXRyaWdnZXIvYmxvY2suanMnO1xuaW1wb3J0ICcuL2FjY29yZGlvbi1jb250ZW50L2Jsb2NrLmpzJztcbmltcG9ydCAnLi9hY2NvcmRpb24vYmxvY2suanMnO1xuaW1wb3J0ICcuL3NsaWRlYm94LWNvbnRlbnQvYmxvY2suanMnO1xuaW1wb3J0ICcuL3NsaWRlYm94LWltZy9ibG9jay5qcyc7XG5pbXBvcnQgJy4vc2xpZGVib3gvYmxvY2suanMnO1xuaW1wb3J0ICcuL3NsaWRlYm94LWhvbGRlci9ibG9jay5qcyc7XG5pbXBvcnQgJy4vcGFyYWxsYXgtaW1nL2Jsb2NrLmpzJztcbmltcG9ydCAnLi9zbGlkZS9ibG9jay5qcyc7XG5pbXBvcnQgJy4vc2xpZGVyL2Jsb2NrLmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************************!*\
  !*** ./src/accordion-trigger/block.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n//  Import CSS.\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InnerBlocks = wp.editor.InnerBlocks;\n\n\nregisterBlockType('mcw-blocks/accordion-trigger', {\n\ttitle: 'MCW Accordion Trigger',\n\ticon: 'menu',\n\tcategory: 'layout',\n\tsupports: {\n\t\t'align': true\n\t},\n\tparent: ['mcw-blocks/accordion'],\n\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'strong',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Accordion Trigger'\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(InnerBlocks, null)\n\t\t);\n\t},\n\tsave: function save(_ref2) {\n\t\tvar className = _ref2.className;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(InnerBlocks.Content, null),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'mcw-accordion-indicator' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'btn round' },\n\t\t\t\t\twp.element.createElement('i', { className: 'fa fa-angle-double-down' })\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hY2NvcmRpb24tdHJpZ2dlci9ibG9jay5qcz81NzAyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIElubmVyQmxvY2tzID0gd3AuZWRpdG9yLklubmVyQmxvY2tzO1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdtY3ctYmxvY2tzL2FjY29yZGlvbi10cmlnZ2VyJywge1xuXHR0aXRsZTogJ01DVyBBY2NvcmRpb24gVHJpZ2dlcicsXG5cdGljb246ICdtZW51Jyxcblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLFxuXHRzdXBwb3J0czoge1xuXHRcdCdhbGlnbic6IHRydWVcblx0fSxcblx0cGFyZW50OiBbJ21jdy1ibG9ja3MvYWNjb3JkaW9uJ10sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lO1xuXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdzdHJvbmcnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0J0FjY29yZGlvbiBUcmlnZ2VyJ1xuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCBudWxsKVxuXHRcdCk7XG5cdH0sXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZjIpIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdtY3ctYWNjb3JkaW9uLWluZGljYXRvcicgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnYnRuIHJvdW5kJyB9LFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaScsIHsgY2xhc3NOYW1lOiAnZmEgZmEtYW5nbGUtZG91YmxlLWRvd24nIH0pXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY2NvcmRpb24tdHJpZ2dlci9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************************!*\
  !*** ./src/accordion-trigger/style.scss ***!
  \******************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hY2NvcmRpb24tdHJpZ2dlci9zdHlsZS5zY3NzPzAzYmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY2NvcmRpb24tdHJpZ2dlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************************!*\
  !*** ./src/accordion-trigger/editor.scss ***!
  \*******************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hY2NvcmRpb24tdHJpZ2dlci9lZGl0b3Iuc2Nzcz9kNjg4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWNjb3JkaW9uLXRyaWdnZXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!****************************************!*\
  !*** ./src/accordion-content/block.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n//  Import CSS.\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InnerBlocks = wp.editor.InnerBlocks;\n\n\nregisterBlockType('mcw-blocks/accordion-content', {\n\ttitle: 'MCW Accordion Content',\n\ticon: 'arrow-down',\n\tcategory: 'layout',\n\tsupports: {\n\t\t'align': true\n\t},\n\tparent: ['mcw-blocks/accordion'],\n\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'strong',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Accordion Content'\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(InnerBlocks, null)\n\t\t);\n\t},\n\tsave: function save(_ref2) {\n\t\tvar className = _ref2.className;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'container' },\n\t\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hY2NvcmRpb24tY29udGVudC9ibG9jay5qcz80OGY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIElubmVyQmxvY2tzID0gd3AuZWRpdG9yLklubmVyQmxvY2tzO1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdtY3ctYmxvY2tzL2FjY29yZGlvbi1jb250ZW50Jywge1xuXHR0aXRsZTogJ01DVyBBY2NvcmRpb24gQ29udGVudCcsXG5cdGljb246ICdhcnJvdy1kb3duJyxcblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLFxuXHRzdXBwb3J0czoge1xuXHRcdCdhbGlnbic6IHRydWVcblx0fSxcblx0cGFyZW50OiBbJ21jdy1ibG9ja3MvYWNjb3JkaW9uJ10sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lO1xuXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdzdHJvbmcnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0J0FjY29yZGlvbiBDb250ZW50J1xuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCBudWxsKVxuXHRcdCk7XG5cdH0sXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZjIpIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdjb250YWluZXInIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjY29yZGlvbi1jb250ZW50L2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!******************************************!*\
  !*** ./src/accordion-content/style.scss ***!
  \******************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hY2NvcmRpb24tY29udGVudC9zdHlsZS5zY3NzPzI4ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY2NvcmRpb24tY29udGVudC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*******************************************!*\
  !*** ./src/accordion-content/editor.scss ***!
  \*******************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hY2NvcmRpb24tY29udGVudC9lZGl0b3Iuc2Nzcz9hMzUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWNjb3JkaW9uLWNvbnRlbnQvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!********************************!*\
  !*** ./src/accordion/block.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n//  Import CSS.\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InnerBlocks = wp.editor.InnerBlocks;\n\n\nvar TEMPLATE = [['mcw-blocks/accordion-trigger', {}], ['mcw-blocks/accordion-content', {}]];\n\nregisterBlockType('mcw-blocks/accordion', {\n\ttitle: 'MCW Accordion',\n\ticon: 'sort',\n\tcategory: 'layout',\n\tsupports: {\n\t\t'align': true\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\ttemplate: TEMPLATE,\n\t\t\t\tallowedBlocks: ['mcw-blocks/accordion-content', 'mcw-blocks/accordion-trigger']\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save(_ref2) {\n\t\tvar className = _ref2.className;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hY2NvcmRpb24vYmxvY2suanM/MWIwMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBJbm5lckJsb2NrcyA9IHdwLmVkaXRvci5Jbm5lckJsb2NrcztcblxuXG52YXIgVEVNUExBVEUgPSBbWydtY3ctYmxvY2tzL2FjY29yZGlvbi10cmlnZ2VyJywge31dLCBbJ21jdy1ibG9ja3MvYWNjb3JkaW9uLWNvbnRlbnQnLCB7fV1dO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnbWN3LWJsb2Nrcy9hY2NvcmRpb24nLCB7XG5cdHRpdGxlOiAnTUNXIEFjY29yZGlvbicsXG5cdGljb246ICdzb3J0Jyxcblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLFxuXHRzdXBwb3J0czoge1xuXHRcdCdhbGlnbic6IHRydWVcblx0fSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWU7XG5cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcywge1xuXHRcdFx0XHR0ZW1wbGF0ZTogVEVNUExBVEUsXG5cdFx0XHRcdGFsbG93ZWRCbG9ja3M6IFsnbWN3LWJsb2Nrcy9hY2NvcmRpb24tY29udGVudCcsICdtY3ctYmxvY2tzL2FjY29yZGlvbi10cmlnZ2VyJ11cblx0XHRcdH0pXG5cdFx0KTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMikge1xuXHRcdHZhciBjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWU7XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuQ29udGVudCwgbnVsbClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY2NvcmRpb24vYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**********************************!*\
  !*** ./src/accordion/style.scss ***!
  \**********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hY2NvcmRpb24vc3R5bGUuc2Nzcz84Y2UyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWNjb3JkaW9uL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!***********************************!*\
  !*** ./src/accordion/editor.scss ***!
  \***********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hY2NvcmRpb24vZWRpdG9yLnNjc3M/NGIxNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjY29yZGlvbi9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!***************************************!*\
  !*** ./src/slidebox-content/block.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n//  Import CSS.\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InnerBlocks = wp.editor.InnerBlocks;\n\n\nregisterBlockType('mcw-blocks/slidebox-content', {\n\ttitle: 'MCW Slidebox Content',\n\ticon: 'arrow-down',\n\tcategory: 'common',\n\tparent: ['mcw-blocks/slidebox'],\n\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'strong',\n\t\t\t\tnull,\n\t\t\t\t'Slidebox Content'\n\t\t\t),\n\t\t\twp.element.createElement(InnerBlocks, null)\n\t\t);\n\t},\n\tsave: function save(_ref2) {\n\t\tvar className = _ref2.className;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'container' },\n\t\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVib3gtY29udGVudC9ibG9jay5qcz9mNmY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIElubmVyQmxvY2tzID0gd3AuZWRpdG9yLklubmVyQmxvY2tzO1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdtY3ctYmxvY2tzL3NsaWRlYm94LWNvbnRlbnQnLCB7XG5cdHRpdGxlOiAnTUNXIFNsaWRlYm94IENvbnRlbnQnLFxuXHRpY29uOiAnYXJyb3ctZG93bicsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0cGFyZW50OiBbJ21jdy1ibG9ja3Mvc2xpZGVib3gnXSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWU7XG5cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3N0cm9uZycsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCdTbGlkZWJveCBDb250ZW50J1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2NrcywgbnVsbClcblx0XHQpO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYyKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IF9yZWYyLmNsYXNzTmFtZTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnY29udGFpbmVyJyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuQ29udGVudCwgbnVsbClcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zbGlkZWJveC1jb250ZW50L2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*****************************************!*\
  !*** ./src/slidebox-content/style.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVib3gtY29udGVudC9zdHlsZS5zY3NzPzQ4YmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zbGlkZWJveC1jb250ZW50L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!******************************************!*\
  !*** ./src/slidebox-content/editor.scss ***!
  \******************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVib3gtY29udGVudC9lZGl0b3Iuc2Nzcz8xZWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2xpZGVib3gtY29udGVudC9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!***********************************!*\
  !*** ./src/slidebox-img/block.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n//  Import CSS.\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InnerBlocks = wp.editor.InnerBlocks;\n\n\nvar TEMPLATE = [['core/image', {}]];\n\nregisterBlockType('mcw-blocks/slidebox-img', {\n\ttitle: 'MCW Slidebox Image',\n\ticon: 'arrow-down',\n\tcategory: 'common',\n\tparent: ['mcw-blocks/slidebox'],\n\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'strong',\n\t\t\t\tnull,\n\t\t\t\t'Slidebox Cover Image'\n\t\t\t),\n\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\ttemplate: TEMPLATE,\n\t\t\t\ttemplateLock: 'all'\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save(_ref2) {\n\t\tvar className = _ref2.className;\n\n\t\tclassName += \" slidebox\";\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVib3gtaW1nL2Jsb2NrLmpzPzc2MTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgSW5uZXJCbG9ja3MgPSB3cC5lZGl0b3IuSW5uZXJCbG9ja3M7XG5cblxudmFyIFRFTVBMQVRFID0gW1snY29yZS9pbWFnZScsIHt9XV07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdtY3ctYmxvY2tzL3NsaWRlYm94LWltZycsIHtcblx0dGl0bGU6ICdNQ1cgU2xpZGVib3ggSW1hZ2UnLFxuXHRpY29uOiAnYXJyb3ctZG93bicsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0cGFyZW50OiBbJ21jdy1ibG9ja3Mvc2xpZGVib3gnXSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWU7XG5cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3N0cm9uZycsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCdTbGlkZWJveCBDb3ZlciBJbWFnZSdcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIHtcblx0XHRcdFx0dGVtcGxhdGU6IFRFTVBMQVRFLFxuXHRcdFx0XHR0ZW1wbGF0ZUxvY2s6ICdhbGwnXG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0sXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZjIpIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lO1xuXG5cdFx0Y2xhc3NOYW1lICs9IFwiIHNsaWRlYm94XCI7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2xpZGVib3gtaW1nL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*************************************!*\
  !*** ./src/slidebox-img/style.scss ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVib3gtaW1nL3N0eWxlLnNjc3M/ZGYyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NsaWRlYm94LWltZy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**************************************!*\
  !*** ./src/slidebox-img/editor.scss ***!
  \**************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVib3gtaW1nL2VkaXRvci5zY3NzP2QzNDQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zbGlkZWJveC1pbWcvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!*******************************!*\
  !*** ./src/slidebox/block.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n//  Import CSS.\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InnerBlocks = wp.editor.InnerBlocks;\n\n\nvar TEMPLATE = [['mcw-blocks/slidebox-img', {}], ['mcw-blocks/slidebox-content', { placeholder: 'Slidebox Content' }]];\n\nregisterBlockType('mcw-blocks/slidebox', {\n\ttitle: 'MCW Slidebox',\n\ticon: 'sort',\n\tcategory: 'layout',\n\tparent: ['mcw-blocks/slidebox-holder'],\n\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\ttemplate: TEMPLATE\n\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save(_ref2) {\n\t\tvar className = _ref2.className;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVib3gvYmxvY2suanM/NzIyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBJbm5lckJsb2NrcyA9IHdwLmVkaXRvci5Jbm5lckJsb2NrcztcblxuXG52YXIgVEVNUExBVEUgPSBbWydtY3ctYmxvY2tzL3NsaWRlYm94LWltZycsIHt9XSwgWydtY3ctYmxvY2tzL3NsaWRlYm94LWNvbnRlbnQnLCB7IHBsYWNlaG9sZGVyOiAnU2xpZGVib3ggQ29udGVudCcgfV1dO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnbWN3LWJsb2Nrcy9zbGlkZWJveCcsIHtcblx0dGl0bGU6ICdNQ1cgU2xpZGVib3gnLFxuXHRpY29uOiAnc29ydCcsXG5cdGNhdGVnb3J5OiAnbGF5b3V0Jyxcblx0cGFyZW50OiBbJ21jdy1ibG9ja3Mvc2xpZGVib3gtaG9sZGVyJ10sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lO1xuXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIHtcblx0XHRcdFx0dGVtcGxhdGU6IFRFTVBMQVRFXG5cblx0XHRcdH0pXG5cdFx0KTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMikge1xuXHRcdHZhciBjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWU7XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuQ29udGVudCwgbnVsbClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zbGlkZWJveC9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*********************************!*\
  !*** ./src/slidebox/style.scss ***!
  \*********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVib3gvc3R5bGUuc2Nzcz83MDM2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2xpZGVib3gvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!**********************************!*\
  !*** ./src/slidebox/editor.scss ***!
  \**********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVib3gvZWRpdG9yLnNjc3M/YTUzNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NsaWRlYm94L2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!**************************************!*\
  !*** ./src/slidebox-holder/block.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 20);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 21);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n//  Import CSS.\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InnerBlocks = wp.editor.InnerBlocks;\n\n\nvar TEMPLATE = [['mcw-blocks/slidebox', {}], ['mcw-blocks/slidebox', {}], ['mcw-blocks/slidebox', {}]];\n\nregisterBlockType('mcw-blocks/slidebox-holder', {\n\ttitle: 'MCW Slidebox Holder',\n\ticon: 'sort',\n\tcategory: 'layout',\n\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\ttemplate: TEMPLATE\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save(_ref2) {\n\t\tvar className = _ref2.className;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVib3gtaG9sZGVyL2Jsb2NrLmpzP2IwZWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgSW5uZXJCbG9ja3MgPSB3cC5lZGl0b3IuSW5uZXJCbG9ja3M7XG5cblxudmFyIFRFTVBMQVRFID0gW1snbWN3LWJsb2Nrcy9zbGlkZWJveCcsIHt9XSwgWydtY3ctYmxvY2tzL3NsaWRlYm94Jywge31dLCBbJ21jdy1ibG9ja3Mvc2xpZGVib3gnLCB7fV1dO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnbWN3LWJsb2Nrcy9zbGlkZWJveC1ob2xkZXInLCB7XG5cdHRpdGxlOiAnTUNXIFNsaWRlYm94IEhvbGRlcicsXG5cdGljb246ICdzb3J0Jyxcblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZTtcblxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCB7XG5cdFx0XHRcdHRlbXBsYXRlOiBURU1QTEFURVxuXHRcdFx0fSlcblx0XHQpO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYyKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IF9yZWYyLmNsYXNzTmFtZTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NsaWRlYm94LWhvbGRlci9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!****************************************!*\
  !*** ./src/slidebox-holder/style.scss ***!
  \****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVib3gtaG9sZGVyL3N0eWxlLnNjc3M/MjY4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NsaWRlYm94LWhvbGRlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*****************************************!*\
  !*** ./src/slidebox-holder/editor.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVib3gtaG9sZGVyL2VkaXRvci5zY3NzPzhjZDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zbGlkZWJveC1ob2xkZXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!***********************************!*\
  !*** ./src/parallax-img/block.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 23);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n//  Import CSS.\n\n\n\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    getBlockDefaultClassName = _wp$blocks.getBlockDefaultClassName;\nvar _wp$editor = wp.editor,\n    InnerBlocks = _wp$editor.InnerBlocks,\n    MediaUpload = _wp$editor.MediaUpload;\n\n\nregisterBlockType('mcw-blocks/parallax', {\n\ttitle: 'MCW Parallax',\n\ticon: 'sort',\n\tcategory: 'layout',\n\tattributes: {\n\t\timgUrl: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'http://fakeimg.pl/600x300/?text=Background Image'\n\t\t}\n\t},\n\n\tedit: function edit(props) {\n\t\tvar className = props.className,\n\t\t    setAttributes = props.setAttributes;\n\t\tvar attributes = props.attributes;\n\n\n\t\tfunction selectImage(value) {\n\t\t\tconsole.log(value);\n\t\t\tsetAttributes({\n\t\t\t\timgUrl: value.sizes.full.url\n\t\t\t});\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'h5',\n\t\t\t\tnull,\n\t\t\t\t'Parallax Section'\n\t\t\t),\n\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\tonSelect: selectImage,\n\t\t\t\trender: function render(_ref) {\n\t\t\t\t\tvar open = _ref.open;\n\n\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t'button',\n\t\t\t\t\t\t{ onClick: open },\n\t\t\t\t\t\twp.element.createElement('img', {\n\t\t\t\t\t\t\tsrc: attributes.imgUrl\n\t\t\t\t\t\t})\n\t\t\t\t\t);\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(InnerBlocks, null)\n\t\t);\n\t},\n\tsave: function save(props) {\n\t\tvar className = getBlockDefaultClassName('mcw-blocks/parallax');\n\t\tvar attributes = props.attributes;\n\n\t\tvar cNames = className + ' parallax-container';\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: cNames },\n\t\t\twp.element.createElement('img', { className: 'parallax-bg', src: attributes.imgUrl }),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'parallax-content' },\n\t\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFyYWxsYXgtaW1nL2Jsb2NrLmpzP2FhMjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX3dwJGJsb2NrcyA9IHdwLmJsb2NrcyxcbiAgICByZWdpc3RlckJsb2NrVHlwZSA9IF93cCRibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUsXG4gICAgZ2V0QmxvY2tEZWZhdWx0Q2xhc3NOYW1lID0gX3dwJGJsb2Nrcy5nZXRCbG9ja0RlZmF1bHRDbGFzc05hbWU7XG52YXIgX3dwJGVkaXRvciA9IHdwLmVkaXRvcixcbiAgICBJbm5lckJsb2NrcyA9IF93cCRlZGl0b3IuSW5uZXJCbG9ja3MsXG4gICAgTWVkaWFVcGxvYWQgPSBfd3AkZWRpdG9yLk1lZGlhVXBsb2FkO1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdtY3ctYmxvY2tzL3BhcmFsbGF4Jywge1xuXHR0aXRsZTogJ01DVyBQYXJhbGxheCcsXG5cdGljb246ICdzb3J0Jyxcblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aW1nVXJsOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICdodHRwOi8vZmFrZWltZy5wbC82MDB4MzAwLz90ZXh0PUJhY2tncm91bmQgSW1hZ2UnXG5cdFx0fVxuXHR9LFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcblx0XHR2YXIgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXM7XG5cblxuXHRcdGZ1bmN0aW9uIHNlbGVjdEltYWdlKHZhbHVlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0aW1nVXJsOiB2YWx1ZS5zaXplcy5mdWxsLnVybFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnaDUnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnUGFyYWxsYXggU2VjdGlvbidcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcblx0XHRcdFx0b25TZWxlY3Q6IHNlbGVjdEltYWdlLFxuXHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG5cdFx0XHRcdFx0dmFyIG9wZW4gPSBfcmVmLm9wZW47XG5cblx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2J1dHRvbicsXG5cdFx0XHRcdFx0XHR7IG9uQ2xpY2s6IG9wZW4gfSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuXHRcdFx0XHRcdFx0XHRzcmM6IGF0dHJpYnV0ZXMuaW1nVXJsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCBudWxsKVxuXHRcdCk7XG5cdH0sXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gZ2V0QmxvY2tEZWZhdWx0Q2xhc3NOYW1lKCdtY3ctYmxvY2tzL3BhcmFsbGF4Jyk7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzO1xuXG5cdFx0dmFyIGNOYW1lcyA9IGNsYXNzTmFtZSArICcgcGFyYWxsYXgtY29udGFpbmVyJztcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjTmFtZXMgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBjbGFzc05hbWU6ICdwYXJhbGxheC1iZycsIHNyYzogYXR0cmlidXRlcy5pbWdVcmwgfSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ3BhcmFsbGF4LWNvbnRlbnQnIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BhcmFsbGF4LWltZy9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*************************************!*\
  !*** ./src/parallax-img/style.scss ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFyYWxsYXgtaW1nL3N0eWxlLnNjc3M/NDcyNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BhcmFsbGF4LWltZy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!**************************************!*\
  !*** ./src/parallax-img/editor.scss ***!
  \**************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFyYWxsYXgtaW1nL2VkaXRvci5zY3NzPzNlM2EiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wYXJhbGxheC1pbWcvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!****************************!*\
  !*** ./src/slide/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 26);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 27);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n//  Import CSS.\n\n\n\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    getBlockDefaultClassName = _wp$blocks.getBlockDefaultClassName;\nvar _wp$editor = wp.editor,\n    InnerBlocks = _wp$editor.InnerBlocks,\n    MediaUpload = _wp$editor.MediaUpload;\n\n\nregisterBlockType('mcw-blocks/slide', {\n\ttitle: 'MCW Slide',\n\ticon: 'sort',\n\tcategory: 'layout',\n\tparent: ['mcw-blocks/slider'],\n\tattributes: {\n\t\timgUrl: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'http://fakeimg.pl/600x300/?text=Background Image',\n\t\t\tsource: 'attribute',\n\t\t\tselector: '.mcw-slide',\n\t\t\tattribute: 'data-imgurl'\n\t\t}\n\t},\n\n\tedit: function edit(props) {\n\t\tvar className = props.className,\n\t\t    setAttributes = props.setAttributes;\n\t\tvar attributes = props.attributes;\n\n\n\t\tfunction selectImage(value) {\n\t\t\tconsole.log(value);\n\t\t\tsetAttributes({\n\t\t\t\timgUrl: value.sizes.full.url\n\t\t\t});\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'h5',\n\t\t\t\tnull,\n\t\t\t\t'Slide'\n\t\t\t),\n\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\tonSelect: selectImage,\n\t\t\t\trender: function render(_ref) {\n\t\t\t\t\tvar open = _ref.open;\n\n\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t'button',\n\t\t\t\t\t\t{ onClick: open },\n\t\t\t\t\t\twp.element.createElement('img', {\n\t\t\t\t\t\t\tsrc: attributes.imgUrl\n\t\t\t\t\t\t})\n\t\t\t\t\t);\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(InnerBlocks, null)\n\t\t);\n\t},\n\tsave: function save(props) {\n\t\tvar className = getBlockDefaultClassName('mcw-blocks/slide');\n\t\tvar attributes = props.attributes;\n\n\t\tvar cNames = className + ' mcw-slide';\n\t\tvar divstyle = {\n\t\t\tbackgroundImage: 'url(' + attributes.imgUrl + ')'\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: cNames, 'data-imgurl': attributes.imgUrl, style: divstyle },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'slide-content' },\n\t\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGUvYmxvY2suanM/MTk5NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciBfd3AkYmxvY2tzID0gd3AuYmxvY2tzLFxuICAgIHJlZ2lzdGVyQmxvY2tUeXBlID0gX3dwJGJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSxcbiAgICBnZXRCbG9ja0RlZmF1bHRDbGFzc05hbWUgPSBfd3AkYmxvY2tzLmdldEJsb2NrRGVmYXVsdENsYXNzTmFtZTtcbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIElubmVyQmxvY2tzID0gX3dwJGVkaXRvci5Jbm5lckJsb2NrcyxcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWQ7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ21jdy1ibG9ja3Mvc2xpZGUnLCB7XG5cdHRpdGxlOiAnTUNXIFNsaWRlJyxcblx0aWNvbjogJ3NvcnQnLFxuXHRjYXRlZ29yeTogJ2xheW91dCcsXG5cdHBhcmVudDogWydtY3ctYmxvY2tzL3NsaWRlciddLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aW1nVXJsOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICdodHRwOi8vZmFrZWltZy5wbC82MDB4MzAwLz90ZXh0PUJhY2tncm91bmQgSW1hZ2UnLFxuXHRcdFx0c291cmNlOiAnYXR0cmlidXRlJyxcblx0XHRcdHNlbGVjdG9yOiAnLm1jdy1zbGlkZScsXG5cdFx0XHRhdHRyaWJ1dGU6ICdkYXRhLWltZ3VybCdcblx0XHR9XG5cdH0sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcztcblxuXG5cdFx0ZnVuY3Rpb24gc2VsZWN0SW1hZ2UodmFsdWUpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRpbWdVcmw6IHZhbHVlLnNpemVzLmZ1bGwudXJsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdoNScsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCdTbGlkZSdcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcblx0XHRcdFx0b25TZWxlY3Q6IHNlbGVjdEltYWdlLFxuXHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG5cdFx0XHRcdFx0dmFyIG9wZW4gPSBfcmVmLm9wZW47XG5cblx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2J1dHRvbicsXG5cdFx0XHRcdFx0XHR7IG9uQ2xpY2s6IG9wZW4gfSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuXHRcdFx0XHRcdFx0XHRzcmM6IGF0dHJpYnV0ZXMuaW1nVXJsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCBudWxsKVxuXHRcdCk7XG5cdH0sXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gZ2V0QmxvY2tEZWZhdWx0Q2xhc3NOYW1lKCdtY3ctYmxvY2tzL3NsaWRlJyk7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzO1xuXG5cdFx0dmFyIGNOYW1lcyA9IGNsYXNzTmFtZSArICcgbWN3LXNsaWRlJztcblx0XHR2YXIgZGl2c3R5bGUgPSB7XG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGF0dHJpYnV0ZXMuaW1nVXJsICsgJyknXG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjTmFtZXMsICdkYXRhLWltZ3VybCc6IGF0dHJpYnV0ZXMuaW1nVXJsLCBzdHlsZTogZGl2c3R5bGUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnc2xpZGUtY29udGVudCcgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2xpZGUvYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!******************************!*\
  !*** ./src/slide/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGUvc3R5bGUuc2Nzcz82OGFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2xpZGUvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!*******************************!*\
  !*** ./src/slide/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGUvZWRpdG9yLnNjc3M/NzhmOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NsaWRlL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!*****************************!*\
  !*** ./src/slider/block.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 30);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n//  Import CSS.\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InnerBlocks = wp.editor.InnerBlocks;\n\n\nvar TEMPLATE = [['mcw-blocks/slide', {}]];\n\nregisterBlockType('mcw-blocks/slider', {\n\ttitle: 'MCW Slider',\n\ticon: 'sort',\n\tcategory: 'layout',\n\tsupports: {\n\t\t'align': true\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\ttemplate: TEMPLATE,\n\t\t\t\tallowedBlocks: ['mcw-blocks/slide']\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save(_ref2) {\n\t\tvar className = _ref2.className;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(InnerBlocks.Content, null),\n\t\t\twp.element.createElement('div', { className: 'slider-dots' })\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVyL2Jsb2NrLmpzPzI3ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgSW5uZXJCbG9ja3MgPSB3cC5lZGl0b3IuSW5uZXJCbG9ja3M7XG5cblxudmFyIFRFTVBMQVRFID0gW1snbWN3LWJsb2Nrcy9zbGlkZScsIHt9XV07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdtY3ctYmxvY2tzL3NsaWRlcicsIHtcblx0dGl0bGU6ICdNQ1cgU2xpZGVyJyxcblx0aWNvbjogJ3NvcnQnLFxuXHRjYXRlZ29yeTogJ2xheW91dCcsXG5cdHN1cHBvcnRzOiB7XG5cdFx0J2FsaWduJzogdHJ1ZVxuXHR9LFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZTtcblxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCB7XG5cdFx0XHRcdHRlbXBsYXRlOiBURU1QTEFURSxcblx0XHRcdFx0YWxsb3dlZEJsb2NrczogWydtY3ctYmxvY2tzL3NsaWRlJ11cblx0XHRcdH0pXG5cdFx0KTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMikge1xuXHRcdHZhciBjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWU7XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuQ29udGVudCwgbnVsbCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnc2xpZGVyLWRvdHMnIH0pXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2xpZGVyL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!*******************************!*\
  !*** ./src/slider/style.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVyL3N0eWxlLnNjc3M/MjcyNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NsaWRlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!********************************!*\
  !*** ./src/slider/editor.scss ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVyL2VkaXRvci5zY3NzPzhhZDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zbGlkZXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ })
/******/ ]);