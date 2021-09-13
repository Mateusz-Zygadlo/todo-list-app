const mainPage = () => {

    const rootApp = document.querySelector('.rootApp');
    
    const main = document.createElement('div');
    main.classList.add('main');
    main.classList.add('mainMain');

    const projectsFolder = document.createElement('div');
    projectsFolder.classList.add('projects-folder');
    projectsFolder.classList.add('folder');

    const all = document.createElement('div');
    all.classList.add('all');

    const allClick = document.createElement('p');
    allClick.classList.add('allClick');

    const allInboxMaterialIcons = document.createElement('span');
    allInboxMaterialIcons.classList.add('material-icons');
    allInboxMaterialIcons.textContent = 'all_inbox';

    allClick.append(allInboxMaterialIcons, 'all');


    all.appendChild(allClick);

    projectsFolder.appendChild(all);

    const inbox = document.createElement('div');
    inbox.classList.add('inbox');

    const inboxClick = document.createElement('p');
    inboxClick.classList.add('inboxClick');

    const inboxMaterialIcons = document.createElement('span');
    inboxMaterialIcons.classList.add('material-icons');
    inboxMaterialIcons.textContent = 'inbox';

    inboxClick.append(inboxMaterialIcons, 'inbox');
    
    inbox.appendChild(inboxClick);

    projectsFolder.appendChild(inbox);

    const viewMore = document.createElement('div');
    viewMore.classList.add('view-more');

    const projects = document.createElement('p');

    const folderOpenMaterialIcons = document.createElement('span');
    folderOpenMaterialIcons.classList.add('material-icons');
    folderOpenMaterialIcons.textContent = 'folder_open';

    projects.append(folderOpenMaterialIcons, 'projects');

    viewMore.appendChild(projects);

    const more = document.createElement('p');

    const expandMoreMaterialIcons = document.createElement('span');
    expandMoreMaterialIcons.classList.add('more');
    expandMoreMaterialIcons.classList.add('material-icons');
    expandMoreMaterialIcons.textContent = 'expand_more';

    more.appendChild(expandMoreMaterialIcons);

    viewMore.appendChild(more);

    projectsFolder.appendChild(viewMore);

    const projectsName = document.createElement('div');
    projectsName.classList.add('visiblity');
    projectsName.classList.add('projects');

    const root = document.createElement('div');
    root.classList.add('root');

    projectsName.appendChild(root);

    const addItem = document.createElement('div');
    addItem.classList.add('addItem');

    const addMaterialIcons = document.createElement('span');
    addMaterialIcons.classList.add('material-icons');
    addMaterialIcons.textContent = 'add';

    addItem.appendChild(addMaterialIcons);

    const projectP = document.createElement('p');
    projectP.textContent = 'new project';

    addItem.appendChild(projectP);

    projectsName.appendChild(addItem);

    projectsFolder.appendChild(projectsName);

    main.appendChild(projectsFolder);

    const projectsContent = document.createElement('div');
    projectsContent.classList.add('projects-content');
    projectsContent.classList.add('content');

    main.appendChild(projectsContent);

    rootApp.appendChild(main);
}

export default mainPage;