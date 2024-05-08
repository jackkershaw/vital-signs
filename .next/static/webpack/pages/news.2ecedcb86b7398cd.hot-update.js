"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news",{

/***/ "./pages/news.tsx":
/*!************************!*\
  !*** ./pages/news.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_more_stories_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/more-stories-preview */ \"./components/more-stories-preview.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSG = true;\nfunction News(param) {\n    let { allPosts: { edges }, Categories } = param;\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const Posts = edges;\n    const filteredPosts = selectedCategory ? Posts.filter((param)=>{\n        let { node } = param;\n        return node.categories.nodes.some((category)=>category.name === selectedCategory);\n    }) : Posts;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { category } = router.query;\n        if (category) {\n            setSelectedCategory(category);\n        }\n    }, [\n        router.query\n    ]);\n    const handleCategoryChange = (event)=>{\n        setSelectedCategory(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold font-sans text-2xl p-10 bg-customRed-800 text-neutral-50 mb-5 sm:mb-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: selectedCategory || \"\",\n                        onChange: handleCategoryChange,\n                        className: \"bg-transparent\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Choose a category\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            Categories.filter((category)=>category.node.name !== \"Uncategorized\").map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: category.node.name,\n                                    children: category.node.name\n                                }, category.node.name, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:grid sm:grid-cols-4 sm:gap-x-5 sm:gap-y-5\",\n                    children: filteredPosts.map((param)=>{\n                        let { node } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories_preview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: node.title,\n                            coverImage: node.featuredImage,\n                            slug: node.slug,\n                            excerpt: node.excerpt,\n                            category: node.categories.nodes.map((category)=>category.name)\n                        }, node.slug, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(News, \"V4hUwV91xsiF4aCzoHEGLQ30o6I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDUztBQUVtQjtBQUVyQjtBQUNOOztBQUVuQixTQUFTSyxLQUFLLEtBQW1DO1FBQW5DLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFLEVBQUVDLFVBQVUsRUFBRSxHQUFuQzs7SUFDM0IsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHViwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNVyxRQUFRSjtJQUNkLE1BQU1LLGdCQUFnQkgsbUJBQ2xCRSxNQUFNRSxNQUFNLENBQUM7WUFBQyxFQUFFQyxJQUFJLEVBQUU7ZUFDcEJBLEtBQUtDLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQ3hCLENBQUNDLFdBQWFBLFNBQVNDLElBQUksS0FBS1Y7U0FHcENFO0lBRUosTUFBTVMsU0FBU2pCLHNEQUFTQTtJQUV4QkMsZ0RBQVNBLENBQUM7UUFDUixNQUFNLEVBQUVjLFFBQVEsRUFBRSxHQUFHRSxPQUFPQyxLQUFLO1FBQ2pDLElBQUlILFVBQVU7WUFDWlIsb0JBQW9CUTtRQUN0QjtJQUNGLEdBQUc7UUFBQ0UsT0FBT0MsS0FBSztLQUFDO0lBRWpCLE1BQU1DLHVCQUF1QixDQUFDQztRQUM1QmIsb0JBQW9CYSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDeEM7SUFFQSxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUN6QiwwREFBTUE7OzhCQUNMLDhEQUFDeUI7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUNDSCxPQUFPaEIsb0JBQW9CO3dCQUMzQm9CLFVBQVVQO3dCQUNWSyxXQUFVOzswQ0FFViw4REFBQ0c7Z0NBQU9MLE9BQU07MENBQUc7Ozs7Ozs0QkFDaEJqQixXQUFXSyxNQUFNLENBQ2hCLENBQUNLLFdBQWFBLFNBQVNKLElBQUksQ0FBQ0ssSUFBSSxLQUFLLGlCQUNyQ1ksR0FBRyxDQUFDLENBQUNiLHlCQUNMLDhEQUFDWTtvQ0FFQ0wsT0FBT1AsU0FBU0osSUFBSSxDQUFDSyxJQUFJOzhDQUV4QkQsU0FBU0osSUFBSSxDQUFDSyxJQUFJO21DQUhkRCxTQUFTSixJQUFJLENBQUNLLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUS9CLDhEQUFDTztvQkFBSUMsV0FBVTs4QkFDWmYsY0FBY21CLEdBQUcsQ0FBQzs0QkFBQyxFQUFFakIsSUFBSSxFQUFFOzZDQUMxQiw4REFBQ1osd0VBQVdBOzRCQUVWOEIsT0FBT2xCLEtBQUtrQixLQUFLOzRCQUNqQkMsWUFBWW5CLEtBQUtvQixhQUFhOzRCQUM5QkMsTUFBTXJCLEtBQUtxQixJQUFJOzRCQUNmQyxTQUFTdEIsS0FBS3NCLE9BQU87NEJBQ3JCbEIsVUFBVUosS0FBS0MsVUFBVSxDQUFDQyxLQUFLLENBQUNlLEdBQUcsQ0FDakMsQ0FBQ2IsV0FBYUEsU0FBU0MsSUFBSTsyQkFOeEJMLEtBQUtxQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYzVCO0dBL0R3QjlCOztRQVdQRixrREFBU0E7OztLQVhGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZXdzLnRzeD8wMjlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHNGb3JIb21lLCBnZXRDYXRlZ29yaWVzIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcbmltcG9ydCBQb3N0UHJldmlldyBmcm9tIFwiLi4vY29tcG9uZW50cy9tb3JlLXN0b3JpZXMtcHJldmlld1wiO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cyh7IGFsbFBvc3RzOiB7IGVkZ2VzIH0sIENhdGVnb3JpZXMgfSkge1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgUG9zdHMgPSBlZGdlcztcbiAgY29uc3QgZmlsdGVyZWRQb3N0cyA9IHNlbGVjdGVkQ2F0ZWdvcnlcbiAgICA/IFBvc3RzLmZpbHRlcigoeyBub2RlIH0pID0+XG4gICAgICAgIG5vZGUuY2F0ZWdvcmllcy5ub2Rlcy5zb21lKFxuICAgICAgICAgIChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkubmFtZSA9PT0gc2VsZWN0ZWRDYXRlZ29yeVxuICAgICAgICApXG4gICAgICApXG4gICAgOiBQb3N0cztcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IHJvdXRlci5xdWVyeTtcbiAgICBpZiAoY2F0ZWdvcnkpIHtcbiAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgIH1cbiAgfSwgW3JvdXRlci5xdWVyeV0pO1xuXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGZvbnQtc2FucyB0ZXh0LTJ4bCBwLTEwIGJnLWN1c3RvbVJlZC04MDAgdGV4dC1uZXV0cmFsLTUwIG1iLTUgc206bWItMTBcIj5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRDYXRlZ29yeSB8fCBcIlwifVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNhdGVnb3J5Q2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5DaG9vc2UgYSBjYXRlZ29yeTwvb3B0aW9uPlxuICAgICAgICAgICAge0NhdGVnb3JpZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5vZGUubmFtZSAhPT0gXCJVbmNhdGVnb3JpemVkXCJcbiAgICAgICAgICAgICkubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeS5ub2RlLm5hbWV9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2NhdGVnb3J5Lm5vZGUubmFtZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5ub2RlLm5hbWV9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmdyaWQgc206Z3JpZC1jb2xzLTQgc206Z2FwLXgtNSBzbTpnYXAteS01XCI+XG4gICAgICAgICAge2ZpbHRlcmVkUG9zdHMubWFwKCh7IG5vZGUgfSkgPT4gKFxuICAgICAgICAgICAgPFBvc3RQcmV2aWV3XG4gICAgICAgICAgICAgIGtleT17bm9kZS5zbHVnfVxuICAgICAgICAgICAgICB0aXRsZT17bm9kZS50aXRsZX1cbiAgICAgICAgICAgICAgY292ZXJJbWFnZT17bm9kZS5mZWF0dXJlZEltYWdlfVxuICAgICAgICAgICAgICBzbHVnPXtub2RlLnNsdWd9XG4gICAgICAgICAgICAgIGV4Y2VycHQ9e25vZGUuZXhjZXJwdH1cbiAgICAgICAgICAgICAgY2F0ZWdvcnk9e25vZGUuY2F0ZWdvcmllcy5ub2Rlcy5tYXAoXG4gICAgICAgICAgICAgICAgKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5uYW1lXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHt9KSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHNGb3JIb21lKHsgcHJldmlldzogZmFsc2UgfSk7XG4gIGNvbnN0IENhdGVnb3JpZXMgPSBhd2FpdCBnZXRDYXRlZ29yaWVzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMsIENhdGVnb3JpZXMgfSxcbiAgICByZXZhbGlkYXRlOiAxMCxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMYXlvdXQiLCJQb3N0UHJldmlldyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIk5ld3MiLCJhbGxQb3N0cyIsImVkZ2VzIiwiQ2F0ZWdvcmllcyIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5IiwiUG9zdHMiLCJmaWx0ZXJlZFBvc3RzIiwiZmlsdGVyIiwibm9kZSIsImNhdGVnb3JpZXMiLCJub2RlcyIsInNvbWUiLCJjYXRlZ29yeSIsIm5hbWUiLCJyb3V0ZXIiLCJxdWVyeSIsImhhbmRsZUNhdGVnb3J5Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwibWFwIiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZmVhdHVyZWRJbWFnZSIsInNsdWciLCJleGNlcnB0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/news.tsx\n"));

/***/ })

});