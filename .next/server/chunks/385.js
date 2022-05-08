"use strict";
exports.id = 385;
exports.ids = [385];
exports.modules = {

/***/ 6965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ fetcher)
/* harmony export */ });
// abstracts away HTTP fetching mechanism
// this is making data not break
function fetcher(url, data = undefined) {
    return fetch(`${window.location.origin}/api/${url}`, {
        method: data ? "POST" : "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        // what you're sending to the server
        body: JSON.stringify(data)
    }).then((res)=>{
        if (res.status > 399 && res.status < 200) {
            throw new Error("Invalid request");
        }
        return res.json();
    });
};


/***/ }),

/***/ 7385:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useMe),
/* harmony export */   "Z": () => (/* binding */ usePlaylist)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6965);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useMe = ()=>{
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])("/me", _fetcher__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    };
};
const usePlaylist = ()=>{
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])("/playlist", _fetcher__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    return {
        playlists: data || [],
        isLoading: !error && !data,
        isError: error
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;