export const COMPANY = 'JOYU';

export abstract class Car {
    //protected engine: string;
    constructor(protected engine: String) {
        //this.engine = engine;
    }

    abstract speak(): void;

    drive(distance: number = 0) {
        console.log(`A car run ${distance}m powered by ` + this.engine);
    }
}

export default class MotoCar extends Car {
    constructor(engine: string) {
        super(engine);
    }

    speak():void{
        console.log('moto speak');
    }
}

export class Jeep extends Car {
    constructor(engine: string) {
        super(engine);
    }

    drive(distance: number = 100) {
        console.log('Jeep' + this.engine);
        super.drive(distance);
    }
    speak():void{
        console.log('jeep speak');
    }
}
