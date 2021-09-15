import createDiv from "./createTaskDiv";
import addToPageNameProject from './addToPageNameProject';

const addNewProject = (newArr, nowProject) => {

    const noValidOne = document.querySelector('.noValidOne');
    const addProjectInput = document.querySelector('.addProjectInput');
    const addProject = document.querySelector('.addProject');
    const bgTwo = document.querySelector('.bgTwo');

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
    window.localStorage.setItem('newArr', JSON.stringify(newArr));
}

export default addNewProject;