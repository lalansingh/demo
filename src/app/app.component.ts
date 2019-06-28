import { Component, ViewEncapsulation } from '@angular/core';
import { ComonService } from './common/services/comon-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public screenHeight: number;
  constructor(private comonService: ComonService) {
    this.comonService.getWindowHeight.subscribe(height => {
      this.screenHeight = height;
    });
  }
  ngOnDestroy(): void {
  }
}
