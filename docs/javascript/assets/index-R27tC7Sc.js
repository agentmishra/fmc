import"./challenges-JjuJeQgF.js";import"./header-ldSOQjOD.js";const a=document.querySelector("button"),c=document.querySelectorAll(".options button")[0],u=document.querySelectorAll(".options button")[1],l=document.querySelectorAll(".options button")[2],s=document.querySelectorAll(".options button")[3];a.addEventListener("click",d);c.addEventListener("click",f);u.addEventListener("click",p);l.addEventListener("click",m);s.addEventListener("click",g);const r="1234";let o=!1,n=1e3;function d(){document.getElementById("pin").value===r?(o=!0,e("Login successful.")):(o=!1,e("Invalid PIN. Please try again."))}function f(){if(!o){e("Please login first.");return}e(`Your balance is $${n}`)}function p(){if(!o){e("Please login first.");return}const t=parseFloat(prompt("Enter the amount to deposit:"));!isNaN(t)&&t>0?(n+=t,e(`Deposited $${t}. Your new balance is $${n}`)):e("Invalid amount. Please try again.")}function m(){if(!o){e("Please login first.");return}const t=parseFloat(prompt("Enter the amount to withdraw:"));!isNaN(t)&&t>0&&t<=n?(n-=t,e(`Withdrawn $${t}. Your new balance is $${n}`)):e("Invalid amount or insufficient balance. Please try again.")}function g(){o=!1,e("Logged out successfully.")}function e(t){const i=document.getElementById("output");i.textContent=t}
