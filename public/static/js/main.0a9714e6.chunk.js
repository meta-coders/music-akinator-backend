(this["webpackJsonpmusic-akinator-frontend"]=this["webpackJsonpmusic-akinator-frontend"]||[]).push([[0],{65:function(e,a,t){e.exports=t(99)},71:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),o=t.n(c),i=t(138),l=t(137),s=t(28),u=t.n(s),m=t(17),d=t(135),p=t(100),f=t(141),b=t(136),y=t(51),g=(t(71),t(127)),h=t(140),E=function(e){var a=e.children,t=e.value,n=e.currentValue;e.className;return r.a.createElement(g.a,{component:"div",role:"tabpanel",hidden:t!==n},t===n&&r.a.createElement(h.a,{my:3},a))},v=t(131),C=t(132),j=Object(y.a)({deezerPlayerContainer:{display:"flex",alignItems:"center",justifyContent:"center"},buttonBlock:{display:"flex",alignItems:"center",justifyContent:"space-around",marginTop:"2em"},deezerCard:{paddingBottom:"2em",paddingTop:"2em"}}),w=function(e){var a=e.iframe,t=e.deezerId,n=e.onWin,c=e.onMismatch,o=j();return r.a.createElement(v.a,{className:o.deezerCard},r.a.createElement("div",{className:o.deezerPlayerContainer,dangerouslySetInnerHTML:{__html:a(t)}}),r.a.createElement("div",{className:o.buttonBlock},r.a.createElement(C.a,{variant:"contained",color:"secondary",onClick:n},"\u0412\u0413\u0410\u0414\u0410\u0412"),r.a.createElement(C.a,{variant:"contained",color:"error",onClick:c},"\u041e\u041f\u042f\u0422\u042c \u041c\u042b\u041c\u041e")))};w.defaultProps={iframe:function(e){return'<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=true&width=300&height=300&color=ff0000&layout=dark&size=medium&type=tracks&id='+e+'&app_id=1" width="300" height="300"></iframe>'}};var k=w,O=t(139),x=Object(y.a)({lyricsContainer:{width:"100%",padding:"2em",display:"flex",flexDirection:"column",alignItems:"stretch"},submitButton:{marginTop:"2em"}}),S=function(e){var a=e.onSubmit,t=Object(n.useState)(""),c=Object(m.a)(t,2),o=c[0],i=c[1],l=x();return r.a.createElement(v.a,{className:l.lyricsContainer},r.a.createElement(O.a,{id:"outlined-multiline-static",label:"Type lyrics here...",value:o,onChange:function(e){return i(e.target.value)},multiline:!0,rows:"4",variant:"outlined"}),r.a.createElement(C.a,{className:l.submitButton,variant:"contained",color:"secondary",onClick:function(){return a(o)}},"Send"))},z=Object(y.a)({winContainer:{width:"100%",padding:"2em",display:"flex",alignItems:"center",justifyContent:"center"}}),I=function(){var e=z();return r.a.createElement(v.a,{className:e.winContainer},"Akinator Won")},N=Object(y.a)({winContainer:{width:"100%",padding:"2em",display:"flex",alignItems:"center",justifyContent:"center"}}),B=function(){var e=N();return r.a.createElement(v.a,{className:e.winContainer},"Akinator Lost")},T=t(133),P=t(134),L=t(55),W=Object(y.a)({lyricsContainer:{width:"100%",padding:"2em",display:"flex",flexDirection:"column",alignItems:"stretch"},controls:{display:"flex",alignItems:"center",justifyContent:"space-around"},audio:{width:"100%"},submitButton:{marginTop:"1em"}}),q=function(e){var a=e.onSubmit,t=Object(n.useState)(null),c=Object(m.a)(t,2),o=c[0],i=c[1],l=Object(n.useState)(!1),s=Object(m.a)(l,2),u=s[0],d=s[1],p=W();return r.a.createElement(v.a,{className:p.lyricsContainer},r.a.createElement("audio",{className:p.audio,controls:!0,src:o?o.blobURL:o}),r.a.createElement(L.a,{strokeColor:"#19857b",onStop:function(e){i(e)},record:u}),r.a.createElement("div",{className:p.controls},r.a.createElement(C.a,{disabled:u,onClick:function(){d(!0)},startIcon:r.a.createElement(T.a,null)},"Start"),r.a.createElement(C.a,{disabled:!u,onClick:function(){d(!1)},startIcon:r.a.createElement(P.a,null)},"Stop")),r.a.createElement(C.a,{className:p.submitButton,variant:"contained",color:"secondary",onClick:function(){o&&a(o.blob)}},"Send"))},D=t(52),A=Object(y.a)({spinnerContainer:{display:"flex",justifyContent:"center",alignItems:"center",padding:"2em"}}),F=function(e){var a=e.loading,t=A();return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(v.a,{className:t.spinnerContainer},r.a.createElement(D.CircleLoader,{size:150,loading:a})))},M=[{value:"lyrics",label:"Lyrics"},{value:"recognizer",label:"Song Recognize"}],R=Object(y.a)({container:{height:"100vh"},tabPanel:{padding:0}});var V=function(){var e=R(),a=Object(n.useState)("lyrics"),t=Object(m.a)(a,2),c=t[0],o=t[1],i=Object(n.useState)(void 0),l=Object(m.a)(i,2),s=l[0],y=l[1],g=Object(n.useState)(0),h=Object(m.a)(g,2),v=h[0],C=h[1],j=Object(n.useState)(!1),w=Object(m.a)(j,2),O=w[0],x=w[1];return r.a.createElement(d.a,{maxWidth:"sm",className:e.container},r.a.createElement(p.a,{square:!0},r.a.createElement(f.a,{value:c,indicatorColor:"primary",textColor:"primary",onChange:function(e,a){return o(a)},variant:"fullWidth"},M.map((function(e){return r.a.createElement(b.a,{key:e.value,value:e.value,label:e.label})})))),r.a.createElement(E,{value:"lyrics",className:e.tabPanel,currentValue:c},r.a.createElement(S,{onSubmit:function(e){var a,t,n;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return x(!0),r.next=3,u.a.awrap(fetch("".concat("https://workers-music-akinator.herokuapp.com","/recognizeByLyrics?query=").concat(encodeURIComponent(e)),{crossDomain:!0}).catch((function(e){return console.log(e)})));case 3:return a=r.sent,r.next=6,u.a.awrap(a.json());case 6:t=r.sent,(n=t.deezerId)&&(x(!1),y(n));case 9:case"end":return r.stop()}}))}})),r.a.createElement(E,{value:"recognizer",className:e.tabPanel,currentValue:c},r.a.createElement(q,{onSubmit:function(e){var a,t,n,r;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return x(!0),(a=new FormData).append("file",e),c.next=5,u.a.awrap(fetch("".concat("https://workers-music-akinator.herokuapp.com","/recognizeByHumming"),{method:"POST",body:a}).catch((function(e){return console.error(e)})));case 5:if(200!==(t=c.sent).status){c.next=12;break}return c.next=9,u.a.awrap(t.json());case 9:n=c.sent,(r=n.deezerId)&&(x(!1),y(r));case 12:case"end":return c.stop()}}))}})),r.a.createElement(F,{loading:O}),s&&!O&&"win"!==v&&"lost"!==v&&r.a.createElement(k,{deezerId:s,onWin:function(){C("win")},onMismatch:function(){console.log("mismatch"),C(v+1>5?"lost":v+1)}}),"win"===v&&r.a.createElement(I,null),"lost"===v&&r.a.createElement(B,null))},_=t(39),H=t(54),J=Object(H.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},danger:{main:"#F44336"},error:{main:_.a.A400},background:{default:"#eee"}}});o.a.render(r.a.createElement(l.a,{theme:J},r.a.createElement(i.a,null),r.a.createElement(V,null)),document.querySelector("#root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.0a9714e6.chunk.js.map