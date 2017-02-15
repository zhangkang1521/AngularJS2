import 'rxjs/add/operator/switchMap';
import {Component, Input, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Hero} from "./hero";

@Component({
    selector: 'my-hero-detail',
    template: `<div *ngIf="hero">
                    <h2>{{hero.name}} details!</h2>
                    <div><label>id: </label>{{hero.id}}</div>
                    <div>
                        <label>name: </label>
                        <input [(ngModel)]="hero.name" placeholder="name">
                    </div>
                    <button (click)="goBack()">Back</button>
                </div>`
})

export class HeroDetailComponent implements OnInit {
    //@Input()
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
         this.route.params
             .switchMap((params: Params) => this.heroService.getHero(+params['id']))
             .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
}
