import { Component,Input } from '@angular/core';
import {Country} from './model/country.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Fun with countries!';
 
  hideWelcome():void{
    document.getElementById("welcome").style.display="none";
  }
 

  showWelcome():void{
    document.getElementById("welcome").style.display="block";
  }

}

