import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new Subject<boolean>();
  loading$ = this.loadingSubject.asObservable();

  showLoadingSpinner() {
    this.loadingSubject.next(true);
  }

  hideLoadingSpinner() {
    this.loadingSubject.next(false);
  }
}
