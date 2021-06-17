(()=>{"use strict";function e(e){const t=document.createElement("img");return t.classList.add("banner"),t.style.width="100%",t.style.height="250px",t.style.objectFit="cover","info"!=e&&e?e&&(t.src="./img/japrest.jpg",t.alt="japanese-restaurant-interior"):(t.src="./img/japrestout.jpg",t.alt="japanese-restaurant-exterior"),t}document.body.style.margin="0",document.body.style.display="block",document.body.style.backgroundColor="#F4E7D3";const t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div");t.appendChild(n),t.appendChild(o),t.appendChild(a),t.style.margin="30px auto auto auto",t.style.display="block",t.style.width="312px",n.textContent="Info",o.textContent="Menu",a.textContent="Contact";const i=t.childNodes;for(var l=0;l<i.length;l++)i[l].style.display="inline-block",i[l].style.backgroundColor="white",i[l].style.textAlign="center",i[l].style.width="80px",i[l].style.padding="10px",i[l].style.border="solid 2px",i[l].style.position="relative",i[l].style.zIndex="1",i[l].style.fontFamily='"Monaco", "Lucida Console", monospace';const s=document.createElement("div");function d(n){document.body.appendChild(e(n)),document.body.appendChild(t),document.body.appendChild(function(e){const t=document.createElement("div");return t.classList.add("elements"),"info"!=e&&e||t.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("p"),o=document.createElement("p"),a=document.createElement("p");e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(a),t.style.fontFamily='"Monaco", "Lucida Console", monospace',t.style.textAlign="center",t.style.lineHeight="1.5em";const i=e.childNodes;for(var l=1;l<i.length;l++)i[l].style.fontFamily='"Monaco", "Lucida Console", monospace',i[l].style.textAlign="justify",i[l].style.lineHeight="1.5em",i[l].style.margin="30px auto auto auto",i[l].style.width="35em";return t.textContent="OISHI JAPANESE RESTAURANT",n.textContent="OISHI JAPANESE RESTAURANT is one of our favourite Japanese restaurants in town,\n                      and is the place to head to if you're looking to pamper yourself or your loved ones to some good \n                      food. Oishi offers variety of authentic japanese food includes sushi, ramen, and katsu curry chicken. \n                      in from the famous Tsukiji Fish Market in Tokyo twice a week, then executed by professional chefs \n                      with years of experience under their belts. They also get plus points for their classy yet cosy \n                      interior and intimate vibe that's great for date nights or hangouts with friends.",o.textContent="Opening Hours: Tuesday to Sunday, 10a.m. to 10p.m.",a.textContent="Address: Vipod Residences, Ground Floor Block C-1, No 6, Jalan Kia Peng, Kuala Lumpur, 50450 Kuala Lumpur, Malaysia",e})()),"menu"==e&&t.appendChild((()=>{let e=["katsucurry","ramen","sashimi","sushi2","takoyaki"],t=["japanese-katsu-curry-chicken","japanese-ramen","sashimi","sushi assorted set","takoyaki"],n=[25,28,35,43,18];const o=document.createElement("div"),a=document.createElement("h1");o.appendChild(a),a.textContent="Menu",a.style.textAlign="center",a.style.lineHeight="1.5em",a.style.margin="0.8em",a.style.fontFamily='"Monaco", "Lucida Console", monospace';for(let a=0;a<e.length;a++){const i=document.createElement("div"),l=document.createElement("img"),s=document.createElement("div"),d=document.createElement("div");i.appendChild(l),i.appendChild(s),i.appendChild(d),o.appendChild(i),l.style.display="inline",l.setAttribute("alt",t[a]),l.src=`./img/${e[a]}.jpg`,l.style.width="14em",l.style.height="12em",l.style.borderRadius="6px",t[a]=t[a].replace(/-/g," "),t[a]=t[a].toUpperCase(),s.textContent=`${t[a]}`,d.textContent=`$${n[a]}`,s.style.fontFamily='"Monaco", "Lucida Console", monospace',d.style.fontFamily='"Monaco", "Lucida Console", monospace',s.style.width="9em",d.style.width="3em",s.style.lineHeight="1.2em",d.style.lineHeight="1em",s.style.padding="1em 1em 1em 3.5em",d.style.padding="1em",s.style.margin="auto",d.style.margin="auto",s.style.fontSize="1.2em",d.style.fontSize="1.2em",i.style.width="35em",i.style.margin="auto",i.style.display="flex",i.style.padding="1em",i.style.backgroundColor="beige",i.style.border="solid",i.style.borderRadius="10px"}return o.style.margin="auto",o})()),"contact"==e&&t.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("p"),o=document.createElement("p");e.appendChild(t),e.appendChild(n),e.appendChild(o),t.textContent="Contact us",n.textContent="Email: oishijapaneserestaurant@feedback.com",o.textContent="Phone: +6042536434";const a=e.childNodes;for(var i=0;i<a.length;i++)a[i].style.fontFamily='"Monaco", "Lucida Console", monospace',a[i].style.textAlign="center";return e.style.margin="40px auto",e.style.backgroundColor="white",e.style.borderRadius="5px",e.style.padding="10px",e.style.width="35em",e})()),t}(n)),document.body.appendChild(s)}s.textContent="created by MoonJi <3",s.style.padding="2em",e(),d(),n.addEventListener("click",(function(){const e=document.querySelector(".elements"),t=document.querySelector(".banner");e.remove(),t.remove(),d("info")})),o.addEventListener("click",(function(){const e=document.querySelector(".elements"),t=document.querySelector(".banner");e.remove(),t.remove(),d("menu")})),a.addEventListener("click",(function(){const e=document.querySelector(".elements"),t=document.querySelector(".banner");e.remove(),t.remove(),d("contact")}))})();