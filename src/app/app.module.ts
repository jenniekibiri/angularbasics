import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { every } from 'rxjs';

import { AppComponent } from './app.component';
//help angular under that we are creating a module
@NgModule({
  declarations: [
    AppComponent
  ],
//specify the that we are using the browser platform
  imports: [
    BrowserModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
//combine all your here