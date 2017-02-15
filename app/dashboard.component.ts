import {Component} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
    // TODO 这里把template和css换到文件中就报错，why?
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl:  'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent{

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {

    }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }
}
