import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'allmedia',
    templateUrl: './all-media.component.html',
    styleUrls: ['./all-media.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AllMediaComponent {
    public screenHeight: string;
    @Input()
    public topMenuSelected: string;
    @Input()
    public middleMenuSelected: string;
    @Input()
    public bottomMenuSelected: string;

    constructor() {
        this.screenHeight = localStorage.getItem('windowHeight');
    }
}
