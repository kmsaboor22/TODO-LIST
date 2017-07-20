 // V3 Objects
 var myComputer = {
     OS: 'Mac',
     screenSize: '15 inches',
     purchaseYear: 2011
 };
 // how to call an item  
 // in an object
 //console.log(myComputer.OS)

 var khalil = {
     name: 'Khalil',
     height: '5 foot 9',
     sayName: function() {
         console.log(this.name);
     }
 };
 // this is an example of how 
 //to call an function method in an object
 //khalil.sayName();

 var TodoList = {
     toDos: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],
     displayToDos: function() {
         console.log('My Todos list: ', this.toDos);
     },
     addTodos: function(toDos) {
         this.toDos.push(toDos);
         this.displayToDos();
     },
     changeTodos: function(index, newValue) {
         this.toDos[index] = newValue;
         this.displayToDos();
     },
     deleteTodos: function(index) {
         this.toDos.splice(index, 1);
         this.displayToDos();
     }
 };

 /*
    methods are functions in an object
  test console.log(TodoList.addTodos('take out trash'));
  test console.log(TodoList.changeTodos(0, 'ONE'));
  test console.log(TodoList.deleteTodos(3));
  */