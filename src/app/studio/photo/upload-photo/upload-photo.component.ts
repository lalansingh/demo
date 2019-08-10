import { Component, ViewEncapsulation, HostListener, Inject, ElementRef, ViewChild, Input } from '@angular/core';
import { ComonService } from 'src/app/common/services/comon-service';

@Component({
    selector: 'upload-photo',
    templateUrl: './upload-photo.component.html',
    styleUrls: ['./upload-photo.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UploadPhotoComponent {

    @ViewChild('fileEvent', { static: false })
    private fileEvent: ElementRef;
    private urls = [];
    private lastPhoto: any = null;
    private color = '3597ec';
    @Input()
    private checked = false;
    private disabled = false;
    public screenHeight: string;
    constructor(private comonService: ComonService) {
        this.screenHeight = localStorage.getItem('windowHeight');
    }

    public addMore() {
        this.fileEvent.nativeElement.click();
    }

    public onSelectFile(event) {
        this.fileUpload(event.target.files);
        // if (event.target.files && event.target.files[0]) {
        //     var filesAmount = event.target.files.length;
        //     for (let i = 0; i < filesAmount; i++) {
        //         var reader = new FileReader();

        //         reader.onload = (event: any) => {
        //             let url = {};
        //             url['id'] = i;
        //             url['file'] = event.target.result;
        //             this.urls.push(url);
        //             this.setLastPhoto();
        //         }
        //         reader.readAsDataURL(event.target.files[i]);
        //     }
        // }
    }

    private fileUpload(files: any) {
        if (files && files[0]) {
            var filesAmount = files.length;
            for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event: any) => {
                    let url = {};
                    url['id'] = i;
                    url['file'] = event.target.result;
                    this.urls.push(url);
                    this.setLastPhoto();
                }
                reader.readAsDataURL(files[i]);
            }
        }
    }

    public onRemoveFile(index: any) {
        let i = this.urls.findIndex(x => x.id === index);
        this.urls.splice(i, 1);
        this.setLastPhoto();
    }
    private setLastPhoto() {
        if (this.urls.length !== 0) {
            this.lastPhoto = this.urls[this.urls.length - 1].file;
        } else {
            this.lastPhoto = null;
        }
        this.setPhotoUploadFlag();
    }
    public removePreviewPhoto() {
        this.lastPhoto = null;
    }
    public onClickPhoto(index: any) {
        let i = this.urls.findIndex(x => x.id === index);
        this.lastPhoto = this.urls[i].file;
    }
    public uploadFile(file: any) {
        this.fileUpload(file);
    }
    private setPhotoUploadFlag() {
        this.comonService.uploaded(this.urls.length === 0 ? false : true);
    }
}
