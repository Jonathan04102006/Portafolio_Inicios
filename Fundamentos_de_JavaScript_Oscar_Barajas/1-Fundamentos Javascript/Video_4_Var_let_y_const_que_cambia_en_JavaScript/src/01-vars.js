// Evitar var por comportamientos inseguros
var bloquesRojos = true;      // booleano
var bloquesRojos = 5;          // redeclaración y cambio de tipo
console.log(bloquesRojos);     // 5

let contador = 0;
let mensaje = 'hola'; // string

// let contador = 5;   // Error: no puedes redeclarar la misma variable.
contador = 5;          // Correcto: puedes reasignar.
console.log(contador); // 5

const PI = 3.14159;
// PI = 4;           // Error: no puedes reasignar una constante.
// const PI = 42;    // Error: no puedes redeclararla.
console.log(PI);      // 3.14159

console.log(nombre);  // undefined por hoisting
var nombre = 'Jonathan';
console.log(nombre);  // 'Jonathan'