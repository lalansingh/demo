import { Component } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { MediaModel } from '../card-model';

@Component({
    selector: 'card-third',
    templateUrl: './card-third.component.html',
    styleUrls: ['./card-third.component.css']
})
export class CardThirdComponent {
    public srcData: any = [];
    public srcModel: any = [];
    public constructor() {
        this.srcModel = MediaModel;
        Object.assign(this.srcData, this.srcModel);
    }

    public close(index: number) {
        // let i = this.srcData.findIndex(x => x.key === index);
        this.srcData.splice(index, 1);
    }

    public AllEventClicked(): void {
        Object.assign(this.srcData, this.srcModel);
    }
    public VideoEventClicked(): void {
        this.loadMedia('video');
    }
    public MusicEventClicked(): void {
        this.loadMedia('music');
    }
    public PostcastsEventClicked(): void {
        this.loadMedia('postcasts');
    }

    private loadMedia(type: string): void {
        let res = this.srcModel.filter(x => { return x.mediaType === type });
        this.srcData = [];
        Object.assign(this.srcData, res);
    }
}