/*Crea dos variables (nombre y edad) y muestra un mensaje en consola usando Template Strings que diga: "Hola, mi nombre es ___ y tengo ___ años."
*/
console.log("**********************ejercicio 1 Template Strings**********************");
var nombre = "Jonathan";
var edad = 19;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

/*Declara dos números (precio y cantidad) y muestra en consola un mensaje usando Template Strings que indique el total a pagar, por ejemplo: "El total a pagar es: $___"
*/
console.log("**********************ejercicio 1 Template Strings**********************");
const precio = 13.99;
const cantidad = 2;
console.log(`El total a pagar es: $${precio} por las ${cantidad} unidades.`)

/*Usando Template Strings, crea una variable que contenga una lista <ul> con al menos 3 elementos <li> (pueden ser frutas, colores o lo que quieras) y muéstrala en consola.
*/
var listado = `<ul>
    <li>Manzana</li>
    <li>Pera</li>
    <li>Uva</li>
</ul>`
console.log(listado);