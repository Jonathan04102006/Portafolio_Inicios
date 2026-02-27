"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var persona = new index_1.Persona1("Jonathan", 19, true);
console.log(persona);
persona.setEdad(20);
console.log("Nombre: ", persona.getNombre());
console.log("Edad: ", persona.getEdad());
