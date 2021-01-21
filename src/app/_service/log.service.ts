import { Observable } from 'rxjs';
import { APIEndpoints } from './../api-endpoints';
import { HttpClient } from '@angular/common/http';
import { Log } from '../_model/log';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logUrl: string = APIEndpoints.LOGS;

  constructor(private http: HttpClient) { }

  save(log: Log): Observable<Log> {
    return this.http.post<Log>(this.logUrl, log);
  }
}
