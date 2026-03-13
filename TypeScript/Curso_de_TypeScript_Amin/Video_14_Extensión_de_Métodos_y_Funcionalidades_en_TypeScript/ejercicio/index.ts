/* Ejercicio 1: Función que muestra longitud y contenido
Objetivo

Crear una función genérica que solo acepte datos que tengan propiedad length, pero además muestre el contenido recibido.

Instrucciones

Crea una función llamada mostrarInformacion.

Debe usar un genérico <T extends { length: number }>.

Dentro de la función:

Guarda la longitud en una variable.

Muestra el contenido recibido.

Muestra la longitud.

Retorna la longitud.

Prueba la función con:

Un string

Un array de números

Ejemplo esperado de uso
console.log(mostrarInformacion("TypeScript"));
console.log(mostrarInformacion([10, 20, 30])); */
function mostrarInformacion<T extends { length: number }>(dato: T): number {
    const longitud = dato.length;
    console.log("Contenido:", dato);
    console.log("Longitud:", longitud);
    return longitud;
}

console.log(mostrarInformacion("TypeScript"));
console.log(mostrarInformacion([10, 20, 30]));

/* Ejercicio 2: Función que valida longitud mínima
Objetivo

Extender la funcionalidad creando una función que verifique si un dato tiene una longitud mínima requerida.

Instrucciones

Crea una función llamada verificarLongitud.

Debe usar el genérico:

<T extends { length: number }>

La función recibirá:

obj → el objeto con longitud

minimo → número mínimo requerido

Si la longitud es menor que el mínimo, mostrar un mensaje de error.

Si cumple la condición, mostrar que la longitud es válida.

Retornar true o false.

Ejemplo esperado
console.log(verificarLongitud("Hola", 3));
console.log(verificarLongitud([1,2], 5));

Salida esperada aproximada:

La longitud es válida
true

Error: longitud insuficiente
false */
function verificarLongitud<T extends { length: number }>(obj: T, minimo: number): boolean{
    if (obj.length < minimo) {
        console.log("Error: longitud insuficiente");
        return false;
    } else {
        console.log("La longitud es válida");
        return true;
    }
}

console.log(verificarLongitud("Hola", 3));
console.log(verificarLongitud([1,2], 5));

/* Ejercicio 3: Usar objetos personalizados con length
Objetivo

Aplicar la extensión de funcionalidades usando objetos creados por ti que tengan propiedad length.

Instrucciones

Crea una interfaz llamada Coleccion.

Debe tener:

interface Coleccion {
    nombre: string;
    length: number;
}

Crea un objeto que implemente esa interfaz.

Usa la función obtenerLongitud de la clase para obtener la longitud.

Imprime el resultado en consola.

Ejemplo de uso esperado
let libros: Coleccion = {
    nombre: "Libros de programación",
    length: 8
};

console.log(obtenerLongitud(libros));

Salida esperada aproximada:

El tipo de dato es: object y la longitud es: 8 */
interface Coleccion {
    nombre: string;
    length: number;
}

function obtenerLongitud(coleccion: Coleccion): string {
    return `El tipo de dato es: object y la longitud es: ${coleccion.length}`;
}

let libros: Coleccion = {
    nombre: "Libros de programación",
    length: 8
};

console.log(obtenerLongitud(libros));