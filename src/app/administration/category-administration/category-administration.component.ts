import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../_service/category.service';
import { Category } from '../../_model/category';

@Component({
	selector: 'app-category-administration',
	templateUrl: './category-administration.component.html',
	styleUrls: ['./category-administration.component.css']
})
export class CategoryAdministrationComponent implements OnInit {

	cat: Category;
	last: Category;
	submitted: boolean;
	err: boolean;

	constructor(private service: CategoryService) {
		this.cat = new Category();
	}

	ngOnInit(): void {
	}

	submit() {
		this.submitted=true;
		this.service.save(this.cat)
			.subscribe(data=>{
				this.last=data;
				this.cat=new Category();
			}, err=>{
				console.log(err);
				this.err=true;
			});
	}

	onChange() {
		this.submitted=false;
	}

}
