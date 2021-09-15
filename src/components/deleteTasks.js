import allTasks from './allTasks';
import createDiv from './createTaskDiv';

const deleteTasks = (target, newArr, nowProject) => {
    
    const popUpDelete = document.querySelector('.bgFour');
    const buttonCancel = document.querySelector('.cancel');
    const buttonDeleteTasks = document.querySelector('.deleteTasks');
    
    let index = 0;
    let indexTwo = 0;
    
    popUpDelete.classList.remove('visiblity');
        
    buttonCancel.addEventListener('click', () => {
        popUpDelete.classList.add('visiblity');
    })

    buttonDeleteTasks.addEventListener('click', () => {
        for(let i = 0; i < newArr.length; i++){
            if(!newArr[i].tasks){
                i++;
            }
            for(let j = 0; j < newArr[i].tasks.length; j++){
                if(newArr[i].tasks[j].id == target){
                    index = i
                    indexTwo = j;
                }
            }
        }

        newArr[index].tasks.splice(indexTwo, 1);
            
        if(nowProject == 'all'){
            allTasks(newArr, nowProject);
        }else{
            createDiv(newArr, nowProject);
        }

        popUpDelete.classList.add('visiblity');

        window.localStorage.setItem('newArr', JSON.stringify(newArr));
    })
}

export default deleteTasks;