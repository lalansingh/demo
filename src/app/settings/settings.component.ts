import { Component } from '@angular/core';
import { ComonService } from '../common/services/comon-service';

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
    constructor(private comonService: ComonService) {
        this.comonService.lefSideMenuSelected('settings');
    }
}