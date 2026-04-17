import { Empleado } from "./empleado";

let empleado = new Empleado("Ariel", 19, true, "Desarrollador Jr.");

console.log(empleado.saludar());
console.log(empleado.obtenerInfo());

console.log("Nombre: ", empleado.nombre);