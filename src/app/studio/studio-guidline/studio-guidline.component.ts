import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'studio-guidline',
    templateUrl: './studio-guidline.component.html',
    styleUrls: ['./studio-guidline.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StudioGuidlineComponent {
    public screenHeight: string;
    constructor() {
        this.screenHeight = localStorage.getItem('windowHeight');
    }
}
