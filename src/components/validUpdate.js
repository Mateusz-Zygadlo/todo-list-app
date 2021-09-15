const validUpdate = () => {

    const updateNameTasks = document.querySelector('.updateNameTasks');
    const updateDescriptiontasks = document.querySelector('.updateDescriptiontasks');
    const updateDateTasks = document.querySelector('.updateDateTasks');
    const updatePriorityTasksInput = document.querySelector('.updatePriorityTasksInput');

    const noValidUpdateOne = document.querySelector('.noValidUpdateOne');
    const noValidUpdateTwo = document.querySelector('.noValidUpdateTwo');
    const noValidUpdateThree = document.querySelector('.noValidUpdateThree');
    const noValidUpdateFour = document.querySelector('.noValidUpdateFour');

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

export default validUpdate;