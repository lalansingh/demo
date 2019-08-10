import { Component, ViewEncapsulation, HostListener, Inject, ElementRef, ViewChild, Input } from '@angular/core';
import { ComonService } from 'src/app/common/services/comon-service';

@Component({
    selector: 'upload-music',
    templateUrl: './upload-music.component.html',
    styleUrls: ['./upload-music.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UploadMusicComponent {

    @ViewChild('fileEvent', { static: false })
    private fileEvent: ElementRef;
    private urls = [];
    private lastMusic: any = null;
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
                    this.setLastMusic();
                }
                reader.readAsDataURL(files[i]);
            }
        }
    }

    public onRemoveFile(index: any) {
        let i = this.urls.findIndex(x => x.id === index);
        this.urls.splice(i, 1);
        this.setLastMusic();
    }
    private setLastMusic() {
        if (this.urls.length !== 0) {
            this.lastMusic = this.urls[this.urls.length - 1].file;
        } else {
            this.lastMusic = null;
        }
        this.setPhotoUploadFlag();
        let model = {
            trackId: 0,
            mediaType: '',
            url: '',
            mediaTitle: '',
            poster: '',
            title: '',
            description: ''
        };
        model.url = this.urls[0].file;
        this.comonService.musicUploaded(model);
    }

    public uploadFile(file: any) {
        this.fileUpload(file);
    }
    private setPhotoUploadFlag() {
        this.comonService.uploaded(this.urls.length === 0 ? false : true);
    }
}
