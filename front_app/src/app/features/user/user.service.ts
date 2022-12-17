import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserById(id: number): Observable<User> {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  //UTILS

  private log(response: any) {
    console.table(response);
  }

  /**
   * Handle Http operation that failed
   * @param error
   * @param errorValueByDefault
   * @returns
   */
  private handleError(error: Error, errorValueByDefault: any) {
    console.error(error);
    return of(errorValueByDefault);
  }
}
