"use strict";
exports.__esModule = true;
exports.division = exports.multiplicacion = exports.resta = exports.suma = void 0;
function suma(numero1, numero2) {
    return numero1 + numero2;
}
exports.suma = suma;
function resta(numero1, numero2) {
    return numero1 - numero2;
}
exports.resta = resta;
function multiplicacion(numero1, numero2) {
    return numero1 * numero2;
}
exports.multiplicacion = multiplicacion;
function division(numero1, numero2) {
    return numero1 / numero2;
}
exports.division = division;
var sumar = suma(5, 6);
console.log(sumar);
