// Tipos de datos primitivos
const texto = "hola";                 // string
const numero = 42;                      // number
const booleano = true;                  // boolean (también puede ser false)
const nulo = null;                      // null
const indefinido = undefined;           // undefined
const simbolo = Symbol('id');           // symbol
const grande = 123n;                    // bigint

console.log(typeof texto, texto);         // 'string' "hola"
console.log(typeof numero, numero);       // 'number' 42
console.log(typeof booleano, booleano);   // 'boolean' true
console.log(typeof nulo, nulo);           // 'object' null  ← caso especial
console.log(typeof indefinido, indefinido); // 'undefined' undefined
console.log(typeof simbolo, simbolo);     // 'symbol' Symbol('id')
console.log(typeof grande, grande);       // 'bigint' 123n

// Tipos de datos complejos
const objeto = { nombre: "Juan", edad: 42 }; // propiedades internas con distintos tipos
const arreglo = [1, 2, "tres"];              // puede mezclar numbers y strings
const unaFuncion = function () {               // función como valor
  // acciones según sea el caso
};