import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
        <h1>Hello, {{ title }}</h1>
        <app-servers></app-servers>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'section1 - Basics of Angular';
}
