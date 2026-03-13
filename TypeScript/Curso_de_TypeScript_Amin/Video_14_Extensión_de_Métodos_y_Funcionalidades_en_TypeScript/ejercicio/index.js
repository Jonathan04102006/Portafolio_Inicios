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
function mostrarInformacion(dato) {
    var longitud = dato.length;
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
function verificarLongitud(obj, minimo) {
    if (obj.length < minimo) {
        console.log("Error: longitud insuficiente");
        return false;
    }
    else {
        console.log("La longitud es válida");
        return true;
    }
}
console.log(verificarLongitud("Hola", 3));
console.log(verificarLongitud([1, 2], 5));
function obtenerLongitud(coleccion) {
    return "El tipo de dato es: object y la longitud es: ".concat(coleccion.length);
}
var libros = {
    nombre: "Libros de programación",
    length: 8
};
console.log(obtenerLongitud(libros));
