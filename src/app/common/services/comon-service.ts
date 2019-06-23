import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ComonService {

  @Output()
  public leftMenuChange: EventEmitter<string> = new EventEmitter();
  constructor() {
  }

  public lefSideMenuSelected(menuName: string) {
    this.leftMenuChange.emit(menuName);
  }
}
