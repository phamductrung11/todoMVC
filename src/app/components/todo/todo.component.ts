import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public editing:boolean=false;
@Input() item;
@Output('delete') delete= new EventEmitter
@Output('update') update= new EventEmitter
@Output('UpdateCheckbox') updateCheckbox= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  OnEditing(){
    this.editing = true;
  }
  Onupdate(text:HTMLInputElement,item:any){
  this.update.emit({id:item.id,whatToDo:text.value,completed:item.completed})

  }
  updateCheckBoxs(item:any){
    item.completed=!item.completed;
    this.updateCheckbox.emit(item);
  }


}
