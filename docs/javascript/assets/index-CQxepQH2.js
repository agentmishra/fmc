import"./core-AU6WUMqB.js";import"./header-Kz0wwp-0.js";import"./challenges-Uq9k6NgB.js";import"./navbar-e6RuwTU2.js";const m=document.querySelector(".time-left"),L=document.getElementById("container"),g=document.getElementById("next-button"),f=document.querySelector(".number-of-question"),a=document.getElementById("display-container"),p=document.querySelector(".score-container"),C=document.getElementById("restart"),I=document.getElementById("user-score"),q=document.querySelector(".start-screen"),M=document.getElementById("start-button");let i=0,h=0,c=10,d,s=[];fetch("questions.json").then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{s=H(e,10),u()}).catch(e=>{console.error("Error loading questions:",e)});function H(e,t){return e.sort(()=>Math.random()-.5).slice(0,t)}function v(){i+=1,clearInterval(d),i===s.length?(a.classList.add("hide"),p.classList.remove("hide"),I.innerHTML="Your score is "+h+" out of "+s.length):(c=10,m.innerHTML=`${c}s`,f.innerHTML=i+1+" of "+s.length+" Question",E(i),y())}C.addEventListener("click",()=>{u(),a.classList.remove("hide"),p.classList.add("hide")});g.addEventListener("click",v);const y=()=>{d=setInterval(()=>{c--,m.innerHTML=`${c}s`,c===0&&(clearInterval(d),v())},1e3)},E=e=>{const t=document.querySelectorAll(".container-mid");e<s.length&&(t.forEach(n=>{n.classList.add("hide")}),t[e].classList.remove("hide"))};function S(){for(const e of s){const t=document.createElement("div");t.classList.add("container-mid","hide"),f.innerHTML="1 of "+s.length+" Question";const n=document.createElement("p");n.classList.add("question"),n.innerHTML=e.question,t.appendChild(n);for(let r=0;r<e.options.length;r++){const o=document.createElement("button");o.classList.add("option-div"),o.textContent=e.options[r],o.onclick=()=>T(o,e),t.appendChild(o)}L.appendChild(t)}}function T(e,t){const n=e.textContent,r=t.correct,o=e.parentElement.querySelectorAll(".option-div");if(n===r)e.classList.add("correct"),h++;else{e.classList.add("incorrect");for(const l of o)l.textContent===r&&l.classList.add("correct")}clearInterval(d),o.forEach(l=>{l.disabled=!0})}function u(){L.innerHTML="",i=0,h=0,c=10,d&&clearInterval(d),m.innerHTML=`${c}s`,f.innerHTML=i+1+" of "+s.length+" Question",S(),E(i),y()}M.addEventListener("click",()=>{q.classList.add("hide"),a.classList.remove("hide"),u()});window.onload=()=>{q.classList.remove("hide"),a.classList.add("hide")};u();