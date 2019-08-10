import { Component, ViewEncapsulation } from '@angular/core';
import { ComonService } from 'src/app/common/services/comon-service';

@Component({
    selector: 'image-settings-layout',
    templateUrl: './image-settings-layout.component.html',
    styleUrls: ['./image-settings-layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ImageSettingsLayoutComponent {
    public isPhotoUploaded: boolean = false;
    constructor(private comonService: ComonService) {
        this.comonService.photoUploaded.subscribe(res => {
            this.isPhotoUploaded = res;
        });
    }
}
