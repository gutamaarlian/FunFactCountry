import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service'
import { Country } from 'src/app/constants/country';


@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit {

  countries : Array<Country>
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.countryService.getCountries().subscribe((d) =>{
      this.countries = d      
    })
  }

}
