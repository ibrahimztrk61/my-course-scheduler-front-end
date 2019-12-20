import {Component, OnInit} from '@angular/core';
import {User} from '../data';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})


export class RegistrationComponent implements OnInit {
  user = new User();

  constructor(private userService: UserService,
              private router: Router) {
  }


  ngOnInit() {
  }
  register() {
    this.user.userType = 'STUDENT';
    this.userService.registerStudent(this.user).subscribe(
      response => {
          this.router.navigateByUrl('login');
      }, error1 => {
        alert('beklenmeyen bir hata oluştu');
      });
  }
}
