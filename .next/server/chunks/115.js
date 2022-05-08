"use strict";
exports.id = 115;
exports.ids = [115];
exports.modules = {

/***/ 9115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ authForm)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/fetcher.ts
var fetcher = __webpack_require__(6965);
;// CONCATENATED MODULE: ./lib/mutations.ts

const auth = (mode, body)=>{
    return (0,fetcher/* default */.Z)(`${mode}`, body);
};

;// CONCATENATED MODULE: ./components/authForm.tsx






const initialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
};
// dependency ingestion: where a component relies on external props for all its functionality. This simple prop would make api calls and requests, render form type etc.
const AuthForm = ({ mode  })=>{
    const router = (0,router_.useRouter)();
    const { 0: isLoading , 1: setisLoading  } = (0,external_react_.useState)(false);
    const { 0: data , 1: setData  } = (0,external_react_.useState)(initialState);
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    const { email , password  } = data;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setisLoading(true);
        const user = await auth(mode, {
            email,
            password
        });
        console.log(user);
        setisLoading(false);
        if (user) {
            router.push("/");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        height: "100vh",
        width: "100vw",
        bg: "black",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                justify: "center",
                align: "center",
                height: "100px",
                borderBottom: "1px solid white",
                children: [
                    mode === "signup" ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            color: "white"
                        },
                        children: "Signup"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            color: "white"
                        },
                        children: "Signin"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/spotify.png",
                        height: 60,
                        width: 120
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                justify: "center",
                align: "center",
                height: "calc(100vh - 100px)",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    padding: "50px",
                    bg: "gray.900",
                    borderRadius: "6px",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                placeholder: "email",
                                type: "text",
                                name: "firstName",
                                value: email,
                                onChange: handleChange,
                                style: {
                                    marginBottom: 20
                                }
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                placeholder: "email",
                                type: "text",
                                name: "lastName",
                                value: email,
                                onChange: handleChange,
                                style: {
                                    marginBottom: 20
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                placeholder: "email",
                                type: "email",
                                name: "email",
                                value: email,
                                onChange: handleChange,
                                style: {
                                    marginBottom: 20
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                placeholder: "password",
                                type: "password",
                                name: "password",
                                value: password,
                                onChange: handleChange,
                                style: {
                                    marginBottom: 20
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                type: "submit",
                                bg: "green.500",
                                isLoading: isLoading,
                                sx: {
                                    "&:hover": {
                                        bg: "green.300"
                                    }
                                },
                                children: mode
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const authForm = (AuthForm);


/***/ }),

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


/***/ })

};
;