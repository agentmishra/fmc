import"./core-AU6WUMqB.js";import"./header-N3iMtbIJ.js";import"./challenges-Uq9k6NgB.js";import"./navbar-z2ZmOVZN.js";const i=["map","filter"];function c(t,e){this.dropdown=p(t),this.input=s(e),this.output=m()}c.prototype.setOutput=function(t){return this.output.value=t,t};c.prototype.evaluate=function(t){const e=Function(`return function func(value, index, array){ return ${this.input.value} }`);return t[this.dropdown.value](e())};function p(t=i[0]){const e=document.createElement("select");return i.forEach(u=>{const n=document.createElement("option");n.value=u,n.textContent=u,e.appendChild(n)}),e.value=t,e}function s(t){const e=document.createElement("input");return e.value=t??"value",e}function m(){return document.createElement("output")}const l=[],v=document.getElementById("methodList");function a(t,e,u){const n=new c(e,u),o=document.createElement("div"),r=document.createElement("div");r.appendChild(n.dropdown),r.appendChild(n.input);const d=document.createElement("div");d.appendChild(n.output),o.appendChild(r),o.appendChild(d),v.appendChild(o),l.push(n)}function h(){const t=E(document.querySelector('[name="array_values"]').value);l.reduce((e,u)=>{const n=u.evaluate(e);return u.setOutput(n),n},t)}function E(t){return t.split(",")}document.getElementById("add").addEventListener("click",a);document.getElementById("evaluate").addEventListener("click",h);a(null,"filter","index > 3");a(null,"map","value / 5");
