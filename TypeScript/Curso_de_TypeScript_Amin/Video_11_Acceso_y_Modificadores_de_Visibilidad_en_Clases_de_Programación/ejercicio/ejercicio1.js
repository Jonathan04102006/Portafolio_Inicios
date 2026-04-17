"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var cuenta = new index_1.CuentaBancaria("Ariel", 1000);
console.log("Saldo actual: ".concat(cuenta.obtenerSaldo()));
cuenta.depositar(500);
cuenta.depositar(-200);
console.log("Saldo actual: ".concat(cuenta.obtenerSaldo()));
