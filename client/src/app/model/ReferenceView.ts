import { Point } from './Point';
export class ReferenceView {
    sortNum: number;
    title: string;
    ref: Point[];

    constructor(sortNum: number, title: string, ref: Point[]) {
        this.sortNum = sortNum;
        this.title = title;
        this.ref = ref;
    }
}
