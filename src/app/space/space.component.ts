import { Component, HostListener, Inject } from "@angular/core";
import { ComonService } from "../common/services/comon-service";
import { DOCUMENT } from "@angular/common";

@Component({
    selector: 'space',
    templateUrl: './space.component.html',
    styleUrls: ['./space.component.scss']
})
export class SpaceComponent {
    public screenHeight: string;
    constructor(private comonService: ComonService, @Inject(DOCUMENT) private document: Document) {
        // this.getScreenSize();
        this.comonService.lefSideMenuSelected('space');
        this.screenHeight = localStorage.getItem('windowHeight');
    }

    // @HostListener('window:resize', ['$event'])
    // public getScreenSize(event?) {
    //     // this.screenWidth = window.innerWidth;
    //     this.comonService.setWindowHeight(this.document.documentElement.scrollHeight);
    // }
}