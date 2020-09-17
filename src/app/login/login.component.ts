import { Router } from '@angular/router';
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
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  successLoggedIn: boolean;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('wrong data input');
      return;
    }
    var auth = new Authentication();
    auth.username = this.loginForm.get('username').value;
    auth.password = this.loginForm.get('password').value;
    var isLoggedIn = this.authenticationService.login(auth);
    if (isLoggedIn) {
      console.log('successfully authenticated');
      this.router.navigateByUrl('/main');
      this.successLoggedIn = true;
    } else {
      this.successLoggedIn = false;
    }
  }
}
