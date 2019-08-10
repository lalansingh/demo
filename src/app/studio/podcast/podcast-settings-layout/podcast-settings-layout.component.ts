import { Component, ViewEncapsulation } from '@angular/core';
import { ComonService } from 'src/app/common/services/comon-service';

@Component({
    selector: 'podcast-settings-layout',
    templateUrl: './podcast-settings-layout.component.html',
    styleUrls: ['./podcast-settings-layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PodcastSettingsLayoutComponent {
    public isPhotoUploaded: boolean = false;
    constructor(private comonService: ComonService) {
        this.comonService.photoUploaded.subscribe(res => {
            this.isPhotoUploaded = res;
        });
    }
}
