import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'allmedia',
    templateUrl: './all-media.component.html',
    styleUrls: ['./all-media.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AllMediaComponent {
    public screenHeight: string;
    constructor() {
        this.screenHeight = localStorage.getItem('windowHeight');
    }
}
