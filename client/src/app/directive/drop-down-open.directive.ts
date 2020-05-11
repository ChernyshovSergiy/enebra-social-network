import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropDownOpen]',
})
export class DropDownOpenDirective {
    @HostBinding('class.open') isOpen = false;

    constructor() {}

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
