import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from '../../../shared/model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {}

  userList?: User[];

  ngOnInit(): void {
    this.userService
      .getUserList()
      .subscribe((userList) => (this.userList = userList));
  }
}
