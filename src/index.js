const viewMore = document.querySelector('.view-more');
const more = document.querySelector('.more');
const projectsDiv = document.querySelector('.projects');
const projectFolder = document.querySelector('.projects-folder');
const menu = document.querySelector('.menu');

const inboxMain = document.querySelector('.inbox');

const newArr = [{ name: 'inbox', tasks: [] }];
let nowProject;
let count;

let deleteButton = document.querySelectorAll('.delete');

const addItem = document.querySelector('.addItem');
const addProject = document.querySelector('.addProject');

const closeNewProject = document.querySelector('.close');
const addNewProject = document.querySelector('.add');

const addProjectInput = document.querySelector('.addProjectInput');

const root = document.querySelector('.root');
let projectsNameInPage = document.querySelectorAll('.projectsNameInPage');

const inboxClick = document.querySelector('.inboxClick');

const nameTasks = document.querySelector('.nameTasks');
const descriptiontasks = document.querySelector('.descriptiontasks');
const dateTasks = document.querySelector('.dateTasks');
const priorityTasksInput = document.querySelector('.priorityTasksInput');

const addNav = document.querySelector('.addNav');
const addtasks = document.querySelector('.addtasks');
const closeTasksClick = document.querySelector('.closeTasksClick');
const addTasksButton = document.querySelector('.addTasksButton');

const projectsContent = document.querySelector('.projects-content');

inboxMain.addEventListener('click', () => {
    nowProject = 'inbox';
    createDiv();
})

menu.addEventListener('click', () => {
   projectFolder.classList.toggle('z-index-toggle');
})

closeTasksClick.addEventListener('click', () => {
    nameTasks.value = '';
    descriptiontasks.value = '';
    dateTasks.value = '';
    priorityTasksInput.value = '';
    addtasks.classList.toggle('visiblity');
})

addNav.addEventListener('click', () => {
    addtasks.classList.toggle('visiblity');
    projectFolder.classList.remove('z-index-toggle');
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
                    id: Math.floor(Math.random() * 1000),
                })
                count = i;
            }
        }
    }else{
        nowProject = 'inbox';
        newArr[0].tasks.push({
            name: nameTasks.value,
            decription: descriptiontasks.value,
            date: dateTasks.value,
            priority: priorityTasksInput.value,
            id: Math.floor(Math.random() * 1000),
        })

        count = 0;
    }

    createDiv();

    console.log(newArr);
    console.log(nowProject);

    deleteButton = document.querySelectorAll('.delete');

    nameTasks.value = '';
    descriptiontasks.value = '';

    addtasks.classList.toggle('visiblity');
})

inboxClick.addEventListener('click', () => {
    nowProject = 'inbox';
    createDiv();
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('projectsNameInPage')){
        for(let i = 0; i < newArr.length; i++){
            if(newArr[i].name == e.target.textContent){
                nowProject = newArr[i].name;
            }
        }
    }else if(e.target.classList.contains('tasks')){
        const moreContentDiv = document.querySelector('.moreContent');
        const tasks = document.querySelector('.tasks');

        tasks.addEventListener('click', () => {
            moreContentDiv.classList.toggle('visiblity');
        })
        
    }else{
        return;
    }

    createDiv();
})

addItem.addEventListener('click', () => {
    addProject.classList.toggle('visiblity');
    projectFolder.classList.remove('z-index-toggle');
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
    nowProject = addProjectInput.value;
    addProjectInput.value = '';
    addProject.classList.add('visiblity');
    addToPageNameProject();
    createDiv();
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('viewMoreBtn')){
        let indexMain = e.target.dataset.id;

        for(let i = 0; i < newArr.length; i++){
            if(newArr[i].name == nowProject){
                indexMainOne = i;
            }
        }
        for(let j = 0; j < newArr[indexMainOne].tasks.length; j++){
            if(newArr[indexMainOne].tasks[j].id == indexMain){
                indexMainTwo = j;
            }
        }

        addDiv();
    }
})

