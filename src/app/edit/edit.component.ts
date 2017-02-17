import { Component, OnInit } from '@angular/core';
import {FilterComponent} from '../filter/filter.component'
import {Input} from '@angular/core'
import {Country} from '../model/country.model'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  directives: [FilterComponent]
})
export class EditComponent implements OnInit {
  @Input country : Country;
  constructor() { }
  


  displayCountry(){
    
    
  }


  ngOnInit() {
  }

}
