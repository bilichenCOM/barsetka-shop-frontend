import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
		phoneNumber: new FormControl("", Validators.required),
		address: new FormControl(""),
		city: new FormControl(""),
		zip: new FormControl(""),
		saveInfo: new FormControl("")
	});
	deliveryItem: DeliveryItem;
	submited: boolean;

	constructor(
		private cartService: CartService,
		private geographyService: GeographyService,
		private deliveryService: DeliveryItemService,
		private router: Router
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
		delivery.email = this.deliveryForm.get("email").value;
		delivery.phoneNumber = this.deliveryForm.get("phoneNumber").value;
		delivery.products = this.cart.items.map(item=>item.product);
		delivery.zip = +this.deliveryForm.get("zip").value;

		console.log("sending request!");
		this.deliveryService.addNewItem(delivery)
			.subscribe(data => {
				this.deliveryItem = data;
				this.cart.items=[];
				this.cart.totalPrice=0.0;
				this.cartService.update(this.cart);
				this.submited=true;
			},
			 err => console.log(err));

	}
}
