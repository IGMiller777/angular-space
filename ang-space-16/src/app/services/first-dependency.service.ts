import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstDependencyService {

  private nameValue: string = '';

  get name() : string {
    return this.nameValue;
  }

  set name(value) {
    this.nameValue = value;
  }

  constructor() {
    this.nameValue = 'Mike';
  }
}
