(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var o=e.g.document;if(!t&&o&&(o.currentScript&&(t=o.currentScript.src),!t)){var i=o.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!t;)t=i[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"9dcfc58552a3c360119e.jpg";function o(){let e=document.querySelector("#content"),o=function(){let e=document.createElement("header"),t=document.createElement("h1"),o=function(){let e=document.createElement("nav"),t=document.createElement("ul"),o=document.createElement("li"),i=document.createElement("li"),r=document.createElement("li"),n=document.createElement("a"),u=document.createElement("a"),a=document.createElement("a");return o.id="home",i.id="dishes",r.id="about",n.textContent="link 1",u.textContent="link 2",a.textContent="link 3",o.appendChild(n),i.appendChild(u),r.appendChild(a),t.appendChild(o),t.appendChild(i),t.appendChild(r),e.appendChild(t),e}();return t.textContent="Page Name",e.appendChild(t),e.appendChild(o),e}(),i=function(){let e=document.createElement("main"),o=document.createElement("p"),i=document.createElement("p"),r=document.createElement("p"),n=new Image;return n.src=t,o.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque.",i.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque.",r.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque.",e.appendChild(n),e.appendChild(o),e.appendChild(i),e.appendChild(r),e}(),r=function(){let e=document.createElement("footer"),t=document.createElement("div"),o=document.createElement("div"),i=document.createElement("a"),r=document.createElement("a"),n=document.createElement("a");return i.textContent="alejandro83457",i.href="https://github.com/alejandro83457",o.textContent="Made by ",o.appendChild(i),r.textContent="Jigar Panchal",r.href="https://unsplash.com/@brave4_heart?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",n.textContent="Unsplash",n.href="https://unsplash.com/photos/a-black-and-red-background-with-wavy-lines-iV8qibFoGMQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",t.textContent="Photo by ",t.appendChild(r),e.appendChild(t),e.appendChild(o),e}();e.appendChild(o),e.appendChild(i),e.appendChild(r)}o();let i=document.querySelector("#content"),r=document.querySelector("#home"),n=document.querySelector("#dishes"),u=document.querySelector("#about");function a(){for(;i.firstChild;)i.removeChild(i.firstChild)}r.addEventListener("click",(e=>{console.log("Home clicked"),a(),o()})),n.addEventListener("click",(e=>{console.log("Dishes clicked"),a()})),u.addEventListener("click",(()=>{console.log("About clicked"),a()}))})();