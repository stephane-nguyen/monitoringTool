import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserDetailComponent, UserListComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, UserRoutingModule],
})
export class UserModule {}
