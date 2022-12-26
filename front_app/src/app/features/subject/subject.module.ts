import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectDialogAddComponent } from './subject-dialog-add/subject-dialog-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SubjectDialogEditComponent } from './subject-dialog-edit/subject-dialog-edit.component';

@NgModule({
  declarations: [
    SubjectListComponent,
    SubjectDialogAddComponent,
    SubjectDialogEditComponent,
  ],
  imports: [
    SubjectRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class SubjectModule {}
