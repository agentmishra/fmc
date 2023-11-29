import"./core-AU6WUMqB.js";import"./header-Kz0wwp-0.js";import"./challenges-Uq9k6NgB.js";import"./navbar-e6RuwTU2.js";document.addEventListener("DOMContentLoaded",function(){const d=document.getElementById("noun"),i=document.getElementById("verb"),r=document.getElementById("adjective"),s=document.getElementById("adverb"),c=document.getElementById("generate"),l=document.getElementById("play-again"),h=document.getElementById("share-story-twitter"),o=document.getElementById("story"),u=document.getElementById("share-whatsapp");function y(){const e=d.value,t=i.value,n=r.value,a=s.value,p=`
        In a fantastical realm, there resided a ${e} of incredible bravery.
        From a young age, this ${e} aspired to ${t} ${n}ly, diligently honing their skills ${a}.
        One magical day, while ${t}ing near the ancient ${e}, they stumbled upon an enchanted ${e}.
        Within the depths of the ${e}, they discovered a wondrous ${n} ${e} that could ${t} ${a}.
        Empowered by this artifact, they embarked on an epic journey, ${t}ing through enchanted ${n} landscapes and ${e}-filled kingdoms.
        Along their path, they encountered a wise ${e} who imparted the secret of ${t}ing ${n}ly.
        Finally, after countless ${e}-filled days, they reached their destination and ${t}ed ${a} to fulfill their destiny!
        Thus, our ${e} became a legend, living ${a} ever after, proving that even in the realm of fantasy, dreams can become reality.
        
        `;o.textContent=p}c.addEventListener("click",y),l.addEventListener("click",function(){d.value="",i.value="",r.value="",s.value="",o.textContent=""}),h.addEventListener("click",function(){const e=o.textContent,n=`https://twitter.com/intent/tweet?text=${encodeURIComponent(e)}`;window.open(n,"_blank")}),u.addEventListener("click",m);function m(){const e=o.textContent,n=`whatsapp://send?text=${encodeURIComponent(e)}`;/iPhone|iPad|iPod/i.test(navigator.userAgent)?window.open(n):alert("WhatsApp sharing is only available on mobile devices with WhatsApp installed.")}});
