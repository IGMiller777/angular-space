import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {AsyncExampleComponent} from './async-example.component';
import {DependencyService} from "../dependency/dependency.service";

describe('AsyncExampleComponent', () => {
  let component: AsyncExampleComponent;
  let fixture: ComponentFixture<AsyncExampleComponent>;
  const fakeDepServ = jasmine.createSpyObj("fakeDepServ", ['asyncEx', 'obEx']);


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncExampleComponent],
      providers: [
        {provider: DependencyService, useValue: fakeDepServ},
      ]
    });
    fixture = TestBed.createComponent(AsyncExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('return asyncawaint asyncEx with param', async () => {
    const result = await component.asyncExample("Alice");
    expect(result).toBe("Alice");
  })

  it('return asyncawaint asyncEx with reject without param', async () => {
    try {
      await component.asyncExample();
    } catch (err) {
      expect(err).toBe("Without name");
    }
  })

  it('say hi async for new service', async () => {
    fakeDepServ.asyncEx.and.returnValue(Promise.resolve("hello"))
    const result = await component.sayHiAsync("Ivan");
    expect(result).toBe("helloIvan");
  });


  it('Promises mechanish', async () => {
    return component.asyncExample("Alice").then(x => expect(x).toBe("Alice"))
  });


  it('Promises ex name for class mechanish', async () => {
    return component.promiseGetName("Alice").then(() => expect(component.name).toBe("Alice"))
  });

  it('Promises ex name - callBack Done', (done) => {
    component.asyncExample("Ivan").then(x => {
      expect(x).toBe("Ivan");
      done();
    })
  });

  it('OBSER ex name - callBack Done OBSER', (done) => {
    component.observableEx("Ivan").subscribe(x => {
      expect(x).toBe("Ivan")
      done();
    })
  });

  it('Subject ex name - callBack Done ', (done) => {
    component.subjExample.subscribe(x => {
      expect(x).toBe("Ivan");
      done();
    });

    component.subjectExample("Ivan");
  });

  it('Say Hi Observable with Done  ', (done) => {
    fakeDepServ.obEx.and.returnValue("Hello");
    component.sayHiObservable("dan").subscribe(x => {
      expect(x).toBe("Hello, dan");
      done();
    })
  });

  it('setNameAfterMinute', () => {
    jasmine.clock().install();
    component.setNameAfterMinute("Ivan");
    jasmine.clock().tick(60000);
    expect(component.name).toBe("Ivan");
    jasmine.clock().uninstall();
  })

  it('fake ASYNC minute', fakeAsync(() => {
    component.setNameAfterMinute("Ivan");
    tick(600200);
    expect(component.name).toBe("Ivan");
  }))
});
