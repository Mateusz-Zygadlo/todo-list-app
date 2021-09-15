const expand_less_more = () => {
    
    const more = document.querySelector('.more');
    const projectsDiv = document.querySelector('.projects');
    const projectFolder = document.querySelector('.folder');
    
    if(more.textContent == 'expand_more'){
        more.textContent = 'expand_less';
    }else{
        more.textContent = 'expand_more';
    }
    
    projectsDiv.classList.toggle('visiblity');
    projectFolder.classList.toggle('overflow');
    projectFolder.classList.toggle('overflowHidden');
}

export default expand_less_more;