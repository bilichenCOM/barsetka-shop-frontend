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
    if (this.authenticationService.getCurrentAuthentication() && req.url.indexOf('basicauth') === -1) {
      let authReq;
      this.userService.getCurrentUser().subscribe(data => {
        authReq = req.clone({
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`
          })
        });
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }

}
