import {Component, OnInit} from '@angular/core';
//import {Car, MotoCar, Jeep, COMPANY as CMP} from "./class-test";
//import * as car from "./class-test";
import c from "./class-test";
import validate from "./nameServiceValidate"
import name from "./constantService"
import {ModuleA} from "./ModuleB";



@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent implements OnInit {

    name = 'Angular2,ss';

    ngOnInit(): void {
        let userArray: UserArray;
        userArray = ['a', 'b', 'c'];
        console.log(userArray["1"]);
        let userObject: UserObject;
        //userObject = {"name1": "zk", "name2": "zy"};
        userObject = ['a', 'b', 'c'];
        console.log(userObject["2"]);
    };

}

interface FullName {
    firstName: string;
    secondName?: string;
}


function printLabel(name: FullName) {
    console.log(name.firstName+", "+name.secondName);
}

interface Encrypt {
    (val:string, salt:string):string
}

let md5: Encrypt;

md5 = function (val:string) {
    return val;
}

interface UserArray {
    [index: number]: string;
}

interface UserObject {
    [index: string]: number;
}




