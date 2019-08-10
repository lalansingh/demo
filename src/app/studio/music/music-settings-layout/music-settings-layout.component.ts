import { Component, ViewEncapsulation } from '@angular/core';
import { ComonService } from 'src/app/common/services/comon-service';

@Component({
    selector: 'music-settings-layout',
    templateUrl: './music-settings-layout.component.html',
    styleUrls: ['./music-settings-layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MusicSettingsLayoutComponent {
    public isPhotoUploaded: boolean = false;
    constructor(private comonService: ComonService) {
        this.comonService.photoUploaded.subscribe(res => {
            this.isPhotoUploaded = res;
        });
    }
}
