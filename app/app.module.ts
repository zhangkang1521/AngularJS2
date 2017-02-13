import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ClickMeComponent } from './click-me.component';
import { ClickMe2Component } from './click-me2.component';
import { KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4 } from './keyup.components';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
				  ClickMeComponent,
				  ClickMe2Component,
				  KeyUpComponent_v1,
				  KeyUpComponent_v2,
				  KeyUpComponent_v3,
				  KeyUpComponent_v4
				],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
