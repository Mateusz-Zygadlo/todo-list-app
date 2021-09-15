import { isValid } from './validInputs';
import createDiv from './createTaskDiv';
 
const addTasks = (newArr, nowProject) => {

    const nameTasks = document.querySelector('.nameTasks');
    const descriptiontasks = document.querySelector('.descriptiontasks');
    const dateTasks = document.querySelector('.dateTasks');
    const priorityTasksInput = document.querySelector('.priorityTasksInput');

    const addtasks = document.querySelector('.addtasks');
    const bg = document.querySelector('.bg');

    if(isValid().count){
        return;
    }
    
    if(nowProject == 'complited' || nowProject == 'all'){
        nowProject = 'inbox';
        newArr[1].tasks.push({
            name: nameTasks.value,
            decription: descriptiontasks.value,
            date: dateTasks.value,
            priority: priorityTasksInput.value,
            id: Math.floor(Math.random() * 100000),
        })
    }else{
        for(let i = 0; i < newArr.length; i++){
            if(newArr[i].name == nowProject){
                newArr[i].tasks.push({
                    name: nameTasks.value,
                    decription: descriptiontasks.value,
                    date: dateTasks.value,
                    priority: priorityTasksInput.value,
                    id: Math.floor(Math.random() * 100000),
                })
            }
        }
    }
    
    createDiv(newArr, nowProject);
    
    window.localStorage.setItem('newArr', JSON.stringify(newArr));
    
    console.log(newArr);
    console.log(nowProject);
    
    deleteButton = document.querySelectorAll('.delete');
    
    nameTasks.value = '';
    descriptiontasks.value = '';
    
    addtasks.classList.toggle('visiblity');
    bg.classList.toggle('visiblity');
}

export default addTasks;