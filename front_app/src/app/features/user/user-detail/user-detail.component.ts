import { Component } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  template: `
    <div class="d-flex justify-content-center" borderCard>
      <div class="mx-auto" style="margin-top:10em;">
        <mat-card
          class="justify-content-center"
          style="background-color: #7CA3F6; color: black;"
        >
          <mat-card-header>
            <div
              mat-card-avatar
              style=" background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
               background-size: cover;"
            ></div>
            <mat-card-title-group>
              <mat-card-title>Shiba Inu</mat-card-title>
              <mat-card-subtitle>Student/Teacher</mat-card-subtitle>
            </mat-card-title-group>
          </mat-card-header>
          <mat-card-content> Email </mat-card-content>
          <mat-card-content> Email </mat-card-content>
          <mat-card-content> Email </mat-card-content>
          <mat-card-content> Email </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
})
export class UserDetailComponent {
  constructor() {}
}
