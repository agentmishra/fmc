import"./core-AU6WUMqB.js";import"./header-Kz0wwp-0.js";import"./challenges-Uq9k6NgB.js";import"./navbar-e6RuwTU2.js";const o=document.getElementById("bmiForm");o.addEventListener("submit",function(n){n.preventDefault();const t=parseFloat(document.getElementById("height").value),e=parseFloat(document.getElementById("weight").value);if(!isNaN(t)&&!isNaN(e)){const i=l(t,e);a(i)}else alert("Please enter valid height and weight values.")});function l(n,t){const e=n/100;return(t/(e*e)).toFixed(2)}function a(n){const t=document.getElementById("result"),e=document.getElementById("bmiValue");e.textContent=n,t.style.display="block"}
