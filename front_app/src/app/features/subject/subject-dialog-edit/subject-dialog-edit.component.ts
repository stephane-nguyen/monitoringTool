import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { map, tap } from 'rxjs';

import { SubjectService } from 'src/app/shared/services/subject.service';
import { Subject } from 'src/app/shared/model/subject.model';

@Component({
  selector: 'app-subject-dialog-edit',
  templateUrl: './subject-dialog-edit.component.html',
  styleUrls: ['./subject-dialog-edit.component.css'],
})
export class SubjectDialogEditComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<SubjectDialogEditComponent>,
    private subjectService: SubjectService
  ) {}

  retrieveDataFromAddDialogForm: any;
  private _checkUniqueSubjectName = true;
  reactiveForm = new FormGroup({
    subjectName: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    // this.retrieveDataFromAddDialogForm = this.data;
  }

  closePopUp() {
    this.ref.close();
  }

  updateSubject(subject: Subject) {
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.getRawValue());
      if (this._checkUniqueSubjectName) {
        console.log(
          '0 subject with the same name, it should use addsubject method'
        );
        this.subjectService.updateSubject(subject);
        this.closePopUp();
      }
    }
  }
}
