import {Component, ViewContainerRef} from '@angular/core';
import {NgLayer} from "../ng2-layer";

@Component({
  selector: 'my-app',
  template: `<button (click)="alert();">alert</button>`
})
export class AppComponent {
  constructor(private ly:NgLayer, private vcRef:ViewContainerRef){

  }

  alert() {
    alert('xx');
  }
}
