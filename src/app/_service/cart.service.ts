import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cart } from '../_model/cart';
import { CART_MOCK } from '../cart.mock';
import { Product } from '../_model/product';
import { Item } from '../_model/item';

@Injectable({
	providedIn: 'root'
})
export class CartService {

	constructor() { }

	getCurrentCart(): Observable<Cart> {
		return of(JSON.parse(localStorage.getItem('user-cart')));
	}

	addProduct(product: Product) {
		var currItem: Item = CART_MOCK.items.filter(item => item.product === product)[0];
		if (currItem) {
			currItem.amount++;
			currItem.totalPrice+=product.price;
		} else {
			var lastItm: Item = CART_MOCK.items.sort((i1, i2) => i1.id - i2.id)[0];
			var nxtId: number = 1;
			if (lastItm) {
				nxtId = lastItm.id + 1;
			}
			currItem = { id: nxtId, amount: 1, product: product, totalPrice: product.price };
			CART_MOCK.items.push(currItem);
		}
		CART_MOCK.totalPrice = CART_MOCK.items.map(i => i.totalPrice).reduce((p1, p2) => p1+p2, 0.0);
		if (localStorage.getItem('user-cart')) {
			var cart: Cart = JSON.parse(localStorage.getItem('user-cart'));
			cart.items.push(currItem);
			cart.totalPrice=CART_MOCK.totalPrice;
			this.update(cart);
		} else {
			this.update(CART_MOCK);
		}
	}

	update(cart: Cart) {
		localStorage.setItem('user-cart', JSON.stringify(cart));
	}
}
