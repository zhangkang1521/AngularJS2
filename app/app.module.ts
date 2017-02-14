import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {HeroListComponent} from "./heroes/hero-list.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroService} from "./heroes/hero.service";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
      AppComponent,
      HeroListComponent,
      HeroesComponent
  ],
  // 注册服务提供者，可以在整个应用中使用
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
