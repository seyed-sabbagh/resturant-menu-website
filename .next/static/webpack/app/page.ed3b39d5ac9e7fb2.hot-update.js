"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/sections/menu/index.tsx":
/*!*************************************!*\
  !*** ./src/sections/menu/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ \"(app-pages-browser)/./src/sections/menu/Nav.tsx\");\n/* harmony import */ var _assets_menupage_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/menupage.jpg */ \"(app-pages-browser)/./src/assets/menupage.jpg\");\n/* harmony import */ var _Feed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Feed */ \"(app-pages-browser)/./src/sections/menu/Feed.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MenuSection = ()=>{\n    _s();\n    const pizzaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const breakfastRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const dinnerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const drinksRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    function scrollToSection(sectionId) {\n        var _sectionId;\n        if ((_sectionId = sectionId) === null || _sectionId === void 0 ? void 0 : _sectionId.current) {\n            var _sectionId_current, _sectionId1;\n            (_sectionId1 = sectionId) === null || _sectionId1 === void 0 ? void 0 : (_sectionId_current = _sectionId1.current) === null || _sectionId_current === void 0 ? void 0 : _sectionId_current.scrollIntoView({\n                behavior: \"smooth\",\n                block: \"start\"\n            });\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full flex flex-col lg:flex-row h-full min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    background: \"url(\".concat(_assets_menupage_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src, \")\"),\n                    backgroundRepeat: \"no-repeat\",\n                    backgroundPosition: \"center\",\n                    backgroundSize: \"cover\"\n                },\n                className: \"w-full lg:w-[50%] p-12 flex flex-col justify-between items-center min-h-[80vh] md:min-h-screen h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"url(\".concat(_assets_menupage_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src, \")\")\n                    }, void 0, false, {\n                        fileName: \"/Users/fapna/resturant-menu-website/src/sections/menu/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-[#FACE8D] font-dancing text-[50px] md:text-[80px] leading-none\",\n                                children: \"Check Out\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fapna/resturant-menu-website/src/sections/menu/index.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-medium text-[50px] md:text-[80px] leading-none\",\n                                children: \"Our Menus\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fapna/resturant-menu-website/src/sections/menu/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fapna/resturant-menu-website/src/sections/menu/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fapna/resturant-menu-website/src/sections/menu/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full lg:w-[50%] flex flex-col items-center h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        pizzaRef: pizzaRef,\n                        breakfastRef: breakfastRef,\n                        dinnerRef: dinnerRef,\n                        drinksRef: drinksRef,\n                        navigationHandler: scrollToSection\n                    }, void 0, false, {\n                        fileName: \"/Users/fapna/resturant-menu-website/src/sections/menu/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Feed__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        pizza: pizzaRef,\n                        breakfastRef: breakfastRef,\n                        dinnerRef: dinnerRef,\n                        drinksRef: drinksRef\n                    }, void 0, false, {\n                        fileName: \"/Users/fapna/resturant-menu-website/src/sections/menu/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fapna/resturant-menu-website/src/sections/menu/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fapna/resturant-menu-website/src/sections/menu/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MenuSection, \"2Js+zP1jnMxxtMwqVY1eOXPjLXI=\");\n_c = MenuSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuSection);\nvar _c;\n$RefreshReg$(_c, \"MenuSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZWN0aW9ucy9tZW51L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFK0Q7QUFDdkM7QUFDd0I7QUFFdEI7QUFJMUIsTUFBTUksY0FBa0I7O0lBQ3RCLE1BQU1DLFdBQVdMLDZDQUFNQSxDQUF3QjtJQUMvQyxNQUFNTSxlQUFlTiw2Q0FBTUEsQ0FBd0I7SUFDbkQsTUFBTU8sWUFBWVAsNkNBQU1BLENBQXdCO0lBQ2hELE1BQU1RLFlBQVlSLDZDQUFNQSxDQUF3QjtJQUVoRCxTQUFTUyxnQkFBZ0JDLFNBQWtEO1lBQ3JFQTtRQUFKLEtBQUlBLGFBQUFBLHVCQUFBQSxpQ0FBQUEsV0FBV0MsT0FBTyxFQUFFO2dCQUN0QkQsb0JBQUFBO2FBQUFBLGNBQUFBLHVCQUFBQSxtQ0FBQUEscUJBQUFBLFlBQVdDLE9BQU8sY0FBbEJELHlDQUFBQSxtQkFBb0JFLGNBQWMsQ0FBQztnQkFDakNDLFVBQVU7Z0JBQ1ZDLE9BQU87WUFDVDtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ3JCLDhEQUFDQztnQkFDQ0MsT0FBTztvQkFDTEMsWUFBWSxPQUFtQixPQUFaakIsNERBQU9BLENBQUNrQixHQUFHLEVBQUM7b0JBQy9CQyxrQkFBa0I7b0JBQ2xCQyxvQkFBb0I7b0JBQ3BCQyxnQkFBZ0I7Z0JBQ2xCO2dCQUNBUCxXQUFVOztrQ0FDViw4REFBQ1E7d0JBQUlKLEtBQUssT0FBbUIsT0FBWmxCLDREQUFPQSxDQUFDa0IsR0FBRyxFQUFDOzs7Ozs7a0NBRTdCLDhEQUFDSDt3QkFBSUQsV0FBVTs7MENBRWIsOERBQUNTO2dDQUFHVCxXQUFVOzBDQUFzRTs7Ozs7OzBDQUdwRiw4REFBQ1U7Z0NBQUdWLFdBQVU7MENBQXNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXhFLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNmLDRDQUFHQTt3QkFDRkksVUFBVUE7d0JBQ1ZDLGNBQWNBO3dCQUNkQyxXQUFXQTt3QkFDWEMsV0FBV0E7d0JBQ1htQixtQkFBbUJsQjs7Ozs7O2tDQUVyQiw4REFBQ04sNkNBQUlBO3dCQUNIeUIsT0FBT3ZCO3dCQUNQQyxjQUFjQTt3QkFDZEMsV0FBV0E7d0JBQ1hDLFdBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakI7R0F4RE1KO0tBQUFBO0FBMEROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9tZW51L2luZGV4LnRzeD81MzdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZpZ2F0aW9uRm9vdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvTmF2aWdhdGlvbkZvb3RlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRkMsIE11dGFibGVSZWZPYmplY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XG5pbXBvcnQgbWVudUltZyBmcm9tIFwiLi4vLi4vYXNzZXRzL21lbnVwYWdlLmpwZ1wiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9zYXJ2X2xvZ28ucG5nXCI7XG5pbXBvcnQgRmVlZCBmcm9tIFwiLi9GZWVkXCI7XG5cblxuXG5jb25zdCBNZW51U2VjdGlvbjogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHBpenphUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGJyZWFrZmFzdFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBkaW5uZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgZHJpbmtzUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgZnVuY3Rpb24gc2Nyb2xsVG9TZWN0aW9uKHNlY3Rpb25JZDogTXV0YWJsZVJlZk9iamVjdDxIVE1MRGl2RWxlbWVudCB8IG51bGw+KSB7XG4gICAgaWYgKHNlY3Rpb25JZD8uY3VycmVudCkge1xuICAgICAgc2VjdGlvbklkPy5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICBibG9jazogXCJzdGFydFwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBoLWZ1bGwgbWluLWgtc2NyZWVuXCI+XG4gIDxkaXZcbiAgICBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZDogYHVybCgke21lbnVJbWcuc3JjfSlgLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgfX1cbiAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy1bNTAlXSBwLTEyIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtaW4taC1bODB2aF0gbWQ6bWluLWgtc2NyZWVuIGgtZnVsbFwiPlxuICAgIDxpbWcgc3JjPXtgdXJsKCR7bWVudUltZy5zcmN9KWB9Lz5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICBcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRkFDRThEXSBmb250LWRhbmNpbmcgdGV4dC1bNTBweF0gbWQ6dGV4dC1bODBweF0gbGVhZGluZy1ub25lXCI+XG4gICAgICAgIENoZWNrIE91dFxuICAgICAgPC9oMj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LVs1MHB4XSBtZDp0ZXh0LVs4MHB4XSBsZWFkaW5nLW5vbmVcIj5cbiAgICAgICAgT3VyIE1lbnVzXG4gICAgICA8L2gxPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LVs1MCVdIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGgtc2NyZWVuXCI+XG4gICAgPE5hdlxuICAgICAgcGl6emFSZWY9e3BpenphUmVmfVxuICAgICAgYnJlYWtmYXN0UmVmPXticmVha2Zhc3RSZWZ9XG4gICAgICBkaW5uZXJSZWY9e2Rpbm5lclJlZn1cbiAgICAgIGRyaW5rc1JlZj17ZHJpbmtzUmVmfVxuICAgICAgbmF2aWdhdGlvbkhhbmRsZXI9e3Njcm9sbFRvU2VjdGlvbn1cbiAgICAvPlxuICAgIDxGZWVkXG4gICAgICBwaXp6YT17cGl6emFSZWZ9XG4gICAgICBicmVha2Zhc3RSZWY9e2JyZWFrZmFzdFJlZn1cbiAgICAgIGRpbm5lclJlZj17ZGlubmVyUmVmfVxuICAgICAgZHJpbmtzUmVmPXtkcmlua3NSZWZ9XG4gICAgLz5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVTZWN0aW9uO1xuIl0sIm5hbWVzIjpbInVzZVJlZiIsIk5hdiIsIm1lbnVJbWciLCJGZWVkIiwiTWVudVNlY3Rpb24iLCJwaXp6YVJlZiIsImJyZWFrZmFzdFJlZiIsImRpbm5lclJlZiIsImRyaW5rc1JlZiIsInNjcm9sbFRvU2VjdGlvbiIsInNlY3Rpb25JZCIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwic3JjIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiaW1nIiwiaDIiLCJoMSIsIm5hdmlnYXRpb25IYW5kbGVyIiwicGl6emEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/sections/menu/index.tsx\n"));

/***/ })

});