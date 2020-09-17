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

  login(auth: Authentication): boolean {
    return false;
  }

  logout() {

  }

  isUserLoggedIn(): boolean {
    return true;
  }
}
