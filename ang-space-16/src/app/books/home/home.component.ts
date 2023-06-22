import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectBooks} from "../store/books.selector";
import {invokeBooksAPI, invokeDeleteBookAPI} from "../store/books.action";
import {Appstate} from "../../shared/store/appstate";
import {selectAppState} from "../../shared/store/app.selector";
import {setAPIStatus} from "../../shared/store/app.action";
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books$ = this.store.pipe(select(selectBooks));


  deleteModal: any;
  idToDelete: number = 0;
  constructor(private store: Store, private appStore: Store<Appstate>) { }

  ngOnInit(): void {
    // this.deleteModal = new window.bootstrap.Modal(
    //   document.getElementById('deleteModal')
    // );
    this.store.dispatch(invokeBooksAPI());
  }
  openDeleteModal(id: number) {
    this.idToDelete = id;
    this.delete();
  }

  delete() {
    this.store.dispatch(
      invokeDeleteBookAPI({
        id: this.idToDelete,
      })
    );
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((apState: any) => {
      if (apState.apiStatus == 'success') {
        this.deleteModal.hide();
        this.appStore.dispatch(
          setAPIStatus({ apiState: { apiResponseMessage: '', apiStatus: '' } })
        );
      }
    });
  }
}
