import"./challenges-JjuJeQgF.js";import"./navbar-W71TuEFY.js";const o=document.getElementById("password"),r=document.getElementById("progressBar"),i=document.getElementById("strength"),f=document.getElementById("lc"),h=document.getElementById("uc"),E=document.getElementById("num"),p=document.getElementById("sym"),B=document.getElementById("chars"),c=[{difficulty:"Weak",color:"red"},{difficulty:"Medium",color:"orange"},{difficulty:"Strong",color:"green"}],l=/\d/,u=/[A-Z]/,a=/[a-z]/,m=/[^A-Za-z0-9]/;function I(t){return t>8?c[2]:t>5?c[1]:c[0]}function w(t){let e=0;return t.length>3&&(e=Math.min(6,Math.floor(t.length/3)),e+=l.test(t)+u.test(t)+a.test(t)+m.test(t)),e}function C(t,e,s,n){i.textContent=t.difficulty,r.style.backgroundColor=t.color,r.style.width=e*10+"%",f.className=n.lc,h.className=n.uc,E.className=n.num,p.className=n.sym,B.textContent=s}o.addEventListener("input",function(){const t=o.value,e=w(o.value),s=I(e),[n,d,g,y]=[a.test(t),u.test(t),l.test(t),m.test(t)];C(s,e,t.length,{lc:n,uc:d,num:g,sym:y})});
