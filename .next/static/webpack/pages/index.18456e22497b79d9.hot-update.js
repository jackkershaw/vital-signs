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

/***/ "./components/cover-image.tsx":
/*!************************************!*\
  !*** ./components/cover-image.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CoverImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction CoverImage(param) {\n    let { title, coverImage, slug } = param;\n    const image = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        width: 2000,\n        height: 1000,\n        alt: title,\n        src: coverImage === null || coverImage === void 0 ? void 0 : coverImage.node.sourceUrl,\n        className: \"hover:shadow-medium transition-shadow duration-200\"\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/cover-image.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:mx-0\",\n        children: slug ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/posts/\".concat(slug),\n            \"aria-label\": title,\n            children: image\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/cover-image.tsx\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, this) : image\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/cover-image.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_c = CoverImage;\nvar _c;\n$RefreshReg$(_c, \"CoverImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvdmVyLWltYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUNGO0FBWWQsU0FBU0UsV0FBVyxLQUkzQjtRQUoyQixFQUNqQ0MsS0FBSyxFQUNMQyxVQUFVLEVBQ1ZDLElBQUksRUFDRSxHQUoyQjtJQUtqQyxNQUFNQyxzQkFDSiw4REFBQ04sbURBQUtBO1FBQ0pPLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxLQUFLTjtRQUNMTyxHQUFHLEVBQUVOLHVCQUFBQSxpQ0FBQUEsV0FBWU8sSUFBSSxDQUFDQyxTQUFTO1FBQy9CQyxXQUFVOzs7Ozs7SUFHZCxxQkFDRSw4REFBQ0M7UUFBSUQsV0FBVTtrQkFDWlIscUJBQ0MsOERBQUNKLGtEQUFJQTtZQUFDYyxNQUFNLFVBQWUsT0FBTFY7WUFBUVcsY0FBWWI7c0JBQ3ZDRzs7Ozs7bUJBR0hBOzs7Ozs7QUFJUjtLQXpCd0JKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY292ZXItaW1hZ2UudHN4PzBmZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvdmVySW1hZ2U6IHtcbiAgICBub2RlOiB7XG4gICAgICBzb3VyY2VVcmw6IHN0cmluZztcbiAgICB9O1xuICB9O1xuICBzbHVnPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3ZlckltYWdlKHtcbiAgdGl0bGUsXG4gIGNvdmVySW1hZ2UsXG4gIHNsdWcsXG59OiBQcm9wcykge1xuICBjb25zdCBpbWFnZSA9IChcbiAgICA8SW1hZ2VcbiAgICAgIHdpZHRoPXsyMDAwfVxuICAgICAgaGVpZ2h0PXsxMDAwfVxuICAgICAgYWx0PXt0aXRsZX1cbiAgICAgIHNyYz17Y292ZXJJbWFnZT8ubm9kZS5zb3VyY2VVcmx9XG4gICAgICBjbGFzc05hbWU9XCJob3ZlcjpzaGFkb3ctbWVkaXVtIHRyYW5zaXRpb24tc2hhZG93IGR1cmF0aW9uLTIwMFwiXG4gICAgLz5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm14LTBcIj5cbiAgICAgIHtzbHVnID8gKFxuICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7c2x1Z31gfSBhcmlhLWxhYmVsPXt0aXRsZX0+XG4gICAgICAgICAge2ltYWdlfVxuICAgICAgICA8L0xpbms+XG4gICAgICApIDogKFxuICAgICAgICBpbWFnZVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJDb3ZlckltYWdlIiwidGl0bGUiLCJjb3ZlckltYWdlIiwic2x1ZyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzcmMiLCJub2RlIiwic291cmNlVXJsIiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsImFyaWEtbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/cover-image.tsx\n"));

/***/ })

});