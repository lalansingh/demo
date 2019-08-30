import { Component, ViewEncapsulation } from "@angular/core";
import { ComonService } from "src/app/common/services/comon-service";
import { mediaFile } from "src/app/features/media-file";

@Component({
    selector: 'vedio',
    templateUrl: './vedio.component.html',
    styleUrls: ['./vedio.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class VedioComponent {
    public videoSrc = '..//..//..//assets/video/';
    public videoPosterSrc = '../../../assets/video/poster/';

    public constructor(private comonService: ComonService) {
    }
    public onVideoSelected() {
        let videoTrackList2: mediaFile[] = [{
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
            autoPlay: true
        }];
        this.comonService.musicUploaded([]);
        this.comonService.mediaPlay('video');
        this.comonService.videoUploaded(videoTrackList2);
    }
}