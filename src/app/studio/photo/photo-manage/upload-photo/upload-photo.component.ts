import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'uploadphoto',
    templateUrl: './upload-photo.component.html',
    styleUrls: ['./upload-photo.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UploadPhotoComponent {
    public screenHeight: string;
    constructor() {
        this.screenHeight = localStorage.getItem('windowHeight');
    }
}
