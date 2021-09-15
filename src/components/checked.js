import allTasks from './allTasks';
import createDiv from './createTaskDiv';

const checked = (id, newArr, complitedTasks, nowProject) => {
    let index;
    let indexTwo;

    if(id){
        for(let i = 0; i < newArr.length; i++){
            if(!newArr[i].tasks){
                i++;
            }
            for(let j = 0; j < newArr[i].tasks.length; j++){
                if(newArr[i].tasks[j].id == id){
                    index = i
                    indexTwo = j;
                }
            }
        }

        complitedTasks.push(newArr[index].tasks[indexTwo]);

        newArr[index].tasks.splice(indexTwo, 1);

        if(nowProject == 'all'){
            allTasks(newArr, nowProject);
        }else{
            createDiv(newArr, nowProject);
        }

        window.localStorage.setItem('newArr', JSON.stringify(newArr));
    }
}

export default checked;