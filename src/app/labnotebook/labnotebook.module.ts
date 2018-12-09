import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LabnotesComponent } from './labnotes/labnotes.component';
import { LabnoteCreateComponent } from './labnote-create/labnote-create.component';
import { LabnotebookRoutingModule } from './labnotebook-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LabnotebookRoutingModule,
    AngularMaterialModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  declarations: [LabnotesComponent, LabnoteCreateComponent]
})
export class LabnotebookModule {}
