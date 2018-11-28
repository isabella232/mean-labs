import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { Labnote } from './labnote.model';

const BACKENDURL = environment.apiUrl + '/labnotebook/';

@Injectable({providedIn: 'root'})
export class LabNoteBookService {

constructor (private http: HttpClient, private router: Router) {}

  getNote(id: string) {
    return this.http.get<{
    _id: string,
    title: string,
    content: string,
    date: Date
    }>('BACKENDURL' + id);
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
