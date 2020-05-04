import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { AuthenticationService } from './service/authentication.service';
import { DataHandlerService } from './service/data-handler.service';
import { LangMenu } from './model/LangMenu';
import { Subscription } from 'rxjs/';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'client';
    langs: LangMenu[];
    mediaSub: Subscription;
    deviceXs: boolean;
    constructor(
        public auth: AuthenticationService,
        private dataHandler: DataHandlerService,
        public mediaObserver: MediaObserver,
    ) {}

    ngOnInit(): void {
        this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
        });
        // this.dataHandler.langsSubject.subscribe((langs: LangMenu[]) => (this.langs = langs));
        this.langs = this.dataHandler.getActiveLanguage();
        console.log(this.langs);
    }

    ngOnDestroy(): void {
        this.mediaSub.unsubscribe();
    }
}