const createDiv = () => {

    let index;
    projectsContent.textContent = nowProject;

    for(let i = 0; i < newArr.length; i++){
        if(newArr[i].name == nowProject){
            index = i;
        }
    }

    for(let j = 0; j < newArr[index].tasks.length; j++){

        const manyProjects = document.createElement('div');
        manyProjects.classList.add('manyProjects');

        const divTasks = document.createElement('div');
        divTasks.dataset.id = newArr[index].tasks[j].id;
        divTasks.classList.add('tasks');

        const nameAndPriority = document.createElement('div');
        nameAndPriority.classList.add('name-and-priority');

        const checkbox = document.createElement('div');
        checkbox.classList.add('checkbox');

        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';

        checkbox.appendChild(checkboxInput);

        nameAndPriority.appendChild(checkbox);

        const name = document.createElement('div');
        name.textContent = newArr[index].tasks[j].name;
        name.classList.add('name');

        nameAndPriority.appendChild(name);

        divTasks.appendChild(nameAndPriority);

        const deleteDiv = document.createElement('div');
        deleteDiv.classList.add('delete');

        const viewMoreBtn = document.createElement('button');
        viewMoreBtn.classList.add('viewMoreBtn');
        viewMoreBtn.textContent = 'view more';
        viewMoreBtn.dataset.id = newArr[index].tasks[j].id;

        deleteDiv.appendChild(viewMoreBtn);

        const materialIconsDelete = document.createElement('span');
        materialIconsDelete.classList.add('material-icons');
        materialIconsDelete.classList.add('delete');
        materialIconsDelete.textContent = 'delete';

        const priority = document.createElement('div');
        priority.classList.add('priority');

        const strikethrough = document.createElement('div');
        strikethrough.classList.add('strikethrough');

        divTasks.appendChild(strikethrough);

        deleteDiv.appendChild(materialIconsDelete);
    
        divTasks.appendChild(deleteDiv);

        manyProjects.appendChild(divTasks);

        projectsContent.appendChild(manyProjects);
    }
}

let indexMainOne;
let indexMainTwo;

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('closeBtnMore')){
        [...document.getElementsByClassName('moreContent')].map(item => item && item.remove());
    }
})

const addDiv = () => {
    const moreContent = document.createElement('div');
    moreContent.classList.add('moreContent');

    const closeButton = document.createElement('div');
    closeButton.classList.add('closeBtnMore');
    closeButton.textContent = 'close';

    moreContent.appendChild(closeButton);

    const nameProjectAndDescription = document.createElement('div');
    nameProjectAndDescription.classList.add('nameProject-and-description');

    const nameProjectTwo = document.createElement('div');
    nameProjectTwo.textContent = `name: ${newArr[indexMainOne].tasks[indexMainTwo].name}`;
    nameProjectTwo.classList.add('nameProject');

    nameProjectAndDescription.appendChild(nameProjectTwo);

    const descriptionTwo = document.createElement('div');
    descriptionTwo.textContent = `description: ${newArr[indexMainOne].tasks[indexMainTwo].decription}`;
    descriptionTwo.classList.add('descriptionProject');

    nameProjectAndDescription.appendChild(descriptionTwo);

    moreContent.appendChild(nameProjectAndDescription);

    const dateAndPriority = document.createElement('div');
    dateAndPriority.classList.add('date-and-priority');

    const dateProject = document.createElement('div');
    dateAndPriority.textContent = `date: ${newArr[indexMainOne].tasks[indexMainTwo].date}`;
    dateProject.classList.add('dateProject');

    dateAndPriority.appendChild(dateProject);

    const priorityProject = document.createElement('div');
    priorityProject.textContent = `priority: ${newArr[indexMainOne].tasks[indexMainTwo].priority}`;
    priorityProject.classList.add('priorityProject');

    dateAndPriority.appendChild(priorityProject);

    moreContent.appendChild(dateAndPriority);

    document.body.appendChild(moreContent);
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