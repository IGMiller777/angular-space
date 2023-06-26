import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FirstComponent} from './first.component';
import {By} from "@angular/platform-browser";
import {FirstDependencyService} from "../service/first-dependency.service";

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  const fakeFDS = jasmine.createSpyObj('fakeFirstDep', ['start']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponent],
      providers: [{
        provide: FirstDependencyService, useValue: fakeFDS
      }]
    });
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    component.user = {
      firstName: 'ASDASD',
      lastName: 'asdasdasd'
    }
    fixture.detectChanges();

  });

  it('Component return name and last name', () => {
    component.user = {
      firstName: 'AAA',
      lastName: 'BBB'
    }
    expect(component.userFirstname).toBe('AAA');
    expect(component.userLastname).toBe('BBB');
  });

  it('Should click by onClick button and sent user name', () => {
    const event = spyOn(component.buttonClicked, 'emit');
    component.user = {
      firstName: 'SSS',
      lastName: 'BBB'
    }
    component.clickOnButton();
    expect(event).toHaveBeenCalledWith('SSS');
  })
  it('Should click SSS by onClick button and sent user name', () => {
    const event = spyOn(component.buttonClicked, "emit")
    const button = fixture.debugElement.query(By.css("button"));
    fixture.detectChanges();
    button.nativeElement.click();
    expect(event).toHaveBeenCalledWith('ASDASD');
  });

  it('Return css U AN last name', () => {
    component.user = {
      firstName: 'SSS',
      lastName: null
    }
    fixture.detectChanges();


    const firstSpan = fixture.debugElement.query(By.css('span.fill'));
    expect(firstSpan).toBeNull();
  })

});
