import { Observable, of } from 'rxjs';
import { APIEndpoints } from './../api-endpoints';
import { Injectable } from '@angular/core';
import {Authentication} from '../_model/authentication';
import {HttpClient} from '@angular/common/http';
import { UserResponse } from '../_model/user-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  save(auth: Authentication) {
    auth.password = null;
    localStorage.setItem('currentAuth', JSON.stringify(auth));
  }

  getCurrentAuthentication(): Authentication {
    return JSON.parse(localStorage.getItem('currentAuth'));
  }

  login(auth: Authentication): Observable<UserResponse> {
    if (this.getCurrentAuthentication()) {
      return of(JSON.parse(localStorage.getItem('currentUser')));
    }

    return this.http.post<UserResponse>(APIEndpoints.AUTH, auth);
  }

  logout(): Observable<any> {
    localStorage.removeItem('currentAuth');
    localStorage.removeItem('currentUser');
    return this.http.post<any>(APIEndpoints.LOGOUT, null);
  }
}
