const menuBurger = () => {
    
    const projectFolder = document.querySelector('.folder');
    const projectsContent = document.querySelector('.content');
    const main = document.querySelector('.main');
    
    projectFolder.classList.toggle('projects-folder');
    projectFolder.classList.toggle('projects-folderClick');
    projectsContent.classList.toggle('projects-content');
    projectsContent.classList.toggle('projects-contentClick');
    main.classList.toggle('mainMain');
    main.classList.toggle('mainMainClick');
}

export default menuBurger;