import {PipeTransform, Pipe} from '@angular/core';
import {Note} from '../note-form/note';

@Pipe({
  name: 'noteSearch'
})
export class NoteSearchFilter implements PipeTransform {
  transform(value: Note[], filterBy: string): any {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null; // this is for the case insensitive comparison
    return filterBy ? value.filter((note: Note) => note.noteName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
