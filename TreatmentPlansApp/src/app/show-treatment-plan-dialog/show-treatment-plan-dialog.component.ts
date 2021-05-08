import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-treatment-plan-dialog',
  templateUrl: './show-treatment-plan-dialog.component.html',
  styleUrls: ['./show-treatment-plan-dialog.component.css']
})
export class ShowTreatmentPlanDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ShowTreatmentPlanDialogComponent>, @Inject(MAT_DIALOG_DATA) public planDetails: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }


}
