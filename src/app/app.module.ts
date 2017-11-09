import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HeroService }         from './hero.service';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent} from "./dashboard.component";


import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,//declarations数组包含应用中属于该模
    // 块的组件、管道和指令的列表。 组件在被其它组件引用之前必须先在一个模块中声明过。 这个模块只声明了两个组件：AppComponent 和 HeroDetailComponent。
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule
  ],
  providers: [
    HeroService //添加HeroService到AppModule的providers数组中，因为我们的每一个视图都需要它。
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
定义AppModule，这个根模块会告诉Angular如何组装该应用。 目前，它只声明了AppComponent。 稍后它还会声明更多组件。*/
