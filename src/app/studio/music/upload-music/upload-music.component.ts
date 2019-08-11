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
    private mediaFileList = [];
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
    public onFileDropped(file: any) {
        this.fileUpload(file);
    }
    public onSelectFile(event) {
        this.fileUpload(event.target.files);
    }

    private fileUpload(files: any) {
        let fileCount: number = 0;
        if (files && files[0]) {
            var filesAmount = files.length;
            for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event: any) => {
                    let mediaTrackList = {};
                    mediaTrackList['trackId'] = i;
                    mediaTrackList['src'] = event.target.result;
                    mediaTrackList['mediaTitle'] = '';
                    mediaTrackList['posterSrc'] = 'mp3poster3.jpeg';
                    mediaTrackList['posterTitle'] = '';
                    mediaTrackList['description'] = '';
                    this.mediaFileList.push(mediaTrackList);
                    --fileCount;
                    if (fileCount === 0) {
                        this.setLastMusic();
                    }
                }

                reader.readAsDataURL(files[i]);
                fileCount++;
            }
        }
    }

    public onRemoveFile(index: any) {
        let i = this.mediaFileList.findIndex(x => x.trackId === index);
        this.mediaFileList.splice(i, 1);
        this.setLastMusic();
    }
    private setLastMusic() {
        if (this.mediaFileList.length !== 0) {
            this.lastMusic = this.mediaFileList[this.mediaFileList.length - 1].file;
        } else {
            this.lastMusic = null;
        }
        this.setPhotoUploadFlag();
        this.comonService.musicUploaded(this.mediaFileList);
    }


    private setPhotoUploadFlag() {
        this.comonService.uploaded(this.mediaFileList.length === 0 ? false : true);
    }
}
