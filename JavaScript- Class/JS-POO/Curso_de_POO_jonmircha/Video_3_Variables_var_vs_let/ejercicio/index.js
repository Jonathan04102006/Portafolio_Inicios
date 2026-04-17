/* Ejercicio 1: Ámbito de bloque con var
Declara una variable usando var fuera de un bloque {} con un valor inicial.
Luego, dentro del bloque, vuelve a declarar la misma variable con otro valor.
Muestra el valor de la variable antes, dentro y después del bloque usando console.log.*/

console.log("************var************");
var nombre = "Jonathan";
console.log(nombre);
{
    var nombre = "Ariel";
    console.log(nombre);
}
console.log(nombre);

/* Ejercicio 2: Ámbito de bloque con let
Declara una variable usando let fuera de un bloque {} con un valor inicial.
Dentro del bloque, declara otra variable con el mismo nombre usando let y asígnale un valor diferente.
Muestra el valor de la variable antes, dentro y después del bloque. 
*/
console.log("************let************");
let nombre1 = "Jonathan";
console.log(nombre1);
{
    let nombre1 = "Ariel";
    console.log(nombre1);
}
console.log(nombre1);

/* Ejercicio 3: Comparación entre var y let
Declara una variable con var y otra con let, ambas con el mismo nombre pero en bloques separados.
Imprime los valores dentro y fuera de los bloques para observar cuál de las dos mantiene su valor original y cuál no.
*/
console.log("************var y let************");
var nombre2 = "Ariel";
let nombre3 = "Jona";
console.log(nombre2, nombre3);
{
    var nombre2 = "Ares";    
    let nombre3 = "Jony";
    console.log(nombre2, nombre3);
}
console.log(nombre2, nombre3);