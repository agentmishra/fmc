var u=Object.defineProperty;var f=(l,e,t)=>e in l?u(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var d=(l,e,t)=>(f(l,typeof e!="symbol"?e+"":e,t),t);import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-z8i37x6G.js";import"./challenges-Uq9k6NgB.js";const p=document.getElementById("carousel"),I=document.getElementById("leftHandle"),y=document.getElementById("rightHandle"),o=document.getElementById("infinite"),n=document.getElementById("autoplay"),c=document.getElementById("autoplayInterval");class E{constructor(e,{images:t,leftHandle:s,rightHandle:i,isInfinite:a=!0,autoPlay:r=!1,autoPlayInterval:g=5e3,selected:m=0}){d(this,"swipeLeft",()=>{this.selected===0&&!this.isInfinite||(this.selected-=1,this.selected<0&&(this.selected+=this.images.length),this.setSelection())});d(this,"swipeRight",()=>{this.selected===this.images.length-1&&!this.isInfinite||(this.selected+=1,this.selected%=this.images.length,this.setSelection())});d(this,"dotSelect",e=>{e.target.classList.contains("dot")&&(this.selected=+e.target.dataset.index,this.setSelection())});this.carousel=e,this.images=t,this.leftHandle=s,this.rightHandle=i,this.selected=m,this.isInfinite=a,this.autoPlay=r,this.autoPlayInterval=g,this.placeImages(),this.dotHolder=this.createProgress(),this.addListeners(),this.setSelection(),this.startAutoPlay()}setInfinite(e){this.isInfinite=e,this.setHandles()}setAutoPlay(e,t){this.autoPlay=e,this.autoPlayInterval=t,this.startAutoPlay()}startAutoPlay(){this.autoPlay?(clearInterval(this.intervalId),this.intervalId=setInterval(this.swipeRight,this.autoPlayInterval)):clearInterval(this.intervalId)}addListeners(){this.leftHandle.addEventListener("click",this.swipeLeft),this.rightHandle.addEventListener("click",this.swipeRight),this.dotHolder.addEventListener("click",this.dotSelect)}setSelection(){var s;const e=this.carousel.querySelector(".img-holder"),t=this.dotHolder.querySelector(`[data-index='${this.selected}']`);e.style.transform=`translateX(${256*-this.selected}px)`,(s=this.dotHolder.querySelector(".selected"))==null||s.classList.remove("selected"),t.classList.add("selected"),this.setHandles()}setHandles(){this.isInfinite?this.disableHandles({isLeftDisabled:!1,isRightDisabled:!1}):this.disableHandles({isLeftDisabled:this.selected===0,isRightDisabled:this.selected===this.images.length-1})}disableHandles({isLeftDisabled:e,isRightDisabled:t}){this.leftHandle.disabled=e,this.rightHandle.disabled=t}placeImages(){const e=document.createElement("div");e.classList.add("img-frame");const t=document.createElement("div");t.classList.add("img-holder"),this.images.forEach(s=>{const i=document.createElement("img");i.src=`./${s}`,t.appendChild(i)}),e.appendChild(t),this.carousel.appendChild(e)}createProgress(){const e=document.createElement("ul");return e.classList.add("dot-holder"),this.images.forEach((t,s)=>{const i=document.createElement("li");i.role="presentation";const a=document.createElement("button");a.role="tab",a.dataset.index=s,a.classList.add("dot"),i.appendChild(a),e.appendChild(i)}),this.carousel.appendChild(e),e}}const h=new E(p,{images:["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"],selected:0,leftHandle:I,rightHandle:y,isInfinite:!1});o.addEventListener("change",()=>{h.setInfinite(o.checked)});n.addEventListener("change",()=>{c.disabled=!n.checked,h.setAutoPlay(n.checked,c.value)});c.addEventListener("change",()=>{h.setAutoPlay(n.checked,c.value)});
