import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

type userDatatype = {
  name: string;
  age: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public readonly name: string = 'Ontario Street'
  public readonly postalCode: string = 'M4X 1N2'
  public isToggleMessage: boolean = false

  @Input() userName: string = '';
  @Input() userData: userDatatype = { name: '', age: 0 };

  size = 40
  color = 'green'
  classes = ['red-title', 'small-title']
  isActive = true

  @Output() changeNumEvent: EventEmitter<number> = new EventEmitter()

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
