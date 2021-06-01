import { ToDo } from './../models/todo';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private API : string ="http://localhost:3000/todoList";

  constructor(
    public http :HttpClient
  ) { }
  getAllTodo() :Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this.API);
  }
  Addtodo(dataTodo : ToDo) :Observable<ToDo[]>{
    return this.http.post<ToDo[]>(this.API,{
      id:dataTodo.id,
      text:dataTodo.text,
      isCompleted:dataTodo.isCompleted
    });
  }
  delete(id:number):Observable<ToDo[]>{
    return this.http.delete<ToDo[]>(`${this.API}/${id}`);
  }
  update(todo:ToDo):Observable<ToDo[]>{
    return this.http.put<ToDo[]>(`${this.API}/${todo.id}`,{
      text:todo.text,
      isCompleted:todo.isCompleted
    });
  }
  handleError(err){
    if (err.error instanceof Error) {
      console.log(`client-side error: ${err.error.message}`)
    }else{
      console.log(`Serve-side error: ${err.status} -${err.error}`)
    }
  }

}
