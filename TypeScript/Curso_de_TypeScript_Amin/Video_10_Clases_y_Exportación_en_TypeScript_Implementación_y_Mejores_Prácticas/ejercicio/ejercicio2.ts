import { Persona1 } from "./index";

let persona = new Persona1("Jonathan", 19, true);

console.log(persona);

persona.setEdad(20);

console.log("Nombre: ", persona.getNombre());
console.log("Edad: ", persona.getEdad());