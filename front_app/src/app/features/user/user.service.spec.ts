import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
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
    it('should return the user matching the id', () => {
      const user = { id: 1 };

      service.getUserById(user.id).subscribe((res: any) => {
        expect(res).toEqual(user);
      });

      const req = httpMock.expectOne(
        `http://localhost:4200/api/users/${user.id}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(user);
    });
  });
});
