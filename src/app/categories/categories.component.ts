import { Component, OnInit } from '@angular/core';

import { Category } from '../_model/category';
import { CategoryService } from '../_service/category.service';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

	categories: Category[];

	constructor(private categoryService: CategoryService) { }

	ngOnInit(): void {
		this.categoryService.getAll()
			.subscribe(data => this.categories = data, error => console.log(error));
	}
}
