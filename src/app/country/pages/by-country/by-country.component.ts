import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: []
})
export class ByCountryComponent implements OnInit {

  hasError: boolean = false;
  termino: string = ''
  countries : Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search(termino: any) {
    this.countries = [];
    this.hasError = false;
    this.countryService.searchCountry(termino)
      .subscribe( countries => {
        console.log(countries);
        this.countries = countries;
      }, err => {
        this.hasError = true;
      });
  }

  sugerencias(termino: string) {
    this.hasError = false;
    // TODO: crear sugerencias
    
  }

}
