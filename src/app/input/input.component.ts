import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {

  constructor(private itemsService: ItemsService, private validationService: ValidationService) { }

  data = '';
  routerLink = '/redactor';

  ngOnInit() {
    this.data = this.itemsService.unload();
  }

  loading(data: string) {
    if (this.validationService.validate(data)) {
        this.routerLink = '/redactor';
        this.itemsService.items = this.validationService.items;
        this.itemsService.columns = this.validationService.col;
    } else {
      this.itemsService.openSnackBar('Input correct JSON.');
      this.routerLink = '/';
    }
  }

  read() {
    const file = (document.getElementById('file') as HTMLInputElement).files[0];
    if ( typeof file !== 'undefined') {
      if (file.size >= 256 * 1024) {
        if (!confirm('File size is ' + Math.round(file.size / 1024) + 'kBytes! Really want to read it?')) {
          return;
        }
      }
      const reader = new FileReader();
      reader.onload = () => {

        this.loading((reader.result).toString());
        this.data = (reader.result).toString().replace(/\r?\n/g, '');

      };
      reader.readAsText(file);
    }
  }
}
