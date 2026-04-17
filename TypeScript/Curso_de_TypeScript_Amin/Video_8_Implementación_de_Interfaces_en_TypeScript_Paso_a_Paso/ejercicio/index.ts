/* 🟢 Ejercicio 1: Interfaz con Método

Crea una interfaz llamada Animal que tenga las siguientes propiedades:

nombre: string

edad: number

sonido(): string

Luego:

Crea un objeto que implemente la interfaz.

Haz que el método sonido() retorne un mensaje como: "El perro hace guau".

Muestra el resultado en consola. */
console.log(`*********************ejercicio 1 de Implementación de Interfaces en TypeScript Paso a Paso en TypeScript*********************`);
interface Animal {
    nombre: string;
    edad: number;
    sonido(): string
}

const perro: Animal = {
    nombre: "Roshan",
    edad: 12,
    sonido() {
        return `Guau!!`
    }
}

console.log("Mascota: ",perro.nombre,"tiene: ", perro.edad,"años", perro.sonido());

/* 🟢 Ejercicio 2: Interfaz para Arreglo de Objetos

Crea una interfaz llamada Producto con:

nombre: string

precio: number

disponible: boolean

Luego:

Declara un arreglo tipado como Producto[].

Agrega al menos 3 productos diferentes.

Recorre el arreglo y muestra en consola solo los productos que estén disponibles. */
console.log(`*********************ejercicio 2 de OImplementación de Interfaces en TypeScript Paso a Paso en TypeScript*********************`);
interface Producto {
    nombre: string;
    precio: number;
    disponibe: boolean;
}

let productos: Producto[] = [
    { nombre: "queso duro", precio: 2.99, disponibe: true},
    { nombre: "queso rayado", precio: 2.50, disponibe: true},
    { nombre: "quesillo", precio: 4.99, disponibe: true}
];

console.log("Mis productos: ", productos);

/* 🟢 Ejercicio 3: Interfaz para Función

Crea una interfaz llamada OperacionMatematica que represente una función que:

Reciba tres parámetros numéricos.

Retorne un número.

Luego:

Implementa una función llamada multiplicarTresNumeros usando esa interfaz.

Haz que la función multiplique los tres números.

Muestra el resultado en consola. */
console.log(`*********************ejercicio 3 de OImplementación de Interfaces en TypeScript Paso a Paso en TypeScript*********************`);
interface OperacionMatematica {
    (n1: number, n2: number, n3: number): number
}

let multiplicarTresNumeros: OperacionMatematica = (n1: number, n2: number, n3: number):number => {
    return n1 * n2 * n3;
};

console.log("Resultado de la multiplicacion: ", multiplicarTresNumeros(5, 7, 9));