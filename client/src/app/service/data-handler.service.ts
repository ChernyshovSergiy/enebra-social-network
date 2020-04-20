import { Injectable } from '@angular/core';
import { Referens } from '../model/Reference';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Feed } from '../model/Feed';
import { TestData } from '../data/test-data';

@Injectable({
    providedIn: 'root',
})
export class DataHandlerService {
    feedSubject = new BehaviorSubject<Feed[]>(TestData.feeds);
    constructor(private http: HttpClient) {}

    getReferences(lang: string): Observable<Referens> {
        return this.http.get<Referens>('/api/v1/referens/' + lang);
    }
}
