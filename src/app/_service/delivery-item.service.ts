import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DeliveryItem } from '../_model/delivery-item';
import { APIEndpoints } from '../api-endpoints';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Origin' : 'http://localhost:4200'
  })
};

@Injectable({
	providedIn: 'root'
})
export class DeliveryItemService {

	deliveriesUrl: string = APIEndpoints.DELIVERIES;

	constructor(private http: HttpClient) { }

	addNewItem(item: DeliveryItem): Observable<DeliveryItem> {
		return this.http.post<DeliveryItem>(this.deliveriesUrl, item);
	}
}
