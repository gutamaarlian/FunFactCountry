import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/constants/country';
import { CountryService } from 'src/app/services/country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})
export class DetailCountryComponent implements OnInit {


  country : Country;
  constructor(private countryService : CountryService, private route : ActivatedRoute) { 
    this.country = new Country;
  }

  ngOnInit(): void {

    this.getCountry()
  }

  getCountry(){
    let id = this.route.snapshot.paramMap.get('id')
    this.countryService.getCountries().subscribe((d)=>{
      this.country = d.find((data)=>{
        return data.id == id;
      })
    })
  }

}
