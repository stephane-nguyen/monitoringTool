import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { map, tap } from 'rxjs';

import { SubjectService } from 'src/app/shared/services/subject.service';
import { Subject } from 'src/app/shared/model/subject.model';

@Component({
  selector: 'app-subject-dialog-add',
  templateUrl: './subject-dialog-add.component.html',
  styleUrls: ['./subject-dialog-add.component.css'],
})
export class SubjectDialogAddComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<SubjectDialogAddComponent>,
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

  saveSubject() {
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.getRawValue());
      if (this._checkUniqueSubjectName) {
        console.log(
          '0 subject with the same name, it should use addsubject method'
        );
        this.subjectService.addSubject(this.reactiveForm);
        this.closePopUp();
      }
    }
  }

  checkValue(inputValue: String | null): void {
    this.subjectService
      .getSubjectList()
      .pipe(
        //transform the emitted Subject[] array into a new array that only contains the matching Subject objects
        map((subjects: Subject[]) =>
          subjects.filter(
            (subject: Subject) => subject.nameSubject === inputValue
          )
        ),
        tap((subjects: Subject[]) => {
          if (subjects.length > 0) {
            this._checkUniqueSubjectName = false;
            console.log('not unique subject name');
          }
        })
      )
      .subscribe();
  }
}
