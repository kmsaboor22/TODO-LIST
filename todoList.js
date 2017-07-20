// V2 functions
// array of todo items
var toDos = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];

//displing todo list function
function displayToDos() {
    console.log('My Todos list: ', toDos);
}
//adding a new todo
function addTodo(todo) {
    toDos.push(todo);
    displayToDos();
}
//it should have a function to chnage a todo
function changeTodo(index, newValue) {
    toDos[index] = newValue;
    displayToDos();
}
//delete todos
deleteTodos = (index) => {
    toDos.splice(index, 1);
    displayToDos();
}