import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../_service';
import { UserService } from '../_service/user.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    this.authenticationService.getCurrentAuthentication().subscribe(data => {
      if (data) {
        authReq = req.clone({
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`
          })
        });
      }
    });
    return next.handle(authReq);
  }

}
