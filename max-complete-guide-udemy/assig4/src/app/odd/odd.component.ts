import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent implements OnChanges {
  @Input('checkTime') num: number;
  isOdd: boolean = false;

  constructor() { 
    console.log('ODD constructor', this.num);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ODD OnChanges lifecycle', changes, this.num);
    if (this.num % 2 !== 0) {
      this.isOdd = true;
    } else {
      this.isOdd = false;
    }
  }

  ngOnInit() {
    console.log('ODD Init lifecycle', this.num);
  }

  ngAfterContentInit() { // Content from Children content between open and close tag
    console.log('ODD AfterContent lifecycle', this.num);
  }

  ngAfterViewInit() { // Get info from Views and Child Views
    console.log('ODD AfterView lifecycle', this.num);
  }
}
