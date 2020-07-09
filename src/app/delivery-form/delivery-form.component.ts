import { Component, OnInit } from '@angular/core';

import { Cart } from '../_model/cart';
import { CartService } from '../_service/cart.service';
import { Country } from '../_model/country';
import { City } from '../_model/city';
import { GeographyService } from '../_service/geography.service';

@Component({
	selector: 'app-delivery-form',
	templateUrl: './delivery-form.component.html',
	styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {

	cart: Cart;
	countries: Country[];
	selectedCountry: Country;

	constructor(
		private cartService: CartService,
		private geographyService: GeographyService
		) { }

	ngOnInit(): void {
		this.getCart();
		this.getCountries();
	}

	getCart() {
		this.cartService.getCurrentCart()
			.subscribe(data => this.cart = data, err => console.log(err));
	}

	getCountries() {
		this.geographyService.getCountries()
			.subscribe(data => this.countries=data, err => console.log(err));
	}

	selectCountry(countryId: number) {
		this.selectedCountry=this.countries.find(c=>c.id==countryId);
		console.log(this.selectedCountry.name + " was selected");
	}
}
