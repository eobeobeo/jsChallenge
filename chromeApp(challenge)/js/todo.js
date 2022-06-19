const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.getElementById("todoList");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerHTML = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObject = {
        text: newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObject);

    paintTodo(newTodoObject);
    saveToDos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const haveToDos = localStorage.getItem(TODOS_KEY);

if (haveToDos !== null) {
    const parseToDos = JSON.parse(haveToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintTodo);
}
