import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-timeline-feed-inform',
    templateUrl: './timeline-feed-inform.component.html',
    styleUrls: ['./timeline-feed-inform.component.scss'],
})
export class TimelineFeedInformComponent implements OnInit {
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
