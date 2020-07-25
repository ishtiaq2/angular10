import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive( {
    selector: '[dropDown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostBinding('class.flexbox') flexBox = true;
    @HostBinding('style.backgroundColor') bgColor: string = 'lightgreen';

    @HostListener('click')
        toggleIsOpen () {
            this.isOpen = !this.isOpen;
        }
}