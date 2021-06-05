export class ToDo{
  public id:number;
  public whatToDo:string;
  public completed:boolean;

  constructor(title:string){
  this.whatToDo=title;
  this.completed=false;
  }

}
