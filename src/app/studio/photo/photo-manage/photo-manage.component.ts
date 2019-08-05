import { Component, ViewEncapsulation, HostListener, Inject } from '@angular/core';
import { ComonService } from 'src/app/common/services/comon-service';

@Component({
    selector: 'photomanage',
    templateUrl: './photo-manage.component.html',
    styleUrls: ['./photo-manage.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PhotoManageComponent {
    public isPhotoUploaded: boolean = false;
    constructor(private comonService: ComonService) {
        this.comonService.photoUploaded.subscribe(res => {
            this.isPhotoUploaded = res;
        });
    }
}
