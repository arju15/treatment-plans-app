import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTreatmentPlansDialogComponent } from './add-treatment-plans-dialog.component';

describe('AddTreatmentPlansDialogComponent', () => {
  let component: AddTreatmentPlansDialogComponent;
  let fixture: ComponentFixture<AddTreatmentPlansDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTreatmentPlansDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTreatmentPlansDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
