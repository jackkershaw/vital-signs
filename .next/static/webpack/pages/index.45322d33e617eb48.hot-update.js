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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/more-stories */ \"./components/more-stories.tsx\");\n/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero-post */ \"./components/hero-post.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n\n\n\n\nvar __N_SSG = true;\nfunction Index(param) {\n    let { allPosts: { edges } } = param;\n    var _edges_;\n    const heroPost = (_edges_ = edges[0]) === null || _edges_ === void 0 ? void 0 : _edges_.node;\n    const morePosts = edges.slice(1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        preview: false,\n        children: [\n            heroPost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: heroPost.title,\n                coverImage: heroPost.featuredImage,\n                date: heroPost.date,\n                slug: heroPost.slug,\n                excerpt: heroPost.excerpt\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this),\n            morePosts.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                posts: morePosts\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 32\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDcUQ7QUFDTjtBQUNMOztBQUczQixTQUFTRyxNQUFNLEtBQXVCO1FBQXZCLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFLEVBQUUsR0FBdkI7UUFDWEE7SUFBakIsTUFBTUMsWUFBV0QsVUFBQUEsS0FBSyxDQUFDLEVBQUUsY0FBUkEsOEJBQUFBLFFBQVVFLElBQUk7SUFDL0IsTUFBTUMsWUFBWUgsTUFBTUksS0FBSyxDQUFDO0lBRTlCLHFCQUNFLDhEQUFDUCwwREFBTUE7UUFBQ1EsU0FBUzs7WUFDZEosMEJBQ0MsOERBQUNMLDZEQUFRQTtnQkFDUFUsT0FBT0wsU0FBU0ssS0FBSztnQkFDckJDLFlBQVlOLFNBQVNPLGFBQWE7Z0JBQ2xDQyxNQUFNUixTQUFTUSxJQUFJO2dCQUNuQkMsTUFBTVQsU0FBU1MsSUFBSTtnQkFDbkJDLFNBQVNWLFNBQVNVLE9BQU87Ozs7OztZQUc1QlIsVUFBVVMsTUFBTSxHQUFHLG1CQUFLLDhEQUFDakIsZ0VBQVdBO2dCQUFDa0IsT0FBT1Y7Ozs7Ozs7Ozs7OztBQUduRDtLQWxCd0JMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBNb3JlU3RvcmllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9tb3JlLXN0b3JpZXNcIjtcbmltcG9ydCBIZXJvUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9oZXJvLXBvc3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyBnZXRBbGxQb3N0c0ZvckhvbWUgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IGFsbFBvc3RzOiB7IGVkZ2VzIH0gfSkge1xuICBjb25zdCBoZXJvUG9zdCA9IGVkZ2VzWzBdPy5ub2RlO1xuICBjb25zdCBtb3JlUG9zdHMgPSBlZGdlcy5zbGljZSgxKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgcHJldmlldz17ZmFsc2V9PlxuICAgICAge2hlcm9Qb3N0ICYmIChcbiAgICAgICAgPEhlcm9Qb3N0XG4gICAgICAgICAgdGl0bGU9e2hlcm9Qb3N0LnRpdGxlfVxuICAgICAgICAgIGNvdmVySW1hZ2U9e2hlcm9Qb3N0LmZlYXR1cmVkSW1hZ2V9XG4gICAgICAgICAgZGF0ZT17aGVyb1Bvc3QuZGF0ZX1cbiAgICAgICAgICBzbHVnPXtoZXJvUG9zdC5zbHVnfVxuICAgICAgICAgIGV4Y2VycHQ9e2hlcm9Qb3N0LmV4Y2VycHR9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge21vcmVQb3N0cy5sZW5ndGggPiAwICYmIDxNb3JlU3RvcmllcyBwb3N0cz17bW9yZVBvc3RzfSAvPn1cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7XG4gIHByZXZpZXcgPSBmYWxzZSxcbn0pID0+IHtcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0c0ZvckhvbWUocHJldmlldyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhbGxQb3N0cywgcHJldmlldyB9LFxuICAgIHJldmFsaWRhdGU6IDEwLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJNb3JlU3RvcmllcyIsIkhlcm9Qb3N0IiwiTGF5b3V0IiwiSW5kZXgiLCJhbGxQb3N0cyIsImVkZ2VzIiwiaGVyb1Bvc3QiLCJub2RlIiwibW9yZVBvc3RzIiwic2xpY2UiLCJwcmV2aWV3IiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZmVhdHVyZWRJbWFnZSIsImRhdGUiLCJzbHVnIiwiZXhjZXJwdCIsImxlbmd0aCIsInBvc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});