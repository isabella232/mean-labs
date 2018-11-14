import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabnotesComponent } from './labnotes/labnotes.component';
import { LabnoteCreateComponent } from './labnote-create/labnote-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LabnotesComponent, LabnoteCreateComponent]
})
export class LabnotebookModule { }
