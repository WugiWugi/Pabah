(()=>{"use strict";var n={22:(n,e,t)=>{t.d(e,{A:()=>c});var a=t(601),o=t.n(a),i=t(314),r=t.n(i)()(o());r.push([n.id,"\n.main__menu-container{\n    padding: 0px 233px;\n}\n\n.container_img {\n    margin: 100px 0px 120px 0px ;\n    display: grid;\n    gap: 8%;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    width: 100%;\n}\n\n.main__burger {\n    height: 100%;\n    width: 100%;\n    display: block;\n    transition: all 0.5s ease;\n    z-index: 1;\n    cursor: pointer;\n}\n\n.main__burger:hover {\n    transform: scale(1.1);\n}\n\n.main__container-burgers-bottom {\n    margin: 0px 0px 50px 0px ;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.main__burgers-bottom {\n    padding: 10px 60px;\n    font-size: 2rem;\n    font-weight: 700;\n    color: aliceblue;\n    background-color: #FE6A14;\n    border-radius: 20px;\n    border: 3px solid black;\n    box-shadow: -5px 5px 0px black;\n    cursor: pointer;\n    transition: all 0.2s ease;\n}\n\n.main__burgers-bottom:hover {\n    background-color: #ff1e00;\n}\n\n.main__footer-element {\n    margin-top: 150px;\n    display: block;\n    width: 100%;\n    z-index: -1;\n}",""]);const c=r},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},64:(n,e,t)=>{t.d(e,{A:()=>c});var a=t(601),o=t.n(a),i=t(314),r=t.n(i)()(o());r.push([n.id,'* {\n    margin: 0px;\n    padding: 0px;\n    font-family: "Afacad", sans-serif;\n}\n\n.body-home {\n    background-color: #063A23;\n}\n\n.logo{\n    height: 200px;\n}\n\nbody::-webkit-scrollbar {\n    display: none;\n}\n\n.body-menu {\n    background-color: #F9E7C3;\n}\n\n.container {\n    padding: 0px 233px;\n}\n\n.header__container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 40px;\n}\n\n.header__nav-container {\n    display: flex;\n    gap: 50px;\n}\n\n.header__ul {\n    display: flex;\n    list-style-type: none;\n    gap: 50px;\n}\n\n.link {\n    color: #ffffff;\n    text-decoration: none;\n    font-size: 2.3rem;\n    transition: all 0.2s ease;\n    background: none;\n    border: none;\n}\n\n.link:hover {\n    color: #FE6A14;\n    text-shadow: 0px 0px 10px #fc9d67;\n}\n\n.link-2 {\n    color: #063A23;\n    text-decoration: none;\n    font-size: 2.3rem;\n    transition: all 0.2s ease;\n    background: none;\n    border: none;\n}\n\n.link-2:hover {\n    color: #FE6A14;\n    text-shadow: 0px 0px 10px #fc9d67;\n}\n\n.home,\n.menu,\n.contacts{\n    color: #FE6A14;\n    text-shadow: 0px 0px 10px #fc9d67;\n    text-decoration: none;\n    font-size: 2.3rem;\n    transition: all 0.2s ease;\n    background: none;\n    border: none;\n}\n\n.element svg path {\n    fill: #ffffff;\n    transition: all 0.2s ease;\n}\n\n.element-2 svg path {\n    fill: #063A23;\n    transition: all 0.2s ease;\n}\n\n.element:hover svg path,\n.element-2:hover svg path {\n    fill: #FE6A14;\n}\n\n.element svg,\n.element-2 svg  {\n    height: 35px;\n    width: 35px;\n}\n\n.element-corzina {\n    position: relative;\n}\n\n.elementCorzina__number-of-burgers {\n    position: absolute;\n    right: -9px;\n    top: -8px;\n    min-width: 22px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 50%;\n    border: 1px solid aliceblue;\n    background-color: #063A23;\n    color: aliceblue;\n}\n\n.elementCorzina__number-of-burgers-new {\n    position: absolute;\n    right: -12px;\n    top: -10px;\n    min-height: 23px;\n    min-width: 30px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 50%;\n    background-color: #063A23;\n    color: aliceblue;\n}\n\n\n.header__nav-container {\n    position: relative;\n}\n\n.elementCorzina__corzin {\n    position: absolute;\n    right: 0px;\n    top: 40px;\n    border: 3px solid #151f1a;\n    box-shadow: -5px 3px 0px #151f1a;\n    max-height: 300px;\n    width: 200px;\n    padding: 20px 20px 0px 20px;\n    background-color: #063A23;\n    z-index: 2;\n    overflow-y: auto;\n    display: none\n}\n\n.elementCorzina__corzin::-webkit-scrollbar {\n    display: none;\n}\n\n.open-corzin {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    cursor: auto;\n}\n\n.elementCorzina__product {\n    color: aliceblue;\n    list-style: none;\n    font-size: 1.1rem;\n}\n\n.elementCorzina__product-deleted {\n    margin: 10px;\n    cursor: pointer;\n    color: #FE6A14;\n    transition: all 0.2s ease;\n}\n\n.elementCorzina__product-deleted:hover {\n    color: #ff1e00;\n}\n\n\n.elementCorzina__prise {\n    margin-top: 10px;\n    font-size: 1.5rem;\n    font-weight: 900;\n    color: aliceblue\n}\n\n.hidden {\n    display: none;\n}\n\n.elementCorzina__button-corzin {\n    width: 100%;\n    font-size: 1.2rem;\n    padding: 5px 0px;\n    font-weight: 700;\n    color: aliceblue;\n    background-color: #FE6A14;\n    border-radius: 10px;\n    transition: all 0.2s ease;\n}\n\n.elementCorzina__button-corzin:hover {\n    background-color: #ff1e00;\n}\n\n@media(max-width: 1320px) {\n    .container {\n        padding: 0px 0px;\n    }\n\n    .header__nav-container {\n        display: none;\n    }\n\n    .header__container {\n        flex-direction: row-reverse;\n        justify-content: space-around;\n    }\n}\n\n@media(max-width: 675px) {\n    .header__container {\n        flex-direction: column-reverse;\n    }\n}',""]);const c=r},72:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},r=[],c=0;c<n.length;c++){var s=n[c],l=a.base?s[0]+a.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var m=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=o(u,a);a.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=a(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var c=t(i[r]);e[c].references--}for(var s=a(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},310:(n,e,t)=>{t.d(e,{A:()=>c});var a=t(601),o=t.n(a),i=t(314),r=t.n(i)()(o());r.push([n.id,'* {\n    font-family: "Afacad", sans-serif;\n}\n\n.bacground-element {\n    position: absolute;\n    right: 0px;\n    bottom: 0px;\n    z-index: -2;\n    height: 630px;\n}\n\n.burito {\n    position: absolute;\n    right: 200px;\n    bottom: 30px;\n    z-index: -1;\n    height: 650px;\n}\n\n.main__content {\n    margin-top: 150px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n\n}\n\n.main__title {\n    font-size: 7rem;\n    word-wrap: break-word;\n    color: rgb(255, 255, 255);\n    font-family: "Agdasima", sans-serif;\n}\n\n.main__button {\n    margin-top: 30px;\n    padding: 10px 60px;\n    font-size: 2rem;\n    font-weight: 700;\n    color: aliceblue;\n    background-color: #FE6A14;\n    border-radius: 20px;\n    border: 3px solid black;\n    box-shadow: -5px 5px 0px black;\n    cursor: pointer;\n    transition: all 0.2s ease;\n}\n\n.main__button:hover {\n    background-color: #ff1e00;\n}\n\n@media(max-width: 1320px) {\n    .main__content {\n        margin-left: 10%;\n    }\n\n    .burito {\n        right: 1%;\n        bottom: 100px;\n        height: 500px;\n    }\n}\n\n@media(max-width: 1160px) {\n    .main__content {\n        margin-left: 10%;\n    }\n\n    .burito {\n        display: none;\n    }\n\n    .bacground-element {\n        height: 430px;\n    }\n}\n\n@media(max-width: 768px) {\n    .bacground-element {\n        height: 380px;\n    }\n}\n\n@media(max-width: 707px) {\n    .main__content {\n        margin: 20% 10% 0% 10%;\n    }\n\n    .main__title {\n        font-size: 6rem;\n    }\n\n    .bacground-element {\n        height: 330px;\n    }\n}',""]);const c=r},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);a&&r[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},601:n=>{n.exports=function(n){return n[1]}},659:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},816:(n,e,t)=>{t.d(e,{A:()=>c});var a=t(601),o=t.n(a),i=t(314),r=t.n(i)()(o());r.push([n.id,".main__contacts-container{\n    margin-top: 100px;\n    padding: 0px 233px;\n}\n\n\n.containers{\n    padding: 15px 0px;\n    color: #F9E7C3;\n    font-size: 3rem;\n    display: flex;\n    justify-content: space-between;\n    border-bottom:2px solid #F9E7C3 ;\n}\n\n.contacts__footer-container{\nmargin-top: 53px\n}\n\n.contacts__footer-element {\n\n    display: block;\n    width: 100%;\n    z-index: -1;\n}",""]);const c=r},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="./",t.nc=void 0;var a=t(72),o=t.n(a),i=t(825),r=t.n(i),c=t(659),s=t.n(c),l=t(56),d=t.n(l),p=t(540),m=t.n(p),u=t(113),h=t.n(u),f=t(310),b={};b.styleTagTransform=h(),b.setAttributes=d(),b.insert=s().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=m(),o()(f.A,b),f.A&&f.A.locals&&f.A.locals;const x=t.p+"d5454af9433d62f58fe3.svg",C=t.p+"b725b00ff7c367523298.svg";function g(){const n=document.querySelector(".footer-container");n&&n.remove();const e=document.querySelector(".container"),t=document.createElement("div");t.classList.add("main"),e.appendChild(t);const a=document.createElement("div");a.classList.add("main__content"),t.appendChild(a);const o=document.createElement("h1");o.classList.add("main__title"),a.appendChild(o),o.innerHTML="HUNGRY? <br> ORDER FROM US!";const i=document.createElement("button");i.classList.add("main__button"),a.appendChild(i),i.textContent="ORDER NOW!";const r=document.createElement("img");r.src=C,r.alt="бурито",r.classList.add("burito"),t.appendChild(r);const c=document.createElement("img");c.src=x,c.alt="Фоновый элемент",c.classList.add("bacground-element"),t.appendChild(c)}var _=t(22),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=m(),o()(_.A,v),_.A&&_.A.locals&&_.A.locals;const L=t.p+"e856b8f84e37ee57b8d0.svg",y=t.p+"87f953a19d8a372f9ba0.svg";function E(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("main"),n.appendChild(e);const t=document.createElement("div");t.classList.add("main__menu-container"),e.appendChild(t);const a=document.createElement("div");a.classList.add("container_img"),t.appendChild(a);const o=document.createElement("div");o.classList.add("footer-container"),e.appendChild(o);let i=8;function r(){a.innerHTML="";for(let n=0;n<i;n++){const n=document.createElement("img");n.src=L,n.alt="БУРГЕР",n.classList.add("main__burger"),a.appendChild(n)}if(16===i){const n=document.createElement("img");n.src=y,n.alt="Подвал",n.classList.add("main__footer-element"),o.appendChild(n)}}r();const c=document.createElement("div");c.classList.add("main__container-burgers-bottom"),e.appendChild(c);const s=document.createElement("button");s.classList.add("main__burgers-bottom"),c.appendChild(s),s.textContent="More",s.addEventListener("click",(()=>{i+=8,r(),c.remove()}))}var w=t(816),A={};A.styleTagTransform=h(),A.setAttributes=d(),A.insert=s().bind(null,"head"),A.domAPI=r(),A.insertStyleElement=m(),o()(w.A,A),w.A&&w.A.locals&&w.A.locals;const k=t.p+"d9da7b368ee655ae3600.svg";var z=t(64),M={};M.styleTagTransform=h(),M.setAttributes=d(),M.insert=s().bind(null,"head"),M.domAPI=r(),M.insertStyleElement=m(),o()(z.A,M),z.A&&z.A.locals&&z.A.locals;const S=t.p+"5b0602cdb64f1030f943.svg",H=document.querySelector("#content");H.classList.add("content");const Z=document.createElement("header");Z.classList.add("header"),H.appendChild(Z);const q=document.createElement("div");q.classList.add("container"),Z.appendChild(q);const T=document.createElement("div");T.classList.add("header__container"),q.appendChild(T);const F=document.createElement("nav");F.classList.add("header__nav"),T.appendChild(F);const N=document.createElement("ul");N.classList.add("header__ul"),F.appendChild(N);const V=document.createElement("li");V.classList.add("item"),N.appendChild(V);const I=document.createElement("button");I.classList.add("link"),V.appendChild(I),I.textContent="Home";const O=document.createElement("li");O.classList.add("item"),N.appendChild(O);const P=document.createElement("button");P.classList.add("link"),O.appendChild(P),P.textContent="Menu";const j=document.createElement("li");j.classList.add("item"),N.appendChild(j);const R=document.createElement("button");R.classList.add("link"),j.appendChild(R),R.textContent="Contacts";const U=document.createElement("img");U.src=S,U.alt="Логотип",U.classList.add("logo"),T.appendChild(U);const B=document.createElement("div");B.classList.add("header__nav-container"),T.appendChild(B);const D=document.createElement("a");D.classList.add("element"),B.appendChild(D);const G=document.createElementNS("http://www.w3.org/2000/svg","svg");G.setAttribute("viewBox","0 0 25 25");const $=document.createElementNS("http://www.w3.org/2000/svg","path");$.setAttribute("d","M18.3472 16.1624C19.5827 14.4802 20.3125 12.4035 20.3125 10.1563C20.3125 4.54712 15.7655 0 10.1563 0C4.54712 0 0 4.54712 0 10.1563C0 15.7655 4.54712 20.3125 10.1563 20.3125C12.4041 20.3125 14.4813 19.5824 16.1638 18.3461L16.1624 18.3472C16.2085 18.4097 16.2597 18.4694 16.3163 18.526L22.3327 24.5424C22.9428 25.1525 23.9322 25.1525 24.5424 24.5424C25.1525 23.9322 25.1525 22.9428 24.5424 22.3327L18.526 16.3163C18.4694 16.2597 18.4097 16.2085 18.3472 16.1624ZM18.75 10.1563C18.75 14.9025 14.9025 18.75 10.1563 18.75C5.41006 18.75 1.5625 14.9025 1.5625 10.1563C1.5625 5.41006 5.41006 1.5625 10.1563 1.5625C14.9025 1.5625 18.75 5.41006 18.75 10.1563Z"),$.setAttribute("fill","#063A23"),G.appendChild($),D.appendChild(G);const J=document.createElement("a");J.classList.add("element"),B.appendChild(J);const K=document.createElementNS("http://www.w3.org/2000/svg","svg");K.setAttribute("viewBox","0 0 24 24");const W=document.createElementNS("http://www.w3.org/2000/svg","path");W.setAttribute("d","M12 12C15.3138 12 18 9.31371 18 6C18 2.68629 15.3138 0 12 0C8.68629 0 6 2.68629 6 6C6 9.31371 8.68629 12 12 12ZM16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6Z M24 22C24 24 22 24 22 24H2C2 24 0 24 0 22C0 20 2 14 12 14C22 14 24 20 24 22ZM22 21.9931C21.9972 21.4994 21.6924 20.021 20.3358 18.6642C19.0313 17.3596 16.5781 16 12 16C7.42176 16 4.96871 17.3596 3.6642 18.6642C2.3075 20.021 2.00284 21.4994 2 21.9931H22Z"),W.setAttribute("fill","#063A23"),K.appendChild(W),J.appendChild(K);const X=document.createElement("a");X.classList.add("element","element-corzina"),B.appendChild(X);const Y=document.createElementNS("http://www.w3.org/2000/svg","svg");Y.setAttribute("viewBox","0 0 27 25");const Q=document.createElementNS("http://www.w3.org/2000/svg","path");Q.setAttribute("d","M0 0.892857C0 0.39975 0.402944 0 0.899999 0H3.6C4.01297 0 4.37297 0.278839 4.47312 0.676304L5.2027 3.57143H26.1C26.3772 3.57143 26.6387 3.69811 26.8094 3.9148C26.98 4.13152 27.0403 4.41411 26.9732 4.68084L24.2732 15.3952C24.1729 15.7927 23.8129 16.0714 23.4 16.0714H7.19999C6.78702 16.0714 6.42702 15.7927 6.32687 15.3952L2.89729 1.78571H0.899999C0.402944 1.78571 0 1.38596 0 0.892857ZM5.6527 5.35714L6.55269 8.92857H8.99999V5.35714H5.6527ZM10.8 5.35714V8.92857H14.4V5.35714H10.8ZM16.2 5.35714V8.92857H19.8V5.35714H16.2ZM21.6 5.35714V8.92857H24.0473L24.9473 5.35714H21.6ZM23.5973 10.7143H21.6V14.2857H22.6973L23.5973 10.7143ZM19.8 10.7143H16.2V14.2857H19.8V10.7143ZM14.4 10.7143H10.8V14.2857H14.4V10.7143ZM8.99999 10.7143H7.00269L7.90269 14.2857H8.99999V10.7143ZM8.99999 19.6429C8.00589 19.6429 7.19999 20.4423 7.19999 21.4286C7.19999 22.4148 8.00589 23.2143 8.99999 23.2143C9.99409 23.2143 10.8 22.4148 10.8 21.4286C10.8 20.4423 9.99409 19.6429 8.99999 19.6429ZM5.39999 21.4286C5.39999 19.4561 7.01177 17.8571 8.99999 17.8571C10.9882 17.8571 12.6 19.4561 12.6 21.4286C12.6 23.4011 10.9882 25 8.99999 25C7.01177 25 5.39999 23.4011 5.39999 21.4286ZM21.6 19.6429C20.6058 19.6429 19.8 20.4423 19.8 21.4286C19.8 22.4148 20.6058 23.2143 21.6 23.2143C22.5941 23.2143 23.4 22.4148 23.4 21.4286C23.4 20.4423 22.5941 19.6429 21.6 19.6429ZM18 21.4286C18 19.4561 19.6117 17.8571 21.6 17.8571C23.5883 17.8571 25.2 19.4561 25.2 21.4286C25.2 23.4011 23.5883 25 21.6 25C19.6117 25 18 23.4011 18 21.4286Z"),Q.setAttribute("fill","#063A23"),Y.appendChild(Q),X.appendChild(Y),g(),V.addEventListener("click",(()=>{document.querySelector(".main").remove(),g(),document.body.classList.replace("body-menu","body-home"),document.querySelectorAll(".link-2").forEach((n=>{n.classList.replace("link-2","link")})),I.classList.replace("link","home"),P.classList.replace("menu","link"),R.classList.replace("contacts","link"),document.querySelectorAll(".element-2").forEach((n=>{n.classList.replace("element-2","element")}))})),O.addEventListener("click",(()=>{document.querySelector(".main").remove(),E(),document.body.classList.replace("body-home","body-menu"),P.classList.replace("link","menu"),I.classList.replace("home","link-2"),R.classList.replace("contacts","link-2"),document.querySelectorAll(".link").forEach((n=>{n.classList.replace("link","link-2")})),document.querySelectorAll(".element").forEach((n=>{n.classList.replace("element","element-2")}))})),j.addEventListener("click",(()=>{document.querySelector(".main").remove(),function(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("main"),n.appendChild(e);const t=document.createElement("div");t.classList.add("main__contacts-container"),e.appendChild(t);const a=document.createElement("div");a.classList.add("main__hours-container","containers"),t.appendChild(a);const o=document.createElement("p");o.classList.add("main__label"),a.appendChild(o),o.textContent="Pabah restaurant opening hours";const i=document.createElement("p");i.classList.add("main__Meaning"),a.appendChild(i),i.textContent="from 9:00 to 22:00";const r=document.createElement("div");r.classList.add("main__email-containe","containers"),t.appendChild(r);const c=document.createElement("p");c.classList.add("main__label"),r.appendChild(c),c.textContent="Email";const s=document.createElement("p");s.classList.add("main__Meaning"),r.appendChild(s),s.textContent="pabah@mail.ru";const l=document.createElement("div");l.classList.add("main__address-containe","containers"),t.appendChild(l);const d=document.createElement("p");d.classList.add("main__label"),l.appendChild(d),d.textContent="address";const p=document.createElement("p");p.classList.add("main__Meaning"),l.appendChild(p),p.textContent="Grozny, Kurortnaya street, 5";const m=document.createElement("div");m.classList.add("main__phone-containe","containers"),t.appendChild(m);const u=document.createElement("p");u.classList.add("main__label"),m.appendChild(u),m.textContent="phone";const h=document.createElement("p");h.classList.add("main__Meaning"),m.appendChild(h),h.textContent="8 (928) 229-04-04";const f=document.createElement("div");f.classList.add("contacts__footer-container"),e.appendChild(f);const b=document.createElement("img");b.src=k,b.alt="Подвал",b.classList.add("contacts__footer-element"),f.appendChild(b)}(),document.body.classList.replace("body-menu","body-home"),document.querySelectorAll(".link-2").forEach((n=>{n.classList.replace("link-2","link")})),I.classList.replace("home","link"),P.classList.replace("menu","link"),R.classList.replace("link","contacts"),document.querySelectorAll(".element-2").forEach((n=>{n.classList.replace("element-2","element")}))})),document.addEventListener("click",(n=>{n.target.classList.contains("main__button")&&(document.querySelector(".main").remove(),E(),document.body.classList.replace("body-home","body-menu"),P.classList.replace("link","menu"),I.classList.replace("home","link-2"),document.querySelectorAll(".link").forEach((n=>{n.classList.replace("link","link-2")})),document.querySelectorAll(".element").forEach((n=>{n.classList.replace("element","element-2")})))})),I.classList.replace("link","home"),document.body.classList.add("body-home"),function(){let n=0;X.addEventListener("click",(()=>t.classList.toggle("open-corzin")));const e=document.createElement("span");e.setAttribute("aria-label","Количество товаров в корзине");const t=document.createElement("div");t.classList.add("elementCorzina__corzin"),B.appendChild(t);const a=document.createElement("ul");a.classList.add("elementCorzina__list"),t.appendChild(a);const o=document.createElement("p");o.classList.add("elementCorzina__prise"),t.appendChild(o);const i=document.createElement("button");function r(){0!==n&&(X.appendChild(e),o.textContent=`Итого: ${140*n}р`)}i.classList.add("elementCorzina__button-corzin"),document.addEventListener("click",(c=>{if(c.target.classList.contains("main__burger")){n<99?(e.textContent=++n,e.classList.replace("elementCorzina__number-of-burgers-new","elementCorzina__number-of-burgers")):(e.textContent=`+${n}`,e.classList.replace("elementCorzina__number-of-burgers","elementCorzina__number-of-burgers-new")),n>0&&e.classList.add("elementCorzina__number-of-burgers");const c=document.createElement("li");c.classList.add("elementCorzina__product"),c.textContent="Бургер - 140р",a.appendChild(c);const s=document.createElement("span");s.classList.add("elementCorzina__product-deleted"),s.textContent="X",c.appendChild(s),t.appendChild(o),i.textContent="Order",t.appendChild(i),r()}})),document.addEventListener("click",(t=>{if(t.stopPropagation(),t.target.classList.contains("elementCorzina__product-deleted")){const a=t.target.closest(".elementCorzina__product");a&&(a.remove(),n--,r(),e.textContent=n>0?n:"",0===n&&(e.remove(),i.remove(),o.remove()))}}))}()})();