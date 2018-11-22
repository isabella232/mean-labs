import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material';

import { Labnote } from '../labnote.model';

@Component({
  selector: 'app-labnotes',
  templateUrl: './labnotes.component.html',
  styleUrls: ['./labnotes.component.scss']
})
export class LabnotesComponent implements OnInit {
  labnotes: Labnote[] = [];
  isLoading = false;
  private postsSub: Subscription;
  private authStatusSub: Subscription;
  userId: string;

  totalNotes = 0;
  NotesPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;

  constructor() { }

  ngOnInit() {
  }

}
