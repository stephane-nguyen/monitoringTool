import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subject } from '../model/subject.model';

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
      .get<Subject>(`${this.apiServerUrl}/api/subject/${subjectId}`)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined))
      );
  }

  getSubjectList(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.apiServerUrl}/api/subject`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  addSubject(subject: Subject): Observable<Subject | undefined> {
    return this.http
      .post<Subject>(
        `${this.apiServerUrl}/api/subject`,
        subject,
        this.httpOptions
      )
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined))
      );
  }

  updateSubject(subject: Subject): Observable<Subject | undefined> {
    return this.http
      .put(`${this.apiServerUrl}/api/subject`, subject, this.httpOptions)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined))
      );
  }

  deleteSubjectById(subjectId: number): Observable<Subject | undefined> {
    return this.http
      .delete(`${this.apiServerUrl}/api/subject/${subjectId}`)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined))
      );
  }

  /* UTILS */

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
