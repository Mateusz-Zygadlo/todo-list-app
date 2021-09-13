const newProjectPopUp = () => {

    const rootApp = document.querySelector('.rootApp');
   
    const addProjectBg = document.createElement('div');
    addProjectBg.classList.add('bgTwo');
    addProjectBg.classList.add('visiblity');

    const addProject = document.createElement('div');
    addProject.classList.add('visiblity');
    addProject.classList.add('addProject');

    const newProjectDiv = document.createElement('div');

    const newProjectH1 = document.createElement('h1');
    newProjectH1.textContent = 'New project';

    newProjectDiv.appendChild(newProjectH1);

    const closeMaterialIcons = document.createElement('span');
    closeMaterialIcons.classList.add('close');
    closeMaterialIcons.classList.add('material-icons');
    closeMaterialIcons.textContent = 'close';

    newProjectDiv.appendChild(closeMaterialIcons);

    addProject.appendChild(newProjectDiv);

    const form = document.createElement('form');

    const label = document.createElement('label');
    label.textContent = 'Project name:';

    form.appendChild(label);

    const addProjectInput = document.createElement('input');
    addProjectInput.classList.add('addProjectInput');
    addProjectInput.type = 'text';

    form.appendChild(addProjectInput);

    const emptyInputProject = document.createElement('p');
    emptyInputProject.classList.add('visiblity');
    emptyInputProject.classList.add('emptyInputProject');
    emptyInputProject.classList.add('noValidOne');
    emptyInputProject.textContent = 'no Valid Input';

    form.appendChild(emptyInputProject);

    addProject.appendChild(form);

    const buttonSpace = document.createElement('div');
    buttonSpace.classList.add('button-space');

    const addButton = document.createElement('button');
    addButton.classList.add('add');
    addButton.textContent = 'add';

    buttonSpace.appendChild(addButton);

    addProject.appendChild(buttonSpace);

    addProjectBg.appendChild(addProject);

    rootApp.appendChild(addProjectBg);
}

export default newProjectPopUp;