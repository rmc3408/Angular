import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appBestHighlight]'
})
export class BestHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input('highlight') defaultColor: string = 'transparent';
  highlightColor: string = 'green';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(_eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(_eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

}
