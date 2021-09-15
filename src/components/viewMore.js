import viewMorePopUp from "./viewMorePopUp";

const viewMore = (id, newArr) => {

    let indexMainOne = 0;
    let indexMainTwo = 0;

    for(let i = 0; i < newArr.length; i++){
        if(!newArr[i].tasks){
            i++;
        }
        for(let j = 0; j < newArr[i].tasks.length; j++){
            if(newArr[i].tasks[j].id == id){
                indexMainOne = i
                indexMainTwo = j;
            }
        }
    }

    viewMorePopUp(newArr, indexMainOne, indexMainTwo);
}

export default viewMore;