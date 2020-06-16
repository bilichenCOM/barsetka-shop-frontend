import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../_model/product';
import { PRODUCTS } from '../products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getByCategoryId(categoryId: number): Observable<Product[]> {
	  return of(PRODUCTS.filter((product, index, array) => product.categoryId === categoryId));
  }

  getById(id: number): Observable<Product> {
	  return of(PRODUCTS.find(product => product.id === id));
  }
}
