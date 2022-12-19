import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

/**
 *  use the loading service to show the loading spinner while any HTTP requests are in progress
 */
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.showLoadingSpinner();

    return next.handle(req).pipe(
      /* operator to hide the loading spinner when the HTTP request completes, either with a successful response or an error. */
      finalize(() => {
        this.loadingService.hideLoadingSpinner();
      })
    );
  }
}
