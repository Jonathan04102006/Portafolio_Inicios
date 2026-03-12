import { Persona1 } from "./index";

export class Empleado extends Persona1 {
    public puestoDeEmpleado: string;

    constructor ( nombre: string, edad: number, esDesarrollador: boolean, puestoDeEmpleado: string ) {
        super( nombre, edad, esDesarrollador );
        this.puestoDeEmpleado = puestoDeEmpleado;
    }

    public saludar(): string {
        const saludoBase = super.saludar();
        return `${saludoBase} Trabajo como ${this.puestoDeEmpleado}`;
    }
}

let empleado = new Empleado("Ariel", 19, true, "Freelancer");

console.log(empleado.saludar());