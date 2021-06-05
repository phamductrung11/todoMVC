import { ToDo } from './../models/todo';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private API : string ="http://localhost:8080/todos/";

  constructor(
    public http :HttpClient
  ) { }
  getAllTodo() :Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this.API+'list');
  }
  Addtodo(dataTodo : ToDo) :Observable<ToDo[]>{
    return this.http.post<ToDo[]>(this.API+'add',{
      id:dataTodo.id,
      whatToDo:dataTodo.whatToDo,
      completed:dataTodo.completed
    });
  }
  delete(id:number):Observable<ToDo[]>{
    return this.http.delete<ToDo[]>(`${this.API}delete/${id}`);
  }
  update(todo:ToDo):Observable<ToDo[]>{
    return this.http.put<ToDo[]>(`${this.API}edit/${todo.id}`,{
      whatToDo:todo.whatToDo,
      completed:todo.completed
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
