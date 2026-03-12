"use strict";
exports.__esModule = true;
exports.Empleado = exports.Persona1 = exports.Persona = void 0;
/* Ejercicio 1: Crear una nueva clase que extienda Persona
Objetivo

Practicar herencia básica en TypeScript creando una nueva clase que herede propiedades y métodos de Persona.

Instrucciones

Crea un archivo llamado estudiante.ts.

Importa la clase Persona.

Crea una clase llamada Estudiante que extienda de Persona.

Agrega una nueva propiedad pública llamada carrera de tipo string.

En el constructor debes:

Recibir nombre, edad, esDesarrollador y carrera.

Llamar al constructor padre usando super().

Crea un método público llamado mostrarCarrera() que retorne un string indicando la carrera del estudiante.

Ejemplo esperado (uso en main.ts)
import { Estudiante } from "./estudiante";

let estudiante = new Estudiante("Carlos", 20, false, "Ingeniería en Sistemas");

console.log(estudiante.saludar());
console.log(estudiante.mostrarCarrera());
Resultado esperado en consola
Hola, mi nombre es: Carlos y tengo 20 años.
Estoy estudiando la carrera de Ingeniería en Sistemas */
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrolador = esDesarrollador;
    }
    return Persona;
}());
exports.Persona = Persona;
/* Ejercicio 2: Sobrescribir un método de la clase padre
Objetivo

Aprender a modificar el comportamiento de un método heredado usando override y super.

Instrucciones

Modifica la clase Empleado.

Sobrescribe el método saludar().

El nuevo método debe:

Llamar primero al método saludar() de Persona usando super.saludar().

Agregar información del puesto.

El mensaje final debe incluir:

nombre

edad

puesto del empleado

Ejemplo esperado
let empleado = new Empleado("Maria", 25, true, "Backend Developer");

console.log(empleado.saludar());
Resultado esperado
Hola, mi nombre es: Maria y tengo 25 años. Trabajo como Backend Developer */
var Persona1 = /** @class */ (function () {
    function Persona1(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrolador = esDesarrollador;
    }
    Persona1.prototype.saludar = function () {
        return "Hola, mi nombre es: ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os");
    };
    return Persona1;
}());
exports.Persona1 = Persona1;
/* Ejercicio 3: Crear un nuevo método en la clase hija
Objetivo

Practicar agregar nuevos métodos a una clase que hereda de otra.

Instrucciones

En la clase Empleado, crea un método llamado descripcionCompleta().

Este método debe:

Usar this.nombre

Usar this.obtenerEdad()

Usar this.puesto

Debe retornar un mensaje más detallado sobre el empleado.

Ejemplo esperado
let empleado = new Empleado("Luis", 30, true, "Frontend Developer");

console.log(empleado.descripcionCompleta());
Resultado esperado
Mi nombre es Luis, tengo 30 años y mi puesto es Frontend Developer */
var Empleado = /** @class */ (function () {
    function Empleado(nombre, edad, esDesarrollador, puesto) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
        this.puesto = puesto;
    }
    Empleado.prototype.obtenerEdad = function () {
        return this.edad;
    };
    Empleado.prototype.descripcionCompleta = function () {
        return "Mi nombre es ".concat(this.nombre, ", tengo ").concat(this.obtenerEdad(), " a\u00F1os y mi puesto es ").concat(this.puesto);
    };
    return Empleado;
}());
exports.Empleado = Empleado;
