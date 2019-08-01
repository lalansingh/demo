import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginFirstComponent {
    constructor(private router: Router) {

    }
    public onVerify(): void {
        this.router.navigate(['/space/verification']);
    }
}