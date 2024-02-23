/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const commands_1 = __importDefault(__webpack_require__(1));
function activate(context) {
    commands_1.default.forEach((command) => context.subscriptions.push(command));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;


/***/ }),
/* 1 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode = __importStar(__webpack_require__(2));
const convert_1 = __webpack_require__(3);
exports["default"] = [
    vscode.commands.registerCommand('convertSvgToBase64.base64', convert_1.convertSvgToBase64),
];


/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertSvgToBase64 = void 0;
const vscode = __importStar(__webpack_require__(2));
const transform_1 = __webpack_require__(4);
function convertSvgToBase64() {
    const editor = vscode.window.activeTextEditor;
    if (editor && editor.document.languageId === 'svg') {
        const svgContent = editor.document.getText();
        if (svgContent.startsWith('<svg p-id="from-svg2base64">')) {
            vscode.window.showWarningMessage('This SVG file has been converted.');
            return;
        }
        const base64Content = svgContent.startsWith(transform_1.base64Prefix)
            ? (0, transform_1.base64ToSvgWrapped)(svgContent)
            : (0, transform_1.svgToBase64)(svgContent);
        const fullRange = new vscode.Range(new vscode.Position(0, 0), new vscode.Position(editor.document.lineCount, 0));
        editor.edit((editBuilder) => {
            editBuilder.replace(fullRange, base64Content);
        });
    }
    else {
        vscode.window.showWarningMessage('Open an SVG file to convert to base64.');
    }
}
exports.convertSvgToBase64 = convertSvgToBase64;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.svgToBase64WrapperSvg = exports.base64ToSvgWrapped = exports.svgToBase64 = exports.base64Prefix = void 0;
exports.base64Prefix = 'data:image/svg+xml;base64';
function toBase64(content) {
    return Buffer.from(content).toString('base64');
}
function svgToBase64(svgContent) {
    return `${exports.base64Prefix},${toBase64(svgContent)}`;
}
exports.svgToBase64 = svgToBase64;
function base64ToSvgWrapped(base64) {
    const svgPrefix = '<svg p-id="from-svg2base64">';
    const svgSuffix = '</svg>';
    return `${svgPrefix}<image href="${base64}"></image>${svgSuffix}`;
}
exports.base64ToSvgWrapped = base64ToSvgWrapped;
function svgToBase64WrapperSvg(svgContent) {
    const base64String = `${exports.base64Prefix},${toBase64(svgContent)}`;
    const svgPrefix = svgContent.match(/<svg.+>/)?.at(0);
    const svgSuffix = '</svg>';
    return `${svgPrefix}<image href="${base64String}"></image>${svgSuffix}`;
}
exports.svgToBase64WrapperSvg = svgToBase64WrapperSvg;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=extension.js.map