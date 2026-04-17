/* 🧩 Ejercicio 1: Propiedades Opcionales

Crea una interfaz llamada Producto con las siguientes propiedades:

nombre: string

precio: number

descripcion?: string (opcional)

disponible?: boolean (opcional)

Luego:

Crea un objeto que incluya todas las propiedades.

Crea otro objeto que solo incluya las obligatorias.

Imprime ambos en consola. */
console.log("*****************************ejrercicio 1 de Propiedades y Extensiones en Interfaces de TypeScript en TS*****************************");
var producto = {
    nombre: "pescado",
    precio: 4.99,
};
console.log(producto);
var productoEditado = {
    nombre: "pescado",
    precio: 4.99,
    descripcion: "Es grande y rojo",
    disponible: true
};
console.log(productoEditado);
/* 🔒 Ejercicio 2: Propiedades Readonly

Crea una interfaz llamada CuentaBancaria con:

readonly numeroCuenta: string

readonly titular: string

saldo: number

Luego:

Crea un objeto con esa interfaz.

Modifica únicamente el saldo.

Intenta modificar una propiedad readonly y observa qué ocurre. */
console.log("*****************************ejrercicio 2 de Propiedades y Extensiones en Interfaces de TypeScript en TS*****************************");
var cliente = {
    numeroCuenta: "123456",
    titular: "Kennedy",
    saldo: 15000
};
/* cliente.saldo = 4000; index.ts:82:9 - error TS2540: Cannot assign to 'saldo' because it is a read-only property.*/
console.log(cliente);
/* 🧬 Ejercicio 3: Extensión de Interfaces

Crea una interfaz llamada Vehiculo con:

marca: string

modelo: string

anio: number

Crea otra interfaz llamada Auto que extienda Vehiculo y agregue:

puertas: number

esAutomatico: boolean

Crea un objeto de tipo Auto e imprímelo en consola. */
console.log("*****************************ejrercicio 3 de Propiedades y Extensiones en Interfaces de TypeScript en TS*****************************");
var carro = {
    marca: "Toyoya",
    modelo: "Corola",
    anio: 2005,
    puertas: 4,
    esAutomatico: true
};
console.log(carro);
