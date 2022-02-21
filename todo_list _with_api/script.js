 
fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => DisplayTodo(json))

let complete_todo_container = document.querySelector('.complete_todos');
let incomplete_todo_container = document.querySelector('.incomplete_todos');

let com_todo_btn = document.querySelector('#com_todo');
let incom_todo_btn = document.querySelector('#incom_todo');

const DisplayTodo = todos =>{

    console.log(todos);
    todos.forEach((todo,index)=>{
        if(todo.completed===true){
            let paraItem = document.createElement('p'); 
            let label = document.createElement('label');
            paraItem.style.backgroundColor="tomato";
            paraItem.setAttribute("key",index);
            label.innerText = todo.title;
            paraItem.appendChild(label);
            complete_todo_container.appendChild(paraItem);

        }else if(todo.completed===false){
            let paraItem = document.createElement('p'); 
            let label = document.createElement('label');
            paraItem.style.backgroundColor="tomato";
            paraItem.setAttribute("key",index);
            label.innerText = todo.title;
            paraItem.appendChild(label);
            incomplete_todo_container.appendChild(paraItem);
        }

            
    })
        
}


com_todo_btn.addEventListener("click",function(){
    incomplete_todo_container.style.display="none";
    complete_todo_container.style.display="block";
})
incom_todo_btn.addEventListener("click",function(){
    complete_todo_container.style.display="none";
     incomplete_todo_container.style.display="block";
})
