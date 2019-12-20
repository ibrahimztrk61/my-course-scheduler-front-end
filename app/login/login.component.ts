import { Component, OnInit } from '@angular/core';
import {User} from '../data';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.loginStudent(this.user).subscribe(response => {
      console.log(this.user);
      if (response) {
          this.router.navigateByUrl('schedule');
          localStorage.setItem('userId', response.id.toString());
      } else {
        alert('Incorrect password or email');
      }
    }, error1 => {
      alert('An unexpected error occurred');
    });
  }
}
