const e=["POTR Pots are constructed using recycled polypropylene which can be fully recycled. ","POTR pots are flat pack, origami planters designed to self-water your plants, made from recycled materials.","Once assembled the cotton cord doubles as the watering system, allowing your plants to self-regulate their water intake using tried and tested wicking technology.","Shipped flat packed so they can be slipped through your letterbox, POTR Pots have the smallest carbon footprint possible during transit. ","We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water. "],t=Array.from({length:5},(e,t)=>t+1),s=document.getElementById("materials__dialogue"),a=document.getElementById("materials__dialogue-text");function o(){let o=this.id.charAt(this.id.length-1);this.classList.contains("materials__button-hide")?(this.classList.remove("materials__button-hide"),s.className="materials__dialogue"):(t.forEach(e=>{document.getElementById(`materials__button-${e}`).classList.remove("materials__button-hide")}),s.className="materials__dialogue",this.classList.add("materials__button-hide"),a.textContent=e[+o-1],s.classList.add("materials__dialogue-active",`materials__dialogue-${o}`))}t.forEach(e=>{document.getElementById(`materials__button-${e}`).addEventListener("click",o)}),document.getElementById("contactForm").addEventListener("submit",function(e){var t;e.preventDefault();let s=document.getElementById("name"),a=document.getElementById("email"),o=document.getElementById("message"),r=!0;""===s.value.trim()?(s.classList.add("questions__form-item-error"),r=!1,s.setAttribute("placeholder","Enter your name")):(s.classList.remove("questions__form-item-error"),s.classList.add("questions__form-item-success")),(t=a.value,/^\S+@\S+\.\S+$/.test(t))?(a.classList.remove("questions__form-item-error"),a.classList.add("questions__form-item-success")):(a.classList.add("questions__form-item-error"),r=!1,a.setAttribute("placeholder","Enter your name")),""===o.value.trim()?(o.classList.add("questions__form-item-error"),r=!1,o.setAttribute("placeholder","Enter your name")):(o.classList.remove("questions__form-item-error"),o.classList.add("questions__form-item-success")),r&&(document.getElementById("successMessage").style.display="block",setTimeout(function(){document.getElementById("successMessage").style.display="none"},3e3),s.value="",a.value="",o.value="")}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".slider"),t=document.querySelectorAll(".slide"),s=document.querySelector(".dots-container"),a=0;function o(){e.style.transform=`translateX(-${100*a}%)`}function r(){s.innerHTML="",t.forEach((e,t)=>{let i=document.createElement("span");i.classList.add("dot"),t===a&&i.classList.add("active"),i.addEventListener("click",()=>{a=t,o(),r()}),s.appendChild(i)})}r(),setInterval(()=>{a=(a+1)%t.length,o(),r()},3e3)});
//# sourceMappingURL=index.95ed543e.js.map