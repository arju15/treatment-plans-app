import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentPlansListComponent } from './treatment-plans-list.component';

describe('TreatmentPlansListComponent', () => {
  let component: TreatmentPlansListComponent;
  let fixture: ComponentFixture<TreatmentPlansListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentPlansListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentPlansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
