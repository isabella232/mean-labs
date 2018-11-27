import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LabNoteBookService } from '../labnotebook.service';
import { Labnote } from '../labnote.model';

@Component({
  selector: 'app-labnote-create',
  templateUrl: './labnote-create.component.html',
  styleUrls: ['./labnote-create.component.scss']
})
export class LabnoteCreateComponent implements OnInit, OnDestroy {


  private mode = 'created';
  private noteId: string;
  isLoading = false;
  note: Labnote;
  form: FormGroup;

  constructor(private labnotebookService: LabNoteBookService, public route: ActivatedRoute) { }

  ngOnInit() {

    this.form = new FormGroup({
      'title': new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      'content': new FormControl(null, {
        validators: [Validators.required]
      })
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.noteId = paramMap.get('postId');
        this.isLoading = true;
        this.labnotebookService.getNote(this.noteId).subscribe(postData => {
          this.isLoading = false;
          this.note = {
            id: postData._id,
            title: postData.title,
            content: postData.content,
            date: postData.date
          };

          this.form.setValue({ title: this.note.title, content: this.note.content });
        });
      } else {
        this.mode = 'create';
        this.noteId = null;
      }
    });
  }

  ngOnDestroy() {

  }

  onSaveNote () {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.labnotebookService.addNote(this.form.value.title, this.form.value.content, this.form.value.image);
    } else {
      this.labnotebookService.updateNote();
    }
    this.form.reset();
  }
}

