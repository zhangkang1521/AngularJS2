import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {HeroListComponent} from "./heroes/hero-list.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroService} from "./heroes/hero.service";
import {Logger} from "./logger.service";
import {BetterLogger} from "./betterLogger.service";
import {EvenBetterLogger} from "./evenBetterLogger.service";
import {UserService} from "./user.service";
import {heroServiceProvider} from "./heroes/hero.service.provider";


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
      AppComponent,
      HeroListComponent,
      HeroesComponent
  ],
  // 注册服务提供者，可以在整个应用中使用
  providers: [
      //HeroService,
      heroServiceProvider,
      UserService,
     { provide: Logger, useClass: EvenBetterLogger }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
