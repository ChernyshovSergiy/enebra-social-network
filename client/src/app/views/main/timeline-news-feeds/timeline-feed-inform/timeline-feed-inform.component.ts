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
