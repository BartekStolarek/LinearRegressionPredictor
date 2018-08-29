import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { GraphComponent } from './components/graph/graph.component';
import { PredictionComponent } from './components/prediction/prediction.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    GraphComponent,
    PredictionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
