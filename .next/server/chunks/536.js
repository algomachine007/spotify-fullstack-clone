"use strict";
exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1271);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);



const GradientLayout = ({ children , color , image , title , subtitle , description , roundImage ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
        height: "calc(100vh - 100px)",
        overflowY: "auto",
        bgGradient: `linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%,rgba(0,0,0,0.95) 75%)`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                bg: `${color}.600`,
                padding: "40px",
                align: "end",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        padding: "20px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                            boxSize: "160px",
                            boxShadow: "2xl",
                            src: image,
                            borderRadius: roundImage ? "100%" : "3px"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        padding: "20px",
                        lineHeight: "40px",
                        color: "white",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                as: "code",
                                fontSize: "sm",
                                fontWeight: "bold",
                                casing: "uppercase",
                                children: subtitle
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                fontSize: "6xl",
                                fontWeight: "bold",
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                fontSize: "sm",
                                fontWeight: "bold",
                                children: description
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                paddingY: "50px",
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradientLayout);


/***/ }),

/***/ 4075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());


/***/ })

};
;