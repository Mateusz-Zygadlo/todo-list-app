const deletePopUp = () => {

    const rootApp = document.querySelector('.rootApp');
    
    const deletePopUpBg = document.createElement('div');
    deletePopUpBg.classList.add('bgFour');
    deletePopUpBg.classList.add('visiblity');

    const deletePopUpContent = document.createElement('div');
    deletePopUpContent.classList.add('deletePopUp');

    const deletePopUpH1 = document.createElement('h1');
    deletePopUpH1.textContent = 'do you want to delete this tasks';

    deletePopUpContent.appendChild(deletePopUpH1);

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const deleteTasksButton = document.createElement('button');
    deleteTasksButton.classList.add('deleteTasks');
    deleteTasksButton.textContent = 'delete';

    buttons.appendChild(deleteTasksButton);

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel');
    cancelButton.textContent = 'cancel';

    buttons.appendChild(cancelButton);

    deletePopUpContent.appendChild(buttons);

    deletePopUpBg.appendChild(deletePopUpContent);

    rootApp.appendChild(deletePopUpBg);
}

export default deletePopUp;