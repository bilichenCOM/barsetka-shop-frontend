import { Injectable } from '@angular/core';
import {Authentication} from '../_model/authentication';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentAuthenticationSubject: BehaviorSubject<Authentication>;
  currentAuthentication: Observable<Authentication>;

  constructor(private http: HttpClient) {
    this.currentAuthenticationSubject = new BehaviorSubject<Authentication>(JSON.parse(localStorage.getItem('currAuth')));
    this.currentAuthentication = this.currentAuthenticationSubject.asObservable();
  }

  public get currentAuthenticationValue(): Authentication {
    return this.currentAuthenticationSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`/users/authenticate`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentAuthenticationSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentAuthenticationSubject.next(null);
  }
}
