import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ComonService {

  @Output()
  public leftMenuChange: EventEmitter<string> = new EventEmitter();
  @Output()
  public thinkingMenuChange: EventEmitter<string> = new EventEmitter();
  @Output()
  public getWindowHeight: EventEmitter<number> = new EventEmitter();
  @Output()
  public changeLayout: EventEmitter<boolean> = new EventEmitter();
  @Output()
  public musicSrc: EventEmitter<any> = new EventEmitter();
  @Output()
  public videoSrc: EventEmitter<any> = new EventEmitter();
  @Output()
  public singleAudio: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  public lefSideMenuSelected(menuName: string) {
    this.leftMenuChange.emit(menuName);
  }
  public thinkingMenuSelected(menuName: string) {
    this.thinkingMenuChange.emit(menuName);
  }

  public setWindowHeight(height: number) {
    this.getWindowHeight.emit(height);
  }
  public setLayout(isUploaded: boolean) {
    this.changeLayout.emit(isUploaded);
  }

  public musicUploaded(src: any) {
    this.musicSrc.emit(src);
  }

  public singleAudioPlay(src: any) {
    this.singleAudio.emit(src);
  }
  public videoUploaded(src: any) {
    this.videoSrc.emit(src);
  }
}
