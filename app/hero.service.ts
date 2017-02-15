import {Injectable} from "@angular/core";
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";
// import Promise = Promise;

@Injectable()
export class HeroService {
    // getHeroes(): Hero[]{
    //     return HEROES;
    // }
    getHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 5000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }

}
