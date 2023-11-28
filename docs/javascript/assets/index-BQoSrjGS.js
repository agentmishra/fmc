import"./challenges-JjuJeQgF.js";import"./navbar-W71TuEFY.js";const h=["JS","HTML","CSS","TS"],d=["React","Angular","Vue","Svelte"],r=document.querySelector(".left-section"),m=document.querySelector(".right-section"),a=document.querySelector(".move-all-left"),E=document.querySelector(".move-left"),u=document.querySelector(".move-right"),v=document.querySelector(".move-all-right");class S{constructor({leftSectionEl:i,rightSectionEl:t,moveAllLeftButton:e,moveLeftButton:l,moveRightButton:o,moveAllRightButton:n,leftItems:s,rightItems:c}){this.leftSectionEl=i,this.rightSectionEl=t,this.moveAllLeftButton=e,this.moveLeftButton=l,this.moveRightButton=o,this.moveAllRightButton=n,this.leftItems=s,this.rightItems=c,this.populate(),this.setState(),this.addEventListeners()}populate(){this.leftItems.forEach(i=>this.leftSectionEl.appendChild(this.createElement(i))),this.rightItems.forEach(i=>this.rightSectionEl.appendChild(this.createElement(i)))}createElement(i){const t=document.createElement("div"),e=document.createElement("input");e.type="checkbox";const l=document.createElement("span");return l.textContent=i,t.appendChild(e),t.appendChild(l),t}setState(){this.moveAllLeftButton.disabled=!this.rightSectionEl.childElementCount,this.moveLeftButton.disabled=!this.rightSectionEl.querySelector("input:checked"),this.moveRightButton.disabled=!this.leftSectionEl.querySelector("input:checked"),this.moveAllRightButton.disabled=!this.leftSectionEl.childElementCount}addEventListeners(){this.leftSectionEl.addEventListener("click",this.setState.bind(this)),this.rightSectionEl.addEventListener("click",this.setState.bind(this)),this.moveAllLeftButton.addEventListener("click",()=>{this.moveAllLeft(),this.setState()}),this.moveLeftButton.addEventListener("click",()=>{this.moveLeft(),this.setState()}),this.moveRightButton.addEventListener("click",()=>{this.moveRight(),this.setState()}),this.moveAllRightButton.addEventListener("click",()=>{this.moveAllRight(),this.setState()})}moveAllLeft(){this.rightSectionEl.querySelectorAll("div").forEach(t=>{const e=t;this.leftSectionEl.appendChild(e)})}moveLeft(){this.rightSectionEl.querySelectorAll("input:checked").forEach(t=>{const e=t.parentElement;t.checked=!1,this.leftSectionEl.appendChild(e)})}moveRight(){this.leftSectionEl.querySelectorAll("input:checked").forEach(t=>{const e=t.parentElement;t.checked=!1,this.rightSectionEl.appendChild(e)})}moveAllRight(){this.leftSectionEl.querySelectorAll("div").forEach(t=>{const e=t;this.rightSectionEl.appendChild(e)})}}new S({leftSectionEl:r,rightSectionEl:m,moveAllLeftButton:a,moveLeftButton:E,moveRightButton:u,moveAllRightButton:v,leftItems:h,rightItems:d});
