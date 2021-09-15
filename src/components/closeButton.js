const closeButton = () => {
    
    const addProjectInput = document.querySelector('.addProjectInput');
    const bgTwo = document.querySelector('.bgTwo');
    const addProject = document.querySelector('.addProject');
    
    addProjectInput.value = '';
    bgTwo.classList.toggle('visiblity');
    addProject.classList.add('visiblity');
}

export default closeButton;