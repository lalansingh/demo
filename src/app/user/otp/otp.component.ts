import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'otp',
    templateUrl: './otp.component.html',
    styleUrls: ['./otp.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class OtpComponent {
    constructor(private router: Router) {

    }
    public onSubmit(): void {
        this.router.navigate(['/space', { veryfied: true }]);
    }
}