import { Component, ViewEncapsulation, HostListener, Inject, ElementRef, ViewChild, Input } from '@angular/core';
import { ComonService } from 'src/app/common/services/comon-service';
import { mediaFile } from 'src/app/features/media-file';

@Component({
    selector: 'upload-video',
    templateUrl: './upload-video.component.html',
    styleUrls: ['./upload-video.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UploadVideoComponent {

    @ViewChild('fileEvent', { static: false })
    private fileEvent: ElementRef;

    @ViewChild('videoElement', { static: false })
    public videoElement: ElementRef;
    public singleVideo: HTMLVideoElement;

    @ViewChild('videoSection', { static: false })
    public videoSection: ElementRef;

    public currentTime: number = 0;
    public progressBarTime: number = 0;
    public lapsTime: string;
    public bufferBarWidth: number = 0;
    public isPlayed: boolean = false;
    public isfullScreen: boolean = false;
    public hideShowControl: boolean = false;
    public maxDuration: number = 100;
    public minDuration: number = 0;
    public selectedTrackId: any;
    public totalDuration: string = '00:00'

    private mediaFileList = [];
    private lastVideo: any = null;
    private color = '3597ec';
    @Input()
    private checked = false;
    private disabled = false;
    public screenHeight: string;
    public videoHeight: string;
    public videoWidth: string = '700px';

    public sheet = document.createElement('style');
    public prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

    constructor(private comonService: ComonService) {
        this.screenHeight = localStorage.getItem('windowHeight');
        document.body.appendChild(this.sheet);
    }

    // public rangeBarChange(el: any) {
    //     let curVal = el.target.value;
    //     let val = curVal;
    //     let style = '';

    //     for (var i = 0; i < this.prefs.length; i++) {
    //         style += '.range {background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%,rgb(196, 196, 196) ' + val + '%, rgb(196, 196, 196) 100%)}';
    //         style += '.range input::-' + this.prefs[i] + '{background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
    //     }
    //     this.sheet.textContent = style;
    // }

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

        if (h > 0) {
            return h + ":" + min + ":" + sec;
        } else {
            return min + ":" + sec;
        }
    }
    private fileUpload(files: any) {
        let fileCount: number = 0;
        if (files && files[0]) {
            for (let i = 0; i < files.length; i++) {
                var reader = new FileReader();

                reader.onload = (event: any) => {
                    let videoTmp = this.videoElement.nativeElement;
                    videoTmp.src = event.target.result;
                    setTimeout(() => {
                        let duration = this.getTotalDuration(videoTmp.duration);
                        videoTmp.pause();
                        videoTmp.currentTime = 0;
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
                            this.loadVideo();
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
        this.onStop();
        this.loadVideo();
    }
    private loadVideo() {
        if (this.mediaFileList.length === 0) {
            this.initVideo('');
        } else {
            this.initVideo(this.mediaFileList[0].src)
        }
        this.comonService.setLayout(this.mediaFileList.length === 0 ? false : true);
    }

    public playSelectedSong(index: any) {
        if (index === this.selectedTrackId) {
            if (this.isPlayed) {
                this.onPause();
            } else {
                this.onPlay();
            }
        } else {
            this.onStop();
            let i = this.mediaFileList.findIndex(x => x.trackId === index);
            this.initVideo(this.mediaFileList[i].src);
            this.onPlay();
            this.selectedTrackId = index;
        }
    }

    public onPlay() {
        this.singleVideo.play();
        this.maxDuration = this.singleVideo.duration;
        this.isPlayed = true;
        this.totalDuration = this.getTotalDuration(this.singleVideo.duration);
    }
    public onPause() {
        this.isPlayed = false;
        this.singleVideo.pause();
    }

    public onStop() {
        this.singleVideo.pause();
        this.singleVideo.currentTime = 0;
        this.isPlayed = false;
    }
    public onSkip(evnt) {
        this.singleVideo.currentTime = evnt.value; // evnt.currentTarget.valueAsNumber;
        this.maxDuration = this.singleVideo.duration;
    }

    private initVideo(src: any) {
        this.singleVideo = this.videoElement.nativeElement;
        this.singleVideo.src = src;
        this.singleVideo.addEventListener('timeupdate', this.getLapsTime.bind(this));
        this.singleVideo.addEventListener('canplaythrough', this.startBuffer);
        this.videoSection.nativeElement.addEventListener('mouseenter', this.mouseenter);
        this.videoSection.nativeElement.addEventListener('mouseleave', this.mouseleave);

    }
    public mouseenter = () => {
        this.hideShowControl = true;
    }
    public mouseleave = () => {
        if (this.isPlayed) {
            this.hideShowControl = false;
        }
    }

    public onClickVideo() {
        if (this.isfullScreen) {
            if (this.hideShowControl) {
                this.mouseleave();
            } else {
                this.mouseenter();
            }
        }
    }
    public startBuffer = () => {
        var currentBuffer = this.singleVideo.buffered.end(0);
        var maxduration = this.singleVideo.duration;
        var perc = 100 * currentBuffer / maxduration;
        this.bufferBarWidth = perc;
        if (this.singleVideo.buffered.length === 0) return;
        if (currentBuffer < maxduration) {
            setTimeout(this.startBuffer, 500);
        }
    };
    public getLapsTime(event) {
        this.currentTime = event.target.currentTime;
        let sec = event.target.currentTime;

        this.progressBarTime = this.currentTime / this.singleVideo.duration * 100;

        let h = Math.floor(sec / 3600);
        sec = sec % 3600;

        let min = Math.floor(sec / 60).toString();
        sec = Math.floor(sec % 60).toString();

        if (sec.toString().length < 2) { sec = "0" + sec };
        if (min.toString().length < 2) { min = "0" + min };
        if (h > 0) {
            this.lapsTime = h + ":" + min + ":" + sec;
        } else {
            this.lapsTime = min + ":" + sec;
        }

        if (this.singleVideo.duration === this.currentTime) {
            this.onStop();
        }
    }
}
