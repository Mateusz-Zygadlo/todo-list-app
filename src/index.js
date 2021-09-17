import navBar from "./components/navBar";
import mainPage from './components/mainPage';
import newProjectPopUp from './components/newProjectPopUp';
import addTasksPopUp from './components/addTasksPopUp';
import updateTasksPopUp from './components/updateTasksPopUp';
import deletePopUp from './components/deletePopUp';
import deletePopUpComplitedTasks from './components/deletePopUpComplitedTasks';
import createDiv from "./components/createTaskDiv";
import nowPageInTasks from './components/nowPageInTasks';
import allTasks from './components/allTasks';

navBar();
mainPage();
newProjectPopUp();
addTasksPopUp();
updateTasksPopUp();
deletePopUp();
deletePopUpComplitedTasks();


let complitedTasks = [];
let newArr = [];

if(localStorage.getItem('newArr')) {
    newArr = JSON.parse(localStorage.getItem('newArr'));
    complitedTasks = newArr[0];
}else{
    newArr = [
        complitedTasks, 
    { 
        name: 'inbox',
        tasks: [],
    }];
}

const viewMore = document.querySelector('.view-more');
const more = document.querySelector('.more');
const projectsDiv = document.querySelector('.projects');
const projectFolder = document.querySelector('.folder');
const main = document.querySelector('.mainMain');

const bg = document.querySelector('.bg');
const bgTwo = document.querySelector('.bgTwo');

const inboxMain = document.querySelector('.inbox');

let nowProject;
let count;
let deleteButton = document.querySelectorAll('.delete');

const allClick = document.querySelector('.allClick');

allClick.addEventListener('click', () => {
    nowProject = 'all';
    allTasks(newArr, nowProject);
})

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

const projectsContent = document.querySelector('.content');

const noValidOne = document.querySelector('.noValidOne');
const noValidTwo = document.querySelector('.noValidTwo');
const noValidThree = document.querySelector('.noValidThree');
const noValidFour = document.querySelector('.noValidFour');
const noValidFive = document.querySelector('.noValidFive');

inboxMain.addEventListener('click', () => {
    nowProject = 'inbox';
    createDiv(newArr, nowProject);
})

closeTasksClick.addEventListener('click', () => {
    nameTasks.value = '';
    descriptiontasks.value = '';
    dateTasks.value = '';
    priorityTasksInput.value = '';
    addtasks.classList.toggle('visiblity');
    bg.classList.toggle('visiblity');
})

addNav.addEventListener('click', () => {
    addtasks.classList.toggle('visiblity');
    bg.classList.toggle('visiblity');
    projectFolder.classList.remove('z-index-toggle');
    standardInputs();
})

const standardInputs = () => {
    noValidTwo.classList.add('visiblity');
    nameTasks.style.border = '1px solid black';

    noValidThree.classList.add('visiblity');
    descriptiontasks.style.border = '1px solid black';

    noValidFour.classList.add('visiblity');
    dateTasks.style.border = '1px solid black';

    noValidFive.classList.add('visiblity');
    priorityTasksInput.style.border = '1px solid black';
}

const isValid = () => {
    let count = 0;

    if(!nameTasks.value){
        noValidTwo.classList.remove('visiblity');
        nameTasks.style.border = '1px solid red';
        count++;
    }else{
        noValidTwo.classList.add('visiblity');
        nameTasks.style.border = '1px solid black';
    }
    if(!descriptiontasks.value){
        noValidThree.classList.remove('visiblity');
        descriptiontasks.style.border = '1px solid red';
        count++;
    }else{
        noValidThree.classList.add('visiblity');
        descriptiontasks.style.border = '1px solid black';
    }
    if(!dateTasks.value){
        noValidFour.classList.remove('visiblity');
        dateTasks.style.border = '1px solid red';
        count++;
    }else{
        noValidFour.classList.add('visiblity');
        dateTasks.style.border = '1px solid black';
    }
    if(!priorityTasksInput.value){
        noValidFive.classList.remove('visiblity');
        priorityTasksInput.style.border = '1px solid red';
        count++;
    }else{
        noValidFive.classList.add('visiblity');
        priorityTasksInput.style.border = '1px solid black';
    }

    return{
        count,
    }
}

const addTasks = (newArr, nowProject) => {
    if(isValid().count){
        return;
    }

    if(nowProject == 'complited' || nowProject == 'all'){
        nowProject = 'inbox';
        newArr[1].tasks.push({
            name: nameTasks.value,
            decription: descriptiontasks.value,
            date: dateTasks.value,
            priority: priorityTasksInput.value,
            id: Math.floor(Math.random() * 100000),
        })

        count = 0;
    }else{
        if(nowProject){
            for(let i = 0; i < newArr.length; i++){
                if(newArr[i].name == nowProject){
                    newArr[i].tasks.push({
                        name: nameTasks.value,
                        decription: descriptiontasks.value,
                        date: dateTasks.value,
                        priority: priorityTasksInput.value,
                        id: Math.floor(Math.random() * 100000),
                    })
                    count = i;
                }
            }
        }else{
            nowProject = 'inbox';
            newArr[1].tasks.push({
                name: nameTasks.value,
                decription: descriptiontasks.value,
                date: dateTasks.value,
                priority: priorityTasksInput.value,
                id: Math.floor(Math.random() * 100000),
            })
    
            count = 0;
        } 
    }

    createDiv(newArr, nowProject);

    localStorage.setItem('newArr', JSON.stringify(newArr));

    deleteButton = document.querySelectorAll('.delete');

    nameTasks.value = '';
    descriptiontasks.value = '';

    addtasks.classList.toggle('visiblity');
    bg.classList.toggle('visiblity');
    addToPageNameProject(newArr);
}

addTasksButton.addEventListener('click', () => {
    addTasks(newArr, nowProject)
});

inboxClick.addEventListener('click', () => {
    nowProject = 'inbox';
    createDiv(newArr, nowProject);
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('projectsNameInPage')){
        for(let i = 0; i < newArr.length; i++){
            if(newArr[i].name == e.target.textContent){
                nowProject = newArr[i].name;
            }
        }
    }else{
        return;
    }

    createDiv(newArr, nowProject);
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('menu')){
        projectFolder.classList.toggle('projects-folder');
        projectFolder.classList.toggle('projects-folderClick');
        projectsContent.classList.toggle('projects-content');
        projectsContent.classList.toggle('projects-contentClick');
        main.classList.toggle('mainMain');
        main.classList.toggle('mainMainClick');
    }
})

addItem.addEventListener('click', () => {
    addProject.classList.toggle('visiblity');
    bgTwo.classList.toggle('visiblity');
    projectFolder.classList.remove('z-index-toggle');
    noValidOne.classList.add('visiblity');
    addProjectInput.style.border = '1px solid black';
})

closeNewProject.addEventListener('click', () => {
    addProjectInput.value = '';
    bgTwo.classList.toggle('visiblity');
    addProject.classList.add('visiblity');
})

const addProjects = (newArr, nowProject) => {
    if(!addProjectInput.value){
        noValidOne.classList.remove('visiblity');
        addProjectInput.style.border = '1px solid red';
        return;
    }

    newArr.push({
        name: addProjectInput.value,
        tasks: [],
    })

    nowProject = addProjectInput.value;
    addProjectInput.value = '';
    addProject.classList.add('visiblity');
    bgTwo.classList.toggle('visiblity');
    addToPageNameProject(newArr);
    createDiv(newArr, nowProject);
    localStorage.setItem('newArr', JSON.stringify(newArr));
}

addNewProject.addEventListener('click', () => {
    addProjects(newArr, nowProject);
})

const viewMores = (id, newArr) => {
    let indexMain = id;
    let indexMainOne;
    let indexMainTwo;

    for(let i = 0; i < newArr.length; i++){
        if(!newArr[i].tasks){
            i++;
        }
        for(let j = 0; j < newArr[i].tasks.length; j++){
            if(newArr[i].tasks[j].id == indexMain){
                indexMainOne = i
                indexMainTwo = j;
            }
        }
    }

    addDiv(newArr, indexMainOne, indexMainTwo);
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('viewMoreBtn')){
        viewMores(e.target.dataset.id, newArr);
    }
})

const buttonCancel = document.querySelector('.cancel');
const buttonDeleteTasks = document.querySelector('.deleteTasks');
const popUpDelete = document.querySelector('.bgFour');

const deleteTask = (newArr, nowProject, id) => {
    let index = 0;
    let indexTwo = 0;
    popUpDelete.classList.remove('visiblity');
        
    buttonCancel.addEventListener('click', () => {
        popUpDelete.classList.add('visiblity');
    })
    buttonDeleteTasks.addEventListener('click', () => {
        for(let i = 0; i < newArr.length; i++){
            if(!newArr[i].tasks){
                i++;
            }
            for(let j = 0; j < newArr[i].tasks.length; j++){
                if(newArr[i].tasks[j].id == id){
                    index = i
                    indexTwo = j;
                }
            }
        }

        newArr[index].tasks.splice(indexTwo, 1);
            
        if(nowProject == 'all'){
            allTasks(newArr, nowProject);
        }else{
            createDiv(newArr, nowProject);
        }

        popUpDelete.classList.add('visiblity');

        localStorage.setItem('newArr', JSON.stringify(newArr));
    })
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        deleteTask(newArr, nowProject, e.target.dataset.id);
    }
})

const checkboxClick = (newArr, nowProject, id) => {
    let index;
    let indexTwo;

    for(let i = 0; i < newArr.length; i++){
        if(!newArr[i].tasks){
            i++;
        }
        for(let j = 0; j < newArr[i].tasks.length; j++){
            if(newArr[i].tasks[j].id == id){
                index = i
                indexTwo = j;
            }
        }
    }

    complitedTasks.push(newArr[index].tasks[indexTwo]);

    newArr[index].tasks.splice(indexTwo, 1);

    if(nowProject == 'all'){
        allTasks(newArr, nowProject);
    }else{
        createDiv(newArr, nowProject);
    }

   localStorage.setItem('newArr', JSON.stringify(newArr));
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('checkbox')){
        if(e.target.checked){
            checkboxClick(newArr, nowProject, e.target.dataset.id);
            localStorage.setItem('newArr', JSON.stringify(newArr));
        }
    }
        
    return;
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('done')){
        nowProject = 'complited';
        complitedDiv(complitedTasks, nowProject);
    }
})

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

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('viewMoreBtnComplited')){
        complitedViewMore(e.target.dataset.id);
    }
})

const complitedViewMore = (test) => {
    let index;

    for(let i = 0; i < complitedTasks.length; i++){
        if(test == complitedTasks[i].id){
            index = i;
        }
    }
    
    const moreContent = document.createElement('div');
    moreContent.classList.add('moreContent');

    const closeButton = document.createElement('div');
    closeButton.classList.add('material-icons');
    closeButton.classList.add('closeBtnMore');
    closeButton.textContent = 'close';

    moreContent.appendChild(closeButton);

    const nameProjectAndDescription = document.createElement('div');
    nameProjectAndDescription.classList.add('nameProject-and-description');

    const nameProjectTwo = document.createElement('div');
    nameProjectTwo.textContent = `name: ${complitedTasks[index].name}`;
    nameProjectTwo.classList.add('nameProject');

    nameProjectAndDescription.appendChild(nameProjectTwo);

    const descriptionTwo = document.createElement('div');
    descriptionTwo.textContent = `description: ${complitedTasks[index].decription}`;
    descriptionTwo.classList.add('descriptionProject');

    nameProjectAndDescription.appendChild(descriptionTwo);

    moreContent.appendChild(nameProjectAndDescription);

    const dateAndPriority = document.createElement('div');
    dateAndPriority.classList.add('date-and-priority');

    const dateProject = document.createElement('div');
    dateProject.textContent = `date: ${complitedTasks[index].date}`;
    dateProject.classList.add('dateProject');

    dateAndPriority.appendChild(dateProject);

    const priorityProject = document.createElement('div');
    priorityProject.textContent = `priority: ${complitedTasks[index].priority}`;
    priorityProject.classList.add('priorityProject');

    dateAndPriority.appendChild(priorityProject);

    moreContent.appendChild(dateAndPriority);

    const bgThree = document.createElement('div');
    bgThree.classList.add('bgThree');

    bgThree.appendChild(moreContent)

    document.body.appendChild(bgThree);
}

const bgFive = document.querySelector('.bgFive');
const deleteTasksTwo = document.querySelector('.deleteTasksTwo');
const cancelTwo = document.querySelector('.cancelTwo');

const complitedTasksDelete = (complitedTasks, id) => {
    bgFive.classList.remove('visiblity');
        
    cancelTwo.addEventListener('click', () => {
        bgFive.classList.add('visiblity');
    })
    deleteTasksTwo.addEventListener('click', () => {
        for(let i = 0; i < complitedTasks.length; i++){
            if(complitedTasks[i].id == id){
                complitedTasks.splice(i, 1);
            }
        }

        complitedDiv(complitedTasks, nowProject);

        bgFive.classList.add('visiblity');

        localStorage.setItem('newArr', JSON.stringify(newArr));
    })
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('complitedTasksDeleteButton')){
        complitedTasksDelete(complitedTasks, e.target.dataset.id);
        nowPageInTasks();
    }
})

const updatePopUp = document.querySelector('.bgSix');
const closeTasksUpdate = document.querySelector('.closeTasksUpdate');

const updateNameTasks = document.querySelector('.updateNameTasks');
const updateDescriptiontasks = document.querySelector('.updateDescriptiontasks');
const updateDateTasks = document.querySelector('.updateDateTasks');
const updatePriorityTasksInput = document.querySelector('.updatePriorityTasksInput');

const noValidUpdateOne = document.querySelector('.noValidUpdateOne');
const noValidUpdateTwo = document.querySelector('.noValidUpdateTwo');
const noValidUpdateThree = document.querySelector('.noValidUpdateThree');
const noValidUpdateFour = document.querySelector('.noValidUpdateFour');

const UpdateTasksButton = document.querySelector('.UpdateTasksButton')


const validUpdate = () => {
    let countTest = 0;

    if(!updateNameTasks.value){
        noValidUpdateOne.classList.remove('visiblity');
        updateNameTasks.style.border = '1px solid red';
        countTest++;
    }
    if(!updateDescriptiontasks.value){
        noValidUpdateTwo.classList.remove('visiblity');
        updateDescriptiontasks.style.border = '1px solid red';
        countTest++;
    }
    if(!updateDateTasks.value){
        noValidUpdateThree.classList.remove('visiblity');
        updateDateTasks.style.border = '1px solid red';
        countTest++;
    }
    if(!updatePriorityTasksInput.value){
        noValidUpdateFour.classList.remove('visiblity');
        updatePriorityTasksInput.style.border = '1px solid red';
        countTest++;
    }

    return{
        countTest,
    }
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('editButton')){
        editButtons(newArr, e.target.dataset.id);
    }
})

const editButtons = (newArr, id) => {
    let test = 0;
    let testTwo = 0;

    for(let i = 0; i < newArr.length; i++){
        if(!newArr[i].tasks){
            i++;
        }
        for(let j = 0; j < newArr[i].tasks.length; j++){
            if(newArr[i].tasks[j].id == id){
                test = i;
                testTwo = j;
            }
        }
    }

    updateNameTasks.value = newArr[test].tasks[testTwo].name;
    updateDescriptiontasks.value = newArr[test].tasks[testTwo].decription;
    updateDateTasks.value = newArr[test].tasks[testTwo].date;
    updatePriorityTasksInput.value = newArr[test].tasks[testTwo].priority;

    updatePopUp.classList.remove('visiblity');

    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('closeTasksClick')){
            updateNameTasks.value = '';
            updateDescriptiontasks.value = '';
            updateDateTasks.value = '';
            updatePriorityTasksInput.value = '';
    
            updatePopUp.classList.add('visiblity');
        }
    })

    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('UpdateTasksButton')){
            if(validUpdate().countTest){
                return;
            }else{
                try{
                    newArr[test].tasks[testTwo].name = updateNameTasks.value;
                    newArr[test].tasks[testTwo].decription = updateDescriptiontasks.value;
                    newArr[test].tasks[testTwo].date = updateDateTasks.value;
                    newArr[test].tasks[testTwo].priority = updatePriorityTasksInput.value;
        
                    updateNameTasks.value = '';
                    updateDescriptiontasks.value = '';
                    updateDateTasks.value = '';
                    updatePriorityTasksInput.value = '';
        
                    if(nowProject == 'all'){
                        allTasks(newArr, nowProject);
                    }else{
                        createDiv(newArr, nowProject);
                    }
        
                    localStorage.setItem('newArr', JSON.stringify(newArr));
        
                    test = 0;
                    testTwo = 0;
        
                    updatePopUp.classList.add('visiblity');
                }catch(err){
                    console.log(err);
                }  
            }
        }   
    })
}


document.addEventListener('click', (e) => {
    if(e.target.classList.contains('closeBtnMore')){
        [...document.getElementsByClassName('moreContent')].map(item => item && item.remove());
        [...document.getElementsByClassName('bgThree')].map(item => item && item.remove());
    }
})

const addToPageNameProject = (newArr) => {
    root.textContent = '';
    
    for(let i = 1; i < newArr.length; i++){
        if(newArr[i].name == 'inbox'){

        }else{
            const p = document.createElement('p');
            p.classList.add('projectsNameInPage');
            p.textContent = newArr[i].name;
            nowProject = newArr[i].name;

            if(p.textContent){
                root.appendChild(p);
            }
        }
    }

    projectsNameInPage = document.querySelectorAll('.projectsNameInPage');
}

const addDiv = (newArr, indexMainOne, indexMainTwo) => {
    const moreContent = document.createElement('div');
    moreContent.classList.add('moreContent');

    const closeButton = document.createElement('div');
    closeButton.classList.add('closeBtnMore');
    closeButton.classList.add('material-icons')
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
    dateProject.textContent = `date: ${newArr[indexMainOne].tasks[indexMainTwo].date}`;
    dateProject.classList.add('dateProject');

    dateAndPriority.appendChild(dateProject);

    const priorityProject = document.createElement('div');
    priorityProject.textContent = `priority: ${newArr[indexMainOne].tasks[indexMainTwo].priority}`;
    priorityProject.classList.add('priorityProject');

    dateAndPriority.appendChild(priorityProject);

    moreContent.appendChild(dateAndPriority);

    const bgThree = document.createElement('div');
    bgThree.classList.add('bgThree');

    bgThree.appendChild(moreContent);

    document.body.appendChild(bgThree);
}


const expand_less_more = () => {
    if(more.textContent == 'expand_more'){
        more.textContent = 'expand_less';
    }else{
        more.textContent = 'expand_more';
    }
    
    projectsDiv.classList.toggle('visiblity');
    projectFolder.classList.toggle('overflow');
    projectFolder.classList.toggle('overflowHidden');
}

viewMore.addEventListener('click', expand_less_more)

nowProject = 'inbox';
createDiv(newArr, nowProject);