(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/dd_Icon_removed_background.fe097f6e.png"},function(e,a,t){e.exports=t.p+"static/media/BBLogo_TransparentBackground.24e9c71e.png"},function(e,a,t){e.exports=t(22)},,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),o=t.n(r),m=(t(17),t(18),t(2));t(19);var c=function(){const e=Object(m.o)(),a=a=>{e(a)};return l.a.createElement("div",{className:"Header"},l.a.createElement("p",{className:"noto-sans-normal",onClick:()=>a("/")},"dreamyducks"),l.a.createElement("button",{onClick:()=>a("/projects/EQL")},"Click here to\u3010EQL\u3011"),l.a.createElement("a",{className:"noto-sans-normal",onClick:()=>a("/about")},"About"),l.a.createElement("a",{className:"noto-sans-normal",onClick:()=>a("/projects")},"Projects"),l.a.createElement("a",{className:"noto-sans-normal",onClick:()=>a("/projects/EQL")},"Element Quick Learn"))},u=(t(20),t(7)),s=t.n(u),i=t(8);var E=[{name:"BloomBoard",redirect:"/",image:t.n(i).a},{name:"EQL",redirect:"/projects/EQL"}];var p=function(){const e=Object(m.o)(),a=a=>{e(a)},t=E.map(e=>l.a.createElement(f,{name:e.name,onClick:()=>a(e.redirect),image:e.image}));return l.a.createElement("div",{className:"HomepageMain"},l.a.createElement("div",{className:"HomepageMainBody"},l.a.createElement(c,null),l.a.createElement("div",{className:"LogoContainer"},l.a.createElement("p",{className:"nunito-normal"},"dreamyducks")),l.a.createElement("div",{className:"ProjectsContainer"},l.a.createElement(d,{name:"BloomBoard"}),l.a.createElement(d,{name:"EQL",onClick:()=>a("/projects/EQL")})),l.a.createElement("div",{className:"ExploreContainer"},t)))};function d(e){return l.a.createElement("div",{className:"Card",onClick:e.onClick},l.a.createElement("img",{src:s.a}),l.a.createElement("p",null,e.name))}function f(e){return l.a.createElement("div",{className:"ExploreCard",onClick:e.onClick},l.a.createElement("div",{className:"contents"},l.a.createElement("img",{src:e.image}),l.a.createElement("p",null,e.name)))}var v=[{name:"Nitrite",formula:"NO\u2082-\xb9",typeFormula:"NO2-1"},{name:"Nitrate",formula:"NO\u2083-\xb9",typeFormula:"NO3-1"},{name:"Hydroxide",formula:"OH-\xb9",typeFormula:"OH-1"},{name:"Hypochlorite",formula:"ClO-\xb9",typeFormula:"ClO-1"},{name:"Chlorite",formula:"ClO\u2082-\xb9",typeFormula:"ClO2-1"},{name:"Cyanide",formula:"CN-\xb9",typeFormula:"CN-1"},{name:"Permanganate",formula:"MnO\u2084-\xb9",typeFormula:"MnO4-1"},{name:"Acetate",formula:"C\u2082H\u2083O\u2082-\xb9",typeFormula:"C2H3O2-1"},{name:"Chlorate",formula:"ClO\u2083-\xb9",typeFormula:"ClO3-1"},{name:"Perchlorate",formula:"ClO\u2084-\xb9",typeFormula:"ClO4-1"},{name:"Sulfite",formula:"SO\u2083\u207b\xb2",typeFormula:"SO3-2"},{name:"Sulfate",formula:"SO\u2084\u207b\xb2",typeFormula:"SO4-2"},{name:"Carbonate",formula:"CO\u2083\u207b\xb2",typeFormula:"CO3-2"},{name:"Phosphite",formula:"PO\u2083\u207b\xb3",typeFormula:"PO3-3"},{name:"Phosphate",formula:"PO\u2084\u207b\xb3",typeFormula:"PO4-3"},{name:"Ammonium",formula:"NH\u2084\u207a\xb9",typeFormula:"NH4+1"}];t(21);var C=function(){const[e,a]=Object(n.useState)([]),[t,r]=Object(n.useState)(!0),[o,m]=Object(n.useState)(""),[u,s]=Object(n.useState)(""),[i,E]=Object(n.useState)(null),[p,d]=Object(n.useState)(0),[f,C]=Object(n.useState)(""),[g,y]=Object(n.useState)(0),[b,h]=Object(n.useState)(0),[k,F]=Object(n.useState)(!1),[S,j]=Object(n.useState)(!1),P=v.map(e=>l.a.createElement(O,{name:e.name,formula:e.formula}));Object(n.useEffect)(()=>{console.log("Initialize");const e=N([...v]);a(e),d(0),E(e[0]),t?(m(e[0].formula),s(e[0].name)):(m(e[0].name),s(e[0].typeFormula))},[]);const B=()=>{console.log("type formula:"+i.typeFormula),console.log("Answer input "+f),f===u&&(S||(console.log("answer is correct"),y(k?g+5:g+10),h(b+10),p<e.length-1?L():j(!0)))},L=()=>{F(!1),C(""),d(a=>{const n=a+1;var l,r,o,c;return E(e[n]),t?(m(null===(l=e[n])||void 0===l?void 0:l.formula),s(null===(r=e[n])||void 0===r?void 0:r.name)):(m(null===(o=e[n])||void 0===o?void 0:o.name),s(null===(c=e[n])||void 0===c?void 0:c.typeFormula)),n}),console.log("new question setted"),console.log("index"+p)};return l.a.createElement("div",{className:"EQL"},l.a.createElement(c,null),l.a.createElement("div",{className:"EQLBody"},l.a.createElement("h1",null,"Element Quick Learn"),l.a.createElement("div",{onClick:()=>{r(e=>{let t=!e;const n=N([...v]);return a(n),E(n[0]),t?(m(n[0].formula),s(n[0].name)):(m(n[0].name),s(n[0].typeFormula)),t}),d(0),C(""),F(!1),j(!1),y(0),h(0)},className:"PlaySelector"},l.a.createElement("p",null,"Formula"),l.a.createElement("p",null,"to"),l.a.createElement("p",null,"Name")),l.a.createElement("div",{className:"PlayDisplay"},l.a.createElement("p",{className:"score"},g,"/",b),l.a.createElement("h2",{className:"question"},o),l.a.createElement("input",{type:"text",placeholder:"Type answer",value:f,onChange:e=>{C(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&B()},className:"AnswerInput"}),l.a.createElement("div",{className:"ControlButtons"},l.a.createElement("button",{onClick:()=>{console.log("length of shuffledquestions:"+e.length);let a=u.substring(0,2);k?S||(h(b+10),p<e.length-1?L():j(!0)):(C(a),F(!0))},className:"HintButton"},k?"Skip":"Hint"),l.a.createElement("button",{onClick:B,className:"SubmitButton"},"Guess"))),l.a.createElement("div",{className:`gameOverDisplay ${S?"":"hidden"}`},l.a.createElement("p",null,"Score: ",g),l.a.createElement("button",{onClick:()=>{const e=N([...v]);a(e),E(e[0]),t?(m(e[0].formula),s(e[0].name)):(m(e[0].name),s(e[0].typeFormula)),d(0),C(""),F(!1),j(!1),y(0),h(0)}},"Play Again")),l.a.createElement("div",{className:"BottomSection"},l.a.createElement("div",{className:"DataTableHeading"},l.a.createElement("h4",null,"All Datas")),l.a.createElement("div",{className:"DataTable"},P))))};function N(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n}return e}function O(e){return l.a.createElement("div",{className:"ElementCard"},l.a.createElement("p",null,e.name),l.a.createElement("p",null,e.formula))}var g=function(){return l.a.createElement("div",{className:"NoPageFound"},l.a.createElement("h1",null,"No Page found"))};var y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.c,{basename:"/dreamyducks-react-app"},l.a.createElement(m.a,{index:!0,element:l.a.createElement(p,null)}),l.a.createElement(m.a,{path:"projects",element:l.a.createElement(p,null)}),l.a.createElement(m.a,{path:"projects/eql",element:l.a.createElement(C,null)}),l.a.createElement(m.a,{path:"*",element:l.a.createElement(g,null)})))};var b=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then(a=>{let{getCLS:t,getFID:n,getFCP:l,getLCP:r,getTTFB:o}=a;t(e),n(e),l(e),r(e),o(e)})},h=t(3);o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h.a,null,l.a.createElement(y,null)))),b()}],[[9,1,2]]]);
//# sourceMappingURL=main.b71b84b3.chunk.js.map