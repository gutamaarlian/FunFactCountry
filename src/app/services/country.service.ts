
import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import { Country } from '../constants/country';


@Injectable({
    providedIn : 'root'
})

export class CountryService{
    private BASE_URL = "https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/country";
    constructor(private http: HttpClient){
        
    }

    
    getCountries(){ //get All Country
        return this.http.get<Country[]>(`${this.BASE_URL}`);
    }

    getCountry(id){ // get appart by Id
        this.getCountries().subscribe((country)=>{
            return country.filter((c)=>{
                return c.id = id
            })
        })
    }
       

}