interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

let persona: Persona = {
    nombre: "Jonathan",
    edad: 19,
    esDesarrollador: true
};

console.log("Persona", persona);

let personas: Persona[] = [
    { nombre: "Jonathan", edad: 66, esDesarrollador: true},
    { nombre: "Kimberly", edad: 25, esDesarrollador: false},
    { nombre: "José", edad: 43, esDesarrollador: true}
];

console.log("Personas:", personas);

interface Sumar {
    (a: number, b: number): number;
}

let sumar: Sumar = (a: number, b: number): number => {
    return a + b;
};

console.log("Resultado de sumar: ", sumar(5, 6));