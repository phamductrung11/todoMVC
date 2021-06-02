import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],filter:any,): any {

    if (!filter) {
      return value;
    }else{
      if (filter === "Active") {
        value=value.filter(todo=>!todo.isCompleted)
      }
      if (filter === "Completed") {
        value=value.filter(todo=>todo.isCompleted)
      }
      if (filter === "All") {
        value=value.filter(todo=>({...todo}))
      }
    }




    return value;
  }

}
