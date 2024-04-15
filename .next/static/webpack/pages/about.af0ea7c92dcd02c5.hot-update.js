"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./lib/api.ts":
/*!********************!*\
  !*** ./lib/api.ts ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllPostsForHome: function() { return /* binding */ getAllPostsForHome; },\n/* harmony export */   getAllPostsWithSlug: function() { return /* binding */ getAllPostsWithSlug; },\n/* harmony export */   getPostAndMorePosts: function() { return /* binding */ getPostAndMorePosts; },\n/* harmony export */   getPreviewPost: function() { return /* binding */ getPreviewPost; }\n/* harmony export */ });\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nconst API_URL = process.env.WORDPRESS_API_URL;\nasync function fetchAPI() {\n    let query = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"\", { variables } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    const headers = {\n        \"Content-Type\": \"application/json\"\n    };\n    if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {\n        headers[\"Authorization\"] = \"Bearer \".concat(process.env.WORDPRESS_AUTH_REFRESH_TOKEN);\n    }\n    // WPGraphQL Plugin must be enabled\n    const res = await fetch(API_URL, {\n        headers,\n        method: \"POST\",\n        body: JSON.stringify({\n            query,\n            variables\n        })\n    });\n    const json = await res.json();\n    if (json.errors) {\n        console.error(json.errors);\n        throw new Error(\"Failed to fetch API\");\n    }\n    return json.data;\n}\nasync function getPreviewPost(id) {\n    let idType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"DATABASE_ID\";\n    const data = await fetchAPI(\"\\n    query PreviewPost($id: ID!, $idType: PostIdType!) {\\n      post(id: $id, idType: $idType) {\\n        databaseId\\n        slug\\n        status\\n      }\\n    }\", {\n        variables: {\n            id,\n            idType\n        }\n    });\n    return data.post;\n}\nasync function fetchAboutPage() {\n    var _data_pageBy;\n    const data = await fetchAPI('\\n    query AboutPage {\\n      pageBy(uri: \"about\") {\\n        content\\n      }\\n    }\\n    ');\n    return data === null || data === void 0 ? void 0 : (_data_pageBy = data.pageBy) === null || _data_pageBy === void 0 ? void 0 : _data_pageBy.content;\n}\nasync function getAllPostsWithSlug() {\n    const data = await fetchAPI(\"\\n    {\\n      posts(first: 10000) {\\n        edges {\\n          node {\\n            slug\\n          }\\n        }\\n      }\\n    }\\n  \");\n    return data === null || data === void 0 ? void 0 : data.posts;\n}\nasync function getAllPostsForHome(preview) {\n    const data = await fetchAPI(\"\\n    query AllPosts {\\n      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {\\n        edges {\\n          node {\\n            title\\n            excerpt\\n            slug\\n            date\\n            featuredImage {\\n              node {\\n                sourceUrl\\n              }\\n            }\\n            author {\\n              node {\\n                name\\n                firstName\\n                lastName\\n                avatar {\\n                  url\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  \", {\n        variables: {\n            onlyEnabled: !preview,\n            preview\n        }\n    });\n    return data === null || data === void 0 ? void 0 : data.posts;\n}\nasync function getPostAndMorePosts(slug, preview, previewData) {\n    const postPreview = preview && (previewData === null || previewData === void 0 ? void 0 : previewData.post);\n    // The slug may be the id of an unpublished post\n    const isId = Number.isInteger(Number(slug));\n    const isSamePost = isId ? Number(slug) === postPreview.id : slug === postPreview.slug;\n    const isDraft = isSamePost && (postPreview === null || postPreview === void 0 ? void 0 : postPreview.status) === \"draft\";\n    const isRevision = isSamePost && (postPreview === null || postPreview === void 0 ? void 0 : postPreview.status) === \"publish\";\n    const data = await fetchAPI(\"\\n    fragment AuthorFields on User {\\n      name\\n      firstName\\n      lastName\\n      avatar {\\n        url\\n      }\\n    }\\n    fragment PostFields on Post {\\n      title\\n      excerpt\\n      slug\\n      date\\n      featuredImage {\\n        node {\\n          sourceUrl\\n        }\\n      }\\n      author {\\n        node {\\n          ...AuthorFields\\n        }\\n      }\\n      categories {\\n        edges {\\n          node {\\n            name\\n          }\\n        }\\n      }\\n      tags {\\n        edges {\\n          node {\\n            name\\n          }\\n        }\\n      }\\n    }\\n    query PostBySlug($id: ID!, $idType: PostIdType!) {\\n      post(id: $id, idType: $idType) {\\n        ...PostFields\\n        content\\n        \".concat(// Only some of the fields of a revision are considered as there are some inconsistencies\n    isRevision ? \"\\n        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {\\n          edges {\\n            node {\\n              title\\n              excerpt\\n              content\\n              author {\\n                node {\\n                  ...AuthorFields\\n                }\\n              }\\n            }\\n          }\\n        }\\n        \" : \"\", \"\\n      }\\n      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {\\n        edges {\\n          node {\\n            ...PostFields\\n          }\\n        }\\n      }\\n    }\\n  \"), {\n        variables: {\n            id: isDraft ? postPreview.id : slug,\n            idType: isDraft ? \"DATABASE_ID\" : \"SLUG\"\n        }\n    });\n    // Draft posts may not have an slug\n    if (isDraft) data.post.slug = postPreview.id;\n    // Apply a revision (changes in a published post)\n    if (isRevision && data.post.revisions) {\n        var _data_post_revisions_edges_;\n        const revision = (_data_post_revisions_edges_ = data.post.revisions.edges[0]) === null || _data_post_revisions_edges_ === void 0 ? void 0 : _data_post_revisions_edges_.node;\n        if (revision) Object.assign(data.post, revision);\n        delete data.post.revisions;\n    }\n    // Filter out the main post\n    data.posts.edges = data.posts.edges.filter((param)=>{\n        let { node } = param;\n        return node.slug !== slug;\n    });\n    // If there are still 3 posts, remove the last one\n    if (data.posts.edges.length > 2) data.posts.edges.pop();\n    return data;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFFLGNBQTVCMUIsa0RBQUFBLDRCQUE4QjJCLElBQUk7UUFFbkQsSUFBSUYsVUFBVUcsT0FBT0MsTUFBTSxDQUFDN0IsS0FBS0ksSUFBSSxFQUFFcUI7UUFDdkMsT0FBT3pCLEtBQUtJLElBQUksQ0FBQ29CLFNBQVM7SUFDNUI7SUFFQSwyQkFBMkI7SUFDM0J4QixLQUFLUyxLQUFLLENBQUNpQixLQUFLLEdBQUcxQixLQUFLUyxLQUFLLENBQUNpQixLQUFLLENBQUNJLE1BQU0sQ0FDeEM7WUFBQyxFQUFFSCxJQUFJLEVBQUU7ZUFBS0EsS0FBS2IsSUFBSSxLQUFLQTs7SUFFOUIsa0RBQWtEO0lBQ2xELElBQUlkLEtBQUtTLEtBQUssQ0FBQ2lCLEtBQUssQ0FBQ0ssTUFBTSxHQUFHLEdBQUcvQixLQUFLUyxLQUFLLENBQUNpQixLQUFLLENBQUNNLEdBQUc7SUFFckQsT0FBT2hDO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS50cz82OGExIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5XT1JEUFJFU1NfQVBJX1VSTDtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBUEkoXG4gIHF1ZXJ5ID0gXCJcIixcbiAgeyB2YXJpYWJsZXMgfTogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9XG4pIHtcbiAgY29uc3QgaGVhZGVycyA9IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfTtcblxuICBpZiAocHJvY2Vzcy5lbnYuV09SRFBSRVNTX0FVVEhfUkVGUkVTSF9UT0tFTikge1xuICAgIGhlYWRlcnNbXG4gICAgICBcIkF1dGhvcml6YXRpb25cIlxuICAgIF0gPSBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuV09SRFBSRVNTX0FVVEhfUkVGUkVTSF9UT0tFTn1gO1xuICB9XG5cbiAgLy8gV1BHcmFwaFFMIFBsdWdpbiBtdXN0IGJlIGVuYWJsZWRcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQVBJX1VSTCwge1xuICAgIGhlYWRlcnMsXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeSxcbiAgICAgIHZhcmlhYmxlcyxcbiAgICB9KSxcbiAgfSk7XG5cbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGlmIChqc29uLmVycm9ycykge1xuICAgIGNvbnNvbGUuZXJyb3IoanNvbi5lcnJvcnMpO1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBBUElcIik7XG4gIH1cbiAgcmV0dXJuIGpzb24uZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByZXZpZXdQb3N0KGlkLCBpZFR5cGUgPSBcIkRBVEFCQVNFX0lEXCIpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoQVBJKFxuICAgIGBcbiAgICBxdWVyeSBQcmV2aWV3UG9zdCgkaWQ6IElEISwgJGlkVHlwZTogUG9zdElkVHlwZSEpIHtcbiAgICAgIHBvc3QoaWQ6ICRpZCwgaWRUeXBlOiAkaWRUeXBlKSB7XG4gICAgICAgIGRhdGFiYXNlSWRcbiAgICAgICAgc2x1Z1xuICAgICAgICBzdGF0dXNcbiAgICAgIH1cbiAgICB9YCxcbiAgICB7XG4gICAgICB2YXJpYWJsZXM6IHsgaWQsIGlkVHlwZSB9LFxuICAgIH1cbiAgKTtcbiAgcmV0dXJuIGRhdGEucG9zdDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBYm91dFBhZ2UoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFQSShcbiAgICBgXG4gICAgcXVlcnkgQWJvdXRQYWdlIHtcbiAgICAgIHBhZ2VCeSh1cmk6IFwiYWJvdXRcIikge1xuICAgICAgICBjb250ZW50XG4gICAgICB9XG4gICAgfVxuICAgIGBcbiAgKTtcbiAgcmV0dXJuIGRhdGE/LnBhZ2VCeT8uY29udGVudDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBvc3RzV2l0aFNsdWcoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFQSShgXG4gICAge1xuICAgICAgcG9zdHMoZmlyc3Q6IDEwMDAwKSB7XG4gICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGApO1xuICByZXR1cm4gZGF0YT8ucG9zdHM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQb3N0c0ZvckhvbWUocHJldmlldykge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBUEkoXG4gICAgYFxuICAgIHF1ZXJ5IEFsbFBvc3RzIHtcbiAgICAgIHBvc3RzKGZpcnN0OiAyMCwgd2hlcmU6IHsgb3JkZXJieTogeyBmaWVsZDogREFURSwgb3JkZXI6IERFU0MgfSB9KSB7XG4gICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICBleGNlcnB0XG4gICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICBkYXRlXG4gICAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgc291cmNlVXJsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF1dGhvciB7XG4gICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWVcbiAgICAgICAgICAgICAgICBsYXN0TmFtZVxuICAgICAgICAgICAgICAgIGF2YXRhciB7XG4gICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gICAge1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIG9ubHlFbmFibGVkOiAhcHJldmlldyxcbiAgICAgICAgcHJldmlldyxcbiAgICAgIH0sXG4gICAgfVxuICApO1xuXG4gIHJldHVybiBkYXRhPy5wb3N0cztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RBbmRNb3JlUG9zdHMoc2x1ZywgcHJldmlldywgcHJldmlld0RhdGEpIHtcbiAgY29uc3QgcG9zdFByZXZpZXcgPSBwcmV2aWV3ICYmIHByZXZpZXdEYXRhPy5wb3N0O1xuICAvLyBUaGUgc2x1ZyBtYXkgYmUgdGhlIGlkIG9mIGFuIHVucHVibGlzaGVkIHBvc3RcbiAgY29uc3QgaXNJZCA9IE51bWJlci5pc0ludGVnZXIoTnVtYmVyKHNsdWcpKTtcbiAgY29uc3QgaXNTYW1lUG9zdCA9IGlzSWRcbiAgICA/IE51bWJlcihzbHVnKSA9PT0gcG9zdFByZXZpZXcuaWRcbiAgICA6IHNsdWcgPT09IHBvc3RQcmV2aWV3LnNsdWc7XG4gIGNvbnN0IGlzRHJhZnQgPSBpc1NhbWVQb3N0ICYmIHBvc3RQcmV2aWV3Py5zdGF0dXMgPT09IFwiZHJhZnRcIjtcbiAgY29uc3QgaXNSZXZpc2lvbiA9IGlzU2FtZVBvc3QgJiYgcG9zdFByZXZpZXc/LnN0YXR1cyA9PT0gXCJwdWJsaXNoXCI7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFQSShcbiAgICBgXG4gICAgZnJhZ21lbnQgQXV0aG9yRmllbGRzIG9uIFVzZXIge1xuICAgICAgbmFtZVxuICAgICAgZmlyc3ROYW1lXG4gICAgICBsYXN0TmFtZVxuICAgICAgYXZhdGFyIHtcbiAgICAgICAgdXJsXG4gICAgICB9XG4gICAgfVxuICAgIGZyYWdtZW50IFBvc3RGaWVsZHMgb24gUG9zdCB7XG4gICAgICB0aXRsZVxuICAgICAgZXhjZXJwdFxuICAgICAgc2x1Z1xuICAgICAgZGF0ZVxuICAgICAgZmVhdHVyZWRJbWFnZSB7XG4gICAgICAgIG5vZGUge1xuICAgICAgICAgIHNvdXJjZVVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhdXRob3Ige1xuICAgICAgICBub2RlIHtcbiAgICAgICAgICAuLi5BdXRob3JGaWVsZHNcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRhZ3Mge1xuICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHF1ZXJ5IFBvc3RCeVNsdWcoJGlkOiBJRCEsICRpZFR5cGU6IFBvc3RJZFR5cGUhKSB7XG4gICAgICBwb3N0KGlkOiAkaWQsIGlkVHlwZTogJGlkVHlwZSkge1xuICAgICAgICAuLi5Qb3N0RmllbGRzXG4gICAgICAgIGNvbnRlbnRcbiAgICAgICAgJHtcbiAgICAgICAgICAvLyBPbmx5IHNvbWUgb2YgdGhlIGZpZWxkcyBvZiBhIHJldmlzaW9uIGFyZSBjb25zaWRlcmVkIGFzIHRoZXJlIGFyZSBzb21lIGluY29uc2lzdGVuY2llc1xuICAgICAgICAgIGlzUmV2aXNpb25cbiAgICAgICAgICAgID8gYFxuICAgICAgICByZXZpc2lvbnMoZmlyc3Q6IDEsIHdoZXJlOiB7IG9yZGVyYnk6IHsgZmllbGQ6IE1PRElGSUVELCBvcmRlcjogREVTQyB9IH0pIHtcbiAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgZXhjZXJwdFxuICAgICAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgICAgIGF1dGhvciB7XG4gICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAuLi5BdXRob3JGaWVsZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBvc3RzKGZpcnN0OiAzLCB3aGVyZTogeyBvcmRlcmJ5OiB7IGZpZWxkOiBEQVRFLCBvcmRlcjogREVTQyB9IH0pIHtcbiAgICAgICAgZWRnZXMge1xuICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgLi4uUG9zdEZpZWxkc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAgICB7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgaWQ6IGlzRHJhZnQgPyBwb3N0UHJldmlldy5pZCA6IHNsdWcsXG4gICAgICAgIGlkVHlwZTogaXNEcmFmdCA/IFwiREFUQUJBU0VfSURcIiA6IFwiU0xVR1wiLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgLy8gRHJhZnQgcG9zdHMgbWF5IG5vdCBoYXZlIGFuIHNsdWdcbiAgaWYgKGlzRHJhZnQpIGRhdGEucG9zdC5zbHVnID0gcG9zdFByZXZpZXcuaWQ7XG4gIC8vIEFwcGx5IGEgcmV2aXNpb24gKGNoYW5nZXMgaW4gYSBwdWJsaXNoZWQgcG9zdClcbiAgaWYgKGlzUmV2aXNpb24gJiYgZGF0YS5wb3N0LnJldmlzaW9ucykge1xuICAgIGNvbnN0IHJldmlzaW9uID0gZGF0YS5wb3N0LnJldmlzaW9ucy5lZGdlc1swXT8ubm9kZTtcblxuICAgIGlmIChyZXZpc2lvbikgT2JqZWN0LmFzc2lnbihkYXRhLnBvc3QsIHJldmlzaW9uKTtcbiAgICBkZWxldGUgZGF0YS5wb3N0LnJldmlzaW9ucztcbiAgfVxuXG4gIC8vIEZpbHRlciBvdXQgdGhlIG1haW4gcG9zdFxuICBkYXRhLnBvc3RzLmVkZ2VzID0gZGF0YS5wb3N0cy5lZGdlcy5maWx0ZXIoXG4gICAgKHsgbm9kZSB9KSA9PiBub2RlLnNsdWcgIT09IHNsdWdcbiAgKTtcbiAgLy8gSWYgdGhlcmUgYXJlIHN0aWxsIDMgcG9zdHMsIHJlbW92ZSB0aGUgbGFzdCBvbmVcbiAgaWYgKGRhdGEucG9zdHMuZWRnZXMubGVuZ3RoID4gMikgZGF0YS5wb3N0cy5lZGdlcy5wb3AoKTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIldPUkRQUkVTU19BUElfVVJMIiwiZmV0Y2hBUEkiLCJxdWVyeSIsInZhcmlhYmxlcyIsImhlYWRlcnMiLCJXT1JEUFJFU1NfQVVUSF9SRUZSRVNIX1RPS0VOIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJlcnJvcnMiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImRhdGEiLCJnZXRQcmV2aWV3UG9zdCIsImlkIiwiaWRUeXBlIiwicG9zdCIsImZldGNoQWJvdXRQYWdlIiwicGFnZUJ5IiwiY29udGVudCIsImdldEFsbFBvc3RzV2l0aFNsdWciLCJwb3N0cyIsImdldEFsbFBvc3RzRm9ySG9tZSIsInByZXZpZXciLCJvbmx5RW5hYmxlZCIsImdldFBvc3RBbmRNb3JlUG9zdHMiLCJzbHVnIiwicHJldmlld0RhdGEiLCJwb3N0UHJldmlldyIsImlzSWQiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJpc1NhbWVQb3N0IiwiaXNEcmFmdCIsInN0YXR1cyIsImlzUmV2aXNpb24iLCJyZXZpc2lvbnMiLCJyZXZpc2lvbiIsImVkZ2VzIiwibm9kZSIsIk9iamVjdCIsImFzc2lnbiIsImZpbHRlciIsImxlbmd0aCIsInBvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/api.ts\n"));

/***/ })

});