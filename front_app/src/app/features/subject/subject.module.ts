import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import { SubjectDialogFormComponent } from './subject-dialog-form/subject-dialog-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SubjectListComponent,
    SubjectAddComponent,
    SubjectDialogFormComponent,
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
  ],
})
export class SubjectModule {}
