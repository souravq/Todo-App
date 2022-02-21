 /*
 var count=0;
        function add_todo_fun(){

            let input_value=document.getElementById('todo');
            let todo_container = document.querySelector('.todos');

            let count_todo = document.querySelector('#count_span');
           //let todo_ul = document.createElement('ul');

            let paraItem = document.createElement('p'); 
            let label = document.createElement('label');
            paraItem.style.backgroundColor="tomato";
            paraItem.setAttribute("key",count);
            label.innerText = input_value.value;
            paraItem.appendChild(label);
            //todo_ul.appendChild(listItem);
            todo_container.appendChild(paraItem);
            input_value.value="";

            count+=1;
            count_span.innerText=count;
            paraItem.addEventListener('click',function(e){

                console.log("I'm clicked");
                var keyy=e.target.getAttribute('key');
                console.log(keyy);
                document.querySelector(`p[key="${keyy}"`).remove();
            });

        }

        //var todo=document.querySelector('p');
        //console.log(todo);
        //todo.addEventListener('click',function(){
            //document.querySelector('p[key="0"]').remove();

       // });
*/
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

let head_com = document.querySelector('#head_com');

com_todo_btn.addEventListener("click",function(){
    incomplete_todo_container.style.visibility="hidden";
    //head_com.style.display="block";
    complete_todo_container.style.visibility="visible";
})
incom_todo_btn.addEventListener("click",function(){
    complete_todo_container.style.visibility="hidden";
     incomplete_todo_container.style.visibility="visible";
})
