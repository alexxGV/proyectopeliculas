import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { ListapeliculasComponent } from './components/listapeliculas/listapeliculas.component';
import { SelectpeliculasComponent } from './components/selectpeliculas/selectpeliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListapeliculasComponent,
    SelectpeliculasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
