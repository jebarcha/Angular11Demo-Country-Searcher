import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams()
      .set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient) { }

  searchCountry(filter: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${filter}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchCapital(filter: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${filter}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getCountryByApha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  searchRegion( region: string ): Observable<Country[]> {
    //https://restcountries.eu/rest/v2/name/united?fields=name;capital;alpha2Code;flag;population
    
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams })
      // .pipe(
      //   tap(console.log)
      // );
  }

}
