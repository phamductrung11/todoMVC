import { Component, OnDestroy, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Subscription} from 'rxjs/subscription';
import {ToDo} from '../../models/todo';
@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrls: ['./task-todo.component.css']
})
export class TaskTodoComponent implements OnInit,OnDestroy {
  public toDo  =[];
  public length :number=0;
  public Filter : string ;

  public numberItems:number=0;
  public subscription : Subscription;
  constructor(
    public todoService :TodoService
  ){

  }
  handFilter(filter:string){
   this.Filter=filter;


    }
  ngOnInit(){
    this.updateLenght();
    this.loadData();

  }

  updateLenght(){
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
  ngOnDestroy(){}
  onAddTodo(title:string){
    let dataTodo= new ToDo(title)
    this.subscription = this.todoService.Addtodo(dataTodo).subscribe((data : ToDo[]) =>{
      this.toDo.push(data)
      this.updateLenght();
    },error=>{
     console.log(error);
    });
  }
  onDelete(id:number){
    this.subscription = this.todoService.delete(id).subscribe((data : ToDo[]) =>{
      this.updatedataafterdelete(id);
      this.updateLenght();
    },error=>{
     this.todoService.handleError(error);
    });
  }
  updatedataafterdelete(id:number){
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
    this.updateLenght();
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
  updateCheckBoxs(data : any){
    for (var i = 0; i < this.toDo.length; i++) {
      if (this.toDo[i].id === data.id) {
      this.toDo[i]= data
        break;
      }

    }
  }
  updateCheckBox(data:ToDo){
    this.subscription = this.todoService.update(data).subscribe((data : ToDo[]) =>{
   this.updateCheckBoxs(data);
      },error=>{
       this.todoService.handleError(error);
      });
  }

}

