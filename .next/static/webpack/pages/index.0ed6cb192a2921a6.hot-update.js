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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ heroImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction heroImage(param) {\n    let { title, heroImage, slug } = param;\n    const image = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        fill: true,\n        alt: title,\n        src: heroImage === null || heroImage === void 0 ? void 0 : heroImage.node.sourceUrl,\n        className: \"object-cover object-center w-50 h-70\"\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-image.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:mx-0 relative min-w-[50vw] min-h-[20vh] sm:min-w-[40vw] sm:min-h-[80vh]\",\n        children: slug ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/posts/\".concat(slug),\n            \"aria-label\": title,\n            children: image\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-image.tsx\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, this) : image\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/hero-image.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8taW1hZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0Y7QUFZZCxTQUFTRSxVQUFVLEtBQWlDO1FBQWpDLEVBQUVDLEtBQUssRUFBRUQsU0FBUyxFQUFFRSxJQUFJLEVBQVMsR0FBakM7SUFDaEMsTUFBTUMsc0JBQ0osOERBQUNMLG1EQUFLQTtRQUNKTSxJQUFJO1FBQ0pDLEtBQUtKO1FBQ0xLLEdBQUcsRUFBRU4sc0JBQUFBLGdDQUFBQSxVQUFXTyxJQUFJLENBQUNDLFNBQVM7UUFDOUJDLFdBQVU7Ozs7OztJQUdkLHFCQUNFLDhEQUFDQztRQUFJRCxXQUFVO2tCQUNaUCxxQkFDQyw4REFBQ0gsa0RBQUlBO1lBQUNZLE1BQU0sVUFBZSxPQUFMVDtZQUFRVSxjQUFZWDtzQkFDdkNFOzs7OzttQkFHSEE7Ozs7OztBQUlSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby1pbWFnZS50c3g/MDE1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaGVyb0ltYWdlOiB7XG4gICAgbm9kZToge1xuICAgICAgc291cmNlVXJsOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbiAgc2x1Zz86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVyb0ltYWdlKHsgdGl0bGUsIGhlcm9JbWFnZSwgc2x1ZyB9OiBQcm9wcykge1xuICBjb25zdCBpbWFnZSA9IChcbiAgICA8SW1hZ2VcbiAgICAgIGZpbGxcbiAgICAgIGFsdD17dGl0bGV9XG4gICAgICBzcmM9e2hlcm9JbWFnZT8ubm9kZS5zb3VyY2VVcmx9XG4gICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciB3LTUwIGgtNzBcIlxuICAgIC8+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbTpteC0wIHJlbGF0aXZlIG1pbi13LVs1MHZ3XSBtaW4taC1bMjB2aF0gc206bWluLXctWzQwdnddIHNtOm1pbi1oLVs4MHZoXVwiPlxuICAgICAge3NsdWcgPyAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtzbHVnfWB9IGFyaWEtbGFiZWw9e3RpdGxlfT5cbiAgICAgICAgICB7aW1hZ2V9XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkgOiAoXG4gICAgICAgIGltYWdlXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsImhlcm9JbWFnZSIsInRpdGxlIiwic2x1ZyIsImltYWdlIiwiZmlsbCIsImFsdCIsInNyYyIsIm5vZGUiLCJzb3VyY2VVcmwiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwiYXJpYS1sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hero-image.tsx\n"));

/***/ })

});