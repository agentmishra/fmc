import"./core-AU6WUMqB.js";import"./header-N3iMtbIJ.js";import"./challenges-Uq9k6NgB.js";import"./navbar-z2ZmOVZN.js";const c=document.getElementById("increment"),o=document.getElementById("decrement"),e=document.getElementById("changeBy"),r=document.getElementById("reset"),t=document.querySelector(".value");c.addEventListener("click",()=>{t.textContent=+t.textContent+e.valueAsNumber});o.addEventListener("click",()=>{t.textContent=parseInt(t.textContent)-parseInt(e.value)});e.addEventListener("change",()=>{const n=e.valueAsNumber;(Number.isNaN(n)||n<0)&&(e.value=1)});r.addEventListener("click",()=>{t.textContent=0});