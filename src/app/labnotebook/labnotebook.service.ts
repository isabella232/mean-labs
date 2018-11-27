import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { Labnote } from './labnote.model';

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

  addNote(title: string, content: string, image: File) {
    const postData = new FormData();
    postData.append('title', title);
    postData.append('content', content);
    postData.append('image', image, title);

    this.http.post<{message: string, note: Labnote}>('BACKENDURL', postData)
    .subscribe((responseData) => {
      this.router.navigate(['/posts/list']);
    });
  }

  updateNote() {

  }


}
