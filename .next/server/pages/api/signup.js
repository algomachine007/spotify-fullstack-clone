"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 3388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());


/***/ }),

/***/ 3532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3388);
// @ts-nocheck




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const salt = bcrypt__WEBPACK_IMPORTED_MODULE_0___default().genSaltSync();
    const { email , password , firstName , lastName  } = req.body;
    let user;
    try {
        user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__/* ["default"].user.create */ .Z.user.create({
            data: {
                email,
                password: await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hashSync(password, salt),
                firstName,
                lastName
            }
        });
    } catch (e) {
        res.status(401).json({
            message: "Email already in use"
        });
        return;
    }
    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({
        email: user.email,
        id: user.id,
        time: Date.now()
    }, "hello", {
        expiresIn: "8h"
    });
    res.setHeader("Set-Cookie", cookie__WEBPACK_IMPORTED_MODULE_1___default().serialize("TRAX_ACCESS_TOKEN", token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60 * 1000,
        path: "/",
        sameSite: "lax",
        // https when we've hosted it
        secure: "production" === "production"
    }));
    // send a user to frontend
    res.json(user);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3532));
module.exports = __webpack_exports__;

})();