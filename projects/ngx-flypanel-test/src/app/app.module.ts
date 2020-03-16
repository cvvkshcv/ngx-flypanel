import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFlypanelModule } from 'ngx-flypanel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFlypanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
