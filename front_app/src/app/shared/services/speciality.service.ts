import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Speciality } from '../model/speciality.model';
import { handleError, log } from './utils';

@Injectable({
  providedIn: 'root',
})
export class SpecialityService {
  constructor(private http: HttpClient) {}
  apiServerUrl = environment.apiBaseUrl;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  getSpecialityById(specialityId: number): Observable<Speciality | undefined> {
    return this.http
      .get<Speciality>(`${this.apiServerUrl}/api/speciality/${specialityId}`)
      .pipe(
        tap((response) => log(response)),
        catchError((error) => handleError(error, undefined))
      );
  }

  getSpecialityList(): Observable<Speciality[]> {
    return this.http
      .get<Speciality[]>(`${this.apiServerUrl}/api/speciality`)
      .pipe(
        tap((response) => log(response)),
        catchError((error) => handleError(error, []))
      );
  }

  addSpeciality(speciality: Speciality): Observable<Speciality | undefined> {
    return this.http
      .post<Speciality>(
        `${this.apiServerUrl}/api/speciality`,
        speciality,
        this.httpOptions
      )
      .pipe(
        tap((response) => log(response)),
        catchError((error) => handleError(error, undefined))
      );
  }

  updateSpeciality(speciality: Speciality): Observable<Speciality | undefined> {
    return this.http
      .put(`${this.apiServerUrl}/api/speciality`, speciality, this.httpOptions)
      .pipe(
        tap((response) => log(response)),
        catchError((error) => handleError(error, undefined))
      );
  }

  deleteSpecialityById(
    specialityId: number
  ): Observable<Speciality | undefined> {
    return this.http
      .delete(`${this.apiServerUrl}/api/speciality/${specialityId}`)
      .pipe(
        tap((response) => log(response)),
        catchError((error) => handleError(error, undefined))
      );
  }
}
