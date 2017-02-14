import {HEROES} from "./mock-heroes";
import {Injectable} from "@angular/core";

@Injectable()
export class HeroService {
    getHeroes() {
        return HEROES;
    }
}