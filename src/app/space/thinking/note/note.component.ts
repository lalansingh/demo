import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { ComonService } from 'src/app/common/services/comon-service';

@Component({
    selector: 'note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NoteComponent implements OnInit {

    @Input() calledfrom: string;

    constructor(private comonService: ComonService) {
    }

    ngOnInit() {
        let nav = this.calledfrom || 'note';
        this.comonService.thinkingMenuSelected(nav);
    }
}
