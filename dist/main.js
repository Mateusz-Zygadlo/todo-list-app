(()=>{const e=document.querySelector(".view-more"),t=document.querySelector(".more"),n=document.querySelector(".projects"),d=document.querySelector(".projects-folder"),s=[{name:"inbox",tasks:[]}];let c;const o=document.querySelector(".addItem"),a=document.querySelector(".addProject"),l=document.querySelector(".close"),i=document.querySelector(".add"),r=document.querySelector(".addProjectInput"),m=document.querySelector(".root");let u=document.querySelectorAll(".projectsNameInPage");const p=document.querySelector(".nameTasks"),v=document.querySelector(".descriptiontasks"),y=document.querySelector(".dateTasks"),L=document.querySelector(".priorityTasksInput"),C=document.querySelector(".addNav"),g=document.querySelector(".addtasks"),k=document.querySelector(".closeTasksClick"),h=document.querySelector(".addTasksButton"),E=document.querySelector(".projects-content");k.addEventListener("click",(()=>{p.value="",v.value="",y.value="",L.value="",g.classList.toggle("visiblity")})),C.addEventListener("click",(()=>{g.classList.toggle("visiblity")})),h.addEventListener("click",(()=>{if(c)for(let e=0;e<s.length;e++)s[e].name==c&&s[e].tasks.push({name:p.value,decription:v.value,date:y.value,priority:L.value});else s[0].tasks.push({name:p.value,decription:v.value,date:y.value,priority:L.value});p.value="",v.value="",y.value="",L.value="",g.classList.toggle("visiblity"),console.log(s),console.log(c)})),document.addEventListener("click",(e=>{if(e.target.classList.contains("projectsNameInPage"))for(let t=0;t<s.length;t++)s[t].name==e.target.textContent&&(console.log(s[t].name),console.log(s[t].tasks),c=s[t].name)})),o.addEventListener("click",(()=>{a.classList.toggle("visiblity")})),l.addEventListener("click",(()=>{r.value="",a.classList.add("visiblity")})),i.addEventListener("click",(()=>{s.push({name:r.value,tasks:[]}),console.log(s),r.value="",a.classList.add("visiblity"),q()}));const q=()=>{for(key in m.textContent="",s)if("inbox"==s[key].name);else{const e=document.createElement("p");e.classList.add("projectsNameInPage"),e.textContent=s[key].name,m.appendChild(e)}u=document.querySelectorAll(".projectsNameInPage")};e.addEventListener("click",(()=>{"expand_more"==t.textContent?t.textContent="expand_less":t.textContent="expand_more",n.classList.toggle("visiblity"),d.classList.toggle("overflow"),d.classList.toggle("overflowHidden")})),console.log(100*Math.random()),(()=>{const e=document.createElement("div");e.classList.add("manyProjects");const t=document.createElement("div");t.classList.add("tasks");const n=document.createElement("div");n.classList.add("name-and-priority");const d=document.createElement("div");d.classList.add("priority"),n.appendChild(d);const s=document.createElement("div");s.classList.add("checkbox");const c=document.createElement("input");c.type="checkbox",s.appendChild(c),n.appendChild(s);const o=document.createElement("div");o.textContent="testName",o.classList.add("name"),n.appendChild(o),t.appendChild(n);const a=document.createElement("div");a.classList.add("delete");const l=document.createElement("span");l.classList.add("material-icons"),l.textContent="delete",a.appendChild(l),t.appendChild(a),e.appendChild(t);const i=document.createElement("div");i.classList.add("moreContent"),i.classList.add("visiblity");const r=document.createElement("div");r.classList.add("nameProject-and-description");const m=document.createElement("div");m.textContent="test name two",m.classList.add("nameProject"),r.appendChild(m);const u=document.createElement("div");u.textContent="test description",u.classList.add("descriptionProject"),r.appendChild(u),i.appendChild(r);const p=document.createElement("div");p.classList.add("date-and-priority");const v=document.createElement("div");p.textContent="test date",v.classList.add("dateProject"),p.appendChild(v);const y=document.createElement("div");y.textContent="test priority",y.classList.add("priorityProject"),p.appendChild(y),i.appendChild(p),e.appendChild(i),E.appendChild(e)})()})();