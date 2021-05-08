import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-treatment-plans-dialog',
  templateUrl: './add-treatment-plans-dialog.component.html',
  styleUrls: ['./add-treatment-plans-dialog.component.css']
})
export class AddTreatmentPlansDialogComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;

  constructor(fb: FormBuilder, private dialogRef: MatDialogRef<AddTreatmentPlansDialogComponent>, ) { 
    this.form = fb.group({
      treatmentPlanName: new FormControl('', Validators.required),
      planDescription: new FormControl('', Validators.required)
  });
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  addPlan() {
    this.submitted = true;
    if(this.form.valid)
      this.dialogRef.close(this.form.value);
      this.submitted=false;
  }

}
