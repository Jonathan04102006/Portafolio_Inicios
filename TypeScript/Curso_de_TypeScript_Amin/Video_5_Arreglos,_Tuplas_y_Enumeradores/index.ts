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

//Tupla
let persona: [string, number, boolean];
persona = ["Jona", 19, true];

console.log("Persona: ", persona);

let personasTupla: [string, number, boolean][] = [];

personasTupla.push(["Ariel", 19, true]);
personasTupla.push(["Jorge", 39, false]);
personasTupla.push(["Pedro", 21, false]);

personasTupla.forEach(persona =>{
    console.log("Persona: ", persona);

    let nombre: string = persona[0];
    let edad: number = persona[1];
    let esDesarrollador: boolean = persona[2];

    console.log("Nombre: ", nombre);
    console.log("Edad: ", edad);
    console.log("esDesarrollador: ", esDesarrollador);
})

// Enumerados
enum DiaDeLaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let dia: DiaDeLaSemana = DiaDeLaSemana.Martes;
console.log("Día: ", DiaDeLaSemana[dia]);