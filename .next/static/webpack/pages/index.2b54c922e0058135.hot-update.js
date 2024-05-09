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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeroPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hero_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-image */ \"./components/hero-image.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction HeroPost(param) {\n    let { title, heroImage, excerpt, slug, category } = param;\n    let sentence = excerpt ? excerpt.split(/[.!()]/)[0].trim().concat(\".\") : \"\";\n    if (sentence.endsWith(\"...\")) {\n        sentence = sentence;\n    } else sentence = sentence.concat(\"...\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"sm:py-5 mb-8 sm:mb-0 sm:grid sm:grid-cols-3 sm:items-end sm:w-full sm:gap-x-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-4 sm:flex-row sm:space-x-5 sm:items-end sm:flex-between mb-8 sm:mb-0 sm:col-span-2\",\n                children: [\n                    heroImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hero_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        title: title,\n                        heroImage: heroImage,\n                        slug: slug\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: \"uppercase text-customRed-950 font-sans font-bold\",\n                                href: \"/news?category=\".concat(category),\n                                children: category\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl sm:text-3xl text-customRed-700 hover:text-customRed-950 capitalize\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/posts/\".concat(slug),\n                                    dangerouslySetInnerHTML: {\n                                        __html: title\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-serif\",\n                                dangerouslySetInnerHTML: {\n                                    __html: sentence\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/issues\",\n                className: \"text-lg font-bold font-sans text-primary-500\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-customRed-800 mb-10 sm:mb-0 p-5 w-full text-neutral-50 hover:bg-customRed-950 active:bg-customRed-500 right-0\",\n                        children: [\n                            \" \",\n                            \"Read The Latest Issue\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c = HeroPost;\nvar _c;\n$RefreshReg$(_c, \"HeroPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8tcG9zdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFxQztBQUNSO0FBRWQsU0FBU0UsU0FBUyxLQU1oQztRQU5nQyxFQUMvQkMsS0FBSyxFQUNMQyxTQUFTLEVBQ1RDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxRQUFRLEVBQ1QsR0FOZ0M7SUFPL0IsSUFBSUMsV0FBbUJILFVBQ25CQSxRQUNHSSxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FDbEJDLElBQUksR0FDSkMsTUFBTSxDQUFDLE9BQ1Y7SUFFSixJQUFJSCxTQUFTSSxRQUFRLENBQUMsUUFBUTtRQUM1QkosV0FBV0E7SUFDYixPQUFPQSxXQUFXQSxTQUFTRyxNQUFNLENBQUM7SUFFbEMscUJBQ0UsOERBQUNFO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUlELFdBQVU7O29CQUNaViwyQkFDQyw4REFBQ0osbURBQVNBO3dCQUFDRyxPQUFPQTt3QkFBT0MsV0FBV0E7d0JBQVdFLE1BQU1BOzs7Ozs7a0NBRXZELDhEQUFDUzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNiLGtEQUFJQTtnQ0FDSGEsV0FBVTtnQ0FDVkUsTUFBTSxrQkFBMkIsT0FBVFQ7MENBRXZCQTs7Ozs7OzBDQUVILDhEQUFDVTtnQ0FBR0gsV0FBVTswQ0FDWiw0RUFBQ2Isa0RBQUlBO29DQUNIZSxNQUFNLFVBQWUsT0FBTFY7b0NBQ2hCWSx5QkFBeUI7d0NBQUVDLFFBQVFoQjtvQ0FBTTs7Ozs7Ozs7Ozs7MENBRzdDLDhEQUFDaUI7Z0NBQ0NOLFdBQVU7Z0NBQ1ZJLHlCQUF5QjtvQ0FBRUMsUUFBUVg7Z0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbEQsOERBQUNQLGtEQUFJQTtnQkFDSGUsTUFBSztnQkFDTEYsV0FBVTs7b0JBRVQ7a0NBQ0QsOERBQUNDO3dCQUFJRCxXQUFVOzs0QkFDWjs0QkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1mO0tBdkR3QloiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZXJvLXBvc3QudHN4P2NmMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlcm9JbWFnZSBmcm9tIFwiLi9oZXJvLWltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm9Qb3N0KHtcbiAgdGl0bGUsXG4gIGhlcm9JbWFnZSxcbiAgZXhjZXJwdCxcbiAgc2x1ZyxcbiAgY2F0ZWdvcnksXG59KSB7XG4gIGxldCBzZW50ZW5jZTogc3RyaW5nID0gZXhjZXJwdFxuICAgID8gZXhjZXJwdFxuICAgICAgICAuc3BsaXQoL1suISgpXS8pWzBdXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLmNvbmNhdChcIi5cIilcbiAgICA6IFwiXCI7XG5cbiAgaWYgKHNlbnRlbmNlLmVuZHNXaXRoKFwiLi4uXCIpKSB7XG4gICAgc2VudGVuY2UgPSBzZW50ZW5jZTtcbiAgfSBlbHNlIHNlbnRlbmNlID0gc2VudGVuY2UuY29uY2F0KFwiLi4uXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic206cHktNSBtYi04IHNtOm1iLTAgc206Z3JpZCBzbTpncmlkLWNvbHMtMyBzbTppdGVtcy1lbmQgc206dy1mdWxsIHNtOmdhcC14LThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTQgc206ZmxleC1yb3cgc206c3BhY2UteC01IHNtOml0ZW1zLWVuZCBzbTpmbGV4LWJldHdlZW4gbWItOCBzbTptYi0wIHNtOmNvbC1zcGFuLTJcIj5cbiAgICAgICAge2hlcm9JbWFnZSAmJiAoXG4gICAgICAgICAgPEhlcm9JbWFnZSB0aXRsZT17dGl0bGV9IGhlcm9JbWFnZT17aGVyb0ltYWdlfSBzbHVnPXtzbHVnfSAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00XCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWN1c3RvbVJlZC05NTAgZm9udC1zYW5zIGZvbnQtYm9sZFwiXG4gICAgICAgICAgICBocmVmPXtgL25ld3M/Y2F0ZWdvcnk9JHtjYXRlZ29yeX1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtM3hsIHRleHQtY3VzdG9tUmVkLTcwMCBob3Zlcjp0ZXh0LWN1c3RvbVJlZC05NTAgY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17YC9wb3N0cy8ke3NsdWd9YH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aXRsZSB9fVxuICAgICAgICAgICAgPjwvTGluaz5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoMlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlcmlmXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2VudGVuY2UgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj1cIi9pc3N1ZXNcIlxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBmb250LXNhbnMgdGV4dC1wcmltYXJ5LTUwMFwiXG4gICAgICA+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1jdXN0b21SZWQtODAwIG1iLTEwIHNtOm1iLTAgcC01IHctZnVsbCB0ZXh0LW5ldXRyYWwtNTAgaG92ZXI6YmctY3VzdG9tUmVkLTk1MCBhY3RpdmU6YmctY3VzdG9tUmVkLTUwMCByaWdodC0wXCI+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIFJlYWQgVGhlIExhdGVzdCBJc3N1ZVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVyb0ltYWdlIiwiTGluayIsIkhlcm9Qb3N0IiwidGl0bGUiLCJoZXJvSW1hZ2UiLCJleGNlcnB0Iiwic2x1ZyIsImNhdGVnb3J5Iiwic2VudGVuY2UiLCJzcGxpdCIsInRyaW0iLCJjb25jYXQiLCJlbmRzV2l0aCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwiaDEiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hero-post.tsx\n"));

/***/ })

});