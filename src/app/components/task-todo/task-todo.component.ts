import { Component, OnDestroy, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Subscription} from 'rxjs/subscription';
import {ToDo} from '../../models/todo';
@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrls: ['./task-todo.component.css']
})
export class TaskTodoComponent implements OnInit {
  public toDo  =[];
  public length :number=0;
  public Filter : string ="" ;
  public clear : string = "" ;
  public numberItems:number=0;
  public subscription : Subscription ;
  constructor(
    public todoService :TodoService
  ){

  }

  ngOnInit(){
    this.updateLenngth();
    this.loadData();

  }

  updateLenngth(){
    this.subscription = this.todoService.getAllTodo().subscribe((data : ToDo[])=>{
      this.length=data.length;
    },error=>{
     this.todoService.handleError(error);
    });
   }

  loadData(){
   this.subscription = this.todoService.getAllTodo().subscribe((data : ToDo[])=>{
     this.toDo=data;

   },error=>{
    this.todoService.handleError(error);
   });
  }

  onAddTodo(title:string){
    let dataTodo= new ToDo(title)
    this.subscription = this.todoService.Addtodo(dataTodo).subscribe((data : ToDo[]) =>{
      this.toDo.push(data)
      this.updateLenngth();
    },error=>{
     console.log(error);
    });
  }
  onDelete(id:number){
    this.subscription = this.todoService.delete(id).subscribe((data : ToDo[]) =>{
      this.updateDelete(id);
      this.updateLenngth();
    },error=>{
     this.todoService.handleError(error);
    });
  }
  updateDelete(id:number){
  for (var i = 0; i < this.toDo.length; i++) {
    if (this.toDo[i].id === id) {
      this.toDo.splice(i,1);
      break;
    }

  }
  }
  onUpdate(data:ToDo){
    this.subscription = this.todoService.update(data).subscribe((data : ToDo[]) =>{
    this.updateTodo(data);
    this.updateLenngth();
    },error=>{
     this.todoService.handleError(error);
    });
  }
  updateTodo(data : any){
    for (var i = 0; i < this.toDo.length; i++) {
      if (this.toDo[i].id === data.id) {
      this.toDo[i]=data
        break;
      }

    }
  }
  updateCheckbox(data : any){
    for (var i = 0; i < this.toDo.length; i++) {
      if (this.toDo[i].id === data.id) {
      this.toDo[i]= data
        break;
      }

    }
  }
  updateCheckBox(data:ToDo){
    this.subscription = this.todoService.update(data).subscribe((data : ToDo[]) =>{
    this.updateCheckbox(data);
      },error=>{
       this.todoService.handleError(error);
      });
  }
  handFilter(filter:string){
    this.Filter=filter;

     }
   handleClear(clear:string){
      this.clear=clear;
     }

}

