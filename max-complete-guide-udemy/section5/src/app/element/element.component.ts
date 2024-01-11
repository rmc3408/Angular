import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ServerElement } from '../app.component';

@Component({
  selector: 'app-server-element',
  templateUrl: './element.component.html'
})
export class ElementComponent implements OnInit, OnChanges {
  @Input('aliasElement') element: ServerElement;
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(chg: SimpleChanges) {
    console.log('ngOnChanges called!', chg);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text ViewChild: ' + this.header?.nativeElement.textContent);
    console.log('Text Contentchild of paragraph: ' + this.paragraph?.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck call');
  }

  ngAfterContentInit() {
    this.name = document.querySelector('strong')?.textContent.toUpperCase();
    console.log('ngAfterContentInit called!');
    console.log('Text ViewChild Content: ' + this.header?.nativeElement.textContent);
    console.log('Text Contentchild of paragraph: ' + this.paragraph?.nativeElement.textContent);
  }

  ngAfterViewInit() { 
    console.log('ngAfterViewInit called!');
    console.log('Text ViewChild: ' + this.header?.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
