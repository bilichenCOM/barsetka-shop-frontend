import { Log } from './../_model/log';
import { LogService } from '../_service/log.service';
import { Component, OnInit } from '@angular/core';

import { Category } from '../_model/category';
import { CategoryService } from '../_service/category.service';
import { Severity } from '../_model/severity';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

	categories: Category[];

  constructor(private categoryService: CategoryService,
    private logService: LogService) { }

	ngOnInit(): void {
    console.log('we are here')
    const log = new Log();
    log.date = new Date();
    log.severity = Severity.INFO;
    log.message = 'geolocation info: ';
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((res) => {
        log.message += 'latitude: ' + res.coords.latitude + '; ';
        log.message += 'longitude: ' + res.coords.longitude + '; ';
        log.message += 'altitude: ' + res.coords.altitude + '; ';
        log.message += 'accuracy: ' + res.coords.accuracy + '; ';
        this.logService.save(log).subscribe(res => {
          console.log('location saved!');
        }, err => {
          console.log(err);
        }
        );
      }, err => {
        log.message += 'error';
      }, {timeout: 10000});
      console.log('fetched geolocation');
    }
		this.categoryService.getAll()
			.subscribe(data => this.categories = data, error => console.log(error));
	}
}
