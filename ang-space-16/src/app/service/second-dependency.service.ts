import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondDependencyService {

  constructor() { }

  start() {
    console.log('Im real second')
  }
}
