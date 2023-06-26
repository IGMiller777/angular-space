import {Injectable} from '@angular/core';
import {FirstDependencyService} from "./first-dependency.service";

@Injectable({
  providedIn: 'root'
})
export class TestingService {


  constructor(private firstDependencyService: FirstDependencyService) {
  }

  sayHi(): string {
    const name = this.firstDependencyService.name;
    if (name === 'Mike') {
      return 'Hi, Mike';
    } else {
      return 'Hi, str';
    }
  }


}
