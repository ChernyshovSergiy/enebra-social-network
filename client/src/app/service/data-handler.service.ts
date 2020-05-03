import { Injectable } from '@angular/core';
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
    langsSubject = new Subject<LangMenu[]>();
    feedSubject = new BehaviorSubject<Feed[]>(TestData.feeds);
    constructor(private http: HttpClient) {}

    getReferences(lang: string): Observable<Referens> {
        return this.http.get<Referens>('/api/v1/referens/' + lang);
    }
    fillActiveLanguage() {
        const langs = TestData.langs.filter((lang: LangMenu) => lang.active === true);
        this.langsSubject.next(langs);
    }
    getActiveLanguage(): LangMenu[] {
        return TestData.langs.filter((lang: LangMenu) => lang.active === true);
    }
    getMessages(): Message[] {
        return TestData.messages;
    }
}
