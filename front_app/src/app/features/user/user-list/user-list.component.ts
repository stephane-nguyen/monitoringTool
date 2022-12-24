import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/model/user.model';
import { UserService } from '../user.service';

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
