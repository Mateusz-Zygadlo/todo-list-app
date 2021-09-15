import complitedDiv from './complitedDiv';

const complitedDeleteTasks = (complitedTasks, target) => {

    const bgFive = document.querySelector('.bgFive');
    const deleteTasksTwo = document.querySelector('.deleteTasksTwo');
    const cancelTwo = document.querySelector('.cancelTwo');

    bgFive.classList.remove('visiblity');
        
    cancelTwo.addEventListener('click', () => {
        bgFive.classList.add('visiblity');
    })
    deleteTasksTwo.addEventListener('click', () => {
        for(let i = 0; i < complitedTasks.length; i++){
            if(complitedTasks[i].id == target){
                complitedTasks.splice(i, 1);
            }
        }

        complitedDiv(complitedTasks, nowProject);
        console.log(newArr);
        bgFive.classList.add('visiblity');

        window.localStorage.setItem('newArr', JSON.stringify(newArr));
    })
}

export default complitedDeleteTasks;