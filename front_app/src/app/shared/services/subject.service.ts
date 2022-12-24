import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subject } from '../model/subject.model';
import { log, handleError } from './utils';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}
  apiServerUrl = environment.apiBaseUrl;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  getSubjectById(subjectId: number): Observable<Subject | undefined> {
    return this.http
      .get<Subject>(`${this.apiServerUrl}/api/subjects/${subjectId}`)
      .pipe(
        tap((response) => log(response)),
        catchError((error) => handleError(error, undefined))
      );
  }

  getSubjectList(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.apiServerUrl}/api/subjects`).pipe(
      tap((response) => log(response)),
      catchError((error) => handleError(error, []))
    );
  }

  addSubject(subject: Subject): Observable<Subject | undefined> {
    return this.http
      .post<Subject>(
        `${this.apiServerUrl}/api/subjects`,
        subject,
        this.httpOptions
      )
      .pipe(
        tap((response) => log(response)),
        catchError((error) => handleError(error, undefined))
      );
  }

  updateSubject(subject: Subject): Observable<Subject | undefined> {
    return this.http
      .put(`${this.apiServerUrl}/api/subjects`, subject, this.httpOptions)
      .pipe(
        tap((response) => log(response)),
        catchError((error) => handleError(error, undefined))
      );
  }

  deleteSubjectById(subjectId: number): Observable<Subject | undefined> {
    return this.http
      .delete(`${this.apiServerUrl}/api/subjects/${subjectId}`)
      .pipe(
        tap((response) => log(response)),
        catchError((error) => handleError(error, undefined))
      );
  }
}
