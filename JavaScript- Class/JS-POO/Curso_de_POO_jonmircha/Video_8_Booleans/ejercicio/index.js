/* Declara dos variables booleanas y muestra en consola su valor y su tipo de dato usando typeof.
*/
console.log("*******************ejercicio 1 de booleans*******************");
let verdadero = true;
let falso = false;
console.log(verdadero, falso);
console.log(typeof verdadero, typeof falso);

/* Convierte los siguientes valores a booleano y muestra el resultado en consola: 0, 1, "", "Hola", null.
*/
console.log("*******************ejercicio 2 de booleans*******************");
let a = 0;
let b = 1;
let c = "";
let d = "Hola";
let e = null;
console.log(Boolean(a),
Boolean(b),
Boolean(c),
Boolean(d),
Boolean(e));

/* Escribe una condición que evalúe una variable booleana y muestre un mensaje distinto en consola según si su valor es true o false.
*/
console.log("*******************ejercicio 3 de booleans*******************");
let edad = 17;
if (edad >= 18){
    console.log(`Es verdadero es mayor de edad.`);
} else {
    console.log(`Es falso es menor de edad.`);
}