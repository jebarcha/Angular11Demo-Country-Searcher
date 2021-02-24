import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class ByCountryComponent implements OnInit {

  hasError: boolean = false;
  termino: string = ''
  countries : Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search(termino: any) {
    this.showSuggestions = false;
    this.countries = [];
    this.hasError = false;
    this.countryService.searchCountry(termino)
      .subscribe( countries => {
        //console.log(countries);
        this.countries = countries;
      }, err => {
        this.hasError = true;
      });
  }

  sugerencias(termino: string) {
    this.showSuggestions = true;
    this.hasError = false;
    this.termino = termino;
    
    this.countryService.searchCountry(termino)
      .subscribe( countries => this.suggestedCountries = countries.splice(0,5),
        (err) => this.suggestedCountries = []);
  }

}
