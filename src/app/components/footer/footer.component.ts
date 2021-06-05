import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public clears : boolean = true;
  @Input('lengthTodo') length:number =0;
  @Output('Filters') Filters = new EventEmitter<any>();
  @Output('clear') clear = new EventEmitter<any>();
  filterBtn:any[]=[
    {
    title:'All',
    isActive:true,
    link:'',
},
{
    title:'Active',
    isActive:false,
    link:'/active',

},
{
    title:'Completed',
    isActive:false,
    link:'/completed',

}
]
handleClick(filter:any){
  this.filterBtn.forEach(btn => {
    btn.isActive=btn.title === filter ;
  });
   this.Filters.emit(filter);


}
handleClear(){
  this.clears=false;
  console.log(this.clears);
  this.clear.emit('clear')
}


  constructor() { }

  ngOnInit(): void {
  }



}
