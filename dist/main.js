(()=>{const e=document.querySelector(".view-more"),t=document.querySelector(".more"),n=document.querySelector(".projects"),s=document.querySelector(".projects-folder"),a=document.querySelector(".menu"),d=document.querySelector(".inbox"),c=[{name:"inbox",tasks:[]}];let o,l;const i=document.querySelector(".addItem"),r=document.querySelector(".addProject"),m=document.querySelector(".close"),u=document.querySelector(".add"),p=document.querySelector(".addProjectInput"),v=document.querySelector(".root");let y=document.querySelectorAll(".projectsNameInPage");const L=document.querySelector(".inboxClick"),k=document.querySelector(".nameTasks"),g=document.querySelector(".descriptiontasks"),C=document.querySelector(".dateTasks"),h=document.querySelector(".priorityTasksInput"),E=document.querySelector(".addNav"),x=document.querySelector(".addtasks"),q=document.querySelector(".closeTasksClick"),S=document.querySelector(".addTasksButton"),b=document.querySelector(".projects-content");d.addEventListener("click",(()=>{o="inbox",f()})),a.addEventListener("click",(()=>{s.classList.toggle("z-index-toggle")})),q.addEventListener("click",(()=>{k.value="",g.value="",C.value="",h.value="",x.classList.toggle("visiblity")})),E.addEventListener("click",(()=>{x.classList.toggle("visiblity"),s.classList.remove("z-index-toggle")})),S.addEventListener("click",(()=>{if(o)for(let e=0;e<c.length;e++)c[e].name==o&&(c[e].tasks.push({name:k.value,decription:g.value,date:C.value,priority:h.value,id:Math.floor(1e3*Math.random())}),l=e);else o="inbox",c[0].tasks.push({name:k.value,decription:g.value,date:C.value,priority:h.value,id:Math.floor(1e3*Math.random())}),l=0;f(),console.log(c),console.log(o),k.value="",g.value="",x.classList.toggle("visiblity")})),L.addEventListener("click",(()=>{o="inbox",f()})),document.addEventListener("click",(e=>{if(e.target.classList.contains("projectsNameInPage"))for(let t=0;t<c.length;t++)c[t].name==e.target.textContent&&(o=c[t].name);else{if(!e.target.classList.contains("tasks"))return;{const e=document.querySelector(".moreContent");document.querySelector(".tasks").addEventListener("click",(()=>{e.classList.toggle("visiblity")}))}}f()})),i.addEventListener("click",(()=>{r.classList.toggle("visiblity"),s.classList.remove("z-index-toggle")})),m.addEventListener("click",(()=>{p.value="",r.classList.add("visiblity")})),u.addEventListener("click",(()=>{c.push({name:p.value,tasks:[]}),o=p.value,p.value="",r.classList.add("visiblity"),N(),f(),I()}));const f=()=>{let e;b.textContent="";for(let t=0;t<c.length;t++)c[t].name==o&&(e=t);for(let t=0;t<c[e].tasks.length;t++){const n=document.createElement("div");n.classList.add("manyProjects");const s=document.createElement("div");s.dataset.id=c[e].tasks[t].id,s.classList.add("tasks");const a=document.createElement("div");a.classList.add("name-and-priority");const d=document.createElement("div");d.classList.add("priority"),a.appendChild(d);const o=document.createElement("div");o.classList.add("checkbox");const l=document.createElement("input");l.type="checkbox",o.appendChild(l),a.appendChild(o);const i=document.createElement("div");i.textContent=c[e].tasks[t].name,i.classList.add("name"),a.appendChild(i),s.appendChild(a);const r=document.createElement("div");r.classList.add("delete");const m=document.createElement("span");m.classList.add("material-icons"),m.textContent="delete",r.appendChild(m),s.appendChild(r),n.appendChild(s),b.appendChild(n)}};let j,P;document.addEventListener("click",(e=>{if(e.target.classList.contains("tasks")){let t=e.target.dataset.id;for(let e=0;e<c.length;e++)c[e].name==o&&(j=e);for(let e=0;e<c[j].tasks.length;e++)c[j].tasks[e].id==t&&(P=e);I()}}));const I=()=>{const e=document.createElement("div");e.classList.add("moreContent");const t=document.createElement("div");t.classList.add("nameProject-and-description");const n=document.createElement("div");n.textContent=`name: ${c[j].tasks[P].name}`,n.classList.add("nameProject"),t.appendChild(n);const s=document.createElement("div");s.textContent=`description: ${c[j].tasks[P].decription}`,s.classList.add("descriptionProject"),t.appendChild(s),e.appendChild(t);const a=document.createElement("div");a.classList.add("date-and-priority");const d=document.createElement("div");a.textContent=`date: ${c[j].tasks[P].date}`,d.classList.add("dateProject"),a.appendChild(d);const o=document.createElement("div");o.textContent=`priority: ${c[j].tasks[P].priority}`,o.classList.add("priorityProject"),a.appendChild(o),e.appendChild(a),b.appendChild(e)},N=()=>{for(key in v.textContent="",c)if("inbox"==c[key].name);else{const e=document.createElement("p");e.classList.add("projectsNameInPage"),e.textContent=c[key].name,v.appendChild(e)}y=document.querySelectorAll(".projectsNameInPage")};e.addEventListener("click",(()=>{"expand_more"==t.textContent?t.textContent="expand_less":t.textContent="expand_more",n.classList.toggle("visiblity"),s.classList.toggle("overflow"),s.classList.toggle("overflowHidden")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBYyxHQUVSNUMsRUFFUCxHQUF1QixTQUFwQkEsRUFBT3dFLEtBQUt2RSxVQUVWLENBQ0QsTUFBTXdFLEVBQUloRixTQUFTMkQsY0FBYyxLQUNqQ3FCLEVBQUVoRCxVQUFVcUIsSUFBSSxzQkFDaEIyQixFQUFFN0IsWUFBYzVDLEVBQU93RSxLQUFLdkUsS0FFNUJTLEVBQUs4QyxZQUFZaUIsR0FHekI5RCxFQUFxQmxCLFNBQVNtQixpQkFBaUIsd0JBR25EcEIsRUFBUytCLGlCQUFpQixTQUFTLEtBQ1IsZUFBcEI1QixFQUFLaUQsWUFDSmpELEVBQUtpRCxZQUFjLGNBRW5CakQsRUFBS2lELFlBQWMsY0FHdkJoRCxFQUFZNkIsVUFBVUMsT0FBTyxhQUM3QjdCLEVBQWM0QixVQUFVQyxPQUFPLFlBQy9CN0IsRUFBYzRCLFVBQVVDLE9BQU8sc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZpZXdNb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctbW9yZScpO1xyXG5jb25zdCBtb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vcmUnKTtcclxuY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuY29uc3QgcHJvamVjdEZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1mb2xkZXInKTtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XHJcblxyXG5jb25zdCBpbmJveE1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTtcclxuXHJcbmNvbnN0IG5ld0FyciA9IFt7IG5hbWU6ICdpbmJveCcsIHRhc2tzOiBbXSB9XTtcclxubGV0IG5vd1Byb2plY3Q7XHJcbmxldCBjb3VudDtcclxuXHJcbmNvbnN0IGFkZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkSXRlbScpO1xyXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QnKTtcclxuXHJcbmNvbnN0IGNsb3NlTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xyXG5jb25zdCBhZGROZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpO1xyXG5cclxuY29uc3QgYWRkUHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RJbnB1dCcpO1xyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb290Jyk7XHJcbmxldCBwcm9qZWN0c05hbWVJblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHNOYW1lSW5QYWdlJyk7XHJcblxyXG5jb25zdCBpbmJveENsaWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Q2xpY2snKTtcclxuXHJcbmNvbnN0IG5hbWVUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lVGFza3MnKTtcclxuY29uc3QgZGVzY3JpcHRpb250YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbnRhc2tzJyk7XHJcbmNvbnN0IGRhdGVUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlVGFza3MnKTtcclxuY29uc3QgcHJpb3JpdHlUYXNrc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5VGFza3NJbnB1dCcpO1xyXG5cclxuY29uc3QgYWRkTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZE5hdicpO1xyXG5jb25zdCBhZGR0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGR0YXNrcycpO1xyXG5jb25zdCBjbG9zZVRhc2tzQ2xpY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VUYXNrc0NsaWNrJyk7XHJcbmNvbnN0IGFkZFRhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tzQnV0dG9uJyk7XHJcblxyXG5jb25zdCBwcm9qZWN0c0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGVudCcpO1xyXG5cclxuaW5ib3hNYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbm93UHJvamVjdCA9ICdpbmJveCc7XHJcbiAgICBjcmVhdGVEaXYoKTtcclxufSlcclxuXHJcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgIHByb2plY3RGb2xkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnei1pbmRleC10b2dnbGUnKTtcclxufSlcclxuXHJcbmNsb3NlVGFza3NDbGljay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG5hbWVUYXNrcy52YWx1ZSA9ICcnO1xyXG4gICAgZGVzY3JpcHRpb250YXNrcy52YWx1ZSA9ICcnO1xyXG4gICAgZGF0ZVRhc2tzLnZhbHVlID0gJyc7XHJcbiAgICBwcmlvcml0eVRhc2tzSW5wdXQudmFsdWUgPSAnJztcclxuICAgIGFkZHRhc2tzLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGl0eScpO1xyXG59KVxyXG5cclxuYWRkTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYWRkdGFza3MuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsaXR5Jyk7XHJcbiAgICBwcm9qZWN0Rm9sZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3otaW5kZXgtdG9nZ2xlJyk7XHJcbn0pXHJcblxyXG5hZGRUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmKG5vd1Byb2plY3Qpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuZXdBcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihuZXdBcnJbaV0ubmFtZSA9PSBub3dQcm9qZWN0KXtcclxuICAgICAgICAgICAgICAgIG5ld0FycltpXS50YXNrcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lVGFza3MudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjcmlwdGlvbjogZGVzY3JpcHRpb250YXNrcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRlVGFza3MudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5VGFza3NJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCksXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY291bnQgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgbm93UHJvamVjdCA9ICdpbmJveCc7XHJcbiAgICAgICAgbmV3QXJyWzBdLnRhc2tzLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lVGFza3MudmFsdWUsXHJcbiAgICAgICAgICAgIGRlY3JpcHRpb246IGRlc2NyaXB0aW9udGFza3MudmFsdWUsXHJcbiAgICAgICAgICAgIGRhdGU6IGRhdGVUYXNrcy52YWx1ZSxcclxuICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5VGFza3NJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgaWQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvdW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVEaXYoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhuZXdBcnIpO1xyXG4gICAgY29uc29sZS5sb2cobm93UHJvamVjdCk7XHJcblxyXG4gICAgbmFtZVRhc2tzLnZhbHVlID0gJyc7XHJcbiAgICBkZXNjcmlwdGlvbnRhc2tzLnZhbHVlID0gJyc7XHJcblxyXG4gICAgYWRkdGFza3MuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsaXR5Jyk7XHJcbn0pXHJcblxyXG5pbmJveENsaWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbm93UHJvamVjdCA9ICdpbmJveCc7XHJcbiAgICBjcmVhdGVEaXYoKTtcclxufSlcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdHNOYW1lSW5QYWdlJykpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuZXdBcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihuZXdBcnJbaV0ubmFtZSA9PSBlLnRhcmdldC50ZXh0Q29udGVudCl7XHJcbiAgICAgICAgICAgICAgICBub3dQcm9qZWN0ID0gbmV3QXJyW2ldLm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ZWxzZSBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2tzJykpe1xyXG4gICAgICAgIGNvbnN0IG1vcmVDb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vcmVDb250ZW50Jyk7XHJcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcclxuXHJcbiAgICAgICAgdGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vcmVDb250ZW50RGl2LmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGl0eScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRGl2KCk7XHJcbn0pXHJcblxyXG5hZGRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYWRkUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxpdHknKTtcclxuICAgIHByb2plY3RGb2xkZXIuY2xhc3NMaXN0LnJlbW92ZSgnei1pbmRleC10b2dnbGUnKTtcclxufSlcclxuXHJcbmNsb3NlTmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGFkZFByb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxpdHknKTtcclxufSlcclxuXHJcbmFkZE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBuZXdBcnIucHVzaCh7XHJcbiAgICAgICAgbmFtZTogYWRkUHJvamVjdElucHV0LnZhbHVlLFxyXG4gICAgICAgIHRhc2tzOiBbXSxcclxuICAgIH0pXHJcbiAgICBub3dQcm9qZWN0ID0gYWRkUHJvamVjdElucHV0LnZhbHVlO1xyXG4gICAgYWRkUHJvamVjdElucHV0LnZhbHVlID0gJyc7XHJcbiAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGl0eScpO1xyXG4gICAgYWRkVG9QYWdlTmFtZVByb2plY3QoKTtcclxuICAgIGNyZWF0ZURpdigpO1xyXG4gICAgYWRkRGl2KCk7XHJcbn0pXHJcblxyXG5jb25zdCBjcmVhdGVEaXYgPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IGluZGV4O1xyXG4gICAgcHJvamVjdHNDb250ZW50LnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG5ld0Fyci5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYobmV3QXJyW2ldLm5hbWUgPT0gbm93UHJvamVjdCl7XHJcbiAgICAgICAgICAgIGluZGV4ID0gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKGxldCBqID0gMDsgaiA8IG5ld0FycltpbmRleF0udGFza3MubGVuZ3RoOyBqKyspe1xyXG5cclxuICAgICAgICBjb25zdCBtYW55UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtYW55UHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnbWFueVByb2plY3RzJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpdlRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2VGFza3MuZGF0YXNldC5pZCA9IG5ld0FycltpbmRleF0udGFza3Nbal0uaWQ7XHJcbiAgICAgICAgZGl2VGFza3MuY2xhc3NMaXN0LmFkZCgndGFza3MnKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZUFuZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbmFtZUFuZFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ25hbWUtYW5kLXByaW9yaXR5Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcclxuXHJcbiAgICAgICAgbmFtZUFuZFByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xyXG5cclxuICAgICAgICBjb25zdCBjaGVja2JveElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjaGVja2JveElucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG5cclxuICAgICAgICBjaGVja2JveC5hcHBlbmRDaGlsZChjaGVja2JveElucHV0KTtcclxuXHJcbiAgICAgICAgbmFtZUFuZFByaW9yaXR5LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBuZXdBcnJbaW5kZXhdLnRhc2tzW2pdLm5hbWU7XHJcbiAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XHJcblxyXG4gICAgICAgIG5hbWVBbmRQcmlvcml0eS5hcHBlbmRDaGlsZChuYW1lKTtcclxuXHJcbiAgICAgICAgZGl2VGFza3MuYXBwZW5kQ2hpbGQobmFtZUFuZFByaW9yaXR5KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGVsZXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRlcmlhbEljb25zRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIG1hdGVyaWFsSWNvbnNEZWxldGUuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICAgICAgICBtYXRlcmlhbEljb25zRGVsZXRlLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XHJcblxyXG4gICAgICAgIGRlbGV0ZURpdi5hcHBlbmRDaGlsZChtYXRlcmlhbEljb25zRGVsZXRlKTtcclxuICAgIFxyXG4gICAgICAgIGRpdlRhc2tzLmFwcGVuZENoaWxkKGRlbGV0ZURpdik7XHJcblxyXG4gICAgICAgIG1hbnlQcm9qZWN0cy5hcHBlbmRDaGlsZChkaXZUYXNrcyk7XHJcblxyXG4gICAgICAgIHByb2plY3RzQ29udGVudC5hcHBlbmRDaGlsZChtYW55UHJvamVjdHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgaW5kZXhNYWluT25lO1xyXG5sZXQgaW5kZXhNYWluVHdvO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrcycpKXtcclxuICAgICAgICBsZXQgaW5kZXhNYWluID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG5ld0Fyci5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKG5ld0FycltpXS5uYW1lID09IG5vd1Byb2plY3Qpe1xyXG4gICAgICAgICAgICAgICAgaW5kZXhNYWluT25lID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgbmV3QXJyW2luZGV4TWFpbk9uZV0udGFza3MubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICBpZihuZXdBcnJbaW5kZXhNYWluT25lXS50YXNrc1tqXS5pZCA9PSBpbmRleE1haW4pe1xyXG4gICAgICAgICAgICAgICAgaW5kZXhNYWluVHdvID0gajtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkRGl2KCk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBhZGREaXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtb3JlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9yZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9yZUNvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBuYW1lUHJvamVjdEFuZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYW1lUHJvamVjdEFuZERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ25hbWVQcm9qZWN0LWFuZC1kZXNjcmlwdGlvbicpO1xyXG5cclxuICAgIGNvbnN0IG5hbWVQcm9qZWN0VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYW1lUHJvamVjdFR3by50ZXh0Q29udGVudCA9IGBuYW1lOiAke25ld0FycltpbmRleE1haW5PbmVdLnRhc2tzW2luZGV4TWFpblR3b10ubmFtZX1gO1xyXG4gICAgbmFtZVByb2plY3RUd28uY2xhc3NMaXN0LmFkZCgnbmFtZVByb2plY3QnKTtcclxuXHJcbiAgICBuYW1lUHJvamVjdEFuZERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKG5hbWVQcm9qZWN0VHdvKTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JpcHRpb25Ud28udGV4dENvbnRlbnQgPSBgZGVzY3JpcHRpb246ICR7bmV3QXJyW2luZGV4TWFpbk9uZV0udGFza3NbaW5kZXhNYWluVHdvXS5kZWNyaXB0aW9ufWA7XHJcbiAgICBkZXNjcmlwdGlvblR3by5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvblByb2plY3QnKTtcclxuXHJcbiAgICBuYW1lUHJvamVjdEFuZERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVHdvKTtcclxuXHJcbiAgICBtb3JlQ29udGVudC5hcHBlbmRDaGlsZChuYW1lUHJvamVjdEFuZERlc2NyaXB0aW9uKTtcclxuXHJcbiAgICBjb25zdCBkYXRlQW5kUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRhdGVBbmRQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdkYXRlLWFuZC1wcmlvcml0eScpO1xyXG5cclxuICAgIGNvbnN0IGRhdGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkYXRlQW5kUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgZGF0ZTogJHtuZXdBcnJbaW5kZXhNYWluT25lXS50YXNrc1tpbmRleE1haW5Ud29dLmRhdGV9YDtcclxuICAgIGRhdGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2RhdGVQcm9qZWN0Jyk7XHJcblxyXG4gICAgZGF0ZUFuZFByaW9yaXR5LmFwcGVuZENoaWxkKGRhdGVQcm9qZWN0KTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByaW9yaXR5UHJvamVjdC50ZXh0Q29udGVudCA9IGBwcmlvcml0eTogJHtuZXdBcnJbaW5kZXhNYWluT25lXS50YXNrc1tpbmRleE1haW5Ud29dLnByaW9yaXR5fWA7XHJcbiAgICBwcmlvcml0eVByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlQcm9qZWN0Jyk7XHJcblxyXG4gICAgZGF0ZUFuZFByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5UHJvamVjdCk7XHJcblxyXG4gICAgbW9yZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZUFuZFByaW9yaXR5KTtcclxuXHJcbiAgICBwcm9qZWN0c0NvbnRlbnQuYXBwZW5kQ2hpbGQobW9yZUNvbnRlbnQpO1xyXG59XHJcblxyXG5jb25zdCBhZGRUb1BhZ2VOYW1lUHJvamVjdCA9ICgpID0+IHtcclxuICAgIHJvb3QudGV4dENvbnRlbnQgPSAnJztcclxuICAgIFxyXG4gICAgZm9yKGtleSBpbiBuZXdBcnIpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG5ld0FycltrZXldLm5hbWUgPT0gJ2luYm94Jyl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzTmFtZUluUGFnZScpO1xyXG4gICAgICAgICAgICBwLnRleHRDb250ZW50ID0gbmV3QXJyW2tleV0ubmFtZTtcclxuXHJcbiAgICAgICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvamVjdHNOYW1lSW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RzTmFtZUluUGFnZScpO1xyXG59XHJcblxyXG52aWV3TW9yZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmKG1vcmUudGV4dENvbnRlbnQgPT0gJ2V4cGFuZF9tb3JlJyl7XHJcbiAgICAgICAgbW9yZS50ZXh0Q29udGVudCA9ICdleHBhbmRfbGVzcyc7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBtb3JlLnRleHRDb250ZW50ID0gJ2V4cGFuZF9tb3JlJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsaXR5Jyk7XHJcbiAgICBwcm9qZWN0Rm9sZGVyLmNsYXNzTGlzdC50b2dnbGUoJ292ZXJmbG93Jyk7XHJcbiAgICBwcm9qZWN0Rm9sZGVyLmNsYXNzTGlzdC50b2dnbGUoJ292ZXJmbG93SGlkZGVuJyk7XHJcbn0pIl0sIm5hbWVzIjpbInZpZXdNb3JlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW9yZSIsInByb2plY3RzRGl2IiwicHJvamVjdEZvbGRlciIsIm1lbnUiLCJpbmJveE1haW4iLCJuZXdBcnIiLCJuYW1lIiwidGFza3MiLCJub3dQcm9qZWN0IiwiY291bnQiLCJhZGRJdGVtIiwiYWRkUHJvamVjdCIsImNsb3NlTmV3UHJvamVjdCIsImFkZE5ld1Byb2plY3QiLCJhZGRQcm9qZWN0SW5wdXQiLCJyb290IiwicHJvamVjdHNOYW1lSW5QYWdlIiwicXVlcnlTZWxlY3RvckFsbCIsImluYm94Q2xpY2siLCJuYW1lVGFza3MiLCJkZXNjcmlwdGlvbnRhc2tzIiwiZGF0ZVRhc2tzIiwicHJpb3JpdHlUYXNrc0lucHV0IiwiYWRkTmF2IiwiYWRkdGFza3MiLCJjbG9zZVRhc2tzQ2xpY2siLCJhZGRUYXNrc0J1dHRvbiIsInByb2plY3RzQ29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVEaXYiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ2YWx1ZSIsInJlbW92ZSIsImkiLCJsZW5ndGgiLCJwdXNoIiwiZGVjcmlwdGlvbiIsImRhdGUiLCJwcmlvcml0eSIsImlkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsImUiLCJ0YXJnZXQiLCJjb250YWlucyIsInRleHRDb250ZW50IiwibW9yZUNvbnRlbnREaXYiLCJhZGQiLCJhZGRUb1BhZ2VOYW1lUHJvamVjdCIsImFkZERpdiIsImluZGV4IiwiaiIsIm1hbnlQcm9qZWN0cyIsImNyZWF0ZUVsZW1lbnQiLCJkaXZUYXNrcyIsImRhdGFzZXQiLCJuYW1lQW5kUHJpb3JpdHkiLCJhcHBlbmRDaGlsZCIsImNoZWNrYm94IiwiY2hlY2tib3hJbnB1dCIsInR5cGUiLCJkZWxldGVEaXYiLCJtYXRlcmlhbEljb25zRGVsZXRlIiwiaW5kZXhNYWluT25lIiwiaW5kZXhNYWluVHdvIiwiaW5kZXhNYWluIiwibW9yZUNvbnRlbnQiLCJuYW1lUHJvamVjdEFuZERlc2NyaXB0aW9uIiwibmFtZVByb2plY3RUd28iLCJkZXNjcmlwdGlvblR3byIsImRhdGVBbmRQcmlvcml0eSIsImRhdGVQcm9qZWN0IiwicHJpb3JpdHlQcm9qZWN0Iiwia2V5IiwicCJdLCJzb3VyY2VSb290IjoiIn0=