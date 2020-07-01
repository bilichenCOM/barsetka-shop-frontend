import { Item } from './_model/item';
import { PRODUCTS } from './products.mock';

export const ITEMS_MOCK: Item[] = [
	{id: 1, product: PRODUCTS[0], amount: 1, totalPrice: PRODUCTS[0].price },
	{id: 2, product: PRODUCTS[1], amount: 1, totalPrice: PRODUCTS[1].price },
	{id: 3, product: PRODUCTS[2], amount: 1, totalPrice: PRODUCTS[2].price }
];