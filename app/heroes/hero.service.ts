import {HEROES} from "./mock-heroes";
import {Injectable} from "@angular/core";
import {Logger} from "../logger.service";

@Injectable()
export class HeroService {

    constructor(private logger: Logger, private isAuthorized: boolean) {

    }
    getHeroes() {
        this.logger.log('获取Hero!');
        console.log("isAuthorized:"+this.isAuthorized);
        return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
    }
}