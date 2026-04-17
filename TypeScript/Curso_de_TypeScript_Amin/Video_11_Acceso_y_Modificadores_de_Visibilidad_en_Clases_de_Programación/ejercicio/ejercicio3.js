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
exports.Auto = void 0;
var index_1 = require("./index");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, modelo, numeroSerie) {
        return _super.call(this, marca, modelo, numeroSerie) || this;
    }
    Auto.prototype.activarCarro = function () {
        return "Mi ".concat(this.marca, " es modelo ").concat(this.modelo);
    };
    return Auto;
}(index_1.Vehiculo));
exports.Auto = Auto;
var carro = new Auto("Toyota", "Corola", "124");
console.log(carro.activarCarro());
