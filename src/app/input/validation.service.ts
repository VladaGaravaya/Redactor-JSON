import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  items: object[];
  col: string[];

  validate(json: string): boolean {
    try {
      this.items = JSON.parse(json.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": '));
      if (this.items.length === 0) {
        throw false;
      }

      this.items.forEach((element: object) => {
        if (typeof this.col === 'undefined') {
          this.col = Object.keys(element);
        }
        if (JSON.stringify(this.col) !== JSON.stringify(Object.keys(element)) || JSON.stringify(element) === '{}') {
          throw false;
        }
        Object.values(element).forEach(val => {
          if (!(typeof val === 'string' || typeof val === 'number')) {
            throw false;
          }
        });
      });
    } catch (ex) {
      return false;
    }
    return true;
  }
}
