import { Component, ViewEncapsulation, HostListener, Inject } from '@angular/core';
import { ComonService } from '../common/services/comon-service';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'studio',
    templateUrl: './studio.component.html',
    styleUrls: ['./studio.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StudioComponent {
    constructor(private comonService: ComonService, @Inject(DOCUMENT) private document: Document,
        private router: Router, private route: ActivatedRoute) {
        this.getScreenSize();
        this.comonService.lefSideMenuSelected('studio');
        this.router.navigate([{ outlets: { mediaRouter: ['studio-home'], mediasettings: ['studio-guidline'] } }],
            { relativeTo: this.route, skipLocationChange: true });
    }

    @HostListener('window:resize', ['$event'])
    public getScreenSize(event?) {
        // this.screenWidth = window.innerWidth;
        this.comonService.setWindowHeight(this.document.documentElement.scrollHeight);
    }
}
