import { Component, OnInit } from '@angular/core';
import { Feed } from '../../../model/Feed';
import { DataHandlerService } from '../../../service/data-handler.service';

@Component({
    selector: 'app-timeline-news-feeds',
    templateUrl: './timeline-news-feeds.component.html',
    styleUrls: ['./timeline-news-feeds.component.scss'],
})
export class TimelineNewsFeedsComponent implements OnInit {
    selectedFeed: string;
    constructor(private DataHandler: DataHandlerService) {}

    lang: string;
    feeds: Feed[];

    ngOnInit(): void {
        this.DataHandler.feedSubject.subscribe((feeds: Feed[]) => (this.feeds = feeds));
        this.DataHandler.currentLangSubject.subscribe((lang: string) => (this.lang = lang));
        this.selectedFeed = 'innov';
    }
    showSelectedFeed(feed: string): void {
        this.selectedFeed = feed;
    }
}
