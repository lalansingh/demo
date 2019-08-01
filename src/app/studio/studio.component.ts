import { Component, ViewEncapsulation, HostListener, Inject } from '@angular/core';
import { ComonService } from '../common/services/comon-service';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'studio',
    templateUrl: './studio.component.html',
    styleUrls: ['./studio.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StudioComponent {
    constructor(private comonService: ComonService, @Inject(DOCUMENT) private document: Document) {
        this.getScreenSize();
        this.comonService.lefSideMenuSelected('studio');
    }

    @HostListener('window:resize', ['$event'])
    public getScreenSize(event?) {
        // this.screenWidth = window.innerWidth;
        this.comonService.setWindowHeight(this.document.documentElement.scrollHeight);
    }
}
