import { Component, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { ComonService } from '../services/comon-service';

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.scss']
})
export class AppLeftMenuComponent {

    public leftNav: string = 'space';
    constructor(private comonService: ComonService) {
        this.comonService.leftMenuChange.subscribe(menuName => {
            this.leftNav = menuName;
        });
    }

    public leftNavClicked(param: string): void {
        this.leftNav = param;
    }
}
