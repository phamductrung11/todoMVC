export class ToDo{
  public id:number;
  public text:string;
  public isCompleted:boolean;

  constructor(title:string){
  this.id=new Date().valueOf(),
  this.text=title;
  this.isCompleted=false;
  }

}
