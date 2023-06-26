import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TestingService} from "./services/testing.service";
import {FirstDependencyService} from "./services/first-dependency.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TestingService, FirstDependencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
