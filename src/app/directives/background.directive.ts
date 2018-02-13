import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBackrounnd]'
})
export class BackgroundDirective implements OnInit {
    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        this.renderer.addClass(this.element.nativeElement, 'white-text');
        // this.element.nativeElement.style.backgroundColor = 'red';
    }
}