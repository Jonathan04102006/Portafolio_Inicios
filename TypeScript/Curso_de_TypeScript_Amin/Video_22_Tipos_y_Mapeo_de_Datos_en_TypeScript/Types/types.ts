type PersonaType = {
    nombre: string;
    edad: number;
};

type Parcial<T> = {
    [K in keyof T]?: T[K];
};

/*
El mapped type de PersonaParcial es:
PersonaParcial =
{
nombre?: string;
edad?: number;
}
*/

type SoloLectura<T> = {
    readonly [K in keyof T]: T[K];
};

type PersonaSoloLectura = SoloLectura<PersonaType>;
/*
El mapped type de PersonaSoloLectura es:
PersonaSoloLectura =
{
readonly nombre: string;
readonly edad: number;
}
*/

let persona : PersonaSoloLectura = {
    nombre: "Ariel",
    edad: 19
};

console.log(persona.nombre);

// Template literal types
type Variantes = "pequeño" | "mediano" | "grande";
type ClasesCSS = `boton-${Variantes}`;

// let botonPequeño: ClasesCSS = "boton-pequeño";
// let botonMediano: ClasesCSS = "boton-mediano";
// let botonGrande: ClasesCSS = "boton-grande";

// Condicional types
type EsNumero<T> = T extends number ? true : false;

function esNumero<T>(valor: T): EsNumero<T> {
    return (typeof valor === 'number') as EsNumero<T>;
}

const resultado1 = esNumero(42);
const resultado2 = esNumero("Hello");

console.log(resultado1);
console.log(resultado2);