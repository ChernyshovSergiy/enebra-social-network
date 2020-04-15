import { Observable } from 'rxjs';

export interface CommonDAO<T> {
    // CRUD

    // add item
    add(T): Observable<T>;

    // get all items
    getAll(): Observable<T[]>;

    // get one item
    get(id: number): Observable<T>;

    // update item
    update(T): Observable<T>;

    // delete item
    delete(id: number): Observable<T>;
}
