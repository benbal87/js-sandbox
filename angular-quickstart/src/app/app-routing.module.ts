import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {NoteFormComponent} from './note-form/note-form.component';
import {PageNotFoundComponent} from './not-found.component';
import {AuthGuard} from './auth/auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'note-form',
    component: NoteFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule {
}
