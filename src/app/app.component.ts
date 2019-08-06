import { Component, ViewEncapsulation, HostListener, Inject } from '@angular/core';
import { ComonService } from './common/services/comon-service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public screenHeight: number;
  constructor(private comonService: ComonService, @Inject(DOCUMENT) private document: Document) {
    this.comonService.getWindowHeight.subscribe(height => {
      this.screenHeight = height;
      localStorage.setItem('windowHeight', height);
    });
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  public getScreenSize(event?) {
    // this.screenWidth = window.innerWidth;
    this.comonService.setWindowHeight(this.document.documentElement.scrollHeight);
  }
  ngOnDestroy(): void {
  }
}
