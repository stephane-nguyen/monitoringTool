import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

import { User } from '../../shared/model/user.model';
import { environment } from 'src/environments/environment';

import { handleError, log } from './utils';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  apiServerUrl = environment.apiBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getUserById(userId: number): Observable<User | undefined> {
    return this.http.get<User>(`${this.apiServerUrl}/api/users/${userId}`).pipe(
      tap((response) => log(response)),
      catchError((error) => handleError(error, undefined))
    );
  }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/api/users`).pipe(
      tap((response) => log(response)),
      catchError((error) => handleError(error, []))
    );
  }

  addUser(user: User): Observable<User | undefined> {
    return this.http
      .post<User>(`${this.apiServerUrl}/api/users`, user, this.httpOptions)
      .pipe(
        tap((response) => log(response)),
        catchError((error) => handleError(error, undefined))
      );
  }

  updateUser(user: User): Observable<User | undefined> {
    return this.http
      .put(`${this.apiServerUrl}/api/users`, user, this.httpOptions)
      .pipe(
        tap((response) => log(response)),
        catchError((error) => handleError(error, undefined))
      );
  }

  deleteUserById(userId: number): Observable<User | undefined> {
    return this.http.delete(`${this.apiServerUrl}/api/users/${userId}`).pipe(
      tap((response) => log(response)),
      catchError((error) => handleError(error, undefined))
    );
  }
}
