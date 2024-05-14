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

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const variants = {\n        open: {\n            opacity: 1,\n            y: 0\n        },\n        closed: {\n            opacity: 0,\n            y: -10\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-customRed-50 lg:px-10 pb-5 mb-5 lg:mb-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"lg:grid lg:grid-cols-2 lg:mx-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-end justify-between px-5 lg:px-0 lg:justify-start lg:space-y-10 bg-customRed-50\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setMenuOpen(!menuOpen),\n                            className: \"lg:hidden text-5xl text-customRed-700 pr-5\",\n                            \"aria-label\": \"menu\",\n                            children: menuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-[mdi--arrow-up] text-customRed-700\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-[mdi--hamburger-menu] text-customRed-700\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: \"max-h-[220px] \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-w-[250px] min-h-[250px] lg:min-w-[20vw] lg:min-h-[20vh] relative\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/images/banner-draft.png\",\n                                    alt: \"logo\",\n                                    fill: true,\n                                    className: \"object-contain object-center\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row lg:flex-col lg:justify-end lg:hidden\",\n                    children: menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"absolute lg:static space-y-8 justify-start w-full flex flex-col z-50 bg-customRed-50 pl-5 lg:pl-0\",\n                        initial: {\n                            opacity: 0,\n                            y: -20\n                        },\n                        animate: {\n                            opacity: 1,\n                            y: 0\n                        },\n                        exit: {\n                            opacity: 0,\n                            y: -20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col lg:flex-row lg:items-center space-y-5 lg:space-y-0 lg:space-x-8 text-3xl font-sans pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/about\",\n                                    className: \"text-customRed-700 hover:text-customRed-950 active:text-customRed-500\",\n                                    children: \"ABOUT\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/news?category=\",\n                                    className: \"text-customRed-700 hover:text-customRed-950 active:text-customRed-500\",\n                                    children: \"NEWS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/issues\",\n                                    className: \"text-customRed-700 hover:text-customRed-950 active:text-customRed-500\",\n                                    children: \"ISSUES\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/events\",\n                                    className: \"text-customRed-700 hover:text-customRed-950 active:text-customRed-500\",\n                                    \"aria-label\": \"link to the events page\",\n                                    children: \"EVENTS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden lg:flex flex-row lg:flex-col lg:justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-x-10 space-y-8 lg:space-y-0 lg:items-center justify-end w-full flex flex-col lg:flex-row z-50 bg-customRed-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col lg:flex-row lg:items-center space-y-5 lg:space-y-0 lg:space-x-8 text-3xl font-sans pl-10 lg:pl-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/about\",\n                                    className: \"text-customRed-700 hover:text-customRed-950 active:text-customRed-500\",\n                                    \"aria-label\": \"link to the about page\",\n                                    children: \"ABOUT\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/news\",\n                                    className: \"text-customRed-700 hover:text-customRed-950 active:text-customRed-500\",\n                                    \"aria-label\": \"link to the news page\",\n                                    children: \"NEWS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/issues\",\n                                    className: \"text-customRed-700 hover:text-customRed-950 active:text-customRed-500\",\n                                    \"aria-label\": \"link to the issues page\",\n                                    children: \"ISSUES\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/events\",\n                                    className: \"text-customRed-700 hover:text-customRed-950 active:text-customRed-500\",\n                                    \"aria-label\": \"link to the events page\",\n                                    children: \"EVENTS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"K77eQVFAaxZgbvGoNWFAiCE7OTY=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0o7QUFDRTtBQUNRO0FBR3hCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFFekMsTUFBTU8sV0FBVztRQUNmQyxNQUFNO1lBQUVDLFNBQVM7WUFBR0MsR0FBRztRQUFFO1FBQ3pCQyxRQUFRO1lBQUVGLFNBQVM7WUFBR0MsR0FBRyxDQUFDO1FBQUc7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ0U7UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUNDQyxTQUFTLElBQU1WLFlBQVksQ0FBQ0Q7NEJBQzVCUSxXQUFVOzRCQUNWSSxjQUFXO3NDQUVWWix5QkFDQyw4REFBQ2E7Z0NBQUtMLFdBQVU7Ozs7O3FEQUVoQiw4REFBQ0s7Z0NBQUtMLFdBQVU7Ozs7Ozs7Ozs7O3NDQUdwQiw4REFBQ1osa0RBQUlBOzRCQUFDa0IsTUFBSzs0QkFBSU4sV0FBVTtzQ0FDdkIsNEVBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDWCxtREFBS0E7b0NBQ0prQixLQUFJO29DQUNKQyxLQUFJO29DQUNKQyxJQUFJO29DQUNKVCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU1sQiw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ1pSLDBCQUNDLDhEQUFDRixpREFBTUEsQ0FBQ1csR0FBRzt3QkFDVEQsV0FBVTt3QkFDVlUsU0FBUzs0QkFBRWQsU0FBUzs0QkFBR0MsR0FBRyxDQUFDO3dCQUFHO3dCQUM5QmMsU0FBUzs0QkFBRWYsU0FBUzs0QkFBR0MsR0FBRzt3QkFBRTt3QkFDNUJlLE1BQU07NEJBQUVoQixTQUFTOzRCQUFHQyxHQUFHLENBQUM7d0JBQUc7a0NBRTNCLDRFQUFDSTs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNaLGtEQUFJQTtvQ0FDSGtCLE1BQUs7b0NBQ0xOLFdBQVU7OENBQ1g7Ozs7Ozs4Q0FHRCw4REFBQ1osa0RBQUlBO29DQUNIa0IsTUFBSztvQ0FDTE4sV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDWixrREFBSUE7b0NBQ0hrQixNQUFLO29DQUNMTixXQUFVOzhDQUNYOzs7Ozs7OENBR0QsOERBQUNaLGtEQUFJQTtvQ0FDSGtCLE1BQUs7b0NBQ0xOLFdBQVU7b0NBQ1ZJLGNBQVc7OENBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUVQsOERBQUNIO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDWixrREFBSUE7b0NBQ0hrQixNQUFLO29DQUNMTixXQUFVO29DQUNWSSxjQUFXOzhDQUNaOzs7Ozs7OENBR0QsOERBQUNoQixrREFBSUE7b0NBQ0hrQixNQUFLO29DQUNMTixXQUFVO29DQUNWSSxjQUFXOzhDQUNaOzs7Ozs7OENBR0QsOERBQUNoQixrREFBSUE7b0NBQ0hrQixNQUFLO29DQUNMTixXQUFVO29DQUNWSSxjQUFXOzhDQUNaOzs7Ozs7OENBR0QsOERBQUNoQixrREFBSUE7b0NBQ0hrQixNQUFLO29DQUNMTixXQUFVO29DQUNWSSxjQUFXOzhDQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtHQS9Hd0JiO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyLnRzeD84NzBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4vc29jaWFsLWljb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgb3BlbjogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXG4gICAgY2xvc2VkOiB7IG9wYWNpdHk6IDAsIHk6IC0xMCB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy1jdXN0b21SZWQtNTAgbGc6cHgtMTAgcGItNSBtYi01IGxnOm1iLTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Z3JpZCBsZzpncmlkLWNvbHMtMiBsZzpteC0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlbiBweC01IGxnOnB4LTAgbGc6anVzdGlmeS1zdGFydCBsZzpzcGFjZS15LTEwIGJnLWN1c3RvbVJlZC01MFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1lbnVPcGVuKCFtZW51T3Blbil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZzpoaWRkZW4gdGV4dC01eGwgdGV4dC1jdXN0b21SZWQtNzAwIHByLTVcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1lbnVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttZW51T3BlbiA/IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS1hcnJvdy11cF0gdGV4dC1jdXN0b21SZWQtNzAwXCI+PC9zcGFuPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS1oYW1idXJnZXItbWVudV0gdGV4dC1jdXN0b21SZWQtNzAwXCI+PC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIm1heC1oLVsyMjBweF0gXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LVsyNTBweF0gbWluLWgtWzI1MHB4XSBsZzptaW4tdy1bMjB2d10gbGc6bWluLWgtWzIwdmhdIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvYmFubmVyLWRyYWZ0LnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluIG9iamVjdC1jZW50ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIG1vYmlsZSBtZW51ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbGc6ZmxleC1jb2wgbGc6anVzdGlmeS1lbmQgbGc6aGlkZGVuXCI+XG4gICAgICAgICAge21lbnVPcGVuICYmIChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxnOnN0YXRpYyBzcGFjZS15LTgganVzdGlmeS1zdGFydCB3LWZ1bGwgZmxleCBmbGV4LWNvbCB6LTUwIGJnLWN1c3RvbVJlZC01MCBwbC01IGxnOnBsLTBcIlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0yMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtMjAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxnOml0ZW1zLWNlbnRlciBzcGFjZS15LTUgbGc6c3BhY2UteS0wIGxnOnNwYWNlLXgtOCB0ZXh0LTN4bCBmb250LXNhbnMgcGItNVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2Fib3V0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY3VzdG9tUmVkLTcwMCBob3Zlcjp0ZXh0LWN1c3RvbVJlZC05NTAgYWN0aXZlOnRleHQtY3VzdG9tUmVkLTUwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQUJPVVRcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvbmV3cz9jYXRlZ29yeT1cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jdXN0b21SZWQtNzAwIGhvdmVyOnRleHQtY3VzdG9tUmVkLTk1MCBhY3RpdmU6dGV4dC1jdXN0b21SZWQtNTAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBORVdTXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2lzc3Vlc1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbVJlZC03MDAgaG92ZXI6dGV4dC1jdXN0b21SZWQtOTUwIGFjdGl2ZTp0ZXh0LWN1c3RvbVJlZC01MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIElTU1VFU1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9ldmVudHNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jdXN0b21SZWQtNzAwIGhvdmVyOnRleHQtY3VzdG9tUmVkLTk1MCBhY3RpdmU6dGV4dC1jdXN0b21SZWQtNTAwXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaW5rIHRvIHRoZSBldmVudHMgcGFnZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRVZFTlRTXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIGRlc2t0b3AgbWVudSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBmbGV4LXJvdyBsZzpmbGV4LWNvbCBsZzpqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC0xMCBzcGFjZS15LTggbGc6c3BhY2UteS0wIGxnOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCB3LWZ1bGwgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyB6LTUwIGJnLWN1c3RvbVJlZC01MFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxnOml0ZW1zLWNlbnRlciBzcGFjZS15LTUgbGc6c3BhY2UteS0wIGxnOnNwYWNlLXgtOCB0ZXh0LTN4bCBmb250LXNhbnMgcGwtMTAgbGc6cGwtMFwiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvYWJvdXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY3VzdG9tUmVkLTcwMCBob3Zlcjp0ZXh0LWN1c3RvbVJlZC05NTAgYWN0aXZlOnRleHQtY3VzdG9tUmVkLTUwMFwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxpbmsgdG8gdGhlIGFib3V0IHBhZ2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQUJPVVRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvbmV3c1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jdXN0b21SZWQtNzAwIGhvdmVyOnRleHQtY3VzdG9tUmVkLTk1MCBhY3RpdmU6dGV4dC1jdXN0b21SZWQtNTAwXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGluayB0byB0aGUgbmV3cyBwYWdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE5FV1NcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvaXNzdWVzXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbVJlZC03MDAgaG92ZXI6dGV4dC1jdXN0b21SZWQtOTUwIGFjdGl2ZTp0ZXh0LWN1c3RvbVJlZC01MDBcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaW5rIHRvIHRoZSBpc3N1ZXMgcGFnZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBJU1NVRVNcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvZXZlbnRzXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbVJlZC03MDAgaG92ZXI6dGV4dC1jdXN0b21SZWQtOTUwIGFjdGl2ZTp0ZXh0LWN1c3RvbVJlZC01MDBcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaW5rIHRvIHRoZSBldmVudHMgcGFnZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFVkVOVFNcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwiSW1hZ2UiLCJtb3Rpb24iLCJIZWFkZXIiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwidmFyaWFudHMiLCJvcGVuIiwib3BhY2l0eSIsInkiLCJjbG9zZWQiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiYXJpYS1sYWJlbCIsInNwYW4iLCJocmVmIiwic3JjIiwiYWx0IiwiZmlsbCIsImluaXRpYWwiLCJhbmltYXRlIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});