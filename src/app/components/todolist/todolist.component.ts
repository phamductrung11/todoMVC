import { ToDo } from './../../models/todo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
@Input() todoItem :any;
@Input() isComplete :string;
@Input() sortBy :boolean;
@Output('delete') delete= new EventEmitter;
@Output('update') update = new EventEmitter;
@Output('updateCheckBox') updateCheckBox= new EventEmitter;
  constructor() { }

  ngOnInit(): void {

  }
  onUpdate(data:{text:HTMLInputElement,id:number,isCompleted:boolean}){
  this.update.emit(data);
  }
  updateCheckBoxs(item:ToDo){
  item.isCompleted=!item.isCompleted;
  this.updateCheckBox.emit(item);
  }
}

