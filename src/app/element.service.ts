import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Element } from './element';
import { PERIODIC_ELEMENTS } from './periodic-elements';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  elements: Element[] = [];

  constructor() { }

  getElements(): Observable<Element[]> {
    for (const element of PERIODIC_ELEMENTS) {
      this.elements.push(element);
    }
    return of(PERIODIC_ELEMENTS);
  }

  getElementsInRange(start: number, end: number): Observable<Element[]> {
    for (let i = start - 1; i < end - 1; i++) {
      if (PERIODIC_ELEMENTS[i].atomicNumber >= start && PERIODIC_ELEMENTS[i].atomicNumber <= end) {
        this.elements.push(PERIODIC_ELEMENTS[i]);
      }
    }
    return of(PERIODIC_ELEMENTS);
  }

}
