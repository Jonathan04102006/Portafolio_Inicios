let nombres: string[] = ["Jonathan", "Yamileth", "Sara"];
console.log(`Nombres: ${nombres}`);

let numeros: number[] = [12, 56, 78, 90];
console.log(`Edades: ${numeros}`);

let mixto: any[] = ["Jonathan", 14, true];
console.log(`Mixto: ${mixto}`);

let boleanos: boolean[] = [true, false, false, true];
console.log(`Bolenanos: ${boleanos}`);

interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
};

let personas: Persona[] = [
    { nombre: "Jonathan", edad: 66, esDesarrollador: true},
    { nombre: "Kimberly", edad: 25, esDesarrollador: false},
    { nombre: "José", edad: 43, esDesarrollador: true}
];

personas.push({ nombre: "Karla", edad: 19, esDesarrollador: true});

console.log("Personas:", personas);