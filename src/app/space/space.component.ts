import { Component } from "@angular/core";
import { ComonService } from "../common/services/comon-service";

@Component({
    selector: 'space',
    templateUrl: './space.component.html',
    styleUrls: ['./space.component.css']
})
export class SpaceComponent {
    constructor(private comonService: ComonService) {
        this.comonService.lefSideMenuSelected('space');
    }
}