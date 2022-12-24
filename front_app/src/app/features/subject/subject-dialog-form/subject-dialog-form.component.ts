import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/shared/model/subject.model';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-subject-dialog-form',
  template: `
    <h1 mat-dialog-title>Edit Subject</h1>
    <form [formGroup]="form">
      <mat-form-field>
        <input
          formControlName="fullName"
          matInput
          placeholder="Subject Name*"
        />
        <mat-error>This field is mandatory.</mat-error>
      </mat-form-field>
    </form>
    <div mat-dialog-actions>
      <!-- <button mat-button (click)="onSave()">Save</button>
      <button mat-button (click)="onCancel()">Cancel</button> -->
    </div>
  `,
  styleUrls: ['./subject-dialog-form.component.css'],
})
export class SubjectDialogFormComponent implements OnInit {
  ngOnInit(): void {}
  form = new FormGroup({
    name: new FormControl(''),
  });
  // form = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  // });
}
