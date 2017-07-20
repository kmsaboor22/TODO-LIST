// Code goes here

var TodoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('Your Todo List is emptry!');

        } else {

            console.log('My Todos list:');

            for (i = 0; i < this.todos.length; i++) {

                console.log(this.todos[i].todoText);

                if (this.todos[i].completed === true) {

                    console.log('(X)', this.todos[i].todoText);

                } else {

                    console.log('( )', this.todos[i].todoText);

                }
            }
        }
    },
    addTodos: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodos: function(index, todoText) {
        this.todos[index].todoText = todoText;
        this.displayTodos();
    },
    deleteTodos: function(index) {
        this.todos.splice(index, 1);
        this.displayTodos();
    },
    toggleCompleted: function(index) {
        var todo = this.todos[index];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};

console.log(TodoList.addTodos('one'));
console.log(TodoList.addTodos('two'));
console.log(TodoList.addTodos('three'));
console.log(TodoList.addTodos('four'));
console.log(TodoList.addTodos('five'));
console.log(TodoList.toggleCompleted(0));