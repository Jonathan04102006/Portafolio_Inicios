import { Persona } from "./index";

let persona1 = new Persona("Ares", 20, false);
let persona2 = new Persona("Jonathan", 19, true);

console.log(persona1.descripcionProfesional());
console.log(persona2.descripcionProfesional());