import { Component } from "@angular/core";
import { ComonService } from "../common/services/comon-service";


@Component({
    selector: 'verification',
    templateUrl: './verification.component.html',
    styleUrls: ['./verification.component.scss']
})
export class VerificationComponent {
    constructor(private comonService: ComonService) {
        this.comonService.lefSideMenuSelected('space');
    }
}