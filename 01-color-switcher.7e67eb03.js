const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");t.disabled=!1;let d=null;e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,d=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.addEventListener("click",(()=>{clearInterval(d),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.7e67eb03.js.map
