import"./core-AU6WUMqB.js";import"./header-Kz0wwp-0.js";import"./challenges-Uq9k6NgB.js";import"./navbar-e6RuwTU2.js";const s=document.getElementById("main__container"),l=document.getElementById("loading__container"),r=document.getElementById("submitForm");function u(){return"https://opentdb.com/api.php?amount=1&type=multiple"}function m(t){for(let e=1;e<=t.length;e++){const n=document.getElementById(`choice_${e}`),o=document.getElementById(`choice${e}`);n.value=t[e-1],o.innerHTML=t[e-1]}}function y(t){const{question:e,correct_answer:n,incorrect_answers:o}=t;document.getElementById("question").innerHTML=e;const c=p(n,o);m(c)}function p(t,e){const n=[t,...e];for(let o=n.length-1;o>0;o--){const c=Math.floor(Math.random()*(o+1));[n[o],n[c]]=[n[c],n[o]]}return n}async function f(t){s.style.display="none",l.style.display="block";try{const o=(await(await fetch(t)).json()).results[0];return y(o),o.correct_answer}catch(e){console.error(e)}finally{s.style.display="block",l.style.display="none"}}async function d(){const t=u(),e=await f(t);g(e)}function g(t){r.addEventListener("submit",e=>{e.preventDefault();const n=document.querySelector('input[name="choices"]:checked');if(n){const o=n.value,c=document.querySelector(`input[value="${t}"]`);c&&o===c.value?(a("correct"),setTimeout(()=>{i(),r.reset(),d()},1e3)):(a("wrong"),setTimeout(()=>{i(),r.reset()},1e3))}else alert("Please select an answer")})}document.addEventListener("DOMContentLoaded",d);function a(t){const e=document.getElementById(`${t}__alert`);e.style.display="inline-block"}function i(){const t=document.getElementById("correct__alert"),e=document.getElementById("wrong__alert");t.style.display="none",e.style.display="none"}
