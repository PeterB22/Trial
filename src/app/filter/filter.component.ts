
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'
import {Country} from '../model/country.model'
import {CountryBuilder} from '../model/country.model'
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  selectValue:string;
  nameInputValue :string;
  currencyInputValue:string;
  countries:Country[];

  constructor(private http:Http){}


  getDataByValue(type,value){
     if(value !=""){
       this.countries = [];
      this.http.get("https://restcountries.eu/rest/v1/" + type + "/" + value)
               .subscribe(res=>{
                 res.json();
                 for(var i=0;i<res.json().length;i++){
                   var country :Country = new CountryBuilder(res.json()[i].name)
                                       .setCapital(res.json()[i].capital)
                                       .setLanguage(res.json()[i].languages)
                                       .setPopulation(res.json()[i].population)
                                       .setRegion(res.json()[i].region)
                                       .setSubRegion(res.json()[i].subregion)
                                       .setTopLevelDomain(res.json()[i].topLevelDomain)
                                       .setCallingCodes(res.json()[i].callingCodes)
                                       .build();
                   
                   this.countries.push(country);                   
                 }
                 
                }
               // error=>console.log("error")
               );
   
      
  
    }
   // console.log(this.countries);
  }

  

  ngOnInit() {
  }

}
