import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Country } from '../_model/country';
import { COUNTRIES } from '../countries.mock';

@Injectable({
	providedIn: 'root'
})
export class GeographyService {

	constructor() { }

	getCountries(): Observable<Country[]> {
		return of(COUNTRIES);
	}
}
