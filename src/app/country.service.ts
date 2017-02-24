import {Injectable} from '@angular/core';
import {Country} from './model/country.model';

@Injectable()
export class CountryService{
   private country:Country;

   saveData(data){
       this.country=data;
   }

   getData(){
       return this.country;
   }
}