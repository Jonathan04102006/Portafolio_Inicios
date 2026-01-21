/* Acceso a elementos
Crea un arreglo con al menos 5 elementos de diferentes tipos de datos y muestra en consola:

La longitud del arreglo

El primer elemento

El último elemento
*/
console.log("******************************ejercicio 1 de Arreglos_[Arrays]******************************");
const arreglo = ["Jonathan", 19, "Resident Evil", 2026, "007"];
console.log(arreglo.length);
console.log(arreglo[0]);
console.log(arreglo[4]);

/* Agregar y eliminar elementos
Crea un arreglo con nombres de frutas.

Agrega una fruta al final del arreglo

Elimina el último elemento

Muestra el arreglo después de cada operación
*/
console.log("******************************ejercicio 2 de Arreglos_[Arrays]******************************");
const fruta = ["manzana", "pera", "uva", "mandarina", "sandia"];

console.log(fruta);

fruta.push("fresa");
console.log(`agregando "fresa"`, fruta);

fruta.pop("fresa");
console.log(`eliminado "fresa"`, fruta);

/* Recorrer un arreglo
Crea un arreglo con 5 colores y recórrelo usando forEach para mostrar en consola cada color junto con su posición (índice).
*/
console.log("******************************ejercicio 3 de Arreglos_[Arrays]******************************");
const colores = ["negro", "blanco", "morado", "verde", "blanco"];

colores.forEach(function(index, el) {
    console.log(`<li id=${el}>${index}</li>`)
});