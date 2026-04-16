import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
    name = signal('Iroman');

    age = signal(19);

    getHeroDescription() {
        throw new Error('Method not implement.')
    }

    changeHero() {
        throw new Error('Method not implement.');
    }

    resetForm(){
        throw new Error('Method not implement.');
    }
}