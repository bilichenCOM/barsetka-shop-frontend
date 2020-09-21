import { UserResponse } from './../_model/user-response';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getCurrentUser(): Observable<UserResponse> {
    return of(JSON.parse(localStorage.getItem('currentUser')));
  }
}
