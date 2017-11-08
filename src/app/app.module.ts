import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
定义AppModule，这个根模块会告诉Angular如何组装该应用。 目前，它只声明了AppComponent。 稍后它还会声明更多组件。*/
