import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService{
    constructor(private http : Http) {}

    getTodo() {
        return this.http.get('api/people.json').map(response => response.json());
    }
}