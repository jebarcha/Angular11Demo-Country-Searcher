import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  searchCountry(filter: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${filter}`;
    return this.http.get<Country[]>(url);
  }

  searchCapital(filter: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${filter}`;
    return this.http.get<Country[]>(url);
  }

  getCountryByApha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

}
