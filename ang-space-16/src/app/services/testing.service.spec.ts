import {TestingService} from "./testing.service";
import {TestBed} from "@angular/core/testing";
import {FirstDependencyService} from "./first-dependency.service";

describe('TestingService Main', () => {

  let service: TestingService;
  const fakeFDS = {
    get name(): string {
      return ''
    },
    set name(value: string) {
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingService, {provide: FirstDependencyService, useValue: fakeFDS}]
    });
    service = TestBed.inject(TestingService);
  });

  it('should create instance', () => {
    expect(service).toBeDefined();
  })

  it('Should return greetings', () => {
    spyOnProperty(fakeFDS, 'name', 'get').and.returnValue('Mike');
    const result = service.sayHi();
    expect(result).toBe('Hi, Mike')
  });


  it('setanem should call setter of FDS', () => {
    const setterSpy = spyOnProperty(fakeFDS, 'name', 'set').and.callThrough();
    service.sayHi('Joe');
    expect(setterSpy).toHaveBeenCalledWith('');
  })
});
