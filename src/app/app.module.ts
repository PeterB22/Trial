import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { MaterialModule } from '@angular/material';
import { RouterModule,Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component'
import { CountryService } from './country.service';


const appRoutes :Routes = [
  {path:'list',component:ListComponent},
  {path:'edit',component:EditComponent},
  {path:'settings',component:SettingsComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers:[CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
