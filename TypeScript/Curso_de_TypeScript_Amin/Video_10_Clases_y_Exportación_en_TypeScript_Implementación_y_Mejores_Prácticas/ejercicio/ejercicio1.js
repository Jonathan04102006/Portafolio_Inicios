"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var persona1 = new index_1.Persona("Ares", 20, false);
var persona2 = new index_1.Persona("Jonathan", 19, true);
console.log(persona1.descripcionProfesional());
console.log(persona2.descripcionProfesional());
