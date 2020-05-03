import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-timeline-feed-votes',
    templateUrl: './timeline-feed-votes.component.html',
    styleUrls: ['./timeline-feed-votes.component.scss'],
})
export class TimelineFeedVotesComponent implements OnInit {
    @Input()
    parentHref: string;
    menu: boolean;
    window: boolean;
    constructor() {
        this.menu = false;
        this.window = false;
    }

    ngOnInit(): void {}

    showMenu() {
        this.menu = !this.menu;
        if (this.window) {
            this.window = !this.window;
        }
    }
    toggleTargetDialog() {
        this.window = !this.window;
        if (this.menu) {
            this.menu = !this.menu;
        }
    }
}
