import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input('lengthTodo') length:number;
  @Output('Filters') Filters = new EventEmitter<any>();
  @Output('clear') clear = new EventEmitter<any>();
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
handleClick(filter:any){
   this.Filters.emit(filter);


}


  constructor() { }

  ngOnInit(): void {
  }



}
