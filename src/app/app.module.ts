import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { ElementTileComponent } from './element-tile/element-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    PeriodicTableComponent,
    ElementTileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
