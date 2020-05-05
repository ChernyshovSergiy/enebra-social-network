import { Component, OnInit, Output } from '@angular/core';
import { Feed } from '../../../model/Feed';
import { DataHandlerService } from '../../../service/data-handler.service';
import { AuthenticationService } from '../../../service/authentication.service';

@Component({
    selector: 'app-timeline-news-feeds',
    templateUrl: './timeline-news-feeds.component.html',
    styleUrls: ['./timeline-news-feeds.component.scss'],
})
export class TimelineNewsFeedsComponent implements OnInit {
    constructor(private DataHandler: DataHandlerService) {}

    lang: string;
    feeds: Feed[];
    selectedFeed: Feed;

    ngOnInit(): void {
        this.DataHandler.feedSubject.subscribe((feeds: Feed[]) => (this.feeds = feeds));
        this.DataHandler.currentLangSubject.subscribe((lang: string) => (this.lang = lang));
        this.selectedFeed = this.feeds[0];
    }
    showSelectedFeed(feed: Feed): void {
        this.selectedFeed = feed;
        // console.log(this.selectedFeed.href);
    }
}
