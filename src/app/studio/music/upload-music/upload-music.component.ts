import { Component, ViewEncapsulation, HostListener, Inject, ElementRef, ViewChild, Input } from '@angular/core';
import { ComonService } from 'src/app/common/services/comon-service';
import { mediaFile } from 'src/app/features/media-file';

@Component({
    selector: 'upload-music',
    templateUrl: './upload-music.component.html',
    styleUrls: ['./upload-music.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UploadMusicComponent {

    @ViewChild('fileEvent', { static: false })
    private fileEvent: ElementRef;
    private mediaFileList: mediaFile[] = [];
    private lastMusic: any = null;
    private color = '3597ec';
    public showFileList: boolean = false;
    @Input()
    private checked = false;
    private disabled = false;
    public screenHeight: string;
    public totalFile: number;
    public likeIcon: boolean = false;

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

    private getTotalDuration(sec: any): string {
        let h = Math.floor(sec / 3600);
        sec = sec % 3600;

        let min = Math.floor(sec / 60).toString();
        sec = Math.floor(sec % 60).toString();

        if (sec.toString().length < 2) { sec = "0" + sec };
        if (min.toString().length < 2) { min = "0" + min };

        return h + ":" + min + ":" + sec;
    }

    private fileUpload(files: any) {
        let fileCount: number = 0;
        if (files && files[0]) {
            this.totalFile = files.length;
            for (let i = 0; i < this.totalFile; i++) {
                var reader = new FileReader();

                reader.onload = (event: any) => {
                    let advAudio = new Audio(event.target.result);
                    setTimeout(() => {
                        let duration = this.getTotalDuration(advAudio.duration);
                        advAudio.pause();
                        advAudio.currentTime = 0;
                        let mediaTrackList: mediaFile = {
                            trackId: i,
                            mediaType: 'audio',
                            mediaTitle: 'Symphony 3 - Postrol',
                            mediaSubTitle: 'Track 01',
                            description: 'Baron Gottfried van Swieten',
                            src: event.target.result,
                            posterSrc: '',
                            posterTitle: '',
                            time: '35 min',
                            publish: '1 Aug, 2019',
                            duration: duration
                        }

                        this.mediaFileList.push(mediaTrackList);
                        --fileCount;
                        if (fileCount === 0) {
                            this.setLastMusic();
                        }
                    }, 100);
                }

                reader.readAsDataURL(files[i]);
                fileCount++;
            }
        }
    }

    public onRemoveFile(index: any) {
        if (index !== null && index !== undefined) {
            let i = this.mediaFileList.findIndex(x => x.trackId === index);
            this.mediaFileList.splice(i, 1);
        } else {
            for (let i = 0; i < this.mediaFileList.length;) {
                this.mediaFileList.splice(i, 1);
            }
        }
        this.setLastMusic();
    }
    private setLastMusic() {
        if (this.mediaFileList.length !== 0) {
            this.lastMusic = this.mediaFileList[this.mediaFileList.length - 1].src;
        } else {
            this.lastMusic = null;
        }
        this.setPhotoUploadFlag();
        this.comonService.musicUploaded(this.mediaFileList);
    }

    private setPhotoUploadFlag() {
        this.comonService.uploaded(this.mediaFileList.length === 0 ? false : true);
    }

    public playSelectedSong(index: any) {
        let i = this.mediaFileList.findIndex(x => x.trackId === index);
        let selectedSong: any[] = [];
        selectedSong.push(this.mediaFileList[i]);
        this.comonService.musicUploaded(selectedSong);
    }
}
