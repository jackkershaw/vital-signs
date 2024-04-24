"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-orange-50 sm:px-10 py-5 sm:mb-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row justify-between sm:space-x-10 space-y-10 text-3xl bg-orange-50\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setMenuOpen(!menuOpen),\n                    className: \"sm:hidden text-neu hover:text-neu focus:outline-none flex flex-row items-center justify-between mx-auto text-2xl\",\n                    children: menuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"icon-[mdi--arrow-up]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"icon-[mdi--hamburger-menu]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-w-[20vw] min-h-[20vh] relative =\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/images/banner-draft.png\",\n                            alt: \"logo\",\n                            fill: true,\n                            className: \"object-contain object-center\"\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row sm:flex-col justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col sm:flex-row space-x-10 h-20 items-center justify-end w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col sm:flex-row items-center space-x-8 \".concat(menuOpen ? \"flex sm:flex-row flex-col\" : \"hidden\", \" \"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/about\",\n                                        className: \"text-orange-700 hover:text-orange-950 active:text-orange-500\",\n                                        children: \"ABOUT\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/news\",\n                                        className: \"text-orange-700 hover:text-orange-950 active:text-orange-500\",\n                                        children: \"NEWS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/issues\",\n                                        className: \"text-orange-700 hover:text-orange-950 active:text-orange-500\",\n                                        children: \"ISSUES\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row items-center justify-between space-x-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--facebook] text-orange-700 hover:text-orange-950 active:text-orange-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--twitter] text-orange-700 hover:text-orange-950 active:text-orange-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--instagram] text-orange-700 hover:text-orange-950 active:text-orange-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"mailto:vitalsignsmag@proton.me\",\n                                        className: \"flex-col flex justify-end items-end\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"icon-[mdi--email] text-orange-700 hover:text-orange-950 active:text-orange-500\",\n                                            children: \" \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"K77eQVFAaxZgbvGoNWFAiCE7OTY=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFFSjtBQUNFO0FBRWhCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFDekMscUJBQ0UsOERBQUNNO1FBQU9DLFdBQVU7a0JBQ2hCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQ0NDLFNBQVMsSUFBTUwsWUFBWSxDQUFDRDtvQkFDNUJHLFdBQVU7OEJBRVRILHlCQUNDLDhEQUFDTzt3QkFBS0osV0FBVTs7Ozs7NkNBRWhCLDhEQUFDSTt3QkFBS0osV0FBVTs7Ozs7Ozs7Ozs7OEJBR3BCLDhEQUFDTixrREFBSUE7b0JBQUNXLE1BQUs7OEJBQ1QsNEVBQUNKO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDTCxtREFBS0E7NEJBQ0pXLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pDLElBQUk7NEJBQ0pSLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSWhCLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FDQ0QsV0FBVyxvREFFVixPQURDSCxXQUFXLDhCQUE4QixVQUMxQzs7a0RBRUQsOERBQUNILGtEQUFJQTt3Q0FDSFcsTUFBSzt3Q0FDTEwsV0FBVTtrREFDWDs7Ozs7O2tEQUdELDhEQUFDTixrREFBSUE7d0NBQ0hXLE1BQUs7d0NBQ0xMLFdBQVU7a0RBQ1g7Ozs7OztrREFHRCw4REFBQ04sa0RBQUlBO3dDQUNIVyxNQUFLO3dDQUNMTCxXQUFVO2tEQUNYOzs7Ozs7Ozs7Ozs7MENBSUgsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ0k7d0NBQUtKLFdBQVU7Ozs7OztrREFDaEIsOERBQUNJO3dDQUFLSixXQUFVOzs7Ozs7a0RBQ2hCLDhEQUFDSTt3Q0FBS0osV0FBVTs7Ozs7O2tEQUNoQiw4REFBQ1M7d0NBQ0NKLE1BQUs7d0NBQ0xMLFdBQVU7a0RBRVYsNEVBQUNJOzRDQUFLSixXQUFVO3NEQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbkI7R0FyRXdCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci50c3g/ODcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLW9yYW5nZS01MCBzbTpweC0xMCBweS01IHNtOm1iLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHNtOnNwYWNlLXgtMTAgc3BhY2UteS0xMCB0ZXh0LTN4bCBiZy1vcmFuZ2UtNTBcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1lbnVPcGVuKCFtZW51T3Blbil9XG4gICAgICAgICAgY2xhc3NOYW1lPVwic206aGlkZGVuIHRleHQtbmV1IGhvdmVyOnRleHQtbmV1IGZvY3VzOm91dGxpbmUtbm9uZSBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXgtYXV0byB0ZXh0LTJ4bFwiXG4gICAgICAgID5cbiAgICAgICAgICB7bWVudU9wZW4gPyAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLVttZGktLWFycm93LXVwXVwiPjwvc3Bhbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS1oYW1idXJnZXItbWVudV1cIj48L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy1bMjB2d10gbWluLWgtWzIwdmhdIHJlbGF0aXZlID1cIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2Jhbm5lci1kcmFmdC5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpbiBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHNtOmZsZXgtY29sIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IHNwYWNlLXgtMTAgaC0yMCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgdy1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtY2VudGVyIHNwYWNlLXgtOCAke1xuICAgICAgICAgICAgICAgIG1lbnVPcGVuID8gXCJmbGV4IHNtOmZsZXgtcm93IGZsZXgtY29sXCIgOiBcImhpZGRlblwiXG4gICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiL2Fib3V0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS03MDAgaG92ZXI6dGV4dC1vcmFuZ2UtOTUwIGFjdGl2ZTp0ZXh0LW9yYW5nZS01MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQUJPVVRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvbmV3c1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNzAwIGhvdmVyOnRleHQtb3JhbmdlLTk1MCBhY3RpdmU6dGV4dC1vcmFuZ2UtNTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE5FV1NcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvaXNzdWVzXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS03MDAgaG92ZXI6dGV4dC1vcmFuZ2UtOTUwIGFjdGl2ZTp0ZXh0LW9yYW5nZS01MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgSVNTVUVTXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteC02XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0tZmFjZWJvb2tdIHRleHQtb3JhbmdlLTcwMCBob3Zlcjp0ZXh0LW9yYW5nZS05NTAgYWN0aXZlOnRleHQtb3JhbmdlLTUwMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS10d2l0dGVyXSB0ZXh0LW9yYW5nZS03MDAgaG92ZXI6dGV4dC1vcmFuZ2UtOTUwIGFjdGl2ZTp0ZXh0LW9yYW5nZS01MDBcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0taW5zdGFncmFtXSB0ZXh0LW9yYW5nZS03MDAgaG92ZXI6dGV4dC1vcmFuZ2UtOTUwIGFjdGl2ZTp0ZXh0LW9yYW5nZS01MDBcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIm1haWx0bzp2aXRhbHNpZ25zbWFnQHByb3Rvbi5tZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1jb2wgZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1lbmRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS1lbWFpbF0gdGV4dC1vcmFuZ2UtNzAwIGhvdmVyOnRleHQtb3JhbmdlLTk1MCBhY3RpdmU6dGV4dC1vcmFuZ2UtNTAwXCI+XG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJJbWFnZSIsIkhlYWRlciIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiIsImhyZWYiLCJzcmMiLCJhbHQiLCJmaWxsIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});