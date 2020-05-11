import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AuthGuard} from './auth/auth-guard.service';
import {AuthService} from './auth/auth.service';
import {NoteFormService} from './note-form/note-form.service';
import {AppComponent} from './app.component';
import {NoteFormComponent} from './note-form/note-form.component';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './not-found.component';

import {NoteNameToUpperFilter} from './filters/note-name.pipe';
import {NoteSearchFilter} from './filters/note-search.pipe';
import {NoteListComponent} from './note-list/note-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteFormComponent,
    LoginComponent,
    AboutComponent,
    PageNotFoundComponent,
    NoteNameToUpperFilter,
    NoteSearchFilter,
    NoteListComponent
  ],
  schemas: [
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthService, NoteFormService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
