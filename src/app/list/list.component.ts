import { Component, OnInit } from '@angular/core';
import { Country } from '../model/country.model'
import { CountryBuilder } from '../model/country.model'
import { Http } from '@angular/http';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
  formAttributes:string[];
  filledElements:number;
  selectValue:string = "";
  countries:Country[];
  selectedCountry : Country;
  
  constructor(private http:Http,private countryService:CountryService){

  }


   getDataByValue():void {
 
      this.formAttributes = this.getInputValues().split(",");
      this.filledElements=parseInt(this.formAttributes[0]);
   
      if(this.selectValue != ""){
          this.filledElements++;
          this.formAttributes[1]="region";
          this.formAttributes[2]=this.selectValue;
      }

  
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
                    );
         
          
           document.getElementById("countries").style.display='block';
      }
      else
           document.getElementById("countries").style.display='none';
     
  }

  getSelectValue(value):void {
    this.selectValue=value;
    this.getDataByValue();
  }

  getInputValues():string {
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
     this.countryService.saveData(country);
     console.log(this.countryService.getData());
  }

 

  ngOnInit() {
    document.getElementById("welcome").style.display="none";
  }

}
