import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'music-setting',
    templateUrl: './music-setting.component.html',
    styleUrls: ['./music-setting.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MusicSettingComponent {
    public screenHeight: string;
    constructor() {
        this.screenHeight = localStorage.getItem('windowHeight');
    }
}
