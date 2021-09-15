const addToPageNameProject = (newArr) => {

    const root = document.querySelector('.root');
    let projectsNameInPage = document.querySelectorAll('.projectsNameInPage');

    root.textContent = '';
    
    for(let i = 1; i < newArr.length; i++){
        if(newArr[i].name == 'inbox'){

        }else{
            const p = document.createElement('p');
            p.classList.add('projectsNameInPage');
            p.textContent = newArr[i].name;

            if(p.textContent){
                root.appendChild(p);
            }
        }
    }

    projectsNameInPage = document.querySelectorAll('.projectsNameInPage'); 
}

export default addToPageNameProject;