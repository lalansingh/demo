import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'story',
    templateUrl: './story.component.html',
    styleUrls: ['./story.component.scss']
})
export class StoryComponent {
    public isVeryfied: boolean = false;
    constructor(private route: ActivatedRoute) {
        let veryfied = this.route.snapshot.paramMap.get('veryfied');
        if (veryfied) {
            this.isVeryfied = true;
        }

    }
}