const noValidTwo = document.querySelector('.noValidTwo');
const noValidThree = document.querySelector('.noValidThree');
const noValidFour = document.querySelector('.noValidFour');
const noValidFive = document.querySelector('.noValidFive');

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

export default {
    standardInputs,
    isValid
};