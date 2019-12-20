import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Course, TimeOfScheduler} from '../data';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: []
})
export class ScheduleComponent implements OnInit {
  userId: number;
  courses: Course[];
  newCrnNumber: number;
  removeCrnNumber: number;
  timeOfScheduler: TimeOfScheduler[];


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userId = +localStorage.getItem('userId');
  }

  getSchedule() {
    this.userService.getStudentSchedule(this.userId).subscribe(
      response => {
        this.timeOfScheduler = response;
      }, error1 => {
        alert('An unexpected error occurred');
      });
  }

  addCourseToScheduler() {
    this.userService.getCourse(this.newCrnNumber).subscribe(
      response => {
        const startTime = response.times[0].startTime;
        const endTime = response.times[0].endTime;
        for (let i = (startTime - 8); i < (endTime - 8); i++) {
            if (response.times[0].day == 'MONDAY') {
              if (this.timeOfScheduler[i].monday == null) {
                this.timeOfScheduler[i].monday = response;
              } else {
                alert(response.crn + '|' + response.title + 'is conflict with ' + this.timeOfScheduler[i].monday.crn + '|' + this.timeOfScheduler[i].monday.title);
                break;
              }
            } else if (response.times[0].day == 'TUESDAY') {
              if (this.timeOfScheduler[i].tuesday == null) {
                this.timeOfScheduler[i].tuesday = response;
              } else {
                alert(response.crn + '|' + response.title + 'is conflict with ' + this.timeOfScheduler[i].tuesday.crn + '|' + this.timeOfScheduler[i].tuesday.title);
                break;
              }
            } else if (response.times[0].day == 'WEDNESDAY') {
              if (this.timeOfScheduler[i].wednesday == null) {
                this.timeOfScheduler[i].wednesday = response;
              } else {
                alert(response.crn + '|' + response.title + 'is conflict with ' + this.timeOfScheduler[i].wednesday.crn + '|' + this.timeOfScheduler[i].wednesday.title);
                break;
              }
            } else if (response.times[0].day == 'THURSDAY') {
              if (this.timeOfScheduler[i].thursday == null) {
                this.timeOfScheduler[i].thursday = response;
              } else {
                alert(response.crn + '|' + response.title + 'is conflict with ' + this.timeOfScheduler[i].thursday.crn + '|' + this.timeOfScheduler[i].thursday.title);
                break;
              }
            } else if (response.times[0].day == 'FRIDAY') {
              if (this.timeOfScheduler[i].friday == null) {
                this.timeOfScheduler[i].friday = response;
              } else {
                alert(response.crn + '|' + response.title + 'is conflict with ' + this.timeOfScheduler[i].friday.crn + '|' + this.timeOfScheduler[i].friday.title);
                break;
              }
            }
        }
      }, error1 => {
        alert('Course is not found with this CRN:' + this.newCrnNumber.toString());
      });
  }


  removeCourseTime() {
    for (const obj of this.timeOfScheduler) {
      if ( obj.monday != null && obj.monday.crn == this.removeCrnNumber) {
        obj.monday = null;
      } else if (obj.tuesday != null && obj.tuesday.crn == this.removeCrnNumber) {
        obj.tuesday = null;
      } else if (obj.wednesday != null && obj.wednesday.crn == this.removeCrnNumber) {
        obj.wednesday = null;
      } else if (obj.thursday != null && obj.thursday.crn == this.removeCrnNumber) {
        obj.thursday = null;
      } else if (obj.friday != null && obj.friday.crn == this.removeCrnNumber) {
        obj.friday = null;
      }
    }

  }

  logout() {
    localStorage.removeItem('userId');
  }
}
