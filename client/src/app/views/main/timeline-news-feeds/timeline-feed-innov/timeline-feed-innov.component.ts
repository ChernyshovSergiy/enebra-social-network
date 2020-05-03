import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-timeline-feed-innov',
    templateUrl: './timeline-feed-innov.component.html',
    styleUrls: ['./timeline-feed-innov.component.scss'],
})
export class TimelineFeedInnovComponent implements OnInit {
    @Input()
    parentHref: string;
    menu: boolean;
    constructor() {
        this.menu = false;
    }

    ngOnInit(): void {}

    showMenu() {
        this.menu = !this.menu;
    }
}
