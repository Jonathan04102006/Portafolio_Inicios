export class Persona {
    public nombre: string; // Public:accesible desde calquier parte.
    public edad: number;
    /* protected edad: number;  Protected: accesible desde la clase y sus subclases. */
    private esDesarrollador: boolean; // Private: accesible solo de la clase.

    constructor( nombre: string, edad: number, esDesarrollador: boolean ) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }

    public saludar(): string { // Public method 
        this.esDev();
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }

    public obtenerEdad(): number { // Protected number
        return this.edad;
    }

    private esDev(): boolean { // esDev
        return this.esDesarrollador;
    }
}