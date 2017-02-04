import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService{
    constructor(private http : Http) {}

    getTodo() {
        return this.http.get('http://localhost:1337/todosapi').map(response => response.json());
    }

    addTodo(todo:String) {
        return this.http.post('http://localhost:1337/todosapi',{"name" : todo}).map(response => response.json());
    }

    deleteTodo(id:string){
        return this.http.delete('http://localhost:1337/todosapi/'+id).map(response => response.json());
    }

    updateTodo(val:string,id:string){
        return this.http.post('http://localhost:1337/todosapi/upadteTodo',{"id":id,"name":val}).map(response => response.json());
    }
}