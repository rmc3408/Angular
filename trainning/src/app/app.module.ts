import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DirectivesComponent } from './components/directives/directives.component';
import { DataComponent } from './components/data/data.component';
import { OneComponent } from './components/one/one.component';

@NgModule({
  declarations: [AppComponent, ListComponent, DirectivesComponent, DataComponent, OneComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
