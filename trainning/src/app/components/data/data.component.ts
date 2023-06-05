import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


type userDatatype = {
  name: string;
  age: number;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Input() userName: string = '';
  @Input() userData: userDatatype = { name: '', age: 0 };

  @Output() changeNumEvent: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  toChangeNumber(): void {
    console.log('Child')
    this.changeNumEvent.emit()
  }

}
