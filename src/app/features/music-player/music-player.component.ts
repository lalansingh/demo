import { Wave } from "../wave";
import { ComonService } from "src/app/common/services/comon-service";
import { Component, ViewEncapsulation, Input } from "@angular/core";
import { VisualizerModel, mediaFile } from "../media-file";
import { Sort } from "@angular/material/sort";

@Component({
    selector: 'music-player',
    templateUrl: './music-player.component.html',
    styleUrls: ['./music-player.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MusicPlayerComponent {
    public advAudio: any;
    public currentTime: number = 0;
    public maxDuration: number = 0;
    public minDuration: number = 0;
    public isPlayed: boolean = false;
    public lapsTime: string = '0:00:00';
    public isMoreControl: boolean = false;
    public audioSrc = '..//..//..//assets/music/';
    @Input()
    public showFileList: boolean = false;
    @Input()
    public likeIcon: boolean = true;
    // public W: Wave;
    public canvas: any;
    public canvHeight = 100;
    public canvWidth = 100;
    public fileDetails: any = {};
    public isNextAvailable: boolean = false;
    public isPreviousAvailable: boolean = false;
    public isMute: boolean = false;
    public volumeRange: number = 1;
    public maxVolume: number = 10;
    public minVolume: number = 0;
    // public audioFileList: any = [];
    public totalDuration: string = '0:00:00';
    public activeSpeed: string = '1x';

    public mediaList: mediaFile[] = [];
    public sortedMediaList: mediaFile[];
    public isSongInitialized: boolean = false;
    public activeRow: any;

    constructor(private waveService: Wave, private comonService: ComonService) {
        this.comonService.musicSrc.subscribe(mediaFileList => {
            this.mediaList = mediaFileList;
            this.sortedMediaList = this.mediaList.slice();
            if (mediaFileList.length !== 0) {
                // this.initAudio(mediaFileList[0]);
                // this.songSelected(mediaFileList[0]);
                this.songLoad(mediaFileList[0]);
            } else {
                this.onStop();
            }
        });
        // let mediaTrackList = {};
        // mediaTrackList['trackId'] = 0;
        // mediaTrackList['src'] = this.audioSrc + 'file_example_MP3_700KB.mp3';
        // mediaTrackList['mediaTitle'] = '';
        // mediaTrackList['posterSrc'] = 'mp3poster3.jpeg';
        // mediaTrackList['posterTitle'] = '';
        // mediaTrackList['description'] = '';
        // this.audioFileList.push(mediaTrackList);

       

        // this.mediaList = [
        //     {
        //         trackId: 0,
        //         mediaType: 'audio',
        //         mediaTitle: 'Symphony 1 - Postrol',
        //         mediaSubTitle: 'Baron Gottfried van Swieten',
        //         description: '',
        //         src: this.audioSrc + 'file_example_MP3_700KB.mp3',
        //         posterSrc: 'mp3poster3.jpeg',
        //         posterTitle: '',
        //         time: '35 min',
        //         publish: '1 Aug, 2019'
        //     },
        //     {
        //         trackId: 1,
        //         mediaType: 'audio',
        //         mediaTitle: 'Symphony 2 - Postrol',
        //         mediaSubTitle: 'Baron Gottfried van Swieten',
        //         description: '',
        //         src: this.audioSrc + 'SampleAudio_0.4mb.mp3',
        //         posterSrc: '',
        //         posterTitle: '',
        //         time: '35 min',
        //         publish: '1 Aug, 2019'
        //     },
        //     {
        //         trackId: 2,
        //         mediaType: 'audio',
        //         mediaTitle: 'Symphony 3 - Postrol',
        //         mediaSubTitle: 'Track 01',
        //         description: 'Baron Gottfried van Swieten',
        //         src: this.audioSrc + 'SampleAudio_0.7mb.mp3',
        //         posterSrc: '',
        //         posterTitle: '',
        //         time: '35 min',
        //         publish: '1 Aug, 2019'
        //     }
        // ];
        // this.sortedMediaList = this.mediaList.slice();
    }


    private initAudio(currentTrack: any) {

        this.fileDetails.trackId = currentTrack.trackId;
        this.fileDetails.url = currentTrack.src;
        this.fileDetails.mediaTitle = currentTrack.mediaTitle;
        this.fileDetails.mediaSubTitle = currentTrack.mediaSubTitle;
        this.fileDetails.description = currentTrack.description;
        this.fileDetails.posterSrc = currentTrack.posterSrc;

        let index = this.mediaList.findIndex(x => x.trackId === this.fileDetails.trackId);
        //set next song available to be play
        if ((index + 1) < (this.mediaList.length)) {
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
        this.initAudio({});
        // this.waveService.fromElement(this.advAudio, "wave", VisualizerModel.bars);
    }

    // public onRemoveFile(index: any) {
    //     let i = this.mediaList.findIndex(x => x.trackId === index);
    //     this.mediaList.splice(i, 1);
    // }

    public songSelected(songToBePlay: mediaFile) {
        this.onStop();
        this.initAudio(songToBePlay);
        this.onPlay();
        this.isSongInitialized = true;
        this.activeRow = songToBePlay.trackId;
    }

    public songLoad(songToBePlay: mediaFile) {
        this.onStop();
        this.initAudio(songToBePlay);
        this.isSongInitialized = true;
        this.activeRow = songToBePlay.trackId;
    }

    public sortMediaData(sort: Sort) {
        const data = this.mediaList.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedMediaList = data;
            return;
        }

        this.sortedMediaList = data.sort((a: any, b: any) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'title': return this.compare(a.mediaTitle, b.mediaTitle, isAsc);
                case 'time': return this.compare(a.time, b.time, isAsc);
                case 'publish': return this.compare(a.publish, b.publish, isAsc);
                default: return 0;
            }
        });
    }
    private compare(a: number | string, b: number | string, isAsc: boolean) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    public setSpeed(sp: any, active: string) {
        this.advAudio.playbackRate = sp;
        this.activeSpeed = active;
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
        let index = this.mediaList.findIndex(x => x.trackId === this.fileDetails.trackId);
        if (this.isPreviousAvailable) {
            let songToBePlay = this.mediaList[(index - 1)];
            this.onStop();
            this.initAudio(songToBePlay);
            this.onPlay();
        }
    }
    public onNext() {
        let index = this.mediaList.findIndex(x => x.trackId === this.fileDetails.trackId);
        if (this.isNextAvailable) {
            let songToBePlay = this.mediaList[(index + 1)];
            this.onStop();
            this.initAudio(songToBePlay);
            this.onPlay();
        }
    }
    public onPlay() {
        this.advAudio.play();
        this.isPlayed = true;
        setTimeout(() => {
            this.maxDuration = this.advAudio.duration;
            this.getTotalDuration(this.advAudio.duration);
        }, 100);
    }
    private getTotalDuration(sec: any) {
        let h = Math.floor(sec / 3600);
        sec = sec % 3600;

        let min = Math.floor(sec / 60).toString();
        sec = Math.floor(sec % 60).toString();

        if (sec.toString().length < 2) { sec = "0" + sec };
        if (min.toString().length < 2) { min = "0" + min };

        this.totalDuration = h + ":" + min + ":" + sec;
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
