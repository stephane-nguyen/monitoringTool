import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-subject-dialog-form',
  templateUrl: './subject-dialog-form.component.html',
  styleUrls: ['./subject-dialog-form.component.css'],
})
export class SubjectDialogFormComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private subjectService SubjectService,
    private ref: MatDialogRef<SubjectDialogFormComponent>
  ) {}

  retrieveDataFromAddDialogForm: any;

  ngOnInit(): void {
    this.retrieveDataFromAddDialogForm = this.data;
  }

  closePopUp() {
    this.ref.close();
  }

  reactiveForm = new FormGroup({
    subjectName: new FormControl('', Validators.required),
  });

  saveSubject() {
    if (this.reactiveForm.valid) {
      this.subjectService.saveSubject(this.reactiveForm.getRawValue()).subscribe(result => {

      })
    }
  }
  // form = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  // });
}
