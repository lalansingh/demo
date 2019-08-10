import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'podcast-setting',
    templateUrl: './podcast-setting.component.html',
    styleUrls: ['./podcast-setting.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PodcastSettingComponent {
    public screenHeight: string;
    constructor() {
        this.screenHeight = localStorage.getItem('windowHeight');
    }
}
