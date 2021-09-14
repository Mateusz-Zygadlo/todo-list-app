const addTasksPopUp = () => {

    const rootApp = document.querySelector('.rootApp');
    
    const addTasksBg = document.createElement('div');
    addTasksBg.classList.add('visiblity');
    addTasksBg.classList.add('bg');

    const addTasks = document.createElement('div');
    addTasks.classList.add('visiblity');
    addTasks.classList.add('addtasks');

    const closeTasks = document.createElement('div');
    closeTasks.classList.add('closeTasks');

    const newTasksH1 = document.createElement('h1');
    newTasksH1.textContent = 'New tasks';

    closeTasks.appendChild(newTasksH1);

    const closeTasksMaterialIcons = document.createElement('span');
    closeTasksMaterialIcons.classList.add('closeTasksClick');
    closeTasksMaterialIcons.classList.add('material-icons');
    closeTasksMaterialIcons.textContent = 'close';

    closeTasks.appendChild(closeTasksMaterialIcons);

    addTasks.appendChild(closeTasks);

    const form = document.createElement('form');

    const one = document.createElement('div');
    one.classList.add('one');

    const labelName = document.createElement('label');
    labelName.textContent = 'name:';

    one.appendChild(labelName);

    const nameTasks = document.createElement('input');
    nameTasks.type = 'text';
    nameTasks.classList.add('nameTasks');

    one.appendChild(nameTasks);

    const noValidTwo = document.createElement('p');
    noValidTwo.classList.add('visiblity');
    noValidTwo.classList.add('noValidTwo');
    noValidTwo.classList.add('emptyInputProject');
    noValidTwo.textContent = 'no Valid Input';

    one.appendChild(noValidTwo);

    const labelDescription = document.createElement('label');
    labelDescription.textContent = 'description:';

    one.appendChild(labelDescription);

    const descriptiontasks = document.createElement('input');
    descriptiontasks.type = 'text';
    descriptiontasks.classList.add('descriptiontasks');

    one.appendChild(descriptiontasks);

    const noValidThree = document.createElement('p');
    noValidThree.classList.add('visiblity');
    noValidThree.classList.add('noValidThree');
    noValidThree.classList.add('emptyInputProject');
    noValidThree.textContent = 'no Valid Input';

    one.appendChild(noValidThree);

    form.appendChild(one);

    const two = document.createElement('div');
    two.classList.add('two');

    const labelDate = document.createElement('label');
    labelDate.textContent = 'date:';

    two.appendChild(labelDate);

    const dateTasks = document.createElement('input');
    dateTasks.classList.add('dateTasks');
    dateTasks.type = 'date';

    two.appendChild(dateTasks);

    const noValidFour = document.createElement('p');
    noValidFour.classList.add('visiblity');
    noValidFour.classList.add('noValidFour');
    noValidFour.classList.add('emptyInputProject');
    noValidFour.textContent = 'no Valid Input';

    two.appendChild(noValidFour);

    const labelPriority = document.createElement('label');
    labelPriority.setAttribute('for', 'priority');
    labelPriority.textContent = 'priority';

    two.appendChild(labelPriority);

    const priorityTasksInput = document.createElement('select');
    priorityTasksInput.classList.add('priorityTasksInput');
    priorityTasksInput.id = 'priority';
    priorityTasksInput.name = 'priority';

    const optionLow = document.createElement('option');
    optionLow.value = 'low';
    optionLow.textContent = 'low';

    priorityTasksInput.appendChild(optionLow);

    const optionMedium = document.createElement('option');
    optionMedium.value = 'medium';
    optionMedium.textContent = 'medium';

    priorityTasksInput.appendChild(optionMedium);

    const optionhigh = document.createElement('option');
    optionhigh.value = 'high';
    optionhigh.textContent = 'high';

    priorityTasksInput.appendChild(optionhigh);

    two.appendChild(priorityTasksInput);

    const noValidFive = document.createElement('p');
    noValidFive.classList.add('visiblity');
    noValidFive.classList.add('noValidFive');
    noValidFive.classList.add('emptyInputProject');
    noValidFive.textContent = 'no Valid Input';

    two.appendChild(noValidFive);

    form.appendChild(two);

    addTasks.appendChild(form);

    const buttonSpace = document.createElement('div');
    buttonSpace.classList.add('button-space');

    const addTasksButton = document.createElement('button');
    addTasksButton.classList.add('addTasksButton');
    addTasksButton.textContent = 'add';

    buttonSpace.appendChild(addTasksButton);

    addTasks.appendChild(buttonSpace);

    addTasksBg.appendChild(addTasks);

    rootApp.appendChild(addTasksBg);
}

export default addTasksPopUp;