import { Component, OnInit, Input } from '@angular/core';

import { Element } from '../element';

@Component({
  selector: 'app-element-tile',
  templateUrl: './element-tile.component.html',
  styleUrls: ['./element-tile.component.css']
})
export class ElementTileComponent implements OnInit {

  @Input() element: Element;

  constructor() { }

  ngOnInit() { }

}
