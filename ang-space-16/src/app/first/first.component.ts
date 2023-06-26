import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FirstDependencyService} from "../service/first-dependency.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  // @ts-ignore
  @Input() user: User;

  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  get userFirstname(): string {
    return this.user.firstName;
  }


  get userLastname(): string | null {
    return this.user.lastName;
  }

  get isNameFull(): boolean {
    return !!(this.user.lastName && this.user.firstName)
  }
  constructor(private fd: FirstDependencyService) {
    this.fd.start();
  }

  clickOnButton(): void {
    this.buttonClicked.emit(this.userFirstname);
  }
}

export interface User {
  firstName: string;
  lastName: string | null;
}
