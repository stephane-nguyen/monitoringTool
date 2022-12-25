import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Subject } from 'src/app/shared/model/subject.model';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { SubjectDialogFormComponent } from '../subject-dialog-form/subject-dialog-form.component';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
})
export class SubjectListComponent implements OnInit {
  subjects?: Subject[];
  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    this.subjectService
      .getSubjectList()
      .subscribe((subjects) => (this.subjects = subjects));
  }

  deleteSubject(subject: Subject) {
    this.subjectService
      .deleteSubjectById(subject.idSubject)
      .subscribe(() => this.goToSubjectList());
  }

  updateSubject(subject: Subject) {}

  addSubject() {}

  openPopUp1() {
    const popUp = this.matDialog.open(SubjectDialogFormComponent, {
      width: '40%',
      height: '190px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      // data: subject,
    });

    popUp.afterClosed().subscribe((itemSubject) => {
      if (itemSubject) {
        this.subjectService.addSubject(itemSubject);
      }
    });
  }

  openPopUp(subject: Subject) {
    const popUp = this.matDialog.open(SubjectDialogFormComponent, {
      width: '40%',
      height: '190px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      // data: subject,
    });

    popUp.afterClosed().subscribe((itemSubject) => {
      if (itemSubject) {
        subject.nameSubject = itemSubject;
        this.subjectService.updateSubject(subject);
      }
    });
  }

  goToSubjectList() {
    this.router.navigate(['/subject']);
  }
}
