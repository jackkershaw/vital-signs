/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/intro.tsx":
/*!******************************!*\
  !*** ./components/intro.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Intro; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.ts\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_constants__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Intro() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8\",\n                children: \"Blog.\"\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/intro.tsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"text-center md:text-left text-lg mt-5 md:pl-8\",\n                children: [\n                    \"A statically generated blog example using\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://nextjs.org/\",\n                        className: \"underline hover:text-success duration-200 transition-colors\",\n                        children: \"Next.js\"\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/intro.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    \"and\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: _lib_constants__WEBPACK_IMPORTED_MODULE_1__.CMS_URL,\n                        className: \"underline hover:text-success duration-200 transition-colors\",\n                        children: _lib_constants__WEBPACK_IMPORTED_MODULE_1__.CMS_NAME\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/intro.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/intro.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/intro.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Intro;\nvar _c;\n$RefreshReg$(_c, \"Intro\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludHJvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUQ7QUFFdEMsU0FBU0U7SUFDdEIscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXdFOzs7Ozs7MEJBR3RGLDhEQUFDRTtnQkFBR0YsV0FBVTs7b0JBQWdEO29CQUNsQjtrQ0FDMUMsOERBQUNHO3dCQUNDQyxNQUFLO3dCQUNMSixXQUFVO2tDQUNYOzs7Ozs7b0JBRUk7b0JBQUk7b0JBQ0w7a0NBQ0osOERBQUNHO3dCQUNDQyxNQUFNUCxtREFBT0E7d0JBQ2JHLFdBQVU7a0NBRVRKLG9EQUFRQTs7Ozs7O29CQUNQOzs7Ozs7Ozs7Ozs7O0FBS1o7S0F6QndCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ludHJvLnRzeD9iNzIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENNU19OQU1FLCBDTVNfVVJMIH0gZnJvbSBcIi4uL2xpYi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm8oKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleC1jb2wgbWQ6ZmxleC1yb3cgZmxleCBpdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuIG10LTE2IG1iLTE2IG1kOm1iLTEyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgbWQ6dGV4dC04eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0ZXIgbGVhZGluZy10aWdodCBtZDpwci04XCI+XG4gICAgICAgIEJsb2cuXG4gICAgICA8L2gxPlxuICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1kOnRleHQtbGVmdCB0ZXh0LWxnIG10LTUgbWQ6cGwtOFwiPlxuICAgICAgICBBIHN0YXRpY2FsbHkgZ2VuZXJhdGVkIGJsb2cgZXhhbXBsZSB1c2luZ3tcIiBcIn1cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXJsaW5lIGhvdmVyOnRleHQtc3VjY2VzcyBkdXJhdGlvbi0yMDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICA+XG4gICAgICAgICAgTmV4dC5qc1xuICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICBhbmR7XCIgXCJ9XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj17Q01TX1VSTH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgaG92ZXI6dGV4dC1zdWNjZXNzIGR1cmF0aW9uLTIwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgID5cbiAgICAgICAgICB7Q01TX05BTUV9XG4gICAgICAgIDwvYT5cbiAgICAgICAgLlxuICAgICAgPC9oND5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ01TX05BTUUiLCJDTVNfVVJMIiwiSW50cm8iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJoNCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/intro.tsx\n"));

/***/ }),

