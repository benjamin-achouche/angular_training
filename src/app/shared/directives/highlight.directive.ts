import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'red';
  
  @HostBinding('style.backgroundColor') color;
  
  colorToggle = false;
  
  constructor() { }
  
  ngOnInit(): void {
    this.color = this.defaultColor;
  }
  
  @HostListener('click') click() {
    this.colorToggle = !this.colorToggle;
    this.color = this.colorToggle ? this.highlightColor : this.defaultColor;
  }
}
