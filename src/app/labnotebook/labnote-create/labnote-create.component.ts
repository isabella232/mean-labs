import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LabNoteBookService } from '../labnotebook.service';
import { Labnote } from '../labnote.model';
import * as moment from 'moment';

@Component({
  selector: 'app-labnote-create',
  templateUrl: './labnote-create.component.html',
  styleUrls: ['./labnote-create.component.scss']
})
export class LabnoteCreateComponent implements OnInit, OnDestroy {
  private mode = 'created'; // todo: created if nothing loaded at init
  private noteId: string;
  isLoading = false;
  isFirst = false;
  isLast = false;
  note: Labnote;
  form: FormGroup;

  constructor(
    private labnotebookService: LabNoteBookService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, {
        validators: [Validators.required]
      })
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const paramMode = paramMap.get('mode');
      if (paramMode === 'view' ) {
        this.mode = 'view';
        this.noteId = paramMap.get('noteId');
        this.isLoading = true;
        this.labnotebookService.getNote(this.noteId).subscribe(noteData => {
          this.isLoading = false;
          this.note = {
            id: noteData._id,
            title: noteData.title,
            content: noteData.content,
            date: noteData.date,
            stringDate: moment(noteData.date).format('dddd, MMMM Do YYYY, h:mm')
          };

          this.form.setValue({
            title: this.note.title,
            content: this.note.content
          });
          this.form.disable();
        });
      } else if (paramMode === 'edit') {
        this.mode = 'edit';
        this.noteId = paramMap.get('noteId');
        this.isLoading = true;
        this.labnotebookService.getNote(this.noteId).subscribe(noteData => {
          this.isLoading = false;
          this.note = {
            id: noteData._id,
            title: noteData.title,
            content: noteData.content,
            date: noteData.date,
            stringDate: moment(noteData.date).format('dddd, MMMM Do YYYY, h:mm')
          };

          this.form.setValue({
            title: this.note.title,
            content: this.note.content
          });
        });
      } else {
        this.mode = 'create';
        this.noteId = null;
      }
    });
  }

  ngOnDestroy() {}

  onSaveNote() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.labnotebookService.addNote(
        this.form.value.title,
        this.form.value.content
      );
    } else {
      this.labnotebookService.updateNote(
        this.noteId,
        this.form.value.title,
        this.form.value.content
      );
    }
    this.form.reset();
  }

  onNext() {
    this.isLoading = true;
    this.isFirst = false;
    this.isLast = false;
    this.labnotebookService.getNextNote(this.noteId).subscribe( noteData => {
      this.isLoading = false;
      if (noteData.length > 0)  {
        this.note = {
          id: noteData[0]._id,
          title: noteData[0].title,
          content: noteData[0].content,
          date: noteData[0].date,
          stringDate: moment(noteData[0].date).format('dddd, MMMM Do YYYY, h:mm')
        };

        this.form.setValue({
          title: this.note.title,
          content: this.note.content
        });

        this.noteId = this.note.id;

        if (!noteData[1]) {
          this.isLast = true;
        }
      } else if (noteData.message) {
        this.isLast = true;
      }
    });
  }

  onPrevious() {
    this.isLoading = true;
    this.isFirst = false;
    this.isLast = false;
    this.labnotebookService.getPreviousNote(this.noteId).subscribe( noteData => {
      this.isLoading = false;
      if (noteData.length > 0)  {
        this.note = {
          id: noteData[0]._id,
          title: noteData[0].title,
          content: noteData[0].content,
          date: noteData[0].date,
          stringDate: moment(noteData[0].date).format('dddd, MMMM Do YYYY, h:mm')
        };

        this.form.setValue({
          title: this.note.title,
          content: this.note.content
        });

        this.noteId = this.note.id;

        if (!noteData[1]) {
          this.isFirst = true;
        }
      } else if (noteData.message) {
        this.isFirst = true;
      }
    });
  }
}
