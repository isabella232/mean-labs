import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' } // lazy loading modules
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule {}
