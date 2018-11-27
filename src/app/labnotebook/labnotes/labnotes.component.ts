import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material';

import { Labnote } from '../labnote.model';
import { LabNoteBookService } from '../labnotebook.service';

@Component({
  selector: 'app-labnotes',
  templateUrl: './labnotes.component.html',
  styleUrls: ['./labnotes.component.scss']
})
export class LabnotesComponent implements OnInit {
  labnotes: Labnote[] = [
    {id: '1', title: 'Elastic Beanstalk', content: '', date: new Date()},
    {id: '2', title: 'ACM', content: '', date: new Date(Date.UTC(2018, 11, 26, 3, 0, 0))},
    {id: '3', title: 'S3 Buckets', content: '', date: new Date(Date.UTC(2018, 12, 11, 3, 0, 0))}
  ];
  isLoading = false;
  private postsSub: Subscription;
  private authStatusSub: Subscription;
  userId: string;

  totalNotes = 0;
  NotesPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;

  constructor(private labNoteBookService: LabNoteBookService) { }

  ngOnInit() {
  }

}
