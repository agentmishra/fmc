import"./core-AU6WUMqB.js";import"./header-Kz0wwp-0.js";import"./challenges-Uq9k6NgB.js";import"./navbar-e6RuwTU2.js";const n=document.querySelectorAll(".piece");let e=null;function c(r){r.currentTarget.classList.add("dragging"),e=r.currentTarget}function i(r){r.preventDefault()}function u(r){r.preventDefault();const t=r.currentTarget,d=e.dataset.order;e.dataset.order=t.dataset.order,t.dataset.order=d;const o=Array.from(n).sort((a,l)=>a.dataset.order-l.dataset.order),s=document.querySelector(".puzzle-container");o.forEach(a=>s.appendChild(a)),e.classList.remove("dragging"),e=null}function g(r){var t;(t=e==null?void 0:e.classList)==null||t.remove("dragging"),e=null}n.forEach(r=>{r.addEventListener("dragstart",c),r.addEventListener("dragover",i),r.addEventListener("drop",u),r.addEventListener("dragend",g)});