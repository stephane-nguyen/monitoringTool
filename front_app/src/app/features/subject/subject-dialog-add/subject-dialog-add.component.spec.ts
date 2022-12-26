import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDialogAddComponent } from './subject-dialog-add.component';

describe('SubjectDialogAddComponent', () => {
  let component: SubjectDialogAddComponent;
  let fixture: ComponentFixture<SubjectDialogAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectDialogAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectDialogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
