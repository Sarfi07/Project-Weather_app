(()=>{"use strict";var n={772:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(537),o=t.n(r),i=t(645),A=t.n(i)()(o());A.push([n.id,'* {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n}\n\nbody {\n    background-color: #faf0ca;\n}\n#content {\n    border-collapse: collapse;\n    border-radius: 10px;\n    height: 90vh;\n    width: 40vw;\n    margin: auto;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n\n    display: grid;\n    /* grid-template-columns: repeat(2, 1fr); */\n    grid-template-rows: .5fr 5fr;\n\n\n    header {\n        grid-row: 1 / 2;\n        grid-column: 1 / -1;\n        margin: auto;\n        color: #fff;\n        margin-bottom: 2rem;\n\n        #cityInput {\n            height: 2rem;\n            width: 50%;\n            margin-right: 1rem;\n            padding-left: 1rem;\n            font-size: 1.25rem;\n            border-radius: 10px;\n            outline: none;\n            border: 2px solid #2f3c7e\n        }\n\n        #cityInputBtn {\n            border-radius: 1rem;\n            border: none;\n            background-color: #2f3c7e;\n            font-size: 1rem;\n            padding: .5rem 1rem;\n            color: white;\n        }\n        #cityInputBtn:focus {\n            outline: 5px solid #5e72d6;\n\n        }\n    }\n\n    main {\n        background-color: white;\n        border-radius: 1rem;\n        grid-row: 2 / -1;\n        grid-column: 1 / -1;\n        \n        display: grid;\n        grid-template-rows: .75fr .75fr .25fr;\n        grid-template-columns: repeat(2, 1fr);\n\n        #heroSec {\n            grid-column: 1 / 2;\n            grid-row: 1 / 2;\n\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            grid-template-rows: 1fr 2fr 1fr;\n\n            #cityName {\n                grid-column: 1 / -1;\n                grid-row: 1 / 2;\n                text-align: center;\n                font-size: 1.25rem;\n                align-self: center;\n            }\n\n            #weatherPngSec {\n                grid-row: 2 / -1;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                align-self: center;\n                img {\n                    height: 100%;\n                }\n            }\n\n            #weatherValue {\n                grid-column: 2 / -1;\n                grid-row: 2 / -2;\n                align-self: center;\n                font-size: 7rem;\n                padding-right: 2rem;\n            }\n            #weatherValue::after {\n                content: "°";\n                font: 1rem;\n            }\n            #weatherText {\n                font-size: 1rem;\n            }\n        }\n\n        #humiditySec {\n            grid-column: 1 / 2;\n            grid-row: 2 / 3;\n        }\n\n        #precipitationSec {\n            grid-column: 1 / -1;\n            grid-row: 3 / 4;\n        }\n\n        #feelslikeSec {\n            grid-column: 2 / -1;\n            grid-row: 1 / 2;\n        }\n\n        #windSec {\n            grid-column: 2 / -1;\n            grid-row: 2 / 3;\n        }\n\n    }\n    main > section {\n        border: 2px solid #2f3c7e;\n        border-radius: 1rem;\n        display: grid;\n        grid-template-rows: 3fr 1fr;\n\n        .value {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 4rem;\n        }\n        .secLabel {\n            grid-row: 2 / -1;\n            text-align: center;\n        }\n    }\n}\n\n\n#loaderDiv {\n    display: flex;\n    justify-content: center;\n    align-items: center;   \n}\n\n\n#loader {\n    content: "";\n    border: 1rem solid white;\n    border-top: 1rem solid #2f3c7e;\n    border-radius: 50%;\n    /* transform: border-top-color 300ms ease-in-out; */\n    animation: rotateLoader 2s linear infinite;\n    height: 5rem;\n    width: 5rem;\n\n\n}\n\n\n@keyframes rotateLoader {\n\n    0% {\n        transform: rotate(0turn);\n    }\n    100% {\n        transform: rotate(1turn);\n    }\n    \n}',"",{version:3,sources:["webpack://./src/styles/styles.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;;IAEpB,aAAa;IACb,2CAA2C;IAC3C,4BAA4B;;;IAG5B;QACI,eAAe;QACf,mBAAmB;QACnB,YAAY;QACZ,WAAW;QACX,mBAAmB;;QAEnB;YACI,YAAY;YACZ,UAAU;YACV,kBAAkB;YAClB,kBAAkB;YAClB,kBAAkB;YAClB,mBAAmB;YACnB,aAAa;YACb;QACJ;;QAEA;YACI,mBAAmB;YACnB,YAAY;YACZ,yBAAyB;YACzB,eAAe;YACf,mBAAmB;YACnB,YAAY;QAChB;QACA;YACI,0BAA0B;;QAE9B;IACJ;;IAEA;QACI,uBAAuB;QACvB,mBAAmB;QACnB,gBAAgB;QAChB,mBAAmB;;QAEnB,aAAa;QACb,qCAAqC;QACrC,qCAAqC;;QAErC;YACI,kBAAkB;YAClB,eAAe;;YAEf,aAAa;YACb,qCAAqC;YACrC,+BAA+B;;YAE/B;gBACI,mBAAmB;gBACnB,eAAe;gBACf,kBAAkB;gBAClB,kBAAkB;gBAClB,kBAAkB;YACtB;;YAEA;gBACI,gBAAgB;gBAChB,aAAa;gBACb,uBAAuB;gBACvB,mBAAmB;gBACnB,kBAAkB;gBAClB;oBACI,YAAY;gBAChB;YACJ;;YAEA;gBACI,mBAAmB;gBACnB,gBAAgB;gBAChB,kBAAkB;gBAClB,eAAe;gBACf,mBAAmB;YACvB;YACA;gBACI,YAAY;gBACZ,UAAU;YACd;YACA;gBACI,eAAe;YACnB;QACJ;;QAEA;YACI,kBAAkB;YAClB,eAAe;QACnB;;QAEA;YACI,mBAAmB;YACnB,eAAe;QACnB;;QAEA;YACI,mBAAmB;YACnB,eAAe;QACnB;;QAEA;YACI,mBAAmB;YACnB,eAAe;QACnB;;IAEJ;IACA;QACI,yBAAyB;QACzB,mBAAmB;QACnB,aAAa;QACb,2BAA2B;;QAE3B;YACI,aAAa;YACb,uBAAuB;YACvB,mBAAmB;YACnB,eAAe;QACnB;QACA;YACI,gBAAgB;YAChB,kBAAkB;QACtB;IACJ;AACJ;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;;AAGA;IACI,WAAW;IACX,wBAAwB;IACxB,8BAA8B;IAC9B,kBAAkB;IAClB,mDAAmD;IACnD,0CAA0C;IAC1C,YAAY;IACZ,WAAW;;;AAGf;;;AAGA;;IAEI;QACI,wBAAwB;IAC5B;IACA;QACI,wBAAwB;IAC5B;;AAEJ",sourcesContent:['* {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n}\n\nbody {\n    background-color: #faf0ca;\n}\n#content {\n    border-collapse: collapse;\n    border-radius: 10px;\n    height: 90vh;\n    width: 40vw;\n    margin: auto;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n\n    display: grid;\n    /* grid-template-columns: repeat(2, 1fr); */\n    grid-template-rows: .5fr 5fr;\n\n\n    header {\n        grid-row: 1 / 2;\n        grid-column: 1 / -1;\n        margin: auto;\n        color: #fff;\n        margin-bottom: 2rem;\n\n        #cityInput {\n            height: 2rem;\n            width: 50%;\n            margin-right: 1rem;\n            padding-left: 1rem;\n            font-size: 1.25rem;\n            border-radius: 10px;\n            outline: none;\n            border: 2px solid #2f3c7e\n        }\n\n        #cityInputBtn {\n            border-radius: 1rem;\n            border: none;\n            background-color: #2f3c7e;\n            font-size: 1rem;\n            padding: .5rem 1rem;\n            color: white;\n        }\n        #cityInputBtn:focus {\n            outline: 5px solid #5e72d6;\n\n        }\n    }\n\n    main {\n        background-color: white;\n        border-radius: 1rem;\n        grid-row: 2 / -1;\n        grid-column: 1 / -1;\n        \n        display: grid;\n        grid-template-rows: .75fr .75fr .25fr;\n        grid-template-columns: repeat(2, 1fr);\n\n        #heroSec {\n            grid-column: 1 / 2;\n            grid-row: 1 / 2;\n\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            grid-template-rows: 1fr 2fr 1fr;\n\n            #cityName {\n                grid-column: 1 / -1;\n                grid-row: 1 / 2;\n                text-align: center;\n                font-size: 1.25rem;\n                align-self: center;\n            }\n\n            #weatherPngSec {\n                grid-row: 2 / -1;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                align-self: center;\n                img {\n                    height: 100%;\n                }\n            }\n\n            #weatherValue {\n                grid-column: 2 / -1;\n                grid-row: 2 / -2;\n                align-self: center;\n                font-size: 7rem;\n                padding-right: 2rem;\n            }\n            #weatherValue::after {\n                content: "°";\n                font: 1rem;\n            }\n            #weatherText {\n                font-size: 1rem;\n            }\n        }\n\n        #humiditySec {\n            grid-column: 1 / 2;\n            grid-row: 2 / 3;\n        }\n\n        #precipitationSec {\n            grid-column: 1 / -1;\n            grid-row: 3 / 4;\n        }\n\n        #feelslikeSec {\n            grid-column: 2 / -1;\n            grid-row: 1 / 2;\n        }\n\n        #windSec {\n            grid-column: 2 / -1;\n            grid-row: 2 / 3;\n        }\n\n    }\n    main > section {\n        border: 2px solid #2f3c7e;\n        border-radius: 1rem;\n        display: grid;\n        grid-template-rows: 3fr 1fr;\n\n        .value {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 4rem;\n        }\n        .secLabel {\n            grid-row: 2 / -1;\n            text-align: center;\n        }\n    }\n}\n\n\n#loaderDiv {\n    display: flex;\n    justify-content: center;\n    align-items: center;   \n}\n\n\n#loader {\n    content: "";\n    border: 1rem solid white;\n    border-top: 1rem solid #2f3c7e;\n    border-radius: 50%;\n    /* transform: border-top-color 300ms ease-in-out; */\n    animation: rotateLoader 2s linear infinite;\n    height: 5rem;\n    width: 5rem;\n\n\n}\n\n\n@keyframes rotateLoader {\n\n    0% {\n        transform: rotate(0turn);\n    }\n    100% {\n        transform: rotate(1turn);\n    }\n    \n}'],sourceRoot:""}]);const a=A},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(A[c]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);r&&A[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},A=[],a=0;a<n.length;a++){var c=n[a],d=r.base?c[0]+r.base:c[0],s=i[d]||0,l="".concat(d," ").concat(s);i[d]=s+1;var m=t(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var B=o(u,r);r.byIndex=a,e.splice(a,0,{identifier:l,updater:B,references:1})}A.push(l)}return A}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var A=0;A<i.length;A++){var a=t(i[A]);e[a].references--}for(var c=r(n,o),d=0;d<i.length;d++){var s=t(i[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),A=t.n(i),a=t(565),c=t.n(a),d=t(216),s=t.n(d),l=t(589),m=t.n(l),u=t(772),B={};B.styleTagTransform=m(),B.setAttributes=c(),B.insert=A().bind(null,"head"),B.domAPI=o(),B.insertStyleElement=s(),e()(u.Z,B),u.Z&&u.Z.locals&&u.Z.locals;async function f(n="London"){const e=await fetch(`https://api.weatherapi.com/v1/current.json?key=53f8fe5738774873a1782717233012&q=${n}`);return await e.json()}function g(n){const e=document.getElementById("cityName"),t=document.getElementById("weatherPng"),r=document.getElementById("weatherValue"),o=document.getElementById("humidity"),i=document.getElementById("precipitation"),A=document.getElementById("feelslike"),a=document.getElementById("weatherText"),c=document.querySelector("#wind");e.textContent=`${n.location.name}, ${n.location.country}`,t.src=n.current.condition.icon,r.textContent=`${n.current.temp_c}`,o.textContent=n.current.humidity,i.textContent=n.current.precip_in,A.textContent=n.current.feelslike_c,c.textContent=n.current.wind_kph,a.textContent=n.current.condition.text}function p(){const n=document.querySelector("main");document.getElementById("loaderDiv").style.display="flex",n.style.display="none"}function C(){const n=document.querySelector("main");document.getElementById("loaderDiv").style.display="none",n.style.display="grid"}p(),f().then((n=>{setTimeout((()=>{C(),g(n)}),1e3)})).catch((n=>alert(n.message))),function(){const n=document.getElementById("cityInput");document.getElementById("cityInputBtn").addEventListener("click",(()=>{p(),f(n.value).then((n=>{setTimeout((()=>{try{C(),g(n)}catch(n){alert("No location found")}}),1e3)})).catch((n=>alert(n.message)))}))}()})()})();
//# sourceMappingURL=index.bundle.js.map