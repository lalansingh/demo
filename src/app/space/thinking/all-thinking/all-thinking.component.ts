import { Component, ViewEncapsulation } from '@angular/core';
import { ComonService } from 'src/app/common/services/comon-service';

@Component({
    selector: 'all-thinking',
    templateUrl: './all-thinking.component.html',
    styleUrls: ['./all-thinking.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AllThinkingComponent {
    constructor(private comonService: ComonService) {
        this.comonService.thinkingMenuSelected('allthinking');
    }
}
