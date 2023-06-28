import {async, TestBed} from '@angular/core/testing';
import {AboutComponent} from './about.component';

describe('AboutComponent', () => {
  let fixture: any;
  let component: AboutComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.debugElement.componentInstance;
  }));

  describe('Test: Component', () => {
    it('should be initialized', () => {
      expect(fixture).toBeTruthy();
      fixture.detectChanges();
      const compiledElement = fixture.debugElement.nativeElement;
      const h1 = compiledElement.querySelector('h1');
      expect(h1.textContent).toBe('Expense Watch');
      const p = compiledElement.querySelector('.lead');
      expect(p.textContent).toContain('A sample MEAN');
    });
  });
});
