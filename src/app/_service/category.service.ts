import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Category } from '../_model/category';
import { CATEGORIES } from '../categories.mock';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {

	constructor() { }

	getAll(): Observable<Category[]> {
		return of(CATEGORIES);
	}

	getById(id: number): Observable<Category> {
		return of(CATEGORIES.find(product => product.id === id));
	}
}
