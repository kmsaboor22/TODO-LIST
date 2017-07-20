 var TodoList = {
     todos: [],
     displayToDos: function() {
         console.log('My Todos list: ', this.todos);
     },
     addTodos: function(todoText) {
         this.todos.push({
             todoText: todoText,
             completed: false
         });
         this.displayToDos();
     },
     changeTodos: function(index, todoText) {
         this.todos[index].todoText = todoText;
         this.displayToDos();
     },
     deleteTodos: function(index) {
         this.todos.splice(index, 1);
         this.displayToDos();
     },
     toggleCompleted: function(index) {
         var todo = this.todos[index];
         todo.completed = !todo.completed;
         this.displayTodos();
     }
 };
 console.log(TodoList.addTodos('jump off a cliff'));