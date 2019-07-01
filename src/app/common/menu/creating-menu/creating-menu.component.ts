import { Component, Output, EventEmitter, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'creating-menu',
    templateUrl: './creating-menu.component.html',
    styleUrls: ['./creating-menu.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CreatingMenuComponent {
    @Output()
    public all: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    public music: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    public video: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    public postCasts: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    public pause: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    public play: EventEmitter<any> = new EventEmitter<any>();

    public constructor() {
    }
    public AllClicked(): void {
        this.all.emit();
    }
    public MusicClicked(): void {
        this.music.emit();
    }
    public VideoClicked(): void {
        this.video.emit();
    }
    public PostCastsClicked(): void {
        this.postCasts.emit();
    }
    public PauseClicked(): void {
        this.pause.emit();
    }
    public PlayClicked(): void {
        this.play.emit();
    }
}