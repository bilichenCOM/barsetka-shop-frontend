import { Component, OnInit } from '@angular/core';

import { Cart } from '../_model/cart';
import { CartService } from '../_service/cart.service';

@Component({
	selector: 'app-delivery-form',
	templateUrl: './delivery-form.component.html',
	styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {

	cart: Cart;

	constructor(private cartService: CartService) { }

	ngOnInit(): void {
		this.getCart();
	}

	getCart() {
		this.cartService.getCurrentCart()
			.subscribe(data => this.cart = data, err => console.log(err));
	}
}
