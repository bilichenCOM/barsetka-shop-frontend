import { Category } from './category';

export class Product {
	id: number;
	name: string;
	description: string;
	photoUrls: string[];
	price: number;
	category: Category;
}