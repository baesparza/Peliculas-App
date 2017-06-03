import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appActiveTag]'
})
export class ActiveTagDirective {

  nuevoColor = '#0275d8';

  constructor(private el: ElementRef) {
    // console.log('Hola');
  }

  @HostListener('mouseenter') mouseEntro() {
    // console.log('entro');
    this.el.nativeElement.style.color  = this.nuevoColor;
    this.el.nativeElement.style.border = `1px solid ${ this.nuevoColor }`;
    this.el.nativeElement.style.boxShadow = `0 8px 8px rgba(0,0,0,0.24), 0 0 8px rgba(0,0,0,0.12)`;
  }

  @HostListener('mouseleave') mouseSalio() {
    this.el.nativeElement.style.color  = null;
    this.el.nativeElement.style.border = `1px solid rgba(0,0,0,.125)`;
    this.el.nativeElement.style.boxShadow = `0 2px 2px rgba(0,0,0,0.24), 0 0 2px rgba(0,0,0,0.12)`;
  }

  private resaltar (color: string) {
    
  }

}
