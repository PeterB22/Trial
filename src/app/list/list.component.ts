import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {Country} from '../model/country.model'
import {CountryBuilder} from '../model/country.model'
import {Http} from '@angular/http'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
  formAttributes:string[];
  filledElements:number;
  countries:Country[];
  selectedCountry : Country;
  @Output('country') outGoingData = new EventEmitter<Country>();

  constructor(private http:Http){
  }


 getDataByValue():void {
      this.formAttributes = this.getFormValues().split(",");
      this.filledElements=parseInt(this.formAttributes[0]);
      console.log(this.formAttributes[2]);
     if(this.filledElements == 1 && this.formAttributes[1] != "" && this.formAttributes[2]!=""){ 
       this.countries = [];
       this.http.get("https://restcountries.eu/rest/v1/" + this.formAttributes[1] + "/" + this.formAttributes[2])
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
     
      
      document.getElementById("countries").style.display='block';
    }
    else
      document.getElementById("countries").style.display='none';
   // console.log(this.countries);
  }

  

  getFormValues():string{
    let numOfFilledElements=0;
    let name="",value="";
    let formElements = document.forms['filterCountries'].elements;
    for(let i=0;i<formElements.length;i++){
      if(formElements.item(i).value != ""){
        numOfFilledElements++;
        value=formElements.item(i).value;
        name=formElements.item(i).name;
      }
    }

    return numOfFilledElements+","+ name + "," + value;
  }


  editCountry(country : Country):void {
     this.selectedCountry = country;
     console.log(country);
     this.outGoingData.emit(country);
    // document.getElementById('editCountry').style.display='block';
     document.getElementById('filterCountries').style.display='none';
     document.getElementById('countries').style.display='none';
  }

 

  ngOnInit() {
  }

}
