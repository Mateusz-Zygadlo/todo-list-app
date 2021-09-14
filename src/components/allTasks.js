import nowPageInTasks from "./nowPageInTasks";

const allTasks = (newArr, nowProject) => {

    const projectsContent = document.querySelector('.content');
    
    let borderColorClass;
    projectsContent.textContent = '';

    nowPageInTasks(nowProject);

    for(let i = 0; i < newArr.length; i++){
        if(!newArr[i].tasks){
            i++;
        }
        for(let j = 0; j < newArr[i].tasks.length; j++){

            if(newArr[i].tasks[j].priority == 'low'){
                borderColorClass = 'lightblue';
            }else if(newArr[i].tasks[j].priority == 'medium'){
                borderColorClass = 'orange';
            }else if(newArr[i].tasks[j].priority == 'high'){
                borderColorClass = 'red';
            }
    
            const manyProjects = document.createElement('div');
            manyProjects.classList.add('manyProjects');
    
            const divTasks = document.createElement('div');
            divTasks.dataset.id = newArr[i].tasks[j].id;
            divTasks.classList.add('tasks');
            divTasks.classList.add(borderColorClass);
    
            const nameAndPriority = document.createElement('div');
            nameAndPriority.classList.add('name-and-priority');
    
            const checkbox = document.createElement('div');
    
            const checkboxInput = document.createElement('input');
            checkboxInput.dataset.id = newArr[i].tasks[j].id;
            checkboxInput.classList.add('checkbox');
            checkboxInput.type = 'checkbox';
    
            checkbox.appendChild(checkboxInput);
    
            nameAndPriority.appendChild(checkbox);
    
            const name = document.createElement('div');
            name.textContent = newArr[i].tasks[j].name;
            name.classList.add('name');
    
            nameAndPriority.appendChild(name);
    
            divTasks.appendChild(nameAndPriority);
    
            const deleteDiv = document.createElement('div');
            deleteDiv.classList.add('delete');
    
            const editButton = document.createElement('button');
            editButton.classList.add('editButton');
            editButton.textContent = 'edit';
            editButton.dataset.id = newArr[i].tasks[j].id;
    
            deleteDiv.appendChild(editButton)
    
            const viewMoreBtn = document.createElement('button');
            viewMoreBtn.classList.add('viewMoreBtn');
            viewMoreBtn.textContent = 'view more';
            viewMoreBtn.dataset.id = newArr[i].tasks[j].id;
    
            deleteDiv.appendChild(viewMoreBtn);
    
            const materialIconsDelete = document.createElement('span');
            materialIconsDelete.classList.add('material-icons');
            materialIconsDelete.classList.add('delete');
            materialIconsDelete.textContent = 'delete';
            materialIconsDelete.dataset.id = newArr[i].tasks[j].id;
    
            const priority = document.createElement('div');
            priority.classList.add('priority');
    
            deleteDiv.appendChild(materialIconsDelete);
        
            divTasks.appendChild(deleteDiv);
    
            manyProjects.appendChild(divTasks);
    
            projectsContent.appendChild(manyProjects);
        }
    }
}

export default allTasks;