import { Component, OnInit, ViewChild } from '@angular/core';
import { AddTreatmentPlansDialogComponent } from '../add-treatment-plans-dialog/add-treatment-plans-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditTreatmentPlansDialogComponent } from '../edit-treatment-plans-dialog/edit-treatment-plans-dialog.component';
import { ShowTreatmentPlanDialogComponent } from '../show-treatment-plan-dialog/show-treatment-plan-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-treatment-plans-list',
  templateUrl: './treatment-plans-list.component.html',
  styleUrls: ['./treatment-plans-list.component.css']
})
export class TreatmentPlansListComponent implements OnInit {
  displayedColumns: string[] = ['planName', 'planDescription', 'actions'];
  flag = 1;
  plans = [];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  pageSize: any = 5;

  constructor(private dialog: MatDialog, ) { 
    
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
    let data = JSON.parse(localStorage.getItem("Plans"));
    if(data)
      this.plans = data;
    this.dataSource.data = this.plans;
  }

  pageEvent(event) {
    console.log(event);
    console.log(this.dataSource)
    this.paginator.pageSize = event.pageSize;
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.plans;
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddTreatmentPlansDialogComponent, {
      width: '60%',
      hasBackdrop: true,
    }); 

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result != undefined) {
        if(this.plans){
          this.plans.push(result);
        }
        else{
          this.plans = JSON.parse(localStorage.getItem("Plans"));
          this.plans.push(result);
        }
        localStorage.setItem("Plans", JSON.stringify(this.plans));
        this.dataSource.data = JSON.parse(localStorage.getItem("Plans"));
        console.log(`Dialog result: ${JSON.stringify(result)}`);
      }
    });
  }

  readMore(i) {
    const dialogRef = this.dialog.open(ShowTreatmentPlanDialogComponent, {
      width: '60%',
      hasBackdrop: true,
      data: this.plans[i]
    }); 
  }
  // deletePlan(i) {
  //   this.plans = JSON.parse(localStorage.getItem("Plans"));
  //   this.plans.splice(i, 1);
  //   localStorage.setItem("Plans", JSON.stringify(this.plans));
  // }

  // editPlan(i) {
  //   const dialogRef = this.dialog.open(EditTreatmentPlansDialogComponent, {
  //     width: '60%',
  //     hasBackdrop: true,
  //     data: this.plans[i]
  //   }); 

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${JSON.stringify(result)}`);
  //   });

  // }

}
