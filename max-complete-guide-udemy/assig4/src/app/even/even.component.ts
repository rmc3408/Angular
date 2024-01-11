import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent implements OnChanges {
  @Input('checkTime') num: number;
  isEven: boolean = false;

  constructor() { 
    console.log('EVEN constructor', this.num);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('EVEN OnChanges lifecycle', changes, this.num);
    if (this.num % 2 === 0) {
      this.isEven = true;
    } else {
      this.isEven = false;
    }
  }

  ngOnInit() {
    console.log('EVEN Init lifecycle', this.num);
  }
}
