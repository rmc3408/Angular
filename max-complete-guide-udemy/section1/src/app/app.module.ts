import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { WarningComponent } from './components/warning/warning.component';
import { SuccessComponent } from './components/success/success.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, WarningComponent, SuccessComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
