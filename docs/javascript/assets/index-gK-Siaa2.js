import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-z8i37x6G.js";import"./challenges-Uq9k6NgB.js";const o=document.getElementById("progress");let e=!1,i;const a=document.querySelector(".progress-controller"),l=document.getElementById("start"),r=document.getElementById("stop");document.getElementById("reset");r.disabled=!0;a.addEventListener("click",u);function u(t){const s=t.target.id;s==="start"&&!e?m():s==="stop"&&e?n():s==="reset"&&(n(),c(0))}function n(){e=!1,g(),l.disabled=!1,r.disabled=!0}function m(){e=!0,d(),l.disabled=!0,r.disabled=!1}function d(){let t=.1+f();t<=100&&(c(t),i=requestAnimationFrame(d))}function g(){cancelAnimationFrame(i)}function f(){return+o.style.width.split("%")[0]}function c(t){o.style.width=t+"%"}