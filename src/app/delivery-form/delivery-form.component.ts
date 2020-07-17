import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Cart } from '../_model/cart';
import { CartService } from '../_service/cart.service';
import { City } from '../_model/city';
import { DeliveryItem } from '../_model/delivery-item';
import { GeographyService } from '../_service/geography.service';
import { DeliveryItemService } from '../_service/delivery-item.service';

@Component({
	selector: 'app-delivery-form',
	templateUrl: './delivery-form.component.html',
	styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {

	cart: Cart;
	cities: City[];
	deliveryForm: FormGroup = new FormGroup({
		firstName: new FormControl("", Validators.required),
		lastName: new FormControl("", Validators.required),
		email: new FormControl("", [Validators.required, Validators.email]), 
		address: new FormControl(""),
		city: new FormControl(""),
		zip: new FormControl(""),
		saveInfo: new FormControl("")
	});
	deliveryItem: DeliveryItem;

	constructor(
		private cartService: CartService,
		private geographyService: GeographyService,
		private deliveryService: DeliveryItemService
		) { }

	ngOnInit(): void {
		this.getCart();
		this.getAllCities();
	}

	getCart() {
		this.cartService.getCurrentCart()
		.subscribe(data => this.cart = data, err => console.log(err));
	}

	getAllCities() {
		this.geographyService.getCities()
		.subscribe(data => this.cities = data, err => console.log(err));
	}

	onSubmit() {
		if (this.deliveryForm.invalid) {
			console.log("form is invalid!");
			return;
		}

		var delivery: DeliveryItem = new DeliveryItem();
		delivery.firstName = this.deliveryForm.get("firstName").value;
		delivery.lastName = this.deliveryForm.get("lastName").value;
		delivery.address = this.deliveryForm.get("address").value;
		delivery.email = this.deliveryForm.get("email").value;
		delivery.zip = +this.deliveryForm.get("zip").value;

		console.log("sending request!");
		this.deliveryService.addNewItem(delivery)
			.subscribe(data => this.deliveryItem = data, err => console.log(err));

	}

	checkValid(): boolean {
		return this.deliveryForm.valid;
	}

}
