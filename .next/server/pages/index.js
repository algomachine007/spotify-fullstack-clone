"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1271);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_gradientLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(141);
/* harmony import */ var _lib_hooks_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7385);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_hooks__WEBPACK_IMPORTED_MODULE_5__]);
_lib_hooks_hooks__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Home = ({ artists  })=>{
    const { user , isLoading  } = (0,_lib_hooks_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useMe */ .P)();
    console.log("STRIPE", process.env.STRIPE_KEY);
    if (isLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_gradientLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        color: "blue",
        roundImage: true,
        subtitle: "Profile",
        title: `${user?.firstName} ${user?.lastName}`,
        description: ` ${user.playlistsCount} playlists count`,
        image: "http://placekitten.com/g/300/300",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
            paddingX: "50px",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    color: "white",
                    marginBottom: "50px",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            fontSize: "2xl",
                            fontWeight: "bold",
                            children: "Top Artist this month"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            children: "Only visible to you"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    children: artists.map((artist)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            marginX: "10px",
                            width: "20%",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                color: "white",
                                bg: "gray.900",
                                borderRadius: "4px",
                                padding: "15px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                        src: "http://placekitten.com/g/300/300",
                                        borderRadius: "100%"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        marginTop: "20px",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                fontSize: "large",
                                                children: [
                                                    " ",
                                                    artist.name
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                fontSize: "x-small",
                                                children: " Artist"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getServerSideProps = async ()=>{
    const artists = await _lib_prisma__WEBPACK_IMPORTED_MODULE_6__/* ["default"].artist.findMany */ .Z.artist.findMany({});
    console.log(artists);
    return {
        props: {
            artists
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1271:
/***/ ((module) => {

module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [536,385], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();