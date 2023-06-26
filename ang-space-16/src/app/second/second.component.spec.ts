import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SecondComponent} from './second.component';
import {SecondDependencyService} from "../service/second-dependency.service";
import {FirstDependencyService} from "../service/first-dependency.service";
import {ReactiveFormsModule} from "@angular/forms";

describe('SecondComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;

  const fakeFirstFDS = jasmine.createSpyObj('fakeFirstFDS', ['startSecond']);
  const fakeSecondFDS = jasmine.createSpyObj('fakeSecondFDS', ['start']);

  beforeEach(() => {
    TestBed.overrideComponent(SecondComponent, {set: {providers: []}})

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SecondComponent],
      providers: [{
        provide: FirstDependencyService, useValue: fakeFirstFDS
      }]
    });
    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
