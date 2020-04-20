export class Feed {
    href: string;
    title: object;
    newBlocks: number;

    constructor(href: string, title: object, newBlocks: number) {
        this.href = href;
        this.title = title;
        this.newBlocks = newBlocks;
    }
}
