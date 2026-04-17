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
exports.__esModule = true;
exports.Estudiante = void 0;
var index_1 = require("./index");
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, edad, esDesarrollador, carrera) {
        var _this = _super.call(this, nombre, edad, esDesarrollador) || this;
        _this.carrera = carrera;
        return _this;
    }
    Estudiante.prototype.saludar = function () {
        return "Hola, mi nombre es: ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os");
    };
    Estudiante.prototype.mostrarCarrera = function () {
        return "Estoy estudiando la carrera de ".concat(this.carrera);
    };
    return Estudiante;
}(index_1.Persona));
exports.Estudiante = Estudiante;
var estudiante = new Estudiante("Jonathan", 19, true, "Ingeniería en Sistemas");
console.log(estudiante.saludar());
console.log(estudiante.mostrarCarrera());
