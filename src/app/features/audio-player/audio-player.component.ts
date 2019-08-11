import { Component, ViewEncapsulation, Input, Output, EventEmitter } from "@angular/core";
import { Wave } from "../wave";
import { AudioFiles, VisualizerModel } from "../media-file";
import { ComonService } from "src/app/common/services/comon-service";

@Component({
    selector: 'audio-player',
    templateUrl: './audio-player.component.html',
    styleUrls: ['./audio-player.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AudioPlayerComponent {
    public advAudio: any;
    public currentTime: number = 0;
    public maxDuration: number = 0;
    public minDuration: number = 0;
    public isPlayed: boolean = false;
    public lapsTime: string;
    public isMoreControl: boolean = false;
    public audioSrc = '..//..//..//assets/music/';
    // public W: Wave;
    public canvas: any;
    public canvHeight = 247;
    public canvWidth = 700;
    public fileDetails: any = {};
    public isNextAvailable: boolean = false;
    public isPreviousAvailable: boolean = false;
    public isMute: boolean = false;
    public volumeRange: number = 1;
    public maxVolume: number = 10;
    public minVolume: number = 0;
    public audioFileList: any = [];

    constructor(private waveService: Wave, private comonService: ComonService) {
        this.comonService.musicSrc.subscribe(mediaFileList => {
            this.audioFileList = mediaFileList;
            if (mediaFileList.length !== 0) {
                this.initAudio(mediaFileList[0]);
            } else {
                this.onStop();
            }
        });
    }

    private initAudio(currentTrack: any) {

        this.fileDetails.trackId = currentTrack.trackId;
        this.fileDetails.url = currentTrack.src;
        this.fileDetails.mediaTitle = currentTrack.mediaTitle;
        this.fileDetails.posterSrc = currentTrack.posterSrc;

        let index = this.audioFileList.findIndex(x => x.trackId === this.fileDetails.trackId);
        //set next song available to be play
        if ((index + 1) < (this.audioFileList.length)) {
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

        this.advAudio = new Audio();
        this.advAudio.id = 'audio';
        this.advAudio.src = this.fileDetails.url; //this.audioSrc + this.fileDetails.url;
        this.advAudio.addEventListener('timeupdate', this.getLapsTime.bind(this));
        this.waveService = new Wave();
        this.waveService.fromElement(this.advAudio, "wave", VisualizerModel.dualbars_blocks);
    }

    ngAfterViewInit() {
        // this.waveService.fromElement(this.advAudio, "wave", VisualizerModel.bars);
    }
    public onMoreControl() {
        if (this.isMoreControl) {
            this.isMoreControl = false;
        } else {
            this.isMoreControl = true;
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
        if (this.advAudio.duration === this.currentTime) {
            this.onStop();
        }
    }

    public onPrevious() {
        let index = this.audioFileList.findIndex(x => x.trackId === this.fileDetails.trackId);
        if (this.isPreviousAvailable) {
            let songToBePlay = this.audioFileList[(index - 1)];
            this.onStop();
            this.initAudio(songToBePlay);
            this.onPlay();
        }
    }
    public onNext() {
        let index = this.audioFileList.findIndex(x => x.trackId === this.fileDetails.trackId);
        if (this.isNextAvailable) {
            let songToBePlay = this.audioFileList[(index + 1)];
            this.onStop();
            this.initAudio(songToBePlay);
            this.onPlay();
        }
    }
    public onPlay() {
        this.advAudio.play();
        this.maxDuration = this.advAudio.duration;
        this.isPlayed = true;
    }
    public onPause() {
        this.isPlayed = false;
        this.advAudio.pause();
    }
    public onStop() {
        this.advAudio.pause();
        this.advAudio.currentTime = 0;
        this.isPlayed = false;
    }
    public onSkip(evnt) {
        this.advAudio.currentTime = evnt.currentTarget.valueAsNumber;
        this.maxDuration = this.advAudio.duration;
    }
    public onForward() {
        this.advAudio.currentTime += 2;
    }

    public onRewind() {
        this.advAudio.currentTime -= 2;
    }

    public onVolume() {
        if (this.isMute) {
            this.isMute = false;
            this.advAudio.volume = this.volumeRange;
        } else {
            this.isMute = true;
            this.advAudio.volume = 0;
        }
    }

    public onVolumeRaise(event) {
        this.advAudio.volume = event.currentTarget.valueAsNumber / 10;
        this.volumeRange = this.advAudio.volume;
        if (this.volumeRange === 0) {
            this.isMute = true;
        } else {
            this.isMute = false;
        }
    }
}
