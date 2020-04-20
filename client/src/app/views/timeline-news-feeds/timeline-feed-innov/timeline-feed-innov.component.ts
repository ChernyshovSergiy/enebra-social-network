import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-timeline-feed-innov',
    templateUrl: './timeline-feed-innov.component.html',
    styleUrls: ['./timeline-feed-innov.component.scss'],
})
export class TimelineFeedInnovComponent implements OnInit {
    @Input()
    parentHref: string;
    constructor() {}

    ngOnInit(): void {
        console.log(this.parentHref);
    }
}
