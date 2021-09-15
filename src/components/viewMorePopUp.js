const viewMorePopUp = (newArr, indexMainOne, indexMainTwo) => {
    const moreContent = document.createElement('div');
    moreContent.classList.add('moreContent');

    const closeButton = document.createElement('div');
    closeButton.classList.add('closeBtnMore');
    closeButton.classList.add('material-icons')
    closeButton.textContent = 'close';

    moreContent.appendChild(closeButton);

    const nameProjectAndDescription = document.createElement('div');
    nameProjectAndDescription.classList.add('nameProject-and-description');

    const nameProjectTwo = document.createElement('div');
    nameProjectTwo.textContent = `name: ${newArr[indexMainOne].tasks[indexMainTwo].name}`;
    nameProjectTwo.classList.add('nameProject');

    nameProjectAndDescription.appendChild(nameProjectTwo);

    const descriptionTwo = document.createElement('div');
    descriptionTwo.textContent = `description: ${newArr[indexMainOne].tasks[indexMainTwo].decription}`;
    descriptionTwo.classList.add('descriptionProject');

    nameProjectAndDescription.appendChild(descriptionTwo);

    moreContent.appendChild(nameProjectAndDescription);

    const dateAndPriority = document.createElement('div');
    dateAndPriority.classList.add('date-and-priority');

    const dateProject = document.createElement('div');
    dateProject.textContent = `date: ${newArr[indexMainOne].tasks[indexMainTwo].date}`;
    dateProject.classList.add('dateProject');

    dateAndPriority.appendChild(dateProject);

    const priorityProject = document.createElement('div');
    priorityProject.textContent = `priority: ${newArr[indexMainOne].tasks[indexMainTwo].priority}`;
    priorityProject.classList.add('priorityProject');

    dateAndPriority.appendChild(priorityProject);

    moreContent.appendChild(dateAndPriority);

    const bgThree = document.createElement('div');
    bgThree.classList.add('bgThree');

    bgThree.appendChild(moreContent);

    document.body.appendChild(bgThree);
}

export default viewMorePopUp;