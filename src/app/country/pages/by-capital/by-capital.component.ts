import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent implements OnInit {
  hasError: boolean = false;
  termino: string = ''
  countries : Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search(termino: any) {
    this.countries = [];
    this.hasError = false;
    this.countryService.searchCapital(termino)
      .subscribe( countries => {
        this.countries = countries;
      }, err => {
        this.hasError = true;
      });
  }


}
