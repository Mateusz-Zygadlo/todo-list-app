const viewMore = document.querySelector('.view-more');
const more = document.querySelector('.more');
const projectsDiv = document.querySelector('.projects');
const projectFolder = document.querySelector('.projects-folder');

const newArr = [
    {
        name: 'inbox',
        tasks: [],
    }
];
let nowProject;

const addItem = document.querySelector('.addItem');
const addProject = document.querySelector('.addProject');

const closeNewProject = document.querySelector('.close');
const addNewProject = document.querySelector('.add');

const addProjectInput = document.querySelector('.addProjectInput');

const root = document.querySelector('.root');
let projectsNameInPage = document.querySelectorAll('.projectsNameInPage');


const nameTasks = document.querySelector('.nameTasks');
const descriptiontasks = document.querySelector('.descriptiontasks');
const dateTasks = document.querySelector('.dateTasks');
const priorityTasksInput = document.querySelector('.priorityTasksInput');

const addNav = document.querySelector('.addNav');
const addtasks = document.querySelector('.addtasks');
const closeTasksClick = document.querySelector('.closeTasksClick');
const addTasksButton = document.querySelector('.addTasksButton');

const projectsContent = document.querySelector('.projects-content');

closeTasksClick.addEventListener('click', () => {
    nameTasks.value = '';
    descriptiontasks.value = '';
    dateTasks.value = '';
    priorityTasksInput.value = '';
    addtasks.classList.toggle('visiblity');
})

addNav.addEventListener('click', () => {
    addtasks.classList.toggle('visiblity');
})

addTasksButton.addEventListener('click', () => {
    if(nowProject){
        for(let i = 0; i < newArr.length; i++){
            if(newArr[i].name == nowProject){
                newArr[i].tasks.push({
                    name: nameTasks.value,
                    decription: descriptiontasks.value,
                    date: dateTasks.value,
                    priority: priorityTasksInput.value,
                })
            }
        }
    }else{
        newArr[0].tasks.push({
            name: nameTasks.value,
            decription: descriptiontasks.value,
            date: dateTasks.value,
            priority: priorityTasksInput.value,
        })
    }

    nameTasks.value = '';
    descriptiontasks.value = '';
    dateTasks.value = '';
    priorityTasksInput.value = '';

    addtasks.classList.toggle('visiblity');
    console.log(newArr);
    console.log(nowProject);
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('projectsNameInPage')){
        for(let i = 0; i < newArr.length; i++){
            if(newArr[i].name == e.target.textContent){
                console.log(newArr[i].name);
                console.log(newArr[i].tasks);
                nowProject = newArr[i].name;
            }
        }
    }else{
        return;
    }
})

addItem.addEventListener('click', () => {
    addProject.classList.toggle('visiblity');
})

closeNewProject.addEventListener('click', () => {
    addProjectInput.value = '';
    addProject.classList.add('visiblity');
})

addNewProject.addEventListener('click', () => {
    newArr.push({
        name: addProjectInput.value,
        tasks: [],
    })
    console.log(newArr);
    addProjectInput.value = '';
    addProject.classList.add('visiblity');
    addToPageNameProject();
})

const addTaskInMainPage = () => {
    const manyProjects = document.createElement('div');
    manyProjects.classList.add('manyProjects');

    const divTasks = document.createElement('div');
    divTasks.classList.add('tasks');

    const nameAndPriority = document.createElement('div');
    nameAndPriority.classList.add('name-and-priority');

    const priority = document.createElement('div');
    priority.classList.add('priority');

    nameAndPriority.appendChild(priority);

    const checkbox = document.createElement('div');
    checkbox.classList.add('checkbox');

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';

    checkbox.appendChild(checkboxInput);

    nameAndPriority.appendChild(checkbox);

    const name = document.createElement('div');
    name.textContent = 'testName';
    name.classList.add('name');

    nameAndPriority.appendChild(name);

    divTasks.appendChild(nameAndPriority);

    const deleteDiv = document.createElement('div');
    deleteDiv.classList.add('delete');

    const materialIconsDelete = document.createElement('span');
    materialIconsDelete.classList.add('material-icons');
    materialIconsDelete.textContent = 'delete';

    deleteDiv.appendChild(materialIconsDelete);
    
    divTasks.appendChild(deleteDiv);

    manyProjects.appendChild(divTasks);

    const moreContent = document.createElement('div');
    moreContent.classList.add('moreContent');
    moreContent.classList.add('visiblity');

    const nameProjectAndDescription = document.createElement('div');
    nameProjectAndDescription.classList.add('nameProject-and-description');

    const nameProjectTwo = document.createElement('div');
    nameProjectTwo.textContent = 'test name two';
    nameProjectTwo.classList.add('nameProject');

    nameProjectAndDescription.appendChild(nameProjectTwo);

    const descriptionTwo = document.createElement('div');
    descriptionTwo.textContent = 'test description';
    descriptionTwo.classList.add('descriptionProject');

    nameProjectAndDescription.appendChild(descriptionTwo);

    moreContent.appendChild(nameProjectAndDescription);

    const dateAndPriority = document.createElement('div');
    dateAndPriority.classList.add('date-and-priority');

    const dateProject = document.createElement('div');
    dateAndPriority.textContent = 'test date';
    dateProject.classList.add('dateProject');

    dateAndPriority.appendChild(dateProject);

    const priorityProject = document.createElement('div');
    priorityProject.textContent = 'test priority';
    priorityProject.classList.add('priorityProject');

    dateAndPriority.appendChild(priorityProject);

    moreContent.appendChild(dateAndPriority);

    manyProjects.appendChild(moreContent);

    projectsContent.appendChild(manyProjects);
}

const addToPageNameProject = () => {
    root.textContent = '';
    
    for(key in newArr){
        
        if(newArr[key].name == 'inbox'){
            
        }else{
            const p = document.createElement('p');
            p.classList.add('projectsNameInPage');
            p.textContent = newArr[key].name;

            root.appendChild(p);
        }
    }
    projectsNameInPage = document.querySelectorAll('.projectsNameInPage');
}

viewMore.addEventListener('click', () => {
    if(more.textContent == 'expand_more'){
        more.textContent = 'expand_less';
    }else{
        more.textContent = 'expand_more';
    }
    
    projectsDiv.classList.toggle('visiblity');
    projectFolder.classList.toggle('overflow');
    projectFolder.classList.toggle('overflowHidden');
})

console.log(Math.random() * 100);

addTaskInMainPage();