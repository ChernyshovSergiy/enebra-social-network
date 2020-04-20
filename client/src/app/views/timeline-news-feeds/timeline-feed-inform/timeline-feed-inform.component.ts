import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-timeline-feed-inform',
    templateUrl: './timeline-feed-inform.component.html',
    styleUrls: ['./timeline-feed-inform.component.scss'],
})
export class TimelineFeedInformComponent implements OnInit {
    @Input()
    parentHref: string;
    constructor() {}

    ngOnInit(): void {}
}
