export class Persona {
    public nombre: string;
    public edad: number;
    private esDesarrollador: boolean;

    constructor ( nombre: string, edad: number, esDesarrollador: boolean ) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }

    public saludar(): string {
        this.esDev
        return `Hola, mi nombre es: ${this.nombre} y tengo ${this.edad} años.`;
    }

    public obtenerEdad(): number {
        return this.edad;
    }

    private esDev(): boolean {
        return this.esDesarrollador;
    }

}