import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { DataHandlerService } from './service/data-handler.service';
import { LangMenu } from './model/LangMenu';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'client';
    langs: LangMenu[];
    constructor(public auth: AuthenticationService, private dataHandler: DataHandlerService) {}

    ngOnInit(): void {
        // this.dataHandler.langsSubject.subscribe((langs: LangMenu[]) => (this.langs = langs));
        this.langs = this.dataHandler.getActiveLanguage();
        console.log(this.langs);
    }
}
