import { Component, ViewEncapsulation, ViewChild, ElementRef, Input, HostListener } from "@angular/core";
import { ComonService } from "src/app/common/services/comon-service";

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

    @ViewChild('videoSection', { static: false })
    public videoSection: ElementRef;

    @ViewChild('progressCircle', { static: false })
    public progressCircle: ElementRef;

    @ViewChild('progressSlider', { static: false })
    public progressSlider: ElementRef;
    public progressBarTime: number = 0;

    public currentTime: number = 0;
    public maxDuration: number = 0;
    public minDuration: number = 0;
    public isPlayed: boolean = false;
    public lapsTime: string;
    public isMoreControl: boolean = false;
    public videoSrc = '..//..//..//assets/video/';
    // public W: Wave;
    public fileDetails: any = {};
    public isNextAvailable: boolean = false;
    public isPreviousAvailable: boolean = false;
    public isMute: boolean = false;
    public volumeRange: number = 1;
    public maxVolume: number = 10;
    public minVolume: number = 0;
    public videoFileList: any = [];
    public videoHeight: string = null;
    public videoWidth: string = '700px';
    public isfullScreen: boolean = false;
    @Input()
    public hideShowControl: boolean = false;
    public bufferBarWidth: number = 0;
    public activeSpeed: string = '1x';
    public progressBar: number = 0;

    constructor(private comonService: ComonService) {

    }

    ngAfterViewInit() {
        // this.progressCircle.nativeElement.draggable({
        //     containment: 'parent'
        // });
        this.comonService.videoSrc.subscribe(videoFileList => {
            this.videoFileList = videoFileList;
            if (videoFileList.length !== 0) {
                this.initAudio(videoFileList[0]);
                // this.startBuffer();
            } else {
                this.clearPlayer();
            }
        });
    }

    private initAudio(currentTrack: any) {
        this.progressBar = 0;
        this.fileDetails.trackId = currentTrack.trackId;
        this.fileDetails.url = currentTrack.src;
        this.fileDetails.mediaTitle = currentTrack.mediaTitle;
        this.fileDetails.posterSrc = currentTrack.posterSrc;

        let index = this.videoFileList.findIndex(x => x.trackId === this.fileDetails.trackId);
        //set next song available to be play
        if ((index + 1) < (this.videoFileList.length)) {
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
        this.video.src = this.fileDetails.url;
        this.video.addEventListener('timeupdate', this.getLapsTime.bind(this));
        // this.video.addEventListener('loadedmetadata', this.startBuffer);
        this.video.addEventListener('canplaythrough', this.startBuffer);
        // this.video.addEventListener('fullscreenchange', this.onExitScap, false);
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

    public getLapsTime(event) {
        this.currentTime = event.target.currentTime;
        let sec = event.target.currentTime;

        this.progressBarTime = this.currentTime / this.video.duration * 100;

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
    public clearPlayer() {
        this.video = this.videoElement.nativeElement;
        this.isPlayed = false;
    }

    public onStop() {
        this.video.pause();
        this.video.currentTime = 0;
        this.isPlayed = false;
        this.progressBar = 0;
    }
    public onMoreControl() {
        if (this.isMoreControl) {
            this.isMoreControl = false;
        } else {
            this.isMoreControl = true;
        }
    }
    public onPlay() {
        this.progressBar = 1;
        this.video.play();
        this.maxDuration = this.video.duration;
        this.isPlayed = true;
        setTimeout(() => { this.hideShowControl = false; }, 2000);
    }
    public onPause() {
        this.isPlayed = false;
        this.video.pause();
    }

    public onPrevious() {
        let index = this.videoFileList.findIndex(x => x.trackId === this.fileDetails.trackId);
        if (this.isPreviousAvailable) {
            let songToBePlay = this.videoFileList[(index - 1)];
            this.onStop();
            this.initAudio(songToBePlay);
            this.onPlay();
        }
    }
    public onNext() {
        let index = this.videoFileList.findIndex(x => x.trackId === this.fileDetails.trackId);
        if (this.isNextAvailable) {
            let songToBePlay = this.videoFileList[(index + 1)];
            this.onStop();
            this.initAudio(songToBePlay);
            this.onPlay();
        }
    }
    public onSkip(evnt) {
        this.video.currentTime = evnt.currentTarget.valueAsNumber;
        this.maxDuration = this.video.duration;
    }
    public setProgress(e) {
        const newTime = e.offsetX / this.progressSlider.nativeElement.offsetWidth;
        this.video.currentTime = newTime * this.video.duration;
        this.progressBarTime = newTime * 100;
    }
    public startBuffer = () => {
        var currentBuffer = this.video.buffered.end(0);
        var maxduration = this.video.duration;
        var perc = 100 * currentBuffer / maxduration;
        this.bufferBarWidth = perc;

        // if (currentBuffer < maxduration) {
        //     setTimeout(this.startBuffer, 500);
        // }
        if (this.video.buffered.length === 0) return;

        // this.bufferBarWidth = this.video.buffered.end(0) - this.video.buffered.start(0);
        if (currentBuffer < maxduration) {
            setTimeout(this.startBuffer, 500);
        }
    };
    public onForward() {
        this.video.currentTime += 2;
    }
    public setSpeed(sp: any, active: string) {
        this.video.playbackRate = sp;
        this.activeSpeed = active;
    }

    public toggleFullscreen() {
        this.isfullScreen ? this.exitFullScreen() : this.launchFullScreen()
        // this.isfullScreen = !this.isfullScreen;
    }

    public launchFullScreen() {
        this.videoWidth = '100%';
        this.videoHeight = '100%';
        this.videoSection.nativeElement.requestFullscreen();
        // if (this.videoSection.nativeElement.requestFullscreen) {
        //     this.videoSection.nativeElement.requestFullscreen();
        // } else if (this.videoSection.nativeElement.mozRequestFullScreen) {
        //     this.videoSection.nativeElement.mozRequestFullScreen();
        // } else if (this.videoSection.nativeElement.webkitRequestFullscreen) {
        //     this.videoSection.nativeElement.webkitRequestFullscreen();
        // } else if (this.videoSection.nativeElement.msRequestFullscreen) {
        //     this.videoSection.nativeElement.msRequestFullscreen();
        // }
    }
    @HostListener('fullscreenchange', ['$event'])
    public onExitScap = () => {
        // this.videoSection.nativeElement.webkitExitFullscreen();
        this.isfullScreen = !this.isfullScreen;
        if (!this.isfullScreen) {
            this.videoWidth = '700px';
            this.videoHeight = '';
        }
    }
    public exitFullScreen() {
        this.videoWidth = '700px';
        this.videoHeight = '';
        document.exitFullscreen();
        // if(document.exitFullscreen) {
        //     document.exitFullscreen();
        //   } else if(document.mozCancelFullScreen) {
        //     document.mozCancelFullScreen();
        //   } else if(document.webkitExitFullscreen) {
        //     document.webkitExitFullscreen();
        //   }
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
