import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'photo-setting',
    templateUrl: './photo-setting.component.html',
    styleUrls: ['./photo-setting.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PhotoSettingComponent {
    public screenHeight: string;
    constructor() {
        this.screenHeight = localStorage.getItem('windowHeight');
    }
}
