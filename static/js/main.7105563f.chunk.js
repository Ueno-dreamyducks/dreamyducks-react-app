(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/dd_Icon_removed_background.fe097f6e.png"},function(e,a,t){e.exports=t.p+"static/media/BBLogo_TransparentBackground.24e9c71e.png"},function(e,a,t){e.exports=t(22)},,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),o=t.n(r),m=(t(17),t(18),t(2));t(19);var c=function(){const e=Object(m.o)(),a=a=>{e(a)};return l.a.createElement("div",{className:"Header"},l.a.createElement("p",{className:"noto-sans-normal",onClick:()=>a("/")},"dreamyducks"),l.a.createElement("button",{onClick:()=>a("/projects/EQL")},"Click here to\u3010EQL\u3011"),l.a.createElement("a",{className:"noto-sans-normal",onClick:()=>a("/about")},"About"),l.a.createElement("a",{className:"noto-sans-normal",onClick:()=>a("/projects")},"Projects"),l.a.createElement("a",{className:"noto-sans-normal",onClick:()=>a("/projects/EQL")},"Element Quick Learn"))},u=(t(20),t(7)),s=t.n(u),i=t(8);var E=[{name:"BloomBoard",redirect:"/",image:t.n(i).a},{name:"EQL",redirect:"/projects/EQL"}];var p=function(){const e=Object(m.o)(),a=a=>{e(a)},t=E.map(e=>l.a.createElement(f,{name:e.name,onClick:()=>a(e.redirect),image:e.image}));return l.a.createElement("div",{className:"HomepageMain"},l.a.createElement("div",{className:"HomepageMainBody"},l.a.createElement(c,null),l.a.createElement("div",{className:"LogoContainer"},l.a.createElement("p",{className:"nunito-normal"},"dreamyducks")),l.a.createElement("div",{className:"ProjectsContainer"},l.a.createElement(d,{name:"BloomBoard"}),l.a.createElement(d,{name:"EQL",onClick:()=>a("/projects/EQL")})),l.a.createElement("div",{className:"ExploreContainer"},t)))};function d(e){return l.a.createElement("div",{className:"Card",onClick:e.onClick},l.a.createElement("img",{src:s.a}),l.a.createElement("p",null,e.name))}function f(e){return l.a.createElement("div",{className:"ExploreCard",onClick:e.onClick},l.a.createElement("div",{className:"contents"},l.a.createElement("img",{src:e.image}),l.a.createElement("p",null,e.name)))}var O=[{name:"Nitrite",formula:"NO\u2082-\xb9",typeFormula:"NO2-1"},{name:"Nitrate",formula:"NO\u2083-\xb9",typeFormula:"NO3-1"},{name:"Hydroxide",formula:"OH-\xb9",typeFormula:"OH-1"},{name:"Hypochlorite",formula:"ClO-\xb9",typeFormula:"ClO-1"},{name:"Chlorite",formula:"ClO\u2082-\xb9",typeFormula:"ClO2-1"},{name:"Cyanide",formula:"CN-\xb9",typeFormula:"CN-1"},{name:"Permanganate",formula:"MnO\u2084-\xb9",typeFormula:"MnO4-1"},{name:"Acetate",formula:"C\u2082H\u2083O\u2082-\xb9",typeFormula:"C2H3O2-1"},{name:"Chlorate",formula:"ClO\u2083-\xb9",typeFormula:"ClO3-1"},{name:"Perchlorate",formula:"ClO\u2084-\xb9",typeFormula:"ClO4-1"},{name:"Sulfite",formula:"SO\u2083\u207b\xb2",typeFormula:"SO3-2"},{name:"Sulfate",formula:"SO\u2084\u207b\xb2",typeFormula:"SO4-2"},{name:"Carbonate",formula:"CO\u2083\u207b\xb2",typeFormula:"CO3-2"},{name:"Phosphite",formula:"PO\u2083\u207b\xb3",typeFormula:"PO3-3"},{name:"Phosphate",formula:"PO\u2084\u207b\xb3",typeFormula:"PO4-3"},{name:"Ammonium",formula:"NH\u2084\u207a\xb9",typeFormula:"NH4+1"}];t(21);var v=function(){const[e,a]=Object(n.useState)([]),[t,r]=Object(n.useState)(!0),[o,m]=Object(n.useState)(""),[u,s]=Object(n.useState)(""),[i,E]=Object(n.useState)(null),[p,d]=Object(n.useState)(0),[f,v]=Object(n.useState)(""),[g,y]=setInterval=Object(n.useState)(0),[b,F]=Object(n.useState)(0),[h,j]=Object(n.useState)(0),[k,S]=Object(n.useState)(!1),[P,B]=Object(n.useState)(!1),L=O.map(e=>l.a.createElement(N,{name:e.name,formula:e.formula})),H=Object(n.useRef)(),w=Object(n.useRef)(),A=e=>{w.current||(w.current=e);const a=(e-w.current)/1e3;!P&&a>=.1&&(y(e=>+(e+a).toFixed(1)),w.current=e),H.current=requestAnimationFrame(A)};Object(n.useEffect)(()=>(H.current=requestAnimationFrame(A),()=>cancelAnimationFrame(H.current)),[P]),Object(n.useEffect)(()=>{console.log("Initialize");const e=C([...O]);a(e),d(0),E(e[0]),t?(m(e[0].formula),s(e[0].name)):(m(e[0].name),s(e[0].typeFormula))},[]);const Q=()=>{console.log("type formula:"+i.typeFormula),console.log("Answer input "+f),f===u&&(P||(console.log("answer is correct"),F(k?b+5:b+10),j(h+10),p<e.length-1?x():B(!0)))},x=()=>{S(!1),v(""),d(a=>{const n=a+1;var l,r,o,c;return E(e[n]),t?(m(null===(l=e[n])||void 0===l?void 0:l.formula),s(null===(r=e[n])||void 0===r?void 0:r.name)):(m(null===(o=e[n])||void 0===o?void 0:o.name),s(null===(c=e[n])||void 0===c?void 0:c.typeFormula)),n}),console.log("new question setted"),console.log("index"+p)};return l.a.createElement("div",{className:"EQL"},l.a.createElement(c,null),l.a.createElement("div",{className:"EQLBody"},l.a.createElement("h1",null,"Element Quick Learn"),l.a.createElement("div",{onClick:()=>{r(e=>{let t=!e;const n=C([...O]);return a(n),E(n[0]),t?(m(n[0].formula),s(n[0].name)):(m(n[0].name),s(n[0].typeFormula)),t}),d(0),v(""),S(!1),B(!1),F(0),j(0)},className:"PlaySelector"},l.a.createElement("p",null,"Formula"),l.a.createElement("p",null,"to"),l.a.createElement("p",null,"Name")),l.a.createElement("div",{className:"PlayDisplay"},l.a.createElement("p",{className:"timer"},"Time: ",g),l.a.createElement("p",{className:"score"},"Score: ",b,"/",h),l.a.createElement("h2",{className:"question"},o),l.a.createElement("input",{type:"text",placeholder:"Type answer",value:f,onChange:e=>{v(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&Q()},className:"AnswerInput"}),l.a.createElement("div",{className:"ControlButtons"},l.a.createElement("button",{onClick:()=>{console.log("length of shuffledquestions:"+e.length);let a=u.substring(0,2);k?P||(j(h+10),p<e.length-1?x():B(!0)):(v(a),S(!0))},className:"HintButton"},k?"Skip":"Hint"),l.a.createElement("button",{onClick:Q,className:"SubmitButton"},"Guess"))),l.a.createElement("div",{className:`gameOverDisplay ${P?"":"hidden"}`},l.a.createElement("p",null,"Score: ",b),l.a.createElement("button",{onClick:()=>{const e=C([...O]);a(e),E(e[0]),t?(m(e[0].formula),s(e[0].name)):(m(e[0].name),s(e[0].typeFormula)),d(0),v(""),S(!1),B(!1),F(0),j(0),y(0),w.current=null}},"Play Again")),l.a.createElement("div",{className:"BottomSection"},l.a.createElement("div",{className:"DataTableHeading"},l.a.createElement("h4",null,"All Datas")),l.a.createElement("div",{className:"DataTable"},L))))};function C(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n}return e}function N(e){return l.a.createElement("div",{className:"ElementCard"},l.a.createElement("p",null,e.name),l.a.createElement("p",null,e.formula))}var g=function(){return l.a.createElement("div",{className:"NoPageFound"},l.a.createElement("h1",null,"No Page found"))};var y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.c,{basename:"/dreamyducks-react-app"},l.a.createElement(m.a,{index:!0,element:l.a.createElement(p,null)}),l.a.createElement(m.a,{path:"projects",element:l.a.createElement(p,null)}),l.a.createElement(m.a,{path:"projects/eql",element:l.a.createElement(v,null)}),l.a.createElement(m.a,{path:"*",element:l.a.createElement(g,null)})))};var b=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then(a=>{let{getCLS:t,getFID:n,getFCP:l,getLCP:r,getTTFB:o}=a;t(e),n(e),l(e),r(e),o(e)})},F=t(3);o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F.a,null,l.a.createElement(y,null)))),b()}],[[9,1,2]]]);
//# sourceMappingURL=main.7105563f.chunk.js.map