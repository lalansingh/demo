import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'video-setting',
    templateUrl: './video-setting.component.html',
    styleUrls: ['./video-setting.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class VideoSettingComponent {
    public screenHeight: string;
    constructor() {
        this.screenHeight = localStorage.getItem('windowHeight');
    }
}
