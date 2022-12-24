import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDialogFormComponent } from './subject-dialog-form.component';

describe('SubjectDialogFormComponent', () => {
  let component: SubjectDialogFormComponent;
  let fixture: ComponentFixture<SubjectDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
