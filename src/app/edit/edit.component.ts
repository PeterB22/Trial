import { Component, OnInit, Input } from '@angular/core';
import {FilterComponent} from '../filter/filter.component'
import {Country} from '../model/country.model'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  
})
export class EditComponent implements OnInit {
  @Input() country : Country;
  constructor() { 
  
  }
  

  ngOnInit() {
  }

}
