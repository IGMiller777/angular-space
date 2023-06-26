import {Component} from '@angular/core';
import {FirstDependencyService} from "../service/first-dependency.service";
import {SecondDependencyService} from "../service/second-dependency.service";
import {FormBuilder, FormControl, FormControlName, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  providers: [FirstDependencyService]
})
export class SecondComponent {

  formGroupG: FormGroup;
  name: FormControl;

  constructor(private fd: FirstDependencyService, private fb: FormBuilder) {
    this.fd.startSecond();
    this.name = new FormControl('');
    this.formGroupG = fb.group({
      name: this.name
    })
  }


}
