import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { SubjectService } from 'src/app/shared/services/subject.service';
import { Subject } from 'src/app/shared/model/subject.model';

@Component({
  selector: 'app-subject-dialog-add',
  templateUrl: './subject-dialog-add.component.html',
  styleUrls: ['./subject-dialog-add.component.css'],
})
export class SubjectDialogAddComponent {
  reactiveForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SubjectDialogAddComponent>,
    private subjectService: SubjectService
  ) {
    this.reactiveForm = this.formBuilder.group({
      subjectName: ['', Validators.required],
    });
  }

  saveSubject(): void {
    if (this.reactiveForm.valid) {
      const valueFromInput = this.reactiveForm.get('subjectName')!.value;
      const subject: Subject = {
        idSubject: this.getUniqueId(),
        nameSubject: valueFromInput,
      };
      if (this.isSubjectNameUnique(valueFromInput)) {
        this.subjectService.addSubject(subject).subscribe();
        this.reactiveForm.reset();
        this.dialogRef.close();
      } else {
        console.log('this subject has already been added');
      }
    }
  }

  closePopUp(): void {
    this.dialogRef.close();
  }

  isSubjectNameUnique(inputValue: string | null): boolean {
    let isUnique = true;
    this.subjectService.getSubjectList().subscribe((subjects) => {
      if (subjects.some((subject) => subject.nameSubject === inputValue)) {
        isUnique = false;
        console.log('not unique subject name');
      }
    });
    return isUnique;
  }

  getUniqueId(): number {
    let id = this.getRandomNumber();
    while (!this.isIdUnique(id)) {
      id = this.getRandomNumber();
    }
    return id;
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
  isIdUnique(id: number): boolean {
    let isUnique = true;
    this.subjectService.getSubjectList().subscribe((subjects) => {
      if (subjects.some((subject) => subject.idSubject === id)) {
        isUnique = false;
      }
    });
    return isUnique;
  }
}
