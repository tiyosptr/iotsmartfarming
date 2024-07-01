"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/dashboard/page.jsx":
/*!********************************!*\
  !*** ./app/dashboard/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ImageSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ImageSelector */ \"(app-pages-browser)/./components/ImageSelector.jsx\");\n/* harmony import */ var _components_GardenSizeSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/GardenSizeSelector */ \"(app-pages-browser)/./components/GardenSizeSelector.jsx\");\n/* harmony import */ var _components_RowCountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/RowCountSelector */ \"(app-pages-browser)/./components/RowCountSelector.jsx\");\n/* harmony import */ var _components_RowPlantSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/RowPlantSelector */ \"(app-pages-browser)/./components/RowPlantSelector.jsx\");\n/* harmony import */ var _components_GenerateData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/GenerateData */ \"(app-pages-browser)/./components/GenerateData.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _components_FirebaseConfig_FirebaseConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/FirebaseConfig/FirebaseConfig */ \"(app-pages-browser)/./components/FirebaseConfig/FirebaseConfig.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst getImageUrlFromPlant = (plant)=>{\n    switch(plant){\n        case \"kangkung\":\n            return \"/img/kangkung.png\";\n        case \"bayam\":\n            return \"/img/bayam.jpg\";\n        case \"cabe\":\n            return \"/img/cabe.jpg\";\n        default:\n            return \"/img/default.png\";\n    }\n};\nfunction Dashboard() {\n    _s();\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [selectedPlant, setSelectedPlant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [selectedSize, setSelectedSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [selectedRowCount, setSelectedRowCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [plantsPerRow, setPlantsPerRow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [generatedData, setGeneratedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [dataGenerated, setDataGenerated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"/img/kangkung.png\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const auth = (0,_components_FirebaseConfig_FirebaseConfig__WEBPACK_IMPORTED_MODULE_9__[\"default\"])().auth;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_8__.onAuthStateChanged)(auth, (user)=>{\n            if (user) {\n                setUser(user);\n            } else {\n                router.push(\"/auth/login\"); // Redirect to login page if not authenticated\n            }\n        });\n        return ()=>unsubscribe();\n    }, []);\n    const handleLogout = ()=>{\n    // Implement logout logic here\n    };\n    const handleNext = (data)=>{\n        if (dataGenerated) return;\n        switch(step){\n            case 1:\n                setSelectedPlant(data);\n                setImageUrl(getImageUrlFromPlant(data));\n                setStep(2);\n                break;\n            case 2:\n                setSelectedSize(data);\n                setStep(3);\n                break;\n            case 3:\n                setSelectedRowCount(data);\n                setStep(4);\n                break;\n            default:\n                break;\n        }\n    };\n    const handleBack = ()=>{\n        if (dataGenerated) return;\n        setStep(step - 1);\n    };\n    const handleGenerate = (data)=>{\n        setPlantsPerRow(data);\n        generateData();\n        setStep(5);\n    };\n    const generateData = async ()=>{\n        const data = {\n            selectedPlant,\n            selectedSize,\n            selectedRowCount,\n            plantsPerRow\n        };\n        setGeneratedData(data);\n        setDataGenerated(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center h-screen\",\n                children: user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-bold mb-4\",\n                            children: [\n                                \"Welcome, \",\n                                user.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 103,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleLogout,\n                            className: \"bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded\",\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n                    lineNumber: 102,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n                lineNumber: 100,\n                columnNumber: 15\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"app-container relative w-full h-screen overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"step absolute w-full h-full transition-transform duration-300 ease-in-out \".concat(step === 1 ? \"translate-x-0\" : \"translate-x-full\"),\n                        children: step === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImageSelector__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            onNext: handleNext\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 36\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"step absolute w-full h-full transition-transform duration-300 ease-in-out \".concat(step === 2 ? \"translate-x-0\" : \"translate-x-full\"),\n                        children: step === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GardenSizeSelector__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onNext: handleNext,\n                            onBack: handleBack\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 117,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"step absolute w-full h-full transition-transform duration-300 ease-in-out \".concat(step === 3 ? \"translate-x-0\" : \"translate-x-full\"),\n                        children: step === 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RowCountSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            onNext: handleNext,\n                            onBack: handleBack\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 122,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n                        lineNumber: 120,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"step absolute w-full h-full transition-transform duration-300 ease-in-out \".concat(step === 4 ? \"translate-x-0\" : \"translate-x-full\"),\n                        children: step === 4 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RowPlantSelector__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            onGenerate: handleGenerate,\n                            onBack: handleBack\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 127,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"step absolute w-full h-full transition-transform duration-300 ease-in-out \".concat(step === 5 ? \"translate-x-0\" : \"translate-x-full\"),\n                        children: step === 5 && dataGenerated && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GenerateData__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            data: generatedData,\n                            imageUrl: imageUrl\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 132,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n                        lineNumber: 130,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Semester 4\\\\PBL\\\\Aplikasi 3\\\\iotsmartfarming\\\\app\\\\dashboard\\\\page.jsx\",\n        lineNumber: 99,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"yRVTA1SxwEaKC9wof+fESWdsBWQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDUTtBQUNVO0FBQ0o7QUFDQTtBQUNSO0FBQ2I7QUFDTztBQUNxQjtBQUV4RSxNQUFNVyx1QkFBdUIsQ0FBQ0M7SUFDMUIsT0FBUUE7UUFDSixLQUFLO1lBQ0QsT0FBTztRQUNYLEtBQUs7WUFDRCxPQUFPO1FBQ1gsS0FBSztZQUNELE9BQU87UUFDWDtZQUNJLE9BQU87SUFDZjtBQUNKO0FBRUEsU0FBU0M7O0lBRUwsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2UsZUFBZUMsaUJBQWlCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNpQixjQUFjQyxnQkFBZ0IsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ21CLGtCQUFrQkMsb0JBQW9CLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNxQixjQUFjQyxnQkFBZ0IsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ3VCLGVBQWVDLGlCQUFpQixHQUFHeEIsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDeUIsZUFBZUMsaUJBQWlCLEdBQUcxQiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUMyQixVQUFVQyxZQUFZLEdBQUc1QiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNNkIsU0FBU3RCLDBEQUFTQTtJQUN4QixNQUFNLENBQUN1QixNQUFNQyxRQUFRLEdBQUcvQiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNZ0MsT0FBT3ZCLHFGQUFjQSxHQUFHdUIsSUFBSTtJQUVsQy9CLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWdDLGNBQWN6QixpRUFBa0JBLENBQUN3QixNQUFNLENBQUNGO1lBQzFDLElBQUlBLE1BQU07Z0JBQ05DLFFBQVFEO1lBQ1osT0FBTztnQkFDSEQsT0FBT0ssSUFBSSxDQUFDLGdCQUFnQiw4Q0FBOEM7WUFDOUU7UUFDSjtRQUVBLE9BQU8sSUFBTUQ7SUFDakIsR0FBRyxFQUFFO0lBRUwsTUFBTUUsZUFBZTtJQUNqQiw4QkFBOEI7SUFDbEM7SUFFQSxNQUFNQyxhQUFhLENBQUNDO1FBQ2hCLElBQUlaLGVBQWU7UUFDbkIsT0FBUVo7WUFDSixLQUFLO2dCQUNERyxpQkFBaUJxQjtnQkFDakJULFlBQVlsQixxQkFBcUIyQjtnQkFDakN2QixRQUFRO2dCQUNSO1lBQ0osS0FBSztnQkFDREksZ0JBQWdCbUI7Z0JBQ2hCdkIsUUFBUTtnQkFDUjtZQUNKLEtBQUs7Z0JBQ0RNLG9CQUFvQmlCO2dCQUNwQnZCLFFBQVE7Z0JBQ1I7WUFDSjtnQkFDSTtRQUNSO0lBQ0o7SUFFQSxNQUFNd0IsYUFBYTtRQUNmLElBQUliLGVBQWU7UUFDbkJYLFFBQVFELE9BQU87SUFDbkI7SUFFQSxNQUFNMEIsaUJBQWlCLENBQUNGO1FBQ3BCZixnQkFBZ0JlO1FBQ2hCRztRQUNBMUIsUUFBUTtJQUNaO0lBRUEsTUFBTTBCLGVBQWU7UUFDakIsTUFBTUgsT0FBTztZQUNUdEI7WUFDQUU7WUFDQUU7WUFDQUU7UUFDSjtRQUNBRyxpQkFBaUJhO1FBQ2pCWCxpQkFBaUI7SUFDckI7SUFFQSxxQkFDSSw4REFBQ2U7OzBCQUNLLDhEQUFDQTtnQkFBSUMsV0FBVTswQkFDWlosc0JBQ0csOERBQUNXOztzQ0FDRyw4REFBQ0U7NEJBQUdELFdBQVU7O2dDQUEwQjtnQ0FBVVosS0FBS2MsSUFBSTs7Ozs7OztzQ0FFM0QsOERBQUNDOzRCQUFPQyxTQUFTWDs0QkFBY08sV0FBVTtzQ0FBMkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1oSCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVyw2RUFBK0gsT0FBbEQ3QixTQUFTLElBQUksa0JBQWtCO2tDQUN2SEEsU0FBUyxtQkFBSyw4REFBQ1gsaUVBQWFBOzRCQUFDNkMsUUFBUVg7Ozs7Ozs7Ozs7O2tDQUUxQyw4REFBQ0s7d0JBQUlDLFdBQVcsNkVBQStILE9BQWxEN0IsU0FBUyxJQUFJLGtCQUFrQjtrQ0FDdkhBLFNBQVMsbUJBQ04sOERBQUNWLHNFQUFrQkE7NEJBQUM0QyxRQUFRWDs0QkFBWVksUUFBUVY7Ozs7Ozs7Ozs7O2tDQUd4RCw4REFBQ0c7d0JBQUlDLFdBQVcsNkVBQStILE9BQWxEN0IsU0FBUyxJQUFJLGtCQUFrQjtrQ0FDdkhBLFNBQVMsbUJBQ04sOERBQUNULG9FQUFnQkE7NEJBQUMyQyxRQUFRWDs0QkFBWVksUUFBUVY7Ozs7Ozs7Ozs7O2tDQUd0RCw4REFBQ0c7d0JBQUlDLFdBQVcsNkVBQStILE9BQWxEN0IsU0FBUyxJQUFJLGtCQUFrQjtrQ0FDdkhBLFNBQVMsbUJBQ04sOERBQUNSLG9FQUFnQkE7NEJBQUM0QyxZQUFZVjs0QkFBZ0JTLFFBQVFWOzs7Ozs7Ozs7OztrQ0FHOUQsOERBQUNHO3dCQUFJQyxXQUFXLDZFQUErSCxPQUFsRDdCLFNBQVMsSUFBSSxrQkFBa0I7a0NBQ3ZIQSxTQUFTLEtBQUtZLCtCQUNYLDhEQUFDbkIsZ0VBQVlBOzRCQUFDK0IsTUFBTWQ7NEJBQWVJLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRTtHQWpIU2Y7O1FBVVVMLHNEQUFTQTs7O0tBVm5CSztBQW1IVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL3BhZ2UuanN4PzM4ZDciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZVNlbGVjdG9yIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW1hZ2VTZWxlY3Rvcic7XHJcbmltcG9ydCBHYXJkZW5TaXplU2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR2FyZGVuU2l6ZVNlbGVjdG9yXCI7XHJcbmltcG9ydCBSb3dDb3VudFNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Jvd0NvdW50U2VsZWN0b3JcIjtcclxuaW1wb3J0IFJvd1BsYW50U2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUm93UGxhbnRTZWxlY3RvclwiO1xyXG5pbXBvcnQgR2VuZXJhdGVEYXRhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dlbmVyYXRlRGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IEZpcmViYXNlQ29uZmlnIGZyb20gXCJAL2NvbXBvbmVudHMvRmlyZWJhc2VDb25maWcvRmlyZWJhc2VDb25maWdcIjtcclxuXHJcbmNvbnN0IGdldEltYWdlVXJsRnJvbVBsYW50ID0gKHBsYW50KSA9PiB7XHJcbiAgICBzd2l0Y2ggKHBsYW50KSB7XHJcbiAgICAgICAgY2FzZSBcImthbmdrdW5nXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIi9pbWcva2FuZ2t1bmcucG5nXCI7XHJcbiAgICAgICAgY2FzZSBcImJheWFtXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIi9pbWcvYmF5YW0uanBnXCI7XHJcbiAgICAgICAgY2FzZSBcImNhYmVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiL2ltZy9jYWJlLmpwZ1wiO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIi9pbWcvZGVmYXVsdC5wbmdcIjtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuXHJcbiAgICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFBsYW50LCBzZXRTZWxlY3RlZFBsYW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkU2l6ZSwgc2V0U2VsZWN0ZWRTaXplXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkUm93Q291bnQsIHNldFNlbGVjdGVkUm93Q291bnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcGxhbnRzUGVyUm93LCBzZXRQbGFudHNQZXJSb3ddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZ2VuZXJhdGVkRGF0YSwgc2V0R2VuZXJhdGVkRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtkYXRhR2VuZXJhdGVkLCBzZXREYXRhR2VuZXJhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUoXCIvaW1nL2thbmdrdW5nLnBuZ1wiKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBhdXRoID0gRmlyZWJhc2VDb25maWcoKS5hdXRoO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2F1dGgvbG9naW4nKTsgLy8gUmVkaXJlY3QgdG8gbG9naW4gcGFnZSBpZiBub3QgYXV0aGVudGljYXRlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICAvLyBJbXBsZW1lbnQgbG9nb3V0IGxvZ2ljIGhlcmVcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTmV4dCA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGFHZW5lcmF0ZWQpIHJldHVybjtcclxuICAgICAgICBzd2l0Y2ggKHN0ZXApIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRQbGFudChkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldEltYWdlVXJsKGdldEltYWdlVXJsRnJvbVBsYW50KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIHNldFN0ZXAoMik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRTaXplKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3RlcCgzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFJvd0NvdW50KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3RlcCg0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhR2VuZXJhdGVkKSByZXR1cm47XHJcbiAgICAgICAgc2V0U3RlcChzdGVwIC0gMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUdlbmVyYXRlID0gKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRQbGFudHNQZXJSb3coZGF0YSk7XHJcbiAgICAgICAgZ2VuZXJhdGVEYXRhKCk7XHJcbiAgICAgICAgc2V0U3RlcCg1KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2VuZXJhdGVEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUGxhbnQsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkU2l6ZSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb3dDb3VudCxcclxuICAgICAgICAgICAgcGxhbnRzUGVyUm93LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0R2VuZXJhdGVkRGF0YShkYXRhKTtcclxuICAgICAgICBzZXREYXRhR2VuZXJhdGVkKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPldlbGNvbWUsIHt1c2VyLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFkZCB5b3VyIGRhc2hib2FyZCBjb250ZW50IGhlcmUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fSBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC02MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRhaW5lciByZWxhdGl2ZSB3LWZ1bGwgaC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN0ZXAgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgJHtzdGVwID09PSAxID8gXCJ0cmFuc2xhdGUteC0wXCIgOiBcInRyYW5zbGF0ZS14LWZ1bGxcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7c3RlcCA9PT0gMSAmJiA8SW1hZ2VTZWxlY3RvciBvbk5leHQ9e2hhbmRsZU5leHR9IC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN0ZXAgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgJHtzdGVwID09PSAyID8gXCJ0cmFuc2xhdGUteC0wXCIgOiBcInRyYW5zbGF0ZS14LWZ1bGxcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7c3RlcCA9PT0gMiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHYXJkZW5TaXplU2VsZWN0b3Igb25OZXh0PXtoYW5kbGVOZXh0fSBvbkJhY2s9e2hhbmRsZUJhY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzdGVwIGFic29sdXRlIHctZnVsbCBoLWZ1bGwgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7c3RlcCA9PT0gMyA/IFwidHJhbnNsYXRlLXgtMFwiIDogXCJ0cmFuc2xhdGUteC1mdWxsXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0ZXAgPT09IDMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93Q291bnRTZWxlY3RvciBvbk5leHQ9e2hhbmRsZU5leHR9IG9uQmFjaz17aGFuZGxlQmFja30gLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN0ZXAgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgJHtzdGVwID09PSA0ID8gXCJ0cmFuc2xhdGUteC0wXCIgOiBcInRyYW5zbGF0ZS14LWZ1bGxcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7c3RlcCA9PT0gNCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dQbGFudFNlbGVjdG9yIG9uR2VuZXJhdGU9e2hhbmRsZUdlbmVyYXRlfSBvbkJhY2s9e2hhbmRsZUJhY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzdGVwIGFic29sdXRlIHctZnVsbCBoLWZ1bGwgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7c3RlcCA9PT0gNSA/IFwidHJhbnNsYXRlLXgtMFwiIDogXCJ0cmFuc2xhdGUteC1mdWxsXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0ZXAgPT09IDUgJiYgZGF0YUdlbmVyYXRlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHZW5lcmF0ZURhdGEgZGF0YT17Z2VuZXJhdGVkRGF0YX0gaW1hZ2VVcmw9e2ltYWdlVXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2VTZWxlY3RvciIsIkdhcmRlblNpemVTZWxlY3RvciIsIlJvd0NvdW50U2VsZWN0b3IiLCJSb3dQbGFudFNlbGVjdG9yIiwiR2VuZXJhdGVEYXRhIiwidXNlUm91dGVyIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiRmlyZWJhc2VDb25maWciLCJnZXRJbWFnZVVybEZyb21QbGFudCIsInBsYW50IiwiRGFzaGJvYXJkIiwic3RlcCIsInNldFN0ZXAiLCJzZWxlY3RlZFBsYW50Iiwic2V0U2VsZWN0ZWRQbGFudCIsInNlbGVjdGVkU2l6ZSIsInNldFNlbGVjdGVkU2l6ZSIsInNlbGVjdGVkUm93Q291bnQiLCJzZXRTZWxlY3RlZFJvd0NvdW50IiwicGxhbnRzUGVyUm93Iiwic2V0UGxhbnRzUGVyUm93IiwiZ2VuZXJhdGVkRGF0YSIsInNldEdlbmVyYXRlZERhdGEiLCJkYXRhR2VuZXJhdGVkIiwic2V0RGF0YUdlbmVyYXRlZCIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJyb3V0ZXIiLCJ1c2VyIiwic2V0VXNlciIsImF1dGgiLCJ1bnN1YnNjcmliZSIsInB1c2giLCJoYW5kbGVMb2dvdXQiLCJoYW5kbGVOZXh0IiwiZGF0YSIsImhhbmRsZUJhY2siLCJoYW5kbGVHZW5lcmF0ZSIsImdlbmVyYXRlRGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvbk5leHQiLCJvbkJhY2siLCJvbkdlbmVyYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.jsx\n"));

/***/ })

});