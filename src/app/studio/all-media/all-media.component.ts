import { Component, ViewEncapsulation, Input } from '@angular/core';
import { mediaFile } from 'src/app/features/media-file';
import { ComonService } from 'src/app/common/services/comon-service';

@Component({
    selector: 'allmedia',
    templateUrl: './all-media.component.html',
    styleUrls: ['./all-media.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AllMediaComponent {
    public screenHeight: string;
    @Input()
    public topMenuSelected: string;
    @Input()
    public middleMenuSelected: string;
    @Input()
    public bottomMenuSelected: string;
    public showFileList: boolean = true;
    private mediaFileList: mediaFile[] = [];
    public audioSrc = '..//..//..//assets/music/';

    constructor(private comonService: ComonService) {
        this.screenHeight = localStorage.getItem('windowHeight');
    }

    public ngAfterViewInit() {
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
            posterSrc: '',
            posterTitle: '',
            time: '35 min',
            publish: '1 Aug, 2019',
            duration: duration
        }
        this.mediaFileList.push(mediaTrackList);

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
            posterSrc: '',
            posterTitle: '',
            time: '35 min',
            publish: '1 Aug, 2019',
            duration: duration1
        }
        this.mediaFileList.push(mediaTrackList1);

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
            posterSrc: '',
            posterTitle: '',
            time: '35 min',
            publish: '1 Aug, 2019',
            duration: duration2
        }
        this.mediaFileList.push(mediaTrackList2);

        this.comonService.musicUploaded(this.mediaFileList);
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
}
