import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from '../_model/product';
import { APIEndpoints } from '../api-endpoints';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	private productsUrl: string = APIEndpoints.PRODUCTS;

	constructor(private http: HttpClient) { }

	getByCategoryId(categoryId: number): Observable<Product[]> {
		return this.http.get<Product[]>(this.productsUrl);
	}

	getById(id: number): Observable<Product> {
		return this.http.get<Product>(this.productsUrl + '/' + id);
	}
}
