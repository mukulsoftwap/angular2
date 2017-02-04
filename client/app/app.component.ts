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

  constructor(private todoService : TodoService){}

  ngOnInit(){
    this.getTodos();
  }

  addTodo(){
    this.todoService.addTodo(this.todo).subscribe(
      result => this.getTodos()
    )
  }

  updateTodo(event:string,id:string){
    this.todoService.updateTodo(event,id).subscribe(
      result => this.getTodos()
    )
  }

  deleteTodo(val:string){
    this.todoService.deleteTodo(val).subscribe(
      result => this.getTodos()
    )
  }

  getTodos(){
    this.todoService.getTodo().subscribe(
        result => this.todos = result
      );
  }
}