/***/ "./components/meta.tsx":
/*!*****************************!*\
  !*** ./components/meta.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Meta; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.ts\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_constants__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Meta() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"apple-touch-icon\",\n                sizes: \"180x180\",\n                href: \"/favicon/apple-touch-icon.png\"\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/meta.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"icon\",\n                type: \"image/png\",\n                sizes: \"32x32\",\n                href: \"/favicon/favicon-32x32.png\"\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/meta.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"icon\",\n                type: \"image/png\",\n                sizes: \"16x16\",\n                href: \"/favicon/favicon-16x16.png\"\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/meta.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"manifest\",\n                href: \"/favicon/site.webmanifest\"\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/meta.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"mask-icon\",\n                href: \"/favicon/safari-pinned-tab.svg\",\n                color: \"#000000\"\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/meta.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"shortcut icon\",\n                href: \"/favicon/favicon.ico\"\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/meta.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"msapplication-TileColor\",\n                content: \"#000000\"\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/meta.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"msapplication-config\",\n                content: \"/favicon/browserconfig.xml\"\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/meta.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"theme-color\",\n                content: \"#000\"\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/meta.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"alternate\",\n                type: \"application/rss+xml\",\n                href: \"/feed.xml\"\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/meta.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"description\",\n                content: \"A statically generated blog example using Next.js and \".concat(_lib_constants__WEBPACK_IMPORTED_MODULE_2__.CMS_NAME, \".\")\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/meta.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:image\",\n                content: _lib_constants__WEBPACK_IMPORTED_MODULE_2__.HOME_OG_IMAGE_URL\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/meta.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/meta.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Meta;\nvar _c;\n$RefreshReg$(_c, \"Meta\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21ldGEudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2tDO0FBRWhELFNBQVNHO0lBQ3RCLHFCQUNFLDhEQUFDSCxrREFBSUE7OzBCQUNILDhEQUFDSTtnQkFDQ0MsS0FBSTtnQkFDSkMsT0FBTTtnQkFDTkMsTUFBSzs7Ozs7OzBCQUVQLDhEQUFDSDtnQkFDQ0MsS0FBSTtnQkFDSkcsTUFBSztnQkFDTEYsT0FBTTtnQkFDTkMsTUFBSzs7Ozs7OzBCQUVQLDhEQUFDSDtnQkFDQ0MsS0FBSTtnQkFDSkcsTUFBSztnQkFDTEYsT0FBTTtnQkFDTkMsTUFBSzs7Ozs7OzBCQUVQLDhEQUFDSDtnQkFBS0MsS0FBSTtnQkFBV0UsTUFBSzs7Ozs7OzBCQUMxQiw4REFBQ0g7Z0JBQ0NDLEtBQUk7Z0JBQ0pFLE1BQUs7Z0JBQ0xFLE9BQU07Ozs7OzswQkFFUiw4REFBQ0w7Z0JBQUtDLEtBQUk7Z0JBQWdCRSxNQUFLOzs7Ozs7MEJBQy9CLDhEQUFDRztnQkFBS0MsTUFBSztnQkFBMEJDLFNBQVE7Ozs7OzswQkFDN0MsOERBQUNGO2dCQUNDQyxNQUFLO2dCQUNMQyxTQUFROzs7Ozs7MEJBRVYsOERBQUNGO2dCQUFLQyxNQUFLO2dCQUFjQyxTQUFROzs7Ozs7MEJBQ2pDLDhEQUFDUjtnQkFDQ0MsS0FBSTtnQkFDSkcsTUFBSztnQkFDTEQsTUFBSzs7Ozs7OzBCQUVQLDhEQUFDRztnQkFDQ0MsTUFBSztnQkFDTEMsU0FBUyx5REFBa0UsT0FBVFgsb0RBQVFBLEVBQUM7Ozs7OzswQkFFN0UsOERBQUNTO2dCQUFLRyxVQUFTO2dCQUFXRCxTQUFTViw2REFBaUJBOzs7Ozs7Ozs7Ozs7QUFHMUQ7S0E3Q3dCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21ldGEudHN4PzA4YzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQ01TX05BTUUsIEhPTUVfT0dfSU1BR0VfVVJMIH0gZnJvbSBcIi4uL2xpYi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWV0YSgpIHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxuICAgICAgICBocmVmPVwiL2Zhdmljb24vYXBwbGUtdG91Y2gtaWNvbi5wbmdcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgIGhyZWY9XCIvZmF2aWNvbi9mYXZpY29uLTMyeDMyLnBuZ1wiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgaHJlZj1cIi9mYXZpY29uL2Zhdmljb24tMTZ4MTYucG5nXCJcbiAgICAgIC8+XG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvZmF2aWNvbi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cIm1hc2staWNvblwiXG4gICAgICAgIGhyZWY9XCIvZmF2aWNvbi9zYWZhcmktcGlubmVkLXRhYi5zdmdcIlxuICAgICAgICBjb2xvcj1cIiMwMDAwMDBcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24vZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxuICAgICAgPG1ldGFcbiAgICAgICAgbmFtZT1cIm1zYXBwbGljYXRpb24tY29uZmlnXCJcbiAgICAgICAgY29udGVudD1cIi9mYXZpY29uL2Jyb3dzZXJjb25maWcueG1sXCJcbiAgICAgIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMFwiIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJhbHRlcm5hdGVcIlxuICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vcnNzK3htbFwiXG4gICAgICAgIGhyZWY9XCIvZmVlZC54bWxcIlxuICAgICAgLz5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgIGNvbnRlbnQ9e2BBIHN0YXRpY2FsbHkgZ2VuZXJhdGVkIGJsb2cgZXhhbXBsZSB1c2luZyBOZXh0LmpzIGFuZCAke0NNU19OQU1FfS5gfVxuICAgICAgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtIT01FX09HX0lNQUdFX1VSTH0gLz5cbiAgICA8L0hlYWQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkNNU19OQU1FIiwiSE9NRV9PR19JTUFHRV9VUkwiLCJNZXRhIiwibGluayIsInJlbCIsInNpemVzIiwiaHJlZiIsInR5cGUiLCJjb2xvciIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meta.tsx\n"));

/***/ }),

/***/ "./lib/constants.ts":
/*!**************************!*\
  !*** ./lib/constants.ts ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});