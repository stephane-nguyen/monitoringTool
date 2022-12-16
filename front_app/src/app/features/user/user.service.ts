import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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
