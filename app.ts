import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

@Component({
    selector: 'hello-world',
    template: `
        <ul>
            <li *ngFor="#name of names">Hello {{name}}</li>
        </ul>
    `
})
class HelloWorld {
    names: string[];
    
    constructor() {
        this.names = ['Chris', 'PetraAKAWeversiep', 'Ernst8', 'Hans', 'Klaasjan', 'Arjen', 'Marleen', 'Sjoerd']
        this.names.push('Klaasjan @ '+new Date())
    }
}

bootstrap(HelloWorld)
