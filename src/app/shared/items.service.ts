import { Injectable } from '@angular/core';
import { DialogComponent } from '../redactor/dialog/dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreationNemItemComponent } from '../redactor/creation-nem-item/creation-nem-item.component';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) { }

  items: object[];
  columns: string[];

  unload() {
    const unloadData: string[] = [];
    let elem: string[] = [];

    if (typeof this.items !== 'undefined') {
      this.items.forEach(element => {
        this.columns.forEach(col => {
            elem.push(`${col}:"${element[col]}"`);
        });
        unloadData.push('{' + elem.join(',') + '}') ;
        elem = [];
      });
      return `[${unloadData.join(',')}]`;
    }
  }

  addItem(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = this.items[0];
    this.dialog.open(CreationNemItemComponent, dialogConfig).afterClosed().subscribe(result => {
      const error = Object.values(result).some( value => (value === '' || value === ' '));
      if (result !== '' && !error) {
        this.items.push(result);
      } else {
        this.openSnackBar('Input correct item.');
      }
    });
  }

  deleteItem(item: object): void {
    let index: number;

    this.items.forEach(element => {
      if (JSON.stringify(element) === JSON.stringify(item)) {
          index = this.items.indexOf(element);
      }
    });

    this.items.splice(index, 1);
    this.openSnackBar('Deleted.');
  }

  openSnackBar(mes: string) {
    this.snackBar.open(mes, 'OK', {
      duration: 2500,
    });
  }

  changeItem(item: object, col: string): void {
    this.items.forEach(element => {
      if (JSON.stringify(element) === JSON.stringify(item)) {
        this.dialog.open(DialogComponent, { disableClose : true}).afterClosed().subscribe(result => {
          if (typeof result !== 'undefined' && result !== '') {
            element[col] = result;
          }
        });
      }
    });
  }
}
