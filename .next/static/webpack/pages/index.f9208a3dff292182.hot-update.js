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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_more_stories_on_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/more-stories-on-home */ \"./components/more-stories-on-home.tsx\");\n/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero-post */ \"./components/hero-post.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n\n\n\n\nvar __N_SSG = true;\nfunction Index(param) {\n    let { allPosts: { edges } } = param;\n    var _edges_;\n    const heroPost = (_edges_ = edges[0]) === null || _edges_ === void 0 ? void 0 : _edges_.node;\n    const morePosts = edges.slice(1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sm:grid sm:grid-cols-2 sm:gap-x-5\",\n            children: [\n                heroPost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: heroPost.title,\n                    heroImage: heroPost.featuredImage,\n                    slug: heroPost.slug,\n                    excerpt: heroPost.excerpt,\n                    category: heroPost.categories.nodes.map((category)=>category.name)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, this),\n                morePosts.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories_on_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    posts: morePosts\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 34\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/index.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNkQ7QUFDZDtBQUNMOztBQUczQixTQUFTRyxNQUFNLEtBQXVCO1FBQXZCLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFLEVBQUUsR0FBdkI7UUFDWEE7SUFBakIsTUFBTUMsWUFBV0QsVUFBQUEsS0FBSyxDQUFDLEVBQUUsY0FBUkEsOEJBQUFBLFFBQVVFLElBQUk7SUFDL0IsTUFBTUMsWUFBWUgsTUFBTUksS0FBSyxDQUFDO0lBRTlCLHFCQUNFLDhEQUFDUCwwREFBTUE7a0JBQ0wsNEVBQUNRO1lBQUlDLFdBQVU7O2dCQUNaTCwwQkFDQyw4REFBQ0wsNkRBQVFBO29CQUNQVyxPQUFPTixTQUFTTSxLQUFLO29CQUNyQkMsV0FBV1AsU0FBU1EsYUFBYTtvQkFDakNDLE1BQU1ULFNBQVNTLElBQUk7b0JBQ25CQyxTQUFTVixTQUFTVSxPQUFPO29CQUN6QkMsVUFBVVgsU0FBU1ksVUFBVSxDQUFDQyxLQUFLLENBQUNDLEdBQUcsQ0FDckMsQ0FBQ0gsV0FBYUEsU0FBU0ksSUFBSTs7Ozs7O2dCQUloQ2IsVUFBVWMsTUFBTSxHQUFHLG1CQUFLLDhEQUFDdEIsd0VBQVdBO29CQUFDdUIsT0FBT2Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJEO0tBdEJ3QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IE1vcmVTdG9yaWVzIGZyb20gXCIuLi9jb21wb25lbnRzL21vcmUtc3Rvcmllcy1vbi1ob21lXCI7XG5pbXBvcnQgSGVyb1Bvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVyby1wb3N0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHNGb3JIb21lIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoeyBhbGxQb3N0czogeyBlZGdlcyB9IH0pIHtcbiAgY29uc3QgaGVyb1Bvc3QgPSBlZGdlc1swXT8ubm9kZTtcbiAgY29uc3QgbW9yZVBvc3RzID0gZWRnZXMuc2xpY2UoMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpncmlkIHNtOmdyaWQtY29scy0yIHNtOmdhcC14LTVcIj5cbiAgICAgICAge2hlcm9Qb3N0ICYmIChcbiAgICAgICAgICA8SGVyb1Bvc3RcbiAgICAgICAgICAgIHRpdGxlPXtoZXJvUG9zdC50aXRsZX1cbiAgICAgICAgICAgIGhlcm9JbWFnZT17aGVyb1Bvc3QuZmVhdHVyZWRJbWFnZX1cbiAgICAgICAgICAgIHNsdWc9e2hlcm9Qb3N0LnNsdWd9XG4gICAgICAgICAgICBleGNlcnB0PXtoZXJvUG9zdC5leGNlcnB0fVxuICAgICAgICAgICAgY2F0ZWdvcnk9e2hlcm9Qb3N0LmNhdGVnb3JpZXMubm9kZXMubWFwKFxuICAgICAgICAgICAgICAoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5hbWVcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge21vcmVQb3N0cy5sZW5ndGggPiAwICYmIDxNb3JlU3RvcmllcyBwb3N0cz17bW9yZVBvc3RzfSAvPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHt9KSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHNGb3JIb21lKHsgcHJldmlldzogZmFsc2UgfSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfSxcbiAgICByZXZhbGlkYXRlOiAxMCxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiTW9yZVN0b3JpZXMiLCJIZXJvUG9zdCIsIkxheW91dCIsIkluZGV4IiwiYWxsUG9zdHMiLCJlZGdlcyIsImhlcm9Qb3N0Iiwibm9kZSIsIm1vcmVQb3N0cyIsInNsaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJoZXJvSW1hZ2UiLCJmZWF0dXJlZEltYWdlIiwic2x1ZyIsImV4Y2VycHQiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJub2RlcyIsIm1hcCIsIm5hbWUiLCJsZW5ndGgiLCJwb3N0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});