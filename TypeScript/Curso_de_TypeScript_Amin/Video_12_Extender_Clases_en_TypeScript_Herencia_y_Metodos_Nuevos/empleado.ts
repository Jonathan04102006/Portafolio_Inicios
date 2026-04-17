import { Persona } from "./index";

export class Empleado extends Persona {
    public puesto: string;

    constructor ( nombre: string, edad: number, esDesarrollador: boolean, puesto: string ) {
        super ( nombre, edad, esDesarrollador );
        this.puesto = puesto;
    }

    public saludar(): string {
        return `${super.saludar()} Trabajo como ${this.puesto}`;
    }

    public obtenerInfo(): string {
        return `Tengo ${this.obtenerEdad()} años y trabajo como ${this.puesto}`;
    }
}