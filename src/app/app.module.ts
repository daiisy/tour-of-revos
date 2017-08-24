import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //<-- NGModel lives here

import { AppComponent } from './app.component';

import { RevoDetailComponent } from './revo-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    RevoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
