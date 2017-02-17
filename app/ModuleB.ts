import {ModuleA} from "./ModuleA";

class ModuleB extends ModuleA {
    sayHello() {
        console.log("module b");
    }
}

export {ModuleB as ModuleA}