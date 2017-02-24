import { Injectable } from '@angular/core';
import { SettingsComponent} from './settings/settings.component'

@Injectable()
export class SettingsService{
    private numberOfRecords : number;

    setNumberOfRecords(number){
        this.numberOfRecords=number;
    }

    getNumberOfRecords(){
        return this.numberOfRecords;
    }

}