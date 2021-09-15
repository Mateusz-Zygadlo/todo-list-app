import { standardInputs } from './validInputs';

const addNav = () => {
    
    const addtasks = document.querySelector('.addtasks');
    const bg = document.querySelector('.bg');
    const projectFolder = document.querySelector('.folder');
    
    addtasks.classList.toggle('visiblity');
    bg.classList.toggle('visiblity');
    projectFolder.classList.remove('z-index-toggle');
    standardInputs();
}

export default addNav;