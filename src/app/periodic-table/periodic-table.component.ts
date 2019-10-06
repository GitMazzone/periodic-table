import { Component, OnInit } from '@angular/core';

import { Element } from '../element';
import { ElementService } from '../element.service';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  elements: Element[];
  selectedElement: Element;

  constructor(private elementService: ElementService) { }

  ngOnInit() {
    this.getElements();
  }

  getElements(): void {
    this.elementService.getElements()
      .subscribe(elements => this.elements = elements);
  }

  getElementsInRange(start: number, end: number) {
    return this.elements.filter(x => x.atomicNumber >= start && x.atomicNumber <= end);
  }

  onSelect(element: Element): void {
    this.selectedElement = element;
  }

}
