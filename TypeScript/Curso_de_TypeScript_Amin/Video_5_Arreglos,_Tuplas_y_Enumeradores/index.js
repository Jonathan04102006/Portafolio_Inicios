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
//Tupla
var persona;
persona = ["Jona", 19, true];
console.log("Persona: ", persona);
var personasTupla = [];
personasTupla.push(["Ariel", 19, true]);
personasTupla.push(["Jorge", 39, false]);
personasTupla.push(["Pedro", 21, false]);
personasTupla.forEach(function (persona) {
    console.log("Persona: ", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var esDesarrollador = persona[2];
    console.log("Nombre: ", nombre);
    console.log("Edad: ", edad);
    console.log("esDesarrollador: ", esDesarrollador);
});
// Enumerados
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["Lunes"] = 0] = "Lunes";
    DiaDeLaSemana[DiaDeLaSemana["Martes"] = 1] = "Martes";
    DiaDeLaSemana[DiaDeLaSemana["Miercoles"] = 2] = "Miercoles";
    DiaDeLaSemana[DiaDeLaSemana["Jueves"] = 3] = "Jueves";
    DiaDeLaSemana[DiaDeLaSemana["Viernes"] = 4] = "Viernes";
    DiaDeLaSemana[DiaDeLaSemana["Sabado"] = 5] = "Sabado";
    DiaDeLaSemana[DiaDeLaSemana["Domingo"] = 6] = "Domingo";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
var dia = DiaDeLaSemana.Martes;
console.log("Día: ", DiaDeLaSemana[dia]);
