import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { IUser } from '../../../shared/model/IUser';

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
              <mat-card-subtitle>teacher</mat-card-subtitle>
            </mat-card-title-group>
          </mat-card-header>
          <mat-card-content> ID: {{ user?.id }} </mat-card-content>
          <mat-card-content> Email: {{ user?.email }} </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
})
export class UserDetailComponent implements OnInit {
  user?: IUser;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const userId: String | null = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService
        .getUserById(+userId)
        .subscribe((user) => (this.user = user));
    } else {
      this.user = undefined;
    }
  }
}
