import"./challenges-JjuJeQgF.js";import"./header-ldSOQjOD.js";const u=new Map([["w","sounds/tom-1.mp3"],["a","sounds/tom-2.mp3"],["s","sounds/tom-3.mp3"],["d","sounds/tom-4.mp3"],["j","sounds/snare.mp3"],["k","sounds/crash.mp3"],["l","sounds/kick-bass.mp3"]]),d=document.querySelectorAll(".drum").length;for(let s=0;s<d;s++)document.querySelectorAll(".drum")[s].addEventListener("click",function(){const e=this.textContent;n(e),o(e)});document.addEventListener("keypress",function(s){n(s.key),o(s.key)});function n(s){new Audio(u.get(s)).play()}function o(s){const e=document.querySelector(".pressed");e&&e.classList.remove("pressed");const t=document.querySelector("."+s);t==null||t.classList.add("pressed")}
