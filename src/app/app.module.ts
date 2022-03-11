import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
//help angular under that we are creating a module
@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
//specify the that we are using the browser platform
  imports: [
    BrowserModule
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
//combine all your here