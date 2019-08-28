import { Component, ViewEncapsulation, HostListener, Inject, ElementRef, ViewChild, Input } from '@angular/core';
import { ComonService } from 'src/app/common/services/comon-service';
import { Wave } from 'src/app/features/wave';
import { VisualizerModel, mediaFile } from 'src/app/features/media-file';

@Component({
    selector: 'upload-podcast',
    templateUrl: './upload-podcast.component.html',
    styleUrls: ['./upload-podcast.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UploadPodcastComponent {

    @ViewChild('fileEvent', { static: false })
    private fileEvent: ElementRef;
    private mediaFileList: mediaFile[] = [];
    private color = '3597ec';
    @Input()
    private checked = false;
    private disabled = false;
    public screenHeight: string;
    public likeIcon: boolean = false;
    public singleAudio: any;
    public currentTime: number = 0;
    public maxDuration: number = 0;
    public minDuration: number = 0;
    public isPlayed: boolean = false;
    public canvas: any;
    public canvHeight = 247;
    public canvWidth = 700;
    public selectedTrackId: any;

    constructor(private comonService: ComonService, private waveService: Wave) {
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
            for (let i = 0; i < files.length; i++) {
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
                            this.loadMusic();
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
        this.waveService.stopStream();
        this.onStop();
        this.loadMusic();
    }
    private loadMusic() {
        if (this.mediaFileList.length === 0) {
            this.initAudio('');
        } else {
            this.initAudio(this.mediaFileList[0].src)
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
            this.initAudio(this.mediaFileList[i].src);
            this.onPlay();
            this.selectedTrackId = index;
        }
    }

    public onPlay() {
        this.singleAudio.play();
        this.maxDuration = this.singleAudio.duration;
        this.isPlayed = true;
    }
    public onPause() {
        this.isPlayed = false;
        this.singleAudio.pause();
    }
    public clearSingleAudio() {
        this.singleAudio = new Audio();
        this.isPlayed = false;
    }
    public onStop() {
        this.singleAudio.pause();
        this.singleAudio.currentTime = 0;
        this.isPlayed = false;
    }

    private initAudio(src: any) {
        this.singleAudio = new Audio();
        this.singleAudio.id = 'audio';
        this.singleAudio.src = src;
        // this.singleAudio.addEventListener('timeupdate', this.getLapsTime.bind(this));
        this.waveService = new Wave();
        this.waveService.fromElement(this.singleAudio, "wave", VisualizerModel.dualbars_blocks);
    }
}
