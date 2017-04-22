import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {DBService} from './DB';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {ProfileGuard} from './profile/ProfileGuard';
import { ExComponent } from './ex/ex.component';
import { MyPostComponent } from './my-post/my-post.component';
import {SearchPipe} from "./ex/SearchPipe";
import { MyFormComponent } from './my-form/my-form.component';
import { RFormComponent } from './rform/rform.component';

const routes = [
  {path: '', component: HomeComponent},
  {
    path: 'students', component: StudentComponent,
    children: [
      {
        path: 'profile/:id',
        component: ProfileComponent,
        canActivate: [ProfileGuard]
      }
    ]
  }, {path: 'ex', component: ExComponent},
  {path: 'form', component: MyFormComponent},
  {path: 'rform', component: RFormComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HomeComponent,
    ProfileComponent,
    ExComponent,
    MyPostComponent,
    SearchPipe,
    MyFormComponent,
    RFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DBService, ProfileGuard, SearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
