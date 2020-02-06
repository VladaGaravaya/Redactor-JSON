import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatListModule, MatCardModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSnackBarModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
imports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    CdkTableModule,
    MatSnackBarModule,
    MatDialogModule,
    DragDropModule
],
exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    CdkTableModule,
    MatSnackBarModule,
    MatDialogModule,
    DragDropModule
]
})
export class MaterialAppModule { }
