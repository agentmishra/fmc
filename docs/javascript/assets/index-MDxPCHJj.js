import"./core-AU6WUMqB.js";import"./header-N3iMtbIJ.js";import"./challenges-Uq9k6NgB.js";import"./navbar-z2ZmOVZN.js";function u(e,t){const n=document.createElement(e);for(let s in t)n.setAttribute(s,t[s]);return n}function L(e,t,n=0){const s=document.createDocumentFragment();for(let l=n;l<e+n;l++)s.appendChild(t(l));return s}const f=5,c=["😢","😞","😐","😀","😎"];let r=0,d=0,m=0;const i=document.getElementById("starContainer"),y=document.getElementById("smileyContainer");i.appendChild(L(f,e=>u("button",{class:"star star-empty","data-index":e}),1));const a=i.querySelectorAll(".star");i.addEventListener("mouseover",p);i.addEventListener("mouseleave",v);i.addEventListener("click",g);function o(e){for(let t=d;t<e;t++)a[t].classList.add("star-filled"),a[t].classList.remove("star-empty");for(let t=e;t<m;t++)a[t].classList.remove("star-filled"),a[t].classList.add("star-empty");d=e,m=e}function g(e){const t=e.target;t.classList.contains("star")&&(r=+t.dataset.index,o(r),C(r))}function p(e){const t=e.target;if(t.classList.contains("star")){const n=t.dataset.index;o(+n)}}function v(){o(+r)}function C(e){const t=Math.ceil(c.length*e/f)-1;y.textContent=c[t]}