"use strict";
(() => {
var exports = {};
exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ formatDate),
  "m": () => (/* binding */ formatTime)
});

;// CONCATENATED MODULE: external "format-duration"
const external_format_duration_namespaceObject = require("format-duration");
var external_format_duration_default = /*#__PURE__*/__webpack_require__.n(external_format_duration_namespaceObject);
;// CONCATENATED MODULE: ./lib/formatters.ts

const formatTime = (timeInSeconds = 0)=>{
    return external_format_duration_default()(timeInSeconds * 1000);
};
const formatDate = (date)=>{
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
};


/***/ }),

/***/ 7579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/gradientLayout.tsx
var gradientLayout = __webpack_require__(141);
// EXTERNAL MODULE: external "@chakra-ui/layout"
var layout_ = __webpack_require__(1271);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "easy-peasy"
var external_easy_peasy_ = __webpack_require__(9905);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
// EXTERNAL MODULE: ./lib/formatters.ts + 1 modules
var formatters = __webpack_require__(184);
;// CONCATENATED MODULE: ./components/songsTable.tsx







const SongTable = ({ songs  })=>{
    const playSongs = (0,external_easy_peasy_.useStoreActions)((store)=>store.changeActiveSongs
    );
    const setActiveSong = (0,external_easy_peasy_.useStoreActions)((store)=>store.changeActiveSong
    );
    const handlePlay = (activeSong)=>{
        // takes the active song from the elements
        setActiveSong(activeSong || songs[0]);
        playSongs(songs);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_.Box, {
        bg: "transparent",
        color: "white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_.Box, {
                padding: "10px",
                marginBottom: "20px",
                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_.Box, {
                    marginBottom: "40px",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsFillPlayFill, {}),
                        fontSize: "30px",
                        colorScheme: "green",
                        size: "lg",
                        isRound: true,
                        ariaLabel: "play",
                        onClick: ()=>handlePlay(songs)
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Table, {
                variant: "unstyled",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Thead, {
                        borderBottom: "1px solid",
                        borderColor: "rgba(255,255,255,0.2)",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tr, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Th, {
                                    children: "Title"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Th, {
                                    children: "#"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Th, {
                                    children: "Date Added"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Th, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineClockCircle, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Tbody, {
                        children: songs?.map((song, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tr, {
                                sx: {
                                    transition: "all .3s",
                                    "&:hover": {
                                        bg: "rgba(255,255,255,0.1)"
                                    }
                                },
                                cursor: "pointer",
                                onClick: ()=>handlePlay(song)
                                ,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        children: index + 1
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        children: song.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        children: (0,formatters/* formatDate */.p)(song.createdAt)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        children: (0,formatters/* formatTime */.m)(song.duration)
                                    })
                                ]
                            }, song.id)
                        )
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const songsTable = (SongTable);

;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
// EXTERNAL MODULE: ./lib/prisma.ts
var lib_prisma = __webpack_require__(4075);
;// CONCATENATED MODULE: ./lib/auth.ts


// handler is req and res
const validateRoute = (handler)=>{
    return async (req, res)=>{
        const token = req.cookies.TRAX_ACCESS_TOKEN;
        if (token) {
            try {
                const payload = jwt.verify(token, "hello");
                const user = await prisma.user.findUnique({
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
    const user = external_jsonwebtoken_default().verify(token, "hello");
    // we're using this function to get the user based on the token
    return user;
};

;// CONCATENATED MODULE: ./pages/playlist/[id].tsx





const getBGColor = (id)=>{
    const colors = [
        "red",
        "green",
        "blue",
        "orange",
        "purple",
        "teal",
        "gray"
    ];
    return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};
const Playlist = ({ playlist  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(gradientLayout/* default */.Z, {
        color: getBGColor(playlist.id),
        roundImage: false,
        title: playlist.name,
        subtitle: "playlist",
        description: `${playlist.songs.length} songs`,
        image: `https://picsum.photos/400/300?random=${playlist.id}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(songsTable, {
            songs: playlist.songs
        })
    });
};
/* harmony default export */ const _id_ = (Playlist);
const getServerSideProps = async ({ query , req  })=>{
    let user;
    try {
        user = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
    } catch (e) {
        return {
            redirect: {
                destination: "/signin",
                permanent: false
            }
        };
    }
    // get user id based on the token
    const [playlist] = await lib_prisma/* default.playlist.findMany */.Z.playlist.findMany({
        where: {
            // [id] must be id
            id: +query.id,
            // multi tenancy: Here we use the userId relation as extra guard for retrieval of playlist
            userId: user.id
        },
        include: {
            songs: {
                include: {
                    artist: {
                        select: {
                            name: true,
                            id: true
                        }
                    }
                }
            }
        }
    });
    return {
        props: {
            playlist
        }
    };
};


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

/***/ 9905:
/***/ ((module) => {

module.exports = require("easy-peasy");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [536], () => (__webpack_exec__(7579)));
module.exports = __webpack_exports__;

})();