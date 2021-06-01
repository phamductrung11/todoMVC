import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input('lengthTodo') length:number;
  @Output('sortBy') sortBy = new EventEmitter<any>();
  public isComplete : string ='isCompleted';
  filterBtn:any[]=[
    {
    title:'All',
    isActived:true,
    link:'',
},
{
    title:'Active',
    isActived:false,
    link:'/active',

},
{
    title:'Completed',
    isActived:false,
    link:'/completed',

}
]
handleClick(isComplete:any){
 if (isComplete === "Completed") {
   this.sortBy.emit(this.isComplete);
 }

}

  constructor() { }

  ngOnInit(): void {
  }



}
