import"./challenges-JjuJeQgF.js";import"./navbar-W71TuEFY.js";const d=document.getElementById("json-holder"),u=document.querySelector(".json-template");document.querySelector(".get-json");const h=document.querySelector(".get-json-button"),m=document.querySelector("output");class l{constructor(){const e=u.content.cloneNode(!0);this.container=e.querySelector(".json-container"),this.valueEl=e.querySelector(".value"),this.addEl=e.querySelector(".add"),this.removeEl=e.querySelector(".remove"),this.arrowEl=e.querySelector(".arrow"),this.addListeners(),this.object={}}addListeners(){this.addEl.addEventListener("click",this.add.bind(this)),this.removeEl.addEventListener("click",this.remove.bind(this)),this.arrowEl.addEventListener("click",this.toggle.bind(this))}add(){this.valueEl.style.display="none";const e=document.createElement("div");e.classList.add("sub-item");const t=new l;e.appendChild(t.container),this.container.appendChild(e),this.arrowEl.classList.remove("hide"),this.arrowEl.classList.add("open")}remove(){const e=this.container.parentElement,t=e.parentElement;e.remove(),t.querySelector(".sub-item")||(t.querySelector(".value").style.display="inline",t.querySelector(".arrow").classList.remove("open"),t.querySelector(".arrow").classList.add("hide"))}toggle(){this.arrowEl.classList.toggle("open")}getJSON(e=this.container){const t={},n=e.querySelector(".key"),r=e.querySelector(".key + .value");if(n&&n.value)if(r.style.display!=="none")t[n.value]=r.value;else{let o=e.querySelector(".sub-item");const i=[o];for(;o.nextElementSibling;)i.push(o.nextElementSibling),o=o.nextElementSibling;let s={};i.forEach(a=>{s={...s,...this.getJSON(a)}}),Object.keys(s).length===0?t[n.value]=null:t[n.value]=s}return t}}const c=new l;d.appendChild(c.container);h.addEventListener("click",()=>m.textContent=JSON.stringify(c.getJSON(),null,2));
