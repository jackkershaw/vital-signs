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

/***/ "./components/hero-image.tsx":
/*!***********************************!*\
  !*** ./components/hero-image.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ heroImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction heroImage(param) {\n    let { title, heroImage, slug } = param;\n    const image = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        fill: true,\n        alt: title,\n        src: heroImage === null || heroImage === void 0 ? void 0 : heroImage.node.sourceUrl,\n        className: \"object-cover object-center\"\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-image.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:mx-0 relative min-w-[30vw] min-h-[30vh] sm:min-w-[40vw] sm:min-h-[50vh]\",\n        children: slug ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/posts/\".concat(slug),\n            \"aria-label\": title,\n            children: image\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-image.tsx\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, this) : image\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-image.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8taW1hZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0Y7QUFZZCxTQUFTRSxVQUFVLEtBQWlDO1FBQWpDLEVBQUVDLEtBQUssRUFBRUQsU0FBUyxFQUFFRSxJQUFJLEVBQVMsR0FBakM7SUFDaEMsTUFBTUMsc0JBQ0osOERBQUNMLG1EQUFLQTtRQUNKTSxJQUFJO1FBQ0pDLEtBQUtKO1FBQ0xLLEdBQUcsRUFBRU4sc0JBQUFBLGdDQUFBQSxVQUFXTyxJQUFJLENBQUNDLFNBQVM7UUFDOUJDLFdBQVU7Ozs7OztJQUdkLHFCQUNFLDhEQUFDQztRQUFJRCxXQUFVO2tCQUNaUCxxQkFDQyw4REFBQ0gsa0RBQUlBO1lBQUNZLE1BQU0sVUFBZSxPQUFMVDtZQUFRVSxjQUFZWDtzQkFDdkNFOzs7OzttQkFHSEE7Ozs7OztBQUlSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby1pbWFnZS50c3g/MDE1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaGVyb0ltYWdlOiB7XG4gICAgbm9kZToge1xuICAgICAgc291cmNlVXJsOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbiAgc2x1Zz86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVyb0ltYWdlKHsgdGl0bGUsIGhlcm9JbWFnZSwgc2x1ZyB9OiBQcm9wcykge1xuICBjb25zdCBpbWFnZSA9IChcbiAgICA8SW1hZ2VcbiAgICAgIGZpbGxcbiAgICAgIGFsdD17dGl0bGV9XG4gICAgICBzcmM9e2hlcm9JbWFnZT8ubm9kZS5zb3VyY2VVcmx9XG4gICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiXG4gICAgLz5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm14LTAgcmVsYXRpdmUgbWluLXctWzMwdnddIG1pbi1oLVszMHZoXSBzbTptaW4tdy1bNDB2d10gc206bWluLWgtWzUwdmhdXCI+XG4gICAgICB7c2x1ZyA/IChcbiAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8ke3NsdWd9YH0gYXJpYS1sYWJlbD17dGl0bGV9PlxuICAgICAgICAgIHtpbWFnZX1cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSA6IChcbiAgICAgICAgaW1hZ2VcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiaGVyb0ltYWdlIiwidGl0bGUiLCJzbHVnIiwiaW1hZ2UiLCJmaWxsIiwiYWx0Iiwic3JjIiwibm9kZSIsInNvdXJjZVVybCIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJhcmlhLWxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hero-image.tsx\n"));

/***/ }),

/***/ "./components/hero-post.tsx":
/*!**********************************!*\
  !*** ./components/hero-post.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeroPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hero_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-image */ \"./components/hero-image.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction HeroPost(param) {\n    let { title, heroImage, excerpt, slug, category } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"sm:py-5 sm:px-3 mb-8 sm:mb-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/issues\",\n                className: \"text-lg font-bold font-sans text-primary-500\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-orange-700 mb-10 sm:mb-5 p-5 w-full text-neutral-50 hover:bg-orange-950 active:bg-orange-500\",\n                        children: [\n                            \" \",\n                            \"Read the Latest Issue\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-4\",\n                children: [\n                    heroImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hero_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        title: title,\n                        heroImage: heroImage,\n                        slug: slug\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"uppercase text-orange-800\",\n                        children: category\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl text-orange-700 hover:text-orange-950 capitalize\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/posts/\".concat(slug),\n                            dangerouslySetInnerHTML: {\n                                __html: title\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-lg font-serif\",\n                        dangerouslySetInnerHTML: {\n                            __html: excerpt\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-post.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = HeroPost;\nvar _c;\n$RefreshReg$(_c, \"HeroPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8tcG9zdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFxQztBQUNSO0FBRWQsU0FBU0UsU0FBUyxLQU1oQztRQU5nQyxFQUMvQkMsS0FBSyxFQUNMQyxTQUFTLEVBQ1RDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxRQUFRLEVBQ1QsR0FOZ0M7SUFPL0IscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ1Isa0RBQUlBO2dCQUNIUyxNQUFLO2dCQUNMRCxXQUFVOztvQkFFVDtrQ0FDRCw4REFBQ0U7d0JBQUlGLFdBQVU7OzRCQUNaOzRCQUFJOzs7Ozs7Ozs7Ozs7OzBCQUlULDhEQUFDRTtnQkFBSUYsV0FBVTs7b0JBQ1pMLDJCQUNDLDhEQUFDSixtREFBU0E7d0JBQUNHLE9BQU9BO3dCQUFPQyxXQUFXQTt3QkFBV0UsTUFBTUE7Ozs7OztrQ0FFdkQsOERBQUNNO3dCQUFHSCxXQUFVO2tDQUE2QkY7Ozs7OztrQ0FDM0MsOERBQUNLO3dCQUFHSCxXQUFVO2tDQUNaLDRFQUFDUixrREFBSUE7NEJBQ0hTLE1BQU0sVUFBZSxPQUFMSjs0QkFDaEJPLHlCQUF5QjtnQ0FBRUMsUUFBUVg7NEJBQU07Ozs7Ozs7Ozs7O2tDQUc3Qyw4REFBQ1E7d0JBQ0NGLFdBQVU7d0JBQ1ZJLHlCQUF5Qjs0QkFBRUMsUUFBUVQ7d0JBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyRDtLQXJDd0JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby1wb3N0LnRzeD9jZjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZXJvSW1hZ2UgZnJvbSBcIi4vaGVyby1pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvUG9zdCh7XG4gIHRpdGxlLFxuICBoZXJvSW1hZ2UsXG4gIGV4Y2VycHQsXG4gIHNsdWcsXG4gIGNhdGVnb3J5LFxufSkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNtOnB5LTUgc206cHgtMyBtYi04IHNtOm1iLTBcIj5cbiAgICAgIDxMaW5rXG4gICAgICAgIGhyZWY9XCIvaXNzdWVzXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgZm9udC1zYW5zIHRleHQtcHJpbWFyeS01MDBcIlxuICAgICAgPlxuICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctb3JhbmdlLTcwMCBtYi0xMCBzbTptYi01IHAtNSB3LWZ1bGwgdGV4dC1uZXV0cmFsLTUwIGhvdmVyOmJnLW9yYW5nZS05NTAgYWN0aXZlOmJnLW9yYW5nZS01MDBcIj5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgUmVhZCB0aGUgTGF0ZXN0IElzc3VlXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNFwiPlxuICAgICAgICB7aGVyb0ltYWdlICYmIChcbiAgICAgICAgICA8SGVyb0ltYWdlIHRpdGxlPXt0aXRsZX0gaGVyb0ltYWdlPXtoZXJvSW1hZ2V9IHNsdWc9e3NsdWd9IC8+XG4gICAgICAgICl9XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1vcmFuZ2UtODAwXCI+e2NhdGVnb3J5fTwvaDE+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LW9yYW5nZS03MDAgaG92ZXI6dGV4dC1vcmFuZ2UtOTUwIGNhcGl0YWxpemVcIj5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj17YC9wb3N0cy8ke3NsdWd9YH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGl0bGUgfX1cbiAgICAgICAgICA+PC9MaW5rPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlcmlmXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGV4Y2VycHQgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZXJvSW1hZ2UiLCJMaW5rIiwiSGVyb1Bvc3QiLCJ0aXRsZSIsImhlcm9JbWFnZSIsImV4Y2VycHQiLCJzbHVnIiwiY2F0ZWdvcnkiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaHJlZiIsImRpdiIsImgxIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hero-post.tsx\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_more_stories_on_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/more-stories-on-home */ \"./components/more-stories-on-home.tsx\");\n/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero-post */ \"./components/hero-post.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n\n\n\n\nvar __N_SSG = true;\nfunction Index(param) {\n    let { allPosts: { edges } } = param;\n    var _edges_;\n    const heroPost = (_edges_ = edges[0]) === null || _edges_ === void 0 ? void 0 : _edges_.node;\n    const morePosts = edges.slice(1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sm:grid sm:grid-cols-2\",\n            children: [\n                heroPost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: heroPost.title,\n                    heroImage: heroPost.featuredImage,\n                    slug: heroPost.slug,\n                    excerpt: heroPost.excerpt,\n                    category: heroPost.categories.nodes.map((category)=>category.name)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, this),\n                morePosts.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories_on_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    posts: morePosts\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 34\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/index.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNkQ7QUFDZDtBQUNMOztBQUczQixTQUFTRyxNQUFNLEtBQXVCO1FBQXZCLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFLEVBQUUsR0FBdkI7UUFDWEE7SUFBakIsTUFBTUMsWUFBV0QsVUFBQUEsS0FBSyxDQUFDLEVBQUUsY0FBUkEsOEJBQUFBLFFBQVVFLElBQUk7SUFDL0IsTUFBTUMsWUFBWUgsTUFBTUksS0FBSyxDQUFDO0lBRTlCLHFCQUNFLDhEQUFDUCwwREFBTUE7a0JBQ0wsNEVBQUNRO1lBQUlDLFdBQVU7O2dCQUNaTCwwQkFDQyw4REFBQ0wsNkRBQVFBO29CQUNQVyxPQUFPTixTQUFTTSxLQUFLO29CQUNyQkMsV0FBV1AsU0FBU1EsYUFBYTtvQkFDakNDLE1BQU1ULFNBQVNTLElBQUk7b0JBQ25CQyxTQUFTVixTQUFTVSxPQUFPO29CQUN6QkMsVUFBVVgsU0FBU1ksVUFBVSxDQUFDQyxLQUFLLENBQUNDLEdBQUcsQ0FDckMsQ0FBQ0gsV0FBYUEsU0FBU0ksSUFBSTs7Ozs7O2dCQUloQ2IsVUFBVWMsTUFBTSxHQUFHLG1CQUFLLDhEQUFDdEIsd0VBQVdBO29CQUFDdUIsT0FBT2Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJEO0tBdEJ3QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IE1vcmVTdG9yaWVzIGZyb20gXCIuLi9jb21wb25lbnRzL21vcmUtc3Rvcmllcy1vbi1ob21lXCI7XG5pbXBvcnQgSGVyb1Bvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVyby1wb3N0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHNGb3JIb21lIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoeyBhbGxQb3N0czogeyBlZGdlcyB9IH0pIHtcbiAgY29uc3QgaGVyb1Bvc3QgPSBlZGdlc1swXT8ubm9kZTtcbiAgY29uc3QgbW9yZVBvc3RzID0gZWRnZXMuc2xpY2UoMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpncmlkIHNtOmdyaWQtY29scy0yXCI+XG4gICAgICAgIHtoZXJvUG9zdCAmJiAoXG4gICAgICAgICAgPEhlcm9Qb3N0XG4gICAgICAgICAgICB0aXRsZT17aGVyb1Bvc3QudGl0bGV9XG4gICAgICAgICAgICBoZXJvSW1hZ2U9e2hlcm9Qb3N0LmZlYXR1cmVkSW1hZ2V9XG4gICAgICAgICAgICBzbHVnPXtoZXJvUG9zdC5zbHVnfVxuICAgICAgICAgICAgZXhjZXJwdD17aGVyb1Bvc3QuZXhjZXJwdH1cbiAgICAgICAgICAgIGNhdGVnb3J5PXtoZXJvUG9zdC5jYXRlZ29yaWVzLm5vZGVzLm1hcChcbiAgICAgICAgICAgICAgKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5uYW1lXG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHttb3JlUG9zdHMubGVuZ3RoID4gMCAmJiA8TW9yZVN0b3JpZXMgcG9zdHM9e21vcmVQb3N0c30gLz59XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7fSkgPT4ge1xuICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzRm9ySG9tZSh7IHByZXZpZXc6IGZhbHNlIH0pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFsbFBvc3RzIH0sXG4gICAgcmV2YWxpZGF0ZTogMTAsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIk1vcmVTdG9yaWVzIiwiSGVyb1Bvc3QiLCJMYXlvdXQiLCJJbmRleCIsImFsbFBvc3RzIiwiZWRnZXMiLCJoZXJvUG9zdCIsIm5vZGUiLCJtb3JlUG9zdHMiLCJzbGljZSIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiaGVyb0ltYWdlIiwiZmVhdHVyZWRJbWFnZSIsInNsdWciLCJleGNlcnB0IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwibm9kZXMiLCJtYXAiLCJuYW1lIiwibGVuZ3RoIiwicG9zdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});