"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/data/page",{

/***/ "(app-pages-browser)/./app/data/page.jsx":
/*!***************************!*\
  !*** ./app/data/page.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_FirebaseConfig_FirebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FirebaseConfig/FirebaseConfig */ \"(app-pages-browser)/./components/FirebaseConfig/FirebaseConfig.jsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [sensorData, setSensorData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const firestore = (0,_components_FirebaseConfig_FirebaseConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().firestore;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Menggunakan onSnapshot untuk mendapatkan data secara real-time\n        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(firestore, \"sensor\"), (snapshot)=>{\n            const data = snapshot.docs.map((doc)=>({\n                    id: doc.id,\n                    ...doc.data()\n                }));\n            setSensorData(data);\n        });\n        // Cleanup function untuk unsubscribe dari snapshot\n        return ()=>unsubscribe();\n    }, [\n        firestore\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Table\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto sm:px-20 lg:px-20\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-end\",\n                            children: \"Keterangan\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end space-x-4 mt-4 mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-2xl\",\n                                    children: \"Dingin\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-2xl\",\n                                    children: \"Hangat\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-2xl\",\n                                    children: \"Panas\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white overflow-hidden shadow-md sm:rounded-2xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative overflow-x-auto\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                    className: \"w-full text-sm text-left rtl:text-right dark:text-black rounded-2xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                            className: \"text-xs text-black uppercase\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Jam\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Suhu\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                                        lineNumber: 47,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Kelembapan Tanah\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                                        lineNumber: 48,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Kelembapan Udara\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Intensitas Cahaya\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                                        lineNumber: 50,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Kebutuhan Air Tanaman\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                            children: sensorData.map((sensor, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    className: \"bg-white\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black\",\n                                                            children: [\n                                                                sensor.timestamp || \"Loading...\",\n                                                                \"\\xb0C\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: [\n                                                                sensor.temperature || \"Loading...\",\n                                                                \"\\xb0C\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: [\n                                                                sensor.soil_moisture || \"Loading...\",\n                                                                \" RH\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: [\n                                                                \" \",\n                                                                sensor.humidity || \"Loading...\",\n                                                                \" RH\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                                            lineNumber: 64,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: [\n                                                                \" \",\n                                                                sensor.intensitas_cahaya || \"Loading...\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: \"0.2 liter/tanaman\"\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                                            lineNumber: 66,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, index, true, {\n                                                    fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 37\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 4\\\\iotsmartfarming\\\\app\\\\data\\\\page.jsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"1nhtCuo77g5P4S+mPowAJ6vh298=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXRhL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ3NCO0FBQ3RCO0FBQzJDO0FBQ1o7QUFFN0MsU0FBU1E7O0lBQ3BCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU1RLFlBQVlOLHFGQUFjQSxHQUFHTSxTQUFTO0lBQzVDVCxnREFBU0EsQ0FBQztRQUNOLGlFQUFpRTtRQUNqRSxNQUFNVSxjQUFjTCw4REFBVUEsQ0FBQ0QsOERBQVVBLENBQUNLLFdBQVcsV0FBVyxDQUFDRTtZQUMvRCxNQUFNQyxPQUFPRCxTQUFTRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFTO29CQUFFQyxJQUFJRCxJQUFJQyxFQUFFO29CQUFFLEdBQUdELElBQUlILElBQUksRUFBRTtnQkFBQztZQUNyRUosY0FBY0k7UUFDaEI7UUFFQSxtREFBbUQ7UUFDbkQsT0FBTyxJQUFNRjtJQUNmLEdBQUc7UUFBQ0Q7S0FBVTtJQUNoQixxQkFDSSw4REFBQ1E7OzBCQUNHLDhEQUFDbkIsa0RBQUlBOzBCQUNELDRFQUFDb0I7OEJBQU07Ozs7Ozs7Ozs7OzBCQUdYLDhEQUFDRDtnQkFBSUUsV0FBVTswQkFDWCw0RUFBQ0Y7b0JBQUlFLFdBQVU7O3NDQUNYLDhEQUFDQzs0QkFBRUQsV0FBVTtzQ0FBVzs7Ozs7O3NDQUN4Qiw4REFBQ0Y7NEJBQUlFLFdBQVU7OzhDQUNYLDhEQUFDRTtvQ0FBT0YsV0FBVTs4Q0FBMkU7Ozs7Ozs4Q0FHN0YsOERBQUNFO29DQUFPRixXQUFVOzhDQUErRTs7Ozs7OzhDQUdqRyw4REFBQ0U7b0NBQU9GLFdBQVU7OENBQXlFOzs7Ozs7Ozs7Ozs7c0NBSS9GLDhEQUFDRjs0QkFBSUUsV0FBVTtzQ0FDWCw0RUFBQ0Y7Z0NBQUlFLFdBQVU7MENBQ1gsNEVBQUNHO29DQUFNSCxXQUFVOztzREFDYiw4REFBQ0k7NENBQU1KLFdBQVU7c0RBQ2IsNEVBQUNLOztrRUFDRyw4REFBQ0M7d0RBQUdOLFdBQVU7a0VBQVk7Ozs7OztrRUFDMUIsOERBQUNNO3dEQUFHTixXQUFVO2tFQUFZOzs7Ozs7a0VBQzFCLDhEQUFDTTt3REFBR04sV0FBVTtrRUFBWTs7Ozs7O2tFQUMxQiw4REFBQ007d0RBQUdOLFdBQVU7a0VBQVk7Ozs7OztrRUFDMUIsOERBQUNNO3dEQUFHTixXQUFVO2tFQUFZOzs7Ozs7a0VBQzFCLDhEQUFDTTt3REFBR04sV0FBVTtrRUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBR2xDLDhEQUFDTztzREFDQW5CLFdBQVdPLEdBQUcsQ0FBQyxDQUFDYSxRQUFRQyxzQkFDckIsOERBQUNKO29EQUVETCxXQUFVOztzRUFDTiw4REFBQ1U7NERBQUdWLFdBQVU7O2dFQUNiUSxPQUFPRyxTQUFTLElBQUk7Z0VBQWE7Ozs7Ozs7c0VBRWxDLDhEQUFDRDs0REFBR1YsV0FBVTs7Z0VBQWFRLE9BQU9JLFdBQVcsSUFBSTtnRUFBYTs7Ozs7OztzRUFDOUQsOERBQUNGOzREQUFHVixXQUFVOztnRUFBYVEsT0FBT0ssYUFBYSxJQUFJO2dFQUFhOzs7Ozs7O3NFQUNoRSw4REFBQ0g7NERBQUdWLFdBQVU7O2dFQUFZO2dFQUFFUSxPQUFPTSxRQUFRLElBQUk7Z0VBQWE7Ozs7Ozs7c0VBQzVELDhEQUFDSjs0REFBR1YsV0FBVTs7Z0VBQVk7Z0VBQUVRLE9BQU9PLGlCQUFpQixJQUFJOzs7Ozs7O3NFQUN4RCw4REFBQ0w7NERBQUdWLFdBQVU7c0VBQVk7Ozs7Ozs7bURBVHpCUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCekM7R0F4RXdCdEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2RhdGEvcGFnZS5qc3g/Nzg0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEZpcmViYXNlQ29uZmlnIGZyb20gXCJAL2NvbXBvbmVudHMvRmlyZWJhc2VDb25maWcvRmlyZWJhc2VDb25maWdcIjtcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgb25TbmFwc2hvdCB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgICBjb25zdCBbc2Vuc29yRGF0YSwgc2V0U2Vuc29yRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBmaXJlc3RvcmUgPSBGaXJlYmFzZUNvbmZpZygpLmZpcmVzdG9yZTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gTWVuZ2d1bmFrYW4gb25TbmFwc2hvdCB1bnR1ayBtZW5kYXBhdGthbiBkYXRhIHNlY2FyYSByZWFsLXRpbWVcclxuICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uU25hcHNob3QoY29sbGVjdGlvbihmaXJlc3RvcmUsIFwic2Vuc29yXCIpLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcclxuICAgICAgICAgIHNldFNlbnNvckRhdGEoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAvLyBDbGVhbnVwIGZ1bmN0aW9uIHVudHVrIHVuc3Vic2NyaWJlIGRhcmkgc25hcHNob3RcclxuICAgICAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICAgICAgfSwgW2ZpcmVzdG9yZV0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5UYWJsZTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gc206cHgtMjAgbGc6cHgtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVuZFwiPktldGVyYW5nYW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIHNwYWNlLXgtNCBtdC00IG1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC0yeGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpbmdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNTAwIGhvdmVyOmJnLW9yYW5nZS02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIYW5nYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFuYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kIHNtOnJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3cteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc20gdGV4dC1sZWZ0IHJ0bDp0ZXh0LXJpZ2h0IGRhcms6dGV4dC1ibGFjayByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtYmxhY2sgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5KYW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlN1aHU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPktlbGVtYmFwYW4gVGFuYWg8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPktlbGVtYmFwYW4gVWRhcmE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPkludGVuc2l0YXMgQ2FoYXlhPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5LZWJ1dHVoYW4gQWlyIFRhbmFtYW48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZW5zb3JEYXRhLm1hcCgoc2Vuc29yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vuc29yLnRpbWVzdGFtcCB8fCBcIkxvYWRpbmcuLi5cIn3CsENcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+e3NlbnNvci50ZW1wZXJhdHVyZSB8fCBcIkxvYWRpbmcuLi5cIn3CsEM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPntzZW5zb3Iuc29pbF9tb2lzdHVyZSB8fCBcIkxvYWRpbmcuLi5cIn0gUkg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPiB7c2Vuc29yLmh1bWlkaXR5IHx8IFwiTG9hZGluZy4uLlwifSBSSDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+IHtzZW5zb3IuaW50ZW5zaXRhc19jYWhheWEgfHwgXCJMb2FkaW5nLi4uXCJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjIgbGl0ZXIvdGFuYW1hblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkZpcmViYXNlQ29uZmlnIiwiY29sbGVjdGlvbiIsIm9uU25hcHNob3QiLCJQYWdlIiwic2Vuc29yRGF0YSIsInNldFNlbnNvckRhdGEiLCJmaXJlc3RvcmUiLCJ1bnN1YnNjcmliZSIsInNuYXBzaG90IiwiZGF0YSIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsImRpdiIsInRpdGxlIiwiY2xhc3NOYW1lIiwicCIsImJ1dHRvbiIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJzZW5zb3IiLCJpbmRleCIsInRkIiwidGltZXN0YW1wIiwidGVtcGVyYXR1cmUiLCJzb2lsX21vaXN0dXJlIiwiaHVtaWRpdHkiLCJpbnRlbnNpdGFzX2NhaGF5YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/data/page.jsx\n"));

/***/ })

});