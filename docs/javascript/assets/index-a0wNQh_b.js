import"./core-AU6WUMqB.js";import"./header-Kz0wwp-0.js";import"./challenges-Uq9k6NgB.js";import"./navbar-e6RuwTU2.js";const i=document.getElementById("noun"),d=document.getElementById("verb"),r=document.getElementById("adjective"),c=document.getElementById("adverb"),s=document.getElementById("generate"),u=document.getElementById("play-again"),y=document.getElementById("share-story-twitter"),a=document.getElementById("story");function m(){const e=i.value,t=d.value,n=r.value,o=c.value,l=`
        In a fantastical realm, there resided a ${e} of incredible bravery.
        From a young age, this ${e} aspired to ${t} ${n}ly, diligently honing their skills ${o}.
        One magical day, while ${t}ing near the ancient ${e}, they stumbled upon an enchanted ${e}.
        Within the depths of the ${e}, they discovered a wondrous ${n} ${e} that could ${t} ${o}.
        Empowered by this artifact, they embarked on an epic journey, ${t}ing through enchanted ${n} landscapes and ${e}-filled kingdoms.
        Along their path, they encountered a wise ${e} who imparted the secret of ${t}ing ${n}ly.
        Finally, after countless ${e}-filled days, they reached their destination and ${t}ed ${o} to fulfill their destiny!
        Thus, our ${e} became a legend, living ${o} ever after, proving that even in the realm of fantasy, dreams can become reality.
`;a.textContent=l}s.addEventListener("click",m);u.addEventListener("click",function(){i.value="",d.value="",r.value="",c.value="",a.textContent=""});y.addEventListener("click",function(){const e=a.textContent,n=`https://twitter.com/intent/tweet?text=${encodeURIComponent(e)}`;window.open(n,"_blank")});
