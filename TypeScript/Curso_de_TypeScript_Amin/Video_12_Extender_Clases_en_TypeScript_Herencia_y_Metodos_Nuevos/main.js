"use strict";
exports.__esModule = true;
var empleado_1 = require("./empleado");
var empleado = new empleado_1.Empleado("Ariel", 19, true, "Desarrollador Jr.");
console.log(empleado.saludar());
console.log(empleado.obtenerInfo());
console.log("Nombre: ", empleado.nombre);
