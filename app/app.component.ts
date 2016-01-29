import {Component} from 'angular2/core';

@Component ({
  selector: 'hello-world',
  template: `
    <ul>
      <li *ngFor="#name of names">Hello {{name}}</li>
    </ul>`
})

export class HelloWorld {
  names: string[];

  constructor() {
    this.names = ['Chris', 'Petra', 'Ernst8', 'Hans', 'Klaasjan', 'Arjen', 'Marleen', 'Sjoerd', 'Rogier']
    this.names.push('Klaasjan @ '+new Date())
    this.names.push('Diederik Refactores')
  }
};
