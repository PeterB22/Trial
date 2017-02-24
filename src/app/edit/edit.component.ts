import { Component, OnInit, Input } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { Country } from '../model/country.model';
import { CountryService } from '../country.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  
})
export class EditComponent implements OnInit{
   country : Country;

  constructor(private countryService : CountryService,private location : Location) { 
  }
  
  goBack():void{
    this.location.back();
  }


  ngOnInit():void {
   document.getElementById("welcome").style.display="none";
   this.country = this.countryService.getData();

}
