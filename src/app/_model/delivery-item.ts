import { City } from './city';
import { Product } from './product';

export class DeliveryItem {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	city: City;
	products: Product[];
	zip: number;
}