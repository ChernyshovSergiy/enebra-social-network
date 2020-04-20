import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-timeline-feed-votes',
    templateUrl: './timeline-feed-votes.component.html',
    styleUrls: ['./timeline-feed-votes.component.scss'],
})
export class TimelineFeedVotesComponent implements OnInit {
    @Input()
    parentHref: string;
    constructor() {}

    ngOnInit(): void {}
}
