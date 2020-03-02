import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HexagonDataComponent } from './components/hexagon-data/hexagon-data.component';
import { ViewComponent } from './components/hexagon-data/view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    HexagonDataComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
