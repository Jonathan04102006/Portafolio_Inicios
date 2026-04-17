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
export class CuentaBancaria {
    public titular: string;
    private saldo: number;

    constructor ( titular: string, saldo: number ) {
        this.titular = titular;
        this.saldo = saldo;
    }

    public depositar( monto: number ): void{
        if(monto > 0){
            this.saldo += monto;
            console.log(`Deposito ${monto} realizado. Saldo actual ${this.saldo}.`);
        }else{
            console.log(`El monto a depositar deber ser mayor que cero.`);
        }
    }

    public obtenerSaldo(): number {
        return this.saldo;
    }

    private validarMonto(monto: number): boolean {
        return monto > 0;
    }
}

/* 🧠 Ejercicio 2: Uso de protected con herencia

Modifica la clase Persona para que edad sea protected en lugar de public.

Luego:

Crea una clase Empleado que extienda Persona.

Agrega una propiedad public puesto: string

Crea un método public mostrarInformacion() que pueda acceder a edad (porque es protected)

Intenta acceder a edad desde una instancia fuera de la clase (debe dar error). */
export class Persona {
    public nombre: string;
    public edad: number;

    constructor ( nombre: string, edad: number ) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

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

export class Vehiculo {
    public marca: string;
    protected modelo: string;
    private numeroSerie: string;

    constructor ( marca: string, modelo: string, numeroSerie: string ) {
        this.marca = marca;
        this.modelo = modelo;
        this.numeroSerie = numeroSerie;
    }
}