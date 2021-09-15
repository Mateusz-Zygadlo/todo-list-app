import navBar from "./components/navBar";
import mainPage from './components/mainPage';
import newProjectPopUp from './components/newProjectPopUp';
import addTasksPopUp from './components/addTasksPopUp';
import updateTasksPopUp from './components/updateTasksPopUp';
import deletePopUp from './components/deletePopUp';
import deletePopUpComplitedTasks from './components/deletePopUpComplitedTasks';
import createDiv from "./components/createTaskDiv";
import allTasks from './components/allTasks';
import complitedDiv from './components/complitedDiv';
import complitedViewMore from './components/complitedViewMorePopUp';
import addTasks from './components/addTasks';
import addNewProject from './components/addNewProject';
import expand_less_more from './components/expand_less_more';
import editTasks from './components/editTasks';
import complitedDeleteTasks from './components/complitedDeleteTasks';
import checked from "./components/checked";
import deleteTasks from './components/deleteTasks';
import viewMore from './components/viewMore';
import menuBurger from "./components/menuBurger";
import nowProjectName from "./components/nowProjectName";
import closeButton from "./components/closeButton";
import addNav from './components/addNav';
import closeTask from "./components/closeTask";

navBar();
mainPage();
newProjectPopUp();
addTasksPopUp();
updateTasksPopUp();
deletePopUp();
deletePopUpComplitedTasks();

const complitedTasks = [];

const newArr = [
    complitedTasks, 
{ 
    name: 'inbox',
    tasks: [],
}];

window.localStorage.setItem('newArr', JSON.stringify(newArr));

let nowProject;

const allClick = document.querySelector('.allClick');

allClick.addEventListener('click', () => {
    nowProject = 'all';
    allTasks(newArr, nowProject);
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('inbox')){
        nowProject = 'inbox';
        createDiv(newArr, nowProject);
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('closeTasksClick')){
        closeTask();
    }
})


document.addEventListener('click', (e) => {
    if(e.target.classList.contains('addNav')){
        addNav();
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.toggle('addTasksButton')){
        addTasks(newArr, nowProject);
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('inboxClick')){
        nowProject = 'inbox';
        createDiv(newArr, nowProject);
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('projectsNameInPage')){
        nowProjectName(e.target.textContent, newArr);
    }

    createDiv(newArr, nowProject);
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('menu')){
        menuBurger();
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('addItem')){
        addItemPopUp();
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('close')){
        closeButton();
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('add')){
        addNewProject(newArr, nowProject);
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('viewMoreBtn')){
        viewMore(e.target.dataset.id, newArr);
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        deleteTasks(e.target.dataset.id, newArr, nowProject);
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('checkbox')){
        checked(e.target.checked, newArr, complitedTasks, nowProject);
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('done')){
        nowProject = 'complited';
        complitedDiv(complitedTasks, nowProject);

        window.localStorage.setItem('newArr', JSON.stringify(newArr));
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('viewMoreBtnComplited')){
        complitedViewMore(e.target.dataset.id, complitedTasks);
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('complitedTasksDeleteButton')){
        complitedDeleteTasks(complitedTasks, e.target.dataset.id);
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('editButton')){
        editTasks(newArr, e.target.dataset.id);
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('closeBtnMore')){
        [...document.getElementsByClassName('moreContent')].map(item => item && item.remove());
        [...document.getElementsByClassName('bgThree')].map(item => item && item.remove());
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('view-more')){
        expand_less_more();
    }
})

nowProject = 'inbox';
createDiv(newArr, nowProject);