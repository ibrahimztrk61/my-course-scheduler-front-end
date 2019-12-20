import { BrowserModule } from '@angular/platform-browser';  /* tarayıcı ile çalışabilmek için*/
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { LecturerScheduleComponent } from './lecturer-schedule/lecturer-schedule.component';
import { LecturerRegistrationComponent } from './lecturer-registration/lecturer-registration.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LecturerSignInComponent } from './lecturer-sign-in/lecturer-sign-in.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ScheduleComponent,
    LecturerScheduleComponent,
    LecturerRegistrationComponent,
    LoginComponent,
    LecturerSignInComponent
  ],
  imports: [
    BrowserModule,   /* tarayıcı ile çalışabilmek için*/
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

