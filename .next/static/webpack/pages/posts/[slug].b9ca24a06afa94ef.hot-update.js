"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/more-stories-preview.tsx":
/*!*********************************************!*\
  !*** ./components/more-stories-preview.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostPreview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _more_stories_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more-stories-image */ \"./components/more-stories-image.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction PostPreview(param) {\n    let { title, coverImage, excerpt, slug, category } = param;\n    const sentence = excerpt ? excerpt.split(/[.!!()]/)[0].trim(/[.!]/).concat(\".\") : \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-6 sm:mb-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col space-y-2 sm:space-y-3\",\n            children: [\n                coverImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_more_stories_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    title: title,\n                    coverImage: coverImage,\n                    slug: slug\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/more-stories-preview.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"text-customRed-950 uppercase text-sm font-bold font-sans\",\n                    href: \"/news?category=\".concat(category),\n                    children: category\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/more-stories-preview.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl text-customRed-700 hover:text-customRed-950 capitalize\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/posts/\".concat(slug),\n                        dangerouslySetInnerHTML: {\n                            __html: title\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/more-stories-preview.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/more-stories-preview.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-serif text-lg\",\n                    dangerouslySetInnerHTML: {\n                        __html: sentence\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/more-stories-preview.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/more-stories-preview.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/more-stories-preview.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = PostPreview;\nvar _c;\n$RefreshReg$(_c, \"PostPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vcmUtc3Rvcmllcy1wcmV2aWV3LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDO0FBQ2pCO0FBRWQsU0FBU0UsWUFBWSxLQU1uQztRQU5tQyxFQUNsQ0MsS0FBSyxFQUNMQyxVQUFVLEVBQ1ZDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxRQUFRLEVBQ1QsR0FObUM7SUFPbEMsTUFBTUMsV0FBV0gsVUFDYkEsUUFDR0ksS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQ25CQyxJQUFJLENBQUMsUUFDTEMsTUFBTSxDQUFDLE9BQ1Y7SUFFSixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7Z0JBQ1pULDRCQUNDLDhEQUFDSiwyREFBVUE7b0JBQ1RHLE9BQU9BO29CQUNQQyxZQUFZQTtvQkFDWkUsTUFBTUE7Ozs7Ozs4QkFHViw4REFBQ0wsa0RBQUlBO29CQUNIWSxXQUFVO29CQUNWQyxNQUFNLGtCQUEyQixPQUFUUDs4QkFFdkJBOzs7Ozs7OEJBRUgsOERBQUNRO29CQUFHRixXQUFVOzhCQUNaLDRFQUFDWixrREFBSUE7d0JBQ0hhLE1BQU0sVUFBZSxPQUFMUjt3QkFDaEJVLHlCQUF5Qjs0QkFBRUMsUUFBUWQ7d0JBQU07Ozs7Ozs7Ozs7OzhCQUc3Qyw4REFBQ1M7b0JBQ0NDLFdBQVU7b0JBQ1ZHLHlCQUF5Qjt3QkFBRUMsUUFBUVQ7b0JBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3REO0tBM0N3Qk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb3JlLXN0b3JpZXMtcHJldmlldy50c3g/NDQ0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ292ZXJJbWFnZSBmcm9tIFwiLi9tb3JlLXN0b3JpZXMtaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFByZXZpZXcoe1xuICB0aXRsZSxcbiAgY292ZXJJbWFnZSxcbiAgZXhjZXJwdCxcbiAgc2x1ZyxcbiAgY2F0ZWdvcnksXG59KSB7XG4gIGNvbnN0IHNlbnRlbmNlID0gZXhjZXJwdFxuICAgID8gZXhjZXJwdFxuICAgICAgICAuc3BsaXQoL1suISEoKV0vKVswXVxuICAgICAgICAudHJpbSgvWy4hXS8pXG4gICAgICAgIC5jb25jYXQoXCIuXCIpXG4gICAgOiBcIlwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IHNtOm1iLTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgc206c3BhY2UteS0zXCI+XG4gICAgICAgIHtjb3ZlckltYWdlICYmIChcbiAgICAgICAgICA8Q292ZXJJbWFnZVxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgY292ZXJJbWFnZT17Y292ZXJJbWFnZX1cbiAgICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbVJlZC05NTAgdXBwZXJjYXNlIHRleHQtc20gZm9udC1ib2xkIGZvbnQtc2Fuc1wiXG4gICAgICAgICAgaHJlZj17YC9uZXdzP2NhdGVnb3J5PSR7Y2F0ZWdvcnl9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1jdXN0b21SZWQtNzAwIGhvdmVyOnRleHQtY3VzdG9tUmVkLTk1MCBjYXBpdGFsaXplXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e2AvcG9zdHMvJHtzbHVnfWB9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRpdGxlIH19XG4gICAgICAgICAgPjwvTGluaz5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2VyaWYgdGV4dC1sZ1wiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzZW50ZW5jZSB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ292ZXJJbWFnZSIsIkxpbmsiLCJQb3N0UHJldmlldyIsInRpdGxlIiwiY292ZXJJbWFnZSIsImV4Y2VycHQiLCJzbHVnIiwiY2F0ZWdvcnkiLCJzZW50ZW5jZSIsInNwbGl0IiwidHJpbSIsImNvbmNhdCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJoMSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/more-stories-preview.tsx\n"));

/***/ })

});