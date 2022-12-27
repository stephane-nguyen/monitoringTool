import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { map, tap } from 'rxjs';

import { SubjectService } from 'src/app/shared/services/subject.service';
import { Subject } from 'src/app/shared/model/subject.model';

@Component({
  selector: 'app-subject-dialog-edit',
  templateUrl: './subject-dialog-edit.component.html',
  styleUrls: ['./subject-dialog-edit.component.css'],
})
export class SubjectDialogEditComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SubjectDialogEditComponent>,
    private subjectService: SubjectService
  ) {
    this.reactiveForm = this.formBuilder.group({
      subjectName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // this.retrieveDataFromAddDialogForm = this.data;
  }

  updateSubject() {
    if (this.reactiveForm.valid) {
      const valueFromInput = this.reactiveForm.get('subjectName')!.value;
      const subject: Subject = {
        idSubject: this.data.subject.idSubject,
        nameSubject: valueFromInput,
      };
      this.subjectService.updateSubject(subject).subscribe();
      this.reactiveForm.reset();
      this.dialogRef.close();
      console.log('47 ' + valueFromInput);
      console.log(subject.nameSubject);
    }
  }

  closePopUp() {
    this.dialogRef.close();
  }
}
