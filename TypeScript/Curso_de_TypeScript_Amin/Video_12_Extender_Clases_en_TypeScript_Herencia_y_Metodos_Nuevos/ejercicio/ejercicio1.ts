import { Persona } from "./index";

export class Estudiante extends Persona {
    public carrera: string;

    constructor ( nombre: string, edad: number, esDesarrollador: boolean, carrera: string) {
        super( nombre, edad, esDesarrollador );
        this.carrera = carrera;
    }

    public saludar(): string {
        return `Hola, mi nombre es: ${this.nombre} y tengo ${this.edad} años`;
    }

    public mostrarCarrera(): string {
        return `Estoy estudiando la carrera de ${this.carrera}`;
    }
}

let estudiante = new Estudiante("Jonathan", 19, true, "Ingeniería en Sistemas");

console.log(estudiante.saludar());
console.log(estudiante.mostrarCarrera());