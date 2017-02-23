import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><simple-demo></simple-demo>`
})
export class AppComponent { name = 'Angular2,ss'; }
