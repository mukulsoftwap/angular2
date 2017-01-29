import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/TodoService';

@Component({
  selector: 'todo-app',
  templateUrl: 'app/tamplates/todo.html',
  styleUrls: ['app/css/style.css'],
  providers: [TodoService]
})
export class AppComponent implements OnInit{ 

  todo = '';
  todos = new Array;

  constructor(private todoService : TodoService){

  }

  ngOnInit(){
    this.getTodos();
  }

  addTodo(){
    this.todos.push(this.todo);
  }
  deleteTodo(val:number){
    this.todos.splice(val,1);
  }
  getTodos(){
    this.todoService.todo().subscribe(
      result => this.todos =result
    )
  }
}