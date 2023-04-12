const btn = document.getElementById("add")


const todolist = document.getElementById("todo-list")

const El = document.getElementById(".textcontainer")

const input = document.getElementById("input")





btn.addEventListener("click", addtodo)

todolist.addEventListener("click",delcheck)


   

function addtodo(e){

    e.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li')
    newTodo.classList.add("todo-item")
    newTodo.innerText = input.value
    todoDiv.appendChild(newTodo)

    const del = document.createElement("button")
    del.classList.add("del-btn")
    del.innerHTML = `<i class="fa-solid fa-trash"></i>`
    todoDiv.appendChild(del)
    
    const check = document.createElement("button")
    check.classList.add("check-btn")
    check.innerHTML = `<i class="fa-solid fa-check"></i>`
    todoDiv.appendChild(check)

    todolist.appendChild(todoDiv)

    input.value = ""

    



}


function delcheck(e){
    const item = e.target

    console.log(item)

    if(item.classList[0] === "del-btn"){
    const todo = item.parentElement;
    todo.remove();

}




if(item.classList[0] === "check-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("check-active")
}
    
}











