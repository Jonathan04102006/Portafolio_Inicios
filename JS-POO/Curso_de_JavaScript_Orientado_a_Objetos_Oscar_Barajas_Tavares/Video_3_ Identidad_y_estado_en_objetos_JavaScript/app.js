/* Resumen
Comprender cómo JavaScript maneja la memoria es clave para escribir código confiable. La diferencia entre primitivos por valor y objetos por referencia, junto con los conceptos de identidad y estado, explica por qué dos objetos «iguales» pueden no ser el mismo y cómo pequeñas modificaciones pueden propagarse por toda la aplicación.

¿Cómo funcionan primitivos y objetos en JavaScript?

En el mundo físico, dos ladrillos de Lego rojos idénticos no son el mismo objeto: ocupan lugares distintos. En JavaScript sucede algo similar con los objetos por referencia. En cambio, los primitivos (como el número 5 o el string "hola") se comparan por su valor: dos variables con 5 contienen el mismo valor, indistinguible para el lenguaje.

Los primitivos funcionan por valor. Dos variables con 5 son equivalentes.
Los objetos funcionan por referencia. La variable guarda una dirección en memoria.
La comparación estricta === de objetos compara direcciones, no contenido.

// Primitivos por valor
let a = 5;
let b = 5;
console.log(a === b); // true

// Objetos por referencia
const x = { name: 'apple' };
const y = { name: 'apple' };
console.log(x === y); // false
¿Qué es pasar por valor vs por referencia?

Pasar un primitivo a una función crea una copia de su valor. Pasar un objeto pasa su referencia: la función puede modificar el mismo objeto al que apunta la variable externa.

¿Qué significan identidad y estado en un objeto?

Dos ideas esenciales sostienen el modelo de memoria de JavaScript: identidad y estado. La identidad es la ubicación única e inmutable en memoria donde vive un objeto. El estado son sus propiedades y valores, que pueden cambiar con el tiempo.

Identidad: la «dirección postal» del objeto en memoria, única e inmutable.
Estado: los «muebles» internos: propiedades que puedes añadir, cambiar o eliminar.
Cambia el estado, no la identidad: la dirección sigue siendo la misma.
¿Cómo se entiende con la metáfora de una casa?

Piensa en una casa con dirección calle Falsa 123. Puedes mover el sofá, pintar paredes o tirar un muro: el estado cambia. Pero la dirección (identidad) permanece. Así, dos objetos con el mismo estado no comparten la misma identidad.

¿Por qué la comparación estricta de objetos da false?

Aunque dos objetos «se vean iguales» en código, su identidad difiere si fueron creados por separado. Por eso, a === b es false cuando a y b son objetos distintos, aunque su contenido coincida.


const a = { name: 'apple' };
const b = { name: 'apple' };
console.log(a === b); // false: distintas identidades
¿Qué ocurre con referencias compartidas en variables y funciones?

El error más común es copiar referencias creyendo que se copian objetos. Si asignas un objeto a otra variable, ambas apuntan a la misma identidad. Cambiar una afecta a la otra.


// Referencias compartidas
const hero = { vida: 100 };
const heroActual = hero; // copia la referencia, no el contenido
heroActual.vida = 50;
console.log(hero.vida); // 50
Pasar un objeto a una función no crea una copia aislada: se pasa la misma referencia. Cualquier cambio dentro de la función afecta al original.


function ajustarVida(h) {
  h.vida = 50; // modifica el estado del mismo objeto
}

const hero2 = { vida: 100 };
ajustarVida(hero2);
console.log(hero2.vida); // 50
En resumen práctico: entiende que la identidad es única e inmutable, y el estado es mutable y compartido cuando se reutiliza la misma referencia. Esta distinción evita sorpresas y horas de depuración cuando los datos «cambian solos» en otra parte del programa. */