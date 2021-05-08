import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-treatment-plans-dialog',
  templateUrl: './edit-treatment-plans-dialog.component.html',
  styleUrls: ['./edit-treatment-plans-dialog.component.css']
})
export class EditTreatmentPlansDialogComponent implements OnInit {
  form: FormGroup;
 
  constructor(@Inject(MAT_DIALOG_DATA) public planDetails: any, private fb: FormBuilder, private dialogRef: MatDialogRef<EditTreatmentPlansDialogComponent>) { 
    this.form = fb.group({
      treatmentPlanName: new FormControl(planDetails.treatmentPlanName, Validators.required),
      planDescription: new FormControl(planDetails.planDescription, Validators.required)
    });
  }

  ngOnInit(): void {
  }
  
  close() {
    this.dialogRef.close();
  }

  editPlan() {
    this.dialogRef.close(this.form.value);
  }

}
