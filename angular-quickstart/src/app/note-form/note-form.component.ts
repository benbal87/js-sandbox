import {Component, OnInit} from '@angular/core';
import {Note} from './note';
import 'rxjs/add/operator/map';
import {NoteFormService} from './note-form.service';

@Component(
  {
    moduleId: module.id,
    selector: 'app-note-form',
    templateUrl: './note-form.component.html',
    styleUrls: ['./note-form.component.css']
  })

export class NoteFormComponent implements OnInit {
  isNoteFormHidden = true;
  priorities = ['Extremely important', 'Really important', 'Important', 'Can wait', 'Not important', 'I do not give a...'];

  noteInputId: number;
  noteInputName: string;
  noteInputPriority: string;

  noteArray: Note[] = [];

  actualNote: Note;

  constructor(private noteFormService: NoteFormService) {
  }

  ngOnInit(): void {
    this.noteFormService.setNotes()
      .subscribe(
        response => {
          this.noteArray = response;
        },
        error => {
          console.log(error);
        }
      );
  }

  showNoteForm(): void {
    this.isNoteFormHidden = !this.isNoteFormHidden;
  }

  saveNote(): void {
    if (this.actualNote === undefined || this.actualNote.isEditNote === false) {
      this.actualNote = new Note(this.noteArray.length);
      this.actualNote.setNoteId = this.noteInputId;
      this.actualNote.setNoteName = this.noteInputName;
      this.actualNote.setNotePriority = this.noteInputPriority;
      this.noteArray.push(this.actualNote);
    } else {
      this.actualNote.setIsEditNote = false;
      this.actualNote.setNoteId = this.noteInputId;
      this.actualNote.setNoteName = this.noteInputName;
      this.actualNote.setNotePriority = this.noteInputPriority;
      this.noteArray.splice(this.actualNote.noteEditIndex, 1, this.actualNote);
    }
  }

  setNoteForEdit(noteForEdit: Note): void {
    this.isNoteFormHidden = false;
    this.actualNote = noteForEdit;
    this.noteInputId = noteForEdit.noteId;
    this.noteInputName = noteForEdit.noteName;
    this.noteInputPriority = noteForEdit.notePriority;
  }

  deleteNote(noteToDelete: Note): void {
    this.noteArray.splice(noteToDelete.noteEditIndex, 1);
  }

  logOutEmitting(input: string) {
    console.log('belement a logOutEmitting-be!!!         ' + input);
  }
}
