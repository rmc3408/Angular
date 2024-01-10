import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.scss'
})
export class ServersComponent {
  public allowServer: boolean = false;
  public serverCreationStatus: string = 'No server was created';
  public serverName: string = '';
  public clientName: string = 'Initial';

  constructor() {
    console.log('COMPONENT: ServersComponent');
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  onCreatServer(client: string) {
    this.serverCreationStatus = 'Server created on Client name is ' + client;
  }

  onUpdateServerName(event: Event) {
    //(<HTMLInputElement>event.target).value); //same as below
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
