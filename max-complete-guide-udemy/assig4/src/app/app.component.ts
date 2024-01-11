import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public time: number = 0;

  handleTimeStartEvent(evt: number) {
    this.time = evt;
  }

  handleTimeEndEvent(evt: number) {
    this.time = evt;
  }
}
