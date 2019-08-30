import { Component, ViewEncapsulation } from "@angular/core";
import { ComonService } from "src/app/common/services/comon-service";
import { mediaFile } from "src/app/features/media-file";

@Component({
    selector: 'music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MusicComponent {

    public audioSrc = '..//..//..//assets/music/';
    public audioPosterSrc = '../../../assets/music/poster/';

    public constructor(private comonService: ComonService) {
    }

    public onMusicSelected() {
        let mediaTrackList2: mediaFile[] = [{
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
            duration: '2:09',
            autoPlay: true
        }];
        this.comonService.videoUploaded([]);
        this.comonService.mediaPlay('music');
        this.comonService.musicUploaded(mediaTrackList2);
    }
}

