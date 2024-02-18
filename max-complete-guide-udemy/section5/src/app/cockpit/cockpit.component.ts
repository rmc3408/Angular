import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() addBlueprint = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() addServer = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('srvCtn') serverContentInput: ElementRef; // local reference via ViewChild from #srvCtn

  onTriggerBlueprintLocal(name: HTMLInputElement, content: HTMLInputElement) {
    
    console.log(this.serverContentInput.nativeElement.value)
    
    if (name && content) { // local reference - access HTML to TS code via method onTrigger(#srvCtn)
      this.addBlueprint.emit({
        serverName: name.value,
        serverContent: content.value
      });
    }
  }

  onTriggerBlueprint() {
    this.addBlueprint.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onTriggerServer() {
    this.addServer.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
