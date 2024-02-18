import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id: string = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(+id);

    this.route.queryParams.subscribe(queryParams => {
      this.allowEdit = queryParams['allowEdit'] === 'true';
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;


    this.route.fragment.subscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
