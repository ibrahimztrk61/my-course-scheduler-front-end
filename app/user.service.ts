import { Injectable } from '@angular/core';
import {Course, TimeOfScheduler, User} from './data';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  host = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  registerStudent(userRegistrationRequest: User): Observable<any> {
    return this.http.post(this.host + 'students', userRegistrationRequest);
  }
  registerLecturer(userRegistrationRequest: User): Observable<any> {
    return this.http.post(this.host + 'lecturers', userRegistrationRequest);
  }

  loginLecturer(userLoginRequest: User): Observable<User> {
    return this.http.post<User>(this.host + 'lecturers/login', userLoginRequest);
  }
  loginStudent(userLoginRequest: User): Observable<User> {
    return this.http.post<User>(this.host + 'students/login', userLoginRequest);
  }

  getStudentSchedule(userId: number): Observable<TimeOfScheduler[]> {
    return this.http.get<TimeOfScheduler[]>(this.host + 'students/' + userId + '/scheduled');
  }

  getCourse(crn: number): Observable<Course> {
     return this.http.get<Course>(this.host + 'courses/crn/' + crn);
  }

  getLecturerScheduler(userId: number): Observable<TimeOfScheduler[]> {
    return this.http.get<TimeOfScheduler[]>(this.host + 'lecturers/' + userId + '/scheduled');

  }
}
