import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {userStub} from "../../assets/shared.data";

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('Should return User Stub', () => {
    expect(service.getUser()).toBe(userStub);
  });
});
