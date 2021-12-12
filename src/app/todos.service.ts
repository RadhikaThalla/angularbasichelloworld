import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

url= "http://jsonplaceholder.typicode.com/todos"
    constructor(public http:HttpClient) { 
    
    }
    getTodos(){
      return this.http.get(this.url); 
    
    }
  }


