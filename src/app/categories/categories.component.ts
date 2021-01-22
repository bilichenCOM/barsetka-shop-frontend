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
		this.categoryService.getAll()
			.subscribe(data => this.categories = data, error => console.log(error));
	}
}
