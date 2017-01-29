import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService{
    constructor(private http : Http) {}

    todo() {
        return this.http.get('http://localhost:1337/todosapi').map(response => response.json());
    }
}