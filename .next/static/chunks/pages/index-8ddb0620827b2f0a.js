(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4651:function(n,e,r){"use strict";r.d(e,{Ee:function(){return f}});var t=r(1604),i=r(5031),o=r(7294),c=r(4697);function a(){return a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},a.apply(this,arguments)}function l(n,e){if(null==n)return{};var r,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}var s=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=o.forwardRef((function(n,e){var r=n.htmlWidth,t=n.htmlHeight,i=n.alt,c=l(n,s);return o.createElement("img",a({width:r,height:t,ref:e,alt:i},c))})),f=(0,t.Gp)((function(n,e){var r=n.fallbackSrc,s=n.fallback,f=n.src,h=n.srcSet,g=n.align,p=n.fit,x=n.loading,v=n.ignoreFallback,m=n.crossOrigin,b=l(n,u),w=null!=x||v||void 0===r&&void 0===s,j=function(n){var e=n.loading,r=n.src,t=n.srcSet,i=n.onLoad,a=n.onError,l=n.crossOrigin,s=n.sizes,u=n.ignoreFallback,d=(0,o.useState)("pending"),f=d[0],h=d[1];(0,o.useEffect)((function(){h(r?"loading":"pending")}),[r]);var g=(0,o.useRef)(),p=(0,o.useCallback)((function(){if(r){x();var n=new Image;n.src=r,l&&(n.crossOrigin=l),t&&(n.srcset=t),s&&(n.sizes=s),e&&(n.loading=e),n.onload=function(n){x(),h("loaded"),null==i||i(n)},n.onerror=function(n){x(),h("failed"),null==a||a(n)},g.current=n}}),[r,l,t,s,i,a,e]),x=function(){g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,c.a)((function(){if(!u)return"loading"===f&&p(),function(){x()}}),[f,p,u]),u?"loaded":f}(a({},n,{ignoreFallback:w})),y=a({ref:e,objectFit:p,objectPosition:g},w?b:(0,i.CE)(b,["onError","onLoad"]));return"loaded"!==j?s||o.createElement(t.m$.img,a({as:d,className:"chakra-image__placeholder",src:r},y)):o.createElement(t.m$.img,a({as:d,src:f,srcSet:h,crossOrigin:m,loading:x,className:"chakra-image"},y))}));i.Ts&&(f.displayName="Image")},3454:function(n,e,r){"use strict";var t,i;n.exports=(null===(t=r.g.process)||void 0===t?void 0:t.env)&&"object"===typeof(null===(i=r.g.process)||void 0===i?void 0:i.env)?r.g.process:r(7663)},8312:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4186)}])},141:function(n,e,r){"use strict";var t=r(5893),i=r(8527),o=r(4651);e.Z=function(n){var e=n.children,r=n.color,c=n.image,a=n.title,l=n.subtitle,s=n.description,u=n.roundImage;return(0,t.jsxs)(i.xu,{height:"calc(100vh - 100px)",overflowY:"auto",bgGradient:"linear(".concat(r,".500 0%, ").concat(r,".600 15%, ").concat(r,".700 40%,rgba(0,0,0,0.95) 75%)"),children:[(0,t.jsxs)(i.kC,{bg:"".concat(r,".600"),padding:"40px",align:"end",children:[(0,t.jsx)(i.xu,{padding:"20px",children:(0,t.jsx)(o.Ee,{boxSize:"160px",boxShadow:"2xl",src:c,borderRadius:u?"100%":"3px"})}),(0,t.jsxs)(i.xu,{padding:"20px",lineHeight:"40px",color:"white",children:[(0,t.jsx)(i.xv,{as:"code",fontSize:"sm",fontWeight:"bold",casing:"uppercase",children:l}),(0,t.jsx)(i.xv,{fontSize:"6xl",fontWeight:"bold",children:a}),(0,t.jsx)(i.xv,{fontSize:"sm",fontWeight:"bold",children:s})]})]}),(0,t.jsx)(i.xu,{paddingY:"50px",children:e})]})}},4186:function(n,e,r){"use strict";r.r(e),r.d(e,{__N_SSP:function(){return s}});var t=r(5893),i=r(8527),o=r(4651),c=(r(7294),r(141)),a=r(324),l=r(3454),s=!0;e.default=function(n){var e=n.artists,r=(0,a.P)(),s=r.user,u=r.isLoading;return console.log("STRIPE",l.env.STRIPE_KEY),u?(0,t.jsx)("div",{children:"Loading..."}):(0,t.jsx)(c.Z,{color:"blue",roundImage:!0,subtitle:"Profile",title:"".concat(null===s||void 0===s?void 0:s.firstName," ").concat(null===s||void 0===s?void 0:s.lastName),description:" ".concat(s.playlistsCount," playlists count"),image:"http://placekitten.com/g/300/300",children:(0,t.jsxs)(i.xu,{paddingX:"50px",children:[(0,t.jsxs)(i.xu,{color:"white",marginBottom:"50px",children:[(0,t.jsx)(i.xv,{fontSize:"2xl",fontWeight:"bold",children:"Top Artist this month"}),(0,t.jsx)(i.xv,{children:"Only visible to you"})]}),(0,t.jsx)(i.kC,{children:e.map((function(n){return(0,t.jsx)(i.xu,{marginX:"10px",width:"20%",children:(0,t.jsxs)(i.xu,{color:"white",bg:"gray.900",borderRadius:"4px",padding:"15px",children:[(0,t.jsx)(o.Ee,{src:"http://placekitten.com/g/300/300",borderRadius:"100%"}),(0,t.jsxs)(i.xu,{marginTop:"20px",children:[(0,t.jsxs)(i.xv,{fontSize:"large",children:[" ",n.name]}),(0,t.jsx)(i.xv,{fontSize:"x-small",children:" Artist"})]})]})})}))})]})})}},7663:function(n){!function(){var e={162:function(n){var e,r,t=n.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(n){if(e===setTimeout)return setTimeout(n,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:i}catch(n){e=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(n){r=o}}();var a,l=[],s=!1,u=-1;function d(){s&&a&&(s=!1,a.length?l=a.concat(l):u=-1,l.length&&f())}function f(){if(!s){var n=c(d);s=!0;for(var e=l.length;e;){for(a=l,l=[];++u<e;)a&&a[u].run();u=-1,e=l.length}a=null,s=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(e){try{return r.call(null,n)}catch(e){return r.call(this,n)}}}(n)}}function h(n,e){this.fun=n,this.array=e}function g(){}t.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];l.push(new h(n,e)),1!==l.length||s||c(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},t.title="browser",t.browser=!0,t.env={},t.argv=[],t.version="",t.versions={},t.on=g,t.addListener=g,t.once=g,t.off=g,t.removeListener=g,t.removeAllListeners=g,t.emit=g,t.prependListener=g,t.prependOnceListener=g,t.listeners=function(n){return[]},t.binding=function(n){throw new Error("process.binding is not supported")},t.cwd=function(){return"/"},t.chdir=function(n){throw new Error("process.chdir is not supported")},t.umask=function(){return 0}}},r={};function t(n){var i=r[n];if(void 0!==i)return i.exports;var o=r[n]={exports:{}},c=!0;try{e[n](o,o.exports,t),c=!1}finally{c&&delete r[n]}return o.exports}t.ab="//";var i=t(162);n.exports=i}()}},function(n){n.O(0,[774,888,179],(function(){return e=8312,n(n.s=e);var e}));var e=n.O();_N_E=e}]);