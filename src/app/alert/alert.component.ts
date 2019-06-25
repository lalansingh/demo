import { Component } from "@angular/core";
import { ComonService } from "../common/services/comon-service";


@Component({
    selector: 'alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
    constructor(private comonService: ComonService) {
        this.comonService.lefSideMenuSelected('space');
    }
}