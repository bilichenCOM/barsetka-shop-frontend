import { AuthenticationService } from './../_service/authentication.service';
import { Component, OnInit } from '@angular/core';

import { AppSettings } from '../app-settings';
import { Cart } from '../_model/cart';
import { CartService } from '../_service/cart.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	instagramLink: string;
  cart: Cart;
  authenticated: boolean;

	constructor(
    private cartService: CartService,
    private authenticationService: AuthenticationService
		) {
		this.instagramLink = AppSettings.INSTA_LINK;
	}

	ngOnInit(): void {
    this.getCart();
    this.checkAuthenticated();
	}

	getCart() {
		this.cartService.getCurrentCart()
			.subscribe(data => this.cart = data, err => console.log(err));
  }

  checkAuthenticated() {
    this.authenticated = this.authenticationService.isUserLoggedIn();
  }
}
