import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServersService } from './servers/servers.service';
import { AppRoutingModule, routeComponents } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ...routeComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
