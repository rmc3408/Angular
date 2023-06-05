import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  public readonly streetName: string = 'Ontario Street'
  public readonly size = 40
  public readonly color = 'green'
  public readonly classes = ['red-title', 'small-title']
  public readonly isActive = true

  public fullName: string = ''
  public isToggleMessage: boolean = false
  public userData = {
    name: 'John Doe',
    age: 28
  }

  constructor() { }

  ngOnInit(): void {
  }

  toogleMessage(): void {
    this.isToggleMessage = !this.isToggleMessage
  }

  fromEmitterChangeNumber(): void {
    console.log('Parent')
    this.userData.age = this.userData.age + 1
  }
}
