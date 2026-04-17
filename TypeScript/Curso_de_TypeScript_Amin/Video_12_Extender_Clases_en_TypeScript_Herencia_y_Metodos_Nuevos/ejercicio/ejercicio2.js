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
exports.Empleado = void 0;
var index_1 = require("./index");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, esDesarrollador, puestoDeEmpleado) {
        var _this = _super.call(this, nombre, edad, esDesarrollador) || this;
        _this.puestoDeEmpleado = puestoDeEmpleado;
        return _this;
    }
    Empleado.prototype.saludar = function () {
        var saludoBase = _super.prototype.saludar.call(this);
        return "".concat(saludoBase, " Trabajo como ").concat(this.puestoDeEmpleado);
    };
    return Empleado;
}(index_1.Persona1));
exports.Empleado = Empleado;
var empleado = new Empleado("Ariel", 19, true, "Freelancer");
console.log(empleado.saludar());
