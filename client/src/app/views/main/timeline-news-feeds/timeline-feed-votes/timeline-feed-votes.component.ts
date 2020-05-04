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
    }

    showDialog() {
        this.window = !this.window;
    }

    ClickedOutsideMenu() {
        if (this.menu) {
            this.menu = false;
        }
    }
    ClickedOutsideWindow() {
        if (this.window) {
            this.window = false;
        }
    }

    closeDialog() {
        if (this.window) {
            this.window = false;
        }
    }
}
