import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ComonService {

  @Output()
  public leftMenuChange: EventEmitter<string> = new EventEmitter();
  @Output()
  public getWindowHeight: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  public lefSideMenuSelected(menuName: string) {
    this.leftMenuChange.emit(menuName);
  }

  public setWindowHeight(height: number) {
    this.getWindowHeight.emit(height);
  }
}
