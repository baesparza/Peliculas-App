import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBigText]'
})
export class BigTextDirective {


  constructor(private el: ElementRef) {
    // console.log('Hola');
  }

  @HostListener('mouseenter') mouseEntro() {
    // console.log('entro');
    this.el.nativeElement.style.fontSize  = '200%';
  }

  @HostListener('mouseleave') mouseSalio() {
    // console.log('salio');
    this.el.nativeElement.style.fontSize  = '50%';
  }

  private resaltar (color: string) {
    
  }

}
