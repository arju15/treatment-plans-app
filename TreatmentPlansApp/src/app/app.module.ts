import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./shared/material.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreatmentPlansListComponent } from './treatment-plans-list/treatment-plans-list.component';
import { AddTreatmentPlansDialogComponent } from './add-treatment-plans-dialog/add-treatment-plans-dialog.component';
import { CommonModule } from '@angular/common';
import { EditTreatmentPlansDialogComponent } from './edit-treatment-plans-dialog/edit-treatment-plans-dialog.component';
import { ShowTreatmentPlanDialogComponent } from './show-treatment-plan-dialog/show-treatment-plan-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TreatmentPlansListComponent,
    AddTreatmentPlansDialogComponent,
    EditTreatmentPlansDialogComponent,
    ShowTreatmentPlanDialogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
