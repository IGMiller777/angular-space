import {Component} from '@angular/core';
import {DependencyService} from "../dependency/dependency.service";
import {map, Observable, Subject, throwError} from "rxjs";

@Component({
  selector: 'app-async-example',
  templateUrl: './async-example.component.html',
  styleUrls: ['./async-example.component.scss']
})
export class AsyncExampleComponent {
  name: string = '';

  subjExample: Subject<string> = new Subject<string>();

  constructor(private dependencyService: DependencyService) {
  }

  asyncExample(name?: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!name) {
        reject('Without name');
        return;
      }
      setTimeout(() => resolve(name), 0);
    })
  }

  sayHiAsync(name: string): Promise<string> {
    return this.dependencyService.asyncEx().then(res => {
      return res + name;
    }, () => {
      return 'Oops';
    });
  }

  promiseGetName(name?: string): Promise<void> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (!name) {
          rej('Without name');
          return;
        }
        this.name = name;
        res();
      }, 3000);
    })
  }

  observableEx(name?: string): Observable<string> {
    if (!name) {
      return throwError('Without name');
    }
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(name);
        observer.complete();
      }, 1000)
    })
  }

  subjectExample(name: string): void {
    this.subjExample.next(name);
  }

  sayHiObservable(name: string): Observable<string> {
    return this.dependencyService.obEx()
      .pipe(
        map(r => `${r}, ${name}`)
      );
  }


  setNameAfterMinute(name: string) {
    setTimeout(() => {
      this.name = name;
    }, 60000);
  }
}
