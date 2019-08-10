import { Component, ViewEncapsulation } from '@angular/core';
import { ComonService } from 'src/app/common/services/comon-service';

@Component({
    selector: 'video-settings-layout',
    templateUrl: './video-settings-layout.component.html',
    styleUrls: ['./video-settings-layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class VideoSettingsLayoutComponent {
    public isPhotoUploaded: boolean = false;
    constructor(private comonService: ComonService) {
        this.comonService.photoUploaded.subscribe(res => {
            this.isPhotoUploaded = res;
        });
    }
}
