/* Declara una variable sin asignarle ningún valor, muéstrala en consola y verifica su tipo usando typeof.
 */
console.log(`*************ejercicio 1 de undefined, null y NanN*************`);
var vacio;
console.log(typeof vacio);

/* Declara una variable con valor null, muéstrala en consola y compara su tipo con el de una variable undefined.
*/
console.log(`*************ejercicio 2 de undefined, null y NanN*************`);
var nada = null;
console.log(vacio, nada);

/* Realiza una operación matemática inválida que genere NaN, muéstrala en consola y verifica si el resultado es NaN usando una función adecuada.
*/
console.log(`*************ejercicio 3 de undefined, null y NanN*************`);
let a = 0 / 0;
console.log(a);