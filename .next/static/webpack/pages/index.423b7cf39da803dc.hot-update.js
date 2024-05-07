"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/hero-post.tsx":
/*!**********************************!*\
  !*** ./components/hero-post.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeroPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hero_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-image */ \"./components/hero-image.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction HeroPost(param) {\n    let { title, heroImage, excerpt, slug, category } = param;\n    const sentence = excerpt.split(/[.()]/)[0].concat(\".\"); // Get the first sentence\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"sm:py-5 mb-8 sm:mb-0 sm:grid sm:grid-cols-3 sm:items-end sm:w-full sm:gap-x-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-4 sm:flex-row sm:space-x-5 sm:items-end sm:flex-between mb-8 sm:mb-0 sm:col-span-2\",\n                children: [\n                    heroImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hero_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        title: title,\n                        heroImage: heroImage,\n                        slug: slug\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"uppercase text-customRed-950\",\n                                children: category\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl sm:text-4xl text-customRed-700 hover:text-customRed-950 capitalize\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/posts/\".concat(slug),\n                                    dangerouslySetInnerHTML: {\n                                        __html: title\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-serif\",\n                                dangerouslySetInnerHTML: {\n                                    __html: sentence\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/issues\",\n                className: \"text-lg font-bold font-sans text-primary-500\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-customRed-800 mb-10 sm:mb-0 p-5 w-full text-neutral-50 hover:bg-customRed-950 active:bg-customRed-500 right-0\",\n                        children: [\n                            \" \",\n                            \"Read The Latest Issue\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = HeroPost;\nvar _c;\n$RefreshReg$(_c, \"HeroPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8tcG9zdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFxQztBQUNSO0FBRWQsU0FBU0UsU0FBUyxLQU1oQztRQU5nQyxFQUMvQkMsS0FBSyxFQUNMQyxTQUFTLEVBQ1RDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxRQUFRLEVBQ1QsR0FOZ0M7SUFPL0IsTUFBTUMsV0FBV0gsUUFBUUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUNDLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QjtJQUVqRixxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBSUQsV0FBVTs7b0JBQ1pSLDJCQUNDLDhEQUFDSixtREFBU0E7d0JBQUNHLE9BQU9BO3dCQUFPQyxXQUFXQTt3QkFBV0UsTUFBTUE7Ozs7OztrQ0FFdkQsOERBQUNPO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUdGLFdBQVU7MENBQWdDTDs7Ozs7OzBDQUM5Qyw4REFBQ087Z0NBQUdGLFdBQVU7MENBQ1osNEVBQUNYLGtEQUFJQTtvQ0FDSGMsTUFBTSxVQUFlLE9BQUxUO29DQUNoQlUseUJBQXlCO3dDQUFFQyxRQUFRZDtvQ0FBTTs7Ozs7Ozs7Ozs7MENBSTdDLDhEQUFDZTtnQ0FDQ04sV0FBVTtnQ0FDVkkseUJBQXlCO29DQUFFQyxRQUFRVDtnQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlsRCw4REFBQ1Asa0RBQUlBO2dCQUNIYyxNQUFLO2dCQUNMSCxXQUFVOztvQkFFVDtrQ0FDRCw4REFBQ0M7d0JBQUlELFdBQVU7OzRCQUNaOzRCQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWY7S0ExQ3dCViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlcm8tcG9zdC50c3g/Y2YzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVyb0ltYWdlIGZyb20gXCIuL2hlcm8taW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVyb1Bvc3Qoe1xuICB0aXRsZSxcbiAgaGVyb0ltYWdlLFxuICBleGNlcnB0LFxuICBzbHVnLFxuICBjYXRlZ29yeSxcbn0pIHtcbiAgY29uc3Qgc2VudGVuY2UgPSBleGNlcnB0LnNwbGl0KC9bLigpXS8pWzBdLmNvbmNhdChcIi5cIik7IC8vIEdldCB0aGUgZmlyc3Qgc2VudGVuY2VcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNtOnB5LTUgbWItOCBzbTptYi0wIHNtOmdyaWQgc206Z3JpZC1jb2xzLTMgc206aXRlbXMtZW5kIHNtOnctZnVsbCBzbTpnYXAteC04XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00IHNtOmZsZXgtcm93IHNtOnNwYWNlLXgtNSBzbTppdGVtcy1lbmQgc206ZmxleC1iZXR3ZWVuIG1iLTggc206bWItMCBzbTpjb2wtc3Bhbi0yXCI+XG4gICAgICAgIHtoZXJvSW1hZ2UgJiYgKFxuICAgICAgICAgIDxIZXJvSW1hZ2UgdGl0bGU9e3RpdGxlfSBoZXJvSW1hZ2U9e2hlcm9JbWFnZX0gc2x1Zz17c2x1Z30gLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1jdXN0b21SZWQtOTUwXCI+e2NhdGVnb3J5fTwvaDE+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtNHhsIHRleHQtY3VzdG9tUmVkLTcwMCBob3Zlcjp0ZXh0LWN1c3RvbVJlZC05NTAgY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17YC9wb3N0cy8ke3NsdWd9YH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aXRsZSB9fVxuICAgICAgICAgICAgPjwvTGluaz5cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPGgyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VyaWZcIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzZW50ZW5jZSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8TGlua1xuICAgICAgICBocmVmPVwiL2lzc3Vlc1wiXG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIGZvbnQtc2FucyB0ZXh0LXByaW1hcnktNTAwXCJcbiAgICAgID5cbiAgICAgICAge1wiIFwifVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWN1c3RvbVJlZC04MDAgbWItMTAgc206bWItMCBwLTUgdy1mdWxsIHRleHQtbmV1dHJhbC01MCBob3ZlcjpiZy1jdXN0b21SZWQtOTUwIGFjdGl2ZTpiZy1jdXN0b21SZWQtNTAwIHJpZ2h0LTBcIj5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgUmVhZCBUaGUgTGF0ZXN0IElzc3VlXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZXJvSW1hZ2UiLCJMaW5rIiwiSGVyb1Bvc3QiLCJ0aXRsZSIsImhlcm9JbWFnZSIsImV4Y2VycHQiLCJzbHVnIiwiY2F0ZWdvcnkiLCJzZW50ZW5jZSIsInNwbGl0IiwiY29uY2F0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwiaHJlZiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hero-post.tsx\n"));

/***/ })

});