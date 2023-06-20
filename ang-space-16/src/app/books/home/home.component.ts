import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectBooks} from "../store/books.selector";
import {invokeBooksAPI} from "../store/books.action";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books$ = this.store.pipe(select(selectBooks));
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(invokeBooksAPI());
  }

}
