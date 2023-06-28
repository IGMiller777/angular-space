import {of} from 'rxjs';
import {AuthService} from './auth.service';
import {HttpClient} from "@angular/common/http";

describe('Service: AuthService', () => {
  let service: AuthService;
  const http = jest.fn();

  beforeEach(() => {
    service = new AuthService(http as any);
    window.localStorage.clear();
  });

  describe('Test: buildHeader', () => {
    it('should be defined', () => {
      expect(service.buildHeader()).toBeDefined();
    });
  });

  describe('Test: isLoggedIn', () => {
    it('should return false', () => {
      expect(service.isLoggedIn()).toBe(false);
    });

    it('should return true', () => {
      const objUser = {
        user: {name: test},
        token: {}
      };

      expect(window.localStorage.getItem('currentUser')).toBeNull();
      window.localStorage.setItem('currentUser', JSON.stringify(objUser));
      expect(service.isLoggedIn()).toBe(true);
    });
  });

  describe('Test: Logout', () => {
    it('should clear localstorage', () => {
      window.localStorage.setItem('currentUser', null);
      service.currentUser = null;
      expect(service.currentUser).toBe(null);
      expect(window.localStorage.getItem('currentUser')).toBe('');
    });
  });

  describe('Test: login', () => {
    it('should return user object', done => {
      const formData = {
        username: 'ddd',
        password: '213123'
      }

      const response = {
        success: true,
        message: {userid: 'fake'},
        token: {}
      }

      const objUser = {
        user: {name: test},
        token: {}
      }

      const httpMock = {post: jest.fn().mockReturnValue(of(response))}
      const serviceMock = new AuthService(httpMock as any);
      serviceMock.login(formData).subscribe(a => {
        expect(httpMock.post).toBeDefined();
        expect(httpMock.post).toHaveBeenCalled();
        expect(serviceMock.currentUser).toBeDefined();
        expect(a).toEqual(response);

        window.localStorage.setItem('currentUser', JSON.stringify(objUser));
        expect(window.localStorage.getItem('currentUser')).not.toBeNull();
        done();
      })
    });
  });
});
