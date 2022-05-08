"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ playerBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/layout"
var layout_ = __webpack_require__(1271);
// EXTERNAL MODULE: external "easy-peasy"
var external_easy_peasy_ = __webpack_require__(9905);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-howler"
const external_react_howler_namespaceObject = require("react-howler");
var external_react_howler_default = /*#__PURE__*/__webpack_require__.n(external_react_howler_namespaceObject);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: ./lib/formatters.ts + 1 modules
var formatters = __webpack_require__(184);
;// CONCATENATED MODULE: ./components/player.tsx







const Player = ({ songs , activeSong  })=>{
    const { 0: playing , 1: setPlaying  } = (0,external_react_.useState)(true);
    const { 0: index , 1: setIndex  } = (0,external_react_.useState)(songs.findIndex((s)=>s.id === activeSong.id
    ));
    const { 0: seek , 1: setSeek  } = (0,external_react_.useState)(0.0);
    const { 0: isSeeking , 1: setIsSeeking  } = (0,external_react_.useState)(false);
    const { 0: repeat , 1: setRepeat  } = (0,external_react_.useState)(false);
    const { 0: shuffle , 1: setShuffle  } = (0,external_react_.useState)(false);
    const { 0: duration , 1: setDuration  } = (0,external_react_.useState)(0.0);
    const soundRef = (0,external_react_.useRef)(null);
    const repeatRef = (0,external_react_.useRef)(repeat);
    const setActiveSong = (0,external_easy_peasy_.useStoreActions)((state)=>state.changeActiveSong
    );
    (0,external_react_.useEffect)(()=>{
        let timerId;
        if (playing && !isSeeking) {
            const f = ()=>{
                setSeek(soundRef.current.seek());
                timerId = requestAnimationFrame(f);
            };
            timerId = requestAnimationFrame(f);
            return ()=>cancelAnimationFrame(timerId)
            ;
        }
        cancelAnimationFrame(timerId);
    }, [
        playing,
        isSeeking
    ]);
    (0,external_react_.useEffect)(()=>{
        setActiveSong(songs[index]);
    }, [
        index,
        setActiveSong,
        songs
    ]);
    (0,external_react_.useEffect)(()=>{
        repeatRef.current = repeat;
    }, [
        repeat
    ]);
    const setPlayState = (value)=>{
        setPlaying(value);
    };
    const onShuffle = ()=>{
        setShuffle((state)=>!state
        );
    };
    const onRepeat = ()=>{
        setRepeat((state)=>!state
        );
    };
    const prevSong = ()=>{
        setIndex((state)=>{
            return state ? state - 1 : songs.length - 1;
        });
    };
    const nextSong = ()=>{
        setIndex((state)=>{
            if (shuffle) {
                const next = Math.floor(Math.random() * songs.length);
                if (next === state) {
                    return nextSong();
                }
                return next;
            }
            return state === songs.length - 1 ? 0 : state + 1;
        });
    };
    const onEnd = ()=>{
        if (repeatRef.current) {
            setSeek(0);
            soundRef.current.seek(0);
        } else {
            nextSong();
        }
    };
    const onLoad = ()=>{
        const songDuration = soundRef.current.duration();
        setDuration(songDuration);
    };
    const onSeek = (e)=>{
        setSeek(parseFloat(e[0]));
        soundRef.current.seek(e[0]);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_howler_default()), {
                    playing: playing,
                    src: activeSong?.url,
                    ref: soundRef,
                    onLoad: onLoad,
                    onEnd: onEnd
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                color: "gray.600",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ButtonGroup, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                            outline: "none",
                            variant: "link",
                            "aria-label": "shuffle",
                            fontSize: "24px",
                            color: shuffle ? "white" : "gray.600",
                            onClick: onShuffle,
                            icon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdShuffle, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                            outline: "none",
                            variant: "link",
                            "aria-label": "skip",
                            fontSize: "24px",
                            icon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdSkipPrevious, {}),
                            onClick: prevSong
                        }),
                        playing ? /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                            outline: "none",
                            variant: "link",
                            "aria-label": "pause",
                            fontSize: "40px",
                            color: "white",
                            icon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdOutlinePauseCircleFilled, {}),
                            onClick: ()=>setPlayState(false)
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                            outline: "none",
                            variant: "link",
                            "aria-label": "play",
                            fontSize: "40px",
                            color: "white",
                            icon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdOutlinePlayCircleFilled, {}),
                            onClick: ()=>setPlayState(true)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                            outline: "none",
                            variant: "link",
                            "aria-label": "next",
                            fontSize: "24px",
                            icon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdSkipNext, {}),
                            onClick: nextSong
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                            outline: "none",
                            variant: "link",
                            "aria-label": "repeat",
                            fontSize: "24px",
                            color: repeat ? "white" : "gray.600",
                            onClick: onRepeat,
                            icon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdOutlineRepeat, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                color: "gray.600",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    justify: "center",
                    align: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            width: "10%",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "xs",
                                children: (0,formatters/* formatTime */.m)(seek)
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            width: "80%",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.RangeSlider, {
                                "aria-label": [
                                    "min",
                                    "max"
                                ],
                                step: 0.1,
                                min: 0,
                                id: "player-range",
                                max: duration ? duration.toFixed(2) : 0,
                                onChange: onSeek,
                                value: [
                                    seek
                                ],
                                onChangeStart: ()=>setIsSeeking(true)
                                ,
                                onChangeEnd: ()=>setIsSeeking(false)
                                ,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.RangeSliderTrack, {
                                        bg: "gray.800",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.RangeSliderFilledTrack, {
                                            bg: "gray.600"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.RangeSliderThumb, {
                                        index: 0
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            width: "10%",
                            textAlign: "right",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "xs",
                                children: (0,formatters/* formatTime */.m)(duration)
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const player = (Player);

;// CONCATENATED MODULE: ./components/playerBar.tsx




const PlayerBar = ()=>{
    const songs = (0,external_easy_peasy_.useStoreState)((state)=>state.activeSongs
    );
    const activeSong = (0,external_easy_peasy_.useStoreState)((state)=>state.activeSong
    );
    return /*#__PURE__*/ jsx_runtime_.jsx(layout_.Box, {
        height: "100px",
        width: "100vw",
        bg: "gray.900",
        padding: "10px",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_.Flex, {
            align: "center",
            children: [
                activeSong ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_.Box, {
                    padding: "20px",
                    color: "white",
                    width: "30%",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(layout_.Text, {
                            fontSize: "large",
                            children: activeSong.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(layout_.Text, {
                            fontSize: "sm",
                            children: activeSong.artist.name
                        })
                    ]
                }) : null,
                /*#__PURE__*/ jsx_runtime_.jsx(layout_.Box, {
                    width: "40%",
                    children: activeSong ? /*#__PURE__*/ jsx_runtime_.jsx(player, {
                        songs: songs,
                        activeSong: activeSong
                    }) : null
                })
            ]
        })
    });
};
/* harmony default export */ const playerBar = (PlayerBar);


/***/ }),

/***/ 9041:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1271);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _playerBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6534);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3859);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sidebar__WEBPACK_IMPORTED_MODULE_4__]);
_sidebar__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const PlayerLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
        width: "100vw",
        height: "100vh",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                position: "absolute",
                top: "0",
                width: "250px",
                left: "0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                marginLeft: "250px",
                marginBottom: "100px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    height: "calc(100vh - 100px",
                    children: children
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                position: "absolute",
                left: "0",
                bottom: "0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3859:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1271);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_hooks_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7385);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_hooks__WEBPACK_IMPORTED_MODULE_6__]);
_lib_hooks_hooks__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const navMenu = [
    {
        name: "Home",
        icon: react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdHome,
        route: "/"
    },
    {
        name: "Search",
        icon: react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdSearch,
        route: "/search"
    },
    {
        name: "Your Library",
        icon: react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdLibraryMusic,
        route: "/library"
    }, 
];
const musicMenu = [
    {
        name: "Create Playlist",
        icon: react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdPlaylistAdd,
        route: "/"
    },
    {
        name: "Favorites",
        icon: react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdFavorite,
        route: "/FAVORITE"
    }, 
];
const Sidebar = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { playlists  } = (0,_lib_hooks_hooks__WEBPACK_IMPORTED_MODULE_6__/* .usePlaylist */ .Z)();
    // guarding the page so that if playlist isn't available, it will redirect to signin page
    // useEffect(() => {
    //   if (!Array.isArray(playlists)) {
    //     router.push("/signin");
    //   }
    // }, [playlists, router]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
        width: "100%",
        height: "calc(100vh - 100px)",
        bg: "black",
        paddingX: "5px",
        color: "grey",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
            paddingY: "20px",
            height: "100%",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    width: "120px",
                    marginBottom: "20px",
                    paddingX: "20px",
                    textAlign: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/trax.svg",
                        height: 60,
                        width: 120
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    marginBottom: "20px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.List, {
                        spacing: 2,
                        children: navMenu.map(({ name , icon , route  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                paddingX: "20px",
                                fontSize: "16px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.LinkBox, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: route,
                                        passHref: true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.LinkOverlay, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.ListIcon, {
                                                    as: icon,
                                                    color: "white",
                                                    marginRight: "20px"
                                                }),
                                                name
                                            ]
                                        })
                                    })
                                })
                            }, name)
                        )
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    marginY: "20px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.List, {
                        spacing: 2,
                        children: musicMenu.map((menu)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                paddingX: "20px",
                                fontSize: "16px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.LinkBox, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: menu.route,
                                        passHref: true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.LinkOverlay, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.ListIcon, {
                                                    as: menu.icon,
                                                    color: "white",
                                                    marginRight: "20px"
                                                }),
                                                menu.name
                                            ]
                                        })
                                    })
                                })
                            }, menu.name)
                        )
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                    color: "gray.800"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    height: "66%",
                    overflowY: "auto",
                    paddingX: "20px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.List, {
                        spacing: 2,
                        children: Array.isArray(playlists) && playlists.map((playlist)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                paddingX: "20px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.LinkBox, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: {
                                            pathname: "/playlist/[id]",
                                            query: {
                                                id: playlist.id
                                            }
                                        },
                                        passHref: true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.LinkOverlay, {
                                            children: [
                                                playlist.name,
                                                " "
                                            ]
                                        })
                                    })
                                })
                            }, playlist.id)
                        )
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ 7979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9905);
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_0__);

const store = (0,easy_peasy__WEBPACK_IMPORTED_MODULE_0__.createStore)({
    activeSongs: [],
    activeSong: null,
    changeActiveSongs: (0,easy_peasy__WEBPACK_IMPORTED_MODULE_0__.action)((state, payload)=>{
        state.activeSongs = payload;
    }),
    changeActiveSong: (0,easy_peasy__WEBPACK_IMPORTED_MODULE_0__.action)((state, payload)=>{
        state.activeSong = payload;
    })
});


/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9905);
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_playerLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9041);
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7979);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_playerLayout__WEBPACK_IMPORTED_MODULE_3__]);
_components_playerLayout__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// @ts-nocheck





const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({
    colors: {
        gray: {
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121"
        }
    },
    components: {
        Button: {
            variants: {
                link: {
                    ":focus": {
                        outline: "none",
                        boxShadow: "none"
                    }
                }
            }
        }
    }
});
const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
        theme: theme,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(easy_peasy__WEBPACK_IMPORTED_MODULE_2__.StoreProvider, {
            store: _lib_store__WEBPACK_IMPORTED_MODULE_4__/* .store */ .h,
            children: Component.authpage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_playerLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

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

/***/ 9905:
/***/ ((module) => {

module.exports = require("easy-peasy");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

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
var __webpack_exports__ = __webpack_require__.X(0, [686,675,505,664,385], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();