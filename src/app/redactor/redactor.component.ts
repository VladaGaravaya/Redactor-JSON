import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-redactor',
  templateUrl: './redactor.component.html',
  styleUrls: ['./redactor.component.css']
})
export class RedactorComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  items: object[];
  columns: string[];

  addItem(): void {
    this.itemsService.addItem();
  }

  deleteItem(item: object): void {
    this.itemsService.deleteItem(item);
  }

  changeItem(item: object, col: string): void {
    this.itemsService.changeItem(item, col);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  writeJSON(): void {
    const a = document.getElementsByTagName('a')[0];
    const csvData = 'data:application/txt;charset=utf-8,' + this.itemsService.unload();
    a.href = csvData;
    a.target = '_blank';
    a.download = 'data.json';
  }

  toCSV(): string {
    let csvString = this.columns.join(',') + '\r\n';
    let array = [];
    this.items.forEach( item => {
      this.columns.forEach(col => {
        array.push(item[col]);
      });
      csvString += (array.join(',') + '\r\n');
      array = [];
    });
    return csvString;
  }

  writeCSV(): void {
    const a = document.getElementsByTagName('a')[1];
    const csv = this.toCSV();
    const csvData = 'data:application/txt;charset=utf-8,' + csv;
    a.href = csvData;
    a.target = '_blank';
    a.download = 'data.csv';
  }

  ngOnInit() {
    this.items = this.itemsService.items;
    this.columns = this.itemsService.columns;
  }
}
