import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-page-not-found',
  template: `
    <mat-card>
      <mat-card-title>404: Page Not Found</mat-card-title>
      <mat-card-content>
        <p>
          We're sorry, but the page you were looking for could not be found.
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button routerLink="/">Go to Homepage</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      mat-card {
        text-align: center;
      }
    `,
  ],
})
export class PageNotFoundComponent {}
