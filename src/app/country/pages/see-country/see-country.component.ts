import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  country!: Country;
  showjson: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
              private countryService: CountryService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ( { id }) => this.countryService.getCountryByApha( id ) ),
        //tap( console.log)
      )
        .subscribe( country => this.country = country )

    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log( id );

    //     this.countryService.getCountryByApha(id)
    //       .subscribe( country => {
    //         console.log(country);
    //       });
    //   } );
  }

}
