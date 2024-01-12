import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { LoggingService } from '../log.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountService: DataService) {
    this.accountService.statudUpdated.subscribe(
      (status: string) => alert('New Status of created account: ' + status)
    );
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.accountService.statudUpdated.emit(status);
  }
}
