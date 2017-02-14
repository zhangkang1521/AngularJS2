import { Component } from '@angular/core';
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-heroes',
    //providers: [HeroService], // 组件级别，可以被子组件使用
    template: `
        <h2>Heroes</h2>
        <hero-list></hero-list>
    `
})

export class HeroesComponent{}