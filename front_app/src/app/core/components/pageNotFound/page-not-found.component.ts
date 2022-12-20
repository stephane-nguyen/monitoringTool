import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <mat-card>
      <mat-card-title>404: Page Not Found</mat-card-title>
      <mat-card-content>
        <p>
          We are sorry, but the page you were looking for could not be found.
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button class="border border-secondary" mat-button routerLink="/">
          Go to Homepage
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      mat-card {
        text-align: center;
        margin-top: 20px;
        border: 2px solid #000;
      }
    `,
  ],
})
export class PageNotFoundComponent {}
