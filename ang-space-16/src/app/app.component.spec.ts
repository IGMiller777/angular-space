import {AppComponent} from './app.component';

describe('AppComponent', () => {

  let fixture: AppComponent;
  let authServiceMoth: any;

  beforeEach(() => {
    authServiceMoth = {
      isLoggedIn: jest.fn()
    };
    fixture = new AppComponent(
      authServiceMoth
    )
  });

  describe('Setup Component', () => {
    it('Should be initialized', () => {
      fixture.authService = authServiceMoth;
      expect(fixture.currentyear).toBe(new Date().getFullYear());
    });


  })
});
