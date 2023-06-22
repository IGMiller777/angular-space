import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BooksRoutingModule} from './books-routing.module';
import {HomeComponent} from './home/home.component';
import {StoreModule} from "@ngrx/store";
import {bookReducer} from "./store/books.reducer";
import {EffectsModule} from "@ngrx/effects";
import {BooksEffect} from "./store/books.effect";
import {FormsModule} from "@angular/forms";
import {BooksService} from "./books.service";
import {HttpClientModule} from "@angular/common/http";
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forFeature('mybooks', bookReducer),
    EffectsModule.forFeature([BooksEffect])
  ],
  providers: [BooksService]
})
export class BooksModule {
}
