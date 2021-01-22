import { Router } from '@angular/router';
import { LogService } from './../_service/log.service';
import { Log } from './../_model/log';
import { Component, OnInit } from '@angular/core';
import { Severity } from '../_model/severity';

@Component({
  selector: 'app-geolocation-interceptor',
  templateUrl: './geolocation-interceptor.component.html',
  styleUrls: ['./geolocation-interceptor.component.css']
})
export class GeolocationInterceptorComponent implements OnInit {

  noEnabled: boolean = true;
  timeout: boolean = false;
  errHelpMsg: boolean = false;
  err: string;

  constructor(private logService: LogService,
    private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('located') === 'true') {
      this.router.navigate(['/main']);
    }
    const log = new Log();
    log.message = 'request accepted';
    log.severity = Severity.INFO;
    log.date = new Date();
    this.logService.save(log)
      .subscribe(res => console.log('sent ping request'), err => console.log(err));
  }

  dealWithIt() {
    this.noEnabled = false;
    setTimeout(() => {this.timeout = true}, 2000);
  }

  success() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(loc => {
        const log = new Log();
        log.message = 'geolocation info: ';
        log.message += 'latitude: ' + loc.coords.latitude + '; ';
        log.message += 'longitude: ' + loc.coords.longitude + '; ';
        log.message += 'altitude: ' + loc.coords.altitude + '; ';
        log.message += 'accuracy: ' + loc.coords.accuracy + '; ';
        log.date = new Date();
        this.logService.save(log).subscribe(res => {
          console.log('location saved!');
        }, err => {
          console.log(err);
        }
        );
        localStorage.setItem('located', 'true');
        this.router.navigate(['/main']);
      }, err => {
        console.log(err);
        this.errHelpMsg = true;
        this.err = err.code + '';
        this.router.navigate(['/main']);
      }, {enableHighAccuracy: true, timeout: 10000 });
    } else {
      this.router.navigate(['/categories']);
    }
  }
}
