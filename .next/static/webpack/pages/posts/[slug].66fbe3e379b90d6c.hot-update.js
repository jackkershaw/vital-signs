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

/***/ "./components/post-preview.tsx":
/*!*************************************!*\
  !*** ./components/post-preview.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostPreview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cover_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cover-image */ \"./components/cover-image.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction PostPreview(param) {\n    let { title, coverImage, excerpt, slug, category } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:p-5 mb-10 sm:mb-0 flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    coverImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cover_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        title: title,\n                        coverImage: coverImage,\n                        slug: slug\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-preview.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-right\",\n                        children: category\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-preview.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-preview.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl mb-4 text-orange-700 hover:text-orange-950\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/posts/\".concat(slug),\n                    dangerouslySetInnerHTML: {\n                        __html: title\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-preview.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-preview.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 font-serif\",\n                dangerouslySetInnerHTML: {\n                    __html: excerpt\n                }\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-preview.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-preview.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = PostPreview;\nvar _c;\n$RefreshReg$(_c, \"PostPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QtcHJldmlldy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUNWO0FBRWQsU0FBU0UsWUFBWSxLQU1uQztRQU5tQyxFQUNsQ0MsS0FBSyxFQUNMQyxVQUFVLEVBQ1ZDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxRQUFRLEVBQ1QsR0FObUM7SUFPbEMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQ1pMLDRCQUNDLDhEQUFDSixvREFBVUE7d0JBQ1RHLE9BQU9BO3dCQUNQQyxZQUFZQTt3QkFDWkUsTUFBTUE7Ozs7OztrQ0FHViw4REFBQ0k7d0JBQUdELFdBQVU7a0NBQWNGOzs7Ozs7Ozs7Ozs7MEJBRzlCLDhEQUFDRztnQkFBR0QsV0FBVTswQkFDWiw0RUFBQ1Isa0RBQUlBO29CQUNIVSxNQUFNLFVBQWUsT0FBTEw7b0JBQ2hCTSx5QkFBeUI7d0JBQUVDLFFBQVFWO29CQUFNOzs7Ozs7Ozs7OzswQkFHN0MsOERBQUNLO2dCQUNDQyxXQUFVO2dCQUNWRyx5QkFBeUI7b0JBQUVDLFFBQVFSO2dCQUFROzs7Ozs7Ozs7Ozs7QUFJbkQ7S0FoQ3dCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Bvc3QtcHJldmlldy50c3g/NzdlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ292ZXJJbWFnZSBmcm9tIFwiLi9jb3Zlci1pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0UHJldmlldyh7XG4gIHRpdGxlLFxuICBjb3ZlckltYWdlLFxuICBleGNlcnB0LFxuICBzbHVnLFxuICBjYXRlZ29yeSxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnAtNSBtYi0xMCBzbTptYi0wIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICB7Y292ZXJJbWFnZSAmJiAoXG4gICAgICAgICAgPENvdmVySW1hZ2VcbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgIGNvdmVySW1hZ2U9e2NvdmVySW1hZ2V9XG4gICAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+e2NhdGVnb3J5fTwvaDE+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTQgdGV4dC1vcmFuZ2UtNzAwIGhvdmVyOnRleHQtb3JhbmdlLTk1MFwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9e2AvcG9zdHMvJHtzbHVnfWB9XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aXRsZSB9fVxuICAgICAgICA+PC9MaW5rPlxuICAgICAgPC9oMT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwibWItNCBmb250LXNlcmlmXCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBleGNlcnB0IH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNvdmVySW1hZ2UiLCJMaW5rIiwiUG9zdFByZXZpZXciLCJ0aXRsZSIsImNvdmVySW1hZ2UiLCJleGNlcnB0Iiwic2x1ZyIsImNhdGVnb3J5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJocmVmIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/post-preview.tsx\n"));

/***/ })

});