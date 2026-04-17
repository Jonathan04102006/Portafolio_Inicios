"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = exports.Persona1 = exports.Persona = void 0;
/* 🧩 Ejercicio 1: Agregar un Método Nuevo a la Clase

Modifica la clase Persona para:

Agregar un nuevo método llamado descripcionProfesional().

Este método debe:

Retornar "Soy desarrollador" si esDesarrollador es true.

Retornar "No soy desarrollador" si es false.

Luego:

Importa la clase en implementacion.ts.

Crea dos objetos Persona con diferentes valores.

Imprime en consola el resultado del nuevo método. */
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    Persona.prototype.descripcionProfesional = function () {
        if (this.esDesarrollador) {
            return "Hola soy ".concat(this.nombre, ", tengo ").concat(this.edad, " a\u00F1os y soy desarrollador");
        }
        else {
            return "Hola soy ".concat(this.nombre, ", tengo ").concat(this.edad, " a\u00F1os y no soy desarrollador");
        }
    };
    return Persona;
}());
exports.Persona = Persona;
/* 🧩 Ejercicio 2: Encapsulamiento y Buenas Prácticas

Refactoriza la clase Persona aplicando buenas prácticas:

Convierte las propiedades en private.

Crea métodos get para obtener nombre y edad.

Crea un método set para modificar la edad.

Evita que la edad pueda ser negativa (validación dentro del setter).

Luego:

En implementacion.ts, crea una persona.

Modifica su edad usando el setter.

Muestra los datos usando los getters. */
var Persona1 = /** @class */ (function () {
    function Persona1(nombre, edad, esDesarrolador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrolador;
    }
    Persona1.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona1.prototype.getEdad = function () {
        return this.edad;
    };
    Persona1.prototype.setEdad = function (nuevaEdad) {
        if (nuevaEdad < 0) {
            throw new Error("La edad no puede ser negativa");
        }
    };
    return Persona1;
}());
exports.Persona1 = Persona1;
/* 🧩 Ejercicio 3: Exportar Múltiples Clases

Crea una nueva clase llamada Empleado en index.ts que:

Extienda de Persona.

Agregue una nueva propiedad: salario.

Sobrescriba el método saludar() para que también mencione el salario.

Luego:

Exporta ambas clases.

En implementacion.ts, importa las clases.

Crea un objeto Empleado.

Llama al método saludar() y verifica que use la versión sobrescrita. */
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, esDesarrollador, salario) {
        var _this = _super.call(this, nombre, edad, esDesarrollador) || this;
        _this.salario = salario;
        return _this;
    }
    Empleado.prototype.saludar = function () {
        return "".concat(_super.prototype.descripcionProfesional.call(this), " y mi salario es de $").concat(this.salario, ". ");
    };
    return Empleado;
}(Persona));
exports.Empleado = Empleado;
