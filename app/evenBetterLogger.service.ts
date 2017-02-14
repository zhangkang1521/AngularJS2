import {Logger} from "./logger.service";
import {Injectable} from "@angular/core";
import {UserService} from "./user.service";

@Injectable()
export class EvenBetterLogger extends Logger {
    constructor(private userService: UserService) {
        super();
    }

    log(message:string) {
        let name = this.userService.user.name;
        super.log(`Message to ${name}: ${message}`);
    }
}
