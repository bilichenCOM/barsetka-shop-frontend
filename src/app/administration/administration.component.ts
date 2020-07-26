import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-administration',
	templateUrl: './administration.component.html',
	styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

	isCreateProduct: boolean;
	isCreateCategory: boolean;

	constructor() { }

	ngOnInit(): void {
	}

	activateProd() {
		if (this.isCreateProduct) return;
		this.isCreateCategory=false;
		this.isCreateProduct=true;
	}

	activateCat() {
		if (this.isCreateCategory) return;
		this.isCreateProduct=false;
		this.isCreateCategory=true;
	}
}
