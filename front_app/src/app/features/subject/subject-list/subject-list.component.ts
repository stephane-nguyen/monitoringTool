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
    private dialog: MatDialog,
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

  // openDialog(subject: Subject) {
  //   const dialogRef = this.dialog.open(SubjectDialogFormComponent, {
  //     data: subject,
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       subject.nameSubject = result;
  //       this.subjectService.updateSubject(subject);
  //     }
  //   });
  // }

  populateForm(subject: Subject) {}

  goToSubjectList() {
    this.router.navigate(['/subject']);
  }
}
