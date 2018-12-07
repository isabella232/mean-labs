import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material';
import * as moment from 'moment';

import { Labnote } from '../labnote.model';
import { LabNoteBookService } from '../labnotebook.service';

@Component({
  selector: 'app-labnotes',
  templateUrl: './labnotes.component.html',
  styleUrls: ['./labnotes.component.scss']
})
export class LabnotesComponent implements OnInit {
  labnotes: Labnote[] = [];
  isLoading = false;
  private notesSub: Subscription;
  userId: string;

  totalNotes = 0;
  NotesPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;

  constructor(private labNoteBookService: LabNoteBookService) { }

  ngOnInit() {
    this.isLoading = true;
    this.labNoteBookService.getNotes(this.NotesPerPage, this.currentPage);
    this.notesSub = this.labNoteBookService.getNotesUpdateListener()
    .subscribe((notesData: {notes: Labnote[], noteCount: number}) => {
      this.isLoading = false;

      notesData.notes.forEach(note => {
        note.stringDate = moment(note.date).format('dddd, MMMM Do YYYY, h:mm');
      });

      this.labnotes = notesData.notes;
      this.totalNotes = notesData.noteCount;
    });
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.NotesPerPage = pageData.pageSize;
    this.labNoteBookService.getNotes(this.NotesPerPage, this.currentPage);
  }


}
