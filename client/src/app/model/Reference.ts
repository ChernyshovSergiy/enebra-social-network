import { Point } from './Point';

export class Referens {
    sortNum: number;
    title: object;
    ref: Point[];

    constructor(sortNum: number, title: object, ref: Point[]) {
        this.sortNum = sortNum;
        this.title = title;
        this.ref = ref;
    }
}
