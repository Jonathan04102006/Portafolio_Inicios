import { Persona } from "./index";

export class Empleado extends Persona {
    public puesto: string;

    constructor ( nombre: string, edad: number, puesto: string ) {
        super( nombre, edad );
        this.puesto = puesto;
    }

    public mostrarInformacion(): String{
        return `Hola, tengo ${this.edad}`;
    }
}

const infoPersonal = new Empleado("Jonathan", 19, "Resident");

console.log(`Hola: ${infoPersonal.mostrarInformacion()}`);