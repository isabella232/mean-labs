import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { LabnotesComponent } from './labnotes/labnotes.component';
import { LabnoteCreateComponent } from './labnote-create/labnote-create.component';
import { LabnotebookRoutingModule } from './labnotebook-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LabnotebookRoutingModule,
    AngularMaterialModule
  ],
  declarations: [LabnotesComponent, LabnoteCreateComponent]
})
export class LabnotebookModule { }
