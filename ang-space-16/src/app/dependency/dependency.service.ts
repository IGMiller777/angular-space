import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DependencyService {


  constructor() {
  }


  asyncEx(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("hello")
      }, 3000)
    })
  }

  obEx(): Observable<string> {
    return new Observable<string>(ob => {
      setTimeout(() => {
        ob.next("Hello");
        ob.complete();
      })
    })
  }
}
