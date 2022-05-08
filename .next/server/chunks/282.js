"use strict";
exports.id = 282;
exports.ids = [282];
exports.modules = {

/***/ 6282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ validateRoute)
/* harmony export */ });
/* unused harmony export validateToken */
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3388);


// handler is req and res
const validateRoute = (handler)=>{
    return async (req, res)=>{
        const token = req.cookies.TRAX_ACCESS_TOKEN;
        if (token) {
            try {
                const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, "hello");
                const user = await _prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].user.findUnique */ .Z.user.findUnique({
                    where: {
                        id: payload.id
                    }
                });
                if (user) {
                    return handler(req, res, user);
                }
            } catch (e) {
                res.status(401).json({
                    message: `Unauthorized ${e.message}`
                });
            }
        }
        res.status(401).json({
            message: "Unauthorized"
        });
    };
};
const validateToken = (token)=>{
    const user = jwt.verify(token, "hello");
    // we're using this function to get the user based on the token
    return user;
};


/***/ }),

/***/ 3388:
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