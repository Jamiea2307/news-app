(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{43:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r,i,c,a,s,o,l,d,u,f,p,b,h,m,j=n(0),x=n.n(j),O=n(34),v=n.n(O),w=(n(43),n(10)),g="Light",y="Dark",k=n(19),S=n(3),C=n(4),F=n(2),E=F.c.div(r||(r=Object(C.a)(["\n  padding: 1.5rem 0.5rem;\n  border-top: 1px solid #2e3234;\n  border-bottom: 1px solid #2e3234;\n"]))),N=F.c.a(i||(i=Object(C.a)(["\n  color: ",";\n\n  &:visited {\n    color: ",";\n  }\n"])),(function(e){return e.theme.linkColor}),(function(e){return e.theme.linkVisited})),_=F.c.div(c||(c=Object(C.a)(["\n  display: flex;\n  align-items: baseline;\n  margin: unset;\n"]))),I=F.c.div(a||(a=Object(C.a)(["\n  display: flex;\n  font-size: 12px;\n  margin: unset;\n"]))),L=F.c.a(s||(s=Object(C.a)(["\n  color: #888;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 20em;\n  font-size: x-small;\n  white-space: nowrap;\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),T=F.c.a(o||(o=Object(C.a)(["\n  margin-right: 0.5rem;\n"]))),B=n(38),P=n(1),z=function(e){var t=e.unixTime;return Object(P.jsx)(T,{children:Object(P.jsxs)("span",{children:["Posted:",B.DateTime.fromSeconds(t).toFormat("HH:mm yyyy/MM/dd")]})})},M=function(e){var t;return t=Array.isArray(e)?new URL(e[0].url):new URL(e),Object(P.jsxs)("div",{children:["(",t.hostname,")"]})},A=function(e){return e.crosspost_parent_list?M(e.crosspost_parent_list):e.url?M(e.url):void 0},D=F.c.div(l||(l=Object(C.a)(["\n  padding: 1.5rem 0.5rem;\n  /* border-top: 1px solid #2e3234; */\n  /* border-bottom: 1px solid #2e3234; */\n  border-left: 1px solid #bbb3;\n  /* border-right: 1px solid white; */\n  color: ",";\n\n  .authorName {\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 16px;\n  }\n  .postTime {\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 16px;\n    padding-left: 4px;\n  }\n"])),(function(e){return e.theme.fontColor})),R=F.c.div(d||(d=Object(C.a)(["\n  padding: 1rem;\n"]))),H=F.c.div(u||(u=Object(C.a)(["\n  font-family: Noto Sans, Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 21px;\n  word-break: break-word;\n  overflow: auto;\n  padding-bottom: 1px;\n  margin-bottom: -1px;\n"]))),U=F.c.div(f||(f=Object(C.a)(["\n  a {\n    text-decoration: none;\n    font-size: small;\n    color: ",";\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n"])),(function(e){return e.theme.linkColor})),V=function(e){var t=e.id,n=e.commentNumber;return Object(P.jsx)(U,{children:Object(P.jsxs)(k.b,{to:{pathname:"/comments/".concat(t)},children:[n," comments"]})})},J=n(15),X=n.n(J),G=function(e){var t=e.storyDetails;return(null===t||void 0===t?void 0:t.url)?Object(P.jsxs)(E,{children:[Object(P.jsxs)(_,{children:[Object(P.jsx)(N,{href:t.url,children:Object(P.jsx)("div",{dangerouslySetInnerHTML:{__html:X.a.sanitize(t.title)}})}),Object(P.jsx)(L,{href:t.url,children:A(t)})]}),Object(P.jsxs)(I,{children:[Object(P.jsx)(z,{unixTime:t.time}),"By: ",t.by]}),Object(P.jsx)(V,{id:t.id,commentNumber:t.descendants})]}):null},Y=F.c.div(p||(p=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n\n  .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: ",";\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n  .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    animation: lds-ellipsis1 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    animation: lds-ellipsis3 0.6s infinite;\n  }\n  @keyframes lds-ellipsis1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  @keyframes lds-ellipsis3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n  @keyframes lds-ellipsis2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(24px, 0);\n    }\n  }\n"])),(function(e){return e.theme.spinnerColor})),Z=function(){return Object(P.jsx)(Y,{children:Object(P.jsxs)("div",{className:"lds-ellipsis",children:[Object(P.jsx)("div",{}),Object(P.jsx)("div",{}),Object(P.jsx)("div",{}),Object(P.jsx)("div",{})]})})},$=n(6),q=n.n($),K=n(12),Q=n(13),W=n.n(Q),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.by,r=e.url,i=e.time,c=e.title,a=e.kids,s=e.descendants;return{id:t,by:n,url:r,time:i,title:c,kids:a,descendants:s}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.by,n=e.id,r=e.kids,i=e.text,c=e.time;return{by:t,id:n,kids:r,text:i,time:c}},ne="https://hacker-news.firebaseio.com/v0/",re=("".concat(ne,"newstories.json"),"".concat(ne,"topstories.json")),ie=("".concat(ne,"beststories.json"),"".concat(ne,"item/")),ce=function(){var e=Object(K.a)(q.a.mark((function e(t){var n,r,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("".concat(ie+t,".json"));case 2:return n=e.sent,r=n.data,i=r&&ee(r),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(K.a)(q.a.mark((function e(){var t,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("".concat(re+'?print=pretty&orderBy="$key"&limitToFirst=25'));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(K.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:return t=e.sent,e.abrupt("return",Promise.all(t.map(ce)));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function e(t){return t&&t.kids&&t.kids.length>0&&e(t.kids).then((function(e){return t.kids=e})),Promise.all(t.map(le))},le=function(){var e=Object(K.a)(q.a.mark((function e(t){var n,r,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("".concat(ie+t,".json"));case 2:if(n=e.sent,r=n.data,!(i=r&&te(r))||!i.kids){e.next=8;break}return e.next=8,oe(i.kids).then((function(e){return i.kids=e}));case 8:return e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(K.a)(q.a.mark((function e(t){var n,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("".concat(ie+t,".json"));case 2:return n=e.sent,r=n.data,e.abrupt("return",Promise.all(r.kids.map(le)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.author,r=e.url,i=e.created,c=e.title,a=e.permalink,s=e.num_comments,o=e.crosspost_parent_list;return{id:t,by:n,url:r,time:i,title:c,permalink:a,descendants:s,crosspost_parent_list:o}},fe="".concat("https://www.reddit.com/r/","all.json"),pe=function(){var e=Object(K.a)(q.a.mark((function e(){var t,n,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get(fe);case 2:return t=e.sent,n=t.data,r=n.data.children.map((function(e){return ue(e.data)})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(K.a)(q.a.mark((function e(t){var n,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("".concat("https://www.reddit.com/"+t,".json"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r[1].data.children);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he="hackernews",me="reddit",je=function(){var e=Object(j.useState)([]),t=Object(w.a)(e,2),n=t[0],r=t[1],i=Object(j.useState)(!1),c=Object(w.a)(i,2),a=c[0],s=c[1],o=Object(j.useContext)(Re).state;return Object(j.useEffect)((function(){s(!0),function(e,t,n){switch(e){case he:se().then((function(e){t(!0),n(e)})).finally((function(){return t(!1)}));break;case me:pe().then((function(e){t(!0),n(e)})).finally((function(){return t(!1)}));break;default:console.log("no site selected")}}(o.siteSelected,s,r)}),[o.siteSelected]),Object(P.jsxs)("div",{children:[n.map((function(e){return a?null:Object(P.jsx)(G,{storyDetails:e},e.id)})),a?Object(P.jsx)(Z,{}):null,a?null:Object(P.jsx)("button",{children:"More Results"})]})},xe={body:"#FFF8F0",fontColor:"#000",borderColor:"#000",themeButton:"#152028",themeButtonFont:"#fff",linkColor:"#0000EE",linkVisited:"#551A8B",spinnerColor:"#152028"},Oe={body:"#152028",fontColor:"#fff",borderColor:"#fff",themeButton:"#FFF8F0",themeButtonFont:"#000",linkColor:"#fff",linkVisited:"#A6A6A6",spinnerColor:"#fff"},ve=Object(F.b)(b||(b=Object(C.a)(["\n\tbody {\n\t\tbackground-color: ",";\n        color: ",";\n\t}\n"])),(function(e){return e.theme.body}),(function(e){return e.theme.fontColor})),we=F.c.div(h||(h=Object(C.a)(["\n  height: 5rem;\n  width: 100%;\n  background-color: #1d1f1e;\n"]))),ge=F.c.li(m||(m=Object(C.a)(["\n  list-style-type: none;\n  display: flex;\n  height: 100%;\n\n  button {\n    height: 80px;\n    width: 80px;\n    border: none;\n    background: none;\n    &:hover {\n      cursor: pointer;\n      background: #3d566e;\n      border-bottom: solid white;\n    }\n  }\n  .selected {\n    background: #3d566e;\n    border-bottom: solid white;\n  }\n"])));function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ke(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Se=j.createElement("g",null,j.createElement("rect",{fill:"#FB651E",x:0,y:0,width:256,height:256}),j.createElement("path",{d:"M119.373653,144.745813 L75.43296,62.4315733 L95.5144533,62.4315733 L121.36192,114.52416 C121.759575,115.452022 122.2235,116.413008 122.753707,117.407147 C123.283914,118.401285 123.747838,119.428546 124.145493,120.48896 C124.410597,120.886615 124.609422,121.251127 124.741973,121.582507 C124.874525,121.913886 125.007075,122.212123 125.139627,122.477227 C125.802386,123.802744 126.39886,125.095105 126.929067,126.354347 C127.459274,127.613589 127.923198,128.773399 128.320853,129.833813 C129.381268,127.580433 130.541078,125.1614 131.80032,122.57664 C133.059562,119.99188 134.351922,117.307747 135.67744,114.52416 L161.92256,62.4315733 L180.612267,62.4315733 L136.27392,145.739947 L136.27392,198.826667 L119.373653,198.826667 L119.373653,144.745813 Z",fill:"#FFFFFF"}));function Ce(e,t){var n=e.title,r=e.titleId,i=ke(e,["title","titleId"]);return j.createElement("svg",ye({viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":r},i),n?j.createElement("title",{id:r},n):null,Se)}var Fe=j.forwardRef(Ce);n.p;function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ne(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var _e=j.createElement("style",{type:"text/css"},"\r\n\t.st0{fill:#FF4500;}\r\n\t.st1{fill:#FFFFFF;}\r\n\t.st2{display:none;}\r\n\t.st3{display:inline;fill:none;stroke:#D8D8D8;stroke-width:0.5;stroke-miterlimit:10;}\r\n"),Ie=j.createElement("g",{className:"st0",id:"Artwork"},j.createElement("g",null,j.createElement("rect",{className:"st0",width:"100%",height:"100%"}),j.createElement("path",{className:"st1",d:"M227.9,170.9c0-6.9-5.6-12.5-12.5-12.5c-3.4,0-6.4,1.3-8.6,3.5c-8.5-6.1-20.3-10.1-33.3-10.6l5.7-26.7 l18.5,3.9c0.2,4.7,4.1,8.5,8.9,8.5c4.9,0,8.9-4,8.9-8.9c0-4.9-4-8.9-8.9-8.9c-3.5,0-6.5,2-7.9,5l-20.7-4.4c-0.6-0.1-1.2,0-1.7,0.3 c-0.5,0.3-0.8,0.8-1,1.4l-6.3,29.8c-13.3,0.4-25.2,4.3-33.8,10.6c-2.2-2.1-5.3-3.5-8.6-3.5c-6.9,0-12.5,5.6-12.5,12.5 c0,5.1,3,9.4,7.4,11.4c-0.2,1.2-0.3,2.5-0.3,3.8c0,19.2,22.3,34.7,49.9,34.7s49.9-15.5,49.9-34.7c0-1.3-0.1-2.5-0.3-3.7 C224.8,180.4,227.9,176,227.9,170.9z M142.4,179.8c0-4.9,4-8.9,8.9-8.9c4.9,0,8.9,4,8.9,8.9c0,4.9-4,8.9-8.9,8.9 C146.4,188.7,142.4,184.7,142.4,179.8z M192.1,203.3c-6.1,6.1-17.7,6.5-21.1,6.5c-3.4,0-15.1-0.5-21.1-6.5c-0.9-0.9-0.9-2.4,0-3.3 c0.9-0.9,2.4-0.9,3.3,0c3.8,3.8,12,5.2,17.9,5.2s14-1.4,17.9-5.2c0.9-0.9,2.4-0.9,3.3,0C193,201,193,202.4,192.1,203.3z  M190.5,188.7c-4.9,0-8.9-4-8.9-8.9c0-4.9,4-8.9,8.9-8.9c4.9,0,8.9,4,8.9,8.9C199.4,184.7,195.4,188.7,190.5,188.7z"}))),Le=j.createElement("g",{id:"Spacing_Guide",className:"st2"},j.createElement("rect",{className:"st3",width:85.4,height:85.4}),j.createElement("rect",{className:"st3",width:341.8,height:85.4}),j.createElement("rect",{y:256.3,className:"st3",width:341.8,height:85.4}),j.createElement("rect",{className:"st3",width:85.4,height:341.8}),j.createElement("rect",{x:256.4,className:"st3",width:85.4,height:341.8}));function Te(e,t){var n=e.title,r=e.titleId,i=Ne(e,["title","titleId"]);return j.createElement("svg",Ee({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 341.8 341.8",style:{enableBackground:"new 0 0 341.8 341.8"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},i),n?j.createElement("title",{id:r},n):null,_e,Ie,Le)}var Be,Pe=j.forwardRef(Te),ze=(n.p,function(){var e=Object(j.useContext)(Re).dispatch,t=Object(j.useState)(""),n=Object(w.a)(t,2),r=n[0],i=n[1],c=function(t){i(t),window.localStorage.setItem("selectedsite",t),e({type:"UPDATE_SITE",data:t})};return Object(P.jsx)(we,{children:Object(P.jsxs)(ge,{children:[Object(P.jsx)("button",{className:r===he?"selected":null,onClick:function(){return c(he)},children:Object(P.jsx)(Fe,{})}),Object(P.jsx)("button",{className:r===me?"selected":null,onClick:function(){return c(me)},children:Object(P.jsx)(Pe,{})})]})})}),Me=(F.c.button(Be||(Be=Object(C.a)(["\n  border: none;\n  outline: none;\n  position: absolute;\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.themeButton}),(function(e){return e.theme.themeButtonFont})),function e(t){var n=t.comment;return n?Object(P.jsx)(R,{children:n.map((function(t){return Object(P.jsxs)(D,{children:[Object(P.jsxs)("div",{children:[Object(P.jsx)("span",{className:"authorName",children:t.by}),Object(P.jsx)("span",{className:"postTime",children:Object(P.jsx)(z,{unixTime:t.time})})]}),Object(P.jsx)(H,{dangerouslySetInnerHTML:{__html:X.a.sanitize(t.text)}}),Object(P.jsx)(e,{comment:t.kids})]},t.id)}))}):null}),Ae=function e(t){var n=t.comment;return Object(P.jsx)(R,{children:n?n.map((function(t){var n,r,i;return"t1"===t.kind?Object(P.jsxs)(D,{children:[Object(P.jsxs)("div",{children:[Object(P.jsx)("span",{className:"authorName",children:t.data.author}),Object(P.jsx)("span",{className:"postTime",children:Object(P.jsx)(z,{unixTime:t.data.created_utc})})]}),Object(P.jsx)(H,{dangerouslySetInnerHTML:{__html:X.a.sanitize(t.data.body)}}),(null===t||void 0===t||null===(n=t.data)||void 0===n||null===(r=n.replies)||void 0===r||null===(i=r.data)||void 0===i?void 0:i.children)&&Object(P.jsx)(e,{comment:t.data.replies.data.children})]},t.data.id):null})):null})},De=function(e){var t=Object(j.useState)([]),n=Object(w.a)(t,2),r=n[0],i=n[1],c=e.match.params.id,a=Object(j.useContext)(Re).state;return Object(j.useEffect)((function(){!function(e,t,n){switch(t){case he:de(e).then((function(e){return n(e)}));break;case me:be(e).then((function(e){return n(e)}));break;default:console.log("no site selected")}}(c,a.siteSelected,i)}),[c,a.siteSelected]),Object(P.jsxs)("div",{children:["reddit"===a.siteSelected?Object(P.jsx)(Ae,{comment:r}):null,"hackernews"===a.siteSelected?Object(P.jsx)(Me,{comment:r}):null]})},Re=Object(j.createContext)(),He=window.localStorage.selectedsite,Ue={siteSelected:He||he};console.log(window.localStorage);var Ve=function(){var e=Object(j.useReducer)((function(e,t){switch(t.type){case"UPDATE_SITE":return{siteSelected:t.data};default:return t.data}}),Ue),t=Object(w.a)(e,2),n=t[0],r=t[1],i=function(){var e=Object(j.useState)(g),t=Object(w.a)(e,2),n=t[0],r=t[1];return Object(j.useEffect)((function(){var e=window.localStorage.getItem("theme");e?r(e):window.localStorage.setItem("theme",g)}),[]),[n,function(){n===g?(r(y),window.localStorage.setItem("theme",y)):(r(g),window.localStorage.setItem("theme",g))}]}(),c=Object(w.a)(i,2),a=c[0],s=(c[1],"Light"===a?xe:Oe);return Object(P.jsxs)(F.a,{theme:s,children:[Object(P.jsx)(ve,{}),Object(P.jsx)(Re.Provider,{value:{state:n,dispatch:r},children:Object(P.jsx)(k.a,{children:Object(P.jsxs)(S.c,{children:[Object(P.jsxs)(S.a,{path:["/","/news-app"],exact:!0,children:[Object(P.jsx)(ze,{}),Object(P.jsx)(je,{selectedSite:{state:n}})]}),Object(P.jsx)(S.a,{path:"/comments/:id",component:De})]})})})]})},Je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))};v.a.render(Object(P.jsx)(x.a.StrictMode,{children:Object(P.jsx)(Ve,{})}),document.getElementById("root")),Je()}},[[68,1,2]]]);
//# sourceMappingURL=main.e13b774a.chunk.js.map