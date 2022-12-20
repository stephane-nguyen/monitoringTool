import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

import { User } from './user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private apiServerUrl = environment.apiBaseUrl;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getUserById(userId: number): Observable<User | undefined> {
    return this.http.get<User>(`${this.apiServerUrl}/api/users/${userId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>('${this.apiServerUrl}/api/users').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  addUser(user: User): Observable<User | undefined> {
    return this.http
      .post<User>(`${this.apiServerUrl}/api/users`, user, this.httpOptions)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined))
      );
  }

  updateUser(user: User): Observable<User | undefined> {
    return this.http
      .put(`${this.apiServerUrl}/api/users`, user, this.httpOptions)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined))
      );
  }

  deleteUserById(userId: number): Observable<User | undefined> {
    return this.http.delete(`${this.apiServerUrl}/api/users/${userId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

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
