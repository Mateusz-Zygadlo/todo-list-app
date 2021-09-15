const nowProjectName = (id, newArr) => {
    for(let i = 0; i < newArr.length; i++){
        if(!newArr[i].tasks){
            i++;
        }
        if(newArr[i].name == id){
            nowProject = newArr[i].name;
        }
    }
}

export default nowProjectName;