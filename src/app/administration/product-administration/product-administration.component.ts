import { Component, OnInit } from '@angular/core';

import { Product } from '../../_model/product';
import { Category } from '../../_model/category';
import { CategoryService } from '../../_service/category.service';

@Component({
	selector: 'app-product-administration',
	templateUrl: './product-administration.component.html',
	styleUrls: ['./product-administration.component.css']
	})
export class ProductAdministrationComponent implements OnInit {

	prod: Product;
	categories: Category[];

	constructor(private catService: CategoryService) { }

	ngOnInit(): void {
		this.initCats();
	}

	initCats() {
		this.catService.getAll()
			.subscribe(data=>this.categories=data, err=>console.log(err));
	}


	submit() {

	}
}
