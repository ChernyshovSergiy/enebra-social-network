import { ReferenceDAO } from '../interface/ReferenceDAO';
import { Observable, of } from 'rxjs';
import { Referens } from '../../model/Reference';
import { TestData } from '../test-data';

export class ReferenceDAOArray implements ReferenceDAO {
    add(T): Observable<Referens> {
        return undefined;
    }

    delete(id: number): Observable<Referens> {
        return undefined;
    }

    get(id: number): Observable<Referens> {
        return undefined;
    }

    getAll(): Observable<Referens[]> {
        return of(TestData.referens);
    }

    update(T): Observable<Referens> {
        return undefined;
    }

    getAllByLang(lang: string): Observable<Referens[]> {
        return undefined;
    }
}
