const closeTask = () => {
    
    const nameTasks = document.querySelector('.nameTasks');
    const descriptiontasks = document.querySelector('.descriptiontasks');
    const dateTasks = document.querySelector('.dateTasks');
    const priorityTasksInput = document.querySelector('.priorityTasksInput');
    const addtasks = document.querySelector('.addtasks');
    const bg = document.querySelector('.bg');

    nameTasks.value = '';
    descriptiontasks.value = '';
    dateTasks.value = '';
    priorityTasksInput.value = '';
    addtasks.classList.toggle('visiblity');
    bg.classList.toggle('visiblity');
}

export default closeTask;