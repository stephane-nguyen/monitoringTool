import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from '../../../shared/model/user.model';

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
              <mat-card-title
                >{{ user?.lastname }} {{ user?.firstname }}</mat-card-title
              >
              <mat-card-subtitle>{{ user?.role }}</mat-card-subtitle>
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
export class UserDetailComponent implements OnInit {
  user?: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const userId: string | null = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService
        .getUserById(+userId)
        .subscribe((user) => (this.user = user));
    } else {
      this.user = undefined;
    }
  }
}
