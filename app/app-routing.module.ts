import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {LecturerRegistrationComponent} from './lecturer-registration/lecturer-registration.component';
import {LecturerScheduleComponent} from './lecturer-schedule/lecturer-schedule.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {LecturerSignInComponent} from './lecturer-sign-in/lecturer-sign-in.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'}, // display first screen
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'lecturer-login', component: LecturerSignInComponent},
  {path: 'lecturer-registration', component: LecturerRegistrationComponent},
  {path: 'lecturer-schedule', component: LecturerScheduleComponent},
  {path: 'schedule', component: ScheduleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

export const routingComponents = [LoginComponent, RegistrationComponent, LecturerSignInComponent, ScheduleComponent, LecturerScheduleComponent, LecturerRegistrationComponent];
