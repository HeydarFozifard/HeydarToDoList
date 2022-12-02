// define vars
// input
let taskForm = document.querySelector(".form-task");
let taskINput = document.querySelector("#taks-input");
let filterInput = document.querySelector("#filter-inputss");

// btn

let sumbtBtn = document.querySelector("#btn-submit");
let clearBtn = document.querySelector(".clear-btn");

// task item
let listTask = document.querySelector(".collection");

// run Listener
Addallevent();

// add All Event
function Addallevent() {
  document.addEventListener("DOMContentLoaded", getsLs);

  clearBtn.addEventListener("click", removeall);

  taskForm.addEventListener("submit", addtask);

  listTask.addEventListener("click", removetask);

  filterInput.addEventListener("keyup", filtertask);
}

// add fucntion

function addtask(e) {
  e.preventDefault();
  if (taskINput.value === "") {
    alert(`plz check the form`);
  }else{
     
    let divtodo=document.createElement('div');
    divtodo.classList.add('todo');
    
    // add li


  let li = document.createElement("li");
  li.className="collection-item";
  li.textContent=taskINput.value;
  divtodo.appendChild(li);


  // add link /close btn
  let link = document.createElement("button");
  link.className="delete-btn";
  link.innerHTML = '<i class="fa fa-close"> </i>';
  divtodo.appendChild(link);

  // apend to ul

  listTask.appendChild(divtodo);
  }


  savetols();
  taskINput.value = "";
}

// save to localStorage

function savetols() {
  let tasks;
  if (localStorage.getItem(`my task`) === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem(`my task`));
  }
  tasks.push(taskINput.value);
  localStorage.setItem(`my task`, JSON.stringify(tasks));
}

// delet btn
function removetask(e) {
  if (e.target.classList.contains("delete-btn") && confirm(`کارتو انجام دادی دیگه؟ مطمن باشم؟`) ) {
    
      e.target.parentElement.remove();
      cleaeforls(e.target.parentElement);
    
    
  }
}

// clear all
function removeall() {
  while (listTask.firstChild) {
    listTask.firstChild.remove();
    clearallforls();
  }
}

function filtertask(e) {
  e.preventDefault();
  let text=filterInput.value.toLocaleLowerCase();
  document.querySelectorAll('.collection-item').forEach((task)=>{
    let content=task.textContent.toLocaleLowerCase();
    if(content.indexOf(text) != -1){
      task.parentElement.style.display='flex';
    }else{
      task.parentElement.style.display='none';
    }
  })
 
}



function getsLs(e) {
  e.preventDefault();
  let tasks;
  if (localStorage.getItem(`my task`) === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem(`my task`));
  }

  tasks.forEach((task) => {
    let divtodo=document.createElement('div');
    divtodo.classList.add('todo');
    
    // add li


  let li = document.createElement("li");
  li.className="collection-item";
  li.textContent=task;
  divtodo.appendChild(li);


  // add link /close btn
  let link = document.createElement("button");
  link.className="delete-btn  ";
  link.innerHTML = '<i class="fa fa-close"> </i>';
  divtodo.appendChild(link);

  // apend to ul

  listTask.appendChild(divtodo);
  });
  localStorage.setItem(`my task`, JSON.stringify(tasks));
}

function clearallforls() {
  window.localStorage.clear();
}

function cleaeforls(removeitem){
  let tasks;
  if (localStorage.getItem(`my task`) === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem(`my task`));
  }

  // let content_item=removeitem.children[0].textContent;
  // tasks.splice(tasks.indexOf(content_item),1);

  tasks.forEach((task,index)=>{
    if(removeitem.children[0].textContent === task){
      tasks.splice(index,1);
    }
  })

  localStorage.setItem(`my task`,JSON.stringify(tasks));
}