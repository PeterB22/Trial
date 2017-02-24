import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
  value:number;
  
  constructor() {

   }
 

  onSliderChange(value){
    window.localStorage.setItem("numOfRecords",value);
    this.value=value;
  }

  ngOnInit() {
    if(window.localStorage.getItem("numOfRecords") == null){
      this.value=10;
      window.localStorage.setItem("numOfRecords",this.value.toString());
    }
    else{
      this.value=parseInt(window.localStorage.getItem("numOfRecords"));
    }
    document.getElementById("welcome").style.display="none";
  }

}
