const nowPageInTasks = (item) => {
    const nowPageName = document.createElement('div');
    nowPageName.textContent = item;
    nowPageName.classList.add('nowPageName');

    const projectsContent = document.querySelector('.content');
    projectsContent.appendChild(nowPageName);
}

export default nowPageInTasks;