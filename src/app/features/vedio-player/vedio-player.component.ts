import { Component, ViewEncapsulation, ViewChild, ElementRef, Input } from "@angular/core";
import { AudioFiles, VedioFiles } from "../media-file";

@Component({
    selector: 'video-player',
    templateUrl: './vedio-player.component.html',
    styleUrls: ['./vedio-player.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class VedioPlayerComponent {
    @ViewChild('videoElement', { static: false })
    public videoElement: ElementRef;
    public video: HTMLVideoElement;

    public currentTime: number = 0;
    public maxDuration: number = 0;
    public minDuration: number = 0;
    public isPlayed: boolean = false;
    public lapsTime: string;
    public isMoreControl: boolean = false;
    public videoSrc = '..//..//..//assets/video/';
    // public W: Wave;
    public canvHeight = 275;
    public fileDetails: any = {};
    public isNextAvailable: boolean = false;
    public isPreviousAvailable: boolean = false;
    public isMute: boolean = false;
    public volumeRange: number = 1;
    public maxVolume: number = 10;
    public minVolume: number = 0;
    @Input()
    public hideShowControl: boolean = false;

    constructor() {
    }

    ngAfterViewInit() {
        // this.video = this.videoElement.nativeElement;
        // this.video.src = '..//..//..//assets/video/SampleVideo_1280x720_1mb.mp4';
        this.initAudio(VedioFiles[0]);
    }

    private initAudio(src: any) {

        this.fileDetails.trackId = src.trackId;
        this.fileDetails.url = src.url;
        this.fileDetails.mediaTitle = src.mediaTitle;
        this.fileDetails.poster = src.poster;

        let index = VedioFiles.findIndex(x => x.trackId === this.fileDetails.trackId);
        //set next song available to be play
        if ((index + 1) < (VedioFiles.length)) {
            this.isNextAvailable = true;
        } else {
            this.isNextAvailable = false;
        }
        //set previous song available to be play
        if ((index - 1) >= 0) {
            this.isPreviousAvailable = true;
        } else {
            this.isPreviousAvailable = false;
        }
        this.video = this.videoElement.nativeElement;
        // this.video = new HTMLVideoElement();
        this.video.id = 'video';
        this.video.src = this.videoSrc + this.fileDetails.url;
        this.video.addEventListener('timeupdate', this.getLapsTime.bind(this));
        this.video.addEventListener('mouseenter', this.mouseenter);
        this.video.addEventListener('mouseleave', this.mouseleave);
    }

    public mouseenter = () => {
        this.hideShowControl = true;
    }
    public mouseleave = () => {
        if (this.isPlayed) {
            this.hideShowControl = false;
        }
    }

    public getLapsTime(event) {
        this.currentTime = event.target.currentTime;
        let sec = event.target.currentTime;

        let h = Math.floor(sec / 3600);
        sec = sec % 3600;

        let min = Math.floor(sec / 60).toString();
        sec = Math.floor(sec % 60).toString();

        if (sec.toString().length < 2) { sec = "0" + sec };
        if (min.toString().length < 2) { min = "0" + min };

        this.lapsTime = h + ":" + min + ":" + sec;
        if (this.video.duration === this.currentTime) {
            this.onStop();
        }
    }

    public onStop() {
        this.video.pause();
        this.video.currentTime = 0;
        this.isPlayed = false;
    }
    public onMoreControl() {
        if (this.isMoreControl) {
            this.isMoreControl = false;
        } else {
            this.isMoreControl = true;
        }
    }
    public onPlay() {
        this.video.play();
        this.maxDuration = this.video.duration;
        this.isPlayed = true;
    }
    public onPause() {
        this.isPlayed = false;
        this.video.pause();
    }

    public onPrevious() {
        let index = AudioFiles.findIndex(x => x.trackId === this.fileDetails.trackId);
        if (this.isPreviousAvailable) {
            let songToBePlay = AudioFiles[(index - 1)];
            this.onStop();
            this.initAudio(songToBePlay);
            this.onPlay();
        }
    }
    public onNext() {
        let index = AudioFiles.findIndex(x => x.trackId === this.fileDetails.trackId);
        if (this.isNextAvailable) {
            let songToBePlay = AudioFiles[(index + 1)];
            this.onStop();
            this.initAudio(songToBePlay);
            this.onPlay();
        }
    }
    public onSkip(evnt) {
        this.video.currentTime = evnt.currentTarget.valueAsNumber;
        this.maxDuration = this.video.duration;
    }
    public onForward() {
        this.video.currentTime += 2;
    }

    public onRewind() {
        this.video.currentTime -= 2;
    }

    public onVolume() {
        if (this.isMute) {
            this.isMute = false;
            this.video.volume = this.volumeRange;
        } else {
            this.isMute = true;
            this.video.volume = 0;
        }
    }

    public onVolumeRaise(event) {
        this.video.volume = event.currentTarget.valueAsNumber / 10;
        this.volumeRange = this.video.volume;
        if (this.volumeRange === 0) {
            this.isMute = true;
        } else {
            this.isMute = false;
        }
    }
}