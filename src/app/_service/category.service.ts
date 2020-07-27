import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { APIEndpoints } from '../api-endpoints';
import { Category } from '../_model/category';
import { Product } from '../_model/product';
import { CATEGORIES } from '../categories.mock';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {

	private categoriesUrl: string = APIEndpoints.CATEGORIES;

	constructor(private http: HttpClient) { }

	getAll(): Observable<Category[]> {
		return this.http.get<Category[]>(this.categoriesUrl);
	}

	getById(id: number): Observable<Category> {
		return this.http.get<Category>(this.categoriesUrl + '/' + id);
	}

	getAllProducts(id: number): Observable<Product[]> {
		return this.http.get<Product[]>(this.categoriesUrl + '/' + id + '/products');
	}

	save(cat: Category): Observable<Category> {
		return this.http.post<Category>(this.categoriesUrl, cat);
	}
}
