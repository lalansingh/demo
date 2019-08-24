import { Component, ViewEncapsulation, HostListener, Inject, ElementRef, ViewChild, Input } from '@angular/core';
import { ComonService } from 'src/app/common/services/comon-service';

@Component({
    selector: 'upload-video',
    templateUrl: './upload-video.component.html',
    styleUrls: ['./upload-video.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UploadVideoComponent {

    @ViewChild('fileEvent', { static: false })
    private fileEvent: ElementRef;
    private mediaFileList = [];
    private lastVideo: any = null;
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
                    mediaTrackList['src'] = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';//event.target.result;
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
            this.lastVideo = this.mediaFileList[this.mediaFileList.length - 1].file;
        } else {
            this.lastVideo = null;
        }
        this.setLayoutFlag();
        this.comonService.videoUploaded(this.mediaFileList);
    }


    private setLayoutFlag() {
        this.comonService.setLayout(this.mediaFileList.length === 0 ? false : true);
    }
}
