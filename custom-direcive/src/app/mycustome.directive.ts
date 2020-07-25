import { Directive, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[hoverDirective]'
})

export class HoverDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'lightblue';

    @HostBinding('style.backgroundColor') 
        bgColor: string;

    @HostBinding('style.cursor') 
        cursor: string = 'default';

    @HostBinding('class.dimensions')
    setDimensions: boolean = true;

    public constructor() {}

    ngOnInit() {
        this.setDimensions = true;
        this.bgColor =  this.defaultColor;
    }

    @HostListener('mouseover')
    mouseover (eventData: Event) {
        this.bgColor = this.highlightColor;
        this.cursor = 'pointer';
    }
    @HostListener('mouseleave')
    mouseleave (eventData: Event) {
        this.bgColor = this.defaultColor;
    }
}