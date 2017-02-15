import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";
import {HeroesComponent} from "./heroes.component";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule ,
      RouterModule.forRoot([
          {
              path: 'heroes',
              component: HeroesComponent
          },
          {
              path: 'dashboard',
              component: DashboardComponent
          },
          {
              path: 'detail/:id',
              component: HeroDetailComponent
          }
      ])
  ],
  declarations: [
      AppComponent,
      HeroDetailComponent,
      HeroesComponent,
      DashboardComponent
  ],
  providers: [
     HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
