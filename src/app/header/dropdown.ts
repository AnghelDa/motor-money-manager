import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: false,
})
export class Dropdown {
  private isOpen = false;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;

    const menu = this.elRef.nativeElement.querySelector('.dropdown-menu');

    if (this.isOpen) {
      this.renderer.addClass(menu, 'show');
    } else {
      this.renderer.removeClass(menu, 'show');
    }
  }
}
