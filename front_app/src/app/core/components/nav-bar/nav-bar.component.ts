import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/shared/model/IUser';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  user: IUser | undefined;
  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userId: String | null = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService
        .getUserById(+userId)
        .subscribe((user) => (this.user = user));
    } else {
      this.user = undefined;
    }
  }

  logout() {
    //TO DO
    this.goToLoginPage();
  }
  goToLoginPage() {
    this.router.navigate(['/login']);
  }
  goToInformationPage() {
    this.router.navigate(['/user', this.user?.id]);
  }
}
