"use strict";
(() => {
var exports = {};
exports.id = 161;
exports.ids = [161];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 8322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6282);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3388);
// getting the user


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__/* .validateRoute */ .a)(async (_req, res, user)=>{
    const playlistCount = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].playlist.count */ .Z.playlist.count({
        where: {
            userId: user.id
        }
    });
    console.log(playlistCount);
    res.json({
        ...user,
        playlistCount
    });
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [282], () => (__webpack_exec__(8322)));
module.exports = __webpack_exports__;

})();