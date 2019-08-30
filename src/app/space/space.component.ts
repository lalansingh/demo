import { Component, HostListener, Inject } from "@angular/core";
import { ComonService } from "../common/services/comon-service";
import { DOCUMENT } from "@angular/common";
import { mediaFile } from "../features/media-file";

@Component({
    selector: 'space',
    templateUrl: './space.component.html',
    styleUrls: ['./space.component.scss']
})
export class SpaceComponent {
    public screenHeight: string;
    public showFileList: boolean = true;
    private audioFileList: mediaFile[] = [];
    private videoFileList: mediaFile[] = [];
    public audioSrc = '..//..//..//assets/music/';
    public audioPosterSrc = '../../../assets/music/poster/';
    public videoSrc = '..//..//..//assets/video/';
    public videoPosterSrc = '../../../assets/video/poster/';
    public videoWidth: string = '597px';
    public videoHeight: string = '335px';
    public mediaTypePlaying: string = '';

    constructor(private comonService: ComonService, @Inject(DOCUMENT) private document: Document) {
        // this.getScreenSize();
        this.comonService.lefSideMenuSelected('space');
        this.screenHeight = localStorage.getItem('windowHeight');

        this.comonService.mediaTypePlayed.subscribe(type => {
            this.mediaTypePlaying = type;
        });
    }

    // @HostListener('window:resize', ['$event'])
    // public getScreenSize(event?) {
    //     // this.screenWidth = window.innerWidth;
    //     this.comonService.setWindowHeight(this.document.documentElement.scrollHeight);
    // }
    public ngAfterViewInit() {
        this.initAudio();
        this.initVideo();
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

    public initVideo() {
        let videoTrackList: mediaFile = {
            trackId: 0,
            mediaType: 'video',
            mediaTitle: 'Symphony 3 - Postrol',
            mediaSubTitle: 'Track 01',
            description: 'Baron Gottfried van Swieten',
            src: this.videoSrc + 'SampleVideo_1280x720_1mb.mp4',
            posterSrc: this.videoPosterSrc + 'test1.JPG',
            posterTitle: '',
            time: '35 min',
            publish: '1 Aug, 2019',
            duration: '12',
            autoPlay: false
        }
        this.videoFileList.push(videoTrackList);

        let videoTrackList1: mediaFile = {
            trackId: 1,
            mediaType: 'video',
            mediaTitle: 'Symphony 4 - Postrol',
            mediaSubTitle: 'Track 02',
            description: 'Baron Gottfried van Swieten',
            src: this.videoSrc + 'SampleVideo_1280x720_1mb.mp4',
            posterSrc: '',
            posterTitle: '',
            time: '35 min',
            publish: '1 Aug, 2019',
            duration: '12',
            autoPlay: false
        }
        this.videoFileList.push(videoTrackList1);
        let videoTrackList2: mediaFile = {
            trackId: 2,
            mediaType: 'video',
            mediaTitle: 'Symphony 5 - Postrol',
            mediaSubTitle: 'Track 03',
            description: 'Baron Gottfried van Swieten',
            src: this.videoSrc + 'SampleVideo_1280x720_1mb.mp4',
            posterSrc: '',
            posterTitle: '',
            time: '35 min',
            publish: '1 Aug, 2019',
            duration: '12',
            autoPlay: false
        }
        this.videoFileList.push(videoTrackList2);

        this.comonService.videoUploaded(this.videoFileList);
    }
    public initAudio() {
        let advAudio = new Audio(this.audioSrc + 'file_example_MP3_700KB.mp3');
        let duration = this.getTotalDuration(advAudio.duration);
        advAudio.pause();
        advAudio.currentTime = 0;

        let mediaTrackList: mediaFile = {
            trackId: 0,
            mediaType: 'audio',
            mediaTitle: 'Symphony 3 - Postrol',
            mediaSubTitle: 'Track 01',
            description: 'Baron Gottfried van Swieten',
            src: this.audioSrc + 'file_example_MP3_700KB.mp3',
            posterSrc: this.audioPosterSrc + 'mp3poster1.jpg',
            posterTitle: '',
            time: '35 min',
            publish: '1 Aug, 2019',
            duration: duration,
            autoPlay: false
        }
        this.audioFileList.push(mediaTrackList);

        let advAudio1 = new Audio(this.audioSrc + 'SampleAudio_0.4mb.mp3');
        let duration1 = this.getTotalDuration(advAudio1.duration);
        advAudio1.pause();
        advAudio1.currentTime = 0;

        let mediaTrackList1: mediaFile = {
            trackId: 1,
            mediaType: 'audio',
            mediaTitle: 'Symphony 3 - Postrol',
            mediaSubTitle: 'Track 01',
            description: 'Baron Gottfried van Swieten',
            src: this.audioSrc + 'SampleAudio_0.4mb.mp3',
            posterSrc: this.audioPosterSrc + 'mp3poster3.jpeg',
            posterTitle: '',
            time: '35 min',
            publish: '1 Aug, 2019',
            duration: duration1,
            autoPlay: false
        }
        this.audioFileList.push(mediaTrackList1);

        let advAudio2 = new Audio(this.audioSrc + 'SampleAudio_0.7mb.mp3');
        let duration2 = this.getTotalDuration(advAudio2.duration);
        advAudio2.pause();
        advAudio2.currentTime = 0;

        let mediaTrackList2: mediaFile = {
            trackId: 2,
            mediaType: 'audio',
            mediaTitle: 'Symphony 3 - Postrol',
            mediaSubTitle: 'Track 01',
            description: 'Baron Gottfried van Swieten',
            src: this.audioSrc + 'SampleAudio_0.7mb.mp3',
            posterSrc: this.audioPosterSrc + 'mp3poster2.jpeg',
            posterTitle: '',
            time: '35 min',
            publish: '1 Aug, 2019',
            duration: duration2,
            autoPlay: false
        }
        this.audioFileList.push(mediaTrackList2);

        this.comonService.musicUploaded(this.audioFileList);
    }
}