import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cart } from '../_model/cart';
import { CART_MOCK } from '../cart.mock';

@Injectable({
	providedIn: 'root'
})
export class CartService {

	constructor() { }

	getCurrentCart(): Observable<Cart> {
		return of(CART_MOCK);
	}
}
