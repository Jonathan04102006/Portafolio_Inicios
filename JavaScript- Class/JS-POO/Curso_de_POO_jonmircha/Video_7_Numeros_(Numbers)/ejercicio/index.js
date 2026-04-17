/* Conversión y suma: Declara una variable numérica con decimales y otra variable tipo string que represente un número. Convierte el string a número y muestra en consola la suma correcta de ambos valores.
*/
console.log("************************ejercicio 1 Numbers************************");
var numero = 1.78;
var numero1 = "5";
console.log(parseFloat(numero1));
console.log(numero + parseFloat(numero1));

/* Redondeo de números: Declara un número con varios decimales y muestra en consola: El número redondeado a 2 decimales El número redondeado a 4 decimales
*/
console.log("************************ejercicio 2 Numbers************************");
let a = 7.9678967;
let b = 4.9888676;
console.log(a.toFixed(2));
console.log(b.toFixed(4));

/* Tipos de datos y operaciones: Declara una variable number y otra string que contenga un número. Muestra en consola: El tipo de dato de cada variable El resultado de sumarlas sin conversión El resultado de sumarlas convirtiendo el string a número
*/
console.log("************************ejercicio 3 Numbers************************");
var c = 50;
var d = "75";
console.log(c + d);
console.log(c + parseFloat(d));