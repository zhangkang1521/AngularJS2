import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ClickMeComponent } from './click-me.component';
import { ClickMe2Component } from './click-me2.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
				  ClickMeComponent,
				  ClickMe2Component
				],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
