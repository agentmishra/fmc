var E=Object.defineProperty;var K=(t,e,n)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var y=(t,e,n)=>(K(t,typeof e!="symbol"?e+"":e,n),n),q=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var a=(t,e,n)=>(q(t,e,"read from private field"),n?n.call(t):e.get(t)),o=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};import"./core-AU6WUMqB.js";import"./header-N3iMtbIJ.js";import"./challenges-Uq9k6NgB.js";import"./navbar-z2ZmOVZN.js";var d,c,m,u,r;class z{constructor(e,n){o(this,d,"1234567890".split(""));o(this,c,"qwertyuiop".split(""));o(this,m,"asdfghjkl".split(""));o(this,u,"zxcvbnm".split(""));o(this,r,new Map);this.el=e,this.callback=n,this.populateKeys(),this.addKeyListener(),this.addKeyboardListener()}populateKeys(){[a(this,d),a(this,c),a(this,m),a(this,u)].forEach(n=>{const s=document.createElement("div");s.classList.add("row"),n.forEach(f=>{const h=document.createElement("button");h.classList.add("key"),h.textContent=f,s.appendChild(h),a(this,r).set(f,h)}),this.el.appendChild(s)})}addKeyListener(){this.el.addEventListener("click",e=>{if(e.target.classList.contains("key")){const n=e.target;n.classList.add("active"),setTimeout(()=>n.classList.remove("active"),100),this.callback(n.textContent)}})}addKeyboardListener(){document.addEventListener("keydown",e=>{var s;let n=e.key;(s=a(this,r).get(n.toLowerCase()))==null||s.click()})}}d=new WeakMap,c=new WeakMap,m=new WeakMap,u=new WeakMap,r=new WeakMap;const k=["he turned in the research paper on friday otherwise he would have not passed the class","plans for this weekend include turning wine into water","the miniature pet elephant became the envy of the neighborhood","as she walked along the street and looked in the gutter she realized facemasks had become the new cigarette butts","he had unknowingly taken up sleepwalking as a nighttime hobby","they got there early and they got really good seats","david proudly graduated from high school top of his class at age 97","he realized there had been several deaths on this road but his concern rose when he saw the exact number","three generations with six decades of life experience","her life in the confines of the house became her new normal","he never understood why what when and where left out who","truth in advertising and dinosaurs with skateboards have much in common","its not possible to convince a monkey to give you a banana by promising it infinite bananas when they die","he was willing to find the depths of the rabbit hole in order to be with her","the estate agent quickly marked out his territory on the dance floor","at that moment she realized she had a sixth sense","the lyrics of the song sounded like fingernails on a chalkboard","its not often you find a soggy banana on the street","i have traveled all around africa and still havent found the gnu who stole my scarf","although it wasnt a pot of gold nancy was still enthralled at what she found at the end of the rainbow","honestly i didnt care much for the first season so i didnt bother with the second","the balloons floated away along with all my hopes and dreams","the anaconda was the greatest criminal mastermind in this part of the neighborhood","he learned the hardest lesson of his life and had the scars both physical and mental to prove it","he set out for a short walk but now all he could see were mangroves and water were for miles","the spa attendant applied the deep cleaning mask to the gentlemans back","the busker hoped that the people passing by would throw money but they threw tomatoes instead so he exchanged his hat for a juicer","the irony of the situation wasnt lost on anyone in the room","the bug was having an excellent day until he hit the windshield","it would have been a better night if the guys next to us werent in the splash zone","kevin embraced his ability to be at the wrong place at the wrong time","she was amazed by the large chunks of ice washing up on the beach","watching the geriatric mens softball team brought back memories of 3 yr olds playing tball","he used to get confused between soldiers and shoulders but as a military man he now soldiers responsibility","in hopes of finding out the truth he entered the oneroom library","he found his art never progressed when he literally used his sweat and tears","homesickness became contagious in the young campers cabin","today i dressed my unicorn in preparation for the race"];class R{constructor(){y(this,"isTimerRunning",!1);y(this,"runTimer",()=>{if(this.time===0){this.completionCallback(),this.stopTimer();return}this.time--,this.timerCallback(this.time)})}startTimer(e,n,s){this.isTimerRunning||(this.time=e,this.timerCallback=n,this.completionCallback=s,this.intervalId=setInterval(this.runTimer,1e3),this.isTimerRunning=!0)}stopTimer(){clearInterval(this.intervalId),this.isTimerRunning=!1}}const i=document.querySelector(".sentences-display"),S=document.querySelector(".keyboard"),w=document.querySelector(".time-display"),v=document.querySelector(".reset"),g=60;let x,l=0,b=!1;const p=new R,L=()=>{const t=k[Math.floor(Math.random()*k.length)];i.textContent+=t+" "},I=()=>{i.textContent.length<50&&L();const t=i.textContent.charAt(1).trim()?1:2;i.textContent=i.textContent.slice(t),C()},C=()=>{x=i.textContent.charAt(0)},D=t=>{b||(!p.isTimerRunning&&l===0&&p.startTimer(g,M,j),t===x&&(l++,I()))},M=t=>{w.textContent=t},j=()=>{w.textContent=`You typed ${l} letters in ${g} seconds`,b=!0},T=()=>{i.textContent="",L(),C(),l=0,w.textContent=g,p.stopTimer(),b=!1,v.blur()};v.addEventListener("click",T);new z(S,D);T();
