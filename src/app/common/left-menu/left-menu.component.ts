import { Component, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.scss']
})
export class AppLeftMenuComponent {

    public leftNav: string = 'space';
    constructor() { }

    public leftNavClicked(param: string): void {
        this.leftNav = param;
    }
}
