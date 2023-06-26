import { Injectable } from '@angular/core';
import {SecondDependencyService} from "./second-dependency.service";

@Injectable({
  providedIn: 'root'
})
export class FirstDependencyService {

  constructor(private fb: SecondDependencyService) { }

  start() {
    console.log('HIIII, Im real first')
  }

  startSecond() {
    this.fb.start();
  }
}
