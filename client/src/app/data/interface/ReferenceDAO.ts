import { CommonDAO } from './CommonDAO';
import { Referens } from '../../model/Reference';
import { Observable } from 'rxjs';

export interface ReferenceDAO extends CommonDAO<Referens> {
    // advanced methods
    getAllByLang(lang: string): Observable<Referens[]>;
}
