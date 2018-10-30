import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'list', component: PostListComponent, canActivate: [AuthGuard]  },
  { path: 'posts/create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
