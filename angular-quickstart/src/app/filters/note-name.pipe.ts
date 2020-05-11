import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
  name: 'noteNameToUpper'
})
export class NoteNameToUpperFilter implements PipeTransform {
  transform(value: any, args: any): any {
    return value.toUpperCase();
  }

}
