import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { StartComponent } from './start/start.component';
import { GalleryDemoComponent } from './demo/gallery-demo/gallery-demo/gallery-demo.component';
import { SiteGridDemoComponent } from './demo/grids-demo/site-grid-demo/site-grid-demo.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'gallery', component: GalleryDemoComponent },
  { path: 'sitegrids', component: SiteGridDemoComponent },
  { path: 'labnotebook', loadChildren: './labnotebook/labnotebook.module#LabnotebookModule'},
  { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' } // lazy loading modules
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule {}
