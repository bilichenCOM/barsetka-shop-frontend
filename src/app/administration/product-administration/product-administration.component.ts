import { Component, OnInit } from '@angular/core';

import { Product } from '../../_model/product';
import { Category } from '../../_model/category';
import { CategoryService } from '../../_service/category.service';
import { ProductService } from '../../_service/product.service';

@Component({
	selector: 'app-product-administration',
	templateUrl: './product-administration.component.html',
	styleUrls: ['./product-administration.component.css']
	})
export class ProductAdministrationComponent implements OnInit {

	prod: Product;
	categories: Category[];
	last: Product;
	submitted: boolean;
	err: boolean;

	constructor(
		private catService: CategoryService,
		private prodService: ProductService
		) {
		this.prod=new Product();
	}

	ngOnInit(): void {
		this.initCats();
	}

	initCats() {
		this.catService.getAll()
			.subscribe(data=>this.categories=data, err=>console.log(err));
	}


	submit() {
		this.submitted=true;
		this.prodService.save(this.prod)
			.subscribe(data=>{
					this.last=data;
					this.err=false;
					this.prod=new Product();
				}, 
				err=>{
					console.log(err);
					this.err=true;
				})
	}

	onChange() {
		this.submitted=false;
	}

	onChangeCat(cat) {
		this.prod.category=cat;
	}
}
