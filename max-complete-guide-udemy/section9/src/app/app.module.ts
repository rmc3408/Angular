import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { DataService } from './data.service';
import { LoggingService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [DataService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
