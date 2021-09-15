import nowPageInTasks from "./nowPageInTasks";

const complitedDiv = (complitedTasks, nowProject) => {

    const projectsContent = document.querySelector('.content');

    projectsContent.textContent = '';
    let borderColorClass;

    nowPageInTasks(nowProject);
    
    for(let j = 0; j < complitedTasks.length; j++){

        
        if(complitedTasks[j].priority == 'low'){
            borderColorClass = 'lightblue';
        }else if(complitedTasks[j].priority == 'medium'){
            borderColorClass = 'orange';
        }else if(complitedTasks[j].priority == 'high'){
            borderColorClass = 'red';
        }

        const manyProjects = document.createElement('div');
        manyProjects.classList.add('manyProjects');

        const divTasks = document.createElement('div');
        divTasks.dataset.id = complitedTasks[j].id;
        divTasks.classList.add('tasks');
        divTasks.classList.add(borderColorClass);

        const nameAndPriority = document.createElement('div');
        nameAndPriority.classList.add('name-and-priority');

        const checkbox = document.createElement('div');

        nameAndPriority.appendChild(checkbox);

        const name = document.createElement('div');
        name.textContent = complitedTasks[j].name;
        name.classList.add('name');

        nameAndPriority.appendChild(name);

        divTasks.appendChild(nameAndPriority);

        const deleteDiv = document.createElement('div');
        deleteDiv.classList.add('delete');

        const viewMoreBtn = document.createElement('button');
        viewMoreBtn.classList.add('viewMoreBtnComplited');
        viewMoreBtn.textContent = 'view more';
        viewMoreBtn.dataset.id = complitedTasks[j].id;

        deleteDiv.appendChild(viewMoreBtn);

        const deleteBtn = document.createElement('span');
        deleteBtn.classList.add('material-icons');
        deleteBtn.textContent = 'delete';
        deleteBtn.classList.add('complitedTasksDeleteButton');
        deleteBtn.dataset.id = complitedTasks[j].id;

        deleteDiv.appendChild(deleteBtn);

        const priority = document.createElement('div');
        priority.classList.add('priority');
    
        divTasks.appendChild(deleteDiv);

        manyProjects.appendChild(divTasks);

        projectsContent.appendChild(manyProjects);

    }
}

export default complitedDiv;