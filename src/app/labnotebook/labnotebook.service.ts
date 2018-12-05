import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { environment } from '../../environments/environment';
import { Labnote } from './labnote.model';

const BACKENDURL = environment.apiUrl + '/labnotebook/';

@Injectable({providedIn: 'root'})
export class LabNoteBookService {
  private notes: Labnote[] = [];
  private notesUpdated = new Subject<{notes: Labnote [], noteCount: number}>();
constructor (private http: HttpClient, private router: Router) {}

getNotes(notesPerPage: number, currentNotes: number) {
  const queryParams = `?pagesize=${notesPerPage}&page=${currentNotes}`;
  this.http.get<{message: string, notes: any, maxNotes: number}>(BACKENDURL + queryParams)
  .pipe(map((notesData) => {
    return {
      notes: notesData.notes.map(note => {
        return {
          title: note.title,
          content: note.content,
          id: note._id,
          date: note.date
        };
    }), maxNotes: notesData.maxNotes};
  }))
    .subscribe((transformedPostData) => {
      this.notes = transformedPostData.notes;
      this.notesUpdated.next({
        notes: [...this.notes],
        noteCount: transformedPostData.maxNotes
      });
    });
}

  getNote(id: string) {
    return this.http.get<{
    _id: string,
    title: string,
    content: string,
    date: Date
    }>(BACKENDURL + id);
  }

  addNote(title: string, content: string) {
    const noteData = new FormData();
    noteData.append('title', title);
    noteData.append('content', content);

    this.http.post<{message: string, note: Labnote}>(BACKENDURL, noteData)
    .subscribe((responseData) => {
      this.router.navigate(['/labnotebook/labnotes']);
    });
  }

  updateNote() {

  }


}
