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

  getTodos(){
    this.todoService.todo().subscribe(
      result => this.todos =result
    )
  }
}