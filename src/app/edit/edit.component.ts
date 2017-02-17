import { Component, OnInit } from '@angular/core';
import {FilterComponent} from '../filter/filter.component'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  inputs:['countries'],
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }
  


  displayCountry(){
    
    
  }


  ngOnInit() {
  }

}
