const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert('You must write something');
    }
    else{
        let li = document.createElement('li');
        let span = document.createElement('span');
        li.innerHTML = inputBox.value;
        span.innerHTML = "×";
        listContainer.appendChild(li);
        li.appendChild(span); 
    }
    saveTask();
    inputBox.value = "";
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveTask();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveTask();
    }
}, false);

function saveTask(){
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function displayTask() {
    listContainer.innerHTML = localStorage.getItem('tasks');
}

displayTask();