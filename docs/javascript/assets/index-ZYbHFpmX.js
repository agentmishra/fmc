import"./challenges-JjuJeQgF.js";import"./navbar-W71TuEFY.js";const n=document.getElementById("userInput"),p=document.getElementById("chipTemplate"),h=document.querySelector(".chips-display"),o=document.querySelector("form");class c{constructor(e=""){const s=p.content.cloneNode(!0);this.chip=s.querySelector(".chip"),this.chipName=this.chip.querySelector(".chip-name"),this.chip.querySelector(".remove").addEventListener("click",this.onRemove),h.appendChild(this.chip),this.setName(e)}setName(e){this.chipName.textContent=e,e===""?this.chip.style.display="none":this.chip.style.display="inherit"}finalizeName(){this.chip.classList.add("finalized")}onRemove(e){e.target.parentElement.remove()}}let i=new c;n.addEventListener("input",t=>{i.setName(t.target.value.trim())});o.addEventListener("submit",t=>{n.value="",i.finalizeName(),i=new c,t.preventDefault()});
