import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BooksService} from "./books/books.service";
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {appReducer} from "./shared/store/app.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({appState: appReducer}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
