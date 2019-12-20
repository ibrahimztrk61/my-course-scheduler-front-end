import { Component, OnInit } from '@angular/core';
import {Course, TimeOfScheduler} from "../data";
import {UserService} from "../user.service";

@Component({
  selector: 'app-lecturer-schedule',
  templateUrl: './lecturer-schedule.component.html',
  styleUrls: []
})
export class LecturerScheduleComponent implements OnInit {

  userId: number;
  courses: Course[];
  timeOfScheduler: TimeOfScheduler[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userId = +localStorage.getItem('userId');
    this.getSchedule();
  }

  /*getSchedule() {
    this.userService.getLecturerScheduler(this.userId).subscribe(
      response => {
        this.courses = response;
      }, error1 => {
        alert('An unexpected error occurred');
      });
  }*/

  getSchedule() {
    this.userService.getLecturerScheduler(this.userId).subscribe(
      response => {
        this.timeOfScheduler = response;
      }, error1 => {
        alert('An unexpected error occurred');
      });
  }

  logout() {
    localStorage.removeItem('userId');
  }
}
