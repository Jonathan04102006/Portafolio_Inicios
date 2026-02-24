var nombres = ["Jonathan", "Yamileth", "Sara"];
console.log("Nombres: ".concat(nombres));
var numeros = [12, 56, 78, 90];
console.log("Edades: ".concat(numeros));
var mixto = ["Jonathan", 14, true];
console.log("Mixto: ".concat(mixto));
var boleanos = [true, false, false, true];
console.log("Bolenanos: ".concat(boleanos));
;
var personas = [
    { nombre: "Jonathan", edad: 66, esDesarrollador: true },
    { nombre: "Kimberly", edad: 25, esDesarrollador: false },
    { nombre: "José", edad: 43, esDesarrollador: true }
];
personas.push({ nombre: "Karla", edad: 19, esDesarrollador: true });
console.log("Personas:", personas);
