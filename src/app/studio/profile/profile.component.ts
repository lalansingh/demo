import { Component, ViewEncapsulation, HostListener, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProfileComponent {
    constructor(private router: Router, private route: ActivatedRoute) {
    }
    public navigate() {
        this.router.navigate([{ outlets: { mediaRouter: ['photos'], mediasettings: ['photo-manage'] } }],
            { relativeTo: this.route, skipLocationChange: true });
    }
}
