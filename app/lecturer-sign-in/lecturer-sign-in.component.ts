import { Component, OnInit } from '@angular/core';
import {User} from '../data';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lecturer-sign-in',
  templateUrl: './lecturer-sign-in.component.html',
  styleUrls: ['./lecturer-sign-in.component.css']
})
export class LecturerSignInComponent implements OnInit {

  user = new User();
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  login2() {
    this.userService.loginLecturer(this.user).subscribe(response => {
      if (response) {
        localStorage.setItem('userId', response.id.toString());
        this.router.navigateByUrl('lecturer-schedule');
      } else {
        alert('Incorrect password or email');
      }
    }, error1 => {
      alert('An unexpected error occurred');
    });
  }

}
