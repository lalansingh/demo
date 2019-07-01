import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ComonService } from '../../services/comon-service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'thinking-menu',
    templateUrl: './thinking-menu.component.html',
    styleUrls: ['./thinking-menu.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ThinkingMenuComponent {
    public thinkingNav: string;
    public isMultiComponentLoading: boolean = false;
    constructor(private comonService: ComonService, private route: ActivatedRoute) {
        this.comonService.thinkingMenuChange.subscribe(menuName => {
            this.thinkingNav = 'allthinking';
            if (menuName !== 'allthinking') {
                setTimeout(() => {
                    this.thinkingNav = menuName;
                }, 100);
            }
        });
    }
    public onClickThingingMenu(menuName: string): void {
        this.thinkingNav = menuName;
    }
}