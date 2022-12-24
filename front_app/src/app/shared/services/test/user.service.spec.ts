import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UserService } from '../user.service';
import { User } from '../../model/user.model';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  const mockUsers = [
    {
      id: 1,
      firstname: 'Alice',
      lastname: 'Mahr',
      password: 'yo',
      email: 'alice@gmail.com',
      role: 'Student',
    },
    {
      id: 2,
      firstname: 'Bob',
      lastname: 'Marley',
      password: 'oyo',
      email: 'bob@gmail.com',
      role: 'Teacher',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  /**
   * check that all expected HTTP requests have been made during the test
   */
  afterEach(() => {
    httpMock.verify();
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUserById()', () => {
    const singleUser = {
      id: 1,
      firstname: 'Alice',
      lastname: 'Mahr',
      password: 'yo',
      email: 'a@gmail.com',
      role: 'Student',
    };
  });

  describe('getUserList()', () => {
    it('should return all users from mockUsers', () => {
      service.getUserList().subscribe((users: User[]) => {
        expect(users).toEqual(mockUsers);
      });
      const req = httpMock.expectOne('http://localhost:8080/api/users');
      expect(req.request.method).toBe('GET');
      req.flush(mockUsers);
    });
  });
});
