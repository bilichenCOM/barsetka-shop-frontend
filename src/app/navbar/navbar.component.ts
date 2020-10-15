import { Router } from '@angular/router';
import { AuthenticationService } from './../_service/authentication.service';
import { UserResponse } from './../_model/user-response';
import { UserService } from './../_service/user.service';
import { Authentication } from './../_model/authentication';
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
  currUser: UserResponse;

	constructor(
    private cartService: CartService,
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router
		) {
		this.instagramLink = AppSettings.INSTA_LINK;
	}

	ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.getCart();
    this.checkAuth();
  }

  checkAuth() {
    this.userService.getCurrentUser()
      .subscribe(data => this.currUser = data, err => console.log(err));
  }

	getCart() {
		this.cartService.getCurrentCart()
			.subscribe(data => this.cart = data, err => console.log(err));
  }

  logout() {
    this.authService.logout();
    location.reload();
  }
}
