import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

type userDatatype = {
  name: string;
  age: number;
}
type animalsDatatype = {
  name: string;
  type: string;
}

@Component({
  selector: 'app-trainning',
  templateUrl: './trainning.component.html',
  styleUrls: ['./trainning.component.css']
})
export class TrainningComponent implements OnInit {
  public readonly streetName: string = 'Ontario Street'
  public readonly postalCode: string = 'M4X 1N2'
  public isToggleMessage: boolean = false

  @Input() userName: string = '';
  @Input() userData: userDatatype = { name: '', age: 0 };

  size = 40
  color = 'green'
  classes = ['red-title', 'small-title']
  isActive = true

  @Output() changeNumEvent: EventEmitter<number> = new EventEmitter()

  public readonly listAnimals: animalsDatatype[] = [
    { name: 'turca', type: 'Dog' },
    { name: 'caique', type: 'Bird' },
    { name: 'Fire', type: 'Horse' },
    { name: 'Teethy', type: 'Aligator' },
  ]
  public fullName: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  toogleMessage(): void {
    this.isToggleMessage = !this.isToggleMessage
  }

  toChangeNumber(): void {
    console.log('Child')
    this.changeNumEvent.emit()
  }

}
