import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {Appstate} from "../../shared/store/appstate";
import {Books} from "../store/books";
import {switchMap} from "rxjs";
import {selectBookById} from "../store/books.selector";
import {invokeUpdateBookAPI} from "../store/books.action";
import {selectAppState} from "../../shared/store/app.selector";
import {setAPIStatus} from "../../shared/store/app.action";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private appStore: Store<Appstate>
  ) {
  }

  bookForm: Books = {
    id: 0,
    author: '',
    name: '',
    cost: 0,
  };

  ngOnInit(): void {
    let fetchData$ = this.route.paramMap.pipe(
      switchMap((params) => {
        var id = Number(params.get('id'));
        return this.store.pipe(select(selectBookById(id)));
      })
    );
    fetchData$.subscribe((data) => {
      if (data) {
        this.bookForm = {...data};
      } else {
        this.router.navigate(['/']);
      }
    });
  }


  update() {
    this.store.dispatch(
      invokeUpdateBookAPI({updateBook: {...this.bookForm}})
    );

    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((appState) => {
      if (appState.apiStatus === 'success') {
        this.appStore.dispatch(
          setAPIStatus({apiState: {apiResponseMessage: '', apiStatus: ''}})
        )
        this.router.navigate(['/']);
      }
    })
  }

}
