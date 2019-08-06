import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'homestudio',
    templateUrl: './studio-home.component.html',
    styleUrls: ['./studio-home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StudioHomeComponent {
    public screenHeight: string;
    constructor() {
        this.screenHeight = localStorage.getItem('windowHeight');
    }
}
