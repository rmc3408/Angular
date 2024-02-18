import { Component } from '@angular/core';

export type ServerElement = { name: string, type: string, content: string };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  Encapsulation: ViewEncapsulation.None // dont add encapsulation, make like global style
})
export class AppComponent {
  public serverElements: ServerElement[] = [
    { name: 'server1', type: 'server', content: 'test server' },
    { name: 'server2', type: 'blueprint', content: 'production server' }
  ];

  onAddServer(evt) {
    this.serverElements.push({
      type: 'server',
      name: evt.serverName,
      content: evt.serverContent
    });
  }

  onAddBluePrint(evt) {
    this.serverElements.push({
      type: 'blueprint',
      name: evt.serverName,
      content: evt.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
  }
}
