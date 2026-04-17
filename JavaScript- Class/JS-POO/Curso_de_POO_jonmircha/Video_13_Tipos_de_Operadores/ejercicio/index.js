/*Operadores aritméticos
Declara dos variables numéricas y muestra en consola el resultado de la suma, resta, multiplicación, división y módulo entre ellas.
*/
console.log(`*****************ejercicio 1 de Tipos de operadores*****************`);
var a = 25;
var b = 100;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

/*Operadores de comparación
Declara una variable con un número y otra con el mismo valor pero como string. Compara ambas usando == y === y muestra los resultados en consola.
*/
console.log(`*****************ejercicio 2 de Tipos de operadores*****************`);
var c = 5;
var d = "5";

console.log(c == d);
console.log(c === d);

/*Operadores lógicos e incremento/decremento
Declara una variable numérica, aplícale incremento y decremento (pre y post), y luego evalúa una condición lógica usando && u || para mostrar si el resultado final cumple una condición dada.
*/
console.log(`*****************ejercicio 3 de Tipos de operadores*****************`);
var e = 4;

e++;
console.log(e);
++e;
console.log(e);

e--;
console.log(e);
--e;
console.log(e);

console.log((4 === "4") || (4 === 4));
console.log((4 === "4") || ("4" === 4));

console.log((4 === 4) && (4 === 4));
console.log((4 === 4) && (4 === "4"));