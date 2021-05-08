import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
    imports: [
        MatFormFieldModule, 
        MatInputModule, 
        MatDialogModule,
        MatButtonModule, 
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatTableModule,
        CdkTableModule,
        MatPaginatorModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatTableModule,
        CdkTableModule,
        MatPaginatorModule
    ]
})
export class MaterialModule { }