import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBackround]'
})
export class BackgroundDirective implements OnInit {

    @Input('appBackround') hoverColor: string = 'green';
    @Input() defaultColor: string = 'transparent';
    @HostBinding('style.backgroundColor') backround: string;

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        this.backround = this.defaultColor;
    }

    @HostListener('mouseenter') mouseEnter() {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
        this.backround = this.hoverColor;
        // this.renderer.addClass(this.element.nativeElement, 'white-text');
    }

    @HostListener('mouseleave') mouseLeave() {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
        this.backround = this.defaultColor;
        // this.renderer.removeClass(this.element.nativeElement, 'white-text');
    }
}
