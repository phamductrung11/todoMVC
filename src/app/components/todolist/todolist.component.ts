import { ToDo } from './../../models/todo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
@Input() todoItem :any=[];
@Input() Filters :string="";
@Input() clear:string="";
@Input() ClearCompleted :string="";
@Output('delete') delete= new EventEmitter;
@Output('update') update = new EventEmitter;
@Output('updateCheckbox') updateCheckBOX = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  onUpdate(data:{id:number,whatToDo:HTMLInputElement,completed:boolean}){
  this.update.emit(data);
  }
  updateCheckbox(item:ToDo){
  this.updateCheckBOX.emit(item);
  }
}

