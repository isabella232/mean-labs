import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { LabnotesComponent } from './labnotes/labnotes.component';
import { LabnoteCreateComponent } from './labnote-create/labnote-create.component';

const routes: Routes = [
  { path: 'labnotes', component: LabnotesComponent },
  { path: 'create', component: LabnoteCreateComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class LabnotebookRoutingModule {}
