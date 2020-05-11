import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Note} from '../note-form/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  @Input() noteArray: Note[];
  @Input() priorities: string[];
  searchTerm = '';

  @Output() noteEditEmitter: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() noteDeleteEmitter: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() testEmitter: EventEmitter<string> = new EventEmitter<string>();

  editNote(noteToEmit: Note): void {
    noteToEmit.setIsEditNote = true;
    this.noteEditEmitter.emit(noteToEmit);
  }

  deleteNote(noteToEmit: Note): void {
    this.noteDeleteEmitter.emit(noteToEmit);
  }

  getTextColor(note): string {
    if (note.notePriority === this.priorities[0]) {
      return 'red';
    } else if (note.notePriority === this.priorities[1]) {
      return 'orange';
    } else if (note.notePriority === this.priorities[2]) {
      return 'blue';
    } else if (note.notePriority === this.priorities[3]) {
      return 'green';
    } else if (note.notePriority === this.priorities[4]) {
      return 'yellow';
    } else if (note.notePriority === this.priorities[5]) {
      return 'pink';
    }
  }

  testEmit() {
    let testVariable;
    console.log(testVariable);
    testVariable = 'variable initialized!!!';
    console.log(testVariable);
    this.testEmitter.emit(testVariable);
  }

}
