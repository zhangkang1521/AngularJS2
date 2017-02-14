import {HEROES} from "./mock-heroes";
import {Injectable} from "@angular/core";
import {Logger} from "../logger.service";

@Injectable()
export class HeroService {

    constructor(private logger: Logger) {

    }
    getHeroes() {
        this.logger.log('获取Hero!');
        return HEROES;
    }
}