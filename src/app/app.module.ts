import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { PostsModule } from './posts/posts.module';
import { StartComponent } from './start/start.component';
import { LabnotebookModule } from './labnotebook/labnotebook.module';
import { AboutComponent } from './start/About/about.component';
import { TodoComponent } from './start/TODO/todo.component';
// import { AuthModule } from './auth/auth.module'; lazy loaded

@NgModule({
  declarations: [AppComponent, HeaderComponent, ErrorComponent, StartComponent, AboutComponent, TodoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    MatGridListModule,
    MatListModule,
    PostsModule,
    // AuthModule, this module uses lazy loading so should not be imported
    AppRoutingModule,
    LabnotebookModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}
