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
@Output('updateCheckBox') updateCheckBox= new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  OnEditing(){
    this.editing = true;
  }
  Onupdate(text:HTMLInputElement,item:any){
  this.update.emit({text:text.value,id:item.id,isCompleted:item.isCompleted})

  }


}
