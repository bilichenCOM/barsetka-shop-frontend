import { UserService } from './../_service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from './../_model/authentication';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../_service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  submitted: boolean;
  successLoggedIn: boolean;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authenticationService.getCurrentAuthentication()
      .subscribe(data => {
        if (data) {
          this.router.navigateByUrl('/main', {queryParams: {login: true}});
        }
      });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('wrong data input');
      this.submitted = true;
      return;
    }

    let auth = new Authentication();
    auth.username = this.loginForm.get('username').value;
    auth.password = this.loginForm.get('password').value;

    this.authenticationService.login(auth).subscribe(data => {
      this.userService.saveCurrentUser(data);
      this.successLoggedIn = true;
      console.log('successfully logged in');
      this.authenticationService.save(auth);
      location.reload();
    }, err => {
      this.successLoggedIn = false;
      console.log('authentication failed - wrong credentials!');
    });
    this.submitted = true;
  }

  wasEdited() {
    this.submitted = false;
  }
}
