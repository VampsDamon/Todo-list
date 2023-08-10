const todoForm=document.querySelector(".form-todo");
const todoText=document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list");

todoForm.addEventListener("submit",(e)=>{
     e.preventDefault();
     const inputText=todoText.value;
     todoText.value="";
     const li=document.createElement('li');
     li.innerHTML=`<span class="text">${inputText}</span>
     <div class="todo-buttons">
       <button class="todo-btn done">Done</button>
       <button class="todo-btn remove">Remove</button>
     </div>`
    todoList.append(li);
});


todoList.addEventListener('click',(e)=>{
    if(e.target.classList.contains("done")){
        
     const lispan= e.target.parentNode.previousElementSibling;
     lispan.style.textDecoration="line-through red"
    }
    if(e.target.classList.contains("remove")){
        const remove=document.querySelector(".remove");
        remove.parentNode.parentNode.remove() 
    }
});