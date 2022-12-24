import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

import { IUser } from '../model/IUser';
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

  getUserById(userId: number): Observable<IUser | undefined> {
    return this.http
      .get<IUser>(`${this.apiServerUrl}/api/users/${userId}`)
      .pipe(
        tap((response) => log(response)),
        catchError((error) => handleError(error, undefined))
      );
  }

  getUserList(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.apiServerUrl}/api/users`).pipe(
      tap((response) => log(response)),
      catchError((error) => handleError(error, []))
    );
  }

  addUser(user: IUser): Observable<IUser | undefined> {
    return this.http
      .post<IUser>(`${this.apiServerUrl}/api/users`, user, this.httpOptions)
      .pipe(
        tap((response) => log(response)),
        catchError((error) => handleError(error, undefined))
      );
  }

  updateUser(user: IUser): Observable<IUser | undefined> {
    return this.http
      .put(`${this.apiServerUrl}/api/users`, user, this.httpOptions)
      .pipe(
        tap((response) => log(response)),
        catchError((error) => handleError(error, undefined))
      );
  }

  deleteUserById(userId: number): Observable<IUser | undefined> {
    return this.http.delete(`${this.apiServerUrl}/api/users/${userId}`).pipe(
      tap((response) => log(response)),
      catchError((error) => handleError(error, undefined))
    );
  }
}
