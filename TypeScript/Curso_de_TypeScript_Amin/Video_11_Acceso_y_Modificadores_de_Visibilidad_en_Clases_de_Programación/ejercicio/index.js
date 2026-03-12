"use strict";
exports.__esModule = true;
exports.Vehiculo = exports.Persona = exports.CuentaBancaria = void 0;
/* 🧠 Ejercicio 1: Uso de private y método público de acceso

Crea una clase llamada CuentaBancaria que tenga:

Una propiedad public titular: string

Una propiedad private saldo: number

Un constructor que inicialice ambas propiedades

Un método public depositar(monto: number): void que aumente el saldo

Un método public obtenerSaldo(): number que permita ver el saldo

Un método private validarMonto(monto: number): boolean que impida depósitos negativos

En la implementación:

Crea una instancia.

Intenta acceder directamente a saldo (debe generar error).

Muestra el saldo usando el método público. */
var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    CuentaBancaria.prototype.depositar = function (monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log("Deposito ".concat(monto, " realizado. Saldo actual ").concat(this.saldo, "."));
        }
        else {
            console.log("El monto a depositar deber ser mayor que cero.");
        }
    };
    CuentaBancaria.prototype.obtenerSaldo = function () {
        return this.saldo;
    };
    CuentaBancaria.prototype.validarMonto = function (monto) {
        return monto > 0;
    };
    return CuentaBancaria;
}());
exports.CuentaBancaria = CuentaBancaria;
/* 🧠 Ejercicio 2: Uso de protected con herencia

Modifica la clase Persona para que edad sea protected en lugar de public.

Luego:

Crea una clase Empleado que extienda Persona.

Agrega una propiedad public puesto: string

Crea un método public mostrarInformacion() que pueda acceder a edad (porque es protected)

Intenta acceder a edad desde una instancia fuera de la clase (debe dar error). */
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Persona;
}());
exports.Persona = Persona;
/* 🧠 Ejercicio 3: Diferencia entre public, private y protected

Crea una clase Vehiculo con:

public marca: string

protected modelo: string

private numeroSerie: string

Luego:

Crea una subclase Auto que pueda acceder a modelo pero no a numeroSerie.

Desde el archivo de implementación:

Accede a marca

Intenta acceder a modelo

Intenta acceder a numeroSerie

Explica qué accesos funcionan y cuáles no, y por qué. */
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, numeroSerie) {
        this.marca = marca;
        this.modelo = modelo;
        this.numeroSerie = numeroSerie;
    }
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
