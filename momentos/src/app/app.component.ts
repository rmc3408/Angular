import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'momentos';
  appName = 'John';
  userData = {
    name: 'John Doe',
    age: 28
  }

  fromEmitterChangeNumber(): void {
    console.log('Parent')
    this.userData.age = this.userData.age + 1
  }
}
