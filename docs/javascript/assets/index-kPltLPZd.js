import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-z8i37x6G.js";import"./challenges-Uq9k6NgB.js";const s=document.querySelectorAll(".accordion-item"),t=document.getElementById("multiple-open-checkbox");let n=!1;const l=(e,o)=>{e.classList.remove("open"),o.classList.remove("open"),e.style.maxHeight=null},d=(e,o)=>{e.style.maxHeight=e.scrollHeight+"px",e.classList.add("open"),o.classList.add("open")},i=()=>{s.forEach(e=>{const o=e.querySelector(".accordion-panel"),c=e.querySelector(".accordion-arrow");l(o,c)})};t.addEventListener("change",function(){t.checked?n=!0:(n=!1,i())});s.forEach(e=>{const o=e.querySelector(".accordion-header"),c=e.querySelector(".accordion-panel"),r=e.querySelector(".accordion-arrow");o.addEventListener("click",()=>{const a=c.classList.contains("open");n||i(),a?l(c,r):d(c,r)})});
