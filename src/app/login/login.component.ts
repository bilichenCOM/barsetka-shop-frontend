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
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  submitted: boolean;
  successLoggedIn: boolean;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
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
      localStorage.setItem('token', JSON.stringify(data));
      this.successLoggedIn = true;
      console.log('successfully logged in');
      this.router.navigateByUrl('/main');
      this.authenticationService.save(auth);
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
