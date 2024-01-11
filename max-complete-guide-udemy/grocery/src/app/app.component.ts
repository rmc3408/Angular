import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  page: string = 'shop';

  onNavigate(evt: string) {
    this.page = evt;
  }
}
