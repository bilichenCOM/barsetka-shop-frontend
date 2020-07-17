import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { City } from '../_model/city';
import { APIEndpoints } from '../api-endpoints';

@Injectable({
	providedIn: 'root'
})
export class GeographyService {

	citiesUrl: string = APIEndpoints.CITIES;

	constructor(private http: HttpClient) { }

	getCities(): Observable<City[]> {
		return this.http.get<City[]>(this.citiesUrl);
	}
}
