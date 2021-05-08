import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTreatmentPlanDialogComponent } from './show-treatment-plan-dialog.component';

describe('ShowTreatmentPlanDialogComponent', () => {
  let component: ShowTreatmentPlanDialogComponent;
  let fixture: ComponentFixture<ShowTreatmentPlanDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTreatmentPlanDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTreatmentPlanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
