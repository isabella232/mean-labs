import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabnotesComponent } from './labnotes/labnotes.component';
import { LabnoteCreateComponent } from './labnote-create/labnote-create.component';
import { LabnotebookRoutingModule } from './labnotebook-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LabnotebookRoutingModule
  ],
  declarations: [LabnotesComponent, LabnoteCreateComponent]
})
export class LabnotebookModule { }
