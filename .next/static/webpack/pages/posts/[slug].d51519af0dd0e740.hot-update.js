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

/***/ "./pages/posts/[slug].tsx":
/*!********************************!*\
  !*** ./pages/posts/[slug].tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_post_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/post-body */ \"./components/post-body.tsx\");\n/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/more-stories */ \"./components/more-stories.tsx\");\n/* harmony import */ var _components_post_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post-header */ \"./components/post-header.tsx\");\n/* harmony import */ var _components_section_separator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/section-separator */ \"./components/section-separator.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_post_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/post-title */ \"./components/post-title.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(param) {\n    let { post, posts } = param;\n    var _post_featuredImage;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const morePosts = posts === null || posts === void 0 ? void 0 : posts.edges;\n    if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {\n        (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n            window.location.href = \"/404\";\n        }, []);\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: router.isFallback ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_title__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            children: \"Loading…\"\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                    children: \"\".concat(post.title, \" | Vital Signs Magazine\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    property: \"og:image\",\n                                    content: (_post_featuredImage = post.featuredImage) === null || _post_featuredImage === void 0 ? void 0 : _post_featuredImage.node.sourceUrl\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: post.title,\n                            coverImage: post.featuredImage\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_body__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            content: post.content,\n                            category: post.categories.edges\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-start sm:grid sm:grid-cols-4 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold font-sans\",\n                            children: \"Share this article:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between sm:justify-start space-x-14 sm:space-x-5 text-4xl mx-auto sm:mx-0 pt-10 pb-5 sm:pt-0 sm:pb-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://twitter.com/intent/tweet?text=\".concat(post.title, \"&url=https://www.vitalsignsmag.org/posts/\").concat(post.slug),\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--twitter] text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://wa.me/?text=\".concat(encodeURIComponent(\"\".concat(post.title, \": https://www.vitalsignsmag.org/posts/\").concat(post.slug))),\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--whatsapp] text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://www.facebook.com/sharer/sharer.php?u=https://www.vitalsignsmag.org/posts/\".concat(post.slug),\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--facebook]  text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"mailto:?subject=\".concat(encodeURIComponent(post.title), \"&body=Check out this article: \").concat(encodeURIComponent(\"https://www.vitalsignsmag.org/posts/\" + post.slug)),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--email] text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_separator__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:grid sm:grid-cols-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"pb-6 sm:py-0 text-2xl\",\n                            children: \"Read Next: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this),\n                        morePosts.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            posts: morePosts\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 93,\n                            columnNumber: 38\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_separator__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 95,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWdlcy9wb3N0cy9bc2x1Z10udHN4PzFiZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFBvc3RCb2R5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3QtYm9keVwiO1xuaW1wb3J0IE1vcmVTdG9yaWVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vcmUtc3Rvcmllc1wiO1xuaW1wb3J0IFBvc3RIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdC1oZWFkZXJcIjtcbmltcG9ydCBTZWN0aW9uU2VwYXJhdG9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb24tc2VwYXJhdG9yXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IFBvc3RUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0LXRpdGxlXCI7XG5pbXBvcnQge1xuICBnZXRBbGxQb3N0c1dpdGhTbHVnLFxuICBnZXRQb3N0QW5kTW9yZVBvc3RzLFxufSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0LCBwb3N0cyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBtb3JlUG9zdHMgPSBwb3N0cz8uZWRnZXM7XG5cbiAgaWYgKCFyb3V0ZXIuaXNGYWxsYmFjayAmJiAhcG9zdD8uc2x1Zykge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiLzQwNFwiO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHtyb3V0ZXIuaXNGYWxsYmFjayA/IChcbiAgICAgICAgPFBvc3RUaXRsZT5Mb2FkaW5n4oCmPC9Qb3N0VGl0bGU+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgIDx0aXRsZT57YCR7cG9zdC50aXRsZX0gfCBWaXRhbCBTaWducyBNYWdhemluZWB9PC90aXRsZT5cbiAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtwb3N0LmZlYXR1cmVkSW1hZ2U/Lm5vZGUuc291cmNlVXJsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPFBvc3RIZWFkZXJcbiAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgIGNvdmVySW1hZ2U9e3Bvc3QuZmVhdHVyZWRJbWFnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UG9zdEJvZHlcbiAgICAgICAgICAgICAgY29udGVudD17cG9zdC5jb250ZW50fVxuICAgICAgICAgICAgICBjYXRlZ29yeT17cG9zdC5jYXRlZ29yaWVzLmVkZ2VzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgc206Z3JpZCBzbTpncmlkLWNvbHMtNCBcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgZm9udC1zYW5zXCI+XG4gICAgICAgICAgICAgIFNoYXJlIHRoaXMgYXJ0aWNsZTpcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHNtOmp1c3RpZnktc3RhcnQgc3BhY2UteC0xNCBzbTpzcGFjZS14LTUgdGV4dC00eGwgbXgtYXV0byBzbTpteC0wIHB0LTEwIHBiLTUgc206cHQtMCBzbTpwYi0wXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JHtwb3N0LnRpdGxlfSZ1cmw9aHR0cHM6Ly93d3cudml0YWxzaWduc21hZy5vcmcvcG9zdHMvJHtwb3N0LnNsdWd9YH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS10d2l0dGVyXSB0ZXh0LWN1c3RvbVJlZC04MDAgaG92ZXI6dGV4dC1jdXN0b21SZWQtOTUwIGFjdGl2ZTp0ZXh0LWN1c3RvbVJlZC01MDBcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly93YS5tZS8/dGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgIGAke3Bvc3QudGl0bGV9OiBodHRwczovL3d3dy52aXRhbHNpZ25zbWFnLm9yZy9wb3N0cy8ke3Bvc3Quc2x1Z31gXG4gICAgICAgICAgICAgICAgKX1gfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLVttZGktLXdoYXRzYXBwXSB0ZXh0LWN1c3RvbVJlZC04MDAgaG92ZXI6dGV4dC1jdXN0b21SZWQtOTUwIGFjdGl2ZTp0ZXh0LWN1c3RvbVJlZC01MDBcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT1odHRwczovL3d3dy52aXRhbHNpZ25zbWFnLm9yZy9wb3N0cy8ke3Bvc3Quc2x1Z31gfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLVttZGktLWZhY2Vib29rXSAgdGV4dC1jdXN0b21SZWQtODAwIGhvdmVyOnRleHQtY3VzdG9tUmVkLTk1MCBhY3RpdmU6dGV4dC1jdXN0b21SZWQtNTAwXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YG1haWx0bzo/c3ViamVjdD0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgIHBvc3QudGl0bGVcbiAgICAgICAgICAgICAgICApfSZib2R5PUNoZWNrIG91dCB0aGlzIGFydGljbGU6ICR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy52aXRhbHNpZ25zbWFnLm9yZy9wb3N0cy9cIiArIHBvc3Quc2x1Z1xuICAgICAgICAgICAgICAgICl9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0tZW1haWxdIHRleHQtY3VzdG9tUmVkLTgwMCBob3Zlcjp0ZXh0LWN1c3RvbVJlZC05NTAgYWN0aXZlOnRleHQtY3VzdG9tUmVkLTUwMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFNlY3Rpb25TZXBhcmF0b3IgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmdyaWQgc206Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYi02IHNtOnB5LTAgdGV4dC0yeGxcIj5SZWFkIE5leHQ6IDwvaDE+XG4gICAgICAgICAgICB7bW9yZVBvc3RzLmxlbmd0aCA+IDAgJiYgPE1vcmVTdG9yaWVzIHBvc3RzPXttb3JlUG9zdHN9IC8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTZWN0aW9uU2VwYXJhdG9yIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQb3N0QW5kTW9yZVBvc3RzKHBhcmFtcz8uc2x1Zyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdDogZGF0YS5wb3N0LFxuICAgICAgcG9zdHM6IGRhdGEucG9zdHMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxMCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHNXaXRoU2x1ZygpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6XG4gICAgICBhbGxQb3N0cy5lZGdlcy5tYXAoKHsgbm9kZSB9KSA9PiBgL3Bvc3RzLyR7bm9kZS5zbHVnfWApIHx8IFtdLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgcGFyYW1zOiB7IGlkOiBzdHJpbmcgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiSGVhZCIsIlBvc3RCb2R5IiwiTW9yZVN0b3JpZXMiLCJQb3N0SGVhZGVyIiwiU2VjdGlvblNlcGFyYXRvciIsIkxheW91dCIsIlBvc3RUaXRsZSIsInVzZUVmZmVjdCIsIlBvc3QiLCJwb3N0IiwicG9zdHMiLCJyb3V0ZXIiLCJtb3JlUG9zdHMiLCJlZGdlcyIsImlzRmFsbGJhY2siLCJzbHVnIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYXJ0aWNsZSIsInRpdGxlIiwibWV0YSIsInByb3BlcnR5IiwiY29udGVudCIsImZlYXR1cmVkSW1hZ2UiLCJub2RlIiwic291cmNlVXJsIiwiY292ZXJJbWFnZSIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYSIsInRhcmdldCIsInJlbCIsInNwYW4iLCJlbmNvZGVVUklDb21wb25lbnQiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[slug].tsx\n"));

/***/ })

});