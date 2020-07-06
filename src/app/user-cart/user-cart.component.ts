import { Component, OnInit } from '@angular/core';

import { Cart } from '../_model/cart';
import { CartService } from '../_service/cart.service';

@Component({
	selector: 'app-user-cart',
	templateUrl: './user-cart.component.html',
	styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

	cart: Cart;

	constructor(private cartService: CartService) { }

	ngOnInit(): void {
		this.cartService.getCurrentCart()
			.subscribe(data => this.cart=data, err => console.log(err));
	}

}
