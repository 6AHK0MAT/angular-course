import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBackrounnd]'
})
export class BackgroundDirective implements OnInit {

    @HostBinding('style.backgroundColor') backround: string;

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
    }

    @HostListener('mouseenter') mouseEnter() {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
        this.backround = 'green';
        // this.renderer.addClass(this.element.nativeElement, 'white-text');
    }

    @HostListener('mouseleave') mouseLeave() {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
        this.backround = 'transparent';
        // this.renderer.removeClass(this.element.nativeElement, 'white-text');
    }
}
