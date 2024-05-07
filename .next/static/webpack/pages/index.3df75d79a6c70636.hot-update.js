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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeroPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hero_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-image */ \"./components/hero-image.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction HeroPost(param) {\n    let { title, heroImage, excerpt, slug, category } = param;\n    const sentence = excerpt.split(\". \")[0]; // Get the first sentence\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"sm:py-5 mb-8 sm:mb-0 sm:grid sm:grid-cols-3 sm:items-end sm:w-full sm:gap-x-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-4 sm:flex-row sm:space-x-5 sm:items-end sm:flex-between mb-8 sm:mb-0 sm:col-span-2\",\n                children: [\n                    heroImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hero_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        title: title,\n                        heroImage: heroImage,\n                        slug: slug\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"uppercase text-customRed-950\",\n                                children: category\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl sm:text-4xl text-customRed-700 hover:text-customRed-950 capitalize\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/posts/\".concat(slug),\n                                    dangerouslySetInnerHTML: {\n                                        __html: title\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-serif\",\n                                dangerouslySetInnerHTML: {\n                                    __html: sentence\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/issues\",\n                className: \"text-lg font-bold font-sans text-primary-500\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-customRed-800 mb-10 sm:mb-0 p-5 w-full text-neutral-50 hover:bg-customRed-950 active:bg-customRed-500 right-0\",\n                        children: [\n                            \" \",\n                            \"Read The Latest Issue\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = HeroPost;\nvar _c;\n$RefreshReg$(_c, \"HeroPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8tcG9zdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFxQztBQUNSO0FBRWQsU0FBU0UsU0FBUyxLQU1oQztRQU5nQyxFQUMvQkMsS0FBSyxFQUNMQyxTQUFTLEVBQ1RDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxRQUFRLEVBQ1QsR0FOZ0M7SUFPL0IsTUFBTUMsV0FBV0gsUUFBUUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUseUJBQXlCO0lBRWxFLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFJRCxXQUFVOztvQkFDWlAsMkJBQ0MsOERBQUNKLG1EQUFTQTt3QkFBQ0csT0FBT0E7d0JBQU9DLFdBQVdBO3dCQUFXRSxNQUFNQTs7Ozs7O2tDQUV2RCw4REFBQ007d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBR0YsV0FBVTswQ0FBZ0NKOzs7Ozs7MENBQzlDLDhEQUFDTTtnQ0FBR0YsV0FBVTswQ0FDWiw0RUFBQ1Ysa0RBQUlBO29DQUNIYSxNQUFNLFVBQWUsT0FBTFI7b0NBQ2hCUyx5QkFBeUI7d0NBQUVDLFFBQVFiO29DQUFNOzs7Ozs7Ozs7OzswQ0FJN0MsOERBQUNjO2dDQUNDTixXQUFVO2dDQUNWSSx5QkFBeUI7b0NBQUVDLFFBQVFSO2dDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWxELDhEQUFDUCxrREFBSUE7Z0JBQ0hhLE1BQUs7Z0JBQ0xILFdBQVU7O29CQUVUO2tDQUNELDhEQUFDQzt3QkFBSUQsV0FBVTs7NEJBQ1o7NEJBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNZjtLQTFDd0JUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby1wb3N0LnRzeD9jZjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZXJvSW1hZ2UgZnJvbSBcIi4vaGVyby1pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvUG9zdCh7XG4gIHRpdGxlLFxuICBoZXJvSW1hZ2UsXG4gIGV4Y2VycHQsXG4gIHNsdWcsXG4gIGNhdGVnb3J5LFxufSkge1xuICBjb25zdCBzZW50ZW5jZSA9IGV4Y2VycHQuc3BsaXQoXCIuIFwiKVswXTsgLy8gR2V0IHRoZSBmaXJzdCBzZW50ZW5jZVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic206cHktNSBtYi04IHNtOm1iLTAgc206Z3JpZCBzbTpncmlkLWNvbHMtMyBzbTppdGVtcy1lbmQgc206dy1mdWxsIHNtOmdhcC14LThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTQgc206ZmxleC1yb3cgc206c3BhY2UteC01IHNtOml0ZW1zLWVuZCBzbTpmbGV4LWJldHdlZW4gbWItOCBzbTptYi0wIHNtOmNvbC1zcGFuLTJcIj5cbiAgICAgICAge2hlcm9JbWFnZSAmJiAoXG4gICAgICAgICAgPEhlcm9JbWFnZSB0aXRsZT17dGl0bGV9IGhlcm9JbWFnZT17aGVyb0ltYWdlfSBzbHVnPXtzbHVnfSAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWN1c3RvbVJlZC05NTBcIj57Y2F0ZWdvcnl9PC9oMT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC00eGwgdGV4dC1jdXN0b21SZWQtNzAwIGhvdmVyOnRleHQtY3VzdG9tUmVkLTk1MCBjYXBpdGFsaXplXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXtgL3Bvc3RzLyR7c2x1Z31gfVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRpdGxlIH19XG4gICAgICAgICAgICA+PC9MaW5rPlxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8aDJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZXJpZlwiXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNlbnRlbmNlIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxMaW5rXG4gICAgICAgIGhyZWY9XCIvaXNzdWVzXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgZm9udC1zYW5zIHRleHQtcHJpbWFyeS01MDBcIlxuICAgICAgPlxuICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctY3VzdG9tUmVkLTgwMCBtYi0xMCBzbTptYi0wIHAtNSB3LWZ1bGwgdGV4dC1uZXV0cmFsLTUwIGhvdmVyOmJnLWN1c3RvbVJlZC05NTAgYWN0aXZlOmJnLWN1c3RvbVJlZC01MDAgcmlnaHQtMFwiPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBSZWFkIFRoZSBMYXRlc3QgSXNzdWVcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlcm9JbWFnZSIsIkxpbmsiLCJIZXJvUG9zdCIsInRpdGxlIiwiaGVyb0ltYWdlIiwiZXhjZXJwdCIsInNsdWciLCJjYXRlZ29yeSIsInNlbnRlbmNlIiwic3BsaXQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJocmVmIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hero-post.tsx\n"));

/***/ })

});