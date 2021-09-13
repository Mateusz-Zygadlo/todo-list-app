const navBar = () => {

    const rootApp = document.querySelector('.rootApp');

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const navInbox = document.createElement('div');
    navInbox.classList.add('nav-inbox');

    const menuMaterialIcons = document.createElement('span');
    menuMaterialIcons.classList.add('menu');
    menuMaterialIcons.classList.add('material-icons');
    menuMaterialIcons.textContent = 'menu';

    navInbox.appendChild(menuMaterialIcons);

    const inboxMaterialIcons = document.createElement('span');
    inboxMaterialIcons.classList.add('inbox');
    inboxMaterialIcons.classList.add('material-icons');
    inboxMaterialIcons.textContent = 'inbox';

    navInbox.appendChild(inboxMaterialIcons);

    nav.appendChild(navInbox);

    const navDone = document.createElement('div');
    navDone.classList.add('nav-done');

    const addNavMaterialIcons = document.createElement('span');
    addNavMaterialIcons.classList.add('addNav');
    addNavMaterialIcons.classList.add('material-icons');
    addNavMaterialIcons.textContent = 'add';

    navDone.appendChild(addNavMaterialIcons);

    const navDoneMaterialIcons = document.createElement('span');
    navDoneMaterialIcons.classList.add('done');
    navDoneMaterialIcons.classList.add('material-icons');
    navDoneMaterialIcons.textContent = 'done';

    navDone.appendChild(navDoneMaterialIcons);

    nav.appendChild(navDone);

    rootApp.appendChild(nav);
}

export default navBar;