import { APIEndpoints } from './../api-endpoints';
import { Injectable } from '@angular/core';
import {Authentication} from '../_model/authentication';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  getCurrentAuthentication(): Authentication {
    return JSON.parse(localStorage.getItem('currentAuth'));
  }

  login(auth: Authentication): boolean {
    if (this.getCurrentAuthentication()) {
      return true;
    }

    let authenticated: boolean;
    this.http.post<string>(APIEndpoints.AUTH, auth)
      .subscribe(data => {
        localStorage.setItem('jwtToken', data);
        console.log(`jwt:${data}`);
        authenticated = true;
        console.log('successfully logged in');
      }, err => {
        console.log('wrong credentials');
        authenticated = false;
      });
    return authenticated;
  }

  logout() {
    this.http.post(APIEndpoints.LOGOUT, null);
  }

  isUserLoggedIn(): boolean {
    return this.getCurrentAuthentication() !== null;
  }
}
