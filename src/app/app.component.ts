import { Component,Input } from '@angular/core';
import {Country} from './model/country.model'
import {FilterComponent} from './filter/filter.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Fun with countries!';
 
  showList(){
    document.getElementById("listCountries").style.display="block";
    document.getElementById("listRedirect").style.display="none";
  }
 


}

