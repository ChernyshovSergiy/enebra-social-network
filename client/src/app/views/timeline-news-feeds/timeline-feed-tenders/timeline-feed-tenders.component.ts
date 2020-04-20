import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-timeline-feed-tenders',
    templateUrl: './timeline-feed-tenders.component.html',
    styleUrls: ['./timeline-feed-tenders.component.scss'],
})
export class TimelineFeedTendersComponent implements OnInit {
    @Input()
    parentHref: string;
    constructor() {}

    ngOnInit(): void {
        console.log(this.parentHref);
    }
}
