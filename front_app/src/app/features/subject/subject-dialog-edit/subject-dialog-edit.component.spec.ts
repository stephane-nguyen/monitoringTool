import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDialogEditComponent } from './subject-dialog-edit.component';

describe('SubjectDialogEditComponent', () => {
  let component: SubjectDialogEditComponent;
  let fixture: ComponentFixture<SubjectDialogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectDialogEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
