const addItemPopUp = () => {
    
    const addProject = document.querySelector('.addProject');
    const bgTwo = document.querySelector('.bgTwo');
    const projectFolder = document.querySelector('.folder');
    const noValidOne = document.querySelector('.noValidOne');
    const addProjectInput = document.querySelector('.addProjectInput');
    
    addProject.classList.toggle('visiblity');
    bgTwo.classList.toggle('visiblity');
    projectFolder.classList.remove('z-index-toggle');
    noValidOne.classList.add('visiblity');
    addProjectInput.style.border = '1px solid black';
}

export default addItemPopUp;