import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTreatmentPlansDialogComponent } from './edit-treatment-plans-dialog.component';

describe('EditTreatmentPlansDialogComponent', () => {
  let component: EditTreatmentPlansDialogComponent;
  let fixture: ComponentFixture<EditTreatmentPlansDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTreatmentPlansDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTreatmentPlansDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
