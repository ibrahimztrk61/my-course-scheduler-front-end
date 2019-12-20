import {Component, OnInit} from '@angular/core';
import {User} from '../data';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {error} from 'util';

@Component({
  selector: 'app-lecturer-registration',
  templateUrl: './lecturer-registration.component.html',
  styleUrls: []
})
export class LecturerRegistrationComponent implements OnInit {
  user = new User();

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    this.user.userType = 'LECTURER';
    this.userService.registerLecturer(this.user).subscribe(
      response => {
        this.router.navigateByUrl('lecturer-login');
      }, error1 => {
        alert('beklenmeyen bir hata oluştu');
      }
    )
    ;
  }
}
