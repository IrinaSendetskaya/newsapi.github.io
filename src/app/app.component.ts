import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>Choose some news:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Some news {{name}}!</h1>`
})
export class AppComponent { 
    name= '';
}