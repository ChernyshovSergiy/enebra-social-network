import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { Referens } from '../model/Reference';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Feed } from '../model/Feed';
import { TestData } from '../data/test-data';
import { LangMenu } from '../model/LangMenu';
import { Message } from '../model/Message';

@Injectable({
    providedIn: 'root',
})
export class DataHandlerService {
    langStart = 'ru';
    currentLangSubject = new BehaviorSubject<string>(this.langStart);
    feedSubject = new BehaviorSubject<Feed[]>(TestData.feeds);
    msgSubject = new BehaviorSubject<Message[]>(TestData.messages);

    constructor(@Inject(LOCALE_ID) public locale: string, private http: HttpClient) {
        // this.currentLangSubject.next(locale.split('-')[0]);
        this.currentLangSubject.next(this.langStart);
        // console.log();
    }

    getReferences(): Referens[] {
        return TestData.referens.sort((ref) => ref.sortNum);
    }
    fillCurrentLanguage(lang) {
        // console.log('Current Lang: ', lang);
        this.currentLangSubject.next(lang);
    }
    getActiveLanguage(): LangMenu[] {
        return TestData.langs.filter((lang: LangMenu) => lang.active === true);
    }
}
