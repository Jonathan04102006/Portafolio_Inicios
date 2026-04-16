import { Component, computed, signal } from "@angular/core";
import { UpperCasePipe } from "@angular/common";

@Component({
    templateUrl: './hero-page.component.html',
    imports: [UpperCasePipe],
})
export class HeroPageComponent {
    name = signal('Iroman');
    age = signal(19);

    heroDescription = computed(() => {
        const description = `${this.name()} - ${this.age()}`;
        return description;
    });

    capitalizedName = computed(() => this.name().toUpperCase());

    changeHero() {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    changeAge() {
        this.age.set(60);
    }

    resetForm(){
        this.name.set('Iroman');
        this.age.set(19);
    }
}