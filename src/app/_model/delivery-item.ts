import { City } from './city';

export class DeliveryItem {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	address: string;
	city: City;
	zip: number;
}