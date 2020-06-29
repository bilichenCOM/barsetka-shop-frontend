import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../_model/product';
import { Category } from '../_model/category';
import { ProductService } from '../_service/product.service';
import { CategoryService } from '../_service/category.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	products: Product[];
	category: Category;

	constructor(
		private productService: ProductService,
		private categoryService: CategoryService,
		private route: ActivatedRoute
		) {}

	ngOnInit() {
		this.loadCategory();
		this.loadProducts();
	}

	loadCategory() {
		const categoryId = +this.route.snapshot.paramMap.get('categoryId');
		this.categoryService.getById(categoryId)
			.subscribe(cat => this.category = cat, error => console.log(error));

	}

	loadProducts() {
		const categoryId = +this.route.snapshot.paramMap.get('categoryId');
		this.categoryService.getAllProducts(categoryId)
			.subscribe(products => this.products = products, error => console.log(error));	
	}
}
