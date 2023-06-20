import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Appstate} from "../../shared/store/appstate";
import {Router} from "@angular/router";
import {Books} from "../store/books";
import {invokeSaveNewBookAPI} from "../store/books.action";
import {selectAppState} from "../../shared/store/app.selector";
import {setAPIStatus} from "../../shared/store/app.action";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  constructor(private store: Store, private appStore: Store<Appstate>, private router: Router) {
  }

  bookForm: Books = {
    id: 0,
    author: '',
    name: '',
    cost: 0,
  };

  save() {
    this.store.dispatch(invokeSaveNewBookAPI({newBook: this.bookForm}));
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((appState) => {
      if (appState.apiStatus === 'success') {
        this.appStore.dispatch(
          setAPIStatus({apiState: {apiResponseMessage: '', apiStatus: ''}})
        );
        this.router.navigate(['/']);
      }
    })
  }

}
