(()=>{const e=document.querySelector(".view-more"),t=document.querySelector(".more"),n=document.querySelector(".projects"),s=document.querySelector(".projects-folder"),a=[{name:"inbox",tasks:[]}];let d,c;const o=document.querySelector(".addItem"),l=document.querySelector(".addProject"),i=document.querySelector(".close"),r=document.querySelector(".add"),m=document.querySelector(".addProjectInput"),u=document.querySelector(".root");let p=document.querySelectorAll(".projectsNameInPage");const v=document.querySelector(".inboxClick"),y=document.querySelector(".nameTasks"),k=document.querySelector(".descriptiontasks"),L=document.querySelector(".dateTasks"),C=document.querySelector(".priorityTasksInput"),g=document.querySelector(".addNav"),h=document.querySelector(".addtasks"),E=document.querySelector(".closeTasksClick"),q=document.querySelector(".addTasksButton"),S=document.querySelector(".projects-content");E.addEventListener("click",(()=>{y.value="",k.value="",L.value="",C.value="",h.classList.toggle("visiblity")})),g.addEventListener("click",(()=>{h.classList.toggle("visiblity")})),q.addEventListener("click",(()=>{if(d)for(let e=0;e<a.length;e++)a[e].name==d&&(a[e].tasks.push({name:y.value,decription:k.value,date:L.value,priority:C.value,id:Math.floor(1e3*Math.random())}),c=e);else d="inbox",a[0].tasks.push({name:y.value,decription:k.value,date:L.value,priority:C.value,id:Math.floor(1e3*Math.random())}),c=0;x(),console.log(a),console.log(d),y.value="",k.value="",h.classList.toggle("visiblity")})),v.addEventListener("click",(()=>{d="inbox",x()})),document.addEventListener("click",(e=>{if(e.target.classList.contains("projectsNameInPage"))for(let t=0;t<a.length;t++)a[t].name==e.target.textContent&&(d=a[t].name);else{if(!e.target.classList.contains("tasks"))return;{const e=document.querySelector(".moreContent");document.querySelector(".tasks").addEventListener("click",(()=>{e.classList.toggle("visiblity")}))}}x()})),o.addEventListener("click",(()=>{l.classList.toggle("visiblity")})),i.addEventListener("click",(()=>{m.value="",l.classList.add("visiblity")})),r.addEventListener("click",(()=>{a.push({name:m.value,tasks:[]}),d=m.value,m.value="",l.classList.add("visiblity"),b(),x()}));const x=()=>{let e;S.textContent="";for(let t=0;t<a.length;t++)a[t].name==d&&(e=t);for(let t=0;t<a[e].tasks.length;t++){const n=document.createElement("div");n.dataset.id=a[e].tasks[t].id,n.classList.add("manyProjects");const s=document.createElement("div");s.classList.add("tasks");const d=document.createElement("div");d.classList.add("name-and-priority");const c=document.createElement("div");c.classList.add("priority"),d.appendChild(c);const o=document.createElement("div");o.classList.add("checkbox");const l=document.createElement("input");l.type="checkbox",o.appendChild(l),d.appendChild(o);const i=document.createElement("div");i.textContent=a[e].tasks[t].name,i.classList.add("name"),d.appendChild(i),s.appendChild(d);const r=document.createElement("div");r.classList.add("delete");const m=document.createElement("span");m.classList.add("material-icons"),m.textContent="delete",r.appendChild(m),s.appendChild(r),n.appendChild(s);const u=document.createElement("div");u.classList.add("moreContent");const p=document.createElement("div");p.classList.add("nameProject-and-description");const v=document.createElement("div");v.textContent=`name: ${a[e].tasks[t].name}`,v.classList.add("nameProject"),p.appendChild(v);const y=document.createElement("div");y.textContent=`description: ${a[e].tasks[t].decription}`,y.classList.add("descriptionProject"),p.appendChild(y),u.appendChild(p);const k=document.createElement("div");k.classList.add("date-and-priority");const L=document.createElement("div");k.textContent=`date: ${a[e].tasks[t].date}`,L.classList.add("dateProject"),k.appendChild(L);const C=document.createElement("div");C.textContent=`priority: ${a[e].tasks[t].priority}`,C.classList.add("priorityProject"),k.appendChild(C),u.appendChild(k),n.appendChild(u),S.appendChild(n)}console.log(a[e].tasks.length)},b=()=>{for(key in u.textContent="",a)if("inbox"==a[key].name);else{const e=document.createElement("p");e.classList.add("projectsNameInPage"),e.textContent=a[key].name,u.appendChild(e)}p=document.querySelectorAll(".projectsNameInPage")};e.addEventListener("click",(()=>{"expand_more"==t.textContent?t.textContent="expand_less":t.textContent="expand_more",n.classList.toggle("visiblity"),s.classList.toggle("overflow"),s.classList.toggle("overflowHidden")}))})();