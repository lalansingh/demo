import { Component, ViewEncapsulation, HostListener, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProfileComponent {
    public screenHeight: string;
    public profileNav: string = '';
    constructor(private router: Router, private route: ActivatedRoute) {
        this.screenHeight = localStorage.getItem('windowHeight');
    }
    public navigate() {
        this.router.navigate([{ outlets: { mediaRouter: ['photo'], mediasettings: ['photo-settings'] } }],
            { relativeTo: this.route, skipLocationChange: true });
    }

    public profileNavClicked(param: string): void {
        this.profileNav = param;
    }
}
