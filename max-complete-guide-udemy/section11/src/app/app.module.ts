import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServersService } from './servers/servers.service';
import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AuthService } from './auth.service';
import { ErrorComponent } from './error/error.component';
import { ServerResolver } from './servers/servers.resolver';


@NgModule({
  declarations: [
    AppComponent,
    ...routeComponents,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthService, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
