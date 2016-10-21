﻿import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: './app/templates/app.component.html'
})
export class AppComponent {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    }
}

export class Hero {
    id: number;
    name: string;
}