import { Injectable } from '@angular/core';
import { Referens } from '../model/Reference';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataHandlerService {
    constructor(private http: HttpClient) {}

    getReferences(lang: string): Observable<Referens> {
        return this.http.get<Referens>('/api/v1/referens/' + lang);
    }
}
