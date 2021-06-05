import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearCompleted'
})
export class ClearCompletedPipe implements PipeTransform {

  transform(value: any[], clear: any): any {
  if (clear === "clear") {
    value=value.filter(todo=>!todo.completed)
  }
    return value;
  }

}
