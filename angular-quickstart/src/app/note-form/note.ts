export class Note {
  public isEditNote: boolean;
  public noteId: number;
  public noteName: string;
  public notePriority: string;

  constructor(public noteEditIndex: number) {
    this.isEditNote = false;
  }

  set setIsEditNote(isEditNote: boolean) {
    this.isEditNote = isEditNote;
  }

  set setNoteEditIndex(noteEditIndex: number) {
    this.noteEditIndex = noteEditIndex;
  }

  set setNoteId(noteId: number) {
    this.noteId = noteId;
  }

  set setNoteName(noteName: string) {
    this.noteName = noteName;
  }

  set setNotePriority(notePriority: string) {
    this.notePriority = notePriority;
  }
}
