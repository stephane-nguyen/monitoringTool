import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Subject } from 'src/app/shared/model/subject.model';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { SubjectDialogAddComponent } from '../subject-dialog-add/subject-dialog-add.component';
import { SubjectDialogEditComponent } from '../subject-dialog-edit/subject-dialog-edit.component';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
})
export class SubjectListComponent implements OnInit {
  subjects?: Subject[];
  subject?: Subject;
  constructor(
    private matDialog: MatDialog,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects() {
    this.subjectService.getSubjectList().subscribe((subjects) => {
      this.subjects = subjects;
    });
  }

  deleteSubject(subject: Subject) {
    this.subjectService
      .deleteSubjectById(subject.idSubject)
      .subscribe(() => this.getSubjects());
  }

  updateSubject(subject: Subject) {}

  openPopUpAddSubject() {
    const popUp = this.matDialog.open(SubjectDialogAddComponent, {
      width: '40%',
      height: '190px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      // data: {subject:this.subject},
    });

    popUp.afterClosed().subscribe((itemSubject) => {
      if (itemSubject) {
        this.subjectService.addSubject(itemSubject);
      }
    });
  }

  openPopUpEditSubject(subject: Subject) {
    const popUp = this.matDialog.open(SubjectDialogEditComponent, {
      width: '40%',
      height: '190px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: { subject: this.subject },
    });

    popUp.afterClosed().subscribe((updatedSubject) => {
      if (updatedSubject) {
        subject.nameSubject = updatedSubject;
        this.subjectService.updateSubject(updatedSubject).subscribe(() => {
          this.subject = updatedSubject;
          this.getSubjects();
        });
      } else {
        console.log('bruh');
      }
    });
  }
}
