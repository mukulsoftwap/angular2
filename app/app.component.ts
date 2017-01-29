import { Component } from '@angular/core';
import { TodoService } from './services/TodoService';

@Component({
  selector: 'todo-app',
  templateUrl: 'app/tamplates/todo.html',
  styleUrls: ['app/css/style.css']
})
export class AppComponent{ 
  todo = '';
  todos = new Array;

  addTodo(){
    this.todos.push(this.todo);
  }
  deleteTodo(val:number){
    this.todos.splice(val,1);
  }
}