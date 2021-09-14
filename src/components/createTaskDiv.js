import nowPageInTasks from './nowPageInTasks';

const createDiv = (item, nowProject) => {

    const projectsContent = document.querySelector('.content');
    let borderColorClass;
    let index;
    projectsContent.textContent = '';

    nowPageInTasks(nowProject);

    for(let i = 0; i < item.length; i++){
        if(!item[i].tasks){
            i++;
        }
        if(item[i].name == nowProject){
            index = i;
        }
    }

    for(let j = 0; j < item[index].tasks.length; j++){

        if(item[index].tasks[j].priority == 'low'){
            borderColorClass = 'lightblue';
        }else if(item[index].tasks[j].priority == 'medium'){
            borderColorClass = 'orange';
        }else if(item[index].tasks[j].priority == 'high'){
            borderColorClass = 'red';
        }

        const manyProjects = document.createElement('div');
        manyProjects.classList.add('manyProjects');

        const divTasks = document.createElement('div');
        divTasks.dataset.id = item[index].tasks[j].id;
        divTasks.classList.add('tasks');
        divTasks.classList.add(borderColorClass);

        const nameAndPriority = document.createElement('div');
        nameAndPriority.classList.add('name-and-priority');

        const checkbox = document.createElement('div');

        const checkboxInput = document.createElement('input');
        checkboxInput.dataset.id = item[index].tasks[j].id;
        checkboxInput.classList.add('checkbox');
        checkboxInput.type = 'checkbox';

        checkbox.appendChild(checkboxInput);

        nameAndPriority.appendChild(checkbox);

        const name = document.createElement('div');
        name.textContent = item[index].tasks[j].name;
        name.classList.add('name');

        nameAndPriority.appendChild(name);

        divTasks.appendChild(nameAndPriority);

        const deleteDiv = document.createElement('div');
        deleteDiv.classList.add('delete');

        const editButton = document.createElement('button');
        editButton.classList.add('editButton');
        editButton.textContent = 'edit';
        editButton.dataset.id = item[index].tasks[j].id;

        deleteDiv.appendChild(editButton)

        const viewMoreBtn = document.createElement('button');
        viewMoreBtn.classList.add('viewMoreBtn');
        viewMoreBtn.textContent = 'view more';
        viewMoreBtn.dataset.id = item[index].tasks[j].id;

        deleteDiv.appendChild(viewMoreBtn);

        const materialIconsDelete = document.createElement('span');
        materialIconsDelete.classList.add('material-icons');
        materialIconsDelete.classList.add('delete');
        materialIconsDelete.textContent = 'delete';
        materialIconsDelete.dataset.id = item[index].tasks[j].id;

        const priority = document.createElement('div');
        priority.classList.add('priority');

        deleteDiv.appendChild(materialIconsDelete);
    
        divTasks.appendChild(deleteDiv);

        manyProjects.appendChild(divTasks);

        projectsContent.appendChild(manyProjects);
    }
}

export default createDiv;