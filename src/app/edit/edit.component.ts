import { Component, OnInit, Input } from '@angular/core';
import {ListComponent} from "../list/list.component";
import {Country} from '../model/country.model';

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
