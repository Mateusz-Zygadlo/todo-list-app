import validUpdate from './validInputs';
import allTasks from './allTasks';
import createDiv from './createTaskDiv'

const editTasks = (newArr, target) => {
    
    const updateNameTasks = document.querySelector('.updateNameTasks');
    const updateDescriptiontasks = document.querySelector('.updateDescriptiontasks');
    const updateDateTasks = document.querySelector('.updateDateTasks');
    const updatePriorityTasksInput = document.querySelector('.updatePriorityTasksInput');
    const updatePopUp = document.querySelector('.bgSix');

    let test = 0;
    let testTwo = 0;

    for(let i = 0; i < newArr.length; i++){
        if(!newArr[i].tasks){
            i++;
        }
        for(let j = 0; j < newArr[i].tasks.length; j++){
            if(newArr[i].tasks[j].id == target){
                test = i;
                testTwo = j;
            }
        }
    }

    console.log(test, testTwo);

    updateNameTasks.value = newArr[test].tasks[testTwo].name;
    updateDescriptiontasks.value = newArr[test].tasks[testTwo].decription;
    updateDateTasks.value = newArr[test].tasks[testTwo].date;
    updatePriorityTasksInput.value = newArr[test].tasks[testTwo].priority;

    updatePopUp.classList.remove('visiblity');

    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('closeTasksClick')){
            updateNameTasks.value = '';
            updateDescriptiontasks.value = '';
            updateDateTasks.value = '';
            updatePriorityTasksInput.value = '';
        
            updatePopUp.classList.add('visiblity');
        }
    })

    document.addEventListener('click', (e) => {
            if(e.target.classList.contains('UpdateTasksButton')){
                if(validUpdate().countTest){
                    return;
                }else{
                    try{
                        newArr[test].tasks[testTwo].name = updateNameTasks.value;
                        newArr[test].tasks[testTwo].decription = updateDescriptiontasks.value;
                        newArr[test].tasks[testTwo].date = updateDateTasks.value;
                        newArr[test].tasks[testTwo].priority = updatePriorityTasksInput.value;

                        console.log(test, testTwo);
    
                        updateNameTasks.value = '';
                        updateDescriptiontasks.value = '';
                        updateDateTasks.value = '';
                        updatePriorityTasksInput.value = '';

                        if(nowProject == 'all'){
                            allTasks(newArr, nowProject);
                        }else{
                            createDiv(newArr, nowProject);
                        }

                        window.localStorage.setItem('newArr', JSON.stringify(newArr));
    
                        test = 0;
                        testTwo = 0;
    
                        updatePopUp.classList.add('visiblity');
    
                        console.log(newArr);
    
                    }catch(err){
                        console.log(err);
                }  
            }
        }   
    })
}

export default editTasks